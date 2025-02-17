import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { Analytics } from "@/components/analytics"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Gerold - Creative Portfolio & Resume",
  description: "Professional portfolio and resume website showcasing creative work and services",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

