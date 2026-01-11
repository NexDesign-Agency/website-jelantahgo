import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: '5 Bahaya Minyak Jelantah Bagi Kesehatan (Menurut Ahli Gizi) | JelantahGO',
  description: 'Waspada! Menggunakan minyak jelantah berulang kali memicu radikal bebas, senyawa karsinogenik, dan risiko penyakit jantung. Simak 5 bahayanya menurut ahli.',
  keywords: 'bahaya minyak jelantah, kesehatan minyak jelantah, bahaya jelantah, minyak goreng berulang kali, radikal bebas, karsinogenik, penyakit jantung, jelantah',
  alternates: {
    canonical: 'https://jelantahgo.com/blog/bahaya-minyak-jelantah-kesehatan',
  },
  openGraph: {
    title: '5 Bahaya Minyak Jelantah Bagi Kesehatan (Menurut Ahli Gizi) | JelantahGO',
    description: 'Waspada! Menggunakan minyak jelantah berulang kali memicu radikal bebas, senyawa karsinogenik, dan risiko penyakit jantung. Simak 5 bahayanya menurut ahli.',
    url: 'https://jelantahgo.com/blog/bahaya-minyak-jelantah-kesehatan',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163998/jelantahgo_29_txjglj.webp',
        width: 1200,
        height: 630,
        alt: '5 Bahaya Minyak Jelantah Bagi Kesehatan',
      },
    ],
    locale: 'id_ID',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '5 Bahaya Minyak Jelantah Bagi Kesehatan (Menurut Ahli Gizi)',
    description: 'Waspada! Menggunakan minyak jelantah berulang kali memicu radikal bebas, senyawa karsinogenik, dan risiko penyakit jantung.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163998/jelantahgo_29_txjglj.webp'],
  },
}

export default function BahayaKesehatanLayout({
  children,
}: {
  children: ReactNode
}) {
  return children
}

