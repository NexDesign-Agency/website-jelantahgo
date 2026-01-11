import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import BlogSidebar from '@/components/BlogSidebar'
import BlogArticleFooter from '@/components/BlogArticleFooter'
import ArticleSchema from '@/components/ArticleSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Jual Minyak Jelantah Tangerang & Tangsel | JelantahGO',
  description: 'Jual minyak jelantah Tangerang Raya harga premium Rp 7.500-8.500/liter! Melayani BSD, Serpong, Karawaci, Ciledug. Penjemputan gratis ≥40L.',
  alternates: {
    canonical: 'https://jelantahgo.com/blog/jual-minyak-jelantah-tangerang',
  },
  openGraph: {
    title: 'Jual Minyak Jelantah Tangerang & Tangsel | JelantahGO',
    description: 'Jual minyak jelantah Tangerang Raya harga premium Rp 7.500-8.500/liter! Melayani BSD, Serpong, Karawaci, Ciledug. Penjemputan gratis ≥40L.',
    url: 'https://jelantahgo.com/blog/jual-minyak-jelantah-tangerang',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761963251/jelantahgo_hero_14_tvh1jt.webp',
        width: 1200,
        height: 630,
        alt: 'Jual Minyak Jelantah Tangerang & Tangsel',
      },
    ],
    locale: 'id_ID',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jual Minyak Jelantah Tangerang & Tangsel | JelantahGO',
    description: 'Jual minyak jelantah Tangerang Raya harga premium Rp 7.500-8.500/liter! Melayani BSD, Serpong, Karawaci, Ciledug. Penjemputan gratis ≥40L.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761963251/jelantahgo_hero_14_tvh1jt.webp'],
  },
}

export default function JualTangerangPage() {
  return (
    <>
      <ArticleSchema
        title="Jual Minyak Jelantah Tangerang & Tangsel 2025"
        description="Panduan spesifik untuk warga dan bisnis di Tangerang Raya (Kota, Tangsel, Kabupaten) yang ingin menjual jelantah dengan harga terbaik dan layanan profesional."
        image="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761963251/jelantahgo_hero_14_tvh1jt.webp"
        datePublished="2025-10-22"
        dateModified="2025-10-22"
        articleUrl="https://jelantahgo.com/blog/jual-minyak-jelantah-tangerang"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://jelantahgo.com' },
          { name: 'Blog', url: 'https://jelantahgo.com/blog' },
          { name: 'Jual Minyak Jelantah Tangerang', url: 'https://jelantahgo.com/blog/jual-minyak-jelantah-tangerang' },
        ]}
      />
      {/* Hero Section */}
      <section className="hero-bg-dots py-20 lg:py-28">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-[#D9E3D3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              ⭐ ARTIKEL PILAR LOKAL
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Jual Minyak Jelantah Tangerang & Tangsel
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Panduan Lengkap 2025
            </p>
          </div>
        </div>
      </section>
      {/* Image */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <Image
            src="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761963251/jelantahgo_hero_14_tvh1jt.webp"
            alt="Jual Minyak Jelantah Tangerang & Tangsel"
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
              Tangerang Raya—meliputi Kota Tangerang, Tangerang Selatan, dan Kabupaten Tangerang—adalah kawasan dengan pertumbuhan ekonomi yang pesat. Dengan banyaknya komplek perumahan modern, pusat bisnis, dan sentra kuliner, kawasan ini menghasilkan volume jelantah yang signifikan setiap harinya.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              JelantahGO melayani seluruh wilayah Tangerang Raya dengan sistem penjemputan gratis yang efisien. Artikel ini adalah panduan lengkap bagi Anda, baik sebagai warga maupun pebisnis di Tangerang, yang ingin menjual minyak jelantah dengan harga terbaik.
            </p>

            <div className="card-premium mb-8">
              <h2 className="text-2xl font-bold text-[#0F3D2E] mb-4">Layanan di Tangerang Raya</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-[#0F3D2E] mb-2">Kota Tangerang</h3>
                  <p className="text-gray-600 text-sm">
                    Kami melayani seluruh kecamatan di Kota Tangerang termasuk Tangerang Kota, Batu Ceper, Benda, Cibodas, Ciledug, Jatiuwung, Karawaci, Karang Tengah, Larangan, Neglasari, Periuk, dan Pinang.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-[#0F3D2E] mb-2">Tangerang Selatan</h3>
                  <p className="text-gray-600 text-sm">
                    Area BSD City, Serpong, Pamulang, Ciputat, Pondok Aren, Setu, dan sekitarnya dilayani dengan prioritas tinggi karena volume jelantah yang tinggi dari komplek perumahan dan pusat kuliner.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-[#0F3D2E] mb-2">Kabupaten Tangerang</h3>
                  <p className="text-gray-600 text-sm">
                    Wilayah seperti Balaraja, Cikupa, Curug, Legok, Pagedangan, Sepatan, Tigaraksa, dan sekitarnya juga dalam jangkauan layanan kami.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-premium bg-gradient-to-br from-[#F9F8F6] to-[#E8F0E3] border-l-4 border-l-[#0F3D2E] mb-8">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Studi Kasus: Program "Jelantah untuk Kas RT" di Cluster Avani, BSD City</h3>
              <p className="text-gray-700 leading-relaxed">
                Sebuah klaster di BSD dengan sekitar 100 rumah menghadapi dilema jelantah. Dengan inisiatif dari pengurus RT dan dukungan JelantahGO, mereka menempatkan dua drum 200L di dekat club house. Dalam sebulan, dengan partisipasi aktif dari warga, mereka berhasil mengumpulkan <strong>~350 liter</strong> jelantah. Dengan harga jual di tier volume besar, mereka mendapatkan pemasukan rutin lebih dari <strong>2,8 juta Rupiah per bulan</strong> untuk kas RT, yang digunakan untuk acara komunitas dan perbaikan fasilitas.
              </p>
            </div>

            <div className="card-premium bg-gradient-to-br from-[#E8F0E3] to-[#D9E3D3] border-l-4 border-l-[#0F3D2E] text-center">
              <h2 className="text-2xl font-bold text-[#0F3D2E] mb-4">
                Solusi Jelantah Anda di Tangerang & Tangsel
              </h2>
              <p className="text-gray-700 mb-6">
                Apapun skala kebutuhan Anda di Tangerang Raya, JelantahGO siap memberikan layanan yang cepat, profesional, dan menguntungkan. Hubungi kami untuk menjadwalkan penjemputan pertama Anda.
              </p>
              <a
                href="https://wa.me/6285183033995?text=Halo%20JelantahGO,%20saya%20di%20Tangerang%20dan%20ingin%20menjual%20jelantah."
                target="_blank"
                rel="noopener"
                className="inline-block bg-[#25D366] text-white hover:bg-[#128C7E] px-8 py-4 rounded-full font-bold text-lg transition-smooth shadow-soft-lg hover:shadow-soft-xl"
              >
                Hubungi Tim Tangerang
              </a>
            </div>
            </div>

            {/* Article Footer */}
            <BlogArticleFooter currentSlug="jual-minyak-jelantah-tangerang" />
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


