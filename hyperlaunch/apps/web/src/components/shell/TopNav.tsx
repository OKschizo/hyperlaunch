import Link from "next/link";
import NetworkBadge from "../wallet/NetworkBadge";
import ConnectButton from "../wallet/ConnectButton";
import React from "react";

export default function TopNav() {
  return (
    <header id="top-nav" className="sticky top-0 z-50 backdrop-blur bg-bg-0/70 border-b border-line">
      <div className="page-wrap flex items-center justify-between h-14">
        <Link href="/" className="text-text-hi font-semibold" aria-label="HyperLaunch Home">
          HyperLaunch
        </Link>
        <div className="flex items-center gap-3">
          <NetworkBadge />
          <ConnectButton />
        </div>
      </div>
    </header>
  );
}

