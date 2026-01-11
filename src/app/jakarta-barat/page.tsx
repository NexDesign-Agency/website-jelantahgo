import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, MapPin, Clock, DollarSign, Truck, Shield, Phone, MessageCircle, ArrowRight, Building, Users, Calendar, Droplets, Recycle, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Jual Jelantah di Jakarta Barat – Pickup Gratis & Harga Terbaik | JelantahGO',
  description: 'Warga Jakbar? Jual jelantah bekas masak Anda! Dapatkan harga tinggi, pickup gratis ke rumah, dan dukung lingkungan. Layanan dari Kembangan hingga Tambora.',
  keywords: 'jual jelantah jakarta barat, harga jelantah jakbar, pickup jelantah jakbar, daur ulang minyak jelantah, kembangan, cengkareng, tambora, green community jakarta barat, bank sampah jelantah, eco waste jakarta',
  alternates: {
    canonical: 'https://jelantahgo.com/jakarta-barat',
  },
  openGraph: {
    title: 'Jual Jelantah di Jakarta Barat – Pickup Gratis & Harga Terbaik | JelantahGO',
    description: 'Warga Jakbar? Jual jelantah bekas masak Anda! Dapatkan harga tinggi, pickup gratis ke rumah, dan dukung lingkungan.',
    url: 'https://jelantahgo.com/jakarta-barat',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/v1763061460/jelantahgo_13_o83f8q.webp',
        width: 1200,
        height: 630,
        alt: 'Jual Jelantah Jakarta Barat - Pickup Gratis',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jual Jelantah di Jakarta Barat – Pickup Gratis & Harga Terbaik | JelantahGO',
    description: 'Warga Jakbar? Jual jelantah bekas masak Anda! Dapatkan harga tinggi, pickup gratis ke rumah.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/v1763061460/jelantahgo_13_o83f8q.webp'],
  },
}

export default function JakartaBaratPage() {
  return (
    <>
      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://jelantahgo.com/jakarta-barat#localbusiness",
            "name": "JelantahGO Jakarta Barat",
            "image": "https://res.cloudinary.com/dknswj9co/image/upload/v1763061460/jelantahgo_13_o83f8q.webp",
            "logo": "https://res.cloudinary.com/dknswj9co/image/upload/v1761172234/favicon_jelantahgo_kjxjs4.webp",
            "url": "https://jelantahgo.com/jakarta-barat",
            "telephone": "+6285183033995",
            "email": "info.jelantahgo@gmail.com",
            "priceRange": "Rp 7.500 - Rp 8.500 per liter",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Jakarta Barat",
              "addressRegion": "Daerah Khusus Ibukota Jakarta",
              "addressCountry": "ID"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -6.1678,
              "longitude": 106.7636
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
                "name": "Jakarta Barat"
              }
            ],
            "description": "Pengepul jelantah Jakarta Barat terpercaya. Jemput gratis, bayar cash instan, harga terbaik Rp 7.500-8.500/liter di Kembangan, Cengkareng, Tambora, Taman Sari, Grogol Petamburan."
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
                🌊 JAKARTA BARAT - JANTUNG KULINER & INDUSTRI
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 text-white">
                Jual Jelantah di Jakarta Barat – Dibayar Tunai, Pickup Gratis!
              </h1>

              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                Jakarta Barat — Minyak jelantah dari dapur Anda bisa jadi sumber penghasilan sekaligus penyelamat lingkungan. Temukan panduan lengkap jual minyak jelantah di Jakarta Barat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="https://wa.me/6285183033995?text=Halo%20JelantahGO,%20saya%20ingin%20jual%20jelantah%20di%20Jakarta%20Barat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#0F3D2E] hover:bg-[#F9F8F6] px-8 py-4 rounded-card font-bold text-lg flex items-center justify-center gap-2 transition-smooth shadow-soft-lg hover:shadow-soft-xl"
                >
                  📱 Jual Jelantah Sekarang
                </a>
                <a
                  href="#harga"
                  className="bg-transparent border-2 border-white/30 hover:bg-white/10 hover:border-white text-white px-8 py-4 rounded-card font-bold text-lg flex items-center justify-center gap-2 transition-smooth"
                >
                  💰 Lihat Harga Terbaru
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-card-lg overflow-hidden shadow-layered hover:shadow-soft-xl transition-smooth">
                <Image
                  src="https://res.cloudinary.com/dknswj9co/image/upload/v1763061460/jelantahgo_13_o83f8q.webp"
                  alt="Pengepul jelantah Jakarta Barat sedang menjemput gratis dan bayar tunai"
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

      {/* Why Important */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🌍 MENGAPA WARGA JAKARTA BARAT HARUS IKUT PROGRAM INI?
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Dampak Jelantah untuk Lingkungan Jakarta Barat
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Minyak jelantah = limbah berbahaya jika dibuang sembarangan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="card-premium text-center">
              <div className="text-4xl mb-4">💧</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Pencemaran Air</h3>
              <p className="text-gray-600 leading-relaxed">
                Satu liter jelantah bisa merusak ekosistem air setara 1.000 liter air bersih. Di Jakbar, banyak saluran air tersumbat karena jelantah — picu banjir lokal & bau tak sedap.
              </p>
            </div>

            <div className="card-premium text-center">
              <div className="text-4xl mb-4">♻️</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Daur Ulang Bernilai</h3>
              <p className="text-gray-600 leading-relaxed">
                Jelantah bisa didaur ulang jadi biodiesel atau sabun. Solusi sederhana? Kumpulkan — jual — daur ulang.
              </p>
            </div>

            <div className="card-premium text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Uang Tunai</h3>
              <p className="text-gray-600 leading-relaxed">
                Dibayar tunai per liter. Keuntungan untuk Anda: pickup gratis ke rumah/kantor/warung, kontribusi nyata untuk lingkungan, poin loyalty bisa ditukar voucher belanja.
              </p>
            </div>

            <div className="card-premium text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Fakta Mengejutkan</h3>
              <p className="text-gray-600 leading-relaxed">
                Rata-rata rumah tangga di Jakbar hasilkan 0,7 liter jelantah/minggu. Kalau 10.000 rumah ikut, itu = 36 ton/tahun — cukup untuk bahan bakar 5 mobil selama setahun!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section id="harga" className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              💰 HARGA JELANTAH JAKARTA BARAT
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Harga Jelantah di Jakarta Barat (Update Bulan Ini)
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Harga mengikuti fluktuasi pasar biodiesel global. Update tiap awal bulan via WhatsApp broadcast.
            </p>
          </div>

          <div className="overflow-x-auto max-w-4xl mx-auto">
            <table className="w-full bg-white rounded-card-lg shadow-soft overflow-hidden">
              <thead className="bg-[#0F3D2E] text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">Kondisi Jelantah</th>
                  <th className="px-6 py-4 text-left font-bold">Harga per Liter</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-[#0F3D2E]">Bersih, tidak campur air</td>
                  <td className="px-6 py-4 text-green-600 font-bold">Rp 7.500</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-[#0F3D2E]">Sedikit keruh/remah</td>
                  <td className="px-6 py-4 text-yellow-600 font-bold">Rp 6.500</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-[#0F3D2E]">Campur air/sabun</td>
                  <td className="px-6 py-4 text-orange-600 font-bold">Rp 5.500</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-[#0F3D2E]">Minimal 50 Liter</td>
                  <td className="px-6 py-4 text-blue-600 font-bold">+Rp 200/liter</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 p-6 rounded-card max-w-4xl mx-auto mt-8">
            <h3 className="text-lg font-bold text-[#0F3D2E] mb-4 text-center">💡 Tips Biar Dibayar Maksimal:</h3>
            <div className="grid md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Saring pakai kain katun sebelum masukkan botol</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Gunakan botol transparan (bekas air mineral/Aqua)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Simpan di tempat teduh, jangan panas</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Labeli botol: "JELANTAH – ECO WASTE"</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pickup Service */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🚚 LAYANAN PICKUP GRATIS DI JAKARTA BARAT
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Layanan Pickup Gratis di Jakarta Barat
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tim kami siap jemput jelantah Anda — tanpa biaya, tanpa ribet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card-premium">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Area Layanan Utama:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0F3D2E] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Kembangan (Permata Hijau, Taman Meruya, dll)</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0F3D2E] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Cengkareng (Rawa Buaya, Kamal, Kapuk)</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0F3D2E] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Grogol Petamburan (Tomang, Jelambar)</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0F3D2E] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Tambora (Duri Selatan, Kali Anyar)</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0F3D2E] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Taman Sari (Glodok, Pinangsia)</span>
                </div>
              </div>
            </div>

            <div className="card-premium">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Cara Pesan Pickup:</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-[#0F3D2E] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Kirim WA ke [nomor WhatsApp resmi]</p>
                    <p className="text-sm text-gray-600">Lampirkan foto jelantah + alamat lengkap (RT/RW penting!)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-[#0F3D2E] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Pilih jadwal: Senin–Sabtu, pukul 08.00–17.00</p>
                    <p className="text-sm text-gray-600">Tim datang, timbang langsung, bayar CASH!</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#0F3D2E] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Respon maksimal 24 jam</p>
                    <p className="text-sm text-gray-600">Minimal volume: 5 liter</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Drop Points */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              📍 DROP POINT JELANTAH DI JAKARTA BARAT
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Drop Point Jelantah di Jakarta Barat
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Lebih suka antar sendiri? Kunjungi titik koleksi terdekat:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="card-premium">
              <div className="text-4xl mb-4">🏬</div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">Mal Taman Anggrek</h3>
              <p className="text-gray-600 text-sm">Gerai EcoCorner, Lantai Dasar dekat Food Hall</p>
              <p className="text-gray-500 text-xs mt-1">Buka setiap hari, 10.00–21.00</p>
            </div>

            <div className="card-premium">
              <div className="text-4xl mb-4">🏪</div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">Pasar Cengkareng Indah</h3>
              <p className="text-gray-600 text-sm">Depan Pos Bank Sampah Cengkareng Hijau</p>
              <p className="text-gray-500 text-xs mt-1">Buka Senin–Sabtu, 07.00–14.00</p>
            </div>

            <div className="card-premium">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">Gedung Serbaguna RW 08 Kembangan</h3>
              <p className="text-gray-600 text-sm">Jl. Meruya Ilir No. 12</p>
              <p className="text-gray-500 text-xs mt-1">Hanya Minggu pagi, 08.00–11.00</p>
            </div>

            <div className="card-premium">
              <div className="text-4xl mb-4">🏪</div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">Kawasan Glodok</h3>
              <p className="text-gray-600 text-sm">Jl. Pancoran Raya No. 45, lantai 2</p>
              <p className="text-gray-500 text-xs mt-1">Buka setiap hari, 09.00–18.00 — khusus volume &gt;20 liter</p>
            </div>
          </div>

          <div className="bg-yellow-50 p-6 rounded-card max-w-4xl mx-auto mt-8">
            <p className="text-gray-700 text-center">
              💡 <strong>Bawa struk belanja minyak goreng untuk bonus poin loyalty!</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Packaging Guide */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              📦 CARA MENYIMPAN & MENGEMAS JELANTAH
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Cara Menyimpan & Mengemas Jelantah yang Benar
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Agar jelantah Anda diterima & dibayar penuh:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card-premium">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">✅ Yang Dianjurkan:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Gunakan botol plastik PET (bening/transparan)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Pastikan tutup rapat, tidak bocor</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Jangan campur dengan air, sabun, atau sisa makanan</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Simpan di tempat sejuk, hindari sinar matahari</span>
                </div>
              </div>
            </div>

            <div className="card-premium">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">❌ JANGAN gunakan:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-red-500 text-xl flex-shrink-0">✗</span>
                  <span className="text-gray-700">Botol kaca (berbahaya saat transportasi)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500 text-xl flex-shrink-0">✗</span>
                  <span className="text-gray-700">Jeriken besi/kaleng (sulit didaur ulang)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500 text-xl flex-shrink-0">✗</span>
                  <span className="text-gray-700">Kantong kresek (mudah bocor, mencemari)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🌱 DAMPAK LINGKUNGAN DAUR ULANG JELANTAH DI JAKBAR
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Dampak Lingkungan dari Daur Ulang Jelantah di Jakbar
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Setiap liter yang Anda serahkan = langkah besar untuk Jakarta yang lebih hijau:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="card-premium text-center">
              <div className="text-4xl mb-4">🌊</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Mencegah Penyumbatan Got</h3>
              <p className="text-gray-600 text-sm">Mengurangi banjir mikro di area pemukiman</p>
            </div>

            <div className="card-premium text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Mengurangi Polusi Tanah</h3>
              <p className="text-gray-600 text-sm">Mencegah pencemaran tanah dan air tanah</p>
            </div>

            <div className="card-premium text-center">
              <div className="text-4xl mb-4">⛽</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Menyubstitusi Solar Fosil</h3>
              <p className="text-gray-600 text-sm">Biodiesel lebih bersih dari bahan bakar konvensional</p>
            </div>

            <div className="card-premium text-center">
              <div className="text-4xl mb-4">👩‍🍳</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Memberdayakan UMKM</h3>
              <p className="text-gray-600 text-sm">Mendukung ekonomi hijau lokal dan komunitas</p>
            </div>
          </div>

          <div className="bg-green-50 p-8 rounded-card max-w-4xl mx-auto mt-12">
            <h3 className="text-xl font-bold text-[#0F3D2E] mb-4 text-center">📊 Data DLH Jakarta Barat:</h3>
            <p className="text-gray-700 text-center text-lg">
              Sejak program ini berjalan, <strong>8 ton jelantah berhasil dikumpulkan per bulan</strong> — setara dengan pengurangan 18 ton CO2!
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              💬 TESTIMONI WARGA JAKARTA BARAT
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Testimoni Warga Jakarta Barat
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card-premium">
              <div className="flex items-start gap-4">
                <div className="text-4xl">👩</div>
                <div>
                  <p className="text-gray-700 italic mb-3">
                    "Saya punya warung nasi di Tambora. Dulu bingung buang jelantah, sekarang malah dapat tambahan omzet. JelantahGO jemput tepat waktu, bayarnya cash!"
                  </p>
                  <p className="text-[#0F3D2E] font-semibold">— Bu Siti, Pemilik Warung Nasi Padang Sederhana</p>
                </div>
              </div>
            </div>

            <div className="card-premium">
              <div className="flex items-start gap-4">
                <div className="text-4xl">👨</div>
                <div>
                  <p className="text-gray-700 italic mb-3">
                    "Anak-anak di sekolah kami ikut program 'Jelantah Untuk Bumi'. Hasil penjualan dipakai buat beli buku. Edukatif dan bermanfaat!"
                  </p>
                  <p className="text-[#0F3D2E] font-semibold">— Pak Andi, Guru SDN Kembangan 03</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Program */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🤝 PROGRAM KOMUNITAS & SEKOLAH
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Program Komunitas & Sekolah di Jakarta Barat
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ajak RT, sekolah, atau kantor Anda bergabung!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="card-premium">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Workshop Gratis</h3>
              <p className="text-gray-600 leading-relaxed">
                "Dapur Ramah Lingkungan" - Workshop interaktif untuk komunitas dan sekolah
              </p>
            </div>

            <div className="card-premium">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Starter Pack</h3>
              <p className="text-gray-600 leading-relaxed">
                Botol, saringan, dan panduan lengkap untuk memulai program daur ulang
              </p>
            </div>

            <div className="card-premium">
              <div className="text-xl font-bold text-[#0F3D2E] mb-3">Dashboard Pelaporan</div>
              <p className="text-gray-600 leading-relaxed">
                Pantau volume dan impact lingkungan komunitas Anda secara real-time
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-[#0F3D2E] to-[#134E3A] text-white p-8 rounded-card-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Bergabung dengan Program Komunitas</h3>
              <p className="text-lg mb-6 opacity-90">
                Hubungi tim komunitas kami untuk informasi lebih lanjut
              </p>
              <a
                href="https://wa.me/6285183033995?text=Halo%20JelantahGO,%20saya%20ingin%20info%20program%20komunitas%20di%20Jakarta%20Barat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#0F3D2E] hover:bg-gray-100 px-6 py-3 rounded-card font-semibold transition-smooth"
              >
                📧 Hubungi Community Team <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ❓ FAQ – PERTANYAAN UMUM WARGA JAKBAR
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              FAQ – Pertanyaan Umum Warga Jakbar
            </h2>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="card-premium">
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">Q: Apakah restoran atau depot bisa ikut?</h3>
              <p className="text-gray-700">A: Bisa! Kami layani UMKM & restoran. Volume besar? Dapat harga spesial + jadwal tetap mingguan.</p>
            </div>

            <div className="card-premium">
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">Q: Jelantah campur minyak wijen/olive oil bisa?</h3>
              <p className="text-gray-700">A: Bisa, tapi harga disesuaikan. Minyak non-sawit biasanya lebih rendah harganya.</p>
            </div>

            <div className="card-premium">
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">Q: Bayar pakai GoPay/OVO bisa?</h3>
              <p className="text-gray-700">A: Untuk pickup rumah, hanya CASH. Untuk drop point, bisa pilih e-wallet.</p>
            </div>

            <div className="card-premium">
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">Q: Jika botol bocor saat dijemput, gimana?</h3>
              <p className="text-gray-700">A: Kami bawa cadangan botol & corong. Tidak masalah — yang penting isinya tidak tercampur kotoran.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 hero-bg-dots">
        <div className="container-custom text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
              Mulai Sekarang — Jual Jelantah Anda!
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Jangan biarkan jelantah jadi beban. Ubah jadi rupiah — sekaligus selamatkan lingkungan sekitar Anda.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-card p-8 mb-8">
              <div className="grid md:grid-cols-3 gap-4 text-white">
                <div className="text-center">
                  <div className="text-2xl mb-2">📲</div>
                  <p className="font-semibold">Langkah 1</p>
                  <p className="text-sm opacity-90">Siapkan botol bersih, tuang jelantah yang sudah disaring</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">📲</div>
                  <p className="font-semibold">Langkah 2</p>
                  <p className="text-sm opacity-90">WA ke kami atau kunjungi drop point terdekat</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">💰</div>
                  <p className="font-semibold">Langkah 3</p>
                  <p className="text-sm opacity-90">Dapatkan uang tunai + kontribusi nyata untuk bumi!</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6285183033995?text=Halo%20JelantahGO,%20saya%20ingin%20mulai%20jual%20jelantah%20di%20Jakarta%20Barat"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#0F3D2E] hover:bg-[#F9F8F6] px-8 py-4 rounded-card font-bold text-lg flex items-center justify-center gap-2 transition-smooth shadow-soft-lg hover:shadow-soft-xl"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp: 0851-8303-3995
              </a>
              <Link
                href="/jakarta"
                className="bg-transparent border-2 border-white/30 hover:bg-white/10 hover:border-white text-white px-8 py-4 rounded-card font-bold text-lg flex items-center justify-center gap-2 transition-smooth"
              >
                🏙️ Jelajahi Jakarta Lainnya
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}