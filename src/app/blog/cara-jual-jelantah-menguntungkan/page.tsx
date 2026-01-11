import type { Metadata } from 'next'
import ArticleContent from './ArticleContent'

export const metadata: Metadata = {
  title: 'Cara Jual Minyak Jelantah Menguntungkan | 5 Strategi Terbukti',
  description: '5 strategi terbukti jual minyak jelantah harga maksimal! Pelajari cara memilih pengepul terpercaya, negosiasi harga, dan timing terbaik untuk profit maksimal.',
  alternates: {
    canonical: 'https://jelantahgo.com/blog/cara-jual-jelantah-menguntungkan',
  },
  openGraph: {
    title: 'Cara Jual Minyak Jelantah Menguntungkan | 5 Strategi Terbukti',
    description: '5 strategi terbukti jual minyak jelantah harga maksimal! Pelajari cara memilih pengepul terpercaya, negosiasi harga, dan timing terbaik untuk profit maksimal.',
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
    publishedTime: '2024-12-15T00:00:00+07:00',
    modifiedTime: '2024-12-28T00:00:00+07:00',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cara Jual Minyak Jelantah Menguntungkan | 5 Strategi Terbukti',
    description: '5 strategi terbukti jual minyak jelantah harga maksimal! Pelajari cara memilih pengepul terpercaya, negosiasi harga, dan timing terbaik untuk profit maksimal.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761963249/jelantahgo_hero_5_r4hdb5.webp'],
  },
}

export default function CaraJualMenguntungkanPage() {
  return <ArticleContent />
}