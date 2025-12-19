import type { Metadata } from 'next'
import ArticleContent from './ArticleContent'

export const metadata: Metadata = {
  title: 'Aturan Baru Jelantah 2025: Dampak pada Pengepul Kecil',
  description: 'Analisis dampak aturan baru ekspor jelantah 2025 terhadap pengepul kecil. Kebijakan yang niatnya baik justru memukul UMKM di industri daur ulang.',
  alternates: {
    canonical: 'https://jelantahgo.com/blog/aturan-baru-jelantah-2025',
  },
  openGraph: {
    title: 'Aturan Baru Jelantah 2025: Dampak pada Pengepul Kecil',
    description: 'Analisis dampak aturan baru ekspor jelantah 2025 terhadap pengepul kecil. Kebijakan yang niatnya baik justru memukul UMKM di industri daur ulang.',
    url: 'https://jelantahgo.com/blog/aturan-baru-jelantah-2025',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/v1762927414/Aturan_Baru_Jelantah_2025_2__11zon_qeoxib.webp',
        width: 1200,
        height: 630,
        alt: 'Aturan Baru Jelantah 2025: Dampak pada Pengepul Kecil',
      },
    ],
    locale: 'id_ID',
    type: 'article',
    publishedTime: '2025-11-12T00:00:00+07:00',
    modifiedTime: '2025-11-12T00:00:00+07:00',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aturan Baru Jelantah 2025: Dampak pada Pengepul Kecil',
    description: 'Analisis dampak aturan baru ekspor jelantah 2025 terhadap pengepul kecil.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/v1762927414/Aturan_Baru_Jelantah_2025_2__11zon_qeoxib.webp'],
  },
}

export default function AturanBaruJelantah2025Page() {
  return <ArticleContent />
}
