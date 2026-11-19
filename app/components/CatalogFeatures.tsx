"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";

type ContentType = "movie" | "series";
type CatalogContextValue = {
  views: Record<string, number>;
  ready: boolean;
  loadError: boolean;
  viewErrors: Set<string>;
  retryLoad: () => void;
  trackView: (type: ContentType, slug: string, eventId: string) => Promise<void>;
};

const CatalogContext = createContext<CatalogContextValue | null>(null);
const itemKey = (type: ContentType, slug: string) => `${type}:${slug}`;
const METRICS_CACHE_MS = 30_000;
let metricsCache: { expiresAt: number; metrics: { content_type: ContentType; slug: string; view_count: number }[] } | null = null;
let metricsRequest: Promise<{ content_type: ContentType; slug: string; view_count: number }[]> | null = null;

async function loadMetrics() {
  if (metricsCache && metricsCache.expiresAt > Date.now()) return metricsCache.metrics;
  if (!metricsRequest) {
    metricsRequest = (async () => {
      const response = await fetch("/api/catalog", { cache: "no-store" });
      if (!response.ok) throw new Error("Catalog unavailable");
      const data = await response.json() as { metrics: { content_type: ContentType; slug: string; view_count: number }[] };
      metricsCache = { metrics: data.metrics, expiresAt: Date.now() + METRICS_CACHE_MS };
      return data.metrics;
    })().finally(() => { metricsRequest = null; });
  }
  return metricsRequest;
}

export function CatalogFeaturesProvider({ children }: { children: React.ReactNode }) {
  const [views, setViews] = useState<Record<string, number>>({});
  const [ready, setReady] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [viewErrors, setViewErrors] = useState<Set<string>>(new Set());
  const [loadAttempt, setLoadAttempt] = useState(0);
  useEffect(() => {
    let cancelled = false;
    async function loadCatalog() {
      try {
        const metrics = await loadMetrics();
        if (cancelled) return;
        setViews(Object.fromEntries(metrics.map((item) => [itemKey(item.content_type, item.slug), Number(item.view_count)])));
      } catch {
        if (!cancelled) setLoadError(true);
      } finally {
        if (!cancelled) setReady(true);
      }
    }
    void loadCatalog();
    return () => { cancelled = true; };
  }, [loadAttempt]);

  const retryLoad = useCallback(() => {
    setReady(false);
    setLoadError(false);
    setLoadAttempt((attempt) => attempt + 1);
  }, []);

  const trackView = useCallback(async (type: ContentType, slug: string, eventId: string) => {
    const key = itemKey(type, slug);
    for (let attempt = 0; attempt < 2; attempt += 1) {
      try {
        const response = await fetch("/api/catalog/view", {
          method: "POST", headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ contentType: type, slug, eventId }),
        });
        if (!response.ok) continue;
        const data = await response.json() as { views: number };
        setViews((current) => ({ ...current, [key]: data.views }));
        if (metricsCache) {
          metricsCache = {
            expiresAt: metricsCache.expiresAt,
            metrics: metricsCache.metrics.map((item) => item.content_type === type && item.slug === slug
              ? { ...item, view_count: data.views }
              : item),
          };
        }
        setViewErrors((current) => { const next = new Set(current); next.delete(key); return next; });
        return;
      } catch {
        // Reuse the same event ID on retry so the database can deduplicate it.
      }
    }
    setViewErrors((current) => new Set(current).add(key));
  }, []);

  const value = useMemo(() => ({ views, ready, loadError, viewErrors, retryLoad, trackView }), [views, ready, loadError, viewErrors, retryLoad, trackView]);
  return <CatalogContext.Provider value={value}>{children}</CatalogContext.Provider>;
}

export function useCatalog() {
  return useContext(CatalogContext);
}

export function ViewCount({ contentType, slug }: { contentType: ContentType; slug: string }) {
  const catalog = useCatalog();
  const key = itemKey(contentType, slug);
  const count = catalog?.views[key] ?? 0;
  if (!catalog?.ready || catalog.loadError || catalog.viewErrors.has(key)) return <span className="text-xs text-white/50" title="View count unavailable">— views</span>;
  const formatted = count >= 1000 ? `${(count / 1000).toFixed(count >= 10000 ? 0 : 1).replace(/\.0$/, "")}K` : count.toLocaleString();
  return <span className="inline-flex items-center gap-1 text-xs text-white/70" aria-label={`${count.toLocaleString()} views`}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>{formatted}</span>;
}

export function DetailViewTracker({ contentType, slug }: { contentType: ContentType; slug: string }) {
  const catalog = useCatalog();
  const trackView = catalog?.trackView;
  const visitRef = useRef<{ key: string; eventId: string } | null>(null);
  useEffect(() => {
    if (!trackView) return;
    const key = itemKey(contentType, slug);
    // Reuse the ID across Strict Mode's effect cleanup/replay, but create a
    // fresh ID when this tracker mounts for a different detail visit.
    if (!visitRef.current || visitRef.current.key !== key) {
      visitRef.current = { key, eventId: window.crypto.randomUUID() };
    }
    const eventId = visitRef.current.eventId;
    void trackView(contentType, slug, eventId);
  }, [trackView, contentType, slug]);
  return null;
}

