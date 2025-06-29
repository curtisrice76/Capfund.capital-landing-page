export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window !== "undefined") {
    // Google Analytics 4
    if (window.gtag) {
      window.gtag("event", eventName, properties)
    }

    // You can add other analytics providers here
    console.log("Analytics Event:", eventName, properties)
  }
}

export const trackPageView = (url: string) => {
  if (typeof window !== "undefined") {
    if (window.gtag) {
      window.gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
        page_path: url,
      })
    }
  }
}

// Extend the Window interface to include gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

/* ------------------------------------------------------------------ */
/* Helper wrappers (maintain backward-compatibility with old imports) */
/* ------------------------------------------------------------------ */

/** CTA clicks from the header */
export const trackGetStartedClick = (location: string) =>
  trackEvent("get_started_click", {
    event_category: "conversion",
    click_location: location,
  })

/** Contact form submission */
export const trackContactFormSubmit = () =>
  trackEvent("contact_form_submit", {
    event_category: "engagement",
    event_label: "contact_form",
  })

/** Performance page views (annual or monthly) */
export const trackPerformancePageView = (pageType: "annual" | "monthly") =>
  trackEvent("performance_page_view", {
    event_category: "engagement",
    page_type: pageType,
  })

/** Strategy page view */
export const trackStrategyPageView = () =>
  trackEvent("strategy_page_view", {
    event_category: "engagement",
    event_label: "strategy",
  })

/** Pitch-deck view */
export const trackPitchDeckView = () =>
  trackEvent("pitch_deck_view", {
    event_category: "engagement",
    event_label: "pitch_deck",
  })

/** Schedule consultation clicks (CTA buttons) */
export const trackScheduleConsultation = (location: string) =>
  trackEvent("schedule_consultation", {
    event_category: "conversion",
    click_location: location,
  })
