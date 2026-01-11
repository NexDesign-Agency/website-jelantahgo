'use client'

import Image from 'next/image'
import Link from 'next/link'
import BlogSidebar from '@/components/BlogSidebar'
import BlogArticleFooter from '@/components/BlogArticleFooter'
import ArticleSchema from '@/components/ArticleSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { MapPin, Clock, Award, Truck } from 'lucide-react'

export default function JakartaSelatanPage() {
  return (
    <>
      <ArticleSchema
        title="Pengepul Jelantah Jakarta Selatan - Bayar Rp 7.500-8.500/L Tunai Langsung"
        description="Pengepul minyak jelantah Jakarta Selatan bayar premium Rp 7.500-8.500/liter! Penjemputan gratis ≥20L di Kemang, Senopati, Blok M, Kebayoran. Response 5-30 menit, bayar instant."
        image="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163995/jelantahgo_13_krbsky.webp"
        datePublished="2024-12-18"
        dateModified="2024-12-28"
        articleUrl="https://jelantahgo.com/blog/pengepul-jelantah-jakarta-selatan"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://jelantahgo.com' },
          { name: 'Blog', url: 'https://jelantahgo.com/blog' },
          { name: 'Pengepul Jelantah Terpercaya di Jakarta Selatan', url: 'https://jelantahgo.com/blog/pengepul-jelantah-jakarta-selatan' },
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
              Pengepul Jelantah Terpercaya di Jakarta Selatan
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Solusi Cepat untuk Kafe & Resto Anda
            </p>
            <p className="text-sm text-white/80 mt-2">Terakhir diperbarui: 10 November 2025</p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <Image
            src="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761163995/jelantahgo_13_krbsky.webp"
            alt="Pengepul Jelantah Terpercaya di Jakarta Selatan"
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
              Jakarta Selatan. Sebuah nama yang identik dengan gaya hidup, tren kuliner, dan denyut bisnis yang tidak pernah berhenti. Dari kafe-kafe estetis di Kemang, restoran fine dining di Senopati, hingga surga jajanan kekinian di Tebet, setiap sudutnya adalah panggung bagi para pelaku industri F&B.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Bagi bisnis di Jaksel, pengelolaan limbah jelantah bukan sekadar masalah kebersihan, melainkan sebuah tantangan operasional yang kompleks. Anda butuh solusi yang cepat, tidak mengganggu estetika tempat usaha, dan profesional. Artikel ini adalah bagian dari <Link href="/blog/jual-minyak-jelantah-jakarta" className="text-[#0F3D2E] font-semibold hover:underline">panduan lengkap jual minyak jelantah Jakarta</Link>.
            </p>

            {/* Kebutuhan Jaksel */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#0F3D2E] mb-6">Mengapa Bisnis F&B di Jakarta Selatan Butuh Partner Pengepul Spesialis?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Beroperasi di Jakarta Selatan berbeda. Ada tiga faktor unik yang membuat manajemen limbah jelantah di sini memerlukan penanganan khusus:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="card-premium">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-6 h-6 text-[#0F3D2E]" />
                    <h3 className="text-xl font-bold text-[#0F3D2E]">Kecepatan & Ritme Tinggi</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Dapur di kafe Senopati atau restoran di Blok M beroperasi dengan kecepatan tinggi. Anda tidak punya waktu untuk menunggu pengepul yang tidak pasti jadwalnya atau proses penjemputan yang lambat dan berantakan. Anda butuh layanan "sat-set" yang bisa diandalkan.
                  </p>
                </div>

                <div className="card-premium">
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="w-6 h-6 text-[#0F3D2E]" />
                    <h3 className="text-xl font-bold text-[#0F3D2E]">Pentingnya Citra & Kebersihan</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Estetika adalah segalanya. Drum penampungan yang kotor, bau, atau tumpahan minyak di area loading dock dapat merusak citra premium yang susah payah Anda bangun. Partner Anda harus bekerja dengan standar kebersihan yang setara dengan standar restoran Anda.
                  </p>
                </div>

                <div className="card-premium">
                  <div className="flex items-center gap-3 mb-3">
                    <Truck className="w-6 h-6 text-[#0F3D2E]" />
                    <h3 className="text-xl font-bold text-[#0F3D2E]">Tantangan Logistik & Akses</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Banyak lokasi kuliner populer di Jaksel berada di jalan-jalan yang padat atau gang-gang sempit (seperti di area Kemang atau Cipete). Partner pengumpul Anda harus memiliki armada dan strategi untuk menjangkau lokasi Anda tanpa menciptakan drama kemacetan.
                  </p>
                </div>
              </div>
            </section>

            {/* Area Layanan */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-[#0F3D2E]" />
                <h2 className="text-3xl font-bold text-[#0F3D2E]">Area Layanan Jakarta Selatan</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                JelantahGO melayani seluruh wilayah Jakarta Selatan, termasuk:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="card-premium bg-[#E8F0E3]">
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Kemang</li>
                    <li>Senopati</li>
                    <li>Blok M</li>
                    <li>Tebet</li>
                    <li>Mampang</li>
                    <li>Kebayoran Baru</li>
                  </ul>
                </div>
                <div className="card-premium bg-[#E8F0E3]">
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Kebayoran Lama</li>
                    <li>Cilandak</li>
                    <li>Jagakarsa</li>
                    <li>Pasar Minggu</li>
                    <li>Cipete</li>
                    <li>Dan seluruh wilayah Jaksel</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Keuntungan */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#0F3D2E] mb-6">Mengapa Memilih JelantahGO untuk Bisnis Anda di Jakarta Selatan?</h2>
              <div className="space-y-4">
                <div className="card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-2">Penjemputan Cepat & Tepat Waktu</h3>
                  <p className="text-gray-700">Kami memahami ritme bisnis F&B di Jakarta Selatan. Tim kami dijadwalkan dengan profesional untuk memastikan penjemputan tepat waktu tanpa mengganggu operasional dapur Anda.</p>
                </div>
                <div className="card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-2">Standar Kebersihan Tinggi</h3>
                  <p className="text-gray-700">Setiap tim kami dilengkapi dengan peralatan yang bersih dan prosedur yang ketat untuk memastikan tidak ada tumpahan atau bau yang mengganggu lingkungan restoran Anda.</p>
                </div>
                <div className="card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-2">Harga Kompetitif & Transparan</h3>
                  <p className="text-gray-700">Kami menawarkan harga yang kompetitif dengan sistem penimbangan yang jujur dan transparan. Tidak ada permainan angka atau manipulasi timbangan.</p>
                </div>
                <div className="card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-2">Pembayaran Tunai di Tempat</h3>
                  <p className="text-gray-700">Setelah penimbangan selesai, Anda langsung menerima pembayaran tunai. Tidak ada termin atau menunggu pembayaran.</p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <div className="card-premium bg-gradient-to-br from-[#E8F0E3] to-[#D9E3D3] border-l-4 border-l-[#0F3D2E] text-center mt-12">
              <h2 className="text-2xl font-bold text-[#0F3D2E] mb-4">
                Solusi Profesional untuk Bisnis F&B Jakarta Selatan
              </h2>
              <p className="text-gray-700 mb-6">
                Jangan biarkan pengelolaan limbah jelantah menjadi beban operasional Anda. Serahkan kepada profesional yang memahami kebutuhan bisnis F&B di Jakarta Selatan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/blog/jual-minyak-jelantah-jakarta"
                  className="inline-block bg-[#0F3D2E] text-white hover:bg-[#134E3A] px-8 py-4 rounded-card font-bold text-lg transition-smooth shadow-soft-lg hover:shadow-soft-xl"
                >
                  Panduan Lengkap Jakarta →
                </Link>
                <a
                  href="https://wa.me/6285183033995?text=Halo%20JelantahGO,%20saya%20bisnis%20di%20Jakarta%20Selatan%20dan%20butuh%20pengepul%20jelantah"
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
            <BlogArticleFooter currentSlug="pengepul-jelantah-jakarta-selatan" />
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

