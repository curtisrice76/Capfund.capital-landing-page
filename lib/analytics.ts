import { sendGAEvent } from "@next/third-parties/google"

// Custom event tracking functions
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== "undefined") {
    sendGAEvent("event", eventName, parameters)
  }
}

// Specific tracking functions for your site
export const trackContactFormSubmit = () => {
  trackEvent("contact_form_submit", {
    event_category: "engagement",
    event_label: "contact_form",
  })
}

export const trackPitchDeckView = () => {
  trackEvent("pitch_deck_view", {
    event_category: "engagement",
    event_label: "pitch_deck",
  })
}

export const trackPerformancePageView = (pageType: "annual" | "monthly") => {
  trackEvent("performance_page_view", {
    event_category: "engagement",
    event_label: pageType,
    page_type: pageType,
  })
}

export const trackStrategyPageView = () => {
  trackEvent("strategy_page_view", {
    event_category: "engagement",
    event_label: "strategy",
  })
}

export const trackGetStartedClick = (location: string) => {
  trackEvent("get_started_click", {
    event_category: "conversion",
    event_label: "get_started",
    click_location: location,
  })
}

export const trackScheduleConsultation = (location: string) => {
  trackEvent("schedule_consultation", {
    event_category: "conversion",
    event_label: "consultation",
    click_location: location,
  })
}
