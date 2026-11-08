"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";

type ContentType = "movie" | "series";
type Favorite = { content_type: ContentType; slug: string };
type CatalogContextValue = {
  views: Record<string, number>;
  favorites: Set<string>;
  ready: boolean;
  loadError: boolean;
  viewErrors: Set<string>;
  retryLoad: () => void;
  toggleFavorite: (type: ContentType, slug: string, favorite: boolean) => Promise<void>;
  trackView: (type: ContentType, slug: string, eventId: string) => Promise<void>;
};

const CatalogContext = createContext<CatalogContextValue | null>(null);
const itemKey = (type: ContentType, slug: string) => `${type}:${slug}`;

function getVisitorId() {
  const key = "oshakur:visitor-id";
  let id = window.localStorage.getItem(key);
  if (!id) {
    id = window.crypto.randomUUID();
    window.localStorage.setItem(key, id);
  }
  return id;
}

export function CatalogFeaturesProvider({ children }: { children: React.ReactNode }) {
  const [views, setViews] = useState<Record<string, number>>({});
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [ready, setReady] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [viewErrors, setViewErrors] = useState<Set<string>>(new Set());
  const [loadAttempt, setLoadAttempt] = useState(0);
  const visitorId = useRef<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function loadCatalog() {
      try {
        visitorId.current = getVisitorId();
        const response = await fetch(`/api/catalog?visitorId=${encodeURIComponent(visitorId.current)}`);
        if (!response.ok) throw new Error("Catalog unavailable");
        const data = await response.json() as { metrics: { content_type: ContentType; slug: string; view_count: number }[]; favorites: Favorite[] };
        if (cancelled) return;
        setViews(Object.fromEntries(data.metrics.map((item) => [itemKey(item.content_type, item.slug), Number(item.view_count)])));
        setFavorites(new Set(data.favorites.map((item) => itemKey(item.content_type, item.slug))));
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

  const toggleFavorite = useCallback(async (type: ContentType, slug: string, favorite: boolean) => {
    let id: string;
    try {
      id = visitorId.current ?? getVisitorId();
    } catch (error) {
      throw error;
    }
    visitorId.current = id;
    const key = itemKey(type, slug);
    const wasFavorite = favorites.has(key);
    setFavorites((current) => {
      const updated = new Set(current);
      if (favorite) updated.add(key); else updated.delete(key);
      return updated;
    });
    try {
      const response = await fetch("/api/catalog", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ visitorId: id, contentType: type, slug, favorite }),
      });
      if (!response.ok) throw new Error("Unable to save favorite");
      const result = await response.json() as { favorite?: unknown };
      if (result.favorite !== favorite) throw new Error("Favorite change could not be confirmed");
    } catch (error) {
      setFavorites((current) => {
        const updated = new Set(current);
        if (wasFavorite) updated.add(key); else updated.delete(key);
        return updated;
      });
      throw error;
    }
  }, [favorites]);

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
        setViewErrors((current) => { const next = new Set(current); next.delete(key); return next; });
        return;
      } catch {
        // Reuse the same event ID on retry so the database can deduplicate it.
      }
    }
    setViewErrors((current) => new Set(current).add(key));
  }, []);

  const value = useMemo(() => ({ views, favorites, ready, loadError, viewErrors, retryLoad, toggleFavorite, trackView }), [views, favorites, ready, loadError, viewErrors, retryLoad, toggleFavorite, trackView]);
  return <CatalogContext.Provider value={value}>{children}</CatalogContext.Provider>;
}

export function useCatalog() {
  return useContext(CatalogContext);
}

export function FavoriteButton({ contentType, slug }: { contentType: ContentType; slug: string }) {
  const catalog = useCatalog();
  const selected = catalog?.favorites.has(itemKey(contentType, slug)) ?? false;
  const [saving, setSaving] = useState(false);
  const [failed, setFailed] = useState(false);
  async function toggle(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    event.stopPropagation();
    if (!catalog || saving) return;
    setSaving(true);
    setFailed(false);
    try { await catalog.toggleFavorite(contentType, slug, !selected); }
    catch { setFailed(true); }
    finally { setSaving(false); }
  }
  return <><button type="button" onClick={toggle} disabled={!catalog?.ready || saving} aria-label={failed ? "Could not save favorite. Try again." : selected ? "Remove from favorites" : "Add to favorites"} aria-pressed={selected} className="absolute right-2 top-2 z-10 grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-black/65 text-lg text-white shadow transition hover:scale-105 hover:bg-black/85 disabled:opacity-70">
    <span className={selected ? "text-[#E50914]" : "text-white"} aria-hidden="true">{selected ? "♥" : "♡"}</span>
  </button>{failed && <span role="alert" className="absolute right-2 top-12 z-20 rounded bg-black/90 px-2 py-1 text-[10px] text-red-200">Couldn’t save. Tap to retry.</span>}</>;
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
  useEffect(() => {
    const contentKey = itemKey(contentType, slug);
    if (!trackView) return;
    const storageKey = `oshakur:view-event:${contentKey}`;
    let eventId: string;
    try {
      eventId = window.sessionStorage.getItem(storageKey) ?? window.crypto.randomUUID();
      window.sessionStorage.setItem(storageKey, eventId);
    } catch {
      eventId = window.crypto.randomUUID();
    }
    void trackView(contentType, slug, eventId);
  }, [trackView, contentType, slug]);
  return null;
}

