import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: '7 Kesalahan Penjual Jelantah Pemula yang Harus Dihindari | JelantahGO',
  description: 'Hindari 7 kesalahan fatal penjual jelantah pemula: mencampur air, wadah salah, tidak menyaring, hingga tidak cek harga pasar. Pelajari solusinya agar dapat untung maksimal.',
  keywords: 'kesalahan penjual jelantah, kesalahan pemula jual jelantah, tips jual jelantah, hindari kesalahan jelantah, cara jual jelantah benar, tips pemula jelantah',
  alternates: {
    canonical: 'https://jelantahgo.com/blog/kesalahan-penjual-jelantah-pemula',
  },
  openGraph: {
    title: '7 Kesalahan Penjual Jelantah Pemula yang Harus Dihindari | JelantahGO',
    description: 'Hindari 7 kesalahan fatal penjual jelantah pemula: mencampur air, wadah salah, tidak menyaring, hingga tidak cek harga pasar. Pelajari solusinya agar dapat untung maksimal.',
    url: 'https://jelantahgo.com/blog/kesalahan-penjual-jelantah-pemula',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163996/jelantahgo_18_idyjtq.webp',
        width: 1200,
        height: 630,
        alt: '7 Kesalahan Fatal Penjual Jelantah Pemula',
      },
    ],
    locale: 'id_ID',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '7 Kesalahan Penjual Jelantah Pemula yang Harus Dihindari',
    description: 'Hindari 7 kesalahan fatal penjual jelantah pemula: mencampur air, wadah salah, tidak menyaring, hingga tidak cek harga pasar.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163996/jelantahgo_18_idyjtq.webp'],
  },
}

export default function KesalahanPemulaLayout({
  children,
}: {
  children: ReactNode
}) {
  return children
}

