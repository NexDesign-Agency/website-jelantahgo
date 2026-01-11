import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Harga Minyak Jelantah Jakarta Utara 2025 | Update & Tips | JelantahGO',
  description: 'Update harga jual minyak jelantah di Jakarta Utara (PIK, Kelapa Gading, Muara Karang) November 2025. Tips dapat harga terbaik, perbandingan pengepul jujur vs nakal, transparansi timbangan.',
  keywords: 'harga jelantah jakarta utara, harga jelantah PIK, harga jelantah kelapa gading, jual jelantah jakut, harga jelantah muara karang, pengepul jakarta utara',
  alternates: {
    canonical: 'https://jelantahgo.com/blog/harga-jual-minyak-jelantah-jakarta-utara',
  },
  openGraph: {
    title: 'Harga Minyak Jelantah Jakarta Utara 2025 | Update & Tips | JelantahGO',
    description: 'Update harga jual minyak jelantah di Jakarta Utara (PIK, Kelapa Gading, Muara Karang) November 2025. Tips dapat harga terbaik, perbandingan pengepul jujur vs nakal.',
    url: 'https://jelantahgo.com/blog/harga-jual-minyak-jelantah-jakarta-utara',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163997/jelantahgo_19_n7x6ka.webp',
        width: 1200,
        height: 630,
        alt: 'Harga Jual Minyak Jelantah Terbaik di Jakarta Utara',
      },
    ],
    locale: 'id_ID',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harga Minyak Jelantah Jakarta Utara 2025 | Update & Tips',
    description: 'Update harga jual minyak jelantah di Jakarta Utara (PIK, Kelapa Gading, Muara Karang) November 2025. Tips dapat harga terbaik.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163997/jelantahgo_19_n7x6ka.webp'],
  },
}

export default function JakartaUtaraHargaLayout({
  children,
}: {
  children: ReactNode
}) {
  return children
}

