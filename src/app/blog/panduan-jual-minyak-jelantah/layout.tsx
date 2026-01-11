import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Panduan Jual Minyak Jelantah 2025: Harga & Pengepul | JelantahGO',
  description: 'Punya minyak jelantah? Jangan dibuang! Pelajari cara menjualnya dengan harga terbaik di tahun 2025. Panduan lengkap cara kumpul, cek harga, & pilih pengepul terpercaya.',
  keywords: 'jual minyak jelantah, panduan jelantah, harga minyak jelantah 2025, pengepul minyak jelantah, cara jual jelantah, bisnis jelantah, keuntungan jual jelantah',
  alternates: {
    canonical: 'https://jelantahgo.com/blog/panduan-jual-minyak-jelantah',
  },
  openGraph: {
    title: 'Panduan Jual Minyak Jelantah 2025: Harga & Pengepul | JelantahGO',
    description: 'Punya minyak jelantah? Jangan dibuang! Pelajari cara menjualnya dengan harga terbaik di tahun 2025. Panduan lengkap cara kumpul, cek harga, & pilih pengepul terpercaya.',
    url: 'https://jelantahgo.com/blog/panduan-jual-minyak-jelantah',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163995/jelantahgo_14_bfmpp8.webp',
        width: 1200,
        height: 630,
        alt: 'Panduan Terlengkap Jual Minyak Jelantah 2025',
      },
    ],
    locale: 'id_ID',
    type: 'article',
    publishedTime: '2025-10-22T00:00:00+07:00',
    modifiedTime: '2025-10-22T00:00:00+07:00',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Panduan Jual Minyak Jelantah 2025: Harga & Pengepul',
    description: 'Punya minyak jelantah? Jangan dibuang! Pelajari cara menjualnya dengan harga terbaik di tahun 2025.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163995/jelantahgo_14_bfmpp8.webp'],
  },
}

export default function PanduanJualLayout({
  children,
}: {
  children: ReactNode
}) {
  return children
}

