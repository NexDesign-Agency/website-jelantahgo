import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Cara Menyimpan Minyak Jelantah: 5 Tips Anti Bau & Tumpah | JelantahGO',
  description: 'Simpan minyak jelantah dengan benar agar harga jualnya tinggi! Pelajari 5 tips memilih wadah, menyaring, dan mencegah bau apek agar dapur tetap bersih.',
  keywords: 'cara menyimpan minyak jelantah, tips menyimpan jelantah, wadah minyak jelantah, jelantah bau, cara menyaring jelantah, menyimpan minyak goreng bekas',
  alternates: {
    canonical: 'https://jelantahgo.com/blog/cara-menyimpan-minyak-jelantah',
  },
  openGraph: {
    title: 'Cara Menyimpan Minyak Jelantah: 5 Tips Anti Bau & Tumpah | JelantahGO',
    description: 'Simpan minyak jelantah dengan benar agar harga jualnya tinggi! Pelajari 5 tips memilih wadah, menyaring, dan mencegah bau apek agar dapur tetap bersih.',
    url: 'https://jelantahgo.com/blog/cara-menyimpan-minyak-jelantah',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163998/jelantahgo_28_uanklv.webp',
        width: 1200,
        height: 630,
        alt: 'Cara Menyimpan Minyak Jelantah: 5 Tips Anti Bau & Tumpah',
      },
    ],
    locale: 'id_ID',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cara Menyimpan Minyak Jelantah: 5 Tips Anti Bau & Tumpah',
    description: 'Simpan minyak jelantah dengan benar agar harga jualnya tinggi! Pelajari 5 tips memilih wadah, menyaring, dan mencegah bau apek.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163998/jelantahgo_28_uanklv.webp'],
  },
}

export default function CaraMenyimpanLayout({
  children,
}: {
  children: ReactNode
}) {
  return children
}

