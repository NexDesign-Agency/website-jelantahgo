import type { Metadata } from 'next'
import ArticleContent from './ArticleContent'

export const metadata: Metadata = {
  title: 'Waspada! 5 Ciri Pengepul Minyak Jelantah Nakal & Cara Menghindarinya',
  description: 'Jangan tertipu! Kenali 5 ciri pengepul minyak jelantah nakal, dari permainan harga, timbangan curang, hingga pembayaran fiktif. Lindungi keuntungan Anda dengan tips ini.',
  alternates: {
    canonical: 'https://jelantahgo.com/blog/ciri-pengepul-jelantah-nakal',
  },
  openGraph: {
    title: 'Waspada! 5 Ciri Pengepul Minyak Jelantah Nakal & Cara Menghindarinya',
    description: 'Jangan tertipu! Kenali 5 ciri pengepul minyak jelantah nakal, dari permainan harga, timbangan curang, hingga pembayaran fiktif. Lindungi keuntungan Anda dengan tips ini.',
    url: 'https://jelantahgo.com/blog/ciri-pengepul-jelantah-nakal',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163998/jelantahgo_24_cbndgk.webp',
        width: 1200,
        height: 630,
        alt: 'Waspada! 5 Ciri Pengepul Jelantah Nakal',
      },
    ],
    locale: 'id_ID',
    type: 'article',
    publishedTime: '2025-10-29T00:00:00+07:00',
    modifiedTime: '2025-10-29T00:00:00+07:00',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Waspada! 5 Ciri Pengepul Minyak Jelantah Nakal & Cara Menghindarinya',
    description: 'Jangan tertipu! Kenali 5 ciri pengepul minyak jelantah nakal, dari permainan harga, timbangan curang, hingga pembayaran fiktif. Lindungi keuntungan Anda dengan tips ini.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163998/jelantahgo_24_cbndgk.webp'],
  },
}

export default function CiriPengepulNakalPage() {
  return <ArticleContent />
}