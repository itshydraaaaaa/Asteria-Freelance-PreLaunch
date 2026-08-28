/**
 * Lightweight telemetry and analytics event tracker stub.
 * Users can easily plug in Google Analytics (GA4), PostHog, Plausible, or Mixpanel here.
 */

type EventProperties = Record<string, string | number | boolean | null | undefined>;

export function trackEvent(eventName: string, properties?: EventProperties) {
  if (typeof window === "undefined") return;

  // Log in development for easy debugging
  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics] Event: "${eventName}"`, properties || {});
  }

  // Example hook for window.gtag (Google Analytics)
  if (typeof (window as any).gtag === "function") {
    (window as any).gtag("event", eventName, properties);
  }

  // Example hook for window.posthog
  if (typeof (window as any).posthog?.capture === "function") {
    (window as any).posthog.capture(eventName, properties);
  }

  // Example hook for window.plausible
  if (typeof (window as any).plausible === "function") {
    (window as any).plausible(eventName, { props: properties });
  }
}
