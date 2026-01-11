import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  MapPin, Phone, Mail, MessageCircle, Globe, Clock, ExternalLink,
  CheckCircle, HelpCircle, ArrowRight, Home, UtensilsCrossed, Building2,
  Factory, Users, Instagram, Facebook, Video
} from 'lucide-react'
import ContactPageSchema from '@/components/ContactPageSchema'
import FAQSchema from '@/components/FAQSchema'

export const metadata: Metadata = {
  title: 'Kontak JelantahGO Jakarta | WhatsApp Fast Response',
  description: 'Hubungi JelantahGo sekarang! WhatsApp 0851-8303-3995, response 5-30 menit. Penjemputan gratis ≥40L, bayar instant. Kantor: Jl. Papanggo 3C No.250, Jakarta Utara',
  alternates: {
    canonical: 'https://jelantahgo.com/contact',
  },
  openGraph: {
    title: 'Kontak JelantahGo Jakarta | WhatsApp Fast Response',
    description: 'Hubungi JelantahGo sekarang! WhatsApp 0851-8303-3995, response 5-30 menit. Penjemputan gratis ≥40L, bayar instant. Kantor: Jl. Papanggo 3C No.250, Jakarta Utara',
    url: 'https://jelantahgo.com/contact',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/v1761171103/jelantah-go_4_ocrkto.webp',
        width: 1200,
        height: 630,
        alt: 'Hubungi JelantahGo - Customer Service Ramah dan Siap Membantu',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kontak JelantahGo Jakarta | WhatsApp Fast Response',
    description: 'Hubungi JelantahGo sekarang! WhatsApp 0851-8303-3995, response 5-30 menit. Penjemputan gratis ≥40L, bayar instant.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/v1761171103/jelantah-go_4_ocrkto.webp'],
  },
}

export default function ContactPage() {
  const faqs = [
    {
      question: 'Kapan waktu terbaik menghubungi JelantahGo?',
      answer: 'Waktu terbaik: Pagi (08.00-10.00) response paling cepat, jadwal masih banyak. Siang (10.00-15.00) tetap fast response. Sore (15.00-17.00) bisa untuk jadwal besok. WhatsApp bisa dikirim kapan saja, kami akan balas di jam kerja.',
    },
    {
      question: 'Berapa lama response time WhatsApp?',
      answer: 'Jam Kerja (08.00-17.00 WIB): 5-30 menit. Di Luar Jam Kerja: Kami balas keesokan harinya. Weekend: Kami balas hari Senin. Untuk order mendesak, hubungi via telepon langsung.',
    },
    {
      question: 'Apakah bisa appointment di luar jam kerja?',
      answer: 'Bisa! Untuk: Mitra kontrak rutin, Volume sangat besar (≥200L), Kerjasama korporat. Hubungi kami untuk arrange jadwal khusus.',
    },
    {
      question: 'Bagaimana kalau lokasi saya jauh dari kantor?',
      answer: 'Tidak masalah! Selama masih di wilayah Jakarta (Utara, Selatan, Barat, Timur, Pusat), kami tetap melayani penjemputan untuk volume ≥40 liter.',
    },
    {
      question: 'Apakah harus datang ke kantor dulu sebelum transaksi?',
      answer: 'Tidak harus! Anda bisa: Order via WhatsApp → Kami jemput (≥40L), atau antar langsung ke kantor tanpa appointment. Semua proses bisa via remote, Anda tidak perlu datang ke kantor.',
    },
    {
      question: 'Bisa minta tim JelantahGo survey lokasi dulu?',
      answer: 'Tentu! Untuk: Volume besar/kontrak rutin, Butuh tangki penyimpanan khusus, Perlu assessment kondisi penyimpanan. Kami bisa jadwalkan survey GRATIS.',
    },
    {
      question: 'Bagaimana cara komplain atau feedback?',
      answer: 'Kami sangat menghargai feedback Anda: WhatsApp/Telepon untuk komplain yang perlu penanganan cepat, Email untuk feedback tertulis atau formal, Langsung ke kantor untuk kasus yang perlu diskusi detail. Kami commit untuk respon dan solusi dalam 1×24 jam.',
    },
  ]

  return (
    <>
      <ContactPageSchema
        address={{
          streetAddress: 'Jl. Papanggo 3C No.250, Papanggo',
          addressLocality: 'Jakarta Utara',
          addressRegion: 'Daerah Khusus Ibukota Jakarta',
          postalCode: '14340',
          addressCountry: 'ID',
        }}
      />
      <FAQSchema faqs={faqs} />
      {/* Hero Section */}
      <section className="hero-bg-dots py-20 lg:py-28">
        <div className="container-custom relative z-10 text-center">
          <div className="inline-block bg-[#D9E3D3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            KONTAK FAST RESPONSE
          </div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
            Hubungi JelantahGo Jakarta - Response 5-30 Menit!
          </h1>
          <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Ingin jual minyak jelantah hari ini? Tim JelantahGo siap membantu dengan proses cepat, transparan, dan bayar langsung. <strong>Penjemputan gratis ≥40L di seluruh Jakarta!</strong>
          </p>
        </div>
      </section>

      {/* Kontak Utama */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              🚀 Kontak JelantahGo - Pilih Channel Tercepat!
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              4 cara mudah hubungi kami. WhatsApp paling cepat, telepon untuk urgent, email untuk B2B, atau langsung ke kantor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* WhatsApp */}
            <div className="card-premium border-t-4 border-t-green-500 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center">
                  <MessageCircle className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">📱 WhatsApp (REKOMENDASI #1)</h3>
              <p className="text-gray-700 font-semibold mb-4">+62 851-8303-3995</p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4 text-left">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>⚡ Response: 5-30 menit (jam kerja)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>📸 Kirim foto minyak untuk estimasi harga</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>💰 Konfirmasi harga real-time</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>🚚 Booking penjemputan langsung</span>
                </li>
              </ul>
              <a
                href="https://wa.me/6285183033995?text=Halo%20JelantahGo,%20saya%20mau%20tanya%20tentang%20jual%20minyak%20jelantah"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full inline-flex items-center justify-center gap-2"
              >
                💬 Chat WhatsApp Sekarang
              </a>
            </div>

            {/* Telepon */}
            <div className="card-premium border-t-4 border-t-blue-500 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center">
                  <Phone className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">📞 Telepon</h3>
              <p className="text-gray-700 font-semibold mb-4">0851-8303-3995</p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4 text-left">
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Senin - Sabtu: 08.00 - 17.00 WIB</span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Bicara langsung dengan tim kami</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Cocok untuk order mendesak</span>
                </li>
              </ul>
              <a
                href="tel:+6285183033995"
                className="btn-primary w-full inline-flex items-center justify-center gap-2"
              >
                📞 Telepon Sekarang
              </a>
            </div>

            {/* Email */}
            <div className="card-premium border-t-4 border-t-purple-500 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">📧 Email</h3>
              <p className="text-gray-700 font-semibold mb-4 text-sm">info.jelantahgo@gmail.com</p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4 text-left">
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Untuk pertanyaan detail, penawaran kerjasama, atau kontrak B2B</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Respon dalam 1-24 jam (hari kerja)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Bisa kirim attachment dokumen</span>
                </li>
              </ul>
              <a
                href="mailto:info.jelantahgo@gmail.com"
                className="btn-primary w-full inline-flex items-center justify-center gap-2"
              >
                📧 Kirim Email
              </a>
            </div>

            {/* Website */}
            <div className="card-premium border-t-4 border-t-[#0F3D2E] text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#0F3D2E] text-white rounded-full flex items-center justify-center">
                  <Globe className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">🌐 Website</h3>
              <p className="text-gray-700 font-semibold mb-4 text-sm">www.jelantahgo.com</p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4 text-left">
                <li className="flex items-start gap-2">
                  <Globe className="w-4 h-4 text-[#0F3D2E] mt-0.5 flex-shrink-0" />
                  <span>Informasi lengkap tentang layanan kami</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#0F3D2E] mt-0.5 flex-shrink-0" />
                  <span>Form kontak online</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#0F3D2E] mt-0.5 flex-shrink-0" />
                  <span>Update harga dan artikel terbaru</span>
                </li>
              </ul>
              <Link href="/" className="btn-primary w-full inline-flex items-center justify-center gap-2">
                🌐 Kunjungi Website
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Alamat Kantor */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#0F3D2E] mb-12">
              📍 Alamat Kantor & Gudang
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="card-premium">
                <h3 className="text-xl font-bold text-[#0F3D2E] mb-4 flex items-center gap-2">
                  <MapPin className="w-6 h-6" />
                  Lokasi
                </h3>
                <address className="text-gray-700 mb-4 not-italic">
                  <strong className="text-[#0F3D2E]">JelantahGo</strong><br />
                  Jl. Papanggo 3C No.250, Papanggo<br />
                  Kec. Tanjung Priok, Jakarta Utara<br />
                  DKI Jakarta 14340
                </address>
                <a
                  href="https://maps.google.com/?q=Jl.+Papanggo+3C+No.250,+Jakarta+Utara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0F3D2E] font-semibold hover:underline inline-flex items-center gap-2"
                >
                  📍 Buka di Google Maps
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="card-premium">
                <h3 className="text-xl font-bold text-[#0F3D2E] mb-4 flex items-center gap-2">
                  <Clock className="w-6 h-6" />
                  Jam Operasional
                </h3>
                <div className="space-y-2 text-gray-700 mb-4">
                  <p><strong>Senin - Sabtu:</strong> 08.00 - 17.00 WIB</p>
                  <p><strong>Minggu:</strong> Libur (kecuali appointment khusus)</p>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Fasilitas:</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Area parkir tersedia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Timbangan digital</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Ruang tunggu nyaman</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Akses mudah dari seluruh Jakarta</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-0">
        <div className="w-full h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.262782090783!2d106.8700123147694!3d-6.1176049954902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1e3a27a895a9%3A0x3b4b0e0e4e3e3e3e!2sJl.%20Papanggo%20I%20No.250%2C%20Papanggo%2C%20Kec.%20Tj.%20Priok%2C%20Kota%20Jkt%20Utara%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2014340!5e0!3m2!1sen!2sid!4v1633123456789!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>
      </section>

      {/* Media Sosial */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              💬 Media Sosial
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ikuti kami untuk update harga, tips, dan promo terbaru!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                platform: 'Instagram',
                handle: '@jelantahgo',
                icon: <Instagram className="w-8 h-8" />,
                features: ['Update harga mingguan', 'Tips kelola minyak jelantah', 'Behind the scenes operasional'],
                color: 'bg-pink-500',
              },
              {
                platform: 'Facebook',
                handle: 'JelantahGo Official',
                icon: <Facebook className="w-8 h-8" />,
                features: ['Komunitas mitra JelantahGo', 'Pengumuman dan promo', 'Diskusi dan tanya jawab'],
                color: 'bg-blue-600',
              },
              {
                platform: 'TikTok',
                handle: '@jelantahgo',
                icon: <Video className="w-8 h-8" />,
                features: ['Video edukasi minyak jelantah', 'Tutorial cara jual jelantah', 'Fun facts tentang daur ulang'],
                color: 'bg-black',
              },
            ].map((social, index) => (
              <div key={index} className="card-premium text-center">
                <div className={`flex justify-center mb-4`}>
                  <div className={`w-16 h-16 ${social.color} text-white rounded-full flex items-center justify-center`}>
                    {social.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0F3D2E] mb-2">{social.platform}</h3>
                <p className="text-gray-700 font-semibold mb-4">{social.handle}</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {social.features.map((feature, i) => (
                    <li key={i} className="flex items-start justify-center gap-2">
                      <span className="text-[#0F3D2E]">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jam Operasional Lengkap */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#0F3D2E] mb-12">
              🕐 Jam Operasional Lengkap
            </h2>

            <div className="card-premium">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#0F3D2E] text-white">
                      <th className="p-4 text-left">Hari</th>
                      <th className="p-4 text-left">Jam Buka</th>
                      <th className="p-4 text-left">Keterangan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { hari: 'Senin', jam: '08.00 - 17.00 WIB', keterangan: 'Full operasional' },
                      { hari: 'Selasa', jam: '08.00 - 17.00 WIB', keterangan: 'Full operasional' },
                      { hari: 'Rabu', jam: '08.00 - 17.00 WIB', keterangan: 'Full operasional' },
                      { hari: 'Kamis', jam: '08.00 - 17.00 WIB', keterangan: 'Full operasional' },
                      { hari: 'Jumat', jam: '08.00 - 17.00 WIB', keterangan: 'Full operasional' },
                      { hari: 'Sabtu', jam: '08.00 - 17.00 WIB', keterangan: 'Full operasional' },
                      { hari: 'Minggu', jam: 'LIBUR', keterangan: 'Kecuali kontrak khusus' },
                      { hari: 'Tanggal Merah', jam: 'LIBUR', keterangan: 'Kecuali appointment' },
                    ].map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="p-4 font-semibold">{row.hari}</td>
                        <td className="p-4">{row.jam}</td>
                        <td className="p-4 text-gray-600">{row.keterangan}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 p-4 bg-[#E8F0E3] rounded">
                <p className="text-sm text-gray-700">
                  <strong>Catatan:</strong> WhatsApp bisa dikirim kapan saja, kami balas di jam kerja. Untuk kontrak khusus, bisa arrange jadwal di luar jam operasional. Emergency contact untuk mitra kontrak rutin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cara Menghubungi Kami */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#0F3D2E] mb-12">
              📋 Cara Menghubungi Kami (Step by Step)
            </h2>

            <div className="space-y-8">
              {/* Untuk Jual Minyak Jelantah */}
              <div className="card-premium">
                <h3 className="text-2xl font-bold text-[#0F3D2E] mb-6">Untuk Jual Minyak Jelantah:</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Step 1: Pilih Channel Komunikasi</h4>
                    <ul className="text-gray-700 text-sm space-y-1 ml-4">
                      <li>• Paling cepat: WhatsApp</li>
                      <li>• Mau bicara langsung: Telepon</li>
                      <li>• Pertanyaan detail: Email</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Step 2: Siapkan Informasi Ini</h4>
                    <ul className="text-gray-700 text-sm space-y-1 ml-4">
                      <li>✅ Berapa liter/kg minyak jelantah Anda?</li>
                      <li>✅ Lokasi Anda di Jakarta area mana?</li>
                      <li>✅ Kondisi minyak (bersih/ada air/dll)?</li>
                      <li>✅ Kapan mau dijemput/antar?</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Step 3: Hubungi Kami</h4>
                    <div className="bg-[#0F3D2E] text-white p-4 rounded font-mono text-sm">
                      {`Halo JelantahGo, saya mau jual minyak jelantah:
- Volume: sekitar 40 liter
- Lokasi: Jakarta Selatan, Kebayoran Baru
- Kondisi: sudah disaring, sedikit air
- Jadwal: besok atau lusa kalau bisa

Bisa dibantu?`}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Step 4: Kami Respon</h4>
                    <ul className="text-gray-700 text-sm space-y-1 ml-4">
                      <li>• Konfirmasi harga terbaru</li>
                      <li>• Cek jadwal penjemputan</li>
                      <li>• Tentukan metode pembayaran</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Step 5: Deal & Transaksi!</h4>
                    <ul className="text-gray-700 text-sm space-y-1 ml-4">
                      <li>• Kami jemput atau Anda antar</li>
                      <li>• Timbang & bayar langsung</li>
                      <li>• Selesai! 💰</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Untuk Kerjasama B2B */}
              <div className="card-premium">
                <h3 className="text-2xl font-bold text-[#0F3D2E] mb-6">Untuk Kerjasama B2B/Kontrak:</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Step 1: Hubungi via Email atau WhatsApp</h4>
                    <ul className="text-gray-700 text-sm space-y-1 ml-4">
                      <li>• Email: untuk proposal formal</li>
                      <li>• WhatsApp: untuk diskusi awal</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Step 2: Informasi yang Dibutuhkan</h4>
                    <ul className="text-gray-700 text-sm space-y-1 ml-4">
                      <li>• Nama perusahaan/usaha</li>
                      <li>• Jenis usaha (restoran/hotel/catering/dll)</li>
                      <li>• Estimasi volume per bulan</li>
                      <li>• Frekuensi yang diinginkan (mingguan/bulanan)</li>
                      <li>• Kebutuhan dokumentasi (faktur/CSR report/dll)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Step 3: Kami Jadwalkan Meeting</h4>
                    <ul className="text-gray-700 text-sm space-y-1 ml-4">
                      <li>• Bisa di kantor kami atau lokasi Anda</li>
                      <li>• Survey lokasi (jika diperlukan)</li>
                      <li>• Diskusi terms kerjasama</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Step 4: Penawaran & Kontrak</h4>
                    <ul className="text-gray-700 text-sm space-y-1 ml-4">
                      <li>• Kami kirim penawaran tertulis</li>
                      <li>• Nego harga dan terms</li>
                      <li>• Signing kontrak</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Step 5: Partnership Dimulai!</h4>
                    <ul className="text-gray-700 text-sm space-y-1 ml-4">
                      <li>• Jadwal penjemputan tetap</li>
                      <li>• Harga locked sesuai kontrak</li>
                      <li>• Reporting berkala</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontak Khusus Berdasarkan Kebutuhan */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#0F3D2E] mb-12">
              🎯 Kontak Khusus Berdasarkan Kebutuhan
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Untuk Rumah Tangga & Volume Kecil',
                  icon: <Home className="w-6 h-6" />,
                  description: 'Proses cepat dan simple, Minimal 5 liter sudah bisa dijual',
                  link: 'https://wa.me/6285183033995?text=Halo,%20saya%20rumah%20tangga%20mau%20jual%20minyak%20jelantah',
                },
                {
                  title: 'Untuk Restoran & Warung',
                  icon: <UtensilsCrossed className="w-6 h-6" />,
                  description: 'Kontrak rutin mingguan/bulanan, Harga special untuk volume konsisten',
                  link: 'https://wa.me/6285183033995?text=Halo,%20saya%20punya%20restoran%20dan%20ingin%20kontrak%20rutin%20minyak%20jelantah',
                  email: true,
                },
                {
                  title: 'Untuk Hotel & Catering',
                  icon: <Building2 className="w-6 h-6" />,
                  description: 'Partnership jangka panjang, CSR reporting & dokumentasi lengkap, Harga kontrak premium',
                  link: 'https://wa.me/6285183033995?text=Halo,%20saya%20dari%20hotel/catering%20ingin%20diskusi%20kerjasama%20B2B',
                  email: true,
                },
                {
                  title: 'Untuk Menjadi Agen/Mitra Pengepul',
                  icon: <Users className="w-6 h-6" />,
                  description: 'Program kemitraan dengan training, Margin menarik untuk agen, Support penuh dari tim JelantahGo',
                  email: true,
                },
              ].map((contact, index) => (
                <div key={index} className="card-premium">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#0F3D2E] text-white rounded-full flex items-center justify-center">
                      {contact.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#0F3D2E]">{contact.title}</h3>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{contact.description}</p>
                  <div className="space-y-2">
                    <a
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full inline-flex items-center justify-center gap-2 text-sm"
                    >
                      📱 WhatsApp
                    </a>
                    {contact.email && (
                      <a
                        href="mailto:info.jelantahgo@gmail.com"
                        className="btn-secondary w-full inline-flex items-center justify-center gap-2 text-sm"
                      >
                        📧 Email
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Area Layanan */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#0F3D2E] mb-12">
              📍 Area Layanan Penjemputan
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Kami melayani penjemputan di seluruh wilayah Jakarta:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  wilayah: 'Jakarta Utara',
                  areas: ['Kelapa Gading', 'Sunter', 'Tanjung Priok', 'Pluit', 'Ancol', 'Pademangan', 'Koja', 'Penjaringan', 'Cilincing'],
                },
                {
                  wilayah: 'Jakarta Pusat',
                  areas: ['Menteng', 'Tanah Abang', 'Gambir', 'Senen', 'Cempaka Putih', 'Kemayoran', 'Johar Baru', 'Sawah Besar'],
                },
                {
                  wilayah: 'Jakarta Barat',
                  areas: ['Cengkareng', 'Kebon Jeruk', 'Grogol Petamburan', 'Taman Sari', 'Tambora', 'Kembangan', 'Palmerah', 'Kalideres'],
                },
                {
                  wilayah: 'Jakarta Selatan',
                  areas: ['Kebayoran Baru', 'Kebayoran Lama', 'Cilandak', 'Mampang', 'Jagakarsa', 'Pasar Minggu', 'Tebet', 'Setia Budi', 'Pesanggrahan', 'Pancoran'],
                },
                {
                  wilayah: 'Jakarta Timur',
                  areas: ['Cakung', 'Pulogadung', 'Jatinegara', 'Kramat Jati', 'Matraman', 'Pulo Gebang', 'Cipayung', 'Duren Sawit', 'Makasar', 'Pasar Rebo'],
                },
              ].map((area, index) => (
                <div key={index} className="card-premium">
                  <h3 className="text-lg font-bold text-[#0F3D2E] mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    {area.wilayah}
                  </h3>
                  <ul className="space-y-1">
                    {area.areas.map((item, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-[#0F3D2E] font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-700 mb-4">
                <strong>Catatan:</strong> Penjemputan GRATIS untuk volume ≥40 liter
              </p>
              <Link href="/area-layanan" className="text-[#0F3D2E] font-semibold hover:underline inline-flex items-center gap-2">
                📍 Lihat Detail Area Layanan
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
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
              ❓ FAQ Kontak & Komunikasi
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Jawaban lengkap untuk pertanyaan seputar kontak dan komunikasi
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

      {/* Informasi Penting */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#0F3D2E] mb-12">
              📢 Informasi Penting
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-premium border-l-4 border-l-green-500">
                <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">⚠️ Nomor Resmi JelantahGo:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• WhatsApp/Telepon: <strong>0851-8303-3995</strong></li>
                  <li>• Email: <strong>info.jelantahgo@gmail.com</strong></li>
                </ul>
              </div>

              <div className="card-premium border-l-4 border-l-red-500">
                <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">🚫 Hati-hati Penipuan:</h3>
                <p className="text-gray-700 text-sm">
                  Kami tidak pernah meminta transfer uang di muka atau data pribadi seperti PIN/password. Selalu konfirmasi ke nomor resmi kami jika ada yang mengatasnamakan JelantahGo.
                </p>
              </div>

              <div className="card-premium border-l-4 border-l-blue-500 md:col-span-2">
                <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">✅ Verifikasi Resmi:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Kantor fisik di Jakarta Utara</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Tim datang dengan ID card JelantahGo</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Kendaraan operasional berlogo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Nota/invoice resmi untuk setiap transaksi</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 hero-bg-dots">
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
            💰 Jual Minyak Jelantah Hari Ini, Uang Masuk Hari Ini!
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
            Jangan tunda lagi! Hubungi kami sekarang dan dapatkan uang tunai dari minyak jelantah Anda:
          </p>
          <div className="max-w-3xl mx-auto space-y-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-card">
              <p className="text-white font-semibold mb-2">🥇 WhatsApp (REKOMENDASI #1)</p>
              <a
                href="https://wa.me/6285183033995?text=Halo%20JelantahGo,%20saya%20mau%20jual%20minyak%20jelantah%20hari%20ini"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline font-bold text-lg"
              >
                📱 +62 851-8303-3995
              </a>
              <p className="text-white/80 text-sm">⚡ Response: 5-30 menit | Kirim foto untuk estimasi instant</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-card">
              <p className="text-white font-semibold mb-2">☎️ Telepon (Untuk Order Urgent)</p>
              <a href="tel:+6285183033995" className="text-white hover:underline font-bold text-lg">
                📞 0851-8303-3995
              </a>
              <p className="text-white/80 text-sm">🕐 Senin-Sabtu, 08.00-17.00 | Bicara langsung dengan tim</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-card">
              <p className="text-white font-semibold mb-2">📧 Email (Untuk Kontrak B2B)</p>
              <a href="mailto:info.jelantahgo@gmail.com" className="text-white hover:underline font-bold text-lg">
                📧 info.jelantahgo@gmail.com
              </a>
              <p className="text-white/80 text-sm">📨 Response: 1-24 jam | Kerjasama hotel, restoran, catering</p>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-card max-w-2xl mx-auto">
            <p className="text-white font-semibold mb-2">🏢 Atau Datang Langsung ke Kantor (Tanpa Appointment):</p>
            <p className="text-white mb-2">📍 Jl. Papanggo 3C No.250, Jakarta Utara 14340</p>
            <p className="text-white/80 text-sm mb-3">🕐 Senin-Sabtu, 08.00-17.00 | Parkir tersedia</p>
            <a
              href="https://maps.google.com/?q=Jl.+Papanggo+3C+No.250,+Jakarta+Utara"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline inline-flex items-center gap-2 font-semibold"
            >
              🗺️ Buka Google Maps & Directions
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <div className="mt-8 text-center">
            <p className="text-white/90 mb-2 font-semibold text-lg">⚡ JelantahGo Jakarta - Fast Response, Fair Price, Trusted!</p>
            <p className="text-white/80 text-sm mb-4">30+ mitra aktif sejak 2020 | Ribuan transaksi sukses | Rating kepuasan tinggi</p>
            <div className="flex flex-wrap justify-center gap-2 text-white/70 text-sm">
              <span>#FastResponseJakarta</span>
              <span>#JualJelantahHariIni</span>
              <span>#PengepulTerpercaya</span>
              <span>#BayarLangsung</span>
            </div>
            <p className="text-white/60 text-xs mt-4">
              Update Kontak: Desember 2024 | Jam operasional dapat berubah sewaktu-waktu
            </p>
          </div>
        </div>
      </section>

      {/* Halaman Terkait */}
      <section className="py-16 bg-[#F9F8F6]">
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
              <p className="text-sm text-gray-600">Panduan lengkap 4 langkah</p>
            </Link>
            <Link href="/pricing" className="card-premium hover-lift text-center group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-smooth">💰</div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-2">Harga Minyak Jelantah</h3>
              <p className="text-sm text-gray-600">Update harga terbaru</p>
            </Link>
            <Link href="/area-layanan" className="card-premium hover-lift text-center group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-smooth">📍</div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-2">Area Layanan</h3>
              <p className="text-sm text-gray-600">Detail wilayah penjemputan</p>
            </Link>
            <Link href="/about" className="card-premium hover-lift text-center group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-smooth">🤝</div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-2">Tentang JelantahGo</h3>
              <p className="text-sm text-gray-600">Kenali lebih dekat kami</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
