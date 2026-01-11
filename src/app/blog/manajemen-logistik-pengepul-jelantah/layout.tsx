import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Manajemen Logistik Pengepul Jelantah | Tips Rute Efisien | JelantahGO',
  description: 'Panduan lengkap optimasi rute penjemputan jelantah menggunakan Google Maps. Strategi zonasi, multi-stop route, efisiensi logistik untuk meningkatkan profit pengepul.',
  keywords: 'manajemen logistik pengepul, optimasi rute jelantah, strategi logistik pengepul, efisiensi rute penjemputan, manajemen armada pengepul, hemat bensin pengepul',
  alternates: {
    canonical: 'https://jelantahgo.com/blog/manajemen-logistik-pengepul-jelantah',
  },
  openGraph: {
    title: 'Manajemen Logistik Pengepul Jelantah | Tips Rute Efisien | JelantahGO',
    description: 'Panduan lengkap optimasi rute penjemputan jelantah menggunakan Google Maps. Strategi zonasi, multi-stop route, efisiensi logistik untuk meningkatkan profit pengepul.',
    url: 'https://jelantahgo.com/blog/manajemen-logistik-pengepul-jelantah',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761963250/jelantahgo_hero_9_mzwqd2.webp',
        width: 1200,
        height: 630,
        alt: 'Manajemen Logistik Pengepul Jelantah',
      },
    ],
    locale: 'id_ID',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manajemen Logistik Pengepul Jelantah | Tips Rute Efisien',
    description: 'Panduan lengkap optimasi rute penjemputan jelantah menggunakan Google Maps. Strategi zonasi, multi-stop route, efisiensi logistik.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761963250/jelantahgo_hero_9_mzwqd2.webp'],
  },
}

export default function ManajemenLogistikLayout({
  children,
}: {
  children: ReactNode
}) {
  return children
}
