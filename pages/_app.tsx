import type { AppProps } from 'next/app'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        async
        strategy="afterInteractive"
        src="https://plausible.io/js/pa-glsletFAv3Li7iWWsD06g.js"
      />
      <Script id="plausible-init" strategy="afterInteractive">
        {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init();`}
      </Script>
      <Component {...pageProps} />
    </>
  )
}