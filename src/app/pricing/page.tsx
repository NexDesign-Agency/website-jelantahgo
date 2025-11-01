import type { Metadata } from 'next'
import Image from 'next/image'
import Calculator from '@/components/Calculator'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Harga Minyak Jelantah Terbaru 2025 | Rp 7.500–8.500/L | JelantahGO',
  description: 'Update harga minyak jelantah terbaru 2025 di Jakarta & Jabodetabek: Rp 7.500–8.500 per liter. Penjemputan gratis, bayar tunai langsung. Cek harga berdasarkan volume Anda!',
  keywords: 'harga minyak jelantah, jual jelantah jakarta, pengepul jelantah harga, harga jelantah 2025, jual minyak goreng bekas',
}

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-bg-dots py-20 lg:py-28">
        <div className="container-custom relative z-10 text-center">
          <div className="inline-block bg-[#D9E3D3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            💰 HARGA TERBARU 2025
          </div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
            Harga Minyak Jelantah Terbaru 2025
          </h1>
          <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            JelantahGO memberikan <strong>harga tertinggi Rp 7.500–8.500 per liter</strong>, penjemputan gratis, dan pembayaran tunai langsung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6285183033995?text=Halo%20JelantahGO,%20saya%20mau%20tanya%20harga%20terbaru"
              target="_blank"
              rel="noopener"
              className="bg-white text-[#0F3D2E] hover:bg-[#F9F8F6] px-8 py-4 rounded-card font-bold text-lg inline-flex items-center justify-center gap-2 transition-smooth shadow-soft-lg hover:shadow-soft-xl"
            >
              Tanya Harga via WhatsApp
            </a>
            <Link
              href="#kalkulator"
              className="bg-transparent border-2 border-white/30 hover:bg-white/10 hover:border-white text-white px-8 py-4 rounded-card font-bold text-lg inline-flex items-center justify-center gap-2 transition-smooth"
            >
              Hitung Penghasilan
            </Link>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 bg-[#F9F8F6]">
        <div className="container-custom text-center">
          <Image
            src="https://res.cloudinary.com/dknswj9co/image/upload/v1761171104/jelantah-go_3_h1mz5u.webp"
            alt="Timbangan digital akurat yang digunakan JelantahGO untuk memastikan transparansi harga minyak jelantah"
            width={1200}
            height={630}
            className="max-w-full h-auto rounded-card-lg shadow-layered mx-auto"
            loading="lazy"
          />
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              💰 DAFTAR HARGA
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Daftar Harga Minyak Jelantah
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Harga berlaku per 22 Oktober 2025. Semakin banyak volume, semakin tinggi harga!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                volume: '40–99 Liter',
                price: 'Rp 7.500',
                features: ['Jemput Gratis', 'Bayar Tunai', 'Jadwal Fleksibel'],
              },
              {
                volume: '100–199 Liter',
                price: 'Rp 8.000',
                features: ['Prioritas Penjemputan', 'Bayar Tunai', 'Bonus Loyalitas'],
                featured: true,
              },
              {
                volume: '200+ Liter',
                price: 'Rp 8.500',
                features: ['Same Day Pickup', 'Dedicated Manager', 'Invoice Resmi'],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-card-lg p-8 transition-smooth ${
                  plan.featured 
                    ? 'bg-white border-2 border-[#0F3D2E] shadow-soft-xl scale-105 hover:scale-110' 
                    : 'card-premium hover:scale-105'
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-[#0F3D2E] to-[#134E3A] text-white text-xs font-bold px-4 py-2 rounded-full shadow-soft-lg">
                      PALING POPULER
                    </div>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-2">{plan.volume}</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-1">
                    <span className="text-4xl font-bold text-[#0F3D2E]">{plan.price}</span>
                  </div>
                  <span className="text-gray-500 text-sm">per liter</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="text-gray-600 text-sm flex items-start gap-3">
                      <span className="text-[#0F3D2E] font-bold mt-0.5">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/6285183033995?text=Halo%20JelantahGO,%20saya%20ingin%20jual%20minyak%20jelantah"
                  target="_blank"
                  rel="noopener"
                  className={`w-full block text-center py-3 rounded-card font-semibold transition-smooth ${
                    plan.featured
                      ? 'bg-[#0F3D2E] text-white hover:bg-[#134E3A] shadow-soft hover:shadow-soft-lg'
                      : 'bg-[#F9F8F6] text-[#0F3D2E] hover:bg-[#E8F0E3] border border-gray-200'
                  }`}
                >
                  Hubungi Sekarang
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Kategori */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              📦 Detail Harga per Kategori
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                volume: '1. Volume 40–99 Liter — Rp 7.500/L',
                cocok: 'Ibu rumah tangga, warung kecil, RT/RW.',
                estimasi: '40L = Rp 300.000 | 50L = Rp 375.000 | 99L = Rp 742.500',
                benefit: 'Penjemputan gratis, bayar tunai, area Jabodetabek.',
              },
              {
                volume: '2. Volume 100–199 Liter — Rp 8.000/L',
                cocok: 'Restoran kecil, katering rumahan, kantin.',
                estimasi: '100L = Rp 800.000 | 150L = Rp 1.200.000 | 199L = Rp 1.592.000',
                benefit: 'Prioritas penjemputan, jadwal tetap, potensi bonus.',
              },
              {
                volume: '3. Volume 200+ Liter — Rp 8.500/L ⭐',
                cocok: 'Restoran besar, hotel, food court, mitra pengepul.',
                estimasi: '200L = Rp 1.700.000 | 500L = Rp 4.250.000 | 1.000L = Rp 8.500.000',
                benefit: 'Same-day pickup, invoice resmi, pembayaran transfer opsional.',
              },
            ].map((kategori, index) => (
              <div key={index} className="card-premium border-l-4 border-l-[#0F3D2E]">
                <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">{kategori.volume}</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Cocok untuk:</strong> {kategori.cocok}
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Estimasi Penghasilan:</strong> {kategori.estimasi}
                </p>
                <p className="text-gray-700">
                  <strong>Benefit:</strong> {kategori.benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="kalkulator" className="py-20 bg-white">
        <div className="container-custom">
          <Calculator />
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              📊 JelantahGO vs Pengepul Lain
            </h2>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-card-lg shadow-layered overflow-hidden">
              <thead>
                <tr className="bg-[#0F3D2E] text-white">
                  <th className="p-4 text-left">Pengepul</th>
                  <th className="p-4 text-left">Harga/L (100L)</th>
                  <th className="p-4 text-left">Jemput Gratis?</th>
                  <th className="p-4 text-left">Bayar Tunai?</th>
                  <th className="p-4 text-left">Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#E8F0E3] font-semibold">
                  <td className="p-4"><strong>JelantahGO</strong></td>
                  <td className="p-4"><strong>Rp 8.000</strong></td>
                  <td className="p-4">✅</td>
                  <td className="p-4">✅</td>
                  <td className="p-4">⭐⭐⭐⭐⭐</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4">Pengepul A</td>
                  <td className="p-4">Rp 7.000</td>
                  <td className="p-4">❌</td>
                  <td className="p-4">✅</td>
                  <td className="p-4">⭐⭐⭐</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="p-4">Pengepul B</td>
                  <td className="p-4">Rp 7.500</td>
                  <td className="p-4">✅ (min 100L)</td>
                  <td className="p-4">❌ Transfer H+3</td>
                  <td className="p-4">⭐⭐⭐</td>
                </tr>
                <tr>
                  <td className="p-4">Pengepul C</td>
                  <td className="p-4">Rp 6.500</td>
                  <td className="p-4">❌ Antar sendiri</td>
                  <td className="p-4">✅</td>
                  <td className="p-4">⭐⭐</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              🎯 Tips Dapatkan Harga Tertinggi
            </h2>
          </div>

          <div className="max-w-3xl mx-auto card-premium bg-gradient-to-br from-[#F9F8F6] to-[#E8F0E3] border-l-4 border-l-[#0F3D2E]">
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#0F3D2E] font-bold text-xl mt-0.5">✓</span>
                <span>Kumpulkan minimal 200 liter untuk harga Rp 8.500/L</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#0F3D2E] font-bold text-xl mt-0.5">✓</span>
                <span>Jangan campur air atau sabun – jaga kualitas minyak</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#0F3D2E] font-bold text-xl mt-0.5">✓</span>
                <span>Jadi pelanggan rutin – dapat prioritas & bonus</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#0F3D2E] font-bold text-xl mt-0.5">✓</span>
                <span>Bergabung jadi mitra – margin hingga Rp 2.000/L</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/mitra"
                className="text-[#0F3D2E] font-bold text-lg hover:underline inline-flex items-center gap-2"
              >
                Pelajari Program Mitra →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              ❓ FAQ Harga Minyak Jelantah
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: 'Apakah harga bisa nego?',
                answer: 'Harga sudah transparan. Untuk volume >1.000L atau kontrak jangka panjang, bisa diskusi dengan manajemen.',
              },
              {
                question: 'Kenapa harga berbeda per volume?',
                answer: 'Semakin besar volume, semakin efisien biaya operasional kami – dan kami berikan keuntungan itu ke Anda.',
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

