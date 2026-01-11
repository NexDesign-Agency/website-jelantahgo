'use client'

import Image from 'next/image'
import Link from 'next/link'
import BlogSidebar from '@/components/BlogSidebar'
import BlogArticleFooter from '@/components/BlogArticleFooter'
import ArticleSchema from '@/components/ArticleSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { Award, TrendingUp, Users, Heart } from 'lucide-react'

export default function KisahSuksesIbuRinaPage() {
  return (
    <>
      <ArticleSchema
        title="Kisah Sukses Ibu Rina: Omzet 4-4.5 Juta/Bulan dengan Harga Rp 7.500-8.500/L"
        description="Kisah inspiratif Ibu Rina: dari 15L pertama hingga omzet 4-4.5 juta/bulan! Dengan harga baru Rp 7.500-8.500/L, profit naik 25%. Strategi membangun usaha pengepul jelantah dari rumah."
        image="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163996/jelantahgo_17_fuusoh.webp"
        datePublished="2025-10-14"
        dateModified="2025-10-14"
        articleUrl="https://jelantahgo.com/blog/kisah-sukses-ibu-rina"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://jelantahgo.com' },
          { name: 'Blog', url: 'https://jelantahgo.com/blog' },
          { name: 'Kisah Sukses Ibu Rina: Mitra Pengepul Omzet Jutaan', url: 'https://jelantahgo.com/blog/kisah-sukses-ibu-rina' },
        ]}
      />
      {/* Hero Section */}
      <section className="hero-bg-dots py-20 lg:py-28">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-[#D9E3D3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Bisnis & Kemitraan Jelantah
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Kisah Sukses Ibu Rina
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Dari Ibu Rumah Tangga Jadi Pengepul Jelantah Sukses
            </p>
            <p className="text-sm text-white/80 mt-2">Dipublikasikan: 5 Oktober 2025</p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <Image
            src="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761163996/jelantahgo_17_fuusoh.webp"
            alt="Kisah Sukses Ibu Rina"
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
              Di tengah kesibukannya sebagai seorang ibu rumah tangga di Tangerang, Ibu Rina menemukan sebuah peluang bisnis yang tidak hanya menambah pundi-pundi keluarga tetapi juga berkontribusi pada kelestarian lingkungan. Kisahnya adalah bukti nyata bahwa dari dapur rumah pun, seorang perempuan bisa membangun usaha yang sukses dan menginspirasi banyak orang.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Ini adalah perjalanan Ibu Rina, dari mengumpulkan jelantah tetangga hingga menjadi mitra pengepul sukses dengan omzet jutaan rupiah per bulan. Kisah inspiratif ini adalah contoh nyata dari <Link href="/blog/peluang-bisnis-pengepul-jelantah" className="text-[#0F3D2E] font-semibold hover:underline">peluang bisnis pengepul jelantah</Link> yang bisa dimulai dari skala kecil.
            </p>

            {/* Awal Mula */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-[#0F3D2E]" />
                <h2 className="text-3xl font-bold text-[#0F3D2E]">Awal Mula dari Kepedulian Sederhana</h2>
              </div>
              <div className="card-premium bg-[#E8F0E3] border-l-4 border-l-[#0F3D2E]">
                <p className="text-gray-700 leading-relaxed italic mb-4">
                  "Awalnya itu cuma iseng-iseng saja, Mbak. Lihat tetangga sering buang minyak sisa ke selokan, saya jadi mikir, kan sayang. Selain bikin mampet, katanya juga merusak lingkungan," kenang Ibu Rina sambil tersenyum.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Berbekal kepedulian itu, ia mulai mengetuk pintu tetangga terdekat, menawarkan diri untuk menampung jelantah mereka. "Saya cuma modal jeriken bekas minyak goreng. Alhamdulillah, tetangga pada mau," tambahnya.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Bulan pertama, ia hanya berhasil mengumpulkan sekitar 15 liter. Ia menjualnya ke pengepul kecil yang datang sesekali dengan harga yang tidak menentu. "Kadang dihargai murah, kadang pengepulnya tidak datang. Sempat mau berhenti juga," ujarnya.
                </p>
              </div>
            </section>

            {/* Titik Balik */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-[#0F3D2E]" />
                <h2 className="text-3xl font-bold text-[#0F3D2E]">Titik Balik: Bergabung dengan JelantahGO</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Perubahan besar datang ketika ia menemukan informasi tentang program kemitraan JelantahGO di media sosial. Ia memberanikan diri untuk mendaftar. "Saya pikir, apa salahnya dicoba? Ternyata prosesnya mudah sekali," katanya.
              </p>
              <div className="card-premium bg-[#E8F0E3] border-l-4 border-l-[#0F3D2E]">
                <p className="text-gray-700 leading-relaxed italic mb-4">
                  "Dari JelantahGO saya dapat dukungan penuh. Dikasih jeriken standar gratis, spanduk untuk dipasang di depan rumah, dan yang paling penting, ada kepastian penjemputan dan harga. Harganya pun lebih tinggi dari pengepul biasa," jelasnya antusias.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Dengan identitas sebagai mitra resmi, kepercayaan warga di lingkungannya pun meningkat.
                </p>
              </div>
            </section>

            {/* Meraih Omzet */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-[#0F3D2E]" />
                <h2 className="text-3xl font-bold text-[#0F3D2E]">Meraih Omzet Jutaan Rupiah</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Jaringan Ibu Rina berkembang pesat. Dari yang awalnya hanya tetangga sebelah, kini ia menjadi koordinator untuk tiga Rukun Tetangga (RT). Ia bahkan berhasil menjalin kerja sama dengan beberapa warung makan dan penjual gorengan di sekitar perumahannya.
              </p>
              <div className="card-premium bg-gradient-to-br from-[#E8F0E3] to-[#D9E3D3] text-center">
                <p className="text-3xl font-bold text-[#0F3D2E] mb-2">Rp 3 - 3,5 Juta</p>
                <p className="text-gray-700">Penghasilan Tambahan per Bulan</p>
                <p className="text-sm text-gray-600 mt-2">Dari rata-rata 400 liter per bulan</p>
              </div>
              <p className="text-gray-700 leading-relaxed mt-4">
                Dalam waktu enam bulan, volume pengumpulannya meroket dari 15 liter menjadi rata-rata 400 liter per bulan. Dengan harga beli dari JelantahGO yang kompetitif, Ibu Rina kini bisa mengantongi penghasilan tambahan bersih sekitar <strong>Rp 3 juta hingga Rp 3,5 juta setiap bulannya</strong>.
              </p>
              <div className="card-premium bg-[#E8F0E3] border-l-4 border-l-[#0F3D2E] mt-4">
                <p className="text-gray-700 leading-relaxed italic">
                  "Alhamdulillah, lebih dari cukup untuk tambahan uang belanja dan jajan anak-anak, tanpa harus meninggalkan rumah," tuturnya bangga.
                </p>
              </div>
            </section>

            {/* Kunci Sukses */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-[#0F3D2E]" />
                <h2 className="text-3xl font-bold text-[#0F3D2E]">Kunci Sukses Ibu Rina</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Ketekunan</h3>
                  <p className="text-gray-700">Tidak menyerah meskipun di awal hasilnya sedikit. Konsistensi dalam mengumpulkan dan menjalin relasi adalah kunci.</p>
                </div>
                <div className="card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Komunikasi</h3>
                  <p className="text-gray-700">Aktif bersosialisasi dengan tetangga dan pemilik usaha kuliner. Membangun hubungan baik dan kepercayaan.</p>
                </div>
                <div className="card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Profesionalisme</h3>
                  <p className="text-gray-700">Menjadi mitra resmi JelantahGO meningkatkan kepercayaan dan memberikan citra yang lebih profesional.</p>
                </div>
                <div className="card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Edukasi</h3>
                  <p className="text-gray-700">Selalu berbagi informasi tentang manfaat mengumpulkan jelantah kepada jaringannya. Menciptakan kesadaran lingkungan.</p>
                </div>
              </div>
            </section>

            {/* Kesimpulan */}
            <div className="card-premium bg-gradient-to-br from-[#E8F0E3] to-[#D9E3D3] border-l-4 border-l-[#0F3D2E] text-center mt-12">
              <h2 className="text-2xl font-bold text-[#0F3D2E] mb-4">
                Anda Juga Bisa Sukses Seperti Ibu Rina!
              </h2>
              <p className="text-gray-700 mb-6">
                Kisah Ibu Rina adalah cerminan bahwa peluang bisa datang dari mana saja, bahkan dari limbah dapur sekalipun. Kegigihan dan kemauan untuk mencoba hal baru telah mengubah statusnya dari sekadar ibu rumah tangga menjadi seorang wirausahawati lingkungan yang sukses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/mitra"
                  className="inline-block bg-[#0F3D2E] text-white hover:bg-[#134E3A] px-8 py-4 rounded-card font-bold text-lg transition-smooth shadow-soft-lg hover:shadow-soft-xl"
                >
                  Daftar Jadi Mitra →
                </Link>
                <Link
                  href="/blog/peluang-bisnis-pengepul-jelantah"
                  className="inline-block bg-white text-[#0F3D2E] border-2 border-[#0F3D2E] hover:bg-[#F9F8F6] px-8 py-4 rounded-card font-bold text-lg transition-smooth shadow-soft hover:shadow-soft-lg"
                >
                  Mulai Bisnis Pengepul Jelantah →
                </Link>
              </div>
            </div>
            </div>

            {/* Article Footer */}
            <BlogArticleFooter currentSlug="kisah-sukses-ibu-rina" />
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

