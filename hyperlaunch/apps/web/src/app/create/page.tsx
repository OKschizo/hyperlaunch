"use client";
export const dynamic = "force-dynamic";
export const revalidate = 0;
import React, { useMemo, useState } from "react";
import FolderDropzone, { DroppedFiles } from "@/components/create/FolderDropzone";
import UploadGrid, { AssetItem } from "@/components/create/UploadGrid";
import UploadRail from "@/components/create/UploadRail";
import { useMutation } from "@tanstack/react-query";
import CreateStepper from "@/components/create/CreateStepper";
import { useRouter } from "next/navigation";
import { saveDraftCids } from "@/lib/firestore";

async function uploadToPinata(payload: { assets: File[]; metadata: File[] }) {
  const form = new FormData();
  for (const f of payload.assets) form.append("assets", f, (f as any).webkitRelativePath || f.name);
  for (const f of payload.metadata) form.append("metadata", f, (f as any).webkitRelativePath || f.name);
  const res = await fetch("/api/pinata/upload", { method: "POST", body: form });
  if (!res.ok) throw new Error(await res.text());
  return (await res.json()) as { assetsCid: string | null; metadataCid: string | null };
}

export default function CreatePage() {
  const [previews, setPreviews] = useState<AssetItem[]>([]);
  const [assetsCid, setAssetsCid] = useState<string | null>(null);
  const [metadataCid, setMetadataCid] = useState<string | null>(null);
  const baseUri = useMemo(() => (metadataCid ? `ipfs://${metadataCid}/` : null), [metadataCid]);
  const router = useRouter();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: uploadToPinata,
    onSuccess: async (d) => {
      setAssetsCid(d.assetsCid ?? null);
      setMetadataCid(d.metadataCid ?? null);
      try {
        const data = { assetsCid: d.assetsCid ?? null, metadataCid: d.metadataCid ?? null, baseUri: d.metadataCid ? `ipfs://${d.metadataCid}/` : null };
        await saveDraftCids("default", data);
      } catch {}
    },
  });

  function onDrop(res: DroppedFiles) {
    setPreviews(res.previews);
    mutateAsync({ assets: res.assets, metadata: res.metadata });
  }

  function handleCopy(value: string) {
    navigator.clipboard.writeText(value);
  }

  return (
    <div className="page-wrap grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 py-8">
      <section id="upload-panel" className="space-y-6">
        <CreateStepper current="Upload" />
        <FolderDropzone onFiles={onDrop} />
        <div className="card p-2">
          <UploadGrid items={previews} />
        </div>
      </section>
      <UploadRail
        progress={isPending ? 50 : assetsCid || metadataCid ? 100 : 0}
        assetsCid={assetsCid}
        metadataCid={metadataCid}
        baseUri={baseUri}
        onCopy={handleCopy}
        onContinue={() => router.push("/create/deploy")}
      />
    </div>
  );
}

