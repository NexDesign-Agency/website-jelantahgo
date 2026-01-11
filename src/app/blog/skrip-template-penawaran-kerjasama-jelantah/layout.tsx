import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: '5 Skrip & Template Penawaran Kerjasama Jelantah | JelantahGO',
  description: '5 skrip dan template penawaran kerjasama jelantah yang teruji untuk mendapatkan pemasok. Dari WhatsApp informal hingga email formal, lengkap dengan contoh teks siap pakai.',
  keywords: 'skrip penawaran jelantah, template kerjasama jelantah, cara dapat pemasok jelantah, penawaran bisnis jelantah, akuisisi pemasok jelantah, komunikasi pengepul',
  alternates: {
    canonical: 'https://jelantahgo.com/blog/skrip-template-penawaran-kerjasama-jelantah',
  },
  openGraph: {
    title: '5 Skrip & Template Penawaran Kerjasama Jelantah | JelantahGO',
    description: '5 skrip dan template penawaran kerjasama jelantah yang teruji untuk mendapatkan pemasok. Dari WhatsApp informal hingga email formal, lengkap dengan contoh teks siap pakai.',
    url: 'https://jelantahgo.com/blog/skrip-template-penawaran-kerjasama-jelantah',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761963250/jelantahgo_hero_10_mczrvd.webp',
        width: 1200,
        height: 630,
        alt: '5 Skrip & Template Penawaran Kerjasama Jelantah',
      },
    ],
    locale: 'id_ID',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '5 Skrip & Template Penawaran Kerjasama Jelantah',
    description: '5 skrip dan template penawaran kerjasama jelantah yang teruji untuk mendapatkan pemasok. Dari WhatsApp informal hingga email formal.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761963250/jelantahgo_hero_10_mczrvd.webp'],
  },
}

export default function SkripTemplateLayout({
  children,
}: {
  children: ReactNode
}) {
  return children
}

