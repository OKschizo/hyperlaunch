import Link from "next/link";

export default function Home() {
  return (
    <section id="hero" className="flex items-center min-h-[88vh]">
      <div className="page-wrap text-center">
        <h1 className="text-text-hi text-[2rem] sm:text-[2.5rem] font-semibold">Launch NFT Collections on HyperEVM</h1>
        <p className="mt-4 text-text-md max-w-[720px] mx-auto">Deploy ERC-721 drops, upload to IPFS, and manage phases with owner-gated controls.</p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link id="cta-start" href="/create" className="btn-primary px-6 py-3">Start Creating</Link>
          <Link id="cta-explore" href="/explore" className="btn-ghost px-5 py-3">Explore</Link>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div id="feat-ipfs" className="card p-6">
            <h3 className="text-text-hi font-medium">IPFS Uploads</h3>
            <p className="text-text-md mt-2">Upload images and metadata with progress.</p>
          </div>
          <div id="feat-factory" className="card p-6">
            <h3 className="text-text-hi font-medium">Factory + Proxy</h3>
            <p className="text-text-md mt-2">Deterministic deploys with predictable addresses.</p>
          </div>
          <div id="feat-phases" className="card p-6">
            <h3 className="text-text-hi font-medium">Mint Phases</h3>
            <p className="text-text-md mt-2">Public, allowlist, per-wallet caps, and more.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
