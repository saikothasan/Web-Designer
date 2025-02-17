"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import Script from "next/script"

// Declare the gtag function as a property of the window object
declare global {
  interface Window {
    gtag: (command: string, gtagId: string, config?: object) => void
  }
}

export const GA_TRACKING_ID = "G-XXXXXXXXXX" // Replace with your actual Google Analytics 4 measurement ID

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = pathname + searchParams.toString()
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    })
  }, [pathname, searchParams])

  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}

