'use client'

import Image from 'next/image'
import Link from 'next/link'
import BlogSidebar from '@/components/BlogSidebar'
import BlogArticleFooter from '@/components/BlogArticleFooter'
import ArticleSchema from '@/components/ArticleSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { DollarSign, TrendingUp, Calendar, Info } from 'lucide-react'

export default function ArticleContent() {
  return (
    <>
      <ArticleSchema
        title="Update Harga Minyak Jelantah Desember 2024 - Rp 7.500-8.500/Liter"
        description="Update harga minyak jelantah Desember 2024: Rp 7.500-8.500/liter tergantung kualitas & volume. Harga naik signifikan karena demand tinggi. Tips dapat harga terbaik."
        image="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761963251/jelantahgo_hero_12_qu8bdm.webp"
        datePublished="2024-12-01"
        dateModified="2024-12-28"
        articleUrl="https://jelantahgo.com/blog/harga-jelantah-oktober-2025"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://jelantahgo.com' },
          { name: 'Blog', url: 'https://jelantahgo.com/blog' },
          { name: 'Update Harga Minyak Jelantah Desember 2024', url: 'https://jelantahgo.com/blog/harga-jelantah-oktober-2025' },
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
              🔥 Update Harga Minyak Jelantah Desember 2024: Rp 7.500-8.500/Liter!
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              <strong>HARGA NAIK DRASTIS!</strong> Demand tinggi untuk biodiesel membuat harga jelantah melambung tinggi. Jual sekarang dapat harga maksimal!
            </p>
            <p className="text-sm text-white/80 mt-2">Terakhir diperbarui: 28 Desember 2024</p>
          </div>
        </div>
      </section>
      {/* Image */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <Image
            src="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761963251/jelantahgo_hero_12_qu8bdm.webp"
            alt="Update Harga Minyak Jelantah Desember 2024 - Rp 7.500-8.500/Liter"
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
              Harga minyak jelantah di Indonesia terus mengalami fluktuasi seiring dengan perubahan kondisi pasar global dan domestik. Memahami tren harga dan faktor-faktor yang mempengaruhinya akan membantu Anda menjual jelantah pada waktu yang tepat untuk mendapatkan keuntungan maksimal. Artikel ini adalah bagian dari <Link href="/blog/panduan-jual-minyak-jelantah" className="text-[#0F3D2E] font-semibold hover:underline">panduan lengkap jual minyak jelantah</Link> yang kami sediakan.
            </p>

            {/* Harga */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-6 h-6 text-[#0F3D2E]" />
                <h2 className="text-3xl font-bold text-[#0F3D2E]">Harga Minyak Jelantah Oktober 2025</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="card-premium bg-[#E8F0E3] text-center">
                  <p className="text-sm text-gray-600 mb-2">Volume Kecil</p>
                  <p className="text-3xl font-bold text-[#0F3D2E] mb-1">Rp 7.000</p>
                  <p className="text-sm text-gray-600">per liter</p>
                  <p className="text-xs text-gray-500 mt-2">(20-40 liter)</p>
                </div>
                <div className="card-premium bg-gradient-to-br from-[#E8F0E3] to-[#D9E3D3] text-center border-2 border-[#0F3D2E]">
                  <p className="text-sm text-gray-600 mb-2">Volume Menengah</p>
                  <p className="text-3xl font-bold text-[#0F3D2E] mb-1">Rp 7.500</p>
                  <p className="text-sm text-gray-600">per liter</p>
                  <p className="text-xs text-gray-500 mt-2">(50-100 liter)</p>
                </div>
                <div className="card-premium bg-[#E8F0E3] text-center">
                  <p className="text-sm text-gray-600 mb-2">Volume Besar</p>
                  <p className="text-3xl font-bold text-[#0F3D2E] mb-1">Rp 8.000</p>
                  <p className="text-sm text-gray-600">per liter</p>
                  <p className="text-xs text-gray-500 mt-2">(100+ liter)</p>
                </div>
              </div>

              <div className="card-premium bg-yellow-50 border-l-4 border-yellow-500">
                <div className="flex items-start gap-3">
                  <Info className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-700 font-semibold mb-2">Catatan Penting:</p>
                    <p className="text-gray-700 leading-relaxed">
                      Harga dapat bervariasi tergantung pada lokasi, kualitas jelantah, dan pengepul. Harga di atas adalah estimasi berdasarkan pasar Oktober 2025. Untuk harga pasti, silakan hubungi pengepul terpercaya atau kunjungi halaman <Link href="/pricing" className="text-[#0F3D2E] font-semibold hover:underline">harga kami</Link>.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Faktor */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-[#0F3D2E]" />
                <h2 className="text-3xl font-bold text-[#0F3D2E]">Faktor yang Mempengaruhi Harga Jelantah</h2>
              </div>

              <div className="space-y-4">
                <div className="card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">1. Volume Penjualan</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Semakin besar volume yang Anda jual, semakin tinggi harga per liternya. Pengepul memberikan harga lebih tinggi untuk pasokan dalam jumlah besar karena lebih efisien secara logistik.
                  </p>
                </div>

                <div className="card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">2. Kualitas Jelantah</h3>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    Kualitas jelantah ditentukan oleh:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Kadar FFA (Free Fatty Acid) - semakin rendah semakin baik</li>
                    <li>Kemurnian - bebas dari air dan kontaminan</li>
                    <li>Kondisi fisik - tidak terlalu gelap atau berbau tengik</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    Jelantah berkualitas tinggi bisa mendapatkan harga hingga Rp 500-1.000 per liter lebih tinggi dari jelantah berkualitas rendah.
                  </p>
                </div>

                <div className="card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">3. Fluktuasi Harga CPO Global</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Harga minyak sawit mentah (CPO) di pasar global secara langsung mempengaruhi harga jelantah. Ketika harga CPO tinggi, permintaan akan jelantah sebagai bahan baku alternatif juga meningkat, sehingga harga jelantah ikut naik.
                  </p>
                </div>

                <div className="card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">4. Musim & Permintaan Ekspor</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Bulan Oktober-Desember biasanya memiliki harga yang lebih tinggi karena meningkatnya permintaan dari Eropa untuk biodiesel pada musim dingin. Baca lebih lanjut di artikel kami tentang <Link href="/blog/waktu-terbaik-jual-jelantah" className="text-[#0F3D2E] font-semibold hover:underline">waktu terbaik untuk menjual jelantah</Link>.
                  </p>
                </div>

                <div className="card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">5. Lokasi & Aksesibilitas</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Lokasi yang sulit dijangkau atau sangat jauh dari gudang pengepul mungkin akan dikenakan sedikit penyesuaian harga untuk mengkompensasi biaya transportasi.
                  </p>
                </div>
              </div>
            </section>

            {/* Tips */}
            <div className="card-premium bg-[#E8F0E3] border-l-4 border-l-[#0F3D2E]">
              <h3 className="text-2xl font-bold text-[#0F3D2E] mb-4">Tips untuk Mendapatkan Harga Terbaik</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Kumpulkan Volume Besar:</strong> Menjual dalam jumlah besar akan memberikan harga yang lebih baik</li>
                <li><strong>Jaga Kualitas:</strong> Simpan jelantah dengan benar untuk menjaga kualitasnya</li>
                <li><strong>Bandingkan Harga:</strong> Jangan ragu untuk membandingkan harga dari beberapa pengepul</li>
                <li><strong>Pilih Waktu yang Tepat:</strong> Pertimbangkan untuk menahan jelantah hingga akhir tahun jika memungkinkan</li>
                <li><strong>Bangun Hubungan Baik:</strong> Pengepul loyal sering mendapatkan harga yang lebih baik</li>
              </ul>
            </div>

            {/* CTA */}
            <div className="card-premium bg-gradient-to-br from-[#E8F0E3] to-[#D9E3D3] border-l-4 border-l-[#0F3D2E] text-center mt-12">
              <h2 className="text-2xl font-bold text-[#0F3D2E] mb-4">
                Ingin Tahu Harga Terbaru?
              </h2>
              <p className="text-gray-700 mb-6">
                Harga dapat berubah seiring waktu. Untuk mendapatkan informasi harga terbaru dan penawaran terbaik, hubungi kami sekarang.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/pricing"
                  className="inline-block bg-[#0F3D2E] text-white hover:bg-[#134E3A] px-8 py-4 rounded-card font-bold text-lg transition-smooth shadow-soft-lg hover:shadow-soft-xl"
                >
                  Lihat Harga Lengkap →
                </Link>
                <a
                  href="https://wa.me/6285183033995?text=Halo%20JelantahGO,%20saya%20ingin%20tanya%20harga%20minyak%20jelantah"
                  target="_blank"
                  rel="noopener"
                  className="inline-block bg-[#25D366] text-white hover:bg-[#20BA5A] px-8 py-4 rounded-card font-bold text-lg transition-smooth shadow-soft-lg hover:shadow-soft-xl"
                >
                  Hubungi via WhatsApp
                </a>
              </div>
            </div>
              </div>

            {/* Article Footer */}
            <BlogArticleFooter currentSlug="harga-jelantah-oktober-2025" />
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
