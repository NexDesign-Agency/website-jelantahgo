import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Bahaya Buang Jelantah Sembarangan | Dampak Lingkungan | JelantahGO',
  description: 'Jangan buang jelantah sembarangan! Pelajari bahaya jelantah untuk lingkungan dan kesehatan: pencemaran air, kerusakan ekosistem, fatberg, hingga risiko kesehatan.',
  keywords: 'bahaya buang jelantah, dampak jelantah lingkungan, pencemaran air jelantah, bahaya jelantah kesehatan, fatberg jelantah, kerusakan ekosistem jelantah',
  alternates: {
    canonical: 'https://jelantahgo.com/blog/bahaya-buang-jelantah-sembarangan',
  },
  openGraph: {
    title: 'Bahaya Buang Jelantah Sembarangan | Dampak Lingkungan | JelantahGO',
    description: 'Jangan buang jelantah sembarangan! Pelajari bahaya jelantah untuk lingkungan dan kesehatan: pencemaran air, kerusakan ekosistem, fatberg, hingga risiko kesehatan.',
    url: 'https://jelantahgo.com/blog/bahaya-buang-jelantah-sembarangan',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163998/jelantahgo_23_qbzsfv.webp',
        width: 1200,
        height: 630,
        alt: 'Bahaya Buang Jelantah Sembarangan',
      },
    ],
    locale: 'id_ID',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bahaya Buang Jelantah Sembarangan | Dampak Lingkungan',
    description: 'Jangan buang jelantah sembarangan! Pelajari bahaya jelantah untuk lingkungan dan kesehatan: pencemaran air, kerusakan ekosistem, fatberg.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163998/jelantahgo_23_qbzsfv.webp'],
  },
}

export default function BahayaBuangLayout({
  children,
}: {
  children: ReactNode
}) {
  return children
}

