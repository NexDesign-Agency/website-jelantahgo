'use client'

import Image from 'next/image'
import Link from 'next/link'
import BlogSidebar from '@/components/BlogSidebar'
import BlogArticleFooter from '@/components/BlogArticleFooter'
import ArticleSchema from '@/components/ArticleSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { AlertTriangle, TrendingDown, Users, Scale, MessageSquare } from 'lucide-react'

export default function ArticleContent() {
  return (
    <>
      <ArticleSchema
        title="Aturan Baru Jelantah 2025: Niat Baik yang Bikin Pengepul Kecil Kelabakan"
        description="Belajar dari kebijakan yang justru bikin usaha kecil terpukul. Analisis dampak aturan ketat ekspor jelantah terhadap pengepul kecil dan rekomendasi kebijakan yang lebih seimbang."
        image="https://res.cloudinary.com/dknswj9co/image/upload/v1762927414/Aturan_Baru_Jelantah_2025_2__11zon_qeoxib.webp"
        datePublished="2025-11-12"
        dateModified="2025-11-12"
        articleUrl="https://jelantahgo.com/blog/aturan-baru-jelantah-2025"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://jelantahgo.com' },
          { name: 'Blog', url: 'https://jelantahgo.com/blog' },
          { name: 'Aturan Baru Jelantah 2025', url: 'https://jelantahgo.com/blog/aturan-baru-jelantah-2025' },
        ]}
      />

      {/* Hero Section */}
      <section className="hero-bg-dots py-20 lg:py-28">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-[#D9E3D3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              ANALISIS KEBIJAKAN
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Aturan Baru Jelantah 2025: Niat Baik yang Bikin Pengepul Kecil Kelabakan
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              <strong>Belajar dari Kebijakan yang Justru Bikin Usaha Kecil Terpukul</strong>
            </p>
            <p className="text-sm text-white/80 mt-2">Dipublikasikan: 12 November 2025</p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <Image
            src="https://res.cloudinary.com/dknswj9co/image/upload/v1762927414/Aturan_Baru_Jelantah_2025_2__11zon_qeoxib.webp"
            alt="Aturan Baru Jelantah 2025: Niat Baik yang Bikin Pengepul Kecil Kelabakan"
            width={1200}
            height={630}
            className="w-full max-w-4xl mx-auto rounded-card-lg shadow-layered"
            loading="lazy"
          />
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">

                <div className="card-premium bg-red-50 border-l-4 border-red-500 mb-8">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-red-800 font-semibold mb-2">Disclaimer:</p>
                      <p className="text-red-700 leading-relaxed text-sm">
                        Artikel ini analytical dan constructive, bukan blame-game. Tujuan: Help better policymaking dan protect SME ecosystem.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Awal 2025, pengambil kebijakan menerapkan aturan ketat untuk ekspor minyak jelantah. Tujuannya bagus: memberantas penyelundupan dan menjaga stok dalam negeri. Tapi yang terjadi di lapangan justru berbeda.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Dalam hitungan minggu, harga jelantah anjlok. Pengepul kecil yang selama ini jadi tulang punggung rantai pasokan harus gigit jari. Margin untung yang dulu cukup untuk hidup layak, kini terpangkas hampir separuh.
                </p>

                {/* Apa yang Sebenarnya Terjadi */}
                <section className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageSquare className="w-6 h-6 text-[#0F3D2E]" />
                    <h2 className="text-3xl font-bold text-[#0F3D2E]">Apa yang Sebenarnya Terjadi?</h2>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Awal 2025, pengambil kebijakan menerapkan aturan ketat untuk ekspor minyak jelantah. Tujuannya bagus: memberantas penyelundupan dan menjaga stok dalam negeri. Tapi yang terjadi di lapangan justru berbeda.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Dalam hitungan minggu, harga jelantah anjlok. Pengepul kecil yang selama ini jadi tulang punggung rantai pasokan harus gigit jari. Margin untung yang dulu cukup untuk hidup layak, kini terpangkas hampir separuh.
                  </p>
                </section>

                {/* Kronologi Krisis */}
                <section className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingDown className="w-6 h-6 text-[#0F3D2E]" />
                    <h2 className="text-3xl font-bold text-[#0F3D2E]">Kronologi Singkat Krisis</h2>
                  </div>

                  <div className="space-y-6">
                    <div className="card-premium">
                      <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Tahap 1: Pengawasan Diperketat</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Pengambil kebijakan mulai razia dan perketat aturan ekspor. Proses yang dulu lancar tiba-tiba jadi berbelit. Pembeli luar negeri mulai ragu, tapi harga masih bertahan.
                      </p>
                    </div>

                    <div className="card-premium">
                      <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Tahap 2: Kasus Besar Terungkap</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Sebuah perusahaan ketahuan main curang. Pemberitaan media membuat pembeli internasional panik. Order dari luar negeri berkurang drastis.
                      </p>
                    </div>

                    <div className="card-premium">
                      <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Tahap 3: Harga Jatuh Bebas</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Stok menumpuk, pembeli luar negeri mundur, sementara pembeli besar dalam negeri leluasa menekan harga. Pengepul kecil terjepit di tengah.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Dampak yang Terasa di Lapangan */}
                <section className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-6 h-6 text-[#0F3D2E]" />
                    <h2 className="text-3xl font-bold text-[#0F3D2E]">Dampak yang Terasa di Lapangan</h2>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Bagi pengepul kecil, situasi ini seperti mimpi buruk. Dari yang biasa bisa menghidupi keluarga dan bayar karyawan dengan layak, kini harus berjuang sekadar bertahan.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Restoran dan warung makan juga ikut merasakan. Penghasilan tambahan dari jual jelantah yang dulu lumayan, sekarang jauh berkurang. Banyak yang akhirnya memilih berhenti mengumpulkan jelantah karena tak sepadan dengan tenaga yang dikeluarkan.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Di sisi lain, perusahaan besar justru diuntungkan. Mereka bisa beli bahan baku lebih murah sambil tetap jual produk dengan harga normal.
                  </p>
                </section>

                {/* Mengapa Ini Bisa Terjadi */}
                <section className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <Scale className="w-6 h-6 text-[#0F3D2E]" />
                    <h2 className="text-3xl font-bold text-[#0F3D2E]">Mengapa Ini Bisa Terjadi?</h2>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Masalah utamanya sederhana: aturan dibuat tanpa mempertimbangkan dampak ke lapisan terbawah. Dua kebijakan besar diterapkan sekaligus tanpa ada masa transisi. Usaha kecil yang modalnya pas-pasan dipaksa beradaptasi dalam sekejap.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Ketika ekspor dibatasi, stok pun menumpuk. Dengan hanya sedikit pembeli besar yang tersisa, harga pun mudah dikendalikan. Posisi tawar pengepul kecil hampir tak ada.
                  </p>
                </section>

                {/* Critical Questions */}
                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-[#0F3D2E] mb-6">CRITICAL QUESTIONS UNTUK POLICY MAKER</h2>

                  <div className="space-y-6">
                    <div className="card-premium bg-blue-50 border-l-4 border-blue-500">
                      <h3 className="text-xl font-bold text-blue-900 mb-3">1. Supply-Demand</h3>
                      <ul className="list-disc pl-6 space-y-2 text-blue-800">
                        <li>Ketika ekspor di-blok, berapa capacity lokal (Pertamina + pabrik biodiesel) untuk absorb?</li>
                        <li>Apa yang terjadi ke supply surplus?</li>
                        <li>Apakah sudah model price floor scenario?</li>
                      </ul>
                    </div>

                    <div className="card-premium bg-green-50 border-l-4 border-green-500">
                      <h3 className="text-xl font-bold text-green-900 mb-3">2. SME Impact Assessment</h3>
                      <ul className="list-disc pl-6 space-y-2 text-green-800">
                        <li>Sebelum ketat ekspor, sudah riset dampak ke berapa pengepul?</li>
                        <li>Apa contingency plan jika margin collapse?</li>
                        <li>Ada buffer fund atau subsidi transisi?</li>
                      </ul>
                    </div>

                    <div className="card-premium bg-purple-50 border-l-4 border-purple-500">
                      <h3 className="text-xl font-bold text-purple-900 mb-3">3. Underground Economy Risk</h3>
                      <ul className="list-disc pl-6 space-y-2 text-purple-800">
                        <li>Jika SME formal sector squeeze terlalu severe, risiko mereka go informal?</li>
                        <li>Bagaimana dengan tax collection long-term?</li>
                      </ul>
                    </div>

                    <div className="card-premium bg-orange-50 border-l-4 border-orange-500">
                      <h3 className="text-xl font-bold text-orange-900 mb-3">4. Buyer Behavior Modeling</h3>
                      <ul className="list-disc pl-6 space-y-2 text-orange-800">
                        <li>Sudah prediksi kalau enforcement ketat → buyer international jadi risk-averse?</li>
                        <li>Berapa lama recovery time untuk buyer trust?</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Penutup */}
                <section className="mb-12">
                  <div className="card-premium bg-gradient-to-br from-[#E8F0E3] to-[#D9E3D3] border-l-4 border-l-[#0F3D2E]">
                    <h2 className="text-2xl font-bold text-[#0F3D2E] mb-4">PENUTUP</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Ukuran keberhasilan sebuah kebijakan bukan hanya pada tertibnya administrasi, tapi juga pada tetap hidupnya usaha-usaha kecil yang mengharapkan dari sektor terkait.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Yang diperlukan bukan sekadar aturan ketat. Ketegasan harus seimbang dengan empati. Penegakan aturan perlu, tapi perlindungan untuk usaha kecil juga tak kalah penting - <strong>Enforce with cushion</strong>.
                    </p>
                    <p className="text-sm text-gray-600 italic">
                      Sumber data: Kemendag, Kemenkeu, Pertamina, pantauan pasar jelantah November 2025
                    </p>
                  </div>
                </section>

                {/* Internal Links */}
                <div className="card-premium bg-[#E8F0E3] border-l-4 border-l-[#0F3D2E] mb-8">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Artikel Terkait:</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/blog/panduan-jual-minyak-jelantah" className="text-[#0F3D2E] font-semibold hover:underline">
                        Panduan lengkap jual minyak jelantah Jakarta →
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/peluang-bisnis-pengepul-jelantah" className="text-[#0F3D2E] font-semibold hover:underline">
                        Peluang bisnis pengepul jelantah dengan analisis modal dan untung →
                      </Link>
                    </li>
                    <li>
                      <Link href="/pricing" className="text-[#0F3D2E] font-semibold hover:underline">
                        Lihat harga minyak jelantah Jakarta 2025 →
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* CTA */}
                <div className="card-premium bg-gradient-to-br from-[#E8F0E3] to-[#D9E3D3] border-l-4 border-l-[#0F3D2E] text-center mt-12">
                  <h2 className="text-2xl font-bold text-[#0F3D2E] mb-4">
                    Punya Pengalaman Serupa?
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Bagikan pengalaman Anda sebagai pengepul kecil atau pengusaha kuliner yang terdampak kebijakan ini. Mari kita diskusikan solusi yang lebih baik.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="https://wa.me/6285183033995?text=Halo%20JelantahGO,%20saya%20mau%20diskusi%20tentang%20dampak%20aturan%20jelantah%202025"
                      target="_blank"
                      rel="noopener"
                      className="inline-block bg-[#25D366] text-white hover:bg-[#20BA5A] px-8 py-4 rounded-card font-bold text-lg transition-smooth shadow-soft-lg hover:shadow-soft-xl"
                    >
                      Diskusi via WhatsApp
                    </a>
                    <Link
                      href="/blog"
                      className="inline-block bg-[#0F3D2E] text-white hover:bg-[#134E3A] px-8 py-4 rounded-card font-bold text-lg transition-smooth shadow-soft-lg hover:shadow-soft-xl"
                    >
                      Baca Artikel Lainnya →
                    </Link>
                  </div>
                </div>

              </div>

              {/* Article Footer */}
              <BlogArticleFooter currentSlug="aturan-baru-jelantah-2025" />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <BlogSidebar />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
