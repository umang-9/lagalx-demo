import { gaTrackingId } from './config';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export function pageView(url): void {
  if (gaTrackingId) {
    // @ts-ignore
    window.gtag('config', gaTrackingId, { page_path: url });
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export function event({ action, category, label, value }): void {
  if (gaTrackingId) {
    // @ts-ignore
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
}
