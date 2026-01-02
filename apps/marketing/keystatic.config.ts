import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
    storage: {
        kind: 'local',
    },
    collections: {
        // Blog posts for content marketing
        posts: collection({
            label: 'Blog Posts',
            slugField: 'title',
            path: 'content/posts/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                description: fields.text({ label: 'Description', multiline: true }),
                publishedAt: fields.date({ label: 'Published Date' }),
                author: fields.text({ label: 'Author' }),
                image: fields.image({
                    label: 'Cover Image',
                    directory: 'public/images/posts',
                    publicPath: '/images/posts/',
                }),
                content: fields.markdoc({ label: 'Content' }),
            },
        }),
    },
    singletons: {
        // Homepage content - editable without code changes
        homepage: singleton({
            label: 'Homepage',
            path: 'content/homepage',
            schema: {
                hero: fields.object({
                    title: fields.text({ label: 'Hero Title' }),
                    titleHighlight: fields.text({ label: 'Highlighted Word (colored)' }),
                    subtitle: fields.text({ label: 'Subtitle' }),
                    ctaPrimary: fields.text({ label: 'Primary CTA Text' }),
                    ctaSecondary: fields.text({ label: 'Secondary CTA Text' }),
                }),
                features: fields.array(
                    fields.object({
                        title: fields.text({ label: 'Feature Title' }),
                        description: fields.text({ label: 'Feature Description', multiline: true }),
                        icon: fields.text({ label: 'Icon Name (Lucide)' }),
                    }),
                    {
                        label: 'Features',
                        itemLabel: (props) => props.fields.title.value,
                    }
                ),
                testimonials: fields.array(
                    fields.object({
                        quote: fields.text({ label: 'Quote', multiline: true }),
                        author: fields.text({ label: 'Author Name' }),
                        role: fields.text({ label: 'Author Role' }),
                        avatar: fields.image({
                            label: 'Avatar',
                            directory: 'public/images/avatars',
                            publicPath: '/images/avatars/',
                        }),
                    }),
                    {
                        label: 'Testimonials',
                        itemLabel: (props) => props.fields.author.value,
                    }
                ),
                cta: fields.object({
                    title: fields.text({ label: 'CTA Section Title' }),
                    description: fields.text({ label: 'CTA Description' }),
                    buttonText: fields.text({ label: 'Button Text' }),
                }),
            },
        }),
        // Site-wide settings
        settings: singleton({
            label: 'Site Settings',
            path: 'content/settings',
            schema: {
                siteName: fields.text({ label: 'Site Name' }),
                siteDescription: fields.text({ label: 'Site Description', multiline: true }),
                socialLinks: fields.object({
                    twitter: fields.text({ label: 'Twitter URL' }),
                    github: fields.text({ label: 'GitHub URL' }),
                    linkedin: fields.text({ label: 'LinkedIn URL' }),
                }),
                analytics: fields.object({
                    posthogKey: fields.text({ label: 'PostHog Key (optional)' }),
                    gaId: fields.text({ label: 'Google Analytics ID (optional)' }),
                }),
            },
        }),
    },
});
