import React from "react"
import type { Metadata } from 'next'
import { Lora, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const _playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: 'Queseria Don Nelson | Quesos Artesanales',
  description: 'Quesos artesanales elaborados con tradicion y pasion. Queseria Don Nelson - Sabor autentico del campo a tu mesa.',
  generator: 'v0.app',
  icons: {
    icon: '/images/logo.jpg',
    apple: '/images/logo.jpg',
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
