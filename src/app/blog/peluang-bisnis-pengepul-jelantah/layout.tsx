import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Bisnis Pengepul Jelantah 2025: Modal & Strategi | JelantahGO',
  description: 'Panduan bisnis A-Z pengepul minyak jelantah 2025. Rincian modal, simulasi keuntungan puluhan juta, strategi pemasaran, dan tips sukses untuk pemula hingga profesional.',
  keywords: 'bisnis pengepul jelantah, peluang usaha jelantah, modal bisnis jelantah, keuntungan pengepul jelantah, cara jadi pengepul jelantah, pemasaran jelantah, mitra jelantahgo',
  alternates: {
    canonical: 'https://jelantahgo.com/blog/peluang-bisnis-pengepul-jelantah',
  },
  openGraph: {
    title: 'Bisnis Pengepul Jelantah 2025: Modal & Strategi | JelantahGO',
    description: 'Panduan bisnis A-Z pengepul minyak jelantah 2025. Rincian modal, simulasi keuntungan puluhan juta, strategi pemasaran, dan tips sukses untuk pemula hingga profesional.',
    url: 'https://jelantahgo.com/blog/peluang-bisnis-pengepul-jelantah',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761171105/jelantah-go_13_ok4gma.webp',
        width: 1200,
        height: 630,
        alt: 'Bisnis Pengepul Jelantah 2025',
      },
    ],
    locale: 'id_ID',
    type: 'article',
    publishedTime: '2025-09-01T00:00:00+07:00',
    modifiedTime: '2025-09-01T00:00:00+07:00',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bisnis Pengepul Jelantah 2025: Modal & Strategi',
    description: 'Panduan bisnis A-Z pengepul minyak jelantah 2025. Rincian modal, simulasi keuntungan puluhan juta, strategi pemasaran.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761171105/jelantah-go_13_ok4gma.webp'],
  },
}

export default function PeluangBisnisLayout({
  children,
}: {
  children: ReactNode
}) {
  return children
}

