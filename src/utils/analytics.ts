// Simple analytics tracking

export interface PageView {
  path: string;
  timestamp: number;
}

export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, any>;
  timestamp: number;
}

let pageViews: PageView[] = [];
let events: AnalyticsEvent[] = [];

// Track page views
export const trackPageView = (path: string): void => {
  const pageView: PageView = {
    path,
    timestamp: Date.now(),
  };

  pageViews.push(pageView);
  console.log(`Page view tracked: ${path}`);

  // In a real implementation, you would send this data to your analytics service
  // sendToAnalyticsService('pageView', pageView);
};

// Track custom events
export const trackEvent = (
  name: string,
  properties?: Record<string, any>
): void => {
  const event: AnalyticsEvent = {
    name,
    properties,
    timestamp: Date.now(),
  };

  events.push(event);
  console.log(`Event tracked: ${name}`, properties);

  // In a real implementation, you would send this data to your analytics service
  // sendToAnalyticsService('event', event);
};

// Get all tracked page views
export const getPageViews = (): PageView[] => {
  return pageViews;
};

// Get all tracked events
export const getEvents = (): AnalyticsEvent[] => {
  return events;
};

// Clear tracked data (for privacy or memory management)
export const clearTrackedData = (): void => {
  pageViews = [];
  events = [];
};

// Initialize Google Analytics (this is a placeholder, would use actual GA in production)
export const initGA = (trackingId: string): void => {
  console.log(`Google Analytics initialized with tracking ID: ${trackingId}`);

  // In a real implementation, you would initialize GA here
  // Example:
  // window.dataLayer = window.dataLayer || [];
  // function gtag(){dataLayer.push(arguments);}
  // gtag('js', new Date());
  // gtag('config', trackingId);
};
