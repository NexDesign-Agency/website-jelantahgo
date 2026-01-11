import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, MapPin, Clock, DollarSign, Truck, Shield, Phone, MessageCircle, ArrowRight, Building, Users, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pengepul Minyak Jelantah Jakarta Pusat – Jemput Cepat & Harga Tinggi',
  description: 'Cari pengepul jelantah Jakarta Pusat? Jemput cepat di Menteng, Tanah Abang, Gambir, Senen, Kemayoran, dan sekitarnya. Harga transparan, bayar tunai/transfer, cocok untuk rumah tangga, UMKM, restoran, dan hotel.',
  keywords: 'pengepul jelantah jakarta pusat, jual jelantah jakarta pusat, harga jelantah jakarta pusat, jemput jelantah jakarta pusat, menteng, tanah abang, gambir, senen, kemayoran, cempaka putih, sawah besar, johar baru, drop point jelantah, umkm, b2b, biodiesel',
  alternates: {
    canonical: 'https://jelantahgo.com/jakarta-pusat',
  },
  openGraph: {
    title: 'Pengepul Minyak Jelantah Jakarta Pusat – Jemput Cepat & Harga Tinggi',
    description: 'Cari pengepul jelantah Jakarta Pusat? Jemput cepat di Menteng, Tanah Abang, Gambir, Senen, Kemayoran, dan sekitarnya.',
    url: 'https://jelantahgo.com/jakarta-pusat',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/v1763061459/jelantahgo_11_kmdxjo.webp',
        width: 1200,
        height: 630,
        alt: 'Pengepul Minyak Jelantah Jakarta Pusat - Jemput Cepat & Harga Tinggi',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pengepul Minyak Jelantah Jakarta Pusat – Jemput Cepat & Harga Tinggi',
    description: 'Cari pengepul jelantah Jakarta Pusat? Jemput cepat di Menteng, Tanah Abang, Gambir, Senen, Kemayoran.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/v1763061459/jelantahgo_11_kmdxjo.webp'],
  },
}

export default function JakartaPusatPage() {
  return (
    <>
      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://jelantahgo.com/jakarta-pusat#localbusiness",
            "name": "JelantahGO Jakarta Pusat",
            "image": "https://res.cloudinary.com/dknswj9co/image/upload/v1763061459/jelantahgo_11_kmdxjo.webp",
            "logo": "https://res.cloudinary.com/dknswj9co/image/upload/v1761172234/favicon_jelantahgo_kjxjs4.webp",
            "url": "https://jelantahgo.com/jakarta-pusat",
            "telephone": "+6285183033995",
            "email": "info.jelantahgo@gmail.com",
            "priceRange": "Rp 7.500 - Rp 8.500 per liter",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Jakarta Pusat",
              "addressRegion": "Daerah Khusus Ibukota Jakarta",
              "addressCountry": "ID"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -6.1744,
              "longitude": 106.8227
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "08:00",
              "closes": "20:00"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Jakarta Pusat"
              }
            ],
            "description": "Pengepul minyak jelantah Jakarta Pusat terpercaya. Jemput gratis, bayar cash instan, harga terbaik Rp 7.500-8.500/liter di Menteng, Tanah Abang, Gambir, Senen, Kemayoran."
          })
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Berapa minimal jemput di Jakarta Pusat?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Minimal bervariasi per rute dan area. Umumnya 5–10 liter untuk rumah tangga, 20–30 liter untuk UMKM, dan 50–100 liter untuk restoran atau hotel."
                }
              },
              {
                "@type": "Question",
                "name": "Apakah ada biaya jemput?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Tidak ada biaya untuk volume yang memenuhi minimal. Untuk volume kecil, gunakan drop point terdekat."
                }
              },
              {
                "@type": "Question",
                "name": "Kapan pembayaran dilakukan?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pembayaran dilakukan saat penjemputan, tunai atau transfer. Bukti transaksi (nota/berita acara) diberikan langsung."
                }
              },
              {
                "@type": "Question",
                "name": "Apakah menerima jelantah tercampur air?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Bisa, namun ada penyesuaian harga. Untuk nilai yang lebih baik, pisahkan air dan saring sisa makanan."
                }
              },
              {
                "@type": "Question",
                "name": "Bagaimana cara pesan penjemputan?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hubungi WhatsApp kami. Kirim lokasi, estimasi volume, dan foto wadah. Kami kirim penawaran harga serta jadwal jemput."
                }
              },
              {
                "@type": "Question",
                "name": "Apakah melayani gedung bertingkat?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ya. Sertakan detail loading bay, jam operasional, dan akses lift barang. Tim kami terbiasa mengikuti SOP building management."
                }
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="hero-bg-dots py-20">
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
                🏙️ PENGEPUL JELANTAH JAKARTA PUSAT
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 text-white">
                Pengepul Jelantah Jakarta Pusat – Jemput Cepat & Harga Tinggi
              </h1>

              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                Butuh pengepul jelantah Jakarta Pusat yang cepat dan terpercaya? Kami melayani penjemputan aman di area perkantoran, apartemen, dan sentra kuliner.
                <br /><br />
                Pengepul jelantah Jakarta Pusat kami menekankan harga transparan dan layanan rapi. Pembayaran langsung. Nota jelas. Tim datang sesuai jadwal.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="https://wa.me/6285183033995?text=Halo%20JelantahGO,%20saya%20ingin%20dijemput%20hari%20ini%20di%20Jakarta%20Pusat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#0F3D2E] hover:bg-[#F9F8F6] px-8 py-4 rounded-card font-bold text-lg flex items-center justify-center gap-2 transition-smooth shadow-soft-lg hover:shadow-soft-xl"
                >
                  📱 Ingin dijemput hari ini? Chat WhatsApp kami
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-card-lg overflow-hidden shadow-layered hover:shadow-soft-xl transition-smooth">
                <Image
                  src="https://res.cloudinary.com/dknswj9co/image/upload/v1763061459/jelantahgo_11_kmdxjo.webp"
                  alt="Pengepul minyak jelantah Jakarta Pusat sedang menjemput gratis dan bayar tunai"
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

      {/* Area Coverage */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🗺️ AREA LAYANAN JAKARTA PUSAT
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Area Layanan Jakarta Pusat
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Pengepul jelantah Jakarta Pusat mencakup seluruh kecamatan berikut
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="card-premium">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-[#0F3D2E]" />
                <h3 className="text-xl font-bold text-[#0F3D2E]">Menteng</h3>
              </div>
              <p className="text-gray-600 mb-3">Jl. HOS Cokroaminoto, Pegangsaan, Gondangdia</p>
            </div>

            <div className="card-premium">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-[#0F3D2E]" />
                <h3 className="text-xl font-bold text-[#0F3D2E]">Tanah Abang</h3>
              </div>
              <p className="text-gray-600 mb-3">Kebon Kacang, Petamburan, kawasan Thamrin–Sudirman</p>
            </div>

            <div className="card-premium">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-[#0F3D2E]" />
                <h3 className="text-xl font-bold text-[#0F3D2E]">Gambir</h3>
              </div>
              <p className="text-gray-600 mb-3">Monas, Juanda, Pecenongan, Harmoni</p>
            </div>

            <div className="card-premium">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-[#0F3D2E]" />
                <h3 className="text-xl font-bold text-[#0F3D2E]">Senen</h3>
              </div>
              <p className="text-gray-600 mb-3">Kramat, Atrium, Kwitang</p>
            </div>

            <div className="card-premium">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-[#0F3D2E]" />
                <h3 className="text-xl font-bold text-[#0F3D2E]">Kemayoran</h3>
              </div>
              <p className="text-gray-600 mb-3">Gunung Sahari, Harapan Mulya, Pusat Pameran JIEXPO</p>
            </div>

            <div className="card-premium">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-[#0F3D2E]" />
                <h3 className="text-xl font-bold text-[#0F3D2E]">Cempaka Putih</h3>
              </div>
              <p className="text-gray-600 mb-3">Rawasari, Cempaka Putih Barat/Timur</p>
            </div>

            <div className="card-premium">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-[#0F3D2E]" />
                <h3 className="text-xl font-bold text-[#0F3D2E]">Sawah Besar</h3>
              </div>
              <p className="text-gray-600 mb-3">Mangga Dua, Pasar Baru, Kartini</p>
            </div>

            <div className="card-premium">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-[#0F3D2E]" />
                <h3 className="text-xl font-bold text-[#0F3D2E]">Johar Baru</h3>
              </div>
              <p className="text-gray-600 mb-3">Galur, Tanah Tinggi, Kampung Rawa</p>
            </div>

            <div className="card-premium bg-gradient-to-r from-[#0F3D2E] to-[#134E3A] text-white">
              <h3 className="text-xl font-bold mb-4">Catatan akses:</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <Building className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Gedung bertingkat butuh izin security</span>
                </div>
                <div className="flex items-start gap-2">
                  <Users className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Apartemen: konfirmasi jam operasional service lift</span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Area ramai: hindari jam sibuk 07.00–09.30 dan 16.30–19.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ⭐ MENGAPA MEMILIH KAMI
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Mengapa Memilih Pengepul Jelantah Jakarta Pusat Kami
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="card-premium">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Jemput cepat di ring pusat kota</h3>
              <p className="text-gray-600 leading-relaxed">
                Same-day service untuk area Jakarta Pusat. Maksimal 1x24 jam untuk area pinggiran. Tim siap jemput sesuai jadwal Anda.
              </p>
            </div>

            <div className="card-premium">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Harga jelantah Jakarta Pusat transparan dan kompetitif</h3>
              <p className="text-gray-600 leading-relaxed">
                Rp 7.500-8.500/liter tergantung volume dan lokasi. Harga update real-time, price matching guarantee.
              </p>
            </div>

            <div className="card-premium">
              <div className="text-4xl mb-4">💵</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Pembayaran tunai/transfer saat penjemputan</h3>
              <p className="text-gray-600 leading-relaxed">
                Bayar langsung di tempat. Pilih tunai untuk instant atau transfer untuk record digital.
              </p>
            </div>

            <div className="card-premium">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Tim terlatih, peralatan tertutup dan bersih</h3>
              <p className="text-gray-600 leading-relaxed">
                Kurir berpengalaman dengan seragam, menggunakan mobil tertutup dan peralatan food-grade.
              </p>
            </div>

            <div className="card-premium">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Nota/berita acara digital dan fisik tersedia</h3>
              <p className="text-gray-600 leading-relaxed">
                Setiap transaksi dapat nota digital via WhatsApp. Termasuk berat, harga per liter, total pembayaran.
              </p>
            </div>

            <div className="card-premium">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Rute rutin untuk restoran, hotel, dan kantor</h3>
              <p className="text-gray-600 leading-relaxed">
                Kami paham ritme Jakarta Pusat. Pengepul jelantah Jakarta Pusat kami menyesuaikan jadwal agar operasional tetap lancar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              📋 CARA JUAL JELANTAH DI JAKARTA PUSAT
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Cara Jual Jelantah di Jakarta Pusat (3 Langkah)
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card-premium text-center">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">1. Hubungi kami</h3>
              <p className="text-gray-600 leading-relaxed">
                Kirim lokasi, estimasi volume, dan foto wadah.<br />
                Sebutkan jenis usaha atau rumah tangga.
              </p>
            </div>

            <div className="card-premium text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">2. Dapatkan penawaran</h3>
              <p className="text-gray-600 leading-relaxed">
                Kami kirim kisaran harga jelantah Jakarta Pusat.<br />
                Atur jadwal jemput atau drop point.
              </p>
            </div>

            <div className="card-premium text-center">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">3. Jemput & bayar</h3>
              <p className="text-gray-600 leading-relaxed">
                Kurir menimbang di lokasi.<br />
                Pembayaran tunai/transfer saat itu juga.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-card max-w-4xl mx-auto mt-12">
            <h3 className="text-lg font-bold text-[#0F3D2E] mb-4 text-center">Tips singkat:</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Gunakan jerigen bersih, bertutup rapat</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Pisahkan jelantah dari air dan kuah</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Simpan di tempat teduh</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              💰 HARGA JELANTAH JAKARTA PUSAT
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Harga Jelantah Jakarta Pusat: Cara Kami Hitung
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card-premium">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Faktor penentu:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-[#0F3D2E] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Volume total dan frekuensi penjemputan</p>
                    <p className="text-sm text-gray-600">Semakin besar volume, harga semakin tinggi</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Kebersihan jelantah</p>
                    <p className="text-sm text-gray-600">Tanpa air, tanpa sisa padat = harga optimal</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Truck className="w-5 h-5 text-[#0F3D2E] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Jarak, akses parkir, dan waktu tunggu gedung</p>
                    <p className="text-sm text-gray-600">Area Jakarta Pusat lebih efisien</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0F3D2E] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Kondisi pasar biodiesel dan industri hilir</p>
                    <p className="text-sm text-gray-600">Fluktuasi harga industri hilir</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-premium">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Pembaruan harga:</h3>
              <div className="space-y-4">
                <div className="bg-yellow-50 p-4 rounded-card border-l-4 border-yellow-400">
                  <p className="text-gray-700">
                    <strong>Harga jelantah Jakarta Pusat bisa berubah harian.</strong> Update real-time sesuai kondisi pasar.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-card border-l-4 border-blue-400">
                  <p className="text-gray-700">
                    <strong>Cek update di:</strong>
                    <Link href="/blog/harga-jelantah-oktober-2025" className="text-[#0F3D2E] hover:underline ml-1">
                      /blog/harga/harga-jelantah-jakarta-update
                    </Link>
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-card border-l-4 border-green-400">
                  <p className="text-gray-700">
                    <strong>Volume besar dan kontrak rutin dapat harga lebih baik.</strong> Diskusi khusus untuk 500L+.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimum Volume */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              📏 MINIMAL JEMPUT & KAPASITAS ARMADA
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Minimal Jemput & Kapasitas Armada
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="card-premium text-center">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">Rumah tangga</h3>
              <p className="text-gray-600">Mulai 5–10 liter</p>
            </div>

            <div className="card-premium text-center">
              <div className="text-4xl mb-4">🏪</div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">UMKM</h3>
              <p className="text-gray-600">20–30 liter</p>
            </div>

            <div className="card-premium text-center">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">Restoran/Hotel/Kantin</h3>
              <p className="text-gray-600">50–100 liter</p>
            </div>

            <div className="card-premium text-center">
              <div className="text-4xl mb-4">🎪</div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">Event/volume besar</h3>
              <p className="text-gray-600">Hubungi untuk penjadwalan khusus</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700">
              Pengepul jelantah Jakarta Pusat melakukan pengecekan rute harian. Jika di bawah minimal, gunakan drop point.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ✨ STANDAR KUALITAS & WADAH
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Standar Kualitas & Wadah
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Agar harga optimal, ikuti panduan persiapan jelantah yang benar
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card-premium">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Panduan persiapan:</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Saring jelantah dengan kain halus</p>
                    <p className="text-sm text-gray-600">Pastikan bebas air dan saus</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Gunakan jerigen bertutup rapat</p>
                    <p className="text-sm text-gray-600">Hindari botol tipis yang mudah bocor</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-600">Tutup rapat dan beri label tanggal</p>
                    <p className="text-sm text-gray-600">Gunakan jerigen 20–30 liter food-grade</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-premium">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Yang tidak diterima:</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-red-500 text-xl flex-shrink-0">✗</span>
                  <span className="text-gray-700">Oli mesin, pelumas, grease trap kotor</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500 text-xl flex-shrink-0">✗</span>
                  <span className="text-gray-700">Campuran bahan kimia atau non-nabati</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500 text-xl flex-shrink-0">✗</span>
                  <span className="text-gray-700">Penjemputan di area terlarang</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Building Pickup */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🏢 PENJEMPUTAN DI PERKANTORAN, MALL & HOTEL
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Penjemputan di Perkantoran, Mall, dan Hotel
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Banyak lokasi Jakarta Pusat berada di gedung bertingkat. Ikuti panduan ini
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card-premium">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Panduan penjemputan:</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Building className="w-6 h-6 text-[#0F3D2E] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Kirim nama gedung, tower, dan lantai</p>
                    <p className="text-sm text-gray-600">Sertakan akses loading bay dan jam operasional</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-[#0F3D2E] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Siapkan surat izin atau access pass jika diminta</p>
                    <p className="text-sm text-gray-600">Gunakan wadah tertutup untuk lift barang</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-premium">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Tim kami terbiasa dengan:</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">SOP building management</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Koordinasi dengan security</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Proses jadi cepat dan aman</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule & SLA */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              📅 JADWAL, RUTE & SLA
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Jadwal, Rute, dan SLA
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="card-premium text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">Same-day tersedia</h3>
              <p className="text-gray-600 text-sm">Untuk slot tertentu</p>
            </div>

            <div className="card-premium text-center">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">Rute rutin</h3>
              <p className="text-gray-600 text-sm">Sen–Sab, jam 09.00–17.00</p>
            </div>

            <div className="card-premium text-center">
              <div className="text-4xl mb-4">🌙</div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">Penjemputan malam</h3>
              <p className="text-gray-600 text-sm">Tersedia by request</p>
            </div>

            <div className="card-premium text-center">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">SLA konfirmasi</h3>
              <p className="text-gray-600 text-sm">≤30 menit saat jam kerja</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700">
              Butuh ritme mingguan atau bulanan? Pengepul jelantah Jakarta Pusat akan atur kalender tetap.
            </p>
          </div>
        </div>
      </section>

      {/* Drop Point & Community */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              📍 DROP POINT & PROGRAM KOMUNITAS
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Drop Point & Program Komunitas
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card-premium">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Drop point untuk volume kecil:</h3>
              <Link href="/blog/lokasi/drop-point-jelantah-jakarta" className="text-[#0F3D2E] hover:underline">
                /blog/lokasi/drop-point-jelantah-jakarta
              </Link>
            </div>

            <div className="card-premium">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Program komunitas:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Program RT/RW, sekolah, dan komunitas lingkungan</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Konsinyasi jerigen dan pelabelan kolektif</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Laporan berat dan kompensasi per periode</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B2B Integration */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🤝 KERJA SAMA B2B & MULTI-CABANG
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Kerja Sama B2B dan Multi-Cabang
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Untuk restoran, hotel, katering, dan perkantoran dengan kebutuhan khusus
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card-premium">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Fitur khusus B2B:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">SLA jemput, waktu respons, dan backup armada</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Kontainer tertutup di lokasi dapur</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Rekap transaksi dan invoice bulanan</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Pelatihan singkat untuk staf</span>
                </div>
              </div>
            </div>

            <div className="card-premium">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Penarikan lintas lokasi:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Jakarta Utara/Barat/Timur/Selatan</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Pengepul jelantah Jakarta Pusat siap mendukung audit, dokumen, dan kebijakan internal Anda</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Links & Internal Linking */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🔗 TAUTAN TERKAIT & INTERNAL LINKING
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Tautan Terkait dan Internal Linking
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card-premium">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Halaman Jakarta lainnya:</h3>
              <div className="space-y-2">
                <Link href="/jakarta" className="block text-[#0F3D2E] hover:underline">Halaman utama Jakarta: /jakarta</Link>
                <Link href="/jakarta-utara" className="block text-[#0F3D2E] hover:underline">Jakarta Utara: /jakarta-utara</Link>
                <Link href="/jakarta-barat" className="block text-[#0F3D2E] hover:underline">Jakarta Barat: /jakarta-barat</Link>
                <Link href="/jakarta-timur" className="block text-[#0F3D2E] hover:underline">Jakarta Timur: /jakarta-timur</Link>
                <Link href="/jakarta-selatan" className="block text-[#0F3D2E] hover:underline">Jakarta Selatan: /jakarta-selatan</Link>
              </div>
            </div>

            <div className="card-premium">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Panduan & Resources:</h3>
              <div className="space-y-2">
                <Link href="/blog/lokasi/panduan-lengkap-jual-jelantah-jakarta" className="block text-[#0F3D2E] hover:underline">Panduan lengkap jual jelantah: /blog/lokasi/panduan-lengkap-jual-jelantah-jakarta</Link>
                <Link href="/blog/lokasi/drop-point-jelantah-jakarta" className="block text-[#0F3D2E] hover:underline">Drop point: /blog/lokasi/drop-point-jelantah-jakarta</Link>
                <Link href="/blog/harga/harga-jelantah-jakarta-update" className="block text-[#0F3D2E] hover:underline">Update harga: /blog/harga/harga-jelantah-jakarta-update</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ❓ PERTANYAAN UMUM
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Pertanyaan Umum (FAQ)
            </h2>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="card-premium">
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">Berapa minimal jemput di Jakarta Pusat?</h3>
              <p className="text-gray-700">Bervariasi per rute. Umumnya 5–10 liter untuk rumah tangga. Tanyakan tim kami untuk area spesifik Jakarta Pusat.</p>
            </div>

            <div className="card-premium">
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">Apakah ada biaya jemput?</h3>
              <p className="text-gray-700">Tidak, jika memenuhi minimal. Di bawah minimal, gunakan drop point terdekat.</p>
            </div>

            <div className="card-premium">
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">Kapan pembayaran dilakukan?</h3>
              <p className="text-gray-700">Saat penjemputan. Tunai atau transfer langsung di lokasi Jakarta Pusat Anda.</p>
            </div>

            <div className="card-premium">
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">Jelantah tercampur air, apakah diterima?</h3>
              <p className="text-gray-700">Bisa, namun harga disesuaikan. Lebih baik pisahkan air untuk nilai lebih baik.</p>
            </div>

            <div className="card-premium">
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">Bisakah jemput akhir pekan?</h3>
              <p className="text-gray-700">Bisa jika slot tersedia. Atur jadwal lebih awal untuk area Jakarta Pusat.</p>
            </div>

            <div className="card-premium">
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">Bisa jemput di kawasan Tanah Abang yang padat?</h3>
              <p className="text-gray-700">Bisa. Kami atur waktu di luar jam sibuk dan siapkan titik temu.</p>
            </div>

            <div className="card-premium">
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">Apakah menyediakan jerigen?</h3>
              <p className="text-gray-700">Tersedia untuk mitra rutin. Syarat dan deposit mungkin berlaku.</p>
            </div>

            <div className="card-premium">
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">Bagaimana cara pesan penjemputan?</h3>
              <p className="text-gray-700">Hubungi WhatsApp kami. Kirim lokasi, estimasi volume, dan foto wadah. Kami kirim penawaran harga serta jadwal jemput.</p>
            </div>

            <div className="card-premium">
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">Apakah melayani gedung bertingkat?</h3>
              <p className="text-gray-700">Ya. Sertakan detail loading bay, jam operasional, dan akses lift barang. Tim kami terbiasa mengikuti SOP building management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Optimization Tips */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              💡 OPTIMALKAN HARGA JELANTAH ANDA
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Optimalkan Harga Jelantah Anda
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="card-premium text-center">
              <div className="text-4xl mb-4">🕐</div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">Saring setelah dingin</h3>
              <p className="text-gray-600 text-sm">Hasil lebih bersih dan harga optimal</p>
            </div>

            <div className="card-premium text-center">
              <div className="text-4xl mb-4">🍲</div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">Hindari campuran air, sambal, atau kuah</h3>
              <p className="text-gray-600 text-sm">Kualitas lebih baik, harga lebih tinggi</p>
            </div>

            <div className="card-premium text-center">
              <div className="text-4xl mb-4">🪣</div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">Gunakan jerigen 20–30 liter</h3>
              <p className="text-gray-600 text-sm">Efisien untuk logistik dan penjemputan</p>
            </div>

            <div className="card-premium text-center">
              <div className="text-4xl mb-4">🌤️</div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">Simpan di area teduh dan kering</h3>
              <p className="text-gray-600 text-sm">Mencegah oksidasi dan penurunan kualitas</p>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-card max-w-4xl mx-auto mt-12">
            <h3 className="text-lg font-bold text-[#0F3D2E] mb-4 text-center">Tips tambahan:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Jadwalkan penjemputan rutin untuk konsistensi</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Dengan tips ini, pengepul jelantah Jakarta Pusat dapat memberi harga lebih optimal</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 hero-bg-dots">
        <div className="container-custom text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
              Siap Jual Jelantah di Jakarta Pusat?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Chat WhatsApp sekarang. Kirim lokasi dan volume. Dapatkan penawaran harga hari ini.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="https://wa.me/6285183033995?text=Halo%20JelantahGO,%20saya%20ingin%20mulai%20jual%20jelantah%20di%20Jakarta%20Pusat"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#0F3D2E] hover:bg-[#F9F8F6] px-8 py-4 rounded-card font-bold text-lg flex items-center justify-center gap-2 transition-smooth shadow-soft-lg hover:shadow-soft-xl"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp: 0851-8303-3995
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-card p-6">
              <p className="text-white text-center">
                <strong>Pengepul jelantah Jakarta Pusat #1</strong> - Harga tinggi, jemput cepat, pembayaran aman
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}