'use client'

import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone, MessageCircle, Mail } from 'lucide-react'
import BlogSidebar from '@/components/BlogSidebar'
import BlogArticleFooter from '@/components/BlogArticleFooter'
import ArticleSchema from '@/components/ArticleSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import Breadcrumb from '@/components/Breadcrumb'
import ReadingTime from '@/components/ReadingTime'
import FAQSchema from '@/components/FAQSchema'
import { useState } from 'react'

export default function ArticleContent() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    volume: '',
    address: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Halo JelantahGO, saya ingin jual minyak jelantah:

Nama: ${formData.name}
No HP: ${formData.phone}
Volume: ${formData.volume} liter
Alamat: ${formData.address}`
    window.open(`https://wa.me/6285183033995?text=${encodeURIComponent(message)}`, '_blank')
  }

  const faqsData = [
    {
      question: 'Berapa lama proses dari hubungi sampai dapat uang?',
      answer: '1-3 hari (tergantung antrian penjemputan). Pembayaran langsung saat itu juga, tidak pakai tempo atau menunggu.',
    },
    {
      question: 'Apakah ada biaya jemput?',
      answer: 'TIDAK. 100% gratis untuk area Jakarta. Tidak ada biaya transport, biaya parkir, atau biaya tersembunyi lainnya.',
    },
    {
      question: 'Minimal berapa liter?',
      answer: '5 liter untuk rumah tangga di Jakarta, 20 liter untuk area luar Jakarta (Bekasi, Tangerang, Depok).',
    },
    {
      question: 'Kalau minyaknya tercampur air sedikit?',
      answer: 'Masih bisa, tapi harga bisa turun sedikit. Lebih baik diendapkan dulu 1-2 jam, air akan mengendap di bawah dan bisa dipisahkan.',
    },
    {
      question: 'Wadah harus pakai apa?',
      answer: 'Jerigen, galon bekas, atau botol besar (1.5L ke atas). Yang penting tertutup rapat untuk menghindari bau dan tumpahan.',
    },
    {
      question: 'Bisa jual hari ini juga?',
      answer: 'Tergantung jadwal. Hubungi sekarang, biasanya H+1 atau H+2. Untuk urgent same-day, prioritas diberikan untuk volume besar (100+ liter).',
    },
  ]

  return (
    <>
      <FAQSchema faqs={faqsData} />
      <ArticleSchema
        title="Cara Jual Minyak Jelantah Jakarta | 3 Langkah Mudah + Gratis Jemput"
        description="Panduan praktis jual minyak jelantah dalam 3 langkah: Hubungi kami, gratis jemput, bayar cash di tempat. Prosesnya cepat & mudah. Mulai sekarang!"
        image="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1760998331/jelantahgo_6_u3erug.webp"
        datePublished="2025-11-07"
        dateModified="2025-11-07"
        articleUrl="https://jelantahgo.com/blog/cara-jual-minyak-jelantah-3-langkah"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://jelantahgo.com' },
          { name: 'Blog', url: 'https://jelantahgo.com/blog' },
          { name: 'Cara Jual Minyak Jelantah 3 Langkah', url: 'https://jelantahgo.com/blog/cara-jual-minyak-jelantah-3-langkah' },
        ]}
      />

      <div className="bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-8 py-8">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <Breadcrumb
                items={[
                  { label: 'Home', href: '/' },
                  { label: 'Blog', href: '/blog' },
                  { label: 'Cara Jual Minyak Jelantah 3 Langkah', href: '#' },
                ]}
              />

              {/* Hero Section */}
              <article className="prose prose-lg max-w-none">
                <div className="mb-8">
                  <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    PANDUAN PRAKTIS
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-[#0F3D2E] mb-4">
                    Cara Jual Minyak Jelantah: 3 Langkah Mudah (Gratis Jemput & Bayar Cash!)
                  </h1>
                  <div className="flex items-center gap-4 text-gray-600 text-sm mb-6">
                    <ReadingTime wordCount={1350} />
                    <span>•</span>
                    <span>7 November 2025</span>
                  </div>
                </div>

                <Image
                  src="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1760998331/jelantahgo_6_u3erug.webp"
                  alt="Cara Jual Minyak Jelantah Jakarta - 3 Langkah Mudah"
                  width={1200}
                  height={630}
                  className="w-full h-auto rounded-card-lg mb-8"
                  priority
                />

                {/* Intro */}
                <div className="bg-gradient-to-br from-[#E8F0E3] to-[#D9E3D3] p-6 rounded-card-lg mb-8 border border-[#D9E3D3]">
                  <p className="text-lg text-[#0F3D2E] leading-relaxed mb-4">
                    <strong>Punya minyak jelantah di rumah dan bingung cara jualnya?</strong>
                  </p>
                  <p className="text-lg text-[#0F3D2E] leading-relaxed mb-4">
                    Tenang, prosesnya <strong>SANGAT MUDAH!</strong>
                  </p>
                  <p className="text-lg text-[#0F3D2E] leading-relaxed mb-4">
                    Cukup 3 langkah:
                  </p>
                  <ul className="space-y-2 text-lg text-[#0F3D2E] mb-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#0F3D2E] flex-shrink-0 mt-1" />
                      <span><strong>Hubungi kami</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#0F3D2E] flex-shrink-0 mt-1" />
                      <span><strong>Kami jemput GRATIS</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#0F3D2E] flex-shrink-0 mt-1" />
                      <span><strong>Bayar CASH langsung di tempat</strong></span>
                    </li>
                  </ul>
                  <p className="text-lg text-[#0F3D2E] leading-relaxed">
                    <strong>Total waktu: 15-30 menit saja.</strong>
                  </p>
                  <p className="text-lg text-[#0F3D2E] leading-relaxed mt-4">
                    Tidak ada biaya tersembunyi, tidak ada ribet. Mari kita bahas step-by-step...
                  </p>
                  <p className="text-gray-600 text-sm mt-4">
                    📚 Ingin panduan lebih lengkap? Baca <Link href="/blog/panduan-jual-minyak-jelantah" className="text-[#0F3D2E] font-semibold hover:underline">Panduan Lengkap Jual Minyak Jelantah Jakarta</Link> atau <Link href="/cara-kerja" className="text-[#0F3D2E] font-semibold hover:underline">Cara Kerja JelantahGO</Link>
                  </p>
                </div>

                {/* Section 1: Persiapan */}
                <section id="persiapan" className="mb-12">
                  <h2 className="text-3xl font-bold text-[#0F3D2E] mb-6">Persiapan Sebelum Jual</h2>

                  <div className="bg-white border-2 border-[#E8F0E3] rounded-card-lg p-6 mb-6">
                    <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Quick Checklist:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#0F3D2E] flex-shrink-0 mt-1" />
                        <span>Minimal 5 liter minyak jelantah</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#0F3D2E] flex-shrink-0 mt-1" />
                        <span>Sudah disaring (bersih dari sisa makanan besar)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#0F3D2E] flex-shrink-0 mt-1" />
                        <span>Disimpan dalam wadah bersih (jerigen/galon)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#0F3D2E] flex-shrink-0 mt-1" />
                        <span>Tidak tercampur air</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#0F3D2E] flex-shrink-0 mt-1" />
                        <span>Siapkan nomor HP aktif (untuk koordinasi)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#F9F8F6] rounded-card-lg p-6">
                    <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Tips Cepat:</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li>
                        <strong>Tidak punya jerigen?</strong> Pakai botol air mineral bekas (1.5L) juga bisa!
                      </li>
                      <li>
                        <strong>Masih ada sisa makanan?</strong> Saring pakai saringan teh aja
                      </li>
                      <li>
                        <strong>Campuran air sedikit?</strong> Diamkan dulu 1-2 jam, air akan mengendap di bawah
                      </li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      💡 Pelajari lebih detail: <Link href="/blog/cara-menyimpan-minyak-jelantah" className="text-[#0F3D2E] font-semibold hover:underline">Cara Menyimpan Minyak Jelantah yang Benar</Link> dan <Link href="/blog/cara-kumpulkan-100-liter-jelantah" className="text-[#0F3D2E] font-semibold hover:underline">Cara Kreatif Mengumpulkan 100 Liter Jelantah</Link>
                    </p>
                  </div>
                </section>

                {/* Section 2: Langkah 1 */}
                <section id="langkah-1" className="mb-12">
                  <h2 className="text-3xl font-bold text-[#0F3D2E] mb-6">Langkah 1: Hubungi Kami</h2>

                  <div className="space-y-6">
                    <div className="card-premium">
                      <div className="flex items-center gap-3 mb-4">
                        <MessageCircle className="w-6 h-6 text-[#0F3D2E]" />
                        <h3 className="text-xl font-bold text-[#0F3D2E]">Via WhatsApp (Paling Cepat - Recommended)</h3>
                      </div>
                      <ol className="space-y-2 text-gray-700 mb-4">
                        <li>1. Klik tombol WhatsApp di bawah</li>
                        <li>2. Kirim pesan: "Mau jual jelantah [jumlah] liter, lokasi [alamat]"</li>
                        <li>3. Kami balas dalam 1-3 jam</li>
                      </ol>
                      <a
                        href="https://wa.me/6285183033995?text=Halo%20JelantahGO,%20saya%20ingin%20jual%20minyak%20jelantah"
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-card font-semibold transition-smooth"
                      >
                        <MessageCircle className="w-5 h-5" />
                        Chat WhatsApp Sekarang
                      </a>
                    </div>

                    <div className="card-premium">
                      <div className="flex items-center gap-3 mb-4">
                        <Phone className="w-6 h-6 text-[#0F3D2E]" />
                        <h3 className="text-xl font-bold text-[#0F3D2E]">Via Telepon</h3>
                      </div>
                      <ol className="space-y-2 text-gray-700 mb-4">
                        <li>1. Hubungi: <a href="tel:+6285183033995" className="text-[#0F3D2E] font-semibold hover:underline">0851-8303-3995</a></li>
                        <li>2. Jam kerja: Senin-Sabtu 08.00-20.00</li>
                        <li>3. Langsung dijadwalkan</li>
                      </ol>
                    </div>

                    <div className="card-premium">
                      <div className="flex items-center gap-3 mb-4">
                        <Mail className="w-6 h-6 text-[#0F3D2E]" />
                        <h3 className="text-xl font-bold text-[#0F3D2E]">Via Form Online</h3>
                      </div>
                      <ol className="space-y-2 text-gray-700 mb-4">
                        <li>1. Isi form di bawah artikel ini</li>
                        <li>2. Kami hubungi dalam 3-6 jam</li>
                        <li>3. Konfirmasi jadwal jemput</li>
                      </ol>
                    </div>
                  </div>

                  <div className="bg-[#F9F8F6] rounded-card-lg p-6 mt-6">
                    <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Info yang Perlu Disiapkan:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Jumlah/volume minyak (estimasi juga OK)</li>
                      <li>• Alamat lengkap</li>
                      <li>• Nomor HP aktif</li>
                      <li>• Jadwal yang cocok (pagi/siang/sore)</li>
                    </ul>
                  </div>
                </section>

                {/* Section 3: Langkah 2 */}
                <section id="langkah-2" className="mb-12">
                  <h2 className="text-3xl font-bold text-[#0F3D2E] mb-6">Langkah 2: Gratis Jemput</h2>

                  <div className="card-premium mb-6">
                    <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Proses Penjemputan:</h3>
                    <p className="text-gray-700 mb-4">
                      <strong>H+1 atau H+2</strong> (Sesuai Antrian)
                    </p>
                    <p className="text-gray-700 mb-4">Kami akan:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#0F3D2E] flex-shrink-0 mt-1" />
                        <span>Konfirmasi via WA 1 hari sebelumnya</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#0F3D2E] flex-shrink-0 mt-1" />
                        <span>Konfirmasi lagi 1-2 jam sebelum berangkat</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#0F3D2E] flex-shrink-0 mt-1" />
                        <span>Datang tepat waktu (toleransi ±30 menit)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="card-premium mb-6">
                    <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Saat Tim Kami Datang:</h3>
                    <ol className="space-y-3 text-gray-700">
                      <li>1. Petugas datang dengan kendaraan pickup/mobil bak</li>
                      <li>2. Salam & perkenalan</li>
                      <li>3. Cek kondisi minyak jelantah</li>
                      <li>4. Proses timbang di depan Anda (transparansi 100%)</li>
                      <li>5. Hitung total harga</li>
                      <li>6. Bayar CASH atau transfer instan</li>
                      <li>7. Selesai! (Total waktu: 15-30 menit)</li>
                    </ol>
                  </div>

                  <div className="bg-[#E8F0E3] rounded-card-lg p-6 mb-6">
                    <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Yang Perlu Anda Lakukan:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Siapkan minyak jelantah di tempat yang mudah diakses</li>
                      <li>• Tidak perlu repot angkat-angkat, tim kami yang handle</li>
                      <li>• Tunggu di rumah, prosesnya cepat</li>
                    </ul>
                  </div>

                  <div className="card-premium">
                    <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Area Gratis Jemput:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#0F3D2E] flex-shrink-0 mt-1" />
                        <span>Seluruh Jakarta (Pusat, Selatan, Timur, Barat, Utara)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#0F3D2E] flex-shrink-0 mt-1" />
                        <span>Bekasi, Tangerang, Depok (minimal 20 liter)</span>
                      </li>
                    </ul>
                    <p className="text-gray-600 text-sm mt-4">
                      📍 Lihat detail lengkap: <Link href="/area-layanan" className="text-[#0F3D2E] font-semibold hover:underline">Area Layanan JelantahGO</Link>
                    </p>
                  </div>
                </section>

                {/* Section 4: Langkah 3 */}
                <section id="langkah-3" className="mb-12">
                  <h2 className="text-3xl font-bold text-[#0F3D2E] mb-6">Langkah 3: Terima Bayaran</h2>

                  <div className="card-premium mb-6">
                    <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Pembayaran Transparan:</h3>
                    <p className="text-gray-700 mb-4">Metode Pembayaran:</p>
                    <ul className="space-y-2 text-gray-700 mb-6">
                      <li>💵 <strong>Cash (Tunai)</strong> - Mayoritas pilih ini</li>
                      <li>💳 <strong>Transfer Bank Instan</strong> (BCA/Mandiri/BRI)</li>
                      <li>📱 <strong>E-wallet</strong> (GoPay/OVO) - Atas permintaan</li>
                    </ul>
                  </div>

                  <div className="card-premium mb-6">
                    <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Harga Per Liter (Update November 2025):</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      💰 Untuk detail harga terbaru dan kalkulator penghasilan, kunjungi <Link href="/pricing" className="text-[#0F3D2E] font-semibold hover:underline">halaman harga minyak jelantah</Link>
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-[#E8F0E3]">
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-[#0F3D2E]">Volume</th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-[#0F3D2E]">Harga/Liter</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3">5-20 liter</td>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">Rp 7.500</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3">21-50 liter</td>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">Rp 7.800</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3">51-100 liter</td>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">Rp 8.200</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3">&gt;100 liter</td>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">Rp 8.500</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="card-premium mb-6">
                    <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Contoh Perhitungan:</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li>• <strong>15 liter</strong> x Rp 7.500 = <strong>Rp 112.500</strong> (cash di tempat)</li>
                      <li>• <strong>50 liter</strong> x Rp 7.800 = <strong>Rp 390.000</strong> (cash di tempat)</li>
                    </ul>
                  </div>

                  <div className="bg-[#F9F8F6] rounded-card-lg p-6">
                    <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Bukti Transaksi:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#0F3D2E] flex-shrink-0 mt-1" />
                        <span>Struk/nota diberikan</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#0F3D2E] flex-shrink-0 mt-1" />
                        <span>Bukti timbang digital (jika diminta)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#0F3D2E] flex-shrink-0 mt-1" />
                        <span>Bukti transfer (jika via bank)</span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Section 5: FAQ */}
                <section id="faq" className="mb-12">
                  <h2 className="text-3xl font-bold text-[#0F3D2E] mb-6">FAQ Singkat</h2>
                  <div className="space-y-4">
                    {faqsData.map((faq, index) => (
                      <div key={index} className="card-premium">
                        <h3 className="text-lg font-bold text-[#0F3D2E] mb-2">Q: {faq.question}</h3>
                        <p className="text-gray-700">A: {faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Section 6: CTA */}
                <section id="cta" className="mb-12">
                  <div className="bg-gradient-to-br from-[#0F3D2E] to-[#134E3A] rounded-card-lg p-8 text-white">
                    <h2 className="text-3xl font-bold mb-6 text-center">
                      🚀 Siap Jual Minyak Jelantah Anda Sekarang?
                    </h2>

                    <div className="mb-8">
                      <p className="text-lg mb-4 text-center">Proses Mudah dalam 3 Langkah:</p>
                      <div className="grid md:grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                          <div className="text-4xl mb-2">1️⃣</div>
                          <p className="font-semibold">Hubungi kami sekarang</p>
                        </div>
                        <div className="text-center">
                          <div className="text-4xl mb-2">2️⃣</div>
                          <p className="font-semibold">Kami jemput gratis</p>
                        </div>
                        <div className="text-center">
                          <div className="text-4xl mb-2">3️⃣</div>
                          <p className="font-semibold">Bayar cash di tempat</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/10 rounded-card-lg p-6 mb-6">
                      <h3 className="text-xl font-bold mb-4">Keuntungan Jual ke Kami:</h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {[
                          'Harga tertinggi: Rp 7.500-8.500/liter',
                          'Gratis jemput ke seluruh Jakarta',
                          'Bayar cash langsung, tidak pakai tempo',
                          'Proses cepat (15-30 menit)',
                          'Tim profesional & terpercaya',
                          'Sudah melayani 1000+ pelanggan',
                        ].map((item, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="text-center mb-6">
                      <p className="text-xl font-bold mb-4">📱 HUBUNGI SEKARANG:</p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                          href="https://wa.me/6285183033995?text=Halo%20JelantahGO,%20 saya%20ingin%20jual%20minyak%20jelantah"
                          target="_blank"
                          rel="noopener"
                          className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-card font-bold text-lg transition-smooth"
                        >
                          <MessageCircle className="w-5 h-5" />
                          WhatsApp: 0851-8303-3995
                        </a>
                        <a
                          href="tel:+6285183033995"
                          className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-card font-bold text-lg transition-smooth border-2 border-white/30"
                        >
                          <Phone className="w-5 h-5" />
                          Telepon: 0851-8303-3995
                        </a>
                      </div>
                    </div>

                    <div className="bg-white/10 rounded-card-lg p-6">
                      <p className="text-center font-semibold mb-4">Atau isi form cepat di bawah:</p>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <input
                            type="text"
                            placeholder="Nama"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="px-4 py-3 rounded-card border-2 border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:border-white"
                          />
                          <input
                            type="tel"
                            placeholder="No HP"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="px-4 py-3 rounded-card border-2 border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:border-white"
                          />
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <input
                            type="text"
                            placeholder="Volume (liter)"
                            required
                            value={formData.volume}
                            onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                            className="px-4 py-3 rounded-card border-2 border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:border-white"
                          />
                          <input
                            type="text"
                            placeholder="Alamat"
                            required
                            value={formData.address}
                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            className="px-4 py-3 rounded-card border-2 border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:border-white"
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full bg-white text-[#0F3D2E] hover:bg-[#F9F8F6] px-8 py-4 rounded-card font-bold text-lg transition-smooth"
                        >
                          Submit & Chat WhatsApp
                        </button>
                      </form>
                      <p className="text-center text-sm mt-4 opacity-90">⏰ Respons Cepat: 1-3 Jam!</p>
                    </div>
                  </div>
                </section>
              </article>

              <BlogArticleFooter currentSlug="cara-jual-minyak-jelantah-3-langkah" />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
