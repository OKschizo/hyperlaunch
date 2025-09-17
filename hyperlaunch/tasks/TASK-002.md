Task 002 — Create Wizard: Upload Step (scaffold + working upload)

Built
- Upload UI at `/create` with:
  - Folder drop (react-dropzone) accepting directories; previews parsed into /images and /metadata groups.
  - Virtualized thumbnails (react-window FixedSizeGrid, overscan 4) to handle 1k+ files smoothly.
  - Sticky right rail showing progress, `assetsCid`, `metadataCid`, and suggested `baseURI = ipfs://{metadataCid}/`, with copy buttons and disabled Continue until both CIDs exist.
- Server route at `app/api/pinata/upload/route.ts` that accepts multipart/form-data and forwards files to Pinata `pinFileToIPFS` using server-side `PINATA_JWT`.
- Client mutation (TanStack Query) posts to `/api/pinata/upload` and updates progress state; on success, shows CIDs and computes baseURI.
- Persistence: saves `{assetsCid, metadataCid, baseUri}` to Firestore if env configured; falls back to localStorage otherwise.
- A11y: dropzone is keyboard reachable (role=button, tabIndex=0), progress has ARIA, buttons have visible focus and copy affordance.

Acceptance
- Drag-dropping a folder renders thumbnails with smooth scrolling. Upload posts both groups to IPFS and returns CIDs. Continue remains disabled until both exist. Secrets remain server-side.

Notes / TODOs
- Requires `PINATA_JWT` in server env to perform real uploads.
- For very large folders, consider chunked retry/backoff and a resumable UX (out of scope for this step).
- If Firebase is desired, set `FIREBASE_API_KEY`, `FIREBASE_PROJECT_ID`, and `FIREBASE_APP_ID` to persist drafts server-side.
