import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'JelantahGO vs Mandiri | Analisis Mitra Pengepul Resmi | JelantahGO',
  description: 'Perbandingan lengkap pengepul jelantah mandiri vs mitra JelantahGO. Analisis untung-rugi, risiko, modal kerja, margin profit, dan panduan memilih jalur terbaik untuk bisnis Anda.',
  keywords: 'mitra jelantahgo vs mandiri, perbandingan pengepul jelantah, bisnis pengepul mandiri, program mitra jelantah, analisis bisnis pengepul, pilih jalur bisnis jelantah',
  alternates: {
    canonical: 'https://jelantahgo.com/blog/mitra-jelantahgo-vs-mandiri',
  },
  openGraph: {
    title: 'JelantahGO vs Mandiri | Analisis Mitra Pengepul Resmi | JelantahGO',
    description: 'Perbandingan lengkap pengepul jelantah mandiri vs mitra JelantahGO. Analisis untung-rugi, risiko, modal kerja, margin profit, dan panduan memilih jalur terbaik untuk bisnis Anda.',
    url: 'https://jelantahgo.com/blog/mitra-jelantahgo-vs-mandiri',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163998/jelantahgo_27_rwjixk.webp',
        width: 1200,
        height: 630,
        alt: 'JelantahGO vs. Mandiri: Analisis Keuntungan Menjadi Mitra Pengepul Resmi',
      },
    ],
    locale: 'id_ID',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JelantahGO vs Mandiri | Analisis Mitra Pengepul Resmi',
    description: 'Perbandingan lengkap pengepul jelantah mandiri vs mitra JelantahGO. Analisis untung-rugi, risiko, modal kerja, margin profit.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163998/jelantahgo_27_rwjixk.webp'],
  },
}

export default function MitraVsMandiriLayout({
  children,
}: {
  children: ReactNode
}) {
  return children
}

