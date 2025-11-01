import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '5 Bahaya Minyak Jelantah Bagi Kesehatan (Menurut Ahli Gizi) | JelantahGO',
  description: 'Waspada! Menggunakan minyak jelantah berulang kali memicu radikal bebas, senyawa karsinogenik, dan risiko penyakit jantung. Simak 5 bahayanya menurut ahli.',
  keywords: 'bahaya minyak jelantah, kesehatan minyak jelantah, bahaya jelantah, minyak goreng berulang kali, radikal bebas, karsinogenik, penyakit jantung, jelantah',
}

export default function BahayaKesehatanLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

