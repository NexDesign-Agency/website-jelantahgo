import type { Metadata } from 'next'
import ArticleContent from './ArticleContent'

export const metadata: Metadata = {
  title: 'Harga Jual Minyak Jelantah Jakarta Utara | JelantahGO',
  description: 'Update harga minyak jelantah Jakarta Utara. Jual di PIK, Kelapa Gading, Pluit dapatkan Rp 7.500-8.500/liter. Penjemputan gratis ≥40L, bayar tunai!',
  alternates: {
    canonical: 'https://jelantahgo.com/blog/harga-jual-minyak-jelantah-jakarta-utara',
  },
  openGraph: {
    title: 'Harga Jual Minyak Jelantah Jakarta Utara | JelantahGO',
    description: 'Update harga minyak jelantah Jakarta Utara. Jual di PIK, Kelapa Gading, Pluit dapatkan Rp 7.500-8.500/liter. Penjemputan gratis ≥40L, bayar tunai!',
    url: 'https://jelantahgo.com/blog/harga-jual-minyak-jelantah-jakarta-utara',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163997/jelantahgo_19_n7x6ka.webp',
        width: 1200,
        height: 630,
        alt: 'Harga Jual Minyak Jelantah Terbaik di Jakarta Utara',
      },
    ],
    locale: 'id_ID',
    type: 'article',
    publishedTime: '2024-12-22T00:00:00+07:00',
    modifiedTime: '2024-12-28T00:00:00+07:00',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harga Jual Minyak Jelantah Jakarta Utara | JelantahGO',
    description: 'Update harga minyak jelantah Jakarta Utara. Jual di PIK, Kelapa Gading, Pluit dapatkan Rp 7.500-8.500/liter. Penjemputan gratis ≥40L, bayar tunai!',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163997/jelantahgo_19_n7x6ka.webp'],
  },
}

export default function JakartaUtaraHargaPage() {
  return <ArticleContent />
}
