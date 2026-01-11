'use client'

import Image from 'next/image'
import Link from 'next/link'
import BlogSidebar from '@/components/BlogSidebar'
import BlogArticleFooter from '@/components/BlogArticleFooter'
import ArticleSchema from '@/components/ArticleSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { DollarSign, TrendingUp, MapPin, CheckCircle } from 'lucide-react'

export default function ArticleContent() {
  return (
    <>
      <ArticleSchema
        title="Harga Jual Minyak Jelantah Jakarta Utara Rp 7.500-8.500/L - Update Desember 2024"
        description="Update harga minyak jelantah Jakarta Utara Rp 7.500-8.500/liter di PIK, Kelapa Gading, Muara Karang, Pantai Indah Kapuk. Penjemputan gratis ≥20L, bayar tunai instant!"
        image="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163997/jelantahgo_19_n7x6ka.webp"
        datePublished="2024-12-22"
        dateModified="2024-12-28"
        articleUrl="https://jelantahgo.com/blog/harga-jual-minyak-jelantah-jakarta-utara"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://jelantahgo.com' },
          { name: 'Blog', url: 'https://jelantahgo.com/blog' },
          { name: 'Harga Jual Minyak Jelantah Terbaik di Jakarta Utara', url: 'https://jelantahgo.com/blog/harga-jual-minyak-jelantah-jakarta-utara' },
        ]}
      />
      {/* Hero Section */}
      <section className="hero-bg-dots py-20 lg:py-28">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-[#D9E3D3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Area Layanan
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Harga Jual Minyak Jelantah Terbaik di Jakarta Utara
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Update 2025
            </p>
            <p className="text-sm text-white/80 mt-2">Terakhir diperbarui: 11 November 2025</p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <Image
            src="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761163997/jelantahgo_19_n7x6ka.webp"
            alt="Harga Jual Minyak Jelantah Terbaik di Jakarta Utara"
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
            <p className="text-gray-700 leading-relaxed mb-6">
              Jakarta Utara adalah episentrum kuliner dan perdagangan. Dari surga makanan di Kelapa Gading, deretan restoran modern di Pantai Indah Kapuk (PIK), hingga pusat seafood legendaris di Muara Karang, setiap sudutnya menghasilkan volume minyak jelantah yang luar biasa.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Bagi para pebisnis F&B dan warga di area ini, pertanyaan utamanya bukanlah "apakah jelantah saya laku?", melainkan "bagaimana cara mendapatkan harga jual minyak jelantah terbaik di Jakarta Utara?" Artikel ini adalah bagian dari <Link href="/blog/jual-minyak-jelantah-jakarta" className="text-[#0F3D2E] font-semibold hover:underline">panduan lengkap jual minyak jelantah Jakarta</Link>.
            </p>

            {/* Harga */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-6 h-6 text-[#0F3D2E]" />
                <h2 className="text-3xl font-bold text-[#0F3D2E]">Update Harga Jual Jelantah di Jakarta Utara (Estimasi November 2025)</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Pasar jelantah bersifat dinamis, namun sebagai pemain utama di Jakarta Utara, JelantahGO berkomitmen pada transparansi. Berikut adalah rentang harga yang bisa Anda harapkan saat menjual kepada kami:
              </p>
              
              <div className="card-premium bg-gradient-to-br from-[#E8F0E3] to-[#D9E3D3] border-2 border-[#0F3D2E] text-center mb-6">
                <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Estimasi Harga Beli JelantahGO untuk Area Jakarta Utara</h3>
                <p className="text-4xl font-bold text-[#0F3D2E] mb-4">Rp 7.800 - Rp 8.800+ per Liter</p>
                <div className="bg-white rounded-lg p-6 mt-4 text-left">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#0F3D2E] flex-shrink-0 mt-1" />
                      <div>
                        <strong>Volume Standar (40 - 199 Liter):</strong> Harga kompetitif sesuai pasar, mengacu pada skema berjenjang kami.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#0F3D2E] flex-shrink-0 mt-1" />
                      <div>
                        <strong>Volume Besar (200 - 500 Liter):</strong> Berpotensi mendapatkan harga di batas atas rentang standar.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#0F3D2E] flex-shrink-0 mt-1" />
                      <div>
                        <strong>Volume Super (&gt;500 Liter per Jemput):</strong> Hubungi tim kami untuk negosiasi harga korporat khusus. Bisnis di PIK, Kelapa Gading, dan Muara Karang seringkali masuk dalam kategori ini.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Definisi Harga Terbaik */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#0F3D2E] mb-6">Lebih dari Sekadar Angka: Apa Arti "Harga Terbaik" yang Sebenarnya?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Banyak pengepul informal mungkin melempar umpan harga tinggi di awal, namun memotongnya dengan berbagai cara. "Harga terbaik" yang sesungguhnya adalah <strong>total Rupiah yang masuk ke rekening Anda</strong> setelah proses selesai.
              </p>

              <div className="card-premium bg-red-50 border-l-4 border-red-500 mb-6">
                <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Contoh Perhitungan:</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-700 mb-2">Pengepul A (Nakal):</p>
                    <p className="text-gray-700">Harga Rp 9.000/L. Jelantah Anda 100 liter, tapi timbangannya hanya menunjukkan 90 liter. Anda dibayar: 90 L x Rp 9.000 = <strong className="text-red-600">Rp 810.000</strong>.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#0F3D2E] mb-2">JelantahGO (Jujur):</p>
                    <p className="text-gray-700">Harga Rp 8.800/L. Jelantah Anda 100 liter, timbangan kami menunjukkan 100 liter. Anda dibayar: 100 L x Rp 8.800 = <strong className="text-[#0F3D2E]">Rp 880.000</strong>.</p>
                  </div>
                </div>
                <p className="text-gray-700 font-bold mt-4">
                  Meskipun harga per liter lebih rendah, total pembayaran JelantahGO lebih tinggi karena kejujuran timbangan!
                </p>
              </div>

              <div className="card-premium bg-[#E8F0E3] border-l-4 border-l-[#0F3D2E]">
                <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Tiga Pilar Kejujuran:</h3>
                <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                  <li><strong>Timbangan Digital yang Terkalibrasi & Jujur:</strong> Timbangan yang "dicuri" 10% saja akan membuat penawaran harga setinggi apapun menjadi tidak berarti.</li>
                  <li><strong>Harga Final, Bukan Harga Umpan:</strong> Harga yang kami komunikasikan adalah harga yang benar-benar akan Anda terima, tanpa penyesuaian di lapangan.</li>
                  <li><strong>Transparansi Total:</strong> Setiap proses dapat Anda lihat dan verifikasi sendiri.</li>
                </ol>
              </div>
            </section>

            {/* Area Layanan */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-[#0F3D2E]" />
                <h2 className="text-3xl font-bold text-[#0F3D2E]">Area Layanan Jakarta Utara</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                JelantahGO melayani seluruh wilayah Jakarta Utara, termasuk:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="card-premium bg-[#E8F0E3]">
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Pantai Indah Kapuk (PIK)</li>
                    <li>Kelapa Gading</li>
                    <li>Muara Karang</li>
                    <li>Pluit</li>
                    <li>Ancol</li>
                  </ul>
                </div>
                <div className="card-premium bg-[#E8F0E3]">
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Tanjung Priok</li>
                    <li>Koja</li>
                    <li>Cilincing</li>
                    <li>Pademangan</li>
                    <li>Dan seluruh wilayah Jakut</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Tips */}
            <div className="card-premium bg-[#E8F0E3] border-l-4 border-l-[#0F3D2E]">
              <h3 className="text-2xl font-bold text-[#0F3D2E] mb-4">Tips untuk Mendapatkan Harga Terbaik di Jakarta Utara</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Kumpulkan Volume Besar:</strong> Semakin besar volume, semakin tinggi harga per liternya</li>
                <li><strong>Jaga Kualitas:</strong> Jelantah yang bersih dan berkualitas akan dihargai lebih tinggi</li>
                <li><strong>Bekerja Sama Jangka Panjang:</strong> Pengepul loyal sering mendapatkan harga yang lebih baik</li>
                <li><strong>Pilih Pengepul Terpercaya:</strong> Harga jujur lebih berharga daripada harga tinggi yang penuh tipu daya</li>
              </ul>
            </div>
              </div>

              {/* CTA */}
              <div className="card-premium bg-gradient-to-br from-[#E8F0E3] to-[#D9E3D3] border-l-4 border-l-[#0F3D2E] text-center mt-12">
                <h2 className="text-2xl font-bold text-[#0F3D2E] mb-4">
                  Dapatkan Harga Terbaik dengan Kejujuran 100%
                </h2>
                <p className="text-gray-700 mb-6">
                  Di JelantahGO, harga yang kami komunikasikan adalah harga yang benar-benar akan Anda terima. Tidak ada permainan angka, tidak ada manipulasi timbangan. Hanya kejujuran dan transparansi penuh.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/blog/jual-minyak-jelantah-jakarta"
                    className="inline-block bg-[#0F3D2E] text-white hover:bg-[#134E3A] px-8 py-4 rounded-card font-bold text-lg transition-smooth shadow-soft-lg hover:shadow-soft-xl"
                  >
                    Panduan Lengkap Jakarta →
                  </Link>
                  <a
                    href="https://wa.me/6285183033995?text=Halo%20JelantahGO,%20saya%20di%20Jakarta%20Utara%20dan%20ingin%20jual%20minyak%20jelantah"
                    target="_blank"
                    rel="noopener"
                    className="inline-block bg-[#25D366] text-white hover:bg-[#20BA5A] px-8 py-4 rounded-card font-bold text-lg transition-smooth shadow-soft-lg hover:shadow-soft-xl"
                  >
                    Hubungi JelantahGO
                  </a>
                </div>
              </div>

              {/* Article Footer */}
              <BlogArticleFooter currentSlug="harga-jual-minyak-jelantah-jakarta-utara" />
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
