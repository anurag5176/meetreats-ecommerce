import type React from "react"
import type { Metadata } from "next"
import { Inter, Fraunces, Space_Grotesk, Playfair_Display, Montserrat, Cormorant_Garamond } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { ConditionalLayout } from "@/components/layout/conditional-layout"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "MeeTreats - Premium Clean-Label Snacks",
  description:
    "Activated almonds and dehydrated real fruits. No preservatives, no gluten, minimal sugar. Dehydration, not destruction.",
  keywords: "activated almonds, dehydrated fruits, clean label snacks, premium snacks, corporate gifting",
  authors: [{ name: "MeeTreats" }],
  creator: "MeeTreats",
  publisher: "MeeTreats",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://meetreats.com",
    title: "MeeTreats - Premium Clean-Label Snacks",
    description: "Activated almonds and dehydrated real fruits. No preservatives, no gluten, minimal sugar.",
    siteName: "MeeTreats",
  },
  twitter: {
    card: "summary_large_image",
    title: "MeeTreats - Premium Clean-Label Snacks",
    description: "Activated almonds and dehydrated real fruits. No preservatives, no gluten, minimal sugar.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} ${spaceGrotesk.variable} ${playfairDisplay.variable} ${montserrat.variable} ${cormorantGaramond.variable} antialiased`}>
      <body className="min-h-screen bg-soft-cream text-charcoal transition-colors duration-300" style={{fontFamily: 'var(--font-montserrat), sans-serif'}}>
        <ConditionalLayout>{children}</ConditionalLayout>
        <Toaster />
      </body>
    </html>
  )
}
