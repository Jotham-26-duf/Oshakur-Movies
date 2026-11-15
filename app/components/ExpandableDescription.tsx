"use client";

import { useState } from "react";

export default function ExpandableDescription({ description, className = "" }: { description: string; className?: string }) {
  const [expanded, setExpanded] = useState(false);
  const shouldCollapse = description.length > 260;

  return (
    <div className={className}>
      <p className="max-w-4xl text-sm leading-7 text-[#AAA] sm:text-base" style={shouldCollapse && !expanded ? { display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 4, overflow: "hidden" } : undefined}>
        {description || "No summary is available for this title yet."}
      </p>
      {shouldCollapse && <button type="button" onClick={() => setExpanded((value) => !value)} aria-expanded={expanded} className="mt-2 text-sm font-semibold text-[#E50914] hover:text-[#FF2633]">Show {expanded ? "Less" : "More"}</button>}
    </div>
  );
}
