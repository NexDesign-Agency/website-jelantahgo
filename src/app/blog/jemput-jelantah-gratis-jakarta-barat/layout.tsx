import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Layanan Jemput Jelantah Gratis di Jakarta Barat: Solusi Praktis untuk Warga & UKM | JelantahGO',
  description: 'Layanan jemput jelantah gratis untuk seluruh wilayah Jakarta Barat. Solusi praktis untuk warga dan UKM di Cengkareng, Kalideres, Kembangan, Kebon Jeruk. Tanpa biaya, pembayaran tunai langsung.',
  keywords: 'jemput jelantah gratis jakarta barat, pengepul jakbar gratis, jemput jelantah cengkareng, jual jelantah kalideres, pengepul kembangan, jelantah kebon jeruk',
}

export default function JakartaBaratGratisLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

