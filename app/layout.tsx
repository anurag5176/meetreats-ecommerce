import type React from "react"
import type { Metadata } from "next"
import { Inter, Fraunces, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

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
    <html lang="en" className={`${inter.variable} ${fraunces.variable} ${spaceGrotesk.variable} antialiased`}>
      <body className="min-h-screen bg-soft-cream font-sans text-charcoal">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
