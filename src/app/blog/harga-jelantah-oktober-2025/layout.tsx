import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Harga Minyak Jelantah Oktober 2025: Update Lengkap | JelantahGO',
  description: 'Update harga minyak jelantah Oktober 2025. Informasi lengkap harga per liter berdasarkan volume, faktor yang mempengaruhi harga, dan tips dapat harga terbaik.',
  keywords: 'harga jelantah oktober 2025, harga minyak jelantah, update harga jelantah, harga jelantah per liter, harga jual jelantah terbaru, harga jelantah 2025',
  alternates: {
    canonical: 'https://jelantahgo.com/blog/harga-jelantah-oktober-2025',
  },
  openGraph: {
    title: 'Harga Minyak Jelantah Oktober 2025: Update Lengkap | JelantahGO',
    description: 'Update harga minyak jelantah Oktober 2025. Informasi lengkap harga per liter berdasarkan volume, faktor yang mempengaruhi harga, dan tips dapat harga terbaik.',
    url: 'https://jelantahgo.com/blog/harga-jelantah-oktober-2025',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761963251/jelantahgo_hero_12_qu8bdm.webp',
        width: 1200,
        height: 630,
        alt: 'Update Harga Minyak Jelantah Oktober 2025',
      },
    ],
    locale: 'id_ID',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harga Minyak Jelantah Oktober 2025: Update Lengkap',
    description: 'Update harga minyak jelantah Oktober 2025. Informasi lengkap harga per liter berdasarkan volume, faktor yang mempengaruhi harga.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761963251/jelantahgo_hero_12_qu8bdm.webp'],
  },
}

export default function HargaOktoberLayout({
  children,
}: {
  children: ReactNode
}) {
  return children
}

