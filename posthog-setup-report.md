<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Phoneless Next.js Pages Router project.

**Changes made:**

- **`instrumentation-client.ts`** (new): PostHog client-side initialization using the Next.js 15.3+ recommended approach. Initializes PostHog with a reverse proxy host, exception capture, and debug mode in development.
- **`next.config.mjs`**: Added the missing `/ingest/array/:path*` reverse proxy rewrite rule alongside the existing static and ingest rewrites.
- **`.env`**: Added `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` environment variables.
- **`pages/index.tsx`**: Added `category_clicked` capture when a user taps an app category icon on the home screen.
- **`pages/[id].tsx`**: Added `category_viewed` capture on page mount (top of conversion funnel) and `product_link_clicked` capture when a user clicks a product's external buy link.

## Events

| Event | Description | File |
|-------|-------------|------|
| `category_clicked` | User clicks a category icon on the home page to browse phone alternatives in that category | `pages/index.tsx` |
| `category_viewed` | User views a category page — top of the product conversion funnel (e.g. camera, notes, phone) | `pages/[id].tsx` |
| `product_link_clicked` | User clicks a product's external buy link — the primary conversion action on the site | `pages/[id].tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard**: [Analytics basics](https://us.posthog.com/project/277135/dashboard/1529509)
- **Insight**: [Category clicks over time](https://us.posthog.com/project/277135/insights/wy4Z8I8n)
- **Insight**: [Most popular categories](https://us.posthog.com/project/277135/insights/ide8U5e6)
- **Insight**: [Category view → product link conversion funnel](https://us.posthog.com/project/277135/insights/AIGNOo24)
- **Insight**: [Top products clicked](https://us.posthog.com/project/277135/insights/mrGip0a6)
- **Insight**: [Product link clicks over time](https://us.posthog.com/project/277135/insights/dKIO7bZM)

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
