import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Cara Kerja dan Proses Penjemputan Minyak Jelantah - JelantahGO',
  description: 'Pahami cara kerja JelantahGO dalam 4 langkah mudah. Proses penjemputan minyak jelantah yang cepat, transparan, dan gratis di area Jabodetabek.',
  keywords: 'cara kerja jual minyak jelantah, panduan jual jelantah, proses jual minyak jelantah, cara menjual minyak goreng bekas',
}

export default function CaraKerjaPage() {
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

  return (
    <>
      {/* Hero Section */}
      <section className="hero-bg-dots py-20 lg:py-28">
        <div className="container-custom relative z-10 text-center">
          <div className="inline-block bg-[#D9E3D3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            CARA KERJA
          </div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
            Cara Kerja JelantahGO
          </h1>
          <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Proses penjualan minyak jelantah dirancang agar mudah, cepat, dan transparan. Kami jemput langsung, timbang akurat, dan bayar tunai di tempat.
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
              Kami melayani penjemputan gratis di seluruh wilayah Jabodetabek.
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
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              ❓ Pertanyaan yang Sering Diajukan
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: 'Apakah penjemputan 100% gratis?',
                answer: 'Ya, untuk volume minimal 40 liter, kami jemput gratis tanpa biaya apapun di seluruh area Jabodetabek.',
              },
              {
                question: 'Berapa lama proses di lokasi?',
                answer: 'Untuk volume 40-100 liter sekitar 15-30 menit. Proses sangat cepat dan efisien.',
              },
              {
                question: 'Apakah saya harus di rumah saat dijemput?',
                answer: 'Ya, Anda atau perwakilan harus ada untuk menyaksikan penimbangan dan menerima pembayaran tunai.',
              },
              {
                question: 'Bagaimana jika volume kurang dari 40 liter?',
                answer: 'Anda bisa terus mengumpulkan, gabung dengan tetangga, atau antar langsung ke drop point kami.',
              },
            ].map((faq, index) => (
              <div key={index} className="card-premium">
                <h3 className="font-bold text-[#0F3D2E] mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

