'use client'

import Image from 'next/image'
import Link from 'next/link'
import BlogSidebar from '@/components/BlogSidebar'
import BlogArticleFooter from '@/components/BlogArticleFooter'
import ArticleSchema from '@/components/ArticleSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { TrendingUp, DollarSign, Target, CheckCircle } from 'lucide-react'

export default function ArticleContent() {
  return (
    <>
      <ArticleSchema
        title="Cara Jual Minyak Jelantah Rp 7.500-8.500/Liter: 5 Strategi Menguntungkan Terbukti"
        description="5 strategi terbukti jual minyak jelantah harga maksimal Rp 8.500/liter! Tips memilih pengepul terpercaya, negosiasi harga premium, dan timing terbaik untuk profit maksimal."
        image="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761963249/jelantahgo_hero_5_r4hdb5.webp"
        datePublished="2024-12-15"
        dateModified="2024-12-28"
        articleUrl="https://jelantahgo.com/blog/cara-jual-jelantah-menguntungkan"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://jelantahgo.com' },
          { name: 'Blog', url: 'https://jelantahgo.com/blog' },
          { name: 'Cara Jual Minyak Jelantah yang Paling Menguntungkan', url: 'https://jelantahgo.com/blog/cara-jual-jelantah-menguntungkan' },
        ]}
      />
      {/* Hero Section */}
      <section className="hero-bg-dots py-20 lg:py-28">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-[#D9E3D3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Panduan Jual Jelantah
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Cara Jual Minyak Jelantah yang Paling Menguntungkan
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Strategi Praktis untuk Memaksimalkan Keuntungan
            </p>
            <p className="text-sm text-white/80 mt-2">Terakhir diperbarui: 30 September 2025</p>
          </div>
        </div>
      </section>
      {/* Image */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <Image
            src="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761963249/jelantahgo_hero_5_r4hdb5.webp"
            alt="Cara Jual Minyak Jelantah yang Paling Menguntungkan"
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
              Menjual minyak jelantah bisa menjadi sumber penghasilan tambahan yang menguntungkan, tetapi banyak orang tidak mendapatkan hasil maksimal karena tidak memahami strategi yang tepat. Artikel ini adalah bagian dari <Link href="/blog/panduan-jual-minyak-jelantah" className="text-[#0F3D2E] font-semibold hover:underline">panduan terlengkap jual minyak jelantah 2025</Link> yang akan memberikan panduan praktis untuk memaksimalkan keuntungan dari penjualan jelantah Anda.
            </p>

            {/* Strategi */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#0F3D2E] mb-6">Strategi untuk Memaksimalkan Keuntungan</h2>

              <div className="space-y-6">
                <div className="card-premium">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-6 h-6 text-[#0F3D2E]" />
                    <h3 className="text-2xl font-bold text-[#0F3D2E]">1. Kumpulkan Volume Besar Sebelum Menjual</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Salah satu kesalahan terbesar adalah menjual jelantah dalam volume kecil. Pengepul lebih menghargai pasokan dalam jumlah besar karena lebih efisien secara logistik.
                  </p>
                  <div className="bg-[#E8F0E3] border-l-4 border-l-[#0F3D2E] p-4">
                    <p className="text-gray-700 font-semibold">Tips:</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700 mt-2">
                      <li>Targetkan minimal 40-50 liter sebelum menjual</li>
                      <li>Gunakan jeriken besar untuk menghemat biaya wadah</li>
                      <li>Bekerja sama dengan tetangga untuk mengumpulkan volume lebih besar</li>
                    </ul>
                  </div>
                </div>

                <div className="card-premium">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="w-6 h-6 text-[#0F3D2E]" />
                    <h3 className="text-2xl font-bold text-[#0F3D2E]">2. Jaga Kualitas Jelantah</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Kualitas adalah faktor utama yang menentukan harga. Jelantah yang bersih dan bebas kontaminan akan dihargai lebih tinggi.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Selalu saring jelantah sebelum menyimpannya</li>
                    <li>Simpan di tempat sejuk, kering, dan teduh</li>
                    <li>Jangan pernah mencampur dengan air atau cairan lain</li>
                    <li>Gunakan wadah berkualitas (jeriken HDPE)</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Baca artikel kami tentang <Link href="/blog/cara-menyimpan-minyak-jelantah" className="text-[#0F3D2E] font-semibold hover:underline">cara menyimpan minyak jelantah yang benar</Link> untuk detail lebih lanjut.
                  </p>
                </div>

                <div className="card-premium">
                  <div className="flex items-center gap-3 mb-4">
                    <DollarSign className="w-6 h-6 text-[#0F3D2E]" />
                    <h3 className="text-2xl font-bold text-[#0F3D2E]">3. Bandingkan Harga dari Beberapa Pengepul</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Jangan langsung menerima penawaran pertama. Luangkan waktu untuk membandingkan harga dari beberapa pengepul berbeda.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Hubungi 3-5 pengepul untuk membandingkan harga</li>
                    <li>Pertimbangkan faktor seperti jemput gratis, pembayaran tunai, dan layanan</li>
                    <li>Waspada terhadap penawaran yang terlalu tinggi (bisa jadi jebakan)</li>
                  </ul>
                </div>

                <div className="card-premium">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-6 h-6 text-[#0F3D2E]" />
                    <h3 className="text-2xl font-bold text-[#0F3D2E]">4. Pilih Waktu yang Tepat</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Harga jelantah bisa fluktuatif. Musim tertentu (seperti kuartal keempat) biasanya memiliki harga yang lebih tinggi.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Baca artikel kami tentang <Link href="/blog/waktu-terbaik-jual-jelantah" className="text-[#0F3D2E] font-semibold hover:underline">waktu terbaik untuk menjual jelantah</Link>.
                  </p>
                </div>

                <div className="card-premium">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="w-6 h-6 text-[#0F3D2E]" />
                    <h3 className="text-2xl font-bold text-[#0F3D2E]">5. Bangun Hubungan Jangka Panjang</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Pengepul yang bisa diandalkan akan memberikan harga yang lebih baik untuk pelanggan loyal. Bangun hubungan baik dengan satu pengepul terpercaya.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Pilih pengepul yang transparan dan profesional</li>
                    <li>Komunikasi yang baik dan jelas</li>
                    <li>Konsistensi dalam pengiriman jelantah berkualitas</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Tips Tambahan */}
            <div className="card-premium bg-[#E8F0E3] border-l-4 border-l-[#0F3D2E] mt-8">
              <h3 className="text-2xl font-bold text-[#0F3D2E] mb-4">Tips Tambahan untuk Keuntungan Maksimal</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Kumpulkan dari Sumber Berbeda:</strong> Jangan hanya mengandalkan jelantah dari rumah sendiri. Ajak keluarga, tetangga, atau warung terdekat untuk berkontribusi.</li>
                <li><strong>Investasi di Peralatan Berkualitas:</strong> Wadah yang baik akan menjaga kualitas jelantah, yang berarti harga jual lebih tinggi.</li>
                <li><strong>Dokumentasi Transaksi:</strong> Catat setiap transaksi untuk melacak pola harga dan memilih waktu terbaik untuk menjual.</li>
                <li><strong>Hindari Kesalahan Umum:</strong> Baca artikel kami tentang <Link href="/blog/kesalahan-penjual-jelantah-pemula" className="text-[#0F3D2E] font-semibold hover:underline">kesalahan penjual jelantah pemula</Link>.</li>
              </ul>
            </div>

            {/* CTA */}
            <div className="card-premium bg-gradient-to-br from-[#E8F0E3] to-[#D9E3D3] border-l-4 border-l-[#0F3D2E] text-center mt-12">
              <h2 className="text-2xl font-bold text-[#0F3D2E] mb-4">
                Mulai Jual Jelantah dengan Strategi yang Tepat!
              </h2>
              <p className="text-gray-700 mb-6">
                Dengan menerapkan strategi-strategi di atas, Anda bisa memaksimalkan keuntungan dari penjualan jelantah. Ingat, kualitas, volume, dan timing adalah kunci sukses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/blog/panduan-jual-minyak-jelantah"
                  className="inline-block bg-[#0F3D2E] text-white hover:bg-[#134E3A] px-8 py-4 rounded-card font-bold text-lg transition-smooth shadow-soft-lg hover:shadow-soft-xl"
                >
                  Panduan Lengkap Jual Jelantah →
                </Link>
                <a
                  href="https://wa.me/6285183033995?text=Halo%20JelantahGO,%20saya%20ingin%20jual%20minyak%20jelantah"
                  target="_blank"
                  rel="noopener"
                  className="inline-block bg-[#25D366] text-white hover:bg-[#20BA5A] px-8 py-4 rounded-card font-bold text-lg transition-smooth shadow-soft-lg hover:shadow-soft-xl"
                >
                  Hubungi JelantahGO
                </a>
              </div>
            </div>
              </div>

            {/* Article Footer */}
            <BlogArticleFooter currentSlug="cara-jual-jelantah-menguntungkan" />
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
