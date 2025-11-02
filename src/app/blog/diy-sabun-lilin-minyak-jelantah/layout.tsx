import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'DIY Sabun & Lilin dari Minyak Jelantah | Panduan Aman | JelantahGO',
  description: 'Panduan lengkap membuat sabun dan lilin dari minyak jelantah di rumah. Tutorial aman dengan APD lengkap, bahan, alat, dan langkah-langkah detail. Tips keselamatan penting!',
  keywords: 'diy sabun jelantah, cara buat sabun dari jelantah, lilin dari minyak jelantah, daur ulang jelantah, craft dari jelantah, sabun cuci jelantah',
  alternates: {
    canonical: 'https://jelantahgo.com/blog/diy-sabun-lilin-minyak-jelantah',
  },
  openGraph: {
    title: 'DIY Sabun & Lilin dari Minyak Jelantah | Panduan Aman | JelantahGO',
    description: 'Panduan lengkap membuat sabun dan lilin dari minyak jelantah di rumah. Tutorial aman dengan APD lengkap, bahan, alat, dan langkah-langkah detail. Tips keselamatan penting!',
    url: 'https://jelantahgo.com/blog/diy-sabun-lilin-minyak-jelantah',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163997/jelantahgo_22_wuy3fj.webp',
        width: 1200,
        height: 630,
        alt: 'DIY Kreatif: Cara Membuat Sabun & Lilin dari Minyak Jelantah',
      },
    ],
    locale: 'id_ID',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DIY Sabun & Lilin dari Minyak Jelantah | Panduan Aman',
    description: 'Panduan lengkap membuat sabun dan lilin dari minyak jelantah di rumah. Tutorial aman dengan APD lengkap, bahan, alat, dan langkah-langkah detail.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163997/jelantahgo_22_wuy3fj.webp'],
  },
}

export default function DIYSabunLilinLayout({
  children,
}: {
  children: ReactNode
}) {
  return children
}

