import type { Metadata } from 'next'
import Image from 'next/image'
import FAQSchema from '@/components/FAQSchema'
import HowToSchema from '@/components/HowToSchema'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cara Kerja dan Proses Penjemputan Minyak Jelantah - JelantahGO',
  description: 'Pahami cara kerja JelantahGO dalam 4 langkah mudah: kumpulkan jelantah, hubungi kami, tim jemput gratis, terima bayar tunai. Proses cepat, transparan, dan gratis di seluruh Jabodetabek.',
  keywords: 'cara kerja jual minyak jelantah, panduan jual jelantah, proses jual minyak jelantah, cara menjual minyak goreng bekas',
  alternates: {
    canonical: 'https://jelantahgo.com/cara-kerja',
  },
  openGraph: {
    title: 'Cara Kerja dan Proses Penjemputan Minyak Jelantah - JelantahGO',
    description: 'Pahami cara kerja JelantahGO dalam 4 langkah mudah: kumpulkan jelantah, hubungi kami, tim jemput gratis, terima bayar tunai. Proses cepat, transparan, dan gratis di seluruh Jabodetabek.',
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
    title: 'Cara Kerja dan Proses Penjemputan Minyak Jelantah - JelantahGO',
    description: 'Pahami cara kerja JelantahGO dalam 4 langkah mudah: kumpulkan jelantah, hubungi kami, tim jemput gratis, terima bayar tunai.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/v1761171104/jelantah-go_9_pdl5dv.webp'],
  },
}

export default function CaraKerjaPage() {
  const faqsData = [
    {
      question: 'Apakah penjemputan 100% gratis?',
      answer: 'Ya, penjemputan 100% gratis tanpa biaya apapun untuk volume minimal 40 liter di seluruh area Jabodetabek, termasuk Jakarta, Tangerang, Bekasi, Depok, dan Bogor. Tidak ada biaya transport, biaya parkir, atau biaya tersembunyi lainnya. Kami jemput langsung ke lokasi Anda dengan kendaraan khusus yang dilengkapi timbangan digital.',
    },
    {
      question: 'Berapa lama proses penjemputan di lokasi saya?',
      answer: 'Proses penjemputan sangat cepat dan efisien. Untuk volume 40-100 liter, biasanya memakan waktu sekitar 15-30 menit dari mulai timbang hingga selesai pembayaran. Untuk volume 100-200 liter, proses sekitar 30-45 menit. Untuk volume di atas 200 liter, proses sekitar 45-60 menit. Tim kami sudah berpengalaman dan profesional, sehingga proses berjalan lancar tanpa membuang waktu Anda.',
    },
    {
      question: 'Apakah saya harus di rumah saat penjemputan?',
      answer: 'Ya, Anda atau perwakilan yang bertanggung jawab harus hadir saat penjemputan untuk menyaksikan proses penimbangan secara langsung, memverifikasi jumlah liter, dan menerima pembayaran tunai. Ini untuk memastikan transparansi dan keamanan transaksi. Jika Anda berhalangan, bisa minta perwakilan yang memahami volume jelantah Anda.',
    },
    {
      question: 'Bagaimana jika volume jelantah saya kurang dari 40 liter?',
      answer: 'Tidak masalah! Ada beberapa opsi: 1) Anda bisa terus mengumpulkan jelantah sampai mencapai minimal 40 liter, 2) Bergabung dengan tetangga atau warga sekitar untuk mengumpulkan bersama-sama, atau 3) Mengantar langsung ke drop point kami jika volume cukup besar (minimal 20 liter untuk drop point). Kami juga menyarankan untuk menjadwalkan penjemputan rutin setiap bulan agar volume selalu mencukupi.',
    },
    {
      question: 'Bagaimana cara melakukan booking penjemputan?',
      answer: 'Booking penjemputan sangat mudah! Hubungi kami via WhatsApp di nomor 0851-8303-3995 dengan menyebutkan: volume jelantah (perkiraan liter), alamat lengkap lokasi penjemputan, dan jadwal yang Anda inginkan. Tim kami akan merespons dalam waktu maksimal 2 jam selama jam kerja (08:00-20:00 WIB) untuk mengkonfirmasi jadwal penjemputan.',
    },
    {
      question: 'Apakah bisa jadwal penjemputan di luar jam kerja atau weekend?',
      answer: 'Ya, kami melayani penjemputan di luar jam kerja dan weekend untuk memenuhi kebutuhan pelanggan. Silakan sebutkan preferensi waktu Anda saat booking via WhatsApp. Kami akan berusaha mengakomodasi jadwal yang Anda inginkan, termasuk pagi hari (sebelum 08:00) atau malam hari (setelah 20:00) jika diperlukan. Untuk jadwal khusus seperti ini, biasanya kami akan konfirmasi 1-2 hari sebelumnya.',
    },
    {
      question: 'Bagaimana jika saya butuh penjemputan urgent atau same-day?',
      answer: 'Untuk penjemputan urgent same-day, kami akan berusaha mengakomodasi jika masih ada slot jadwal tersedia. Prioritas diberikan untuk volume besar (100+ liter) dan pelanggan rutin. Silakan sebutkan "urgent" atau "same-day" saat booking via WhatsApp. Tim kami akan segera merespons dan mengkonfirmasi apakah bisa dijadwalkan hari yang sama atau maksimal keesokan harinya.',
    },
  ]

  const steps = [
    {
      number: 1,
      title: 'Kumpulkan Minyak Jelantah Anda',
      image: 'https://res.cloudinary.com/dknswj9co/image/upload/v1761171104/jelantah-go_9_pdl5dv.webp',
      sections: [
        {
          title: 'A. Pengumpulan',
          items: [
            'Gunakan wadah tertutup yang tidak mudah bocor seperti jerigen.',
            'Saring minyak untuk memisahkan sisa makanan.',
            'Tutup rapat untuk menghindari bau dan tumpahan.',
          ],
          note: 'Pelajari cara menyimpan minyak jelantah yang benar dan cara kreatif mengumpulkan 100 liter jelantah per bulan.',
        },
        {
          title: 'B. Volume Minimum',
          items: [
            'Minimal 40 liter untuk layanan penjemputan gratis.',
            'Ajak tetangga atau kumpulkan bersama warung sekitar.',
          ],
        },
        {
          title: 'C. Estimasi Waktu Pengumpulan',
          items: [
            'Rumah Tangga: 2-4 bulan.',
            'Warung Makan: 1-2 minggu.',
            'Restoran/Hotel: 3-7 hari.',
          ],
        },
      ],
    },
    {
      number: 2,
      title: 'Hubungi JelantahGO',
      image: 'https://res.cloudinary.com/dknswj9co/image/upload/v1761171104/jelantah-go_8_aa2c3g.webp',
      sections: [
        {
          title: 'A. Via WhatsApp (Respon Cepat)',
          items: [
            'Hubungi kami di 0851-8303-3995 dengan format:',
          ],
          code: `Nama: [Nama Anda]
Alamat: [Alamat Lengkap]
Volume: [Estimasi Liter]
Jadwal Jemput: [Tanggal & Jam]`,
        },
      ],
    },
    {
      number: 3,
      title: 'Tim Kami Menjemput',
      image: 'https://res.cloudinary.com/dknswj9co/image/upload/v1761171104/jelantah-go_10_rs4pcn.webp',
      sections: [
        {
          title: 'A. Kedatangan Tim',
          items: [
            'Tim kami akan tiba sesuai jadwal yang disepakati.',
            'Kurir dilengkapi dengan ID card resmi dan seragam.',
          ],
        },
        {
          title: 'B. Penimbangan Transparan',
          items: [
            'Penimbangan menggunakan timbangan digital yang akurat.',
            'Anda dipersilakan untuk melihat angka pada timbangan.',
          ],
        },
        {
          title: 'C. Standar Kualitas Minyak',
          items: [
            'Kami menerima minyak jelantah yang tidak tercampur air, sabun, atau bahan kimia.',
          ],
        },
      ],
    },
    {
      number: 4,
      title: 'Terima Pembayaran',
      image: 'https://res.cloudinary.com/dknswj9co/image/upload/v1761171104/jelantah-go_2_awh3lr.webp',
      sections: [
        {
          title: 'A. Pembayaran Langsung',
          items: [
            'Setelah volume disetujui, pembayaran dilakukan secara tunai di tempat.',
            'Tidak ada biaya tersembunyi atau potongan.',
          ],
        },
        {
          title: 'B. Bukti Transaksi',
          items: [
            'Anda akan menerima nota resmi yang mencatat volume dan total pembayaran.',
          ],
          code: `Volume: 85 liter
Harga: Rp 7.500/liter
Total: 85 * 7.500 = Rp 637.500`,
        },
      ],
    },
  ]

  const howToSteps = [
    {
      name: 'Kumpulkan Minyak Jelantah Anda',
      text: 'Gunakan wadah tertutup yang tidak mudah bocor seperti jerigen. Saring minyak untuk memisahkan sisa makanan. Tutup rapat untuk menghindari bau dan tumpahan. Minimal 40 liter untuk layanan penjemputan gratis.',
      image: 'https://res.cloudinary.com/dknswj9co/image/upload/v1761171104/jelantah-go_9_pdl5dv.webp',
    },
    {
      name: 'Hubungi JelantahGO',
      text: 'Hubungi kami via WhatsApp di 0851-8303-3995 dengan menyebutkan: volume jelantah (perkiraan liter), alamat lengkap lokasi penjemputan, dan jadwal yang Anda inginkan. Tim kami akan merespons dalam waktu maksimal 2 jam.',
      image: 'https://res.cloudinary.com/dknswj9co/image/upload/v1761171104/jelantah-go_8_aa2c3g.webp',
    },
    {
      name: 'Tim Kami Menjemput',
      text: 'Tim kami akan tiba sesuai jadwal yang disepakati dengan timbangan digital yang akurat. Anda dipersilakan untuk melihat angka pada timbangan. Penimbangan dilakukan secara transparan di depan Anda.',
      image: 'https://res.cloudinary.com/dknswj9co/image/upload/v1761171104/jelantah-go_10_rs4pcn.webp',
    },
    {
      name: 'Terima Pembayaran',
      text: 'Setelah volume disetujui, pembayaran dilakukan secara tunai di tempat. Tidak ada biaya tersembunyi atau potongan. Anda akan menerima nota resmi yang mencatat volume dan total pembayaran.',
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
            CARA KERJA
          </div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
            Cara Kerja JelantahGO | 4 Langkah Mudah, Jemput Gratis
          </h1>
          <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Proses penjualan minyak jelantah dirancang agar mudah, cepat, dan transparan. Kami jemput langsung, timbang akurat, dan bayar tunai di tempat.{' '}
            <Link href="/pricing" className="text-white underline hover:text-[#D9E3D3] font-semibold">
              Lihat harga terbaru
            </Link>{' '}
            atau baca{' '}
            <Link href="/blog/panduan-jual-minyak-jelantah" className="text-white underline hover:text-[#D9E3D3] font-semibold">
              panduan lengkap jual minyak jelantah
            </Link>
            {' '}dan{' '}
            <Link href="/blog/waktu-terbaik-jual-jelantah" className="text-white underline hover:text-[#D9E3D3] font-semibold">
              waktu terbaik untuk menjual jelantah
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              4 Langkah Mudah Menjadi Rupiah
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ikuti panduan sederhana ini untuk mengubah jelantah Anda menjadi uang tunai.
            </p>
          </div>

          <div className="space-y-20">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
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
                        {'note' in section && section.note && step.number === 1 && (
                          <div className="mt-4 p-4 bg-[#E8F0E3] rounded-card text-sm">
                            <p className="text-gray-700">
                              💡 <Link href="/blog/cara-menyimpan-minyak-jelantah" className="text-[#0F3D2E] font-semibold hover:underline">Pelajari cara menyimpan minyak jelantah yang benar</Link> dan <Link href="/blog/cara-kumpulkan-100-liter-jelantah" className="text-[#0F3D2E] font-semibold hover:underline">cara kreatif mengumpulkan 100 liter jelantah per bulan</Link>.
                            </p>
                          </div>
                        )}
                        {'code' in section && section.code && (
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

