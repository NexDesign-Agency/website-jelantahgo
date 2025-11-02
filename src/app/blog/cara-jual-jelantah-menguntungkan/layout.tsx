import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Cara Jual Jelantah Menguntungkan: 5 Strategi | JelantahGO',
  description: 'Pelajari 5 strategi jual minyak jelantah yang paling menguntungkan. Tips memilih pengepul terpercaya, teknik negosiasi harga, dan cara dapat harga terbaik untuk jelantah Anda.',
  keywords: 'cara jual jelantah menguntungkan, strategi jual jelantah, tips jual minyak jelantah, dapat harga jelantah terbaik, pengepul jelantah terpercaya, negosiasi harga jelantah',
  alternates: {
    canonical: 'https://jelantahgo.com/blog/cara-jual-jelantah-menguntungkan',
  },
  openGraph: {
    title: 'Cara Jual Jelantah Menguntungkan: 5 Strategi | JelantahGO',
    description: 'Pelajari 5 strategi jual minyak jelantah yang paling menguntungkan. Tips memilih pengepul terpercaya, teknik negosiasi harga, dan cara dapat harga terbaik untuk jelantah Anda.',
    url: 'https://jelantahgo.com/blog/cara-jual-jelantah-menguntungkan',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761963249/jelantahgo_hero_5_r4hdb5.webp',
        width: 1200,
        height: 630,
        alt: 'Cara Jual Minyak Jelantah yang Paling Menguntungkan',
      },
    ],
    locale: 'id_ID',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cara Jual Jelantah Menguntungkan: 5 Strategi',
    description: 'Pelajari 5 strategi jual minyak jelantah yang paling menguntungkan. Tips memilih pengepul terpercaya, teknik negosiasi harga, dan cara dapat harga terbaik.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761963249/jelantahgo_hero_5_r4hdb5.webp'],
  },
}

export default function CaraJualMenguntungkanLayout({
  children,
}: {
  children: ReactNode
}) {
  return children
}

