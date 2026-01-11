import type { Metadata } from 'next'
import ArticleContent from './ArticleContent'

export const metadata: Metadata = {
  title: 'Jemput Jelantah Gratis Jakarta Barat | JelantahGO',
  description: 'Layanan jemput minyak jelantah gratis di Jakarta Barat. Dapatkan harga Rp 7.500-8.500/liter untuk area Cengkareng, Kalideres, Kebon Jeruk. Min 40L, bayar tunai!',
  alternates: {
    canonical: 'https://jelantahgo.com/blog/jemput-jelantah-gratis-jakarta-barat',
  },
  openGraph: {
    title: 'Jemput Jelantah Gratis Jakarta Barat | JelantahGO',
    description: 'Layanan jemput minyak jelantah gratis di Jakarta Barat. Dapatkan harga Rp 7.500-8.500/liter untuk area Cengkareng, Kalideres, Kebon Jeruk. Min 40L, bayar tunai!',
    url: 'https://jelantahgo.com/blog/jemput-jelantah-gratis-jakarta-barat',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163997/jelantahgo_12_owxvlk.webp',
        width: 1200,
        height: 630,
        alt: 'Layanan Jemput Jelantah Gratis di Jakarta Barat',
      },
    ],
    locale: 'id_ID',
    type: 'article',
    publishedTime: '2024-12-20T00:00:00+07:00',
    modifiedTime: '2024-12-28T00:00:00+07:00',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jemput Jelantah Gratis Jakarta Barat | JelantahGO',
    description: 'Layanan jemput minyak jelantah gratis di Jakarta Barat. Dapatkan harga Rp 7.500-8.500/liter untuk area Cengkareng, Kalideres, Kebon Jeruk. Min 40L, bayar tunai!',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163997/jelantahgo_12_owxvlk.webp'],
  },
}

export default function JakartaBaratGratisPage() {
  return <ArticleContent />
}
