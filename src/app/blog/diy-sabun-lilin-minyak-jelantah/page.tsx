import type { Metadata } from 'next'
import ArticleContent from './ArticleContent'

export const metadata: Metadata = {
  title: 'Cara Membuat Sabun & Lilin dari Minyak Jelantah (DIY Aman di Rumah)',
  description: 'Panduan DIY membuat sabun dan lilin dari minyak jelantah. Tutorial aman dengan APD, bahan, alat, dan langkah-langkah detail. Ubah limbah jadi produk berguna!',
  alternates: {
    canonical: 'https://jelantahgo.com/blog/diy-sabun-lilin-minyak-jelantah',
  },
  openGraph: {
    title: 'Cara Membuat Sabun & Lilin dari Minyak Jelantah (DIY Aman di Rumah)',
    description: 'Panduan DIY membuat sabun dan lilin dari minyak jelantah. Tutorial aman dengan APD, bahan, alat, dan langkah-langkah detail. Ubah limbah jadi produk berguna!',
    url: 'https://jelantahgo.com/blog/diy-sabun-lilin-minyak-jelantah',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163997/jelantahgo_22_wuy3fj.webp',
        width: 1200,
        height: 630,
        alt: 'DIY Sabun & Lilin dari Minyak Jelantah',
      },
    ],
    locale: 'id_ID',
    type: 'article',
    publishedTime: '2025-10-22T00:00:00+07:00',
    modifiedTime: '2025-10-22T00:00:00+07:00',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cara Membuat Sabun & Lilin dari Minyak Jelantah (DIY Aman di Rumah)',
    description: 'Panduan DIY membuat sabun dan lilin dari minyak jelantah. Tutorial aman dengan APD, bahan, alat, dan langkah-langkah detail.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163997/jelantahgo_22_wuy3fj.webp'],
  },
}

export default function DIYSabunLilinPage() {
  return <ArticleContent />
}