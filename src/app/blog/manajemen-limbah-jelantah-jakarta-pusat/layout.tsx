import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Manajemen Limbah Jelantah Jakarta Pusat | Hotel & Perkantoran | JelantahGO',
  description: 'Solusi manajemen limbah jelantah terintegrasi untuk hotel, gedung perkantoran, dan mal di Jakarta Pusat. Kepatuhan regulasi Limbah B3, dokumentasi PROPER, layanan B2B profesional.',
  keywords: 'manajemen limbah jelantah jakarta pusat, pengepul jelantah hotel, limbah B3 perkantoran, manajemen limbah korporat, compliance jelantah hotel, pengepul jakpus',
  alternates: {
    canonical: 'https://jelantahgo.com/blog/manajemen-limbah-jelantah-jakarta-pusat',
  },
  openGraph: {
    title: 'Manajemen Limbah Jelantah Jakarta Pusat | Hotel & Perkantoran | JelantahGO',
    description: 'Solusi manajemen limbah jelantah terintegrasi untuk hotel, gedung perkantoran, dan mal di Jakarta Pusat. Kepatuhan regulasi Limbah B3, dokumentasi PROPER.',
    url: 'https://jelantahgo.com/blog/manajemen-limbah-jelantah-jakarta-pusat',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761963251/jelantahgo_hero_8_cwujgg.webp',
        width: 1200,
        height: 630,
        alt: 'Manajemen Limbah Jelantah Profesional untuk Hotel & Perkantoran di Jakarta Pusat',
      },
    ],
    locale: 'id_ID',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manajemen Limbah Jelantah Jakarta Pusat | Hotel & Perkantoran',
    description: 'Solusi manajemen limbah jelantah terintegrasi untuk hotel, gedung perkantoran, dan mal di Jakarta Pusat. Kepatuhan regulasi Limbah B3.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761963251/jelantahgo_hero_8_cwujgg.webp'],
  },
}

export default function JakartaPusatManajemenLayout({
  children,
}: {
  children: ReactNode
}) {
  return children
}

