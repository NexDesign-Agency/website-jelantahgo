import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: '5 Langkah Negosiasi Harga Pengepul Jelantah | JelantahGO',
  description: 'Pelajari 5 langkah negosiasi harga dengan pengepul jelantah. Tips pahami kualitas, riset harga pasar, tawarkan volume besar, dan strategi negosiasi untuk dapat harga terbaik.',
  keywords: 'negosiasi harga pengepul, cara negosiasi jelantah, tips negosiasi harga, dapat harga jelantah terbaik, strategi negosiasi pengepul, harga jelantah tertinggi',
  alternates: {
    canonical: 'https://jelantahgo.com/blog/negosiasi-harga-pengepul',
  },
  openGraph: {
    title: '5 Langkah Negosiasi Harga Pengepul Jelantah | JelantahGO',
    description: 'Pelajari 5 langkah negosiasi harga dengan pengepul jelantah. Tips pahami kualitas, riset harga pasar, tawarkan volume besar, dan strategi negosiasi untuk dapat harga terbaik.',
    url: 'https://jelantahgo.com/blog/negosiasi-harga-pengepul',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163995/jelantahgo_9_cjolqm.webp',
        width: 1200,
        height: 630,
        alt: 'Cara Negosiasi Harga dengan Pengepul Jelantah',
      },
    ],
    locale: 'id_ID',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '5 Langkah Negosiasi Harga Pengepul Jelantah',
    description: 'Pelajari 5 langkah negosiasi harga dengan pengepul jelantah. Tips pahami kualitas, riset harga pasar, tawarkan volume besar.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163995/jelantahgo_9_cjolqm.webp'],
  },
}

export default function NegosiasiHargaLayout({
  children,
}: {
  children: ReactNode
}) {
  return children
}

