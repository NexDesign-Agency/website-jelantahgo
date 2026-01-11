import type { Metadata } from 'next'
import ArticleContent from './ArticleContent'

export const metadata: Metadata = {
  title: '5 Cara Menyimpan Minyak Jelantah yang Benar (Anti Bau & Tumpah)',
  description: 'Simpan minyak jelantah dengan benar agar harga jualnya tinggi! Pelajari 5 tips memilih wadah, menyaring, dan mencegah bau apek agar dapur tetap bersih.',
  alternates: {
    canonical: 'https://jelantahgo.com/blog/cara-menyimpan-minyak-jelantah',
  },
  openGraph: {
    title: '5 Cara Menyimpan Minyak Jelantah yang Benar (Anti Bau & Tumpah)',
    description: 'Simpan minyak jelantah dengan benar agar harga jualnya tinggi! Pelajari 5 tips memilih wadah, menyaring, dan mencegah bau apek agar dapur tetap bersih.',
    url: 'https://jelantahgo.com/blog/cara-menyimpan-minyak-jelantah',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163998/jelantahgo_28_uanklv.webp',
        width: 1200,
        height: 630,
        alt: 'Cara Menyimpan Minyak Jelantah yang Benar',
      },
    ],
    locale: 'id_ID',
    type: 'article',
    publishedTime: '2025-10-25T00:00:00+07:00',
    modifiedTime: '2025-10-25T00:00:00+07:00',
  },
  twitter: {
    card: 'summary_large_image',
    title: '5 Cara Menyimpan Minyak Jelantah yang Benar (Anti Bau & Tumpah)',
    description: 'Simpan minyak jelantah dengan benar agar harga jualnya tinggi! Pelajari 5 tips memilih wadah, menyaring, dan mencegah bau apek agar dapur tetap bersih.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163998/jelantahgo_28_uanklv.webp'],
  },
}

export default function CaraMenyimpanPage() {
  return <ArticleContent />
}