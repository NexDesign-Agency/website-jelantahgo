'use client'

import { useState } from 'react'
import FAQSchema from './FAQSchema'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Berapa harga minyak jelantah per liter?',
      answer: 'Harga minyak jelantah di JelantahGO bervariasi berdasarkan volume: Rp 7.500 untuk volume 40-99 liter, Rp 8.000 untuk volume 100-199 liter, dan Rp 8.500 untuk volume 200 liter ke atas. Pembayaran dilakukan secara tunai langsung di tempat saat penjemputan, tanpa potongan atau biaya tersembunyi.'
    },
    {
      question: 'Apakah penjemputan benar-benar gratis?',
      answer: 'Ya, penjemputan 100% gratis tanpa biaya apapun untuk volume minimal 40 liter di seluruh area Jabodetabek, termasuk Jakarta, Tangerang, Bekasi, Depok, dan Bogor. Tidak ada biaya transport, biaya parkir, atau biaya tersembunyi lainnya. Kami jemput langsung ke lokasi Anda, termasuk area gang sempit yang bisa diakses motor.'
    },
    {
      question: 'Bagaimana cara jual minyak jelantah ke JelantahGO?',
      answer: 'Prosesnya sangat mudah dalam 4 langkah sederhana: 1) Kumpulkan minyak jelantah minimal 40 liter dalam wadah yang rapat, 2) Hubungi kami via WhatsApp untuk booking penjemputan, 3) Tim kurir kami akan datang ke lokasi Anda sesuai jadwal, dan 4) Terima pembayaran tunai langsung setelah penimbangan. Tidak perlu keluar rumah, semua proses dilakukan di tempat Anda.'
    },
    {
      question: 'Minyak jelantah harus bersih atau bisa langsung dijual?',
      answer: 'Tidak perlu disaring sangat halus atau diolah terlebih dahulu. Cukup buang sisa makanan kasar menggunakan saringan dapur biasa. Sedikit endapan halus di dasar wadah adalah hal yang wajar dan masih bisa diterima. Yang penting jangan mencampur dengan air, sabun, atau bahan kimia lainnya karena akan merusak kualitas jelantah.'
    },
    {
      question: 'Wilayah mana saja yang dilayani JelantahGO?',
      answer: 'JelantahGO melayani seluruh area Jabodetabek, meliputi: Jakarta (Jakarta Utara, Selatan, Timur, Barat, Pusat), Tangerang (Kota & Kabupaten), Bekasi (Kota & Kabupaten), Depok, dan Bogor. Untuk wilayah di luar Jabodetabek, silakan hubungi kami terlebih dahulu untuk konfirmasi ketersediaan layanan.'
    },
    {
      question: 'Bagaimana cara menghubungi JelantahGO?',
      answer: 'Anda bisa menghubungi JelantahGO melalui WhatsApp di nomor 0851-8303-3995 atau klik tombol WhatsApp di website. Kami melayani dari Senin hingga Minggu, jam 08:00 - 20:00 WIB. Tim kami akan merespons pesan Anda dalam waktu maksimal 2 jam selama jam kerja.'
    },
    {
      question: 'Apakah pembayaran dilakukan tunai atau transfer?',
      answer: 'Pembayaran dilakukan secara tunai langsung di tempat saat penjemputan, setelah proses penimbangan selesai. Tidak perlu menunggu transfer atau cek. Uang langsung diberikan ke tangan Anda atau perwakilan yang hadir saat penjemputan. Jika Anda berpreferensi transfer, bisa didiskusikan untuk volume besar atau mitra rutin.'
    },
    {
      question: 'Berapa lama waktu tunggu penjemputan setelah booking?',
      answer: 'Untuk booking penjemputan, biasanya tim kami bisa datang dalam 1-3 hari kerja tergantung jadwal dan lokasi. Untuk area Jakarta Pusat dan sekitarnya, bisa lebih cepat dalam 24 jam. Kami akan mengkonfirmasi jadwal penjemputan via WhatsApp setelah Anda melakukan booking. Jika Anda urgent, silakan sebutkan saat booking dan kami akan berusaha memprioritaskan.'
    }
  ]

  return (
    <>
      <FAQSchema faqs={faqs} />
      <section id="faq" className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              FAQ
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Pertanyaan yang Sering Ditanyakan
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="card-premium overflow-hidden transition-smooth"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left flex items-center justify-between gap-4 group"
              >
                <span className="font-semibold text-[#0F3D2E] text-lg group-hover:text-[#134E3A] transition-smooth">
                  {faq.question}
                </span>
                <span className={`text-2xl text-[#0F3D2E] transition-smooth flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 mt-4 pt-4 border-t border-gray-200' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>
    </>
  )
}
