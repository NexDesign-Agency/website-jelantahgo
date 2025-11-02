import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: '5 Ciri Pengepul Jelantah Nakal & Cara Menghindarinya | JelantahGO',
  description: 'Jangan tertipu! Kenali 5 ciri pengepul minyak jelantah nakal, dari permainan harga, timbangan curang, hingga pembayaran fiktif. Lindungi keuntungan Anda dengan tips ini.',
  keywords: 'pengepul jelantah nakal, penipuan jelantah, timbangan jelantah jujur, ciri pengepul terpercaya, tips jual jelantah, harga jelantah palsu',
  alternates: {
    canonical: 'https://jelantahgo.com/blog/ciri-pengepul-jelantah-nakal',
  },
  openGraph: {
    title: '5 Ciri Pengepul Jelantah Nakal & Cara Menghindarinya | JelantahGO',
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
  },
  twitter: {
    card: 'summary_large_image',
    title: '5 Ciri Pengepul Jelantah Nakal & Cara Menghindarinya',
    description: 'Jangan tertipu! Kenali 5 ciri pengepul minyak jelantah nakal, dari permainan harga, timbangan curang, hingga pembayaran fiktif. Lindungi keuntungan Anda.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163998/jelantahgo_24_cbndgk.webp'],
  },
}

export default function CiriPengepulNakalLayout({
  children,
}: {
  children: ReactNode
}) {
  return children
}

