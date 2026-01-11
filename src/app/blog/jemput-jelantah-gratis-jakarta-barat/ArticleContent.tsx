'use client'

import Image from 'next/image'
import Link from 'next/link'
import BlogSidebar from '@/components/BlogSidebar'
import BlogArticleFooter from '@/components/BlogArticleFooter'
import ArticleSchema from '@/components/ArticleSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { Truck, MapPin, CheckCircle, Users } from 'lucide-react'

export default function ArticleContent() {
  return (
    <>
      <ArticleSchema
        title="Jemput Jelantah Gratis Jakarta Barat Rp 7.500-8.500/L - Response 5-30 Menit"
        description="Jemput minyak jelantah gratis Jakarta Barat bayar premium Rp 7.500-8.500/liter! Melayani Cengkareng, Kalideres, Kembangan, Kebon Jeruk. Response 5-30 menit, bayar tunai instant."
        image="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163997/jelantahgo_12_owxvlk.webp"
        datePublished="2024-12-20"
        dateModified="2024-12-28"
        articleUrl="https://jelantahgo.com/blog/jemput-jelantah-gratis-jakarta-barat"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://jelantahgo.com' },
          { name: 'Blog', url: 'https://jelantahgo.com/blog' },
          { name: 'Layanan Jemput Jelantah Gratis di Jakarta Barat', url: 'https://jelantahgo.com/blog/jemput-jelantah-gratis-jakarta-barat' },
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
              Layanan Jemput Jelantah Gratis di Jakarta Barat
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Solusi Praktis untuk Warga & UKM
            </p>
            <p className="text-sm text-white/80 mt-2">Terakhir diperbarui: 12 November 2025</p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <Image
            src="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761163997/jelantahgo_12_owxvlk.webp"
            alt="Layanan Jemput Jelantah Gratis di Jakarta Barat"
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
              Bagi warga dan pelaku Usaha Kecil Menengah (UKM) di Jakarta Barat, dari padatnya perumahan di Cengkareng hingga pusat kuliner di sekitar Kebon Jeruk, mengelola minyak jelantah seringkali menjadi dilema. Dibuang ke selokan? Itu berarti mengundang masalah pipa mampet dan bau. Disimpan terus-menerus? Memakan tempat dan berisiko tumpah.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Kami di JelantahGO memahami sepenuhnya tantangan ini. Oleh karena itu, kami merancang sebuah layanan yang menjawab semua keresahan Anda: <strong>layanan jemput jelantah gratis di seluruh wilayah Jakarta Barat</strong>. Ini adalah bagian dari komitmen kami yang lebih besar untuk mempermudah proses penjualan minyak jelantah di seluruh Jakarta. Panduan ini adalah bagian dari <Link href="/blog/jual-minyak-jelantah-jakarta" className="text-[#0F3D2E] font-semibold hover:underline">panduan lengkap jual minyak jelantah Jakarta</Link>.
            </p>

            {/* Mengapa Jakbar */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#0F3D2E] mb-6">Mengapa Layanan Jemput Gratis Sangat Penting di Jakarta Barat?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Jakarta Barat adalah wilayah dengan karakteristik yang sangat beragam. Memahami ini adalah kunci kami dalam merancang layanan yang relevan:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="card-premium">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-6 h-6 text-[#0F3D2E]" />
                    <h3 className="text-xl font-bold text-[#0F3D2E]">Kepadatan Perumahan Tinggi</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Area seperti Cengkareng, Kalideres, dan Kembangan adalah rumah bagi jutaan penduduk. Layanan jemput langsung ke rumah menghilangkan hambatan bagi para ibu rumah tangga untuk berpartisipasi dalam daur ulang.
                  </p>
                </div>

                <div className="card-premium">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-6 h-6 text-[#0F3D2E]" />
                    <h3 className="text-xl font-bold text-[#0F3D2E]">Ribuan UKM Kuliner</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Dari warung makan di sekitar kampus (Grogol Petamburan) hingga pedagang kaki lima di area pasar (Taman Sari), UKM adalah tulang punggung ekonomi Jakbar. Layanan jemput gratis memungkinkan mereka untuk mendapatkan pendapatan tambahan tanpa mengganggu jam operasional yang sibuk.
                  </p>
                </div>

                <div className="card-premium">
                  <div className="flex items-center gap-3 mb-3">
                    <Truck className="w-6 h-6 text-[#0F3D2E]" />
                    <h3 className="text-xl font-bold text-[#0F3D2E]">Tantangan Lalu Lintas</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Kami tahu betapa berharganya waktu Anda. Menghabiskan waktu di tengah kemacetan Jakarta Barat hanya untuk mengantar beberapa liter jelantah tentu tidak efisien. Biarkan kami yang menghadapi lalu lintas untuk Anda.
                  </p>
                </div>
              </div>
            </section>

            {/* Cara Kerja */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#0F3D2E] mb-6">Bagaimana Layanan Jemput Gratis Bekerja?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Prosesnya sangat sederhana dan tanpa ribet:
              </p>
              <div className="space-y-4">
                <div className="card-premium">
                  <div className="flex items-start gap-3">
                    <div className="bg-[#0F3D2E] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0F3D2E] mb-2">Hubungi Kami</h3>
                      <p className="text-gray-700">Hubungi JelantahGO via WhatsApp atau telepon untuk memberitahu volume jelantah yang Anda miliki dan alamat lengkap lokasi Anda.</p>
                    </div>
                  </div>
                </div>

                <div className="card-premium">
                  <div className="flex items-start gap-3">
                    <div className="bg-[#0F3D2E] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0F3D2E] mb-2">Tim Kami Datang</h3>
                      <p className="text-gray-700">Kami akan mengatur jadwal penjemputan yang sesuai dengan waktu luang Anda. Tim kami akan datang dengan peralatan lengkap.</p>
                    </div>
                  </div>
                </div>

                <div className="card-premium">
                  <div className="flex items-start gap-3">
                    <div className="bg-[#0F3D2E] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0F3D2E] mb-2">Timbang & Bayar</h3>
                      <p className="text-gray-700">Kami akan menimbang jelantah Anda dengan timbangan digital yang terkalibrasi, dan Anda langsung menerima pembayaran tunai di tempat. Tidak ada biaya penjemputan sama sekali!</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
              </div>

            {/* Article Footer */}
            <BlogArticleFooter currentSlug="jemput-jelantah-gratis-jakarta-barat" />
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

      {/* Additional Content */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                {/* Syarat */}
                <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#0F3D2E] mb-6">Syarat untuk Layanan Jemput Gratis</h2>
              <div className="card-premium bg-[#E8F0E3] border-l-4 border-l-[#0F3D2E]">
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Volume Minimal:</strong> Minimal 5 liter untuk penjemputan gratis. Jika kurang dari 5 liter, kami masih bisa menjemput, namun mungkin akan dikenakan biaya transport atau dikumpulkan dengan tetangga/komunitas.</li>
                  <li><strong>Lokasi Terjangkau:</strong> Kami melayani seluruh Jakarta Barat. Untuk area yang sangat jauh atau sulit dijangkau, silakan konsultasikan terlebih dahulu.</li>
                  <li><strong>Jelantah Berkualitas:</strong> Jelantah harus bersih, tidak tercampur air atau ampas makanan yang berlebihan.</li>
                </ul>
              </div>
            </section>

            {/* Area Layanan */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-[#0F3D2E]" />
                <h2 className="text-3xl font-bold text-[#0F3D2E]">Area Layanan Jakarta Barat</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                JelantahGO melayani seluruh wilayah Jakarta Barat, termasuk:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="card-premium bg-[#E8F0E3]">
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Cengkareng</li>
                    <li>Kalideres</li>
                    <li>Kembangan</li>
                    <li>Kebon Jeruk</li>
                    <li>Grogol Petamburan</li>
                    <li>Taman Sari</li>
                  </ul>
                </div>
                <div className="card-premium bg-[#E8F0E3]">
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Tambora</li>
                    <li>Palmerah</li>
                    <li>Kebayoran Lama</li>
                    <li>Dan seluruh wilayah Jakbar</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Keuntungan */}
            <div className="card-premium bg-[#E8F0E3] border-l-4 border-l-[#0F3D2E]">
              <h3 className="text-2xl font-bold text-[#0F3D2E] mb-4">Keuntungan Layanan Jemput Gratis</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Tidak Perlu Keluar Rumah:</strong> Anda tidak perlu repot-repot mengantar jelantah. Tim kami yang akan datang ke tempat Anda.</li>
                <li><strong>Tidak Ada Biaya:</strong> Penjemputan benar-benar gratis, tanpa biaya transport atau biaya tersembunyi apapun.</li>
                <li><strong>Pembayaran Tunai Langsung:</strong> Setelah penimbangan, Anda langsung menerima pembayaran tunai di tempat.</li>
                <li><strong>Profesional & Bersih:</strong> Tim kami terlatih untuk bekerja dengan bersih dan tidak meninggalkan bekas atau bau di area penjemputan.</li>
              </ul>
            </div>

            {/* CTA */}
            <div className="card-premium bg-gradient-to-br from-[#E8F0E3] to-[#D9E3D3] border-l-4 border-l-[#0F3D2E] text-center mt-12">
              <h2 className="text-2xl font-bold text-[#0F3D2E] mb-4">
                Dapatkan Layanan Jemput Gratis Sekarang!
              </h2>
              <p className="text-gray-700 mb-6">
                Jangan biarkan jelantah menumpuk di dapur Anda. Hubungi JelantahGO sekarang dan dapatkan layanan jemput gratis untuk seluruh wilayah Jakarta Barat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/blog/jual-minyak-jelantah-jakarta"
                  className="inline-block bg-[#0F3D2E] text-white hover:bg-[#134E3A] px-8 py-4 rounded-card font-bold text-lg transition-smooth shadow-soft-lg hover:shadow-soft-xl"
                >
                  Panduan Lengkap Jakarta →
                </Link>
                <a
                  href="https://wa.me/6285183033995?text=Halo%20JelantahGO,%20saya%20di%20Jakarta%20Barat%20dan%20ingin%20menggunakan%20layanan%20jemput%20gratis"
                  target="_blank"
                  rel="noopener"
                  className="inline-block bg-[#25D366] text-white hover:bg-[#20BA5A] px-8 py-4 rounded-card font-bold text-lg transition-smooth shadow-soft-lg hover:shadow-soft-xl"
                >
                  Hubungi JelantahGO Sekarang
                </a>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
