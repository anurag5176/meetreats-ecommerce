import type { Metadata } from "next"

interface SEOProps {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
}

export function generateSEO({
  title,
  description,
  keywords = [],
  image = "/og-image.jpg",
  url = "https://meetreats.com",
}: SEOProps): Metadata {
  return {
    title,
    description,
    keywords: [
      ...keywords,
      "premium snacks",
      "activated almonds",
      "dehydrated fruits",
      "clean label",
      "healthy snacks",
    ].join(", "),
    authors: [{ name: "MeeTreats" }],
    creator: "MeeTreats",
    publisher: "MeeTreats",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "MeeTreats",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@meetreats",
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
    verification: {
      google: "your-google-verification-code",
    },
  }
}
