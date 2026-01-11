'use client'

import Image from 'next/image'
import Link from 'next/link'
import BlogSidebar from '@/components/BlogSidebar'
import BlogArticleFooter from '@/components/BlogArticleFooter'
import ArticleSchema from '@/components/ArticleSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { MapPin, Building, Home, TrendingUp } from 'lucide-react'

export default function JakartaTimurPage() {
  return (
    <>
      <ArticleSchema
        title="Jual Minyak Jelantah Jakarta Timur Rp 7.500-8.500/L - Penjemputan Gratis 2024"
        description="Jual minyak jelantah Jakarta Timur harga premium Rp 7.500-8.500/liter! Penjemputan gratis ≥20L di Cakung, Pulogadung, Rawamangun, Duren Sawit, Cibubur. Bayar tunai instant."
        image="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163997/jelantahgo_11_ourqv3.webp"
        datePublished="2024-12-20"
        dateModified="2024-12-28"
        articleUrl="https://jelantahgo.com/blog/jual-minyak-jelantah-jakarta-timur"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://jelantahgo.com' },
          { name: 'Blog', url: 'https://jelantahgo.com/blog' },
          { name: 'Jual Minyak Jelantah Jakarta Timur', url: 'https://jelantahgo.com/blog/jual-minyak-jelantah-jakarta-timur' },
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
              Jual Minyak Jelantah Jakarta Timur
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Panduan untuk Warga & Industri Rumahan
            </p>
            <p className="text-sm text-white/80 mt-2">Terakhir diperbarui: 13 November 2025</p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <Image
            src="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761163997/jelantahgo_11_ourqv3.webp"
            alt="Jual Minyak Jelantah Jakarta Timur"
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
              Jakarta Timur adalah wilayah yang unik dan dinamis. Di satu sisi, ia adalah rumah bagi jutaan warga yang tinggal di kawasan pemukiman yang luas dan padat, dari Duren Sawit hingga Cibubur. Di sisi lain, ia adalah pusat bagi ribuan industri rumahan, pabrik makanan, dan bisnis katering yang beroperasi di area seperti Cakung dan Pulogadung.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Keragaman ini menciptakan satu kesamaan: produksi minyak jelantah dalam volume yang sangat besar. JelantahGO hadir dengan solusi yang dirancang khusus untuk memenuhi kebutuhan kedua segmen ini. Artikel ini adalah bagian dari <Link href="/blog/jual-minyak-jelantah-jakarta" className="text-[#0F3D2E] font-semibold hover:underline">panduan lengkap jual minyak jelantah Jakarta</Link>.
            </p>

            {/* Potensi Ganda */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#0F3D2E] mb-6">Potensi Ganda di Jakarta Timur: Residensial & Industrial</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Memahami potensi unik di Jakarta Timur adalah kunci untuk memaksimalkan keuntungan dari penjualan jelantah. Kami melihat dua sumber utama yang dapat kami layani secara optimal:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="card-premium">
                  <div className="flex items-center gap-3 mb-3">
                    <Home className="w-6 h-6 text-[#0F3D2E]" />
                    <h3 className="text-xl font-bold text-[#0F3D2E]">Potensi Komunitas Warga (Residential Power)</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Dengan jumlah penduduk terbesar di DKI Jakarta, kekuatan utama Jaktim terletak pada komunitas warganya. Area seperti Rawamangun, Pondok Kopi, dan Cipayung dipenuhi oleh perumahan, komplek, dan apartemen.
                  </p>
                  <div className="bg-[#E8F0E3] p-4 rounded-lg">
                    <p className="text-gray-700 font-semibold mb-2">Tantangan Umum Warga:</p>
                    <p className="text-gray-700 text-sm mb-2">Volume per rumah kecil, sulit mencapai target minimal sendirian.</p>
                    <p className="text-gray-700 font-semibold">Solusi JelantahGO:</p>
                    <p className="text-gray-700 text-sm">Program Pengumpulan Kolektif. Kami sangat mendukung dan siap membantu memfasilitasi program pengumpulan di tingkat RT, RW, atau komunitas perumahan.</p>
                  </div>
                </div>

                <div className="card-premium">
                  <div className="flex items-center gap-3 mb-3">
                    <Building className="w-6 h-6 text-[#0F3D2E]" />
                    <h3 className="text-xl font-bold text-[#0F3D2E]">Potensi Bisnis & Industri (Commercial & Industrial Scale)</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Kawasan Industri Pulogadung, Cakung, dan sepanjang Jalan Raya Bogor adalah rumah bagi banyak pabrik makanan, katering besar, dan UKM kuliner.
                  </p>
                  <div className="bg-[#E8F0E3] p-4 rounded-lg">
                    <p className="text-gray-700 font-semibold mb-2">Tantangan Umum Industri:</p>
                    <p className="text-gray-700 text-sm mb-2">Membutuhkan partner pengelolaan limbah yang andal, profesional, dan patuh pada regulasi Limbah B3.</p>
                    <p className="text-gray-700 font-semibold">Solusi JelantahGO:</p>
                    <p className="text-gray-700 text-sm">Layanan Kemitraan Bisnis (B2B) dengan penjadwalan rutin yang fleksibel, penyediaan drum penampungan standar, harga kompetitif untuk volume besar, dan dokumentasi serah terima resmi.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Area Layanan */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-[#0F3D2E]" />
                <h2 className="text-3xl font-bold text-[#0F3D2E]">Area Layanan Jakarta Timur</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                JelantahGO melayani seluruh wilayah Jakarta Timur, termasuk:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="card-premium bg-[#E8F0E3]">
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Rawamangun</li>
                    <li>Pondok Kopi</li>
                    <li>Cipayung</li>
                    <li>Duren Sawit</li>
                    <li>Cakung</li>
                  </ul>
                </div>
                <div className="card-premium bg-[#E8F0E3]">
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Pulogadung</li>
                    <li>Kramat Jati</li>
                    <li>Jatinegara</li>
                    <li>Makasar</li>
                    <li>Ciracas</li>
                  </ul>
                </div>
                <div className="card-premium bg-[#E8F0E3]">
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Cibubur</li>
                    <li>Pasar Rebo</li>
                    <li>Matraman</li>
                    <li>Dan seluruh wilayah Jaktim</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Tips */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#0F3D2E] mb-6">Tips untuk Memaksimalkan Keuntungan di Jakarta Timur</h2>
              <div className="space-y-4">
                <div className="card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-2">Untuk Warga/Residensial:</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Bentuk kelompok pengumpulan di tingkat RT/RW untuk mencapai volume yang lebih besar</li>
                    <li>Komunikasikan dengan tetangga untuk menjadwalkan penjemputan kolektif</li>
                    <li>Simpan jelantah dengan benar untuk menjaga kualitas dan harga jual</li>
                  </ul>
                </div>

                <div className="card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-2">Untuk Industri/Bisnis:</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Pilih partner yang memiliki izin pengelolaan Limbah B3 untuk kepatuhan regulasi</li>
                    <li>Negosiasikan harga khusus untuk volume besar</li>
                    <li>Minta dokumentasi serah terima resmi untuk keperluan audit</li>
                    <li>Rencanakan jadwal penjemputan rutin untuk efisiensi operasional</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Keuntungan */}
            <div className="card-premium bg-[#E8F0E3] border-l-4 border-l-[#0F3D2E]">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8 text-[#0F3D2E]" />
                <h3 className="text-2xl font-bold text-[#0F3D2E]">Mengapa Memilih JelantahGO di Jakarta Timur?</h3>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Layanan jemput gratis untuk volume minimal 5 liter</li>
                <li>Harga kompetitif dan transparan</li>
                <li>Pembayaran tunai langsung di tempat</li>
                <li>Dukungan untuk program pengumpulan kolektif di tingkat komunitas</li>
                <li>Layanan B2B profesional untuk bisnis dan industri</li>
                <li>Dokumentasi resmi untuk kepatuhan regulasi</li>
              </ul>
            </div>

            {/* CTA */}
            <div className="card-premium bg-gradient-to-br from-[#E8F0E3] to-[#D9E3D3] border-l-4 border-l-[#0F3D2E] text-center mt-12">
              <h2 className="text-2xl font-bold text-[#0F3D2E] mb-4">
                Mulai Menjual Jelantah Anda di Jakarta Timur
              </h2>
              <p className="text-gray-700 mb-6">
                Baik Anda warga biasa, UKM, atau perusahaan besar, JelantahGO siap membantu Anda mengubah limbah jelantah menjadi nilai ekonomi sambil berkontribusi pada lingkungan yang lebih bersih.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/blog/jual-minyak-jelantah-jakarta"
                  className="inline-block bg-[#0F3D2E] text-white hover:bg-[#134E3A] px-8 py-4 rounded-card font-bold text-lg transition-smooth shadow-soft-lg hover:shadow-soft-xl"
                >
                  Panduan Lengkap Jakarta →
                </Link>
                <a
                  href="https://wa.me/6285183033995?text=Halo%20JelantahGO,%20saya%20di%20Jakarta%20Timur%20dan%20ingin%20jual%20minyak%20jelantah"
                  target="_blank"
                  rel="noopener"
                  className="inline-block bg-[#25D366] text-white hover:bg-[#20BA5A] px-8 py-4 rounded-card font-bold text-lg transition-smooth shadow-soft-lg hover:shadow-soft-xl"
                >
                  Hubungi JelantahGO
                </a>
              </div>
            </div>

            {/* Article Footer */}
            <BlogArticleFooter currentSlug="jual-minyak-jelantah-jakarta-timur" />
              </div>
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


