import type { Metadata } from 'next'
import ArticleContent from './ArticleContent'

export const metadata: Metadata = {
  title: 'Dampak Buruk Jelantah pada Ekosistem Air & Cara Mengatasinya',
  description: 'Pahami dampak jelantah pada ekosistem air: bagaimana jelantah merusak biota perairan, mencemari sumber air, dan mengancam rantai makanan. Solusi daur ulang jelantah.',
  alternates: {
    canonical: 'https://jelantahgo.com/blog/dampak-jelantah-ekosistem',
  },
  openGraph: {
    title: 'Dampak Buruk Jelantah pada Ekosistem Air & Cara Mengatasinya',
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
    publishedTime: '2025-10-15T00:00:00+07:00',
    modifiedTime: '2025-10-15T00:00:00+07:00',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dampak Buruk Jelantah pada Ekosistem Air & Cara Mengatasinya',
    description: 'Pahami dampak jelantah pada ekosistem air: bagaimana jelantah merusak biota perairan, mencemari sumber air, dan mengancam rantai makanan.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163998/jelantahgo_23_aru8je.webp'],
  },
}

export default function DampakEkosistemPage() {
  return <ArticleContent />
}