import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Regulasi Limbah B3 Jelantah | Panduan Bisnis Kuliner | JelantahGO',
  description: 'Pahami kewajiban hukum pengelolaan limbah B3 jelantah untuk restoran, hotel, dan katering. PP No. 22/2021, sanksi, dokumentasi, dan solusi kepatuhan dengan JelantahGO.',
  keywords: 'regulasi limbah B3 jelantah, PP 22 tahun 2021, kewajiban bisnis kuliner, manifest limbah B3, kepatuhan lingkungan, PROPER, audit lingkungan jelantah',
  alternates: {
    canonical: 'https://jelantahgo.com/blog/regulasi-limbah-b3-jelantah-bisnis-kuliner',
  },
  openGraph: {
    title: 'Regulasi Limbah B3 Jelantah | Panduan Bisnis Kuliner | JelantahGO',
    description: 'Pahami kewajiban hukum pengelolaan limbah B3 jelantah untuk restoran, hotel, dan katering. PP No. 22/2021, sanksi, dokumentasi, dan solusi kepatuhan dengan JelantahGO.',
    url: 'https://jelantahgo.com/blog/regulasi-limbah-b3-jelantah-bisnis-kuliner',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163996/jelantahgo_20_dzrxak.webp',
        width: 1200,
        height: 630,
        alt: 'Regulasi Limbah B3 Jelantah di Indonesia',
      },
    ],
    locale: 'id_ID',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Regulasi Limbah B3 Jelantah | Panduan Bisnis Kuliner',
    description: 'Pahami kewajiban hukum pengelolaan limbah B3 jelantah untuk restoran, hotel, dan katering. PP No. 22/2021, sanksi, dokumentasi.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163996/jelantahgo_20_dzrxak.webp'],
  },
}

export default function RegulasiB3Layout({
  children,
}: {
  children: ReactNode
}) {
  return children
}

