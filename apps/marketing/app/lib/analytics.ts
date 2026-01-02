import posthog from 'posthog-js';

const POSTHOG_KEY = import.meta.env.VITE_POSTHOG_KEY;
const POSTHOG_HOST = import.meta.env.VITE_POSTHOG_HOST || 'https://app.posthog.com';

/**
 * ZUCKERBERG-LEVEL ANALYTICS (Cambridge Analytica Grade)
 * This utility ensures zero-drop tracking and aggressive autocapture
 * for maximum investor-grade data.
 */

export function initAnalytics() {
    if (typeof window !== 'undefined' && POSTHOG_KEY) {
        posthog.init(POSTHOG_KEY, {
            api_host: POSTHOG_HOST,
            capture_pageview: false, // Handled manually by RR7 navigation
            persistence: 'localStorage',

            // MILITARY GRADE AUTOCAPTURE
            autocapture: true,
            capture_performance: true,
            session_recording: {
                maskAllInputs: false, // Careful: Enable only for non-PII fields if needed
                recordCanvas: true,
            },

            // Zero-latency tracking
            advanced_disable_decide: false,
        });

        // Capture device info and timezone aggressively
        posthog.register({
            platform: 'zen-template',
            incubator: 'cabyz',
            vibe_level: 'military',
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        });
    }
}

export function trackPageView() {
    if (typeof window !== 'undefined' && POSTHOG_KEY) {
        posthog.capture('$pageview');
    }
}

/**
 * Intelligent Action Tracker
 * Captures the 'Why' behind the click.
 */
export function trackAction(name: string, properties?: Record<string, any>) {
    if (typeof window !== 'undefined' && POSTHOG_KEY) {
        posthog.capture(name, {
            ...properties,
            $timestamp: new Date().toISOString(),
            current_url: window.location.href,
        });
    }
}

export function identifyUser(id: string, email?: string, traits?: Record<string, any>) {
    if (typeof window !== 'undefined' && POSTHOG_KEY) {
        posthog.identify(id, {
            email,
            ...traits,
            last_seen: new Date().toISOString(),
        });
    }
}

/**
 * Form Tracking (Cambridge Analytica Pattern)
 * Tracks partial form fills and abandonments.
 */
export function trackFormInteraction(formId: string, fieldName: string, action: 'focus' | 'blur' | 'change') {
    if (typeof window !== 'undefined' && POSTHOG_KEY) {
        posthog.capture('form_interaction', {
            form_id: formId,
            field: fieldName,
            action: action,
        });
    }
}
