import React from 'react';
// We don't import the analytics lib here directly to keep UI package decoupled from specific apps
// Instead, we assume a global 'posthog' or a passed-in tracker.

interface TrackedProps {
    trackName: string;
    trackProps?: Record<string, any>;
}

/**
 * ZUCKERBERG-LEVEL TRACKED COMPONENTS
 * Drop-in replacements for standard elements that auto-report to the Data Lake.
 */

export function TrackedButton({
    children,
    trackName,
    trackProps,
    onClick,
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & TrackedProps) {

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        // Report to window.posthog if available (Standard PostHog pattern)
        if (typeof window !== 'undefined' && (window as any).posthog) {
            (window as any).posthog.capture(trackName, {
                ...(trackProps || {}),
                text: typeof children === 'string' ? children : undefined,
                component: 'TrackedButton',
            });
        }
        onClick?.(e);
    };

    return (
        <button onClick={handleClick} {...props}>
            {children}
        </button>
    );
}

export function TrackedLink({
    children,
    trackName,
    trackProps,
    onClick,
    href,
    ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & TrackedProps) {

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (typeof window !== 'undefined' && (window as any).posthog) {
            (window as any).posthog.capture(trackName, {
                ...(trackProps || {}),
                destination: href,
                text: typeof children === 'string' ? children : undefined,
                component: 'TrackedLink',
            });
        }
        onClick?.(e);
    };

    return (
        <a href={href} onClick={handleClick} {...props}>
            {children}
        </a>
    );
}

/**
 * Intelligent Form Tracker
 * Automatically tracks field interactions for conversion funnel analysis.
 */
export function TrackedInput({
    trackName,
    onBlur,
    onFocus,
    ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { trackName: string }) {

    const handleEvent = (type: 'focus' | 'blur') => {
        if (typeof window !== 'undefined' && (window as any).posthog) {
            (window as any).posthog.capture(`input_${type}`, {
                field: trackName,
                form_id: (props as any).form?.id,
            });
        }
    };

    return (
        <input
            onFocus={(e) => { handleEvent('focus'); onFocus?.(e); }}
            onBlur={(e) => { handleEvent('blur'); onBlur?.(e); }}
            {...props}
        />
    );
}
