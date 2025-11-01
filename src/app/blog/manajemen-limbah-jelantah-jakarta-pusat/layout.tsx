import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Manajemen Limbah Jelantah Profesional untuk Hotel & Perkantoran di Jakarta Pusat | JelantahGO',
  description: 'Solusi manajemen limbah jelantah terintegrasi untuk hotel, gedung perkantoran, dan mal di Jakarta Pusat. Kepatuhan regulasi Limbah B3, dokumentasi PROPER, layanan B2B profesional.',
  keywords: 'manajemen limbah jelantah jakarta pusat, pengepul jelantah hotel, limbah B3 perkantoran, manajemen limbah korporat, compliance jelantah hotel, pengepul jakpus',
}

export default function JakartaPusatManajemenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

