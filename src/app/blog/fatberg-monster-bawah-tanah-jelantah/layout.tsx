import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Fatberg: Monster Bawah Tanah dari Jelantah | JelantahGO',
  description: 'Fatberg adalah gumpalan raksasa di saluran pembuangan yang terbentuk dari jelantah. Pelajari bagaimana jelantah Anda bisa menjadi monster bawah tanah yang melumpuhkan kota.',
  keywords: 'fatberg jelantah, monster bawah tanah jelantah, gumpalan jelantah saluran, jelantah menyumbat saluran, fatberg pembuangan, bahaya jelantah saluran',
  alternates: {
    canonical: 'https://jelantahgo.com/blog/fatberg-monster-bawah-tanah-jelantah',
  },
  openGraph: {
    title: 'Fatberg: Monster Bawah Tanah dari Jelantah | JelantahGO',
    description: 'Fatberg adalah gumpalan raksasa di saluran pembuangan yang terbentuk dari jelantah. Pelajari bagaimana jelantah Anda bisa menjadi monster bawah tanah yang melumpuhkan kota.',
    url: 'https://jelantahgo.com/blog/fatberg-monster-bawah-tanah-jelantah',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163997/jelantahgo_21_skuom5.webp',
        width: 1200,
        height: 630,
        alt: 'Fatberg: Monster Bawah Tanah yang Lahir dari Jelantah Dapur Anda',
      },
    ],
    locale: 'id_ID',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fatberg: Monster Bawah Tanah dari Jelantah',
    description: 'Fatberg adalah gumpalan raksasa di saluran pembuangan yang terbentuk dari jelantah. Pelajari bagaimana jelantah Anda bisa menjadi monster bawah tanah yang melumpuhkan kota.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163997/jelantahgo_21_skuom5.webp'],
  },
}

export default function FatbergLayout({
  children,
}: {
  children: ReactNode
}) {
  return children
}

