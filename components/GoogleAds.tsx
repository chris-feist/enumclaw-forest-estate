import Script from "next/script";

import { GA4_MEASUREMENT_ID, GOOGLE_ADS_ID } from "@/lib/analytics";

export function GoogleAds() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-tag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA4_MEASUREMENT_ID}', { send_page_view: false });
          gtag('config', '${GOOGLE_ADS_ID}', { send_page_view: false });
        `}
      </Script>
    </>
  );
}
