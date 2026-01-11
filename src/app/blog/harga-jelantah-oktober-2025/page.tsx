import type { Metadata } from 'next'
import ArticleContent from './ArticleContent'

export const metadata: Metadata = {
  title: 'Update Harga Minyak Jelantah Desember 2024: Naik Drastis!',
  description: 'Harga minyak jelantah naik! Update Desember 2024, harga mencapai Rp 7.500-8.500/liter. Jual sekarang untuk keuntungan maksimal. Cek faktor & tips di sini.',
  alternates: {
    canonical: 'https://jelantahgo.com/blog/harga-jelantah-oktober-2025',
  },
  openGraph: {
    title: 'Update Harga Minyak Jelantah Desember 2024: Naik Drastis!',
    description: 'Harga minyak jelantah naik! Update Desember 2024, harga mencapai Rp 7.500-8.500/liter. Jual sekarang untuk keuntungan maksimal. Cek faktor & tips di sini.',
    url: 'https://jelantahgo.com/blog/harga-jelantah-oktober-2025',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761963251/jelantahgo_hero_12_qu8bdm.webp',
        width: 1200,
        height: 630,
        alt: 'Update Harga Minyak Jelantah Desember 2024',
      },
    ],
    locale: 'id_ID',
    type: 'article',
    publishedTime: '2024-12-01T00:00:00+07:00',
    modifiedTime: '2024-12-28T00:00:00+07:00',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Update Harga Minyak Jelantah Desember 2024: Naik Drastis!',
    description: 'Harga minyak jelantah naik! Update Desember 2024, harga mencapai Rp 7.500-8.500/liter. Jual sekarang untuk keuntungan maksimal.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761963251/jelantahgo_hero_12_qu8bdm.webp'],
  },
}

export default function HargaOktober2025Page() {
  return <ArticleContent />
}
