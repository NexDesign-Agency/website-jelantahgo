import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, MapPin, Clock, DollarSign, Truck, Shield, Phone, MessageCircle, ArrowRight, Building, Users, Calendar, Droplets, Recycle, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Jual Jelantah di Jakarta Utara – Harga Terbaik & Pickup Gratis | JelantahGO',
  description: 'Cari tempat jual jelantah di Jakarta Utara? Dapatkan harga terupdate, pickup gratis, dan layanan ramah lingkungan. Mulai dari Kelapa Gading hingga PIK, kami siap jemput!',
  keywords: 'jual jelantah jakarta utara, harga jelantah jakarta utara, pickup jelantah jakarta utara, daur ulang minyak jelantah, kelapa gading, pantai indah kapuk, eco waste jakarta, bank sampah jelantah, program lingkungan jakarta utara, jelantah bekas masak',
  alternates: {
    canonical: 'https://jelantahgo.com/jakarta-utara',
  },
  openGraph: {
    title: 'Jual Jelantah di Jakarta Utara – Harga Terbaik & Pickup Gratis | JelantahGO',
    description: 'Cari tempat jual jelantah di Jakarta Utara? Dapatkan harga terupdate, pickup gratis, dan layanan ramah lingkungan. Mulai dari Kelapa Gading hingga PIK, kami siap jemput!',
    url: 'https://jelantahgo.com/jakarta-utara',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/v1763061460/jelantahgo_14_d5txal.webp',
        width: 1200,
        height: 630,
        alt: 'Jual Jelantah Jakarta Utara - Pickup Gratis',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jual Jelantah di Jakarta Utara – Harga Terbaik & Pickup Gratis | JelantahGO',
    description: 'Cari tempat jual jelantah di Jakarta Utara? Dapatkan harga terupdate, pickup gratis, dan layanan ramah lingkungan.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/v1760998331/jelantahgo_14_d5txal.webp'],
  },
}

export default function JakartaUtaraPage() {
  return (
    <>
      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://jelantahgo.com/jakarta-utara#localbusiness",
            "name": "JelantahGO Jakarta Utara",
            "image": "https://res.cloudinary.com/dknswj9co/image/upload/v1760998331/jelantahgo_14_d5txal.webp",
            "logo": "https://res.cloudinary.com/dknswj9co/image/upload/v1761172234/favicon_jelantahgo_kjxjs4.webp",
            "url": "https://jelantahgo.com/jakarta-utara",
            "telephone": "+6285183033995",
            "email": "info.jelantahgo@gmail.com",
            "priceRange": "Rp 7.500 - Rp 8.500 per liter",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Jakarta Utara",
              "addressRegion": "Daerah Khusus Ibukota Jakarta",
              "addressCountry": "ID"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -6.1214,
              "longitude": 106.7741
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
                "name": "Jakarta Utara"
              }
            ],
            "description": "Pengepul jelantah Jakarta Utara terpercaya. Jemput gratis, bayar cash instan, harga terbaik Rp 7.500-8.500/liter di Kelapa Gading, PIK, Pluit, Sunter, Ancol, Tanjung Priok."
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
                🌊 JAKARTA UTARA - PUSAT BISNIS & HUNIAN ELITE
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 text-white">
                Jual Jelantah di Jakarta Utara – Harga Terbaik & Pickup Gratis!
              </h1>

              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                Jakarta Utara bukan cuma pusat bisnis dan hunian elite. Di sini, Anda juga bisa berkontribusi untuk lingkungan — dengan cara sederhana: jual jelantah bekas pakai Anda!

                Ya, minyak goreng bekas yang biasanya dibuang ke saluran air atau tempat sampah... bisa jadi bernilai ekonomi — sekaligus menyelamatkan sungai dan laut dari pencemaran.

                Di halaman ini, kami sajikan panduan lengkap untuk warga Jakarta Utara: harga jelantah terbaru, lokasi drop point & jadwal pickup, cara kemas jelantah agar diterima, manfaat lingkungan & insentif bagi Anda.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="https://wa.me/6285183033995?text=Halo%20JelantahGO,%20saya%20ingin%20jual%20jelantah%20di%20Jakarta%20Utara"
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
                  src="https://res.cloudinary.com/dknswj9co/image/upload/v1760998331/jelantahgo_14_d5txal.webp"
                  alt="Pengepul jelantah Jakarta Utara sedang menjemput gratis dan bayar tunai"
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
              🌍 MENGAPA JUAL JELANTAH DI JAKARTA UTARA ITU PENTING?
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Dampak Jelantah untuk Lingkungan Jakarta Utara
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Minyak jelantah adalah limbah B3 (Bahan Berbahaya dan Beracun) jika dibuang sembarangan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="card-premium text-center">
              <div className="text-4xl mb-4">💧</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Pencemaran Air</h3>
              <p className="text-gray-600 leading-relaxed">
                Satu liter jelantah bisa mencemari 1 juta liter air bersih. Bayangkan dampaknya jika ribuan rumah tangga di Jakut membuang jelantah ke selokan.
              </p>
            </div>

            <div className="card-premium text-center">
              <div className="text-4xl mb-4">♻️</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Daur Ulang Bernilai</h3>
              <p className="text-gray-600 leading-relaxed">
                Jelantah bisa didaur ulang jadi biodiesel, sabun, lilin, bahkan aspal ramah lingkungan. Anda bisa dapat uang tambahan tiap bulan.
              </p>
            </div>

            <div className="card-premium text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Pickup Gratis</h3>
              <p className="text-gray-600 leading-relaxed">
                Kami jemput jelantah Anda ke rumah atau kantor tanpa biaya. Kontribusi nyata untuk Jakarta yang lebih hijau.
              </p>
            </div>

            <div className="card-premium text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Fakta Mengejutkan</h3>
              <p className="text-gray-600 leading-relaxed">
                Warga Jakarta Utara rata-rata menghasilkan 0,5–1 liter jelantah per minggu. Kalau dikumpulkan, itu bisa jadi ratusan ton per tahun — cukup untuk menggerakkan puluhan mobil!
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
              💰 HARGA JELANTAH JAKARTA UTARA
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Harga Jelantah di Jakarta Utara (Update Bulan Ini)
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Harga bisa naik turun tergantung pasar global biodiesel. Update tiap awal bulan.
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
                  <td className="px-6 py-4 font-semibold text-[#0F3D2E]">Sedikit keruh</td>
                  <td className="px-6 py-4 text-yellow-600 font-bold">Rp 6.500</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-[#0F3D2E]">Campur remah makanan</td>
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
            <h3 className="text-lg font-bold text-[#0F3D2E] mb-4 text-center">💡 Tips untuk Harga Optimal:</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Saring jelantah sebelum disimpan</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Gunakan botol plastik bening/transparan</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Simpan di tempat sejuk, jauh dari sinar matahari langsung</span>
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
              🚚 LAYANAN PICKUP JELANTAH GRATIS
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Layanan Pickup Jelantah Gratis di Jakarta Utara
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kami jemput jelantah Anda — tanpa biaya, tanpa repot.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card-premium">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Area Layanan Prioritas:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0F3D2E] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Kelapa Gading (semua cluster)</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0F3D2E] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Pantai Indah Kapuk (PIK 1 & PIK 2)</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0F3D2E] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Pluit</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0F3D2E] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Sunter</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0F3D2E] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Ancol</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0F3D2E] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Tanjung Priok (area perumahan)</span>
                </div>
              </div>
            </div>

            <div className="card-premium">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Cara Pesan Pickup:</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-[#0F3D2E] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">WA ke [nomor WhatsApp]</p>
                    <p className="text-sm text-gray-600">Kirim lokasi, estimasi volume, dan foto wadah</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-[#0F3D2E] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Pilih jadwal: Senin-Jumat, pukul 09.00–16.00</p>
                    <p className="text-sm text-gray-600">Tim kami datang, timbang, bayar CASH di tempat!</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#0F3D2E] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Respon dalam 24 jam</p>
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
              📍 DROP POINT JELANTAH DI JAKARTA UTARA
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Drop Point Jelantah di Jakarta Utara
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Lebih suka antar sendiri? Kunjungi drop point terdekat:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="card-premium">
              <div className="text-4xl mb-4">🏬</div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">Kelapa Gading</h3>
              <p className="text-gray-600 text-sm">EcoCorner Mal Kelapa Gading Lantai 3</p>
              <p className="text-gray-500 text-xs mt-1">Buka setiap hari, 10.00–20.00</p>
            </div>

            <div className="card-premium">
              <div className="text-4xl mb-4">🛍️</div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">PIK Avenue</h3>
              <p className="text-gray-600 text-sm">Gerai Daur Ulang EcoWaste, dekat Food Hall</p>
              <p className="text-gray-500 text-xs mt-1">Buka Senin-Minggu, 11.00–21.00</p>
            </div>

            <div className="card-premium">
              <div className="text-4xl mb-4">🏪</div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">Pluit Junction</h3>
              <p className="text-gray-600 text-sm">Depan Bank Sampah Pluit Hijau</p>
              <p className="text-gray-500 text-xs mt-1">Hanya Sabtu-Minggu, 08.00–15.00</p>
            </div>

            <div className="card-premium">
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">Sunter Mall</h3>
              <p className="text-gray-600 text-sm">Lobi Utama, dekat eskalator barat</p>
              <p className="text-gray-500 text-xs mt-1">Buka setiap hari, 12.00–19.00</p>
            </div>
          </div>

          <div className="bg-yellow-50 p-6 rounded-card max-w-4xl mx-auto mt-8">
            <p className="text-gray-700 text-center">
              💡 <strong>Bawa struk pembelian minyak goreng untuk bonus poin loyalty!</strong>
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
              Agar jelantah Anda diterima dan dibayar maksimal:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card-premium">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">✅ Yang Dianjurkan:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Gunakan botol plastik PET (bekas air mineral/botol minyak baru)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Jangan campur dengan air, sabun, atau sisa makanan</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Tutup rapat, labeli "JELANTAH – ECO WASTE"</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Simpan di tempat teduh, jangan terkena panas</span>
                </div>
              </div>
            </div>

            <div className="card-premium">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">❌ JANGAN gunakan:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-red-500 text-xl flex-shrink-0">✗</span>
                  <span className="text-gray-700">Botol kaca (berisiko pecah)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500 text-xl flex-shrink-0">✗</span>
                  <span className="text-gray-700">Jeriken logam (sulit didaur ulang)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500 text-xl flex-shrink-0">✗</span>
                  <span className="text-gray-700">Kantong plastik (bocor & mencemari)</span>
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
              🌱 DAMPAK LINGKUNGAN DAUR ULANG JELANTAH
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Manfaat Lingkungan dari Daur Ulang Jelantah
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Setiap liter jelantah yang Anda kumpulkan = dampak besar untuk bumi:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="card-premium text-center">
              <div className="text-4xl mb-4">💧</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Kurangi Pencemaran Air</h3>
              <p className="text-gray-600 text-sm">Mencegah polusi sungai dan laut</p>
            </div>

            <div className="card-premium text-center">
              <div className="text-4xl mb-4">🏞️</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Lindungi Tanah</h3>
              <p className="text-gray-600 text-sm">Cegah pencemaran tanah dan banjir</p>
            </div>

            <div className="card-premium text-center">
              <div className="text-4xl mb-4">🌫️</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Kurangi Emisi Karbon</h3>
              <p className="text-gray-600 text-sm">Biodiesel lebih bersih dari solar</p>
            </div>

            <div className="card-premium text-center">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Ciptakan Lapangan Kerja</h3>
              <p className="text-gray-600 text-sm">Dukung ekonomi hijau lokal</p>
            </div>
          </div>

          <div className="bg-green-50 p-8 rounded-card max-w-4xl mx-auto mt-12">
            <h3 className="text-xl font-bold text-[#0F3D2E] mb-4 text-center">📊 Data KLHK:</h3>
            <p className="text-gray-700 text-center text-lg">
              Program daur ulang jelantah di Jakarta Utara telah mengurangi <strong>12 ton limbah minyak per bulan</strong> sejak 2023.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              💬 TESTIMONI WARGA JAKARTA UTARA
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Testimoni Warga Jakarta Utara
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card-premium">
              <div className="flex items-start gap-4">
                <div className="text-4xl">👩</div>
                <div>
                  <p className="text-gray-700 italic mb-3">
                    "Awalnya ragu, tapi ternyata prosesnya gampang banget. Dapat Rp 70 ribu dari 20 liter jelantah. Pickup datang pas janji, petugasnya ramah!"
                  </p>
                  <p className="text-[#0F3D2E] font-semibold">— Ibu Rina, Kelapa Gading</p>
                </div>
              </div>
            </div>

            <div className="card-premium">
              <div className="flex items-start gap-4">
                <div className="text-4xl">👨</div>
                <div>
                  <p className="text-gray-700 italic mb-3">
                    "Kami restoran kecil di PIK. Sekarang jelantah nggak jadi beban, malah jadi pemasukan tambahan. JelantahGO selalu tepat waktu."
                  </p>
                  <p className="text-[#0F3D2E] font-semibold">— Pak Dedi, Pemilik Warung Sate Nusantara</p>
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
              Program Komunitas & Sekolah di Jakarta Utara
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ingin ajak RT, sekolah, atau kantor Anda ikut program ramah lingkungan?
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="card-premium">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Workshop Gratis</h3>
              <p className="text-gray-600 leading-relaxed">
                "Daur Ulang Jelantah untuk Pemula" - Workshop interaktif untuk komunitas dan sekolah
              </p>
            </div>

            <div className="card-premium">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Starter Kit</h3>
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
                href="https://wa.me/6285183033995?text=Halo%20JelantahGO,%20saya%20ingin%20info%20program%20komunitas%20di%20Jakarta%20Utara"
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
              ❓ FAQ – PERTANYAAN UMUM WARGA JAKUT
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              FAQ – Pertanyaan Umum Warga Jakut
            </h2>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="card-premium">
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">Q: Apakah harus minyak goreng merek tertentu?</h3>
              <p className="text-gray-700">A: Tidak. Semua jenis minyak goreng bekas bisa kami terima — sawit, jagung, kanola, dll.</p>
            </div>

            <div className="card-premium">
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">Q: Bisa bayar via transfer?</h3>
              <p className="text-gray-700">A: Untuk pickup rumah, kami bayar CASH. Untuk drop point, bisa pilih cash atau e-wallet.</p>
            </div>

            <div className="card-premium">
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">Q: Minimal volume berapa?</h3>
              <p className="text-gray-700">A: Pickup: minimal 5 liter. Drop point: tidak ada minimal.</p>
            </div>

            <div className="card-premium">
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">Q: Jelantah sudah lama disimpan, masih bisa dijual?</h3>
              <p className="text-gray-700">A: Bisa, asal tidak berjamur atau berbau tengik. Kalau berbau asam, sayangnya tidak bisa kami proses.</p>
            </div>

            <div className="card-premium">
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">Q: Bagaimana cara pesan penjemputan?</h3>
              <p className="text-gray-700">A: Hubungi WhatsApp kami. Kirim lokasi, estimasi volume, dan foto wadah. Kami kirim penawaran harga serta jadwal jemput.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 hero-bg-dots">
        <div className="container-custom text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
              Mulai Hari Ini — Jual Jelantah Anda!
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Jangan biarkan jelantah jadi sampah. Ubah jadi uang — sekaligus selamatkan lingkungan.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-card p-8 mb-8">
              <div className="grid md:grid-cols-3 gap-4 text-white">
                <div className="text-center">
                  <div className="text-2xl mb-2">📲</div>
                  <p className="font-semibold">Langkah 1</p>
                  <p className="text-sm opacity-90">Kumpulkan jelantah dalam botol bersih</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">📲</div>
                  <p className="font-semibold">Langkah 2</p>
                  <p className="text-sm opacity-90">WA ke kami atau kunjungi drop point terdekat</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">💰</div>
                  <p className="font-semibold">Langkah 3</p>
                  <p className="text-sm opacity-90">Dapatkan bayaran + kontribusi untuk Jakarta yang lebih hijau!</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6285183033995?text=Halo%20JelantahGO,%20saya%20ingin%20mulai%20jual%20jelantah%20di%20Jakarta%20Utara"
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