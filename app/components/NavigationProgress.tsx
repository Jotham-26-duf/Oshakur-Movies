"use client";

import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function NavigationProgressInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const routeKey = `${pathname}?${searchParams.toString()}`;
  const [visible, setVisible] = useState(false);
  const [complete, setComplete] = useState(false);
  const pendingRef = useRef(false);
  const startedRouteRef = useRef(routeKey);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const begin = useCallback(() => {
    if (pendingRef.current) return;
    pendingRef.current = true;
    startedRouteRef.current = `${window.location.pathname}?${new URLSearchParams(window.location.search).toString()}`;
    setComplete(false);
    setVisible(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      pendingRef.current = false;
      setComplete(true);
      hideRef.current = setTimeout(() => setVisible(false), 220);
    }, 8000);
  }, []);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement) || anchor.target === "_blank" || anchor.hasAttribute("download")) return;
      const destination = new URL(anchor.href, window.location.href);
      if (destination.origin !== window.location.origin) return;
      if (`${destination.pathname}?${destination.searchParams.toString()}` === `${window.location.pathname}?${new URLSearchParams(window.location.search).toString()}`) return;
      begin();
    };
    const handleStart = () => begin();
    document.addEventListener("click", handleClick, true);
    window.addEventListener("oshakur:navigation-start", handleStart);
    window.addEventListener("popstate", handleStart);
    return () => {
      document.removeEventListener("click", handleClick, true);
      window.removeEventListener("oshakur:navigation-start", handleStart);
      window.removeEventListener("popstate", handleStart);
    };
  }, [begin]);

  useEffect(() => {
    if (!pendingRef.current || routeKey === startedRouteRef.current) return;
    pendingRef.current = false;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setComplete(true);
    hideRef.current = setTimeout(() => setVisible(false), 220);
  }, [routeKey]);

  useEffect(() => () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (hideRef.current) clearTimeout(hideRef.current);
  }, []);

  return visible ? <div className={`navigation-progress${complete ? " is-complete" : ""}`} role="progressbar" aria-label="Loading page" aria-valuemin={0} aria-valuemax={100} aria-valuenow={complete ? 100 : undefined}><span /></div> : null;
}

export default function NavigationProgress() {
  return <Suspense fallback={null}><NavigationProgressInner /></Suspense>;
}
