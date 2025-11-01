import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Regulasi Limbah B3 Jelantah di Indonesia: Panduan untuk Pebisnis Kuliner | JelantahGO',
  description: 'Pahami kewajiban hukum pengelolaan limbah B3 jelantah untuk restoran, hotel, dan katering. PP No. 22/2021, sanksi, dokumentasi, dan solusi kepatuhan dengan JelantahGO.',
  keywords: 'regulasi limbah B3 jelantah, PP 22 tahun 2021, kewajiban bisnis kuliner, manifest limbah B3, kepatuhan lingkungan, PROPER, audit lingkungan jelantah',
}

export default function RegulasiB3Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

