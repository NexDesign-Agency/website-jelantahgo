import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, MapPin, Clock, DollarSign, Truck, Shield, Phone, MessageCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pengepul Minyak Jelantah Jakarta – Jemput Cepat & Harga Tinggi',
  description: 'Cari pengepul jelantah Jakarta? Layanan jemput cepat di 5 wilayah, harga transparan, pembayaran tunai/transfer. Cocok untuk rumah tangga, UMKM, restoran, hotel. Hubungi kami.',
  keywords: 'jual jelantah Jakarta, pengepul jelantah Jakarta, harga jelantah Jakarta, jemput jelantah Jakarta, jual minyak jelantah, drop point jelantah, daur ulang jelantah, biodiesel, lingkungan, UMKM',
  alternates: {
    canonical: 'https://jelantahgo.com/jakarta',
  },
  openGraph: {
    title: 'Pengepul Minyak Jelantah Jakarta – Jemput Cepat & Harga Tinggi',
    description: 'Cari pengepul jelantah Jakarta? Layanan jemput cepat di 5 wilayah, harga transparan, pembayaran tunai/transfer.',
    url: 'https://jelantahgo.com/jakarta',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/v1763061463/jelantahgo_17_eidh2l.webp',
        width: 1200,
        height: 630,
        alt: 'Pengepul Minyak Jelantah Jakarta - Jemput Cepat & Harga Tinggi',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pengepul Minyak Jelantah Jakarta – Jemput Cepat & Harga Tinggi',
    description: 'Cari pengepul jelantah Jakarta? Layanan jemput cepat di 5 wilayah, harga transparan.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/v1763061463/jelantahgo_17_eidh2l.webp'],
  },
}

export default function JakartaPage() {
  return (
    <>
      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://jelantahgo.com/jakarta#localbusiness",
            "name": "JelantahGO Jakarta",
            "image": "https://res.cloudinary.com/dknswj9co/image/upload/v1763061463/jelantahgo_17_eidh2l.webp",
            "logo": "https://res.cloudinary.com/dknswj9co/image/upload/v1761172234/favicon_jelantahgo_kjxjs4.webp",
            "url": "https://jelantahgo.com/jakarta",
            "telephone": "+6285183033995",
            "email": "info.jelantahgo@gmail.com",
            "priceRange": "Rp 7.500 - Rp 8.500 per liter",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Jakarta",
              "addressRegion": "Daerah Khusus Ibukota Jakarta",
              "addressCountry": "ID"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -6.2088,
              "longitude": 106.8456
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
              },
              {
                "@type": "City",
                "name": "Jakarta Barat"
              },
              {
                "@type": "City",
                "name": "Jakarta Timur"
              },
              {
                "@type": "City",
                "name": "Jakarta Selatan"
              },
              {
                "@type": "City",
                "name": "Jakarta Pusat"
              }
            ],
            "description": "Pengepul minyak jelantah Jakarta terpercaya. Jemput gratis, bayar cash instan, harga terbaik Rp 7.500-8.500/liter di seluruh wilayah Jakarta."
          })
        }}
      />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Pengepul Minyak Jelantah Jakarta",
            "provider": {
              "@type": "LocalBusiness",
              "@id": "https://jelantahgo.com/jakarta#localbusiness",
              "name": "JelantahGO Jakarta"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Jakarta Utara"
              },
              {
                "@type": "City",
                "name": "Jakarta Barat"
              },
              {
                "@type": "City",
                "name": "Jakarta Timur"
              },
              {
                "@type": "City",
                "name": "Jakarta Selatan"
              },
              {
                "@type": "City",
                "name": "Jakarta Pusat"
              }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Layanan Pembelian Minyak Jelantah Jakarta",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Jual Minyak Jelantah Jakarta Premium (≥200 Liter)"
                  },
                  "price": "8500",
                  "priceCurrency": "IDR",
                  "description": "Harga tertinggi untuk volume besar di Jakarta"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Jual Minyak Jelantah Jakarta Standar (100-199 Liter)"
                  },
                  "price": "8000",
                  "priceCurrency": "IDR",
                  "description": "Harga untuk volume menengah di Jakarta"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Jual Minyak Jelantah Jakarta Rumah Tangga (40-99 Liter)"
                  },
                  "price": "7500",
                  "priceCurrency": "IDR",
                  "description": "Harga untuk volume kecil di Jakarta"
                }
              ]
            }
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
                🏙️ PENGEPUL JELANTAH JAKARTA
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 text-white">
                Pengepul Jelantah Jakarta – Jemput Cepat & Harga Tinggi
              </h1>

              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                Pengepul jelantah Jakarta membantu Anda menjual minyak goreng bekas dengan mudah. Kami melayani rumah tangga, UMKM, restoran, katering, dan hotel.
                <br /><br />
                Tim kami siap jemput ke 5 wilayah Jakarta. Pengepul jelantah Jakarta ini fokus pada harga fair, tim tepat waktu, dan pembayaran aman.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="https://wa.me/620851-8303-3995?text=Halo%20JelantahGO,%20saya%20ingin%20dijemput%20hari%20ini%20di%20Jakarta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#0F3D2E] hover:bg-[#F9F8F6] px-8 py-4 rounded-card font-bold text-lg flex items-center justify-center gap-2 transition-smooth shadow-soft-lg hover:shadow-soft-xl"
                >
                  📱 Ingin dijemput hari ini? Hubungi kami via WhatsApp
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-card-lg overflow-hidden shadow-layered hover:shadow-soft-xl transition-smooth">
                <Image
                  src="https://res.cloudinary.com/dknswj9co/image/upload/v1763061463/jelantahgo_17_eidh2l.webp"
                  alt="Pengepul minyak jelantah Jakarta sedang menjemput gratis dan bayar tunai"
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

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ⭐ MENGAPA MEMILIH KAMI
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Mengapa Memilih Pengepul Jelantah Jakarta Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kami paham kebutuhan Anda. Proses harus cepat, bersih, dan transparan. Pengepul jelantah Jakarta yang profesional menekan risiko tumpah dan bau.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="card-premium">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Jemput cepat, jadwal fleksibel</h3>
              <p className="text-gray-600 leading-relaxed">
                Same-day service untuk area Jakarta Pusat/Selatan. Maksimal 1x24 jam untuk area pinggiran. Tim siap jemput sesuai jadwal Anda.
              </p>
            </div>

            <div className="card-premium">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Harga jelantah Jakarta kompetitif dan transparan</h3>
              <p className="text-gray-600 leading-relaxed">
                Rp 7.500-8.500/liter tergantung volume dan lokasi. Harga update real-time, price matching guarantee. Tidak ada potongan tersembunyi.
              </p>
            </div>

            <div className="card-premium">
              <div className="text-4xl mb-4">💵</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Pembayaran tunai atau transfer langsung</h3>
              <p className="text-gray-600 leading-relaxed">
                Bayar saat tim jemput. Pilih tunai untuk instant atau transfer untuk record digital. Semua pembayaran tercatat dengan nota resmi.
              </p>
            </div>

            <div className="card-premium">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Tim terlatih, peralatan bersih dan tertutup</h3>
              <p className="text-gray-600 leading-relaxed">
                Kurir berpengalaman dengan seragam, menggunakan mobil tertutup dan peralatan food-grade. Tidak ada risiko tumpah atau bau.
              </p>
            </div>

            <div className="card-premium">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Bukti transaksi/nota jelas</h3>
              <p className="text-gray-600 leading-relaxed">
                Setiap transaksi dapat nota digital via WhatsApp. Termasuk berat, harga per liter, total pembayaran, dan tanda tangan digital.
              </p>
            </div>

            <div className="card-premium">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Kami ingin Anda nyaman di setiap penjemputan</h3>
              <p className="text-gray-600 leading-relaxed">
                Pengepul jelantah Jakarta bertanggung jawab pada layanan dan lingkungan. Setiap penjemputan adalah kesempatan untuk edukasi daur ulang.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              📋 CARA JUAL JELANTAH DI JAKARTA
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Cara Jual Jelantah di Jakarta (3 Langkah)
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card-premium text-center">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">1. Hubungi kami</h3>
              <p className="text-gray-600 leading-relaxed">
                Kirim lokasi, estimasi volume, dan foto jerigen.<br />
                Sebutkan jenis usaha atau rumah tangga.
              </p>
            </div>

            <div className="card-premium text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">2. Dapatkan penawaran</h3>
              <p className="text-gray-600 leading-relaxed">
                Kami kirim kisaran harga jelantah Jakarta.<br />
                Atur jadwal jemput atau pilihan drop point.
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
            <h3 className="text-lg font-bold text-[#0F3D2E] mb-4 text-center">Tips cepat:</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Gunakan jerigen bersih, bertutup rapat</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Pisahkan dari air dan sisa makanan</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Simpan di tempat teduh</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🛠️ LAYANAN PENGEPUL JELANTAH JAKARTA
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Layanan Pengepul Jelantah Jakarta
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Pengepul jelantah Jakarta melayani berbagai kebutuhan dengan solusi yang tepat
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card-premium">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Jemput terjadwal untuk UMKM dan restoran</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Penjemputan rutin mingguan atau 2x seminggu sesuai jam operasional. Cocok untuk warung, kafe, dan restoran yang punya volume stabil.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Jadwal tetap, tidak perlu telepon berulang</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Harga kontrak untuk stabilitas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Prioritas penjemputan saat peak hours</span>
                </div>
              </div>
            </div>

            <div className="card-premium">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Penjemputan by request untuk rumah tangga</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Fleksibel untuk rumah tangga yang punya volume kecil-menengah. Jemput sesuai kebutuhan, minimal 40 liter.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Same-day service untuk area Jakarta Pusat</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Minimal volume fleksibel</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Pembayaran langsung di rumah</span>
                </div>
              </div>
            </div>

            <div className="card-premium">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Program komunitas/RT/RW dan CSR sekolah</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Program edukasi dan pengumpulan bersama untuk komunitas. Mendukung CSR sekolah dan program lingkungan RT/RW.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Edukasi daur ulang untuk anak sekolah</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Tabungan bersama dari hasil penjualan</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Sertifikat kontribusi lingkungan</span>
                </div>
              </div>
            </div>

            <div className="card-premium">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Kerja sama volume besar untuk hotel dan katering</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Solusi khusus untuk bisnis skala besar dengan volume tinggi. Kontainer khusus dan SLA yang jelas.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Kontainer tertutup untuk penyimpanan</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Dedicated account manager</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Invoice dan laporan bulanan</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-6">
              Butuh penjemputan rutin? Kami atur ritme mingguan atau bulanan. Pengepul jelantah Jakarta menyesuaikan jadwal Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              💰 HARGA JELANTAH JAKARTA
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Harga Jelantah Jakarta: Cara Kami Menentukan
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Harga jelantah Jakarta dipengaruhi oleh beberapa faktor untuk memastikan fairness
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card-premium">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Faktor yang mempengaruhi harga:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-[#0F3D2E] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Volume dan frekuensi penjemputan</p>
                    <p className="text-sm text-gray-600">Semakin besar volume, harga semakin tinggi</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Kebersihan jelantah</p>
                    <p className="text-sm text-gray-600">Tanpa air, tanpa sisa padat = harga optimal</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Truck className="w-5 h-5 text-[#0F3D2E] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Kondisi pasar biodiesel</p>
                    <p className="text-sm text-gray-600">Fluktuasi harga industri hilir</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0F3D2E] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Jarak lokasi dan akses logistik</p>
                    <p className="text-sm text-gray-600">Area Jakarta Pusat lebih efisien</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-premium">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Catatan penting:</h3>
              <div className="space-y-4">
                <div className="bg-yellow-50 p-4 rounded-card border-l-4 border-yellow-400">
                  <p className="text-gray-700">
                    <strong>Harga jelantah Jakarta bisa berubah harian.</strong> Update real-time sesuai kondisi pasar.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-card border-l-4 border-blue-400">
                  <p className="text-gray-700">
                    <strong>Dapatkan update di:</strong>
                    <Link href="/blog/harga-jelantah-oktober-2025" className="text-[#0F3D2E] hover:underline ml-1">
                      /blog/harga/harga-jelantah-jakarta-update
                    </Link>
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-card border-l-4 border-green-400">
                  <p className="text-gray-700">
                    <strong>Untuk volume besar, harga bisa lebih baik.</strong> Diskusi khusus untuk 500L+.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ✨ STANDAR KUALITAS
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Standar Kualitas & Persiapan Jelantah
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
                    <p className="font-semibold text-gray-900">Pastikan bebas air</p>
                    <p className="text-sm text-gray-600">Air menurunkan kualitas dan harga jelantah Jakarta</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Saring sisa makanan</p>
                    <p className="text-sm text-gray-600">Gunakan kain atau saringan halus untuk memisahkan partikel padat</p>
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
                    <p className="font-semibold text-gray-900">Simpan di tempat teduh</p>
                    <p className="text-sm text-gray-600">Hindari panas langsung yang mempercepat oksidasi</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Jangan campur bahan kimia</p>
                    <p className="text-sm text-gray-600">Termasuk minyak mesin atau bahan pembersih</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-premium">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Mengapa standar ini penting?</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Standar sederhana ini memudahkan pengepul jelantah Jakarta menilai kualitas. Anda pun mendapat harga jelantah Jakarta yang lebih baik. Kualitas tinggi = harga tinggi.
              </p>
              <div className="bg-green-50 p-4 rounded-card">
                <p className="text-green-800 font-semibold">
                  💡 Tip: Saring minyak setelah dingin untuk hasil terbaik!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🗺️ CAKUPAN 5 WILAYAH JAKARTA
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Cakupan 5 Wilayah Jakarta
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kami melayani semua wilayah Jakarta dengan layanan yang sama berkualitasnya
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="card-premium">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-[#0F3D2E]" />
                <h3 className="text-xl font-bold text-[#0F3D2E]">Jakarta Utara</h3>
              </div>
              <p className="text-gray-600 mb-3">Kelapa Gading, Sunter, PIK</p>
              <Link href="/jakarta-utara" className="text-[#0F3D2E] hover:underline text-sm">
                Lihat: /jakarta-utara →
              </Link>
            </div>

            <div className="card-premium">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-[#0F3D2E]" />
                <h3 className="text-xl font-bold text-[#0F3D2E]">Jakarta Barat</h3>
              </div>
              <p className="text-gray-600 mb-3">Cengkareng, Kembangan, Tanjung Duren</p>
              <Link href="/jakarta-barat" className="text-[#0F3D2E] hover:underline text-sm">
                Lihat: /jakarta-barat →
              </Link>
            </div>

            <div className="card-premium">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-[#0F3D2E]" />
                <h3 className="text-xl font-bold text-[#0F3D2E]">Jakarta Timur</h3>
              </div>
              <p className="text-gray-600 mb-3">Cakung, Jatinegara, Ciracas</p>
              <Link href="/jakarta-timur" className="text-[#0F3D2E] hover:underline text-sm">
                Lihat: /jakarta-timur →
              </Link>
            </div>

            <div className="card-premium">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-[#0F3D2E]" />
                <h3 className="text-xl font-bold text-[#0F3D2E]">Jakarta Selatan</h3>
              </div>
              <p className="text-gray-600 mb-3">Kemang, Tebet, Pondok Indah</p>
              <Link href="/jakarta-selatan" className="text-[#0F3D2E] hover:underline text-sm">
                Lihat: /jakarta-selatan →
              </Link>
            </div>

            <div className="card-premium">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-[#0F3D2E]" />
                <h3 className="text-xl font-bold text-[#0F3D2E]">Jakarta Pusat</h3>
              </div>
              <p className="text-gray-600 mb-3">Menteng, Tanah Abang, Senen</p>
              <Link href="/jakarta-pusat" className="text-[#0F3D2E] hover:underline text-sm">
                Lihat: /jakarta-pusat →
              </Link>
            </div>

            <div className="card-premium bg-gradient-to-r from-[#0F3D2E] to-[#134E3A] text-white">
              <h3 className="text-xl font-bold mb-4">Area Spesifik</h3>
              <p className="text-white/90 mb-3">Untuk area spesifik:</p>
              <div className="space-y-2 text-sm">
                <Link href="/jakarta-utara/kelapa-gading" className="block text-white/90 hover:text-white hover:underline">
                  /jakarta-utara/kelapa-gading
                </Link>
                <Link href="/jakarta-selatan/kemang" className="block text-white/90 hover:text-white hover:underline">
                  /jakarta-selatan/kemang
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700">
              Tidak melihat area Anda? Tanyakan tim kami. Pengepul jelantah Jakarta akan carikan solusi.
            </p>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              👥 SIAPA YANG KAMI LAYANI
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Siapa yang Kami Layani
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Pengepul jelantah Jakarta melayani semua segmen dengan solusi yang tepat
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="card-premium">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Rumah tangga</h3>
              <p className="text-gray-600 leading-relaxed">
                Jual jelantah Jakarta tanpa repot. Minimal fleksibel untuk volume rumah tangga.
              </p>
            </div>

            <div className="card-premium">
              <div className="text-4xl mb-4">🏪</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">UMKM kuliner</h3>
              <p className="text-gray-600 leading-relaxed">
                Gorengan, angkringan, kedai kopi, bakery. Penjemputan rutin sesuai jam operasional.
              </p>
            </div>

            <div className="card-premium">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Restoran dan kafe</h3>
              <p className="text-gray-600 leading-relaxed">
                Penjemputan rutin off-peak hours. Volume besar dengan harga premium.
              </p>
            </div>

            <div className="card-premium">
              <div className="text-4xl mb-4">🏨</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Katering dan hotel</h3>
              <p className="text-gray-600 leading-relaxed">
                Volume besar dengan kontainer khusus. SLA dan invoice resmi untuk bisnis.
              </p>
            </div>

            <div className="card-premium">
              <div className="text-4xl mb-4">🏫</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Komunitas/RT/RW/sekolah</h3>
              <p className="text-gray-600 leading-relaxed">
                Program tabungan jelantah. Edukasi lingkungan dengan sertifikat kontribusi.
              </p>
            </div>

            <div className="card-premium">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Pengelola gedung dan kantin</h3>
              <p className="text-gray-600 leading-relaxed">
                Sistem pencatatan rapi dengan laporan bulanan. Compliance untuk audit.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700">
              Dengan pengepul jelantah Jakarta yang tepat, operasional Anda lebih efisien. Lingkungan juga lebih aman.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🌟 MANFAAT JUAL JELANTAH
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Manfaat Jual Jelantah yang Tertib
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card-premium">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Manfaat lingkungan:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Mengurangi pencemaran air dan tanah</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Mendukung ekonomi sirkular dan bahan baku biodiesel</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Area dapur lebih bersih dan rapi</span>
                </div>
              </div>
            </div>

            <div className="card-premium">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Manfaat ekonomi:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Ada pemasukan tambahan untuk UMKM dan rumah tangga</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Jejak lingkungan usaha menjadi lebih baik</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Pengepul jelantah Jakarta berperan sebagai jembatan</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700">
              Minyak bekas Anda menjadi produk bernilai. Kami mengubah paradigma "buang" menjadi "daur ulang".
            </p>
          </div>
        </div>
      </section>

      {/* Volume, Equipment, Schedule */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              📊 VOLUME, PERALATAN & JADWAL
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Volume, Peralatan, dan Jadwal
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card-premium text-center">
              <div className="text-4xl mb-4">📏</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Volume Minimal</h3>
              <p className="text-gray-600 leading-relaxed">
                Volume minimal jemput bervariasi per wilayah. Tanyakan minimal untuk area Anda.
              </p>
            </div>

            <div className="card-premium text-center">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Peralatan</h3>
              <p className="text-gray-600 leading-relaxed">
                Jerigen food-grade, corong, selang, dan timbangan digital. Semua peralatan bersih dan tertutup.
              </p>
            </div>

            <div className="card-premium text-center">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Jadwal</h3>
              <p className="text-gray-600 leading-relaxed">
                Same-day untuk area inti, maksimal 1x24 jam untuk pinggiran. Regular route untuk pelanggan rutin.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700">
              Pengepul jelantah Jakarta memastikan proses cepat dan bersih. Anda tinggal fokus pada usaha.
            </p>
          </div>
        </div>
      </section>

      {/* Security & Legal */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🛡️ KEAMANAN & LEGALITAS
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Keamanan, Legalitas, dan Dokumen
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kami mendukung praktik yang patuh aturan. Untuk kerja sama B2B, siapkan data yang diperlukan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card-premium">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Data yang diperlukan:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Data usaha: nama, alamat, NIB/NPWP (jika ada)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Kontak penanggung jawab</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Nota pembelian/berita acara serah terima</span>
                </div>
              </div>
            </div>

            <div className="card-premium">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Keuntungan untuk Anda:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Sertifikat kontribusi lingkungan (untuk CSR report)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Tax benefit documentation (pengelolaan limbah)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Audit trail lengkap untuk compliance</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Asuransi transaksi (protected up to Rp 100 juta)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700">
              Kebijakan daerah dapat berbeda. Konsultasikan pada kami bila perlu. Pengepul jelantah Jakarta akan bantu menyesuaikan.
            </p>
          </div>
        </div>
      </section>

      {/* Pickup vs Drop Point */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🚚 JEMPUT VS DROP POINT
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Perbandingan: Jemput vs Drop Point
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card-premium">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">🚚 Jemput</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Praktis. Cocok untuk volume sedang-besar.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Jadwal fleksibel.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Same-day service untuk area Jakarta Pusat.</span>
                </div>
              </div>
            </div>

            <div className="card-premium">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">📍 Drop Point</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Cocok untuk rumah tangga atau volume kecil.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Lihat daftar lokasi: /blog/lokasi/drop-point-jelantah-jakarta</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Tersedia di berbagai titik strategis Jakarta.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700">
              Keduanya mendukung target harga jelantah Jakarta yang kompetitif. Pilih yang paling nyaman.
            </p>
          </div>
        </div>
      </section>

      {/* Optimization Tips */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              💡 OPTIMALKAN HARGA ANDA
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Optimalkan Harga Anda
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
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">Pisahkan dari air, saus, bumbu</h3>
              <p className="text-gray-600 text-sm">Kualitas lebih baik, harga lebih tinggi</p>
            </div>

            <div className="card-premium text-center">
              <div className="text-4xl mb-4">🪣</div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">Gunakan jerigen 20-30 liter</h3>
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
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Jadwalkan penjemputan rutin untuk konsistensi</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Dengan tips ini, pengepul jelantah Jakarta dapat memberi harga lebih optimal</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B2B Integration */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🏢 INTEGRASI BISNIS
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Integrasi untuk Usaha Skala Besar
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Untuk restoran waralaba, hotel, dan katering dengan kebutuhan khusus
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card-premium">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Fitur khusus B2B:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">SLA jemput dan waktu respons yang jelas</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Kapasitas armada sesuai jam operasional</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Rekap transaksi dan faktur bulanan</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Pelatihan singkat untuk staf dapur</span>
                </div>
              </div>
            </div>

            <div className="card-premium">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Kontainer & peralatan:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Kontainer tertutup untuk penyimpanan</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Dedicated account manager</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Sistem tracking real-time</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Dashboard khusus untuk monitoring</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700">
              Pengepul jelantah Jakarta siap mendukung standar operasional Anda. Kami menjaga konsistensi layanan.
            </p>
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
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">Berapa minimal jemput?</h3>
              <p className="text-gray-700">Tergantung wilayah dan rute. Tanyakan tim kami untuk area spesifik Jakarta.</p>
            </div>

            <div className="card-premium">
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">Bagaimana cara cek harga terbaru?</h3>
              <p className="text-gray-700">Lihat: <Link href="/blog/harga-jelantah-oktober-2025" className="text-[#0F3D2E] hover:underline">/blog/harga/harga-jelantah-jakarta-update</Link></p>
            </div>

            <div className="card-premium">
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">Apakah ada biaya jemput?</h3>
              <p className="text-gray-700">Umumnya tidak untuk volume tertentu. Konfirmasi dulu dengan tim Jakarta kami.</p>
            </div>

            <div className="card-premium">
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">Kapan pembayaran dilakukan?</h3>
              <p className="text-gray-700">Saat penjemputan. Tunai atau transfer langsung di lokasi Jakarta Anda.</p>
            </div>

            <div className="card-premium">
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">Jelantah tercampur air, apakah tetap diterima?</h3>
              <p className="text-gray-700">Bisa, namun harga disesuaikan. Lebih baik dipisah untuk harga optimal.</p>
            </div>

            <div className="card-premium">
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">Bisa jemput di akhir pekan?</h3>
              <p className="text-gray-700">Bisa jika slot tersedia. Atur jadwal lebih awal untuk area Jakarta.</p>
            </div>

            <div className="card-premium">
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">Terima jelantah dari event besar?</h3>
              <p className="text-gray-700">Ya. Kami siapkan armada dan kontainer tambahan untuk event Jakarta.</p>
            </div>

            <div className="card-premium">
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">Ada kerja sama jangka panjang?</h3>
              <p className="text-gray-700">Tersedia untuk UMKM dan bisnis Jakarta. Hubungi untuk proposal khusus.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 hero-bg-dots">
        <div className="container-custom text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
              Mulai Jual Jelantah di Jakarta Hari Ini
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Pengepul jelantah Jakarta siap melayani Anda dengan harga terbaik dan layanan prima
            </p>

            <div className="flex justify-center mb-8">
              <a
                href="/contact"
                className="bg-white text-[#0F3D2E] hover:bg-[#F9F8F6] px-8 py-4 rounded-card font-bold text-lg flex items-center justify-center gap-2 transition-smooth shadow-soft-lg hover:shadow-soft-xl"
              >
                Hubungi Kami
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-card p-6">
              <p className="text-white text-center">
                <strong>Pengepul jelantah Jakarta #1</strong> - Harga tinggi, jemput cepat, pembayaran aman
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

