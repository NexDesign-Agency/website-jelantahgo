import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Jual Minyak Jelantah Jakarta Timur - Panduan 2025 | JelantahGO',
  description: 'Panduan lengkap jual minyak jelantah di Jakarta Timur untuk warga dan industri. Layanan kolektif RT/RW, program B2B untuk pabrik makanan di Cakung, Pulogadung. Area: Rawamangun, Duren Sawit, Cibubur.',
  keywords: 'jual jelantah jakarta timur, pengepul jaktim, jual jelantah rawamangun, pengepul cakung, jual jelantah pulogadung, pengepul duren sawit, jelantah cibubur',
  alternates: {
    canonical: 'https://jelantahgo.com/blog/jual-minyak-jelantah-jakarta-timur',
  },
  openGraph: {
    title: 'Jual Minyak Jelantah Jakarta Timur - Panduan 2025 | JelantahGO',
    description: 'Panduan lengkap jual minyak jelantah di Jakarta Timur untuk warga dan industri. Layanan kolektif RT/RW, program B2B untuk pabrik makanan di Cakung, Pulogadung.',
    url: 'https://jelantahgo.com/blog/jual-minyak-jelantah-jakarta-timur',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163997/jelantahgo_11_ourqv3.webp',
        width: 1200,
        height: 630,
        alt: 'Jual Minyak Jelantah Jakarta Timur',
      },
    ],
    locale: 'id_ID',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jual Minyak Jelantah Jakarta Timur - Panduan 2025',
    description: 'Panduan lengkap jual minyak jelantah di Jakarta Timur untuk warga dan industri. Layanan kolektif RT/RW, program B2B untuk pabrik makanan.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163997/jelantahgo_11_ourqv3.webp'],
  },
}

export default function JakartaTimurLayout({
  children,
}: {
  children: ReactNode
}) {
  return children
}

