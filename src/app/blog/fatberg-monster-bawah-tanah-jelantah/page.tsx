import type { Metadata } from 'next'
import ArticleContent from './ArticleContent'

export const metadata: Metadata = {
  title: 'Fatberg: Monster Bawah Tanah dari Jelantah & Cara Mencegahnya',
  description: 'Fatberg adalah gumpalan raksasa di saluran pembuangan dari jelantah. Pelajari bagaimana jelantah Anda bisa menjadi monster yang melumpuhkan kota dan cara mencegahnya.',
  alternates: {
    canonical: 'https://jelantahgo.com/blog/fatberg-monster-bawah-tanah-jelantah',
  },
  openGraph: {
    title: 'Fatberg: Monster Bawah Tanah dari Jelantah & Cara Mencegahnya',
    description: 'Fatberg adalah gumpalan raksasa di saluran pembuangan dari jelantah. Pelajari bagaimana jelantah Anda bisa menjadi monster yang melumpuhkan kota dan cara mencegahnya.',
    url: 'https://jelantahgo.com/blog/fatberg-monster-bawah-tanah-jelantah',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163997/jelantahgo_21_skuom5.webp',
        width: 1200,
        height: 630,
        alt: 'Fatberg: Monster Bawah Tanah dari Jelantah',
      },
    ],
    locale: 'id_ID',
    type: 'article',
    publishedTime: '2025-10-18T00:00:00+07:00',
    modifiedTime: '2025-10-18T00:00:00+07:00',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fatberg: Monster Bawah Tanah dari Jelantah & Cara Mencegahnya',
    description: 'Fatberg adalah gumpalan raksasa di saluran pembuangan dari jelantah. Pelajari bagaimana jelantah Anda bisa menjadi monster yang melumpuhkan kota dan cara mencegahnya.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163997/jelantahgo_21_skuom5.webp'],
  },
}

export default function FatbergPage() {
  return <ArticleContent />
}