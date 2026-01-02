import { PostHog } from 'posthog-node';

const posthogToken = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com';

export const analytics = posthogToken 
  ? new PostHog(posthogToken, { host: posthogHost })
  : null;

export const trackEvent = (userId: string, event: string, properties?: any) => {
  if (analytics) {
    analytics.capture({ distinctId: userId, event, properties });
  } else {
    console.log('[Analytics Skip]', { userId, event, properties });
  }
};
