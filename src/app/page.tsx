import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

// Import komponen yang sudah ada
import Calculator from '@/components/Calculator'
import VideoPlayer from '@/components/VideoPlayer'
import ServiceArea from '@/components/ServiceArea'
import WhoCanSell from '@/components/WhoCanSell'
import Testimonials from '@/components/Testimonials'
import BlogSection from '@/components/BlogSection'

export const metadata: Metadata = {
  title: 'Jual Minyak Jelantah di Jakarta Harga Tinggi - Pengepul Terpercaya #1',
  description: 'Jual minyak jelantah di Jakarta dengan harga tinggi. Jemput gratis, bayar tunai instan. Pengepul #1 untuk restoran, katering, UMKM. Hubungi sekarang!',
  keywords: 'jual minyak jelantah jakarta, pengepul minyak jelantah jakarta, harga minyak jelantah, jual jelantah, minyak goreng bekas, pengepul jelantah terdekat, jual minyak jelantah, harga jelantah, pengepul terpercaya',
  alternates: {
    canonical: 'https://jelantahgo.com',
  },
  openGraph: {
    title: 'Jual Minyak Jelantah di Jakarta Harga Tinggi - Pengepul Terpercaya #1',
    description: 'Jual minyak jelantah di Jakarta dengan harga tinggi. Jemput gratis, bayar tunai instan. Pengepul #1 untuk restoran, katering, UMKM. Hubungi sekarang!',
    url: 'https://jelantahgo.com',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/v1760998331/jelantahgo_6_u3erug.webp',
        width: 1200,
        height: 630,
        alt: 'Jual Minyak Jelantah Jakarta - Pengepul Terpercaya',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jual Minyak Jelantah di Jakarta Harga Tinggi - Pengepul Terpercaya #1',
    description: 'Jual minyak jelantah di Jakarta dengan harga tinggi. Jemput gratis, bayar tunai instan. Pengepul #1 untuk restoran, katering, UMKM. Hubungi sekarang!',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/v1760998331/jelantahgo_6_u3erug.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'JelantahGO' }],
}

export default function HomeNew() {
  return (
    <>


      {/* Schema Markup - Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Pengepul Minyak Jelantah",
            "provider": {
              "@type": "LocalBusiness",
              "@id": "https://jelantahgo.com/#localbusiness",
              "name": "JelantahGO"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Jakarta"
              },
              {
                "@type": "City",
                "name": "Tangerang"
              },
              {
                "@type": "City",
                "name": "Bekasi"
              },
              {
                "@type": "City",
                "name": "Depok"
              },
              {
                "@type": "City",
                "name": "Bogor"
              }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Layanan Pembelian Minyak Jelantah",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Jual Minyak Jelantah Premium (≥200 Liter)"
                  },
                  "price": "7500",
                  "priceCurrency": "IDR",
                  "description": "Harga tertinggi untuk volume besar, minimal 200 liter"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Jual Minyak Jelantah Standar (100-199 Liter)"
                  },
                  "price": "7000",
                  "priceCurrency": "IDR",
                  "description": "Harga untuk volume menengah, 100-199 liter"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Jual Minyak Jelantah Rumah Tangga (40-99 Liter)"
                  },
                  "price": "6500",
                  "priceCurrency": "IDR",
                  "description": "Harga untuk volume kecil, minimal 40 liter"
                }
              ]
            }
          })
        }}
      />

      {/* Schema Markup - BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Beranda",
                "item": "https://jelantahgo.com"
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="hero-bg-dots">
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.3) 2.5px, transparent 2.5px)',
            backgroundSize: '8px 8px'
          }}></div>
        </div>

        <div className="container-custom relative z-10 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#D9E3D3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                💰 PENGEPUL MINYAK JELANTAH TERPERCAYA • JAKARTA & SEKITARNYA
              </div>

              <h1 className="text-hero-mobile lg:text-hero-laptop xl:text-hero-desktop font-bold leading-snug mb-4">
                Jual Minyak Jelantah di Jakarta Harga Tinggi - Pengepul Terpercaya
              </h1>

              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                Jual minyak jelantah di Jakarta dengan harga tinggi. Jemput gratis, bayar tunai instan. Pengepul #1 terpercaya untuk restoran, katering, UMKM. Proses mudah dan transparan.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/6285183033995?text=Halo%20JelantahGO,%20saya%20ingin%20jual%20minyak%20jelantah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#0F3D2E] hover:bg-[#F9F8F6] px-8 py-4 rounded-card font-bold text-lg flex items-center justify-center gap-2 transition-smooth shadow-soft-lg hover:shadow-soft-xl"
                >
                  Jadwalkan Penjemputan Hari Ini
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-card-lg overflow-hidden shadow-layered hover:shadow-soft-xl transition-smooth">
                <Image
                  src="https://res.cloudinary.com/dknswj9co/image/upload/v1760998331/jelantahgo_6_u3erug.webp"
                  alt="Pengepul minyak jelantah sedang menjemput gratis dan bayar tunai"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#D9E3D3] rounded-card-lg opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Harga Section */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              💵 HARGA TERBARU 2025
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Harga Minyak Jelantah Hari Ini di Jakarta
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dapatkan <strong>harga minyak jelantah terbaik</strong> dari <strong>pengepul terpercaya</strong>. Harga kompetitif berdasarkan volume dan kualitas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Paket Standar */}
            <div className="card-premium hover-lift">
              <div className="text-center mb-6">
                <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-3 py-1 rounded-full text-xs font-bold mb-3">
                  RUMAH TANGGA
                </div>
                <h3 className="text-xl font-bold text-[#0F3D2E] mb-2">40-99 Liter</h3>
                <div className="flex items-baseline justify-center gap-1 mb-1">
                  <span className="text-4xl font-bold text-[#0F3D2E]">Rp 6.500</span>
                </div>
                <span className="text-gray-500 text-sm">per liter</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-600 text-sm flex items-start gap-3">
                  <CheckCircle className="text-[#0F3D2E] flex-shrink-0 w-5 h-5" />
                  <span>Jemput gratis area Jakarta</span>
                </li>
                <li className="text-gray-600 text-sm flex items-start gap-3">
                  <CheckCircle className="text-[#0F3D2E] flex-shrink-0 w-5 h-5" />
                  <span>Bayar cash langsung</span>
                </li>
                <li className="text-gray-600 text-sm flex items-start gap-3">
                  <CheckCircle className="text-[#0F3D2E] flex-shrink-0 w-5 h-5" />
                  <span>Minimal 40 liter</span>
                </li>
              </ul>
            </div>

            {/* Paket Populer */}
            <div className="relative card-premium hover-lift scale-105 border-2 border-[#0F3D2E]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="bg-gradient-to-r from-[#0F3D2E] to-[#134E3A] text-white text-xs font-bold px-4 py-2 rounded-full shadow-soft-lg">
                  ⭐ POPULER
                </div>
              </div>
              <div className="text-center mb-6 mt-4">
                <div className="inline-block bg-[#0F3D2E] text-white px-3 py-1 rounded-full text-xs font-bold mb-3">
                  UMKM & WARUNG
                </div>
                <h3 className="text-xl font-bold text-[#0F3D2E] mb-2">100-199 Liter</h3>
                <div className="flex items-baseline justify-center gap-1 mb-1">
                  <span className="text-4xl font-bold text-[#0F3D2E]">Rp 7.000</span>
                </div>
                <span className="text-gray-500 text-sm">per liter</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-600 text-sm flex items-start gap-3">
                  <CheckCircle className="text-[#0F3D2E] flex-shrink-0 w-5 h-5" />
                  <span>Harga lebih tinggi</span>
                </li>
                <li className="text-gray-600 text-sm flex items-start gap-3">
                  <CheckCircle className="text-[#0F3D2E] flex-shrink-0 w-5 h-5" />
                  <span>Prioritas penjemputan</span>
                </li>
                <li className="text-gray-600 text-sm flex items-start gap-3">
                  <CheckCircle className="text-[#0F3D2E] flex-shrink-0 w-5 h-5" />
                  <span>Konsultasi gratis</span>
                </li>
              </ul>
            </div>

            {/* Paket Premium */}
            <div className="card-premium hover-lift">
              <div className="text-center mb-6">
                <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-3 py-1 rounded-full text-xs font-bold mb-3">
                  RESTORAN
                </div>
                <h3 className="text-xl font-bold text-[#0F3D2E] mb-2">≥ 200 Liter</h3>
                <div className="flex items-baseline justify-center gap-1 mb-1">
                  <span className="text-4xl font-bold text-[#0F3D2E]">Rp 7.500</span>
                </div>
                <span className="text-gray-500 text-sm">per liter</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-600 text-sm flex items-start gap-3">
                  <CheckCircle className="text-[#0F3D2E] flex-shrink-0 w-5 h-5" />
                  <span>Harga tertinggi</span>
                </li>
                <li className="text-gray-600 text-sm flex items-start gap-3">
                  <CheckCircle className="text-[#0F3D2E] flex-shrink-0 w-5 h-5" />
                  <span>Kontrak rutin</span>
                </li>
                <li className="text-gray-600 text-sm flex items-start gap-3">
                  <CheckCircle className="text-[#0F3D2E] flex-shrink-0 w-5 h-5" />
                  <span>Invoice resmi</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/pricing" className="inline-flex items-center gap-2 text-[#0F3D2E] font-semibold hover:gap-3 transition-smooth">
              Lihat detail harga minyak jelantah 2025 →
            </Link>
          </div>
        </div>
      </section>

      {/* Calculator & Video */}
      <section id="kalkulator" className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Calculator - Kiri */}
            <div>
              <Calculator />
            </div>

            {/* Video - Kanan */}
            <div>
              <VideoPlayer />
            </div>
          </div>
        </div>
      </section>

      {/* Cara Kerja Comprehensive */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🔄 PROSES PENJUALAN
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Proses Jual Minyak Jelantah di JelantahGO (Mudah & Cepat)
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dari persiapan hingga pembayaran transfer - semua <strong>mudah, cepat, dan transparan</strong>
            </p>
          </div>

          {/* Main Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Step 1 */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#0F3D2E] text-white text-lg font-bold rounded-full mb-4">
                1
              </div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-2">Kumpulkan</h3>
              <p className="text-gray-600 text-sm font-semibold mb-3">Tampung minyak bekas minimal 40 liter</p>
              <p className="text-gray-500 text-xs leading-relaxed">Saring minyak agar jernih & bersih dari kotoran. Semakin bersih, harga lebih tinggi.</p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#0F3D2E] text-white text-lg font-bold rounded-full mb-4">
                2
              </div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-2">Hubungi</h3>
              <p className="text-gray-600 text-sm font-semibold mb-3">WA/Telp 0851-8303-3995</p>
              <p className="text-gray-500 text-xs leading-relaxed">Kami akan confirm data lokasi Anda, volume jelantah, dan jadwal penjemputan yang sesuai.</p>
            </div>

            {/* Step 3 - Jemput Gratis */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#0F3D2E] text-white text-lg font-bold rounded-full mb-4">
                3
              </div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-2">Jemput Gratis</h3>
              <p className="text-gray-600 text-sm font-semibold mb-3">Tim datang dan timbang transparan</p>
              <p className="text-gray-500 text-xs leading-relaxed">Tim kurir akan datang sesuai jadwal, timbang minyak secara transparan di lokasi Anda.</p>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#0F3D2E] text-white text-lg font-bold rounded-full mb-4">
                4
              </div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-2">Bayar Transfer</h3>
              <p className="text-gray-600 text-sm font-semibold mb-3">Transfer langsung di lokasi Anda</p>
              <p className="text-gray-500 text-xs leading-relaxed">Transfer dilakukan <strong>SEBELUM</strong> minyak diangkut. Aman & transparan untuk kedua belah pihak.</p>
            </div>
          </div>

          {/* Timeline Visual */}
          <div className="bg-white rounded-lg p-8 mb-12 shadow-md">
            <h3 className="text-lg font-bold text-[#0F3D2E] mb-6">⏱️ Estimasi Timeline</h3>
            <div className="space-y-6">
              {/* Timeline Item 1 */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-32">
                  <span className="inline-block bg-[#0F3D2E] text-white px-3 py-1 rounded text-sm font-semibold">Hari ke-1</span>
                </div>
                <div className="flex-1 border-l-2 border-[#E8F0E3] pl-4 pb-4">
                  <p className="font-semibold text-gray-800">Hubungi kami via WhatsApp</p>
                  <p className="text-sm text-gray-500 mt-1">Respon dalam 5 menit (jam kerja)</p>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-32">
                  <span className="inline-block bg-red-600 text-white px-3 py-1 rounded text-sm font-semibold">SAME-DAY</span>
                </div>
                <div className="flex-1 border-l-2 border-[#E8F0E3] pl-4 pb-4">
                  <p className="font-semibold text-gray-800">Tim jemput ke lokasi Anda</p>
                  <p className="text-sm text-gray-500 mt-1">
                    <strong>Jakarta Barat & Utara: same-day service</strong><br />
                    Maksimal 1x24 jam untuk area lain
                  </p>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-32">
                  <span className="inline-block bg-green-600 text-white px-3 py-1 rounded text-sm font-semibold">LANGSUNG</span>
                </div>
                <div className="flex-1 border-l-2 border-[#E8F0E3] pl-4">
                  <p className="font-semibold text-gray-800">Transfer & pengangkutan selesai</p>
                  <p className="text-sm text-gray-500 mt-1">Proses selesai dalam 30-60 menit setelah tim tiba</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tips Section */}
          <div className="bg-[#E8F0E3] rounded-lg p-8 mb-8 border border-[#0F3D2E]/20">
            <h3 className="text-lg font-bold text-[#0F3D2E] mb-4">💡 Tips Agar Dapat Harga Lebih Tinggi</h3>
            <ul className="space-y-3">
              <li className="text-gray-700 text-sm flex items-start gap-3">
                <span className="text-xl flex-shrink-0">✓</span>
                <span><strong>Saring minyak</strong> dari kotoran & sisa makanan untuk kualitas lebih baik</span>
              </li>
              <li className="text-gray-700 text-sm flex items-start gap-3">
                <span className="text-xl flex-shrink-0">✓</span>
                <span><strong>Kumpulkan lebih banyak</strong> (100+ liter) agar dapat harga tier tertinggi</span>
              </li>
              <li className="text-gray-700 text-sm flex items-start gap-3">
                <span className="text-xl flex-shrink-0">✓</span>
                <span><strong>Jadwalkan rutin</strong> jika punya volume konsisten - dapatkan harga tetap terbaik</span>
              </li>
              <li className="text-gray-700 text-sm flex items-start gap-3">
                <span className="text-xl flex-shrink-0">✓</span>
                <span><strong>Hubungi lebih awal</strong> agar bisa dapat slot penjemputan sesuai keinginan</span>
              </li>
            </ul>
          </div>
        </div>
      </section>


      {/* FAQ Expanded */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ❓ PERTANYAAN SERING DIAJUKAN
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              FAQ: Jual Minyak Jelantah ke JelantahGO
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Jawaban lengkap untuk semua pertanyaan Anda tentang proses penjualan minyak jelantah
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* FAQ Item 1 */}
            <div className="card-premium">
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">
                ❔ Bagaimana cara menjual minyak jelantah?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Proses mudah: <strong>kumpulkan minyak goreng bekas → hubungi kami → tim jemput & bayar tunai/transfer langsung</strong> di tempat. Selesai!
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="card-premium">
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">
                ❔ Berapa minimal volume minyak jelantah yang bisa dijual?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Kami menerima minimal <strong>40 liter</strong> untuk penjemputan gratis di seluruh Jabodetabek. Untuk volume kurang dari itu, Anda bisa mengantarkan ke drop point terdekat kami.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="card-premium">
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">
                ❔ Apakah penjemputan benar-benar gratis?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ya, <strong>penjemputan 100% gratis</strong> untuk minimal 40 liter di seluruh wilayah Jabodetabek. Jika kurang dari 40 liter, bisa diantar ke lokasi drop point kami.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="card-premium border-2 border-red-300">
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">
                ❔ Pembayaran tunai atau transfer?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                <strong>Prioritas kami adalah TRANSFER LANGSUNG</strong> di tempat sebelum minyak diangkut. Ini lebih aman untuk kedua belah pihak. Untuk pembayaran cash, tidak disarankan karena risiko kehilangan.
              </p>
            </div>

            {/* FAQ Item 5 */}
            <div className="card-premium">
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">
                ❔ Apakah ada biaya tersembunyi atau potongan harga?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                <strong>Tidak ada.</strong> Kami bayar penuh sesuai liter aktual. Harga yang kami tawarkan sudah final tanpa biaya jemput, timbang, atau administrasi.
              </p>
            </div>

            {/* FAQ Item 6 */}
            <div className="card-premium">
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">
                ❔ Berapa harga minyak jelantah sekarang?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Harga tergantung volume - semakin banyak, harga semakin tinggi. Untuk volume besar (≥500 liter), bisa diskusikan harga khusus. Hubungi kami untuk informasi terkini.
              </p>
            </div>

            {/* FAQ Item 7 */}
            <div className="card-premium">
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">
                ❔ Apakah harga bisa dinegosiasikan?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Tarif kami sudah kompetitif dan transparan. Untuk <strong>volume besar (≥500 liter)</strong>, bisa diskusikan harga khusus. Hubungi kami untuk penawaran menarik.
              </p>
            </div>

            {/* FAQ Item 8 */}
            <div className="card-premium border-2 border-red-300">
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">
                ❔ Berapa lama proses penjemputan setelah saya hubungi?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Untuk area <strong>Jakarta Barat & Utara: same-day service</strong>. Maksimal <strong>1x24 jam</strong> untuk area lain. Tim kurir akan confirm jadwal via WhatsApp.
              </p>
            </div>

            {/* FAQ Item 9 */}
            <div className="card-premium">
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">
                ❔ Minyak jelantah saya ada kotoran/sisa makanan, bisa dijual?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sebaiknya disaring dulu. Kami hanya menerima <strong>minyak yang bersih, tanpa air dan kotoran</strong>. Warna tidak masalah.
              </p>
            </div>

            {/* FAQ Item 10 */}
            <div className="card-premium">
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">
                ❔ Apakah tersedia layanan rutin/kontrak bulanan?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ya, terutama untuk restoran & katering. Kami tawarkan <strong>jadwal penjemputan rutin</strong> dengan harga tetap & prioritas. Hubungi untuk diskusi detail.
              </p>
            </div>

            {/* FAQ Item 11 */}
            <div className="card-premium">
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">
                ❔ Bagaimana dampak lingkungan dari penjualan jelantah?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Minyak jelantah Anda akan kami olah menjadi <strong>biodiesel ramah lingkungan</strong>. Ini mengurangi limbah & mendukung energi terbarukan Indonesia.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <span className="text-gray-500">
              Ada pertanyaan lain? Tim kami siap membantu.
            </span>
          </div>
        </div>
      </section>

      {/* Keunggulan - Problem vs Solution */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              🏆 Keunggulan Kami Sebagai Pengepul Minyak Jelantah
            </h2>
            <p className="text-lg text-gray-600">
              Mengenal JelantahGO lebih dekat →
            </p>
          </div>

          {/* SECTION 1: MASALAH UMUM (2x2 GRID) */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-red-900 mb-8 text-center">⚠️ Masalah Umum</h3>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
              {/* Problem 1 */}
              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded">
                <h4 className="font-bold text-red-900 mb-2 text-base">Repot mencari pengepul</h4>
                <p className="text-gray-600 text-sm">Tidak tahu kemana harus jual, takut ditipu harga, banyak pengepul abal-abal</p>
              </div>

              {/* Problem 2 */}
              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded">
                <h4 className="font-bold text-red-900 mb-2 text-base">Harga tidak adil</h4>
                <p className="text-gray-600 text-sm">Pengepul lain hanya menawarkan harga rendah dengan potongan tersembunyi</p>
              </div>

              {/* Problem 3 */}
              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded">
                <h4 className="font-bold text-red-900 mb-2 text-base">Proses lambat & ribet</h4>
                <p className="text-gray-600 text-sm">Harus antri lama, prosesnya tidak transparan, nggak tahu berapa yang dijual</p>
              </div>

              {/* Problem 4 */}
              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded">
                <h4 className="font-bold text-red-900 mb-2 text-base">Harus membawa sendiri</h4>
                <p className="text-gray-600 text-sm">Tidak ada layanan jemput, harus repot-repot ngangkut sendiri</p>
              </div>
            </div>

            {/* DIVIDER */}
            <hr className="my-16 border-gray-300" />

            {/* SECTION 2: KEUNGGULAN JELANTAHGO (3x2 GRID) */}
            <div>
              <h3 className="text-2xl font-bold text-[#0F3D2E] mb-8 text-center">✅ Keunggulan JelantahGO</h3>

              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {/* Keunggulan 1 */}
                <div className="bg-white rounded-lg p-8 shadow-md text-center hover:shadow-lg transition-shadow">
                  <div className="text-5xl mb-4">💰</div>
                  <h4 className="font-bold text-[#0F3D2E] mb-2 text-lg">Harga Tertinggi</h4>
                  <p className="text-gray-600 text-sm">Hingga Rp 7.500/liter</p>
                </div>

                {/* Keunggulan 2 */}
                <div className="bg-white rounded-lg p-8 shadow-md text-center hover:shadow-lg transition-shadow">
                  <div className="text-5xl mb-4">🚚</div>
                  <h4 className="font-bold text-[#0F3D2E] mb-2 text-lg">Jemput Gratis</h4>
                  <p className="text-gray-600 text-sm">Ke lokasi Anda</p>
                </div>

                {/* Keunggulan 3 */}
                <div className="bg-white rounded-lg p-8 shadow-md text-center hover:shadow-lg transition-shadow">
                  <div className="text-5xl mb-4">💳</div>
                  <h4 className="font-bold text-[#0F3D2E] mb-2 text-lg">Bayar Transfer</h4>
                  <p className="text-gray-600 text-sm">Langsung di tempat</p>
                </div>

                {/* Keunggulan 4 */}
                <div className="bg-white rounded-lg p-8 shadow-md text-center hover:shadow-lg transition-shadow">
                  <div className="text-5xl mb-4">⚡</div>
                  <h4 className="font-bold text-[#0F3D2E] mb-2 text-lg">Respon Cepat</h4>
                  <p className="text-gray-600 text-sm">Dalam hitungan menit</p>
                </div>

                {/* Keunggulan 5 */}
                <div className="bg-white rounded-lg p-8 shadow-md text-center hover:shadow-lg transition-shadow">
                  <div className="text-5xl mb-4">📊</div>
                  <h4 className="font-bold text-[#0F3D2E] mb-2 text-lg">Transparan</h4>
                  <p className="text-gray-600 text-sm">Timbangan digital</p>
                </div>

                {/* Keunggulan 6 */}
                <div className="bg-white rounded-lg p-8 shadow-md text-center hover:shadow-lg transition-shadow">
                  <div className="text-5xl mb-4">🌍</div>
                  <h4 className="font-bold text-[#0F3D2E] mb-2 text-lg">Ramah Lingkungan</h4>
                  <p className="text-gray-600 text-sm">Diolah jadi biodiesel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <ServiceArea />

      {/* Blog */}
      <BlogSection />

      {/* Who Can Sell */}
      <WhoCanSell />

      {/* Testimonials */}
      <Testimonials />


      {/* CTA Final */}
      <section className="bg-white py-20">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#0F3D2E] rounded-card-lg p-12 border border-[#0F3D2E] shadow-layered">
              <div className="text-center">
                <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-white">
                  Hubungi Pengepul Terpercaya
                </h2>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-3xl">📱</span>
                    <div className="font-semibold text-white">WhatsApp</div>
                    <a href="https://wa.me/6285183033995" target="_blank" rel="noopener" className="text-white/90 hover:text-white hover:underline">
                      0851-8303-3995
                    </a>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-3xl">📞</span>
                    <div className="font-semibold text-white">Telepon</div>
                    <a href="tel:+622112345678" className="text-white/90 hover:text-white hover:underline">
                      (021) 1234 5678
                    </a>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-3xl">🕒</span>
                    <div className="font-semibold text-white">Jam Buka</div>
                    <div className="text-white/90">Sen-Min, 08:00-20:00</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/6285183033995?text=Halo,%20saya%20ingin%20konsultasi"
                    target="_blank"
                    rel="noopener"
                    className="bg-white text-[#0F3D2E] hover:bg-[#F9F8F6] px-8 py-4 rounded-card font-bold text-lg inline-flex items-center justify-center gap-2 transition-smooth"
                  >
                    💬 KONSULTASI GRATIS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
