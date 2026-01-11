import type { Metadata } from 'next'
import ArticleContent from './ArticleContent'

export const metadata: Metadata = {
  title: 'Bahaya & Peluang Minyak Jelantah: Dampak Lingkungan & Ekonomi',
  description: 'Eksplorasi mendalam tentang bahaya membuang jelantah sembarangan dan peluang besar di baliknya. Dari dampak lingkungan hingga potensi bisnis yang luar biasa di industri biodiesel.',
  alternates: {
    canonical: 'https://jelantahgo.com/blog/ancaman-dan-peluang-minyak-jelantah',
  },
  openGraph: {
    title: 'Bahaya & Peluang Minyak Jelantah: Dampak Lingkungan & Ekonomi',
    description: 'Eksplorasi mendalam tentang bahaya membuang jelantah sembarangan dan peluang besar di baliknya. Dari dampak lingkungan hingga potensi bisnis yang luar biasa di industri biodiesel.',
    url: 'https://jelantahgo.com/blog/ancaman-dan-peluang-minyak-jelantah',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761963251/jelantahgo_hero_13_ellxu3.webp',
        width: 1200,
        height: 630,
        alt: 'Bahaya & Peluang Emas Minyak Jelantah',
      },
    ],
    locale: 'id_ID',
    type: 'article',
    publishedTime: '2025-10-15T00:00:00+07:00',
    modifiedTime: '2025-10-15T00:00:00+07:00',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bahaya & Peluang Minyak Jelantah: Dampak Lingkungan & Ekonomi',
    description: 'Eksplorasi mendalam tentang bahaya membuang jelantah sembarangan dan peluang besar di baliknya. Dari dampak lingkungan hingga potensi bisnis.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761963251/jelantahgo_hero_13_ellxu3.webp'],
  },
}

export default function AncamanDanPeluangPage() {
  return <ArticleContent />
}