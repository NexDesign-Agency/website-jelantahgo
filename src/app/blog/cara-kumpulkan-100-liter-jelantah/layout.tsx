import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: '10 Cara Mengumpulkan 100 Liter Jelantah per Bulan: Strategi Praktis | JelantahGO',
  description: 'Ingin dapat 100 liter jelantah per bulan? Pelajari 10 strategi praktis dari komunitas, warung makan, hingga program kolektif RT/RW untuk mencapai target volume.',
  keywords: 'cara kumpulkan jelantah, mengumpulkan 100 liter jelantah, strategi kumpul jelantah, sumber jelantah, program kolektif jelantah, jual jelantah volume besar',
  alternates: {
    canonical: 'https://jelantahgo.com/blog/cara-kumpulkan-100-liter-jelantah',
  },
  openGraph: {
    title: '10 Cara Mengumpulkan 100 Liter Jelantah per Bulan: Strategi Praktis | JelantahGO',
    description: 'Ingin dapat 100 liter jelantah per bulan? Pelajari 10 strategi praktis dari komunitas, warung makan, hingga program kolektif RT/RW untuk mencapai target volume.',
    url: 'https://jelantahgo.com/blog/cara-kumpulkan-100-liter-jelantah',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163998/jelantahgo_26_hmnqjl.webp',
        width: 1200,
        height: 630,
        alt: '10 Cara Mengumpulkan 100 Liter Jelantah per Bulan',
      },
    ],
    locale: 'id_ID',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '10 Cara Mengumpulkan 100 Liter Jelantah per Bulan: Strategi Praktis',
    description: 'Ingin dapat 100 liter jelantah per bulan? Pelajari 10 strategi praktis dari komunitas, warung makan, hingga program kolektif RT/RW.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163998/jelantahgo_26_hmnqjl.webp'],
  },
}

export default function CaraKumpulkanLayout({
  children,
}: {
  children: ReactNode
}) {
  return children
}

