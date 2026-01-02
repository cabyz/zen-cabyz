/**
 * Standardized Event Names for all Incubator Projects
 * Following a "Noun Verb" naming convention for clarity.
 */
export const EVENTS = {
    // Page/Screen
    PAGE_VIEWED: 'Page Viewed',

    // Auth/Identity
    USER_SIGNED_UP: 'User Signed Up',
    USER_LOGGED_IN: 'User Logged In',
    USER_LOGGED_OUT: 'User Logged Out',

    // Navigation
    CTA_CLICKED: 'CTA Clicked',
    SOCIAL_LINK_CLICKED: 'Social Link Clicked',

    // Marketing / CMS
    BLOG_POST_VIEWED: 'Blog Post Viewed',
    NEWSLETTER_SUBSCRIBED: 'Newsletter Subscribed',

    // Product / App
    FEATURE_USED: 'Feature Used',
    DASHBOARD_VIEWED: 'Dashboard Viewed',
    SETTINGS_UPDATED: 'Settings Updated',
} as const;

export type EventName = typeof EVENTS[keyof typeof EVENTS];

/**
 * Common Property Names
 */
export const PROPERTIES = {
    PLATFORM: 'platform',
    SOURCE: 'source',
    USER_ROLES: 'user_roles',
    CAMPAIGN: 'campaign',
} as const;
