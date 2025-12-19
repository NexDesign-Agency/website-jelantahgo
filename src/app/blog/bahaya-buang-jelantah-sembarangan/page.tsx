import type { Metadata } from 'next'
import ArticleContent from './ArticleContent'

export const metadata: Metadata = {
  title: '5 Bahaya Buang Minyak Jelantah Sembarangan & Solusinya',
  description: 'Jangan buang jelantah sembarangan! Pelajari 5 bahaya jelantah untuk lingkungan dan kesehatan: pencemaran air, kerusakan ekosistem, fatberg, hingga risiko kesehatan.',
  alternates: {
    canonical: 'https://jelantahgo.com/blog/bahaya-buang-jelantah-sembarangan',
  },
  openGraph: {
    title: '5 Bahaya Buang Minyak Jelantah Sembarangan & Solusinya',
    description: 'Jangan buang jelantah sembarangan! Pelajari 5 bahaya jelantah untuk lingkungan dan kesehatan: pencemaran air, kerusakan ekosistem, fatberg, hingga risiko kesehatan.',
    url: 'https://jelantahgo.com/blog/bahaya-buang-jelantah-sembarangan',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163998/jelantahgo_23_qbzsfv.webp',
        width: 1200,
        height: 630,
        alt: 'Bahaya Buang Minyak Jelantah Sembarangan',
      },
    ],
    locale: 'id_ID',
    type: 'article',
    publishedTime: '2025-10-20T00:00:00+07:00',
    modifiedTime: '2025-10-20T00:00:00+07:00',
  },
  twitter: {
    card: 'summary_large_image',
    title: '5 Bahaya Buang Minyak Jelantah Sembarangan & Solusinya',
    description: 'Jangan buang jelantah sembarangan! Pelajari 5 bahaya jelantah untuk lingkungan dan kesehatan.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163998/jelantahgo_23_qbzsfv.webp'],
  },
}

export default function BahayaBuangSembaranganPage() {
  return <ArticleContent />
}