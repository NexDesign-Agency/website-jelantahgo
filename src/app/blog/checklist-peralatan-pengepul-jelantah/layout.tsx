import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Checklist Peralatan Pengepul Jelantah Lengkap | JelantahGO',
  description: 'Checklist lengkap peralatan yang dibutuhkan untuk memulai bisnis pengepul jelantah: timbangan digital, jeriken, APD, kendaraan, dan alat bantu lainnya. Estimasi harga dan rekomendasi.',
  keywords: 'peralatan pengepul jelantah, checklist peralatan pengepul, timbangan jelantah, jeriken jelantah, alat pengepul jelantah, modal peralatan pengepul',
  alternates: {
    canonical: 'https://jelantahgo.com/blog/checklist-peralatan-pengepul-jelantah',
  },
  openGraph: {
    title: 'Checklist Peralatan Pengepul Jelantah Lengkap | JelantahGO',
    description: 'Checklist lengkap peralatan yang dibutuhkan untuk memulai bisnis pengepul jelantah: timbangan digital, jeriken, APD, kendaraan, dan alat bantu lainnya. Estimasi harga dan rekomendasi.',
    url: 'https://jelantahgo.com/blog/checklist-peralatan-pengepul-jelantah',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163998/jelantahgo_25_cfmfhd.webp',
        width: 1200,
        height: 630,
        alt: 'Checklist Peralatan Pengepul Jelantah Lengkap',
      },
    ],
    locale: 'id_ID',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Checklist Peralatan Pengepul Jelantah Lengkap',
    description: 'Checklist lengkap peralatan yang dibutuhkan untuk memulai bisnis pengepul jelantah: timbangan digital, jeriken, APD, kendaraan.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163998/jelantahgo_25_cfmfhd.webp'],
  },
}

export default function ChecklistPeralatanLayout({
  children,
}: {
  children: ReactNode
}) {
  return children
}

