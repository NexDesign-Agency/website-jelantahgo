import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Phone, Mail, MapPin, MessageCircle, Clock, Scale, Wallet,
  Truck, CheckCircle, XCircle, AlertCircle, ArrowRight, DollarSign,
  Home, UtensilsCrossed, Building2, Factory, Leaf, TrendingUp,
  Users, Calculator, Star, HelpCircle, ExternalLink
} from 'lucide-react'
import FAQSchema from '@/components/FAQSchema'
import HowToSchema from '@/components/HowToSchema'

export const metadata: Metadata = {
  title: 'Panduan Cara Jual Minyak Jelantah di Jakarta | JelantahGO',
  description: 'Panduan lengkap cara jual minyak jelantah di Jakarta. Proses cepat 4 langkah, bayar langsung, penjemputan gratis ≥40L. Hubungi JelantahGo 0851-8303-3995',
  alternates: {
    canonical: 'https://jelantahgo.com/cara-jual-minyak-jelantah',
  },
  openGraph: {
    title: 'Panduan Cara Jual Minyak Jelantah di Jakarta | JelantahGO',
    description: 'Panduan lengkap cara jual minyak jelantah di Jakarta. Proses cepat 4 langkah, bayar langsung, penjemputan gratis ≥40L.',
    url: 'https://jelantahgo.com/cara-jual-minyak-jelantah',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/v1761171104/jelantah-go_9_pdl5dv.webp',
        width: 1200,
        height: 630,
        alt: 'Cara Jual Minyak Jelantah di Jakarta - Panduan Lengkap',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Panduan Cara Jual Minyak Jelantah di Jakarta | JelantahGO',
    description: 'Panduan lengkap cara jual minyak jelantah di Jakarta. Proses cepat 4 langkah, bayar langsung, penjemputan gratis ≥40L.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/v1761171104/jelantah-go_9_pdl5dv.webp'],
  },
}

export default function CaraJualMinyakJelantahPage() {
  const faqsData = [
    {
      question: 'Apakah ada minimal order?',
      answer: 'Tidak! Mulai dari 5 liter bisa dijual (antar ke kantor). Untuk penjemputan gratis, minimal 40 liter.',
    },
    {
      question: 'Berapa lama prosesnya?',
      answer: 'Maksimal 1-2 hari dari order hingga pembayaran. Biasanya bisa di hari yang sama!',
    },
    {
      question: 'Apakah harga bisa nego?',
      answer: 'Untuk volume kecil (<40L), harga sudah fixed. Untuk volume ≥100 liter atau kontrak rutin, bisa nego harga lebih baik.',
    },
    {
      question: 'Area mana saja yang dilayani?',
      answer: 'Seluruh Jakarta: Utara, Selatan, Barat, Timur, Pusat. Lihat detail area di halaman Area Layanan.',
    },
    {
      question: 'Apakah ada biaya tambahan?',
      answer: 'TIDAK! Penjemputan ≥40L gratis. Tidak ada biaya admin atau potongan.',
    },
    {
      question: 'Bagaimana kalau minyak tercampur air?',
      answer: 'Tetap kami terima, tapi harga akan disesuaikan dengan kualitas. Tips: pisahkan dulu airnya untuk harga maksimal.',
    },
  ]

  const howToSteps = [
    {
      name: 'Hubungi Kami',
      text: 'Hubungi JelantahGo via WhatsApp +62 851-8303-3995, telepon, atau email. Siapkan informasi: estimasi volume, lokasi, jenis minyak, dan jadwal yang diinginkan. Response time: 5-30 menit di jam kerja.',
      image: 'https://res.cloudinary.com/dknswj9co/image/upload/v1761171104/jelantah-go_8_aa2c3g.webp',
    },
    {
      name: 'Konfirmasi Harga & Jadwal',
      text: 'Tim akan konfirmasi harga terbaru per liter, cek volume & kualitas, tentukan metode (kami jemput gratis untuk ≥40L atau antar ke kantor), dan jadwalkan waktu yang sesuai.',
      image: 'https://res.cloudinary.com/dknswj9co/image/upload/v1761171104/jelantah-go_9_pdl5dv.webp',
    },
    {
      name: 'Penjemputan atau Pengantaran',
      text: 'Jika kami yang jemput: tim tiba sesuai jadwal, verifikasi minyak, penimbangan transparan dengan timbangan digital, hitung total, dan pembayaran instant. Jika antar ke kantor: datang ke Jl. Papanggo 3C No.250, Jakarta Utara.',
      image: 'https://res.cloudinary.com/dknswj9co/image/upload/v1761171104/jelantah-go_10_rs4pcn.webp',
    },
    {
      name: 'Terima Pembayaran & Selesai!',
      text: 'Pembayaran tunai langsung di tempat atau transfer instant ke rekening. Anda terima nota/invoice resmi, bukti transfer (jika via bank), dan nomor referensi transaksi.',
      image: 'https://res.cloudinary.com/dknswj9co/image/upload/v1761171104/jelantah-go_2_awh3lr.webp',
    },
  ]

  return (
    <>
      <FAQSchema faqs={faqsData} />
      <HowToSchema
        name="Cara Jual Minyak Jelantah di Jakarta"
        description="Panduan lengkap cara jual minyak jelantah di Jakarta dalam 4 langkah mudah: hubungi kami, konfirmasi harga & jadwal, penjemputan/pengantaran, terima pembayaran."
        steps={howToSteps}
        totalTime="PT2D"
      />
      {/* Hero Section */}
      <section className="hero-bg-dots py-20 lg:py-28">
        <div className="container-custom relative z-10 text-center">
          <div className="inline-block bg-[#D9E3D3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            PANDUAN LENGKAP
          </div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
            Cara Jual Minyak Jelantah di Jakarta - Mudah, Cepat & Menguntungkan
          </h1>
          <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Bingung mau jual minyak jelantah kemana? Khawatir ditipu atau harga tidak sesuai? Tenang! Di JelantahGo, kami membuat proses cara jual minyak jelantah menjadi sangat mudah, transparan, dan menguntungkan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/6285183033995?text=Halo%20JelantahGo,%20saya%20mau%20jual%20minyak%20jelantah"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Hubungi via WhatsApp
            </a>
            <Link href="/pricing" className="btn-secondary inline-flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              Lihat Harga Terbaru
            </Link>
          </div>
          <p className="text-white/80 mt-6 text-sm">
            ⚡ Waktu proses: Maksimal 1-2 hari dari order hingga uang masuk rekening Anda!
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="card-premium">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#0F3D2E] mb-4">
              Cara Jual Minyak Jelantah yang Benar & Menguntungkan
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bingung mau jual minyak jelantah kemana? Khawatir ditipu atau harga tidak sesuai? Tenang! Di JelantahGo, kami membuat proses cara jual minyak jelantah menjadi sangat mudah, transparan, dan menguntungkan.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Sebagai pengepul minyak jelantah terpercaya di Jakarta sejak 2020, kami telah melayani 30+ mitra dengan sistem yang fair dan profesional. Dari ibu rumah tangga dengan 5 liter hingga restoran dengan ratusan liter, semua kami layani dengan standar yang sama.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Langkah Section */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              🚀 Cara Jual Minyak Jelantah: 4 Langkah Mudah
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ikuti panduan sederhana ini untuk mengubah jelantah Anda menjadi uang tunai
            </p>
          </div>

          <div className="space-y-12 max-w-5xl mx-auto">
            {/* Langkah 1 */}
            <div className="card-premium">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#0F3D2E] text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#0F3D2E] mb-4">Langkah 1: Hubungi Kami</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[#0F3D2E] mb-2">Cara menghubungi:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        <a href="https://wa.me/6285183033995" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-[#0F3D2E]">
                          <MessageCircle className="w-5 h-5" />
                          <span>WhatsApp: +62 851-8303-3995</span>
                        </a>
                        <a href="tel:+6285183033995" className="flex items-center gap-2 text-gray-700 hover:text-[#0F3D2E]">
                          <Phone className="w-5 h-5" />
                          <span>Telepon: 0851-8303-3995</span>
                        </a>
                        <a href="mailto:info.jelantahgo@gmail.com" className="flex items-center gap-2 text-gray-700 hover:text-[#0F3D2E]">
                          <Mail className="w-5 h-5" />
                          <span>Email: info.jelantahgo@gmail.com</span>
                        </a>
                        <Link href="/contact" className="flex items-center gap-2 text-gray-700 hover:text-[#0F3D2E]">
                          <ExternalLink className="w-5 h-5" />
                          <span>Website: isi form kontak</span>
                        </Link>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0F3D2E] mb-2">Informasi yang perlu Anda siapkan:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Estimasi volume minyak jelantah (berapa liter/kg)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Lokasi Anda (area Jakarta mana)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Jenis minyak (dari rumah tangga, restoran, atau industri)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Jadwal yang diinginkan</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-[#E8F0E3] p-4 rounded-card">
                      <p className="text-sm text-gray-700 mb-2"><strong>Contoh pesan WhatsApp:</strong></p>
                      <p className="text-sm text-gray-600 italic">
                        "Halo JelantahGo, saya mau jual minyak jelantah sekitar 30 liter dari restoran di Jakarta Selatan. Bisa dijemput kapan ya?"
                      </p>
                    </div>
                    <p className="text-sm text-gray-600">
                      ⏱️ <strong>Response time:</strong> Kami balas dalam 5-30 menit di jam kerja (Senin-Sabtu, 08.00-17.00 WIB)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Langkah 2 */}
            <div className="card-premium">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#0F3D2E] text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#0F3D2E] mb-4">Langkah 2: Konfirmasi Harga & Jadwal</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[#0F3D2E] mb-2">Setelah Anda menghubungi kami, tim akan:</h4>
                      <div className="space-y-3">
                        <div>
                          <p className="font-semibold text-gray-800 mb-1">1. Konfirmasi Harga</p>
                          <ul className="text-gray-700 text-sm space-y-1 ml-4">
                            <li>• Kami berikan harga terbaru per liter (update setiap minggu)</li>
                            <li>• Harga bervariasi Rp 6.500 - Rp 7.500/liter tergantung kualitas & volume</li>
                            <li>• Tidak ada biaya tersembunyi atau potongan tidak jelas</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800 mb-1">2. Cek Volume & Kualitas</p>
                          <ul className="text-gray-700 text-sm space-y-1 ml-4">
                            <li>• Estimasi berat/volume minyak jelantah Anda</li>
                            <li>• Pastikan tidak tercampur air berlebihan</li>
                            <li>• Tidak ada sampah padat (sisa gorengan, tulang, dll)</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800 mb-1">3. Tentukan Metode</p>
                          <div className="bg-white p-4 rounded-card border border-gray-200 space-y-2">
                            <p className="font-semibold text-[#0F3D2E]">Opsi A: Kami Jemput (GRATIS untuk ≥40 liter)</p>
                            <p className="text-sm text-gray-600">Cocok untuk: Restoran, warung, volume besar. Kami datang ke lokasi Anda dengan timbangan digital. Bayar langsung di tempat.</p>
                            <p className="font-semibold text-[#0F3D2E] mt-3">Opsi B: Antar ke Kantor (Semua volume)</p>
                            <p className="text-sm text-gray-600">Cocok untuk: Rumah tangga, volume kecil (&lt;40 liter). Alamat: Jl. Papanggo 3C No.250, Jakarta Utara. Tetap dibayar sesuai timbangan!</p>
                          </div>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800 mb-1">4. Jadwalkan Waktu</p>
                          <ul className="text-gray-700 text-sm space-y-1 ml-4">
                            <li>• Pilih hari & jam yang sesuai untuk Anda</li>
                            <li>• Untuk penjemputan: Biasanya H+0 atau H+1</li>
                            <li>• Untuk antar sendiri: Datang kapan saja di jam operasional</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                      <p className="font-semibold text-gray-800 mb-2">💡 Tips agar harga maksimal:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Pisahkan air dari minyak (diamkan dulu, air akan mengendap)</li>
                        <li>• Saring dari sampah padat</li>
                        <li>• Kumpulkan volume lebih banyak untuk nego harga lebih baik</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Langkah 3 */}
            <div className="card-premium">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#0F3D2E] text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#0F3D2E] mb-4">Langkah 3: Penjemputan atau Pengantaran</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-[#0F3D2E] mb-3 flex items-center gap-2">
                        <Truck className="w-5 h-5" />
                        🚚 Jika Kami yang Jemput
                      </h4>
                      <div className="bg-white p-4 rounded-card border border-gray-200 space-y-3">
                        <div>
                          <p className="font-semibold text-gray-800 mb-2">Prosesnya:</p>
                          <ol className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start gap-2">
                              <span className="font-bold text-[#0F3D2E]">1.</span>
                              <span><strong>Tim Tiba di Lokasi</strong> - Tim kami datang sesuai jadwal dengan kendaraan operasional. Bawa timbangan digital dan alat kelengkapan.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="font-bold text-[#0F3D2E]">2.</span>
                              <span><strong>Verifikasi Minyak Jelantah</strong> - Cek visual kualitas minyak. Pastikan sesuai dengan yang dikonfirmasi.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="font-bold text-[#0F3D2E]">3.</span>
                              <span><strong>Penimbangan Transparan</strong> - Timbang dengan timbangan digital. Anda bisa lihat langsung angka di layar. Tidak ada manipulasi atau potongan aneh.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="font-bold text-[#0F3D2E]">4.</span>
                              <span><strong>Hitung Total</strong> - Berat (kg) × Harga per liter = Total pembayaran. Kami jelaskan perhitungannya dengan detail.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="font-bold text-[#0F3D2E]">5.</span>
                              <span><strong>Pembayaran Instant</strong> - Tunai langsung di tempat, ATAU transfer instant ke rekening Anda. Anda terima nota/bukti pembayaran.</span>
                            </li>
                          </ol>
                        </div>
                        <p className="text-sm text-gray-600">
                          ⏱️ <strong>Waktu proses di lokasi:</strong> 15-30 menit
                        </p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0F3D2E] mb-3 flex items-center gap-2">
                        <Building2 className="w-5 h-5" />
                        🏢 Jika Anda Antar ke Kantor
                      </h4>
                      <div className="bg-white p-4 rounded-card border border-gray-200">
                        <p className="font-semibold text-gray-800 mb-2">Alamat Lengkap:</p>
                        <p className="text-gray-700 mb-3">
                          Jl. Papanggo 3C No.250, Papanggo<br />
                          Kec. Tanjung Priok, Jakarta Utara 14340
                        </p>
                        <p className="font-semibold text-gray-800 mb-2">Prosesnya:</p>
                        <ol className="space-y-1 text-sm text-gray-700">
                          <li>1. Datang ke kantor di jam operasional</li>
                          <li>2. Tim kami sambut dan bantu bongkar</li>
                          <li>3. Penimbangan dengan timbangan digital</li>
                          <li>4. Pembayaran tunai/transfer langsung</li>
                          <li>5. Anda pulang dengan uang di tangan!</li>
                        </ol>
                        <p className="text-sm text-gray-600 mt-3">
                          🅿️ <strong>Parkir:</strong> Ada area parkir di depan kantor<br />
                          🚗 <strong>Akses:</strong> Mudah dijangkau dari seluruh Jakarta
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Langkah 4 */}
            <div className="card-premium">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#0F3D2E] text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#0F3D2E] mb-4">Langkah 4: Terima Pembayaran & Selesai!</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[#0F3D2E] mb-3">Metode Pembayaran:</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-card border border-gray-200">
                          <div className="flex items-center gap-2 mb-2">
                            <Wallet className="w-5 h-5 text-green-600" />
                            <span className="font-semibold text-gray-800">💵 Tunai</span>
                          </div>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Langsung cash di tempat</li>
                            <li>• Tidak perlu menunggu</li>
                            <li>• Aman dan legal</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-card border border-gray-200">
                          <div className="flex items-center gap-2 mb-2">
                            <DollarSign className="w-5 h-5 text-blue-600" />
                            <span className="font-semibold text-gray-800">🏦 Transfer Bank</span>
                          </div>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Transfer instant setelah penimbangan</li>
                            <li>• Ke bank mana saja (BCA, Mandiri, BRI, BNI, dll)</li>
                            <li>• Biaya transfer gratis (kami yang tanggung)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0F3D2E] mb-2">Dokumen yang Anda Terima:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>✅ Nota/invoice resmi</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>✅ Bukti transfer (jika via bank)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>✅ Nomor referensi transaksi</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                      <p className="font-semibold text-gray-800 mb-2">Untuk Korporat/Restoran:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Faktur pajak (jika diperlukan)</li>
                        <li>• Laporan bulanan</li>
                        <li>• Sertifikat pengepulan untuk CSR</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Syarat & Ketentuan */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              📋 Syarat & Ketentuan Jual Minyak Jelantah
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Minyak yang Diterima */}
            <div className="card-premium">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                ✅ Minyak yang Kami Terima
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Jenis Minyak:</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <Home className="w-5 h-5 text-[#0F3D2E]" />
                      <span className="text-gray-700">🏠 Minyak goreng bekas rumah tangga</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <UtensilsCrossed className="w-5 h-5 text-[#0F3D2E]" />
                      <span className="text-gray-700">🍽️ Minyak jelantah restoran/warung</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-[#0F3D2E]" />
                      <span className="text-gray-700">🏨 Minyak bekas hotel/catering</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Factory className="w-5 h-5 text-[#0F3D2E]" />
                      <span className="text-gray-700">🏭 Minyak jelantah industri F&B</span>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Dari Semua Jenis Masakan:</p>
                  <p className="text-gray-700 text-sm">
                    Gorengan (pisang goreng, tahu, tempe, dll), Ayam goreng/geprek, Seafood (ikan, udang, cumi), Nasi goreng, Kentang goreng, Dan semua jenis gorengan lainnya
                  </p>
                </div>
              </div>
            </div>

            {/* Kondisi yang Harus Dipenuhi */}
            <div className="card-premium">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                ✅ Kondisi yang Harus Dipenuhi
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Tidak Tercampur Air Berlebihan</p>
                  <p className="text-gray-700 text-sm mb-2">Sedikit air masih OK (wajar dalam proses penggorengan). Air berlebihan akan mengurangi harga.</p>
                  <p className="text-gray-600 text-sm italic">💡 Tips: Diamkan dulu, air akan mengendap di bawah</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Tidak Ada Sampah Padat</p>
                  <p className="text-gray-700 text-sm">Saring dari sisa gorengan. Tidak ada tulang, plastik, atau benda asing. Bersih dari endapan besar.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Masih Dalam Kondisi Cair</p>
                  <p className="text-gray-700 text-sm">Tidak mengeras atau membeku. Jika mengeras, bisa dipanaskan sedikit. Tidak berbau busuk ekstrem.</p>
                </div>
              </div>
            </div>

            {/* Volume Minimum */}
            <div className="card-premium">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">✅ Volume Minimum</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Untuk Penjemputan GRATIS: Minimal 40 liter</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Untuk Antar Sendiri: Mulai dari 5 liter (tetap dibayar!)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Volume Besar: Tidak ada batas maksimal</span>
                </li>
              </ul>
            </div>

            {/* Yang TIDAK Diterima */}
            <div className="card-premium border-red-200 bg-red-50">
              <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                <XCircle className="w-6 h-6 text-red-600" />
                ❌ Yang TIDAK Kami Terima
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>❌ Oli bekas kendaraan</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>❌ Minyak pelumas/mesin</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>❌ Campuran bahan kimia berbahaya</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>❌ Minyak yang sudah membusuk/berbau sangat menyengat</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>❌ Campuran sampah organik dalam jumlah besar</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cara Menghitung Harga */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              💰 Cara Menghitung Harga Minyak Jelantah Anda
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="card-premium">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Rumus Sederhana</h3>
              <div className="bg-[#0F3D2E] text-white p-6 rounded-card text-center">
                <p className="text-2xl font-bold mb-2">Berat Minyak (kg) × Harga per Liter = Total Pembayaran</p>
              </div>
            </div>

            <div className="card-premium">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Contoh Perhitungan:</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-card border border-gray-200">
                  <p className="font-semibold text-gray-800 mb-2">Kasus 1: Rumah Tangga</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Volume: 10 liter</li>
                    <li>• Harga: Rp 6.500/liter</li>
                    <li>• <strong>Total: 10 × Rp 6.500 = Rp 65.000</strong></li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-card border border-gray-200">
                  <p className="font-semibold text-gray-800 mb-2">Kasus 2: Warung Makan</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Volume: 50 liter</li>
                    <li>• Harga: Rp 6.500/liter (lebih tinggi karena volume besar)</li>
                    <li>• <strong>Total: 50 × Rp 6.500 = Rp 325.000</strong></li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-card border border-gray-200">
                  <p className="font-semibold text-gray-800 mb-2">Kasus 3: Restoran (Kontrak Rutin)</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Volume: 200 liter/bulan</li>
                    <li>• Harga: Rp 7.500/liter (harga kontrak lebih baik)</li>
                    <li>• <strong>Total: 200 × Rp 7.500 = Rp 1.500.000/bulan</strong></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card-premium">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Faktor yang Mempengaruhi Harga</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-50 p-4 rounded-card border border-green-200">
                  <p className="font-semibold text-green-800 mb-2">Harga Lebih Tinggi jika:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>✓ Volume besar (≥100 liter)</li>
                    <li>✓ Kualitas bagus (tidak banyak air)</li>
                    <li>✓ Kontrak rutin (mingguan/bulanan)</li>
                    <li>✓ Bersih dari sampah</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-card border border-yellow-200">
                  <p className="font-semibold text-yellow-800 mb-2">Harga Standar jika:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Volume sedang (40-99 liter)</li>
                    <li>• Kualitas normal</li>
                    <li>• Transaksi sekali-kali</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-card border border-red-200">
                  <p className="font-semibold text-red-800 mb-2">Harga Lebih Rendah jika:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Volume sangat kecil (&lt;10 liter)</li>
                    <li>• Banyak tercampur air</li>
                    <li>• Banyak endapan/sampah</li>
                  </ul>
                </div>
              </div>
              <p className="text-center mt-4 text-gray-700">
                Untuk harga update terbaru, <a href="https://wa.me/6285183033995" target="_blank" rel="noopener noreferrer" className="text-[#0F3D2E] font-semibold hover:underline">hubungi WhatsApp kami →</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Harga Maksimal */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              🎯 Tips Cara Jual Minyak Jelantah dengan Harga Maksimal
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              {
                title: '1. Kumpulkan Volume Lebih Banyak',
                icon: <TrendingUp className="w-6 h-6" />,
                content: 'Semakin banyak volume, semakin baik harganya! Strategi untuk rumah tangga: kumpulkan minyak jelantah dari tetangga, titip jerigen di warung RT untuk dikumpulkan warga, koordinasi dengan PKK atau arisan ibu-ibu.',
                benefit: 'Potensi penghasilan: Rp 200.000 - Rp 500.000/bulan jika jadi agen pengumpul lokal!',
              },
              {
                title: '2. Pisahkan Air dari Minyak',
                icon: <Scale className="w-6 h-6" />,
                content: 'Tuang minyak jelantah ke wadah besar, diamkan 6-12 jam. Air akan mengendap di bawah. Tuang pelan-pelan bagian atas (minyak) ke wadah lain. Buang endapan air di bawah.',
                benefit: 'Hasil: Harga bisa naik Rp 500 - Rp 1.000/liter!',
              },
              {
                title: '3. Saring dari Sampah Padat',
                icon: <CheckCircle className="w-6 h-6" />,
                content: 'Gunakan saringan atau kain untuk: saring sisa gorengan, buang endapan besar, buat minyak lebih bersih.',
                benefit: 'Waktu: 5-10 menit untuk 20 liter. Manfaat: Harga lebih baik + proses lebih cepat',
              },
              {
                title: '4. Simpan dengan Benar',
                icon: <Home className="w-6 h-6" />,
                content: 'Wadah terbaik: jerigen plastik tertutup, botol air mineral bekas (untuk volume kecil), ember dengan tutup. Tempat penyimpanan: tempat sejuk (tidak terkena matahari langsung), tertutup rapat (cegah bau menyebar), jauh dari jangkauan anak-anak.',
                benefit: 'Durasi: Bisa disimpan 1-3 bulan',
              },
              {
                title: '5. Buat Kontrak Rutin (Untuk Usaha)',
                icon: <Users className="w-6 h-6" />,
                content: 'Jika Anda punya restoran/warung: jadwalkan pengambilan rutin (mingguan/bulanan), dapatkan harga kontrak yang lebih baik, tidak perlu repot mengatur jadwal setiap kali.',
                benefit: 'Keuntungan kontrak: Harga lebih stabil, prioritas penjemputan, dokumentasi lengkap untuk pembukuan',
              },
            ].map((tip, index) => (
              <div key={index} className="card-premium">
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#0F3D2E] text-white rounded-full flex items-center justify-center">
                    {tip.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#0F3D2E]">{tip.title}</h3>
                </div>
                <p className="text-gray-700 text-sm mb-3">{tip.content}</p>
                <div className="bg-[#E8F0E3] p-3 rounded text-sm">
                  <p className="text-[#0F3D2E] font-semibold">{tip.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Untuk Berbagai Jenis Usaha */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              🏪 Cara Jual Minyak Jelantah untuk Berbagai Jenis Usaha
            </h2>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Untuk Rumah Tangga',
                icon: <Home className="w-8 h-8" />,
                strategy: 'Kumpulkan di jerigen selama 1-2 bulan. Target: 40 liter untuk penjemputan gratis. Atau kumpulkan dari tetangga untuk volume lebih besar.',
                volume: '1 rumah: Rp 32.500 - Rp 65.000/bulan\nJadi agen RT (10 rumah): Rp 390.000 - Rp 780.000/bulan',
                optimal: 'Antar sendiri jika <40L atau tunggu sampai cukup 40L untuk dijemput gratis',
              },
              {
                title: 'Untuk Warung/Restoran Kecil',
                icon: <UtensilsCrossed className="w-8 h-8" />,
                strategy: 'Sediakan wadah khusus untuk minyak bekas. Pisahkan dari sampah lain. Jadwalkan penjemputan mingguan.',
                volume: 'Warung nasi: 20-50 liter/bulan\nWarung gorengan: 30-80 liter/bulan\nResto padang: 50-150 liter/bulan\n\nEstimasi pendapatan: Rp 130.000 - Rp 1.080.000/bulan',
                optimal: 'Kontrak rutin bulanan dengan harga tetap',
              },
              {
                title: 'Untuk Hotel/Catering Besar',
                icon: <Building2 className="w-8 h-8" />,
                strategy: 'Tangki penyimpanan khusus di area dapur. Tim kami sediakan wadah (untuk volume besar). Penjemputan terjadwal (2x sebulan atau lebih).',
                volume: 'Hotel bintang 3-4: 200-500 liter/bulan\nCatering industri: 300-800 liter/bulan\n\nEstimasi pendapatan: Rp 1.500.000 - Rp 6.000.000/bulan',
                optimal: 'Kontrak B2B dengan dokumentasi lengkap untuk CSR reporting',
              },
              {
                title: 'Untuk Industri F&B',
                icon: <Factory className="w-8 h-8" />,
                strategy: 'Tangki penyimpanan on-site. Truk khusus untuk volume ratusan liter. Kontrak jangka panjang (6-12 bulan).',
                volume: '500 - 2.000 liter/bulan\n\nEstimasi pendapatan: Rp 3.750.000 - Rp 15.000.000/bulan',
                optimal: 'Partnership dengan terms khusus + reporting berkala',
              },
            ].map((usaha, index) => (
              <div key={index} className="card-premium">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0F3D2E] text-white rounded-full flex items-center justify-center">
                    {usaha.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0F3D2E]">{usaha.title}</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">Strategi:</p>
                    <p className="text-gray-700 text-sm">{usaha.strategy}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">Estimasi volume & pendapatan:</p>
                    <p className="text-gray-700 text-sm whitespace-pre-line">{usaha.volume}</p>
                  </div>
                  <div className="bg-[#E8F0E3] p-3 rounded">
                    <p className="text-sm text-[#0F3D2E] font-semibold">Cara kerja sama optimal:</p>
                    <p className="text-sm text-gray-700">{usaha.optimal}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              FAQ
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              ❓ Pertanyaan yang Sering Ditanyakan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Jawaban untuk pertanyaan umum tentang cara jual minyak jelantah
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqsData.map((faq, index) => (
              <div key={index} className="card-premium">
                <h3 className="font-bold text-[#0F3D2E] mb-2 text-lg flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed ml-7">{faq.answer}</p>
              </div>
            ))}
            <div className="text-center mt-8">
              <Link href="/syarat-ketentuan" className="text-[#0F3D2E] font-semibold hover:underline inline-flex items-center gap-2">
                Punya pertanyaan lain? Lihat FAQ lengkap
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-bg-dots">
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
            🎯 SIAP JUAL MINYAK JELANTAH ANDA?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Proses cepat, harga fair, bayar langsung!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a
              href="https://wa.me/6285183033995?text=Halo%20JelantahGo,%20saya%20mau%20jual%20minyak%20jelantah"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#0F3D2E] px-8 py-4 rounded-card font-bold hover:bg-[#D9E3D3] transition-all shadow-soft-lg hover:shadow-soft-xl inline-flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              📱 Chat WhatsApp
            </a>
            <a
              href="tel:+6285183033995"
              className="bg-[#065f46] text-white px-8 py-4 rounded-card font-bold hover:bg-[#047857] transition-all inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              📞 Telepon Sekarang
            </a>
          </div>
          <p className="text-white/80 text-sm">
            Senin - Sabtu | 08.00 - 17.00 WIB
          </p>
        </div>
      </section>

      {/* Mengapa Jual Minyak Jelantah Penting */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              🌱 Mengapa Jual Minyak Jelantah Penting?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dengan cara jual minyak jelantah yang benar ke pengepul terpercaya seperti JelantahGo, Anda tidak hanya mendapat uang, tapi juga:
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Mencegah pencemaran lingkungan',
                icon: <Leaf className="w-6 h-6" />,
                items: [
                  '1 liter minyak jelantah bisa mencemari 1.000 liter air',
                  'Menyumbat saluran air dan drainase',
                  'Merusak ekosistem air',
                ],
              },
              {
                title: 'Mendukung energi terbarukan',
                icon: <TrendingUp className="w-6 h-6" />,
                items: [
                  'Minyak jelantah diolah jadi biodiesel',
                  'Mengurangi ketergantungan BBM fosil',
                  'Emisi CO2 lebih rendah 85% vs solar',
                ],
              },
              {
                title: 'Ekonomi sirkular',
                icon: <Users className="w-6 h-6" />,
                items: [
                  'Limbah jadi sumber daya',
                  'Menciptakan lapangan kerja',
                  'Model bisnis berkelanjutan',
                ],
              },
              {
                title: 'Penghasilan tambahan',
                icon: <DollarSign className="w-6 h-6" />,
                items: [
                  'Uang dari "sampah" dapur',
                  'Bisa jadi bisnis sampingan',
                  'Income pasif untuk usaha kuliner',
                ],
              },
            ].map((benefit, index) => (
              <div key={index} className="card-premium">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0F3D2E] text-white rounded-full flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#0F3D2E]">✅ {benefit.title}</h3>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  {benefit.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#0F3D2E] font-bold mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 font-semibold">
              Setiap tetes minyak jelantah Anda bernilai. Mari kelola dengan bijak!
            </p>
          </div>
        </div>
      </section>

      {/* Lokasi & Kontak */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              📍 Lokasi & Kontak
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="card-premium">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-4 flex items-center gap-2">
                <MapPin className="w-6 h-6" />
                Kantor & Gudang
              </h3>
              <p className="text-gray-700 mb-2">
                Jl. Papanggo 3C No.250, Papanggo<br />
                Kec. Tanjung Priok, Jakarta Utara 14340
              </p>
              <a
                href="https://maps.google.com/?q=Jl.+Papanggo+3C+No.250,+Jakarta+Utara"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0F3D2E] font-semibold hover:underline inline-flex items-center gap-2 text-sm"
              >
                Lihat di Google Maps
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="card-premium">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-4 flex items-center gap-2">
                <Phone className="w-6 h-6" />
                Kontak
              </h3>
              <div className="space-y-3">
                <a href="https://wa.me/6285183033995" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-[#0F3D2E]">
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp: +62 851-8303-3995</span>
                </a>
                <a href="mailto:info.jelantahgo@gmail.com" className="flex items-center gap-2 text-gray-700 hover:text-[#0F3D2E]">
                  <Mail className="w-5 h-5" />
                  <span>Email: info.jelantahgo@gmail.com</span>
                </a>
                <Link href="/" className="flex items-center gap-2 text-gray-700 hover:text-[#0F3D2E]">
                  <ExternalLink className="w-5 h-5" />
                  <span>Website: www.jelantahgo.com</span>
                </Link>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-1"><strong>Jam Operasional:</strong></p>
                <p className="text-sm text-gray-600">Senin - Sabtu: 08.00 - 17.00 WIB</p>
                <p className="text-sm text-gray-600">Minggu: Libur</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Halaman Terkait */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#0F3D2E] mb-4">
              🔗 Halaman Terkait
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Link href="/area-layanan" className="card-premium hover-lift text-center group">
              <MapPin className="w-8 h-8 text-[#0F3D2E] mx-auto mb-3 group-hover:scale-110 transition-smooth" />
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-2">Area Layanan</h3>
              <p className="text-sm text-gray-600">Cek apakah lokasi Anda terlayani</p>
            </Link>
            <Link href="/pricing" className="card-premium hover-lift text-center group">
              <DollarSign className="w-8 h-8 text-[#0F3D2E] mx-auto mb-3 group-hover:scale-110 transition-smooth" />
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-2">Harga Minyak Jelantah</h3>
              <p className="text-sm text-gray-600">Lihat harga terbaru per liter</p>
            </Link>
            <Link href="/mitra" className="card-premium hover-lift text-center group">
              <Users className="w-8 h-8 text-[#0F3D2E] mx-auto mb-3 group-hover:scale-110 transition-smooth" />
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-2">Mitra Kami</h3>
              <p className="text-sm text-gray-600">Info kerjasama untuk bisnis</p>
            </Link>
            <Link href="/about" className="card-premium hover-lift text-center group">
              <Star className="w-8 h-8 text-[#0F3D2E] mx-auto mb-3 group-hover:scale-110 transition-smooth" />
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-2">Tentang JelantahGo</h3>
              <p className="text-sm text-gray-600">Kenali lebih dekat tentang kami</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

