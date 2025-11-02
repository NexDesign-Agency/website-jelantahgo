import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Kisah Sukses Pak Doni | Pengepul Omzet 20 Juta/Bulan | JelantahGO',
  description: 'Kisah inspiratif Pak Doni, mantan karyawan pabrik yang berhasil menjadi pengepul jelantah sukses dengan omzet 20 juta rupiah per bulan. Perjalanan dari modal kecil hingga scale-up.',
  keywords: 'kisah sukses pengepul, pengepul jelantah sukses, testimoni pengepul, bisnis pengepul sukses, inspirasi pengepul, omzet pengepul jelantah',
  alternates: {
    canonical: 'https://jelantahgo.com/blog/kisah-sukses-pengepul-jelantah-pak-doni',
  },
  openGraph: {
    title: 'Kisah Sukses Pak Doni | Pengepul Omzet 20 Juta/Bulan | JelantahGO',
    description: 'Kisah inspiratif Pak Doni, mantan karyawan pabrik yang berhasil menjadi pengepul jelantah sukses dengan omzet 20 juta rupiah per bulan. Perjalanan dari modal kecil hingga scale-up.',
    url: 'https://jelantahgo.com/blog/kisah-sukses-pengepul-jelantah-pak-doni',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163996/jelantahgo_5_mjney9.webp',
        width: 1200,
        height: 630,
        alt: 'Kisah Sukses Pengepul Jelantah Pak Doni',
      },
    ],
    locale: 'id_ID',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kisah Sukses Pak Doni | Pengepul Omzet 20 Juta/Bulan',
    description: 'Kisah inspiratif Pak Doni, mantan karyawan pabrik yang berhasil menjadi pengepul jelantah sukses dengan omzet 20 juta rupiah per bulan.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163996/jelantahgo_5_mjney9.webp'],
  },
}

export default function KisahSuksesPakDoniLayout({
  children,
}: {
  children: ReactNode
}) {
  return children
}

