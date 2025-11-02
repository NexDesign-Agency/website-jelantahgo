import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Kisah Sukses Ibu Rina | Mitra Pengepul Omzet Jutaan | JelantahGO',
  description: 'Kisah inspiratif Ibu Rina, ibu rumah tangga yang membangun usaha pengepul jelantah dari dapur rumah. Dari 15 liter pertama hingga omzet 3-3,5 juta per bulan sebagai mitra JelantahGO.',
  keywords: 'kisah sukses ibu rina, mitra pengepul sukses, pengepul jelantah wanita, usaha jelantah dari rumah, testimoni mitra jelantahgo, inspirasi bisnis jelantah',
  alternates: {
    canonical: 'https://jelantahgo.com/blog/kisah-sukses-ibu-rina',
  },
  openGraph: {
    title: 'Kisah Sukses Ibu Rina | Mitra Pengepul Omzet Jutaan | JelantahGO',
    description: 'Kisah inspiratif Ibu Rina, ibu rumah tangga yang membangun usaha pengepul jelantah dari dapur rumah. Dari 15 liter pertama hingga omzet 3-3,5 juta per bulan sebagai mitra JelantahGO.',
    url: 'https://jelantahgo.com/blog/kisah-sukses-ibu-rina',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163996/jelantahgo_17_fuusoh.webp',
        width: 1200,
        height: 630,
        alt: 'Kisah Sukses Ibu Rina',
      },
    ],
    locale: 'id_ID',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kisah Sukses Ibu Rina | Mitra Pengepul Omzet Jutaan',
    description: 'Kisah inspiratif Ibu Rina, ibu rumah tangga yang membangun usaha pengepul jelantah dari dapur rumah. Dari 15 liter pertama hingga omzet 3-3,5 juta.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163996/jelantahgo_17_fuusoh.webp'],
  },
}

export default function KisahSuksesIbuRinaLayout({
  children,
}: {
  children: ReactNode
}) {
  return children
}

