import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Waktu Terbaik Jual Minyak Jelantah: Strategi Optimal | JelantahGO',
  description: 'Pelajari kapan waktu terbaik menjual minyak jelantah untuk dapat harga tertinggi. Strategi musim, volume, dan faktor domestik yang mempengaruhi harga jelantah di pasaran.',
  keywords: 'waktu terbaik jual jelantah, kapan jual minyak jelantah, strategi waktu jual jelantah, musim jual jelantah, harga jelantah tertinggi, optimal timing jual jelantah',
  alternates: {
    canonical: 'https://jelantahgo.com/blog/waktu-terbaik-jual-jelantah',
  },
  openGraph: {
    title: 'Waktu Terbaik Jual Minyak Jelantah: Strategi Optimal | JelantahGO',
    description: 'Pelajari kapan waktu terbaik menjual minyak jelantah untuk dapat harga tertinggi. Strategi musim, volume, dan faktor domestik yang mempengaruhi harga jelantah di pasaran.',
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
    title: 'Waktu Terbaik Jual Minyak Jelantah: Strategi Optimal',
    description: 'Pelajari kapan waktu terbaik menjual minyak jelantah untuk dapat harga tertinggi. Strategi musim, volume, dan faktor domestik yang mempengaruhi harga.',
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

