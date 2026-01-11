import type { Metadata } from 'next'
import MitraContent from './MitraContent'

export const metadata: Metadata = {
  title: 'Program Mitra JelantahGO | Bisnis Pengepul Minyak Jelantah',
  description: 'Jadi mitra pengepul minyak jelantah JelantahGO. Modal kecil, untung jutaan. Dapatkan website gratis, training, & support penuh. Daftar sekarang!',
  alternates: {
    canonical: 'https://jelantahgo.com/mitra',
  },
  openGraph: {
    title: 'Program Mitra JelantahGO | Bisnis Pengepul Minyak Jelantah',
    description: 'Jadi mitra pengepul minyak jelantah JelantahGO. Modal kecil, untung jutaan. Dapatkan website gratis, training, & support penuh. Daftar sekarang!',
    url: 'https://jelantahgo.com/mitra',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/v1761171103/jelantah-go_5_moegd4.webp',
        width: 1200,
        height: 630,
        alt: 'Program Mitra Pengepul Minyak Jelantah JelantahGO',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Program Mitra JelantahGO | Bisnis Pengepul Minyak Jelantah',
    description: 'Jadi mitra pengepul minyak jelantah JelantahGO. Modal kecil, untung jutaan. Dapatkan website gratis, training, & support penuh. Daftar sekarang!',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/v1761171103/jelantah-go_5_moegd4.webp'],
  },
}

export default function MitraPage() {
  return <MitraContent />
}
