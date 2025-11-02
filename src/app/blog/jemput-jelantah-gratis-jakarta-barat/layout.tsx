import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Jemput Jelantah Gratis Jakarta Barat | Solusi Praktis | JelantahGO',
  description: 'Layanan jemput jelantah gratis untuk seluruh wilayah Jakarta Barat. Solusi praktis untuk warga dan UKM di Cengkareng, Kalideres, Kembangan, Kebon Jeruk. Tanpa biaya, pembayaran tunai langsung.',
  keywords: 'jemput jelantah gratis jakarta barat, pengepul jakbar gratis, jemput jelantah cengkareng, jual jelantah kalideres, pengepul kembangan, jelantah kebon jeruk',
  alternates: {
    canonical: 'https://jelantahgo.com/blog/jemput-jelantah-gratis-jakarta-barat',
  },
  openGraph: {
    title: 'Jemput Jelantah Gratis Jakarta Barat | Solusi Praktis | JelantahGO',
    description: 'Layanan jemput jelantah gratis untuk seluruh wilayah Jakarta Barat. Solusi praktis untuk warga dan UKM di Cengkareng, Kalideres, Kembangan, Kebon Jeruk. Tanpa biaya, pembayaran tunai langsung.',
    url: 'https://jelantahgo.com/blog/jemput-jelantah-gratis-jakarta-barat',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163997/jelantahgo_12_owxvlk.webp',
        width: 1200,
        height: 630,
        alt: 'Layanan Jemput Jelantah Gratis di Jakarta Barat',
      },
    ],
    locale: 'id_ID',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jemput Jelantah Gratis Jakarta Barat | Solusi Praktis',
    description: 'Layanan jemput jelantah gratis untuk seluruh wilayah Jakarta Barat. Solusi praktis untuk warga dan UKM di Cengkareng, Kalideres, Kembangan.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163997/jelantahgo_12_owxvlk.webp'],
  },
}

export default function JakartaBaratGratisLayout({
  children,
}: {
  children: ReactNode
}) {
  return children
}

