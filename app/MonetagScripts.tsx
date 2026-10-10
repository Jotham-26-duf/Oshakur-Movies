
"use client";

import { useEffect } from "react";

export default function MonetagScripts() {
  useEffect(() => {
    const zones = [
      {
        id: "11973593",
        src: "https://n6wxm.com/vignette.min.js",
      },
      {
        id: "11973734",
        src: "https://nap5k.com/tag.min.js",
      },
    ];

    const addedScripts: HTMLScriptElement[] = [];

    for (const zone of zones) {
      // Avoid adding the same zone script more than once.
      const existing = document.querySelector(
        `script[data-zone="${zone.id}"]`
      );

      if (existing) continue;

      const script = document.createElement("script");
      script.dataset.zone = zone.id;
      script.src = zone.src;
      script.async = true;

      document.body.appendChild(script);
      addedScripts.push(script);
    }

    return () => {
      // Remove only scripts created by this effect.
      addedScripts.forEach((script) => script.remove());
    };
  }, []);

  return null;
}
