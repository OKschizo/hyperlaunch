import React from "react";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div id="app-shell" className="min-h-screen bg-bg-0 text-text-hi">
      {children}
      <div id="toasts" aria-live="polite" aria-atomic="true" />
    </div>
  );
}

export default AppShell;

