'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Berapa harga minyak jelantah per liter?',
      answer: 'Rp 7.500 (40–99 L), Rp 8.000 (100–199 L), Rp 8.500 (200+ L). Bayar tunai langsung.'
    },
    {
      question: 'Apakah penjemputan benar-benar gratis?',
      answer: 'Ya, gratis untuk minimal 40 liter di seluruh Jabodetabek.'
    },
    {
      question: 'Bagaimana cara jual?',
      answer: '1) Kumpulkan ≥40L, 2) WhatsApp kami, 3) Kurir jemput, 4) Terima uang tunai.'
    },
    {
      question: 'Minyak harus bersih?',
      answer: 'Tidak perlu disaring halus. Cukup buang sisa makanan. Jangan campur air/sabun.'
    },
    {
      question: 'Wilayah mana saja yang dilayani?',
      answer: 'Seluruh Jabodetabek: Jakarta, Tangerang, Bekasi, Depok, Bogor.'
    }
  ]

  return (
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
  )
}
