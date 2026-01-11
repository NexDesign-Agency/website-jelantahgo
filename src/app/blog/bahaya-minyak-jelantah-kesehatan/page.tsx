import type { Metadata } from 'next'
import ArticleContent from './ArticleContent'

export const metadata: Metadata = {
  title: '5 Bahaya Minyak Jelantah Bagi Kesehatan Menurut Ahli Gizi',
  description: 'Waspada! Menggunakan minyak jelantah berulang kali memicu radikal bebas, senyawa karsinogenik, dan risiko penyakit jantung. Simak 5 bahayanya menurut ahli.',
  alternates: {
    canonical: 'https://jelantahgo.com/blog/bahaya-minyak-jelantah-kesehatan',
  },
  openGraph: {
    title: '5 Bahaya Minyak Jelantah Bagi Kesehatan Menurut Ahli Gizi',
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
    publishedTime: '2025-11-01T00:00:00+07:00',
    modifiedTime: '2025-11-01T00:00:00+07:00',
  },
  twitter: {
    card: 'summary_large_image',
    title: '5 Bahaya Minyak Jelantah Bagi Kesehatan Menurut Ahli Gizi',
    description: 'Waspada! Menggunakan minyak jelantah berulang kali memicu radikal bebas, senyawa karsinogenik, dan risiko penyakit jantung.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163998/jelantahgo_29_txjglj.webp'],
  },
}

export default function BahayaKesehatanPage() {
  return <ArticleContent />
}