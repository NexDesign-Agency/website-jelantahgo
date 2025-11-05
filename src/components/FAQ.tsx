'use client'

import { useState } from 'react'
import FAQSchema from './FAQSchema'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: '❔ Berapa harga minyak jelantah per liter?',
      answer: 'Harga minyak jelantah mulai Rp 7.500-8.500 tergantung volume. Kami beli minyak jelantah dengan harga kompetitif.'
    },
    {
      question: '❔ Apakah penjemputan benar-benar gratis?',
      answer: 'Ya, penjemputan minyak jelantah gratis untuk minimal 40 liter di Jabodetabek.'
    },
    {
      question: '❔ Bagaimana cara jual minyak jelantah?',
      answer: 'Jual minyak jelantah mudah: kumpulkan minyak goreng bekas, hubungi kami, kami jemput & bayar tunai.'
    },
    {
      question: '❔ Apa beda minyak jelantah dan minyak bekas?',
      answer: 'Minyak jelantah dan minyak bekas sama, yaitu minyak goreng bekas pakai.'
    },
    {
      question: '❔ Pembayaran tunai atau transfer?',
      answer: 'Prioritas tunai langsung. Untuk mitra rutin bisa diskusi transfer.'
    },
    {
      question: '❔ Bagaimana cara mengetahui harga minyak jelantah terbaru?',
      answer: 'Harga minyak jelantah kami update berkala. Untuk volume 40-99 liter: Rp 7.500/liter, 100-199 liter: Rp 8.000/liter, dan ≥200 liter: Rp 8.500/liter. Hubungi kami untuk informasi harga minyak jelantah terbaru.'
    },
    {
      question: '❔ Apakah harga minyak jelantah bisa dinegosiasikan?',
      answer: 'Harga minyak jelantah kami sudah kompetitif dan transparan. Untuk volume besar (≥500 liter), bisa diskusikan harga khusus. Hubungi kami untuk informasi lebih lanjut tentang harga minyak jelantah.'
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
              ❓ FAQ PERTANYAAN UMUM
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
