import type { Metadata } from 'next'
import ArticleContent from './ArticleContent'

export const metadata: Metadata = {
  title: 'Checklist Peralatan Pengepul Jelantah Pemula (Modal & Harga 2025)',
  description: 'Mulai bisnis pengepul jelantah? Inilah checklist peralatan lengkap yang Anda butuhkan, dari timbangan hingga jeriken, beserta estimasi modal dan harga terbaru 2025.',
  alternates: {
    canonical: 'https://jelantahgo.com/blog/checklist-peralatan-pengepul-jelantah',
  },
  openGraph: {
    title: 'Checklist Peralatan Pengepul Jelantah Pemula (Modal & Harga 2025)',
    description: 'Mulai bisnis pengepul jelantah? Inilah checklist peralatan lengkap yang Anda butuhkan, dari timbangan hingga jeriken, beserta estimasi modal dan harga terbaru 2025.',
    url: 'https://jelantahgo.com/blog/checklist-peralatan-pengepul-jelantah',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163998/jelantahgo_25_cfmfhd.webp',
        width: 1200,
        height: 630,
        alt: 'Checklist Peralatan Pengepul Jelantah Pemula',
      },
    ],
    locale: 'id_ID',
    type: 'article',
    publishedTime: '2025-10-10T00:00:00+07:00',
    modifiedTime: '2025-10-10T00:00:00+07:00',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Checklist Peralatan Pengepul Jelantah Pemula (Modal & Harga 2025)',
    description: 'Mulai bisnis pengepul jelantah? Inilah checklist peralatan lengkap yang Anda butuhkan, dari timbangan hingga jeriken, beserta estimasi modal dan harga terbaru 2025.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163998/jelantahgo_25_cfmfhd.webp'],
  },
}

export default function ChecklistPeralatanPage() {
  return <ArticleContent />
}