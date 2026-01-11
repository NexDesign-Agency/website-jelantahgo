import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: '5 Kesalahan Menyimpan Jelantah yang Bikin Harga Turun | JelantahGO',
  description: 'Hindari 5 kesalahan menyimpan minyak jelantah yang membuat harga jual turun: tidak menyaring, wadah salah, campur air, terbuka, dan tempat penyimpanan salah.',
  keywords: 'kesalahan menyimpan jelantah, cara menyimpan jelantah benar, tips menyimpan minyak jelantah, wadah jelantah, menyaring jelantah, harga jelantah turun',
  alternates: {
    canonical: 'https://jelantahgo.com/blog/kesalahan-menyimpan-jelantah',
  },
  openGraph: {
    title: '5 Kesalahan Menyimpan Jelantah yang Bikin Harga Turun | JelantahGO',
    description: 'Hindari 5 kesalahan menyimpan minyak jelantah yang membuat harga jual turun: tidak menyaring, wadah salah, campur air, terbuka, dan tempat penyimpanan salah.',
    url: 'https://jelantahgo.com/blog/kesalahan-menyimpan-jelantah',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761964478/jelantahoffer_rank9r.webp',
        width: 1200,
        height: 630,
        alt: '5 Kesalahan Menyimpan Jelantah yang Bikin Harga Turun',
      },
    ],
    locale: 'id_ID',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '5 Kesalahan Menyimpan Jelantah yang Bikin Harga Turun',
    description: 'Hindari 5 kesalahan menyimpan minyak jelantah yang membuat harga jual turun: tidak menyaring, wadah salah, campur air, terbuka.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761964478/jelantahoffer_rank9r.webp'],
  },
}

export default function KesalahanMenyimpanLayout({
  children,
}: {
  children: ReactNode
}) {
  return children
}

