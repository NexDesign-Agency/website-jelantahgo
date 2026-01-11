import type { Metadata } from 'next'
import Image from 'next/image'
import FAQSchema from '@/components/FAQSchema'
import HowToSchema from '@/components/HowToSchema'
import Link from 'next/link'
import { ReactNode } from 'react'

// Type definitions
interface Section {
  title: string
  items?: string[]
  note?: ReactNode
  code?: string
}

interface Step {
  number: number
  title: string
  image: string
  sections: Section[]
}

export const metadata: Metadata = {
  title: 'Cara Jual Minyak Jelantah di Jakarta | Proses Cepat & Mudah - JelantahGO',
  description: 'Panduan lengkap cara jual minyak jelantah di Jakarta. Proses cepat 4 langkah, bayar langsung, penjemputan gratis ≥40L. Hubungi JelantahGo 0851-8303-3995',
  alternates: {
    canonical: 'https://jelantahgo.com/cara-kerja',
  },
  openGraph: {
    title: 'Cara Jual Minyak Jelantah di Jakarta | Proses Cepat & Mudah - JelantahGO',
    description: 'Panduan lengkap cara jual minyak jelantah di Jakarta. Proses cepat 4 langkah, bayar langsung, penjemputan gratis ≥40L. Hubungi JelantahGo 0851-8303-3995',
    url: 'https://jelantahgo.com/cara-kerja',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/v1761171104/jelantah-go_9_pdl5dv.webp',
        width: 1200,
        height: 630,
        alt: 'Cara Kerja JelantahGO - 4 Langkah Mudah Jual Minyak Jelantah',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cara Jual Minyak Jelantah di Jakarta | Proses Cepat & Mudah - JelantahGO',
    description: 'Panduan lengkap cara jual minyak jelantah di Jakarta. Proses cepat 4 langkah, bayar langsung, penjemputan gratis ≥40L.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/v1761171104/jelantah-go_9_pdl5dv.webp'],
  },
}

export default function CaraKerjaPage() {
  const faqsData = [
    {
      question: 'Apakah ada minimal order?',
      answer: 'Tidak! Mulai dari 5 liter bisa dijual (antar ke kantor). Untuk penjemputan gratis, minimal 40 liter di seluruh area Jakarta.',
    },
    {
      question: 'Berapa lama prosesnya?',
      answer: 'Maksimal 1-2 hari dari order hingga pembayaran. Biasanya bisa di hari yang sama! Response WhatsApp dalam 5-30 menit di jam kerja.',
    },
    {
      question: 'Apakah harga bisa nego?',
      answer: 'Untuk volume kecil (<40L), harga sudah fixed. Untuk volume ≥100 liter atau kontrak rutin, bisa nego harga lebih baik. Harga bervariasi Rp 6.500-7.500/liter.',
    },
    {
      question: 'Area mana saja yang dilayani?',
      answer: 'Seluruh Jakarta: Utara, Selatan, Barat, Timur, Pusat. Penjemputan gratis untuk volume ≥40 liter ke seluruh area Jakarta.',
    },
    {
      question: 'Apakah ada biaya tambahan?',
      answer: 'TIDAK! Penjemputan ≥40L gratis. Tidak ada biaya admin atau potongan. Biaya transfer bank juga gratis (kami yang tanggung).',
    },
    {
      question: 'Bagaimana kalau minyak tercampur air?',
      answer: 'Tetap kami terima, tapi harga akan disesuaikan dengan kualitas. Tips: pisahkan dulu airnya untuk harga maksimal dengan cara diamkan 6-12 jam, air akan mengendap di bawah.',
    },
    {
      question: 'Minyak jenis apa yang diterima?',
      answer: 'Semua jenis minyak goreng bekas: dari rumah tangga, restoran, hotel, industri F&B. Dari gorengan, ayam goreng, seafood, nasi goreng, kentang goreng, dll. Yang TIDAK diterima: oli bekas kendaraan, minyak pelumas, campuran bahan kimia.',
    },
  ]

  const steps: Step[] = [
    {
      number: 1,
      title: 'Hubungi Kami',
      image: 'https://res.cloudinary.com/dknswj9co/image/upload/v1761171104/jelantah-go_8_aa2c3g.webp',
      sections: [
        {
          title: 'Cara Menghubungi:',
          items: [
            '📱 WhatsApp (Paling Cepat): +62 851-8303-3995',
            '📞 Telepon: 0851-8303-3995',
            '📧 Email: info.jelantahgo@gmail.com',
            '🌐 Website: www.jelantahgo.com (isi form kontak)',
          ],
        },
        {
          title: 'Informasi yang Perlu Disiapkan:',
          items: [
            'Estimasi volume minyak jelantah (berapa liter/kg)',
            'Lokasi Anda (area Jakarta mana)',
            'Jenis minyak (dari rumah tangga, restoran, atau industri)',
            'Jadwal yang diinginkan',
          ],
        },
        {
          title: 'Response Time:',
          items: [
            'Kami balas dalam 5-30 menit di jam kerja (Senin-Sabtu, 08.00-17.00 WIB)',
          ],
        },
      ],
    },
    {
      number: 2,
      title: 'Konfirmasi Harga & Jadwal',
      image: 'https://res.cloudinary.com/dknswj9co/image/upload/v1761171104/jelantah-go_9_pdl5dv.webp',
      sections: [
        {
          title: 'Tim Kami Akan:',
          items: [
            'Konfirmasi harga terbaru per liter (update setiap minggu)',
            'Harga bervariasi Rp 6.500 - Rp 7.500/liter tergantung kualitas & volume',
            'Cek volume & kualitas minyak jelantah Anda',
            'Tentukan metode: Kami jemput (≥40L GRATIS) atau antar ke kantor',
            'Jadwalkan waktu sesuai kebutuhan Anda',
          ],
        },
        {
          title: 'Tips Agar Harga Maksimal:',
          items: [
            'Pisahkan air dari minyak (diamkan dulu, air akan mengendap)',
            'Saring dari sampah padat',
            'Kumpulkan volume lebih banyak untuk nego harga lebih baik',
          ],
        },
      ],
    },
    {
      number: 3,
      title: 'Penjemputan atau Pengantaran',
      image: 'https://res.cloudinary.com/dknswj9co/image/upload/v1761171104/jelantah-go_10_rs4pcn.webp',
      sections: [
        {
          title: 'Jika Kami yang Jemput (≥40L):',
          items: [
            'Tim tiba di lokasi sesuai jadwal dengan kendaraan operasional',
            'Verifikasi minyak jelantah dan penimbangan transparan',
            'Anda bisa lihat langsung angka di layar timbangan digital',
            'Hitung total: Berat (kg) × Harga per liter = Total pembayaran',
            'Waktu proses di lokasi: 15-30 menit',
          ],
        },
        {
          title: 'Jika Anda Antar ke Kantor (<40L):',
          items: [
            'Alamat: Jl. Papanggo 3C No.250, Papanggo, Jakarta Utara 14340',
            'Jam operasional: Senin-Sabtu, 08.00-17.00 WIB',
            'Ada area parkir di depan kantor',
            'Mudah dijangkau dari seluruh Jakarta',
          ],
        },
      ],
    },
    {
      number: 4,
      title: 'Terima Pembayaran & Selesai!',
      image: 'https://res.cloudinary.com/dknswj9co/image/upload/v1761171104/jelantah-go_2_awh3lr.webp',
      sections: [
        {
          title: 'Metode Pembayaran:',
          items: [
            '💵 Tunai - Langsung cash di tempat, tidak perlu menunggu',
            '🏦 Transfer Bank - Transfer instant setelah penimbangan ke bank mana saja',
            'Biaya transfer gratis (kami yang tanggung)',
          ],
        },
        {
          title: 'Dokumen yang Anda Terima:',
          items: [
            'Nota/invoice resmi',
            'Bukti transfer (jika via bank)',
            'Nomor referensi transaksi',
            'Untuk korporat: Faktur pajak, laporan bulanan, sertifikat pengepulan untuk CSR',
          ],
        },
      ],
    },
  ]

  const howToSteps = [
    {
      name: 'Hubungi Kami',
      text: 'Hubungi kami via WhatsApp di +62 851-8303-3995, telepon, email, atau website. Siapkan informasi: estimasi volume, lokasi, jenis minyak, dan jadwal. Kami balas dalam 5-30 menit di jam kerja.',
      image: 'https://res.cloudinary.com/dknswj9co/image/upload/v1761171104/jelantah-go_8_aa2c3g.webp',
    },
    {
      name: 'Konfirmasi Harga & Jadwal',
      text: 'Tim kami konfirmasi harga terbaru per liter (Rp 6.500-7.500/liter), cek volume & kualitas, tentukan metode (jemput ≥40L gratis atau antar ke kantor), dan jadwalkan waktu sesuai kebutuhan.',
      image: 'https://res.cloudinary.com/dknswj9co/image/upload/v1761171104/jelantah-go_9_pdl5dv.webp',
    },
    {
      name: 'Penjemputan atau Pengantaran',
      text: 'Tim tiba sesuai jadwal dengan timbangan digital, verifikasi dan timbang transparan (15-30 menit), atau Anda antar ke kantor di Jl. Papanggo 3C No.250, Jakarta Utara (Senin-Sabtu, 08.00-17.00).',
      image: 'https://res.cloudinary.com/dknswj9co/image/upload/v1761171104/jelantah-go_10_rs4pcn.webp',
    },
    {
      name: 'Terima Pembayaran & Selesai',
      text: 'Pembayaran tunai atau transfer instant setelah penimbangan, biaya transfer gratis. Terima nota resmi, bukti transfer, dan nomor referensi transaksi. Untuk korporat tersedia faktur pajak dan sertifikat.',
      image: 'https://res.cloudinary.com/dknswj9co/image/upload/v1761171104/jelantah-go_2_awh3lr.webp',
    },
  ]

  return (
    <>
      <FAQSchema faqs={faqsData} />
      <HowToSchema
        name="Cara Jual Minyak Jelantah dengan JelantahGO"
        description="Panduan lengkap 4 langkah mudah menjual minyak jelantah dengan JelantahGO: kumpulkan jelantah, hubungi kami, tim jemput gratis, terima bayar tunai."
        steps={howToSteps}
        totalTime="PT1H"
      />
      {/* Hero Section */}
      <section className="hero-bg-dots py-20 lg:py-28">
        <div className="container-custom relative z-10 text-center">
          <div className="inline-block bg-[#D9E3D3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            CARA JUAL MINYAK JELANTAH
          </div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
            Cara Jual Minyak Jelantah di Jakarta - Mudah, Cepat & Menguntungkan
          </h1>
          <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Bingung mau jual minyak jelantah kemana? Di JelantahGo, kami membuat proses jual minyak jelantah menjadi sangat mudah, transparan, dan menguntungkan. Sebagai pengepul minyak jelantah terpercaya di Jakarta sejak 2020, kami telah melayani 30+ mitra dengan sistem yang fair dan profesional. <strong>Waktu proses: Maksimal 1-2 hari dari order hingga uang masuk rekening Anda!</strong>
          </p>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              🚀 Cara Jual Minyak Jelantah: 4 Langkah Mudah
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ikuti panduan sederhana ini untuk mengubah minyak jelantah Anda menjadi uang tunai dengan proses yang transparan dan menguntungkan.
            </p>
          </div>

          <div className="space-y-20">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
              >
                <div className="flex-1 w-full">
                  <Image
                    src={step.image}
                    alt={`Langkah ${step.number}: ${step.title}`}
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-card-lg shadow-layered"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 card-premium">
                  <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    Langkah {step.number}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#0F3D2E] mb-6">
                    {step.title}
                  </h3>
                  <div className="space-y-6">
                    {step.sections.map((section, sIndex) => (
                      <div key={sIndex}>
                        <h4 className="text-lg font-semibold text-[#0F3D2E] mb-3">
                          {section.title}
                        </h4>
                        {section.items && (
                          <ul className="space-y-2 text-gray-600">
                            {section.items.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-[#0F3D2E] font-bold mt-1">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        {section.note && step.number === 1 && (
                          <div className="mt-4 p-4 bg-[#E8F0E3] rounded-card text-sm">
                            <p className="text-gray-700">
                              💡 <Link href="/blog/cara-menyimpan-minyak-jelantah" className="text-[#0F3D2E] font-semibold hover:underline">Pelajari cara menyimpan minyak jelantah yang benar</Link> dan <Link href="/blog/cara-kumpulkan-100-liter-jelantah" className="text-[#0F3D2E] font-semibold hover:underline">cara kreatif mengumpulkan 100 liter jelantah per bulan</Link>.
                            </p>
                          </div>
                        )}
                        {section.code && (
                          <div className="mt-4 bg-[#0F3D2E] text-white p-4 rounded-card font-mono text-sm whitespace-pre-wrap">
                            {section.code}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Estimasi Waktu Proses
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Timeline dari kontak pertama hingga Anda menerima pembayaran tunai.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-card-lg shadow-layered overflow-hidden">
              <thead>
                <tr className="bg-[#0F3D2E] text-white">
                  <th className="p-4 text-left">Tahap</th>
                  <th className="p-4 text-left">Waktu</th>
                  <th className="p-4 text-left">Keterangan</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { tahap: 'Hubungi JelantahGO', waktu: '5-15 menit', keterangan: 'Respon customer service' },
                  { tahap: 'Konfirmasi jadwal', waktu: '30-60 menit', keterangan: 'Pengecekan ketersediaan tim' },
                  { tahap: 'Tunggu jadwal jemput', waktu: '1-3 hari', keterangan: 'Bisa di hari yang sama untuk volume besar' },
                  { tahap: 'Proses di lokasi', waktu: '15-45 menit', keterangan: 'Tergantung volume minyak' },
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                    <td className="p-4">{row.tahap}</td>
                    <td className="p-4 font-semibold">{row.waktu}</td>
                    <td className="p-4">{row.keterangan}</td>
                  </tr>
                ))}
                <tr className="bg-[#0F3D2E] text-white font-bold">
                  <td className="p-4">Total</td>
                  <td className="p-4">1-3 hari</td>
                  <td className="p-4">Dari kontak hingga dapat uang</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Area Layanan Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Area yang Kami Layani
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kami melayani penjemputan gratis di seluruh wilayah Jabodetabek.{' '}
              <Link href="/area-layanan" className="text-[#0F3D2E] font-semibold hover:underline">
                Lihat detail area layanan →
              </Link>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { title: 'Jakarta', areas: ['Pusat', 'Barat', 'Selatan', 'Timur', 'Utara'] },
              { title: 'Tangerang', areas: ['Kota Tangerang', 'Tangerang Selatan', 'Kab. Tangerang'] },
              { title: 'Bekasi', areas: ['Kota Bekasi', 'Kab. Bekasi (Cikarang)'] },
              { title: 'Depok & Bogor', areas: ['Kota Depok', 'Kota Bogor', 'Sebagian Kab. Bogor'] },
            ].map((area, index) => (
              <div key={index} className="card-premium border-t-4 border-t-[#0F3D2E] hover-lift">
                <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">{area.title}</h3>
                <ul className="space-y-2">
                  {area.areas.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600">
                      <span className="text-[#0F3D2E] font-bold mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
              ❓ Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Jawaban untuk pertanyaan umum tentang cara kerja layanan JelantahGO
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqsData.map((faq, index) => (
              <div
                key={index}
                className="card-premium overflow-hidden transition-smooth"
              >
                <h3 className="font-bold text-[#0F3D2E] mb-2 text-lg">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Pages Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#0F3D2E] mb-4">
              Informasi Terkait
            </h2>
            <p className="text-gray-600">
              Jelajahi halaman lain untuk informasi lengkap tentang layanan kami
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link
              href="/pricing"
              className="card-premium hover-lift text-center group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-smooth">💰</div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-2">Harga Terbaru</h3>
              <p className="text-sm text-gray-600">Cek harga minyak jelantah terbaru 2025</p>
            </Link>
            <Link
              href="/area-layanan"
              className="card-premium hover-lift text-center group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-smooth">📍</div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-2">Area Layanan</h3>
              <p className="text-sm text-gray-600">Cek area layanan penjemputan gratis di Jabodetabek</p>
            </Link>
            <Link
              href="/blog/panduan-jual-minyak-jelantah"
              className="card-premium hover-lift text-center group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-smooth">📚</div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-2">Panduan Lengkap</h3>
              <p className="text-sm text-gray-600">Panduan terlengkap jual minyak jelantah</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

