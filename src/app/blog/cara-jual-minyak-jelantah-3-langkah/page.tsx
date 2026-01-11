import type { Metadata } from 'next'
import ArticleContent from './ArticleContent'

export const metadata: Metadata = {
  title: 'Cara Jual Minyak Jelantah dalam 3 Langkah Mudah | JelantahGO',
  description: 'Panduan praktis jual minyak jelantah di Jakarta dalam 3 langkah mudah: Hubungi kami, kami jemput gratis (min 40L), dan terima bayaran langsung!',
  alternates: {
    canonical: 'https://jelantahgo.com/blog/cara-jual-minyak-jelantah-3-langkah',
  },
  openGraph: {
    title: 'Cara Jual Minyak Jelantah dalam 3 Langkah Mudah | JelantahGO',
    description: 'Panduan praktis jual minyak jelantah di Jakarta dalam 3 langkah mudah: Hubungi kami, kami jemput gratis (min 40L), dan terima bayaran langsung!',
    url: 'https://jelantahgo.com/blog/cara-jual-minyak-jelantah-3-langkah',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1760998331/jelantahgo_6_u3erug.webp',
        width: 1200,
        height: 630,
        alt: 'Cara Jual Minyak Jelantah Jakarta - 3 Langkah Mudah',
      },
    ],
    locale: 'id_ID',
    type: 'article',
    publishedTime: '2025-11-07T00:00:00+07:00',
    modifiedTime: '2025-11-07T00:00:00+07:00',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cara Jual Minyak Jelantah dalam 3 Langkah Mudah | JelantahGO',
    description: 'Panduan praktis jual minyak jelantah di Jakarta dalam 3 langkah mudah: Hubungi kami, kami jemput gratis (min 40L), dan terima bayaran langsung!',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1760998331/jelantahgo_6_u3erug.webp'],
  },
}

export default function CaraJual3LangkahPage() {
  return <ArticleContent />
}