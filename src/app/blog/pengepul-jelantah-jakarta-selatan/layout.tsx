import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Pengepul Jelantah Jakarta Selatan | Solusi Kafe & Resto | JelantahGO',
  description: 'Layanan pengepul jelantah profesional di Jakarta Selatan. Solusi cepat untuk kafe, restoran, dan UKM di Kemang, Senopati, Blok M. Penjemputan tepat waktu, harga kompetitif, pembayaran tunai.',
  keywords: 'pengepul jelantah jakarta selatan, jual jelantah jaksel, pengepul jelantah kemang, pengepul jelantah senopati, jual jelantah blok m, pengepul jakarta selatan',
  alternates: {
    canonical: 'https://jelantahgo.com/blog/pengepul-jelantah-jakarta-selatan',
  },
  openGraph: {
    title: 'Pengepul Jelantah Jakarta Selatan | Solusi Kafe & Resto | JelantahGO',
    description: 'Layanan pengepul jelantah profesional di Jakarta Selatan. Solusi cepat untuk kafe, restoran, dan UKM di Kemang, Senopati, Blok M. Penjemputan tepat waktu, harga kompetitif.',
    url: 'https://jelantahgo.com/blog/pengepul-jelantah-jakarta-selatan',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163995/jelantahgo_13_krbsky.webp',
        width: 1200,
        height: 630,
        alt: 'Pengepul Jelantah Terpercaya di Jakarta Selatan',
      },
    ],
    locale: 'id_ID',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pengepul Jelantah Jakarta Selatan | Solusi Kafe & Resto',
    description: 'Layanan pengepul jelantah profesional di Jakarta Selatan. Solusi cepat untuk kafe, restoran, dan UKM di Kemang, Senopati, Blok M.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163995/jelantahgo_13_krbsky.webp'],
  },
}

export default function JakartaSelatanLayout({
  children,
}: {
  children: ReactNode
}) {
  return children
}

