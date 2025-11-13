import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Harga Minyak Jelantah 2025 | Rp 7.500-8.500/L | JelantahGO',
  description: 'Harga minyak jelantah terbaru 2025: Rp 7.500-8.500 per liter sesuai volume. Penjemputan gratis, bayar tunai langsung. Cek harga berdasarkan volume Anda!',
  keywords: 'harga minyak jelantah, harga jelantah 2025, harga jelantah per liter, jual jelantah harga tinggi, pengepul jelantah harga terbaik',
  alternates: {
    canonical: 'https://jelantahgo.com/pricing',
  },
  openGraph: {
    title: 'Harga Minyak Jelantah 2025 | Rp 7.500-8.500/L | JelantahGO',
    description: 'Harga minyak jelantah terbaru 2025: Rp 7.500-8.500 per liter sesuai volume. Penjemputan gratis, bayar tunai langsung.',
    url: 'https://jelantahgo.com/pricing',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/v1763061453/jelantahgo_1_mohlqo.webp',
        width: 1200,
        height: 630,
        alt: 'Harga Minyak Jelantah 2025 - Rp 7.500-8.500 per Liter',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harga Minyak Jelantah 2025 | Rp 7.500-8.500/L | JelantahGO',
    description: 'Harga minyak jelantah terbaru 2025: Rp 7.500-8.500 per liter sesuai volume. Penjemputan gratis, bayar tunai langsung.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/v1763061453/jelantahgo_1_mohlqo.webp'],
  },
}

export default function PricingLayout({
  children,
}: {
  children: ReactNode
}) {
  return children
}

