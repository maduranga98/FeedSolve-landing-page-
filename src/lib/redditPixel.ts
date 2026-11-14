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
export function trackRedditEvent(eventName: string, conversionId: string = uniqueId()) {
 if (typeof window === "undefined" || typeof window.rdt !== "function") return;
 window.rdt("track", eventName, { conversionId });
}
