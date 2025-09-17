"use client";
import React from "react";

export default function NetworkBadge() {
  return (
    <span
      id="network-999"
      className="inline-flex items-center gap-2 rounded-md border border-line bg-bg-1 px-2.5 py-1 text-[12px] text-text-md"
      aria-live="polite"
    >
      <span className="inline-block h-2 w-2 rounded-full bg-hl-500" aria-hidden />
      HyperEVM · 999
    </span>
  );
}

