import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@/components/analytics"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gerold - Creative Developer & Designer",
  description: "Professional portfolio of Gerold, showcasing web development, UI/UX design, and creative projects.",
  keywords: ["web development", "UI/UX design", "React", "Next.js", "portfolio"],
  authors: [{ name: "Gerold" }],
  openGraph: {
    title: "Gerold - Creative Developer & Designer",
    description: "Professional portfolio of Gerold, showcasing web development, UI/UX design, and creative projects.",
    url: "https://www.yourportfolio.com",
    siteName: "Gerold Portfolio",
    images: [
      {
        url: "https://www.yourportfolio.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gerold Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gerold - Creative Developer & Designer",
    description: "Professional portfolio of Gerold, showcasing web development, UI/UX design, and creative projects.",
    images: ["https://www.yourportfolio.com/twitter-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Gerold",
              "url": "https://www.yourportfolio.com",
              "sameAs": [
                "https://github.com/yourgithub",
                "https://linkedin.com/in/yourlinkedin",
                "https://twitter.com/yourtwitter"
              ],
              "jobTitle": "Creative Developer & Designer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              }
            }
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

