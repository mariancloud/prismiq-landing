import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk, Libre_Baskerville } from "next/font/google"

import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})
const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
})

export const metadata: Metadata = {
  title: "PrismIQ | AI-Powered Denial Management",
  description:
    "Overturn denials with policy-level precision. PrismIQ analyzes denied claims and drafts ready-to-send appeals for orthopedic and spine billing teams.",
}

export const viewport: Viewport = {
  themeColor: "#0891b2",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${libreBaskerville.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
