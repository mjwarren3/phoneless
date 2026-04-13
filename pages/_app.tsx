import type { AppProps } from 'next/app'
import Router from 'next/router'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import '../styles/globals.css'

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_TOKEN!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    ui_host: 'https://us.posthog.com',
    capture_pageview: false,
    capture_exceptions: true,
  })

  Router.events.on('routeChangeComplete', () => posthog.capture('$pageview'))
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PostHogProvider client={posthog}>
      <Component {...pageProps} />
    </PostHogProvider>
  )
}