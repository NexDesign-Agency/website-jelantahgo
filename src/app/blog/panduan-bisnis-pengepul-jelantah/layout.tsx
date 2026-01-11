import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Panduan Bisnis Pengepul Jelantah: Persiapan hingga Scale-Up | JelantahGO',
  description: 'Panduan lengkap memulai bisnis pengepul minyak jelantah dari nol. Modal kecil, risiko rendah, pasar pasti. Tips persiapan, eksekusi, dan strategi scale-up bisnis pengepul.',
  keywords: 'panduan bisnis pengepul jelantah, cara mulai bisnis pengepul, modal bisnis pengepul, strategi pengepul jelantah, tips pengepul pemula, usaha pengepul',
  alternates: {
    canonical: 'https://jelantahgo.com/blog/panduan-bisnis-pengepul-jelantah',
  },
  openGraph: {
    title: 'Panduan Bisnis Pengepul Jelantah: Persiapan hingga Scale-Up | JelantahGO',
    description: 'Panduan lengkap memulai bisnis pengepul minyak jelantah dari nol. Modal kecil, risiko rendah, pasar pasti. Tips persiapan, eksekusi, dan strategi scale-up bisnis pengepul.',
    url: 'https://jelantahgo.com/blog/panduan-bisnis-pengepul-jelantah',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761963250/jelantahgo_hero_7_rznf5j.webp',
        width: 1200,
        height: 630,
        alt: 'Panduan Memulai Bisnis Pengepul Jelantah',
      },
    ],
    locale: 'id_ID',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Panduan Bisnis Pengepul Jelantah: Persiapan hingga Scale-Up',
    description: 'Panduan lengkap memulai bisnis pengepul minyak jelantah dari nol. Modal kecil, risiko rendah, pasar pasti. Tips persiapan, eksekusi.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761963250/jelantahgo_hero_7_rznf5j.webp'],
  },
}

export default function PanduanBisnisPengepulLayout({
  children,
}: {
  children: ReactNode
}) {
  return children
}

