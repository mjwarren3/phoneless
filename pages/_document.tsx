import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script async src="https://plausible.io/js/pa-z0ezcBgw0icfE1LhxHPAm.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init();",
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "var _paq = window._paq = window._paq || [];_paq.push(['trackPageView']);_paq.push(['enableLinkTracking']);(function(){var u='https://newspaper.matomo.cloud/';_paq.push(['setTrackerUrl', u+'matomo.php']);_paq.push(['setSiteId', '1']);var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];g.async=true;g.src='https://cdn.matomo.cloud/newspaper.matomo.cloud/matomo.js';s.parentNode.insertBefore(g,s);})();",
          }}
        />
      </Head>
      <body className="bg-slate-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
