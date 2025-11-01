import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Program Mitra JelantahGO - Bisnis Pengepul Jelantah Modal Kecil Untung Rp 1-5 Juta/Bulan',
  description: 'Bergabung jadi mitra pengepul jelantah JelantahGO. Modal mulai Rp 500rb, untung Rp 1-5 juta/bulan. Gratis website, training, dan support penuh. 30+ mitra sukses!',
  keywords: 'mitra jelantah, bisnis pengepul jelantah, peluang usaha jelantah, franchise jelantah, bisnis sampingan menguntungkan',
}

export default function MitraLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

