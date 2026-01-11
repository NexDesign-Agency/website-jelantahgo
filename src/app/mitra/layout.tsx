import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Program Mitra JelantahGO - Bisnis Modal Kecil Untung Rp 1-5 Juta',
  description: 'Bergabung jadi mitra pengepul jelantah JelantahGO. Modal mulai Rp 500rb, untung Rp 1-5 juta/bulan. Gratis website, training, dan support penuh. 30+ mitra sukses!',
  keywords: 'mitra jelantah, bisnis pengepul jelantah, peluang usaha jelantah, franchise jelantah, bisnis sampingan menguntungkan',
  alternates: {
    canonical: 'https://jelantahgo.com/mitra',
  },
  openGraph: {
    title: 'Program Mitra JelantahGO - Bisnis Modal Kecil Untung Rp 1-5 Juta',
    description: 'Bergabung jadi mitra pengepul jelantah JelantahGO. Modal mulai Rp 500rb, untung Rp 1-5 juta/bulan. Gratis website, training, dan support penuh. 30+ mitra sukses!',
    url: 'https://jelantahgo.com/mitra',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/v1760998331/jelantahgo_6_u3erug.webp',
        width: 1200,
        height: 630,
        alt: 'Program Mitra JelantahGO - Bisnis Modal Kecil Untung Jutaan',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Program Mitra JelantahGO - Bisnis Modal Kecil Untung Rp 1-5 Juta',
    description: 'Bergabung jadi mitra pengepul jelantah JelantahGO. Modal mulai Rp 500rb, untung Rp 1-5 juta/bulan. Gratis website, training, dan support penuh.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/v1760998331/jelantahgo_6_u3erug.webp'],
  },
}

export default function MitraLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

