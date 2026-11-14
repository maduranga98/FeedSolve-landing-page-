type RdtFn = (...args: unknown[]) => void;

declare global {
 interface Window {
  rdt?: RdtFn;
 }
}

const uniqueId = () =>
 typeof crypto !== "undefined" && "randomUUID" in crypto
  ? crypto.randomUUID()
  : `${Date.now()}-${Math.random().toString(36).slice(2)}`;

/**
 * Fires a Reddit conversion event with a unique conversionId (used by Reddit
 * to deduplicate against server-side Conversions API events).
 * Safe to call before the pixel has loaded or when it is blocked.
 */
export function trackRedditEvent(
 eventName: string,
 opts: { conversionId?: string; email?: string } = {},
) {
 if (typeof window === "undefined") return;
 const conversionId = opts.conversionId ?? uniqueId();

 if (typeof window.rdt === "function") {
  window.rdt("track", eventName, { conversionId });
 }

 // Server-side twin (Conversions API) via Firebase Function, deduplicated by conversionId.
 const url = process.env.NEXT_PUBLIC_REDDIT_CAPI_URL;
 if (url) {
  fetch(url, {
   method: "POST",
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify({ eventName, conversionId, email: opts.email }),
   keepalive: true,
  }).catch(() => {});
 }
}
