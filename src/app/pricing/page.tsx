import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  DollarSign, MessageCircle, Phone, Mail, MapPin, CheckCircle,
  AlertCircle, TrendingUp, Calculator as CalculatorIcon, HelpCircle, ExternalLink,
  ArrowRight, Scale, Users, Calendar, Leaf, Home, UtensilsCrossed,
  Building2, Factory, Wallet, Eye, Shield
} from 'lucide-react'
import Calculator from '@/components/Calculator'
import FAQSchema from '@/components/FAQSchema'

export const metadata: Metadata = {
  title: 'Harga Minyak Jelantah Jakarta 2025 | JelantahGO',
  description: 'Update harga minyak jelantah terbaru di Jakarta 2025: Rp 6.500-7.500/liter. Bayar tunai/transfer langsung, penjemputan gratis ≥40L. Cek harga sekarang!',
  alternates: {
    canonical: 'https://jelantahgo.com/pricing',
  },
  openGraph: {
    title: 'Harga Minyak Jelantah Jakarta 2025 | JelantahGO',
    description: 'Update harga minyak jelantah terbaru di Jakarta 2025: Rp 6.500-7.500/liter. Bayar tunai/transfer langsung, penjemputan gratis ≥40L.',
    url: 'https://jelantahgo.com/pricing',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/v1761171104/jelantah-go_3_h1mz5u.webp',
        width: 1200,
        height: 630,
        alt: 'Harga Minyak Jelantah Jakarta 2025',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harga Minyak Jelantah Jakarta 2025 | JelantahGO',
    description: 'Update harga minyak jelantah terbaru di Jakarta 2025: Rp 6.500-7.500/liter. Bayar tunai/transfer langsung, penjemputan gratis ≥40L.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/v1761171104/jelantah-go_3_h1mz5u.webp'],
  },
}

export default function PricingPage() {
  const faqs = [
    {
      question: 'Berapa harga minyak jelantah hari ini?',
      answer: 'Harga terbaru berkisar Rp 6.500 - Rp 7.500/liter tergantung kualitas dan volume. Untuk harga exact hari ini, hubungi WhatsApp kami: +62 851-8303-3995',
    },
    {
      question: 'Apakah harga bisa nego?',
      answer: 'Volume <40L: Harga fixed. Volume 40-99L: Bisa nego sedikit. Volume ≥100L: Bisa nego lebih baik. Kontrak rutin: Nego harga kontrak jangka panjang.',
    },
    {
      question: 'Kenapa harga minyak jelantah berubah-ubah?',
      answer: 'Harga minyak jelantah mengikuti harga pasar biodiesel dan CPO (Crude Palm Oil) yang fluktuatif. Kami update harga setiap minggu untuk memberikan harga paling fair dan kompetitif.',
    },
    {
      question: 'Apakah ada biaya tambahan selain harga per liter?',
      answer: 'TIDAK ADA! Penjemputan ≥40L: GRATIS. Tidak ada biaya admin. Tidak ada potongan tidak jelas. Yang di timbangan = yang Anda terima.',
    },
    {
      question: 'Bagaimana cara dapat harga tertinggi?',
      answer: 'Tips dapat harga minyak jelantah terbaik: Pisahkan air dari minyak, saring dari sampah padat, kumpulkan volume ≥50 liter, buat kontrak rutin (mingguan/bulanan), jaga kualitas penyimpanan.',
    },
    {
      question: 'Berapa harga untuk volume sangat besar (1000+ liter)?',
      answer: 'Untuk volume industri (1000+ liter), kami berikan harga khusus dengan sistem partnership. Hubungi kami untuk diskusi lebih lanjut dan penawaran terbaik.',
    },
    {
      question: 'Apakah harga berbeda untuk setiap wilayah Jakarta?',
      answer: 'Tidak. Harga sama untuk seluruh Jakarta (Utara, Selatan, Barat, Timur, Pusat). Yang berbeda hanya jadwal penjemputan yang disesuaikan dengan rute operasional kami.',
    },
    {
      question: 'Bagaimana cara tahu harga update terbaru?',
      answer: '3 cara mudah: Cek halaman ini (update setiap minggu), WhatsApp kami: +62 851-8303-3995, atau follow media sosial kami untuk update harga.',
    },
    {
      question: 'Apakah harga termasuk pajak?',
      answer: 'Untuk individu dan UMKM: harga sudah final, tidak ada pajak tambahan. Untuk korporat yang butuh faktur pajak: bisa diatur dengan perhitungan terpisah sesuai regulasi.',
    },
  ]

  return (
    <>
      <FAQSchema faqs={faqs} />
      {/* Hero Section */}
      <section className="hero-bg-dots py-20 lg:py-28">
        <div className="container-custom relative z-10 text-center">
          <div className="inline-block bg-[#D9E3D3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            💰 HARGA TERBARU 2025
          </div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
            Harga Minyak Jelantah di Jakarta - Update Terbaru 2025
          </h1>
          <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Update: November 2025. Harga dapat berubah sewaktu-waktu mengikuti harga pasar biodiesel dan CPO (Crude Palm Oil).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6285183033995?text=Halo%20JelantahGo,%20saya%20mau%20tanya%20harga%20terbaru"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#0F3D2E] hover:bg-[#D9E3D3] px-8 py-4 rounded-card font-bold text-lg inline-flex items-center justify-center gap-2 transition-smooth shadow-soft-lg hover:shadow-soft-xl"
            >
              <MessageCircle className="w-5 h-5" />
              Tanya Harga via WhatsApp
            </a>
            <Link
              href="#kalkulator"
              className="bg-transparent border-2 border-white/30 hover:bg-white/10 hover:border-white text-white px-8 py-4 rounded-card font-bold text-lg inline-flex items-center justify-center gap-2 transition-smooth"
            >
              <CalculatorIcon className="w-5 h-5" />
              Hitung Penghasilan
            </Link>
          </div>
          <p className="text-white/80 mt-6 text-sm">
            📞 Untuk harga exact hari ini: WhatsApp +62 851-8303-3995
          </p>
        </div>
      </section>

      {/* Daftar Harga */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              💰 DAFTAR HARGA
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Daftar Harga Minyak Jelantah Terbaru
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Berikut adalah harga minyak jelantah yang kami tawarkan di Jakarta. Harga dapat berubah sewaktu-waktu mengikuti harga pasar biodiesel dan CPO (Crude Palm Oil).
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-card-lg shadow-layered overflow-hidden">
                <thead>
                  <tr className="bg-[#0F3D2E] text-white">
                    <th className="p-4 text-left">Volume</th>
                    <th className="p-4 text-left">Harga per Liter</th>
                    <th className="p-4 text-left">Keterangan</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      volume: '5-39 liter',
                      harga: 'Rp 6.500',
                      keterangan: 'Untuk rumah tangga, antar sendiri ke kantor',
                    },
                    {
                      volume: '40-99 liter',
                      harga: 'Rp 6.500',
                      keterangan: 'Penjemputan GRATIS, cocok untuk warung',
                    },
                    {
                      volume: '100-199 liter',
                      harga: 'Rp 7.000',
                      keterangan: 'Harga nego, cocok untuk restoran kecil',
                    },
                    {
                      volume: '≥200 liter',
                      harga: 'Rp 7.500',
                      keterangan: 'Harga kontrak, untuk restoran menengah',
                    },
                    {
                      volume: 'Industri (1000L+)',
                      harga: 'Hubungi Kami',
                      keterangan: 'Harga khusus B2B & Partnership',
                    },
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="p-4 font-semibold text-[#0F3D2E]">{row.volume}</td>
                      <td className="p-4 font-bold text-[#0F3D2E]">{row.harga}</td>
                      <td className="p-4 text-gray-700">{row.keterangan}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-gray-600 mt-6">
              📞 Untuk harga exact hari ini: <a href="https://wa.me/6285183033995" target="_blank" rel="noopener noreferrer" className="text-[#0F3D2E] font-semibold hover:underline">WhatsApp +62 851-8303-3995</a>
            </p>
          </div>
        </div>
      </section>

      {/* Faktor yang Mempengaruhi Harga */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              🎯 Faktor yang Mempengaruhi Harga Minyak Jelantah
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Harga minyak jelantah yang kami tawarkan ditentukan oleh beberapa faktor:
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {/* 1. Kualitas Minyak */}
            <div className="card-premium">
              <h3 className="text-2xl font-bold text-[#0F3D2E] mb-6">1. Kualitas Minyak</h3>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-card border-l-4 border-green-500">
                  <h4 className="font-semibold text-gray-800 mb-2">Harga Maksimal (Rp 7.500/liter)</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Minyak bersih, tidak banyak air</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Tidak ada endapan berlebihan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Warna kuning kecoklatan (tidak hitam pekat)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Tidak berbau tengik ekstrem</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Sudah disaring dari sampah padat</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-card border-l-4 border-yellow-500">
                  <h4 className="font-semibold text-gray-800 mb-2">Harga Standar (Rp 7.000/liter)</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span>Sedikit tercampur air (masih wajar)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span>Ada endapan normal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span>Warna gelap tapi tidak hitam</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span>Bau normal minyak bekas</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-card border-l-4 border-red-500">
                  <h4 className="font-semibold text-gray-800 mb-2">Harga Minimal (Rp 6.500/liter)</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">❌</span>
                      <span>Banyak tercampur air</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">❌</span>
                      <span>Endapan sangat banyak</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">❌</span>
                      <span>Warna sangat gelap/hitam</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">❌</span>
                      <span>Bau sangat menyengat</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">❌</span>
                      <span>Banyak kotoran/sampah</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2. Volume/Kuantitas */}
            <div className="card-premium">
              <h3 className="text-2xl font-bold text-[#0F3D2E] mb-4">2. Volume/Kuantitas</h3>
              <p className="text-gray-700 mb-4">Semakin besar volume, semakin tinggi harga per liternya:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#0F3D2E]">•</span>
                  <span><strong>5-39 liter:</strong> Harga dasar (biaya operasional lebih tinggi)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#0F3D2E]">•</span>
                  <span><strong>40-99 liter:</strong> Harga menengah (sudah ekonomis untuk dijemput)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#0F3D2E]">•</span>
                  <span><strong>100+ liter:</strong> Harga tinggi (volume besar = efisiensi tinggi)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#0F3D2E]">•</span>
                  <span><strong>500+ liter:</strong> Harga premium (bisa nego harga kontrak)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#0F3D2E]">•</span>
                  <span><strong>1000+ liter:</strong> Harga special (partnership jangka panjang)</span>
                </li>
              </ul>
            </div>

            {/* 3. Frekuensi Transaksi */}
            <div className="card-premium">
              <h3 className="text-2xl font-bold text-[#0F3D2E] mb-4">3. Frekuensi Transaksi</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Transaksi Sekali-Sekali</p>
                  <ul className="text-gray-700 text-sm space-y-1 ml-4">
                    <li>• Harga standar sesuai tabel</li>
                    <li>• Tidak ada commitment</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Kontrak Mingguan</p>
                  <ul className="text-gray-700 text-sm space-y-1 ml-4">
                    <li>• Harga naik Rp 200-300/liter</li>
                    <li>• Jadwal tetap setiap minggu</li>
                    <li>• Prioritas penjemputan</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Kontrak Bulanan</p>
                  <ul className="text-gray-700 text-sm space-y-1 ml-4">
                    <li>• Harga naik Rp 300-500/liter</li>
                    <li>• Harga locked selama kontrak</li>
                    <li>• Dokumentasi lengkap untuk pembukuan</li>
                    <li>• Support untuk CSR reporting</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 4. Lokasi Penjemputan */}
            <div className="card-premium">
              <h3 className="text-2xl font-bold text-[#0F3D2E] mb-4">4. Lokasi Penjemputan</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#0F3D2E]">•</span>
                  <span><strong>Jakarta Utara (Base Area):</strong> Harga standar, Response tercepat</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#0F3D2E]">•</span>
                  <span><strong>Jakarta Pusat, Barat, Selatan, Timur:</strong> Harga standar, Jadwal disesuaikan rute</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#0F3D2E]">•</span>
                  <span><strong>Area Sulit Dijangkau:</strong> Bisa nego harga untuk kompensasi jarak, Atau pilih opsi antar sendiri ke kantor</span>
                </li>
              </ul>
            </div>

            {/* 5. Harga Pasar Biodiesel & CPO */}
            <div className="card-premium">
              <h3 className="text-2xl font-bold text-[#0F3D2E] mb-4">5. Harga Pasar Biodiesel & CPO</h3>
              <p className="text-gray-700 mb-4">Harga minyak jelantah mengikuti fluktuasi pasar:</p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start gap-2">
                  <TrendingUp className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>CPO naik</strong> → Harga biodiesel naik → Harga minyak jelantah naik</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="w-5 h-5 text-red-600 rotate-180 mt-0.5 flex-shrink-0" />
                  <span><strong>CPO turun</strong> → Harga biodiesel turun → Harga minyak jelantah turun</span>
                </li>
              </ul>
              <p className="text-gray-700">
                Kami update harga setiap minggu untuk mengikuti pasar terkini, sehingga Anda selalu dapat harga yang fair dan kompetitif.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cara Menghitung Harga */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              🧮 Cara Menghitung Harga Minyak Jelantah Anda
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="card-premium">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Rumus Sederhana</h3>
              <div className="bg-[#0F3D2E] text-white p-6 rounded-card text-center">
                <p className="text-2xl font-bold">Total Pembayaran = Berat/Volume (liter) × Harga per Liter</p>
              </div>
            </div>

            <div className="card-premium">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-6">Contoh Perhitungan Real</h3>
              <div className="space-y-6">
                {[
                  {
                    title: 'Contoh 1: Ibu Rumah Tangga',
                    data: [
                      'Volume: 15 liter',
                      'Kualitas: Standar (sedikit air)',
                      'Metode: Antar sendiri ke kantor',
                      'Harga: Rp 6.500/liter',
                    ],
                    calculation: '15 liter × Rp 6.500 = Rp 97.500',
                    result: 'Yang Anda Terima: Rp 97.500 tunai/transfer',
                  },
                  {
                    title: 'Contoh 2: Warung Gorengan',
                    data: [
                      'Volume: 40 liter',
                      'Kualitas: Bagus (sudah disaring)',
                      'Metode: Dijemput gratis',
                      'Harga: Rp 6.500/liter',
                    ],
                    calculation: '40 liter × Rp 6.500 = Rp 260.000',
                    result: 'Yang Anda Terima: Rp 260.000 tunai/transfer',
                  },
                  {
                    title: 'Contoh 3: Restoran Padang',
                    data: [
                      'Volume: 120 liter',
                      'Kualitas: Sangat bagus (bersih, sedikit air)',
                      'Metode: Dijemput, kontrak bulanan',
                      'Harga: Rp 7.000/liter (harga kontrak)',
                    ],
                    calculation: '120 liter × Rp 7.000 = Rp 840.000',
                    result: 'Yang Anda Terima: Rp 840.000/bulan | Penghasilan Tahunan: Rp 840.000 × 12 = Rp 10.080.000/tahun',
                  },
                  {
                    title: 'Contoh 4: Hotel Bintang 3',
                    data: [
                      'Volume: 350 liter',
                      'Kualitas: Premium (dikelola dengan baik)',
                      'Metode: Dijemput 2x/bulan, kontrak 6 bulan',
                      'Harga: Rp 7.500/liter (harga partnership)',
                    ],
                    calculation: '350 liter × Rp 7.500 = Rp 2.625.000',
                    result: 'Yang Anda Terima: Rp 2.625.000/bulan | Penghasilan Tahunan: Rp 2.625.000 × 12 = Rp 31.500.000/tahun',
                  },
                  {
                    title: 'Contoh 5: Agen Pengumpul RT',
                    data: [
                      'Skenario: Ibu RT mengumpulkan dari 15 rumah tetangga',
                      'Volume: 10 liter/bulan per rumah',
                      'Total: 15 rumah × 10 liter = 150 liter',
                      'Harga: Rp 7.000/liter (volume besar)',
                    ],
                    calculation: '150 liter × Rp 7.000 = Rp 1.050.000',
                    result: 'Margin Agen: Beli dari tetangga Rp 5.000/liter (Modal: Rp 750.000) | Jual ke JelantahGo: Rp 1.050.000 | Profit: Rp 300.000/bulan | Penghasilan Tahunan: Rp 3.600.000/tahun (Bisnis sampingan yang menguntungkan!)',
                  },
                ].map((example, index) => (
                  <div key={index} className="bg-[#F9F8F6] p-6 rounded-card border border-gray-200">
                    <h4 className="font-bold text-[#0F3D2E] mb-3">{example.title}</h4>
                    <div className="space-y-2 mb-4">
                      <p className="text-sm font-semibold text-gray-800 mb-2">Data:</p>
                      {example.data.map((item, i) => (
                        <p key={i} className="text-sm text-gray-700 ml-4">• {item}</p>
                      ))}
                    </div>
                    <div className="bg-white p-4 rounded border border-gray-300 mb-2">
                      <p className="font-semibold text-gray-800">Perhitungan:</p>
                      <p className="text-lg font-bold text-[#0F3D2E]">{example.calculation}</p>
                    </div>
                    <p className="text-sm text-gray-700">{example.result}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Mendapatkan Harga Terbaik */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              💡 Tips Mendapatkan Harga Minyak Jelantah Terbaik
            </h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {[
              {
                title: '1. Tingkatkan Kualitas Minyak',
                icon: <Scale className="w-8 h-8" />,
                tips: [
                  {
                    subTitle: 'Pisahkan Air dari Minyak',
                    description: 'Tuang minyak ke wadah besar, diamkan 6-12 jam (air akan mengendap di bawah), tuang pelan-pelan bagian atas (minyak murni), buang endapan air di bawah.',
                    impact: 'Dampak: Harga naik Rp 500 - Rp 1.000/liter! ✅',
                  },
                  {
                    subTitle: 'Saring dari Sampah Padat',
                    description: 'Gunakan saringan halus atau kain: buang sisa gorengan, hilangkan endapan besar, buat minyak lebih jernih.',
                    impact: 'Dampak: Harga naik Rp 300 - Rp 500/liter! ✅',
                  },
                ],
              },
              {
                title: '2. Kumpulkan Volume Lebih Banyak',
                icon: <TrendingUp className="w-8 h-8" />,
                tips: [
                  {
                    subTitle: 'Volume Awal → Volume Target → Kenaikan Harga',
                    description: '10 liter (Rp 6.500) → 40 liter (Rp 6.500) = Gratis Jemput | 40 liter (Rp 6.500) → 100 liter (Rp 7.000) = +Rp 500/liter | 100 liter (Rp 7.000) → 200 liter (Rp 7.500) = +Rp 500/liter',
                    impact: 'Cara Kumpulkan Volume: Kumpulkan dari tetangga RT, titip jerigen di warung RT, koordinasi dengan PKK/arisan, jadi agen pengumpul lokal',
                  },
                ],
              },
              {
                title: '3. Buat Kontrak Rutin',
                icon: <Calendar className="w-8 h-8" />,
                tips: [
                  {
                    subTitle: 'Tipe Kontrak',
                    description: 'One-time: Sekali-sekali (Harga standar) | Mingguan: 4x/bulan (+Rp 200-300/liter) | Bulanan: Rutin bulanan (+Rp 300-500/liter) | Tahunan: Kontrak 12 bulan (+Rp 500-700/liter)',
                    impact: 'Keuntungan Kontrak: Harga locked (tidak terpengaruh fluktuasi), prioritas penjemputan, tidak perlu order setiap kali, dokumentasi lengkap',
                  },
                ],
              },
              {
                title: '4. Timing yang Tepat',
                icon: <Calendar className="w-8 h-8" />,
                tips: [
                  {
                    subTitle: 'Kapan Harga Minyak Jelantah Naik?',
                    description: 'Saat harga CPO naik (biasanya akhir tahun), saat harga biodiesel naik, saat demand tinggi (musim industri)',
                    impact: 'Strategi: Pantau update harga mingguan kami, jika harga naik jual segera, jika harga turun tunda jika bisa (kumpulkan lebih banyak)',
                  },
                ],
              },
              {
                title: '5. Simpan dengan Benar',
                icon: <Home className="w-8 h-8" />,
                tips: [
                  {
                    subTitle: 'Wadah & Tempat Penyimpanan',
                    description: 'Wadah Terbaik: Jerigen plastik food grade, tertutup rapat (cegah oksidasi), bersih dari kontaminan | Tempat Penyimpanan: Sejuk, tidak terkena sinar matahari, ventilasi baik, jauh dari bahan mudah terbakar',
                    impact: 'Durasi Penyimpanan Optimal: 1-3 bulan | Dampak: Minyak tetap berkualitas = harga tetap tinggi! ✅',
                  },
                ],
              },
            ].map((tip, index) => (
              <div key={index} className="card-premium">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0F3D2E] text-white rounded-full flex items-center justify-center">
                    {tip.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#0F3D2E]">{tip.title}</h3>
                </div>
                <div className="space-y-4">
                  {tip.tips.map((subTip, i) => (
                    <div key={i}>
                      <h4 className="font-semibold text-gray-800 mb-2">{subTip.subTitle}</h4>
                      <p className="text-gray-700 text-sm mb-2">{subTip.description}</p>
                      <div className="bg-[#E8F0E3] p-3 rounded">
                        <p className="text-sm text-[#0F3D2E] font-semibold">{subTip.impact}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perbandingan Harga */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              📊 Perbandingan Harga Minyak Jelantah Jakarta
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              JelantahGo vs Pengepul Lain
            </p>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-card-lg shadow-layered overflow-hidden">
              <thead>
                <tr className="bg-[#0F3D2E] text-white">
                  <th className="p-4 text-left">Aspek</th>
                  <th className="p-4 text-left">JelantahGo</th>
                  <th className="p-4 text-left">Pengepul Konvensional</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { aspek: 'Harga', jelantahgo: 'Rp 6.500 - Rp 7.500/L', konvensional: 'Rp 4.000 - Rp 5.500/L' },
                  { aspek: 'Transparansi', jelantahgo: 'Timbangan digital, Anda lihat', konvensional: 'Sering tidak transparan' },
                  { aspek: 'Pembayaran', jelantahgo: 'Tunai/transfer instant', konvensional: 'Sering tempo/dikurangi' },
                  { aspek: 'Penjemputan', jelantahgo: 'Gratis ≥40L', konvensional: 'Kadang ada biaya' },
                  { aspek: 'Response', jelantahgo: '5-30 menit (jam kerja)', konvensional: 'Sering lambat' },
                  { aspek: 'Dokumentasi', jelantahgo: 'Nota resmi, invoice', konvensional: 'Sering tidak ada' },
                  { aspek: 'Kontrak', jelantahgo: 'Bisa kontrak jangka panjang', konvensional: 'Jarang ada sistem kontrak' },
                  { aspek: 'Legalitas', jelantahgo: 'Berizin, kemitraan resmi', konvensional: 'Tidak jelas' },
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-semibold text-gray-800">{row.aspek}</td>
                    <td className="p-4 text-gray-700">{row.jelantahgo}</td>
                    <td className="p-4 text-gray-700">{row.konvensional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Simulasi Penghasilan */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              🎯 Simulasi Penghasilan dari Minyak Jelantah
            </h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {/* Rumah Tangga */}
            <div className="card-premium">
              <h3 className="text-2xl font-bold text-[#0F3D2E] mb-4 flex items-center gap-2">
                <Home className="w-6 h-6" />
                Rumah Tangga
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#0F3D2E] text-white">
                      <th className="p-3 text-left text-sm">Skenario</th>
                      <th className="p-3 text-left text-sm">Volume/Bulan</th>
                      <th className="p-3 text-left text-sm">Harga/L</th>
                      <th className="p-3 text-left text-sm">Pendapatan/Bulan</th>
                      <th className="p-3 text-left text-sm">Pendapatan/Tahun</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { skenario: '1 Rumah', volume: '5L', harga: 'Rp 6.500', bulan: 'Rp 32.500', tahun: 'Rp 390.000' },
                      { skenario: '1 Rumah (rajin masak)', volume: '10L', harga: 'Rp 6.500', bulan: 'Rp 65.000', tahun: 'Rp 780.000' },
                      { skenario: 'Agen RT (5 rumah)', volume: '50L', harga: 'Rp 6.500', bulan: 'Rp 325.000', tahun: 'Rp 3.900.000' },
                      { skenario: 'Agen RT (15 rumah)', volume: '150L', harga: 'Rp 7.000', bulan: 'Rp 1.050.000', tahun: 'Rp 12.600.000' },
                    ].map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="p-3 text-sm">{row.skenario}</td>
                        <td className="p-3 text-sm">{row.volume}</td>
                        <td className="p-3 text-sm">{row.harga}</td>
                        <td className="p-3 text-sm font-semibold">{row.bulan}</td>
                        <td className="p-3 text-sm font-semibold text-[#0F3D2E]">{row.tahun}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Usaha Kuliner */}
            <div className="card-premium">
              <h3 className="text-2xl font-bold text-[#0F3D2E] mb-4 flex items-center gap-2">
                <UtensilsCrossed className="w-6 h-6" />
                Usaha Kuliner
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#0F3D2E] text-white">
                      <th className="p-3 text-left text-sm">Jenis Usaha</th>
                      <th className="p-3 text-left text-sm">Volume/Bulan</th>
                      <th className="p-3 text-left text-sm">Harga/L</th>
                      <th className="p-3 text-left text-sm">Pendapatan/Bulan</th>
                      <th className="p-3 text-left text-sm">Pendapatan/Tahun</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { jenis: 'Warung Nasi', volume: '30L', harga: 'Rp 6.500', bulan: 'Rp 195.000', tahun: 'Rp 2.340.000' },
                      { jenis: 'Warung Gorengan', volume: '60L', harga: 'Rp 6.500', bulan: 'Rp 390.000', tahun: 'Rp 4.680.000' },
                      { jenis: 'Restoran Padang', volume: '150L', harga: 'Rp 7.000', bulan: 'Rp 1.050.000', tahun: 'Rp 12.600.000' },
                      { jenis: 'Resto Ayam Geprek', volume: '100L', harga: 'Rp 7.000', bulan: 'Rp 700.000', tahun: 'Rp 8.400.000' },
                    ].map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="p-3 text-sm">{row.jenis}</td>
                        <td className="p-3 text-sm">{row.volume}</td>
                        <td className="p-3 text-sm">{row.harga}</td>
                        <td className="p-3 text-sm font-semibold">{row.bulan}</td>
                        <td className="p-3 text-sm font-semibold text-[#0F3D2E]">{row.tahun}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Hotel & Catering */}
            <div className="card-premium">
              <h3 className="text-2xl font-bold text-[#0F3D2E] mb-4 flex items-center gap-2">
                <Building2 className="w-6 h-6" />
                Hotel & Catering
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#0F3D2E] text-white">
                      <th className="p-3 text-left text-sm">Jenis Usaha</th>
                      <th className="p-3 text-left text-sm">Volume/Bulan</th>
                      <th className="p-3 text-left text-sm">Harga/L</th>
                      <th className="p-3 text-left text-sm">Pendapatan/Bulan</th>
                      <th className="p-3 text-left text-sm">Pendapatan/Tahun</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { jenis: 'Hotel Bintang 3', volume: '300L', harga: 'Rp 7.500', bulan: 'Rp 2.250.000', tahun: 'Rp 27.000.000' },
                      { jenis: 'Catering Industri', volume: '500L', harga: 'Rp 7.500', bulan: 'Rp 3.750.000', tahun: 'Rp 45.000.000' },
                      { jenis: 'Hotel Bintang 4-5', volume: '800L', harga: 'Rp 7.500', bulan: 'Rp 6.000.000', tahun: 'Rp 72.000.000' },
                    ].map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="p-3 text-sm">{row.jenis}</td>
                        <td className="p-3 text-sm">{row.volume}</td>
                        <td className="p-3 text-sm">{row.harga}</td>
                        <td className="p-3 text-sm font-semibold">{row.bulan}</td>
                        <td className="p-3 text-sm font-semibold text-[#0F3D2E]">{row.tahun}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg font-semibold text-gray-700">
                Potensi penghasilan tambahan yang significant! 💰
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="kalkulator" className="py-20 bg-white">
        <div className="container-custom">
          <Calculator />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              FAQ
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              🤔 Pertanyaan Seputar Harga Minyak Jelantah
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Jawaban lengkap untuk pertanyaan seputar harga minyak jelantah
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card-premium">
                <h3 className="font-bold text-[#0F3D2E] mb-2 text-lg flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Q: {faq.question}</span>
                </h3>
                <p className="text-gray-600 leading-relaxed ml-7">
                  <strong>A:</strong> {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cara Cek Harga & Jual */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#0F3D2E] mb-12">
              📞 Cara Cek Harga & Jual Minyak Jelantah
            </h2>

            <div className="card-premium">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-6">Langkah Mudah:</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">1. Hubungi Kami</h4>
                  <div className="grid md:grid-cols-3 gap-3">
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
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">2. Informasikan</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-[#0F3D2E]">•</span>
                      <span>Berapa liter minyak jelantah Anda</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-[#0F3D2E]">•</span>
                      <span>Lokasi Anda (area Jakarta mana)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-[#0F3D2E]">•</span>
                      <span>Kondisi minyak (bersih/ada air/dll)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">3. Kami Konfirmasi</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-[#0F3D2E]">•</span>
                      <span>Harga exact per liter hari ini</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-[#0F3D2E]">•</span>
                      <span>Jadwal penjemputan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-[#0F3D2E]">•</span>
                      <span>Metode pembayaran</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">4. Transaksi</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-[#0F3D2E]">•</span>
                      <span>Kami jemput (≥20L) atau Anda antar (&lt;20L)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-[#0F3D2E]">•</span>
                      <span>Timbang dengan timbangan digital</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-[#0F3D2E]">•</span>
                      <span>Bayar tunai/transfer instant</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-[#E8F0E3] p-4 rounded text-center">
                  <p className="text-lg font-bold text-[#0F3D2E]">Selesai! Uang langsung masuk ke tangan Anda! 💰</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lokasi & Kontak */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#0F3D2E] mb-12">
              📍 Lokasi & Kontak
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="card-premium">
                <h3 className="text-xl font-bold text-[#0F3D2E] mb-4 flex items-center gap-2">
                  <MapPin className="w-6 h-6" />
                  Kantor & Gudang JelantahGo
                </h3>
                <p className="text-gray-700 mb-4">
                  Jl. Papanggo 3C No.250, Papanggo<br />
                  Kec. Tanjung Priok, Jakarta Utara 14340
                </p>
                <a
                  href="https://maps.google.com/?q=Jl.+Papanggo+3C+No.250,+Jakarta+Utara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0F3D2E] font-semibold hover:underline inline-flex items-center gap-2"
                >
                  📍 Lihat di Google Maps
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="card-premium">
                <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Kontak</h3>
                <div className="space-y-3 mb-4">
                  <a href="https://wa.me/6285183033995" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-[#0F3D2E]">
                    <MessageCircle className="w-5 h-5" />
                    <span><strong>WhatsApp:</strong> +62 851-8303-3995 - FAST RESPONSE!</span>
                  </a>
                  <a href="tel:+6285183033995" className="flex items-center gap-2 text-gray-700 hover:text-[#0F3D2E]">
                    <Phone className="w-5 h-5" />
                    <span><strong>Telepon:</strong> 0851-8303-3995</span>
                  </a>
                  <a href="mailto:info.jelantahgo@gmail.com" className="flex items-center gap-2 text-gray-700 hover:text-[#0F3D2E]">
                    <Mail className="w-5 h-5" />
                    <span><strong>Email:</strong> info.jelantahgo@gmail.com</span>
                  </a>
                  <Link href="/" className="flex items-center gap-2 text-gray-700 hover:text-[#0F3D2E]">
                    <ExternalLink className="w-5 h-5" />
                    <span><strong>Website:</strong> www.jelantahgo.com</span>
                  </Link>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm text-gray-600 mb-2"><strong>Jam Operasional:</strong></p>
                  <p className="text-sm text-gray-600">Senin - Sabtu: 08.00 - 17.00 WIB</p>
                  <p className="text-sm text-gray-600">Minggu: Libur</p>
                  <p className="text-sm text-gray-600 mt-3"><strong>Area Layanan:</strong></p>
                  <p className="text-sm text-gray-600">✅ Jakarta Utara | Jakarta Pusat | Jakarta Barat | Jakarta Selatan | Jakarta Timur</p>
                </div>
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
            <Link href="/cara-jual-minyak-jelantah" className="card-premium hover-lift text-center group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-smooth">📖</div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-2">Cara Jual Minyak Jelantah</h3>
              <p className="text-sm text-gray-600">Panduan lengkap 4 langkah mudah</p>
            </Link>
            <Link href="/area-layanan" className="card-premium hover-lift text-center group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-smooth">📍</div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-2">Area Layanan Jakarta</h3>
              <p className="text-sm text-gray-600">Cek apakah lokasi Anda terlayani</p>
            </Link>
            <Link href="/about" className="card-premium hover-lift text-center group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-smooth">🤝</div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-2">Tentang JelantahGo</h3>
              <p className="text-sm text-gray-600">Kenali lebih dekat tentang kami</p>
            </Link>
            <Link href="/mitra" className="card-premium hover-lift text-center group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-smooth">👥</div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-2">Mitra Kami</h3>
              <p className="text-sm text-gray-600">Info kerjasama untuk bisnis</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 hero-bg-dots">
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
            💬 Dapatkan Penawaran Harga Terbaik Hari Ini!
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
            Jangan tunda lagi! Hubungi kami sekarang untuk:
          </p>
          <div className="max-w-2xl mx-auto mb-8">
            <ul className="text-left text-white/90 space-y-2 mb-8">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Cek harga minyak jelantah terbaru hari ini</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Jadwalkan penjemputan GRATIS (≥20L)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Konsultasi kontrak rutin dengan harga special</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Dapatkan tips meningkatkan kualitas minyak jelantah Anda</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="https://wa.me/6285183033995?text=Halo%20JelantahGo,%20saya%20mau%20tanya%20harga%20terbaru"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#0F3D2E] px-8 py-4 rounded-card font-bold hover:bg-[#D9E3D3] transition-all shadow-soft-lg hover:shadow-soft-xl inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              📱 WhatsApp: +62 851-8303-3995
            </a>
          </div>
          <p className="text-white/80 text-sm">
            ⏰ Response Time: 5-30 menit (jam kerja)
          </p>
          <div className="mt-8 text-center">
            <p className="text-white/90 mb-2 font-semibold">JelantahGo - Harga Terbaik, Proses Tercepat, Pembayaran Langsung!</p>
            <div className="flex flex-wrap justify-center gap-2 text-white/70 text-sm">
              <span>#HargaMinyakJelantah</span>
              <span>#JualJelantahJakarta</span>
              <span>#PengepulMinyakJelantah</span>
              <span>#MinyakJelantahJakarta</span>
              <span>#JelantahGo</span>
            </div>
            <p className="text-white/60 text-xs mt-4">
              Update Terakhir: November 2025 | Harga dapat berubah mengikuti kondisi pasar. Hubungi kami untuk harga exact hari ini.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
