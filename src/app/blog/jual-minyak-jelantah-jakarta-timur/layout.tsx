import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jual Minyak Jelantah Jakarta Timur: Panduan untuk Warga & Industri Rumahan | JelantahGO',
  description: 'Panduan lengkap jual minyak jelantah di Jakarta Timur untuk warga dan industri. Layanan kolektif RT/RW, program B2B untuk pabrik makanan di Cakung, Pulogadung. Area: Rawamangun, Duren Sawit, Cibubur.',
  keywords: 'jual jelantah jakarta timur, pengepul jaktim, jual jelantah rawamangun, pengepul cakung, jual jelantah pulogadung, pengepul duren sawit, jelantah cibubur',
}

export default function JakartaTimurLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

