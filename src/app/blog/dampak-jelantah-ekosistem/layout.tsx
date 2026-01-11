import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Dampak Jelantah pada Ekosistem Air | Ancaman Biota | JelantahGO',
  description: 'Pahami dampak jelantah pada ekosistem air: bagaimana jelantah merusak biota perairan, mencemari sumber air, dan mengancam rantai makanan. Solusi daur ulang jelantah.',
  keywords: 'dampak jelantah ekosistem, jelantah merusak ekosistem, pencemaran air jelantah, dampak jelantah biota, jelantah ekosistem perairan, bahaya jelantah lingkungan',
  alternates: {
    canonical: 'https://jelantahgo.com/blog/dampak-jelantah-ekosistem',
  },
  openGraph: {
    title: 'Dampak Jelantah pada Ekosistem Air | Ancaman Biota | JelantahGO',
    description: 'Pahami dampak jelantah pada ekosistem air: bagaimana jelantah merusak biota perairan, mencemari sumber air, dan mengancam rantai makanan. Solusi daur ulang jelantah.',
    url: 'https://jelantahgo.com/blog/dampak-jelantah-ekosistem',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163998/jelantahgo_23_aru8je.webp',
        width: 1200,
        height: 630,
        alt: 'Dampak Jelantah pada Ekosistem Air',
      },
    ],
    locale: 'id_ID',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dampak Jelantah pada Ekosistem Air | Ancaman Biota',
    description: 'Pahami dampak jelantah pada ekosistem air: bagaimana jelantah merusak biota perairan, mencemari sumber air, dan mengancam rantai makanan.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163998/jelantahgo_23_aru8je.webp'],
  },
}

export default function DampakEkosistemLayout({
  children,
}: {
  children: ReactNode
}) {
  return children
}

