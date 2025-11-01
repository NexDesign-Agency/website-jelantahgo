import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Manajemen Logistik Pengepul Jelantah: Tips Rute Efisien Hemat Bensin & Waktu | JelantahGO',
  description: 'Panduan lengkap optimasi rute penjemputan jelantah menggunakan Google Maps. Strategi zonasi, multi-stop route, efisiensi logistik untuk meningkatkan profit pengepul.',
  keywords: 'manajemen logistik pengepul, optimasi rute jelantah, efisiensi penjemputan, strategi zonasi, google maps multi-stop, hemat bensin pengepul',
}

export default function ManajemenLogistikLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

