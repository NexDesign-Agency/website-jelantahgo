import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Kapan Waktu Terbaik untuk Jual Minyak Jelantah? Strategi Waktu Optimal | JelantahGO',
  description: 'Pelajari kapan waktu terbaik menjual minyak jelantah untuk dapat harga tertinggi. Strategi musim, volume, dan faktor domestik yang mempengaruhi harga jelantah.',
  keywords: 'waktu terbaik jual jelantah, kapan jual minyak jelantah, strategi waktu jual jelantah, musim jual jelantah, harga jelantah tertinggi, optimal timing jual jelantah',
  alternates: {
    canonical: 'https://jelantahgo.com/blog/waktu-terbaik-jual-jelantah',
  },
  openGraph: {
    title: 'Kapan Waktu Terbaik untuk Jual Minyak Jelantah? Strategi Waktu Optimal | JelantahGO',
    description: 'Pelajari kapan waktu terbaik menjual minyak jelantah untuk dapat harga tertinggi. Strategi musim, volume, dan faktor domestik yang mempengaruhi harga jelantah.',
    url: 'https://jelantahgo.com/blog/waktu-terbaik-jual-jelantah',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761171105/jelantah-go_13_ok4gma.webp',
        width: 1200,
        height: 630,
        alt: 'Kapan Waktu Terbaik untuk Jual Minyak Jelantah?',
      },
    ],
    locale: 'id_ID',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kapan Waktu Terbaik untuk Jual Minyak Jelantah? Strategi Waktu Optimal',
    description: 'Pelajari kapan waktu terbaik menjual minyak jelantah untuk dapat harga tertinggi. Strategi musim, volume, dan faktor domestik.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761171105/jelantah-go_13_ok4gma.webp'],
  },
}

export default function WaktuTerbaikLayout({
  children,
}: {
  children: ReactNode
}) {
  return children
}

