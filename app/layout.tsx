import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { GoogleAnalytics } from "@next/third-parties/google"

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <GoogleAnalytics gaId="G-Z5HLEN2GPV" />
    </html>
  )
}
