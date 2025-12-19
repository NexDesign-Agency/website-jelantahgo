import type { Metadata } from 'next'
import BlogPageContent from './BlogPageContent'

export const metadata: Metadata = {
  title: 'Blog JelantahGO - Panduan Minyak Jelantah & Bisnis | JelantahGO',
  description: 'Pusat informasi terlengkap tentang minyak jelantah, cara jual, tips bisnis, edukasi lingkungan, dan biodiesel. 3 Artikel Pilar dan 35+ artikel pendukung. Panduan lengkap untuk penjual, pengepul, dan pelaku bisnis jelantah. Update terbaru harga, strategi bisnis, dan tips menguntungkan.',
  keywords: 'blog jelantah, panduan jual jelantah, bisnis jelantah, biodiesel, lingkungan, cara jual minyak jelantah',
  alternates: {
    canonical: 'https://jelantahgo.com/blog',
  },
  openGraph: {
    title: 'Blog JelantahGO - Panduan Minyak Jelantah & Bisnis | JelantahGO',
    description: 'Pusat informasi terlengkap tentang minyak jelantah, cara jual, tips bisnis, edukasi lingkungan, dan biodiesel. 3 Artikel Pilar dan 35+ artikel pendukung. Panduan lengkap untuk penjual, pengepul, dan pelaku bisnis jelantah. Update terbaru harga, strategi bisnis, dan tips menguntungkan.',
    url: 'https://jelantahgo.com/blog',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/v1760998331/jelantah-go_6_sop0by.webp',
        width: 1200,
        height: 630,
        alt: 'Blog JelantahGO - Panduan Lengkap Minyak Jelantah',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog JelantahGO - Panduan Minyak Jelantah & Bisnis | JelantahGO',
    description: 'Pusat informasi terlengkap tentang minyak jelantah, cara jual, tips bisnis, edukasi lingkungan, dan biodiesel. 3 Artikel Pilar dan 35+ artikel pendukung.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/v1760998331/jelantah-go_6_sop0by.webp'],
  },
}

export default function BlogPage() {
  return <BlogPageContent />
}