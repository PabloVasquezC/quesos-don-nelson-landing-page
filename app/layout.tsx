import React from "react"
import type { Metadata } from 'next'
import { Lora, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { client, queries } from '@/lib/sanity'
import './globals.css'

const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

interface SeoData {
  title?: string
  description?: string
}

interface SiteSettingsData {
  brandName?: string
  seo?: SeoData
}

export async function generateMetadata(): Promise<Metadata> {
  let data: SiteSettingsData | null = null

  try {
    data = await client.fetch<SiteSettingsData>(queries.siteSettings)
  } catch {
    // Fallback
  }

  const brandName = data?.brandName || "Don Nelson"
  const seoTitle = data?.seo?.title || `Quesería ${brandName} | Quesos Artesanales`
  const seoDescription = data?.seo?.description || "Quesos artesanales elaborados con tradición y pasión. Quesería Don Nelson - Sabor auténtico del campo a tu mesa."

  return {
    title: seoTitle,
    description: seoDescription,
    generator: 'v0.app',
    icons: {
      icon: '/images/logo.jpg',
      apple: '/images/logo.jpg',
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning className={`${lora.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
