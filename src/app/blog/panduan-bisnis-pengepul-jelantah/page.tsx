"use client"

import Image from 'next/image'
import Link from 'next/link'
import BlogSidebar from '@/components/BlogSidebar'
import BlogArticleFooter from '@/components/BlogArticleFooter'
import ArticleSchema from '@/components/ArticleSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { BookOpen, Target, TrendingUp, CheckCircle } from 'lucide-react'

export default function PanduanBisnisPengepulPage() {
  return (
    <>
      <ArticleSchema
        title="Panduan Bisnis Pengepul Jelantah: Persiapan hingga Scale-Up"
        description="Panduan lengkap memulai bisnis pengepul minyak jelantah dari nol. Modal kecil, risiko rendah, pasar pasti. Tips persiapan, eksekusi, dan strategi scale-up bisnis pengepul."
        image="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761963250/jelantahgo_hero_7_rznf5j.webp"
        datePublished="2025-10-08"
        dateModified="2025-10-08"
        articleUrl="https://jelantahgo.com/blog/panduan-bisnis-pengepul-jelantah"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://jelantahgo.com' },
          { name: 'Blog', url: 'https://jelantahgo.com/blog' },
          { name: 'Panduan Bisnis Pengepul Jelantah', url: 'https://jelantahgo.com/blog/panduan-bisnis-pengepul-jelantah' },
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
              Panduan Memulai Bisnis Pengepul Jelantah
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Dari Persiapan hingga Scale-Up
            </p>
            <p className="text-sm text-white/80 mt-2">Terakhir diperbarui: 15 Oktober 2025</p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <Image
            src="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761963250/jelantahgo_hero_7_rznf5j.webp"
            alt="Panduan Memulai Bisnis Pengepul Jelantah"
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
              Melihat tumpukan jeriken berisi minyak jelantah mungkin bukan gambaran bisnis yang glamor, tetapi di baliknya tersimpan potensi keuntungan yang solid dengan dampak lingkungan yang positif. Bisnis sebagai pengepul jelantah adalah salah satu peluang usaha dengan modal minim, risiko rendah, dan pasar yang pasti.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Jika Anda mencari cara untuk memulai wirausaha yang fleksibel dan berkelanjutan, panduan ini akan memandu Anda langkah demi langkah. Artikel ini adalah bagian dari <Link href="/blog/peluang-bisnis-pengepul-jelantah" className="text-[#0F3D2E] font-semibold hover:underline">blueprint lengkap peluang bisnis pengepul jelantah 2025</Link>.
            </p>

            {/* Fase 1 */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-[#0F3D2E]" />
                <h2 className="text-3xl font-bold text-[#0F3D2E]">Fase 1: Persiapan - Fondasi Bisnis Anda</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Persiapan yang matang adalah kunci untuk menghindari kesalahan pemula. Jangan terburu-buru mengumpulkan jelantah sebelum Anda menyelesaikan tiga hal ini.
              </p>

              <div className="space-y-6">
                <div className="card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">1. Analisis Modal Awal (Sangat Minim)</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Kabar baiknya, Anda tidak butuh modal besar. Yang Anda perlukan adalah:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Wadah Pengumpul:</strong> Mulailah dengan 10-20 jeriken bekas minyak goreng ukuran 5 liter. Anda bisa memintanya dari tetangga atau warung. Modal: mendekati Rp 0.</li>
                    <li><strong>Alat Transportasi:</strong> Motor dengan keranjang atau pengikat sudah lebih dari cukup untuk memulai.</li>
                    <li><strong>Timbangan Digital:</strong> Investasi kecil yang krusial untuk transparansi. Timbangan gantung digital harganya terjangkau (sekitar Rp 50.000).</li>
                    <li><strong>Alat Saring:</strong> Saringan teh rapat atau kain bersih.</li>
                  </ul>
                </div>

                <div className="card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">2. Riset Pasar: Siapa Pembeli Akhir Anda?</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Ini adalah langkah paling vital. <strong>Jangan mulai mengumpulkan jelantah sebelum Anda tahu pasti akan menjualnya ke mana.</strong>
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Cari informasi tentang perusahaan pengolah biodiesel atau pengepul besar di kota Anda. Hubungi mereka, tanyakan harga beli, standar kualitas yang mereka terima, dan sistem pembayaran. Menjadi mitra perusahaan seperti <strong>JelantahGO</strong> adalah jalan pintas terbaik, karena memberikan kepastian harga dan penjemputan.
                  </p>
                </div>

                <div className="card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">3. Edukasi Diri tentang Kualitas</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Pelajari cara membedakan jelantah berkualitas baik. Poin utamanya adalah: bersih (bebas dari ampas dan sisa makanan), kering (tidak tercampur air), dan tidak berbau busuk. Kualitas menentukan harga jual Anda. Baca artikel kami tentang <Link href="/blog/cara-menyimpan-minyak-jelantah" className="text-[#0F3D2E] font-semibold hover:underline">cara menyimpan minyak jelantah yang benar</Link>.
                  </p>
                </div>
              </div>
            </section>

            {/* Fase 2 */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-[#0F3D2E]" />
                <h2 className="text-3xl font-bold text-[#0F3D2E]">Fase 2: Eksekusi - Mulai Mengumpulkan</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Setelah fondasi siap, saatnya beraksi.
              </p>

              <div className="space-y-4">
                <div className="card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-2">1. Bangun Jaringan Pemasok</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Mulailah dari lingkaran terdekat: keluarga, tetangga, dan teman. Kemudian, perluas ke target utama: warung makan, restoran kecil, kafe, dan penjual gorengan. Tawarkan solusi pengelolaan limbah yang mudah bagi mereka. Baca artikel kami tentang <Link href="/blog/skrip-template-penawaran-kerjasama-jelantah" className="text-[#0F3D2E] font-semibold hover:underline">skrip dan template penawaran kerjasama</Link>.
                  </p>
                </div>

                <div className="card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-2">2. Atur Sistem Logistik Sederhana</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Buat jadwal penjemputan rutin, misalnya setiap hari Sabtu. Untuk pemasok besar seperti warung makan, Anda mungkin perlu menjemput lebih sering. Sediakan juga titik pengumpulan (drop point) di rumah Anda jika memungkinkan. Untuk detail lebih lanjut, baca artikel kami tentang <Link href="/blog/manajemen-logistik-pengepul-jelantah" className="text-[#0F3D2E] font-semibold hover:underline">manajemen logistik pengepul jelantah</Link>.
                  </p>
                </div>

                <div className="card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-2">3. Lakukan Pencatatan Dasar</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Gunakan buku catatan atau spreadsheet sederhana untuk mencatat: nama pemasok, tanggal setor, volume (kg), dan jumlah yang Anda bayarkan (jika menggunakan sistem bagi hasil). Ini akan membantu Anda melacak pertumbuhan bisnis.
                  </p>
                </div>
              </div>
            </section>

            {/* Fase 3 */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-[#0F3D2E]" />
                <h2 className="text-3xl font-bold text-[#0F3D2E]">Fase 3: Scale-Up - Mengembangkan Bisnis</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Setelah bisnis berjalan stabil, pikirkan cara untuk mengembangkannya.
              </p>

              <div className="space-y-4">
                <div className="card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-2">1. Menjadi Mitra Resmi</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Jika di awal Anda hanya penjual lepas, kini saatnya mendaftar sebagai mitra resmi ke perusahaan seperti JelantahGO. Ini akan memberikan Anda harga yang lebih baik, dukungan materi promosi, dan citra yang lebih profesional untuk menarik pemasok yang lebih besar.
                  </p>
                </div>

                <div className="card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-2">2. Analisis Keuntungan</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Mari berhitung sederhana. Misalkan Anda membeli jelantah dari warga seharga Rp 4.000/kg dan menjualnya ke JelantahGO seharga Rp 8.500/kg. Margin keuntungan Anda adalah Rp 4.500/kg. Jika Anda bisa mengumpulkan 300 kg per bulan:
                  </p>
                  <div className="bg-[#E8F0E3] border-l-4 border-l-[#0F3D2E] p-4">
                    <p className="text-gray-700 font-bold text-lg">
                      Keuntungan Kotor: 300 kg x Rp 4.500 = <span className="text-[#0F3D2E]">Rp 1.350.000 per bulan</span>
                    </p>
                    <p className="text-gray-700 text-sm mt-2">
                      Angka ini sangat realistis untuk dicapai dalam 3-4 bulan pertama, hanya dengan bekerja paruh waktu.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            </div>

            {/* Article Footer */}
            <BlogArticleFooter currentSlug="panduan-bisnis-pengepul-jelantah" />
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
                {/* Kesimpulan */}
                <div className="card-premium bg-[#E8F0E3] border-l-4 border-l-[#0F3D2E]">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#0F3D2E] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Kesimpulan</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Memulai bisnis pengepul jelantah adalah perjalanan yang rewarding. Anda tidak hanya menghasilkan uang, tetapi juga menjadi pahlawan lingkungan di komunitas Anda. Dengan persiapan yang matang, sistem yang baik, dan komitmen yang konsisten, bisnis ini dapat berkembang menjadi sumber penghasilan yang stabil dan berkelanjutan.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="card-premium bg-gradient-to-br from-[#E8F0E3] to-[#D9E3D3] border-l-4 border-l-[#0F3D2E] text-center mt-12">
                  <h2 className="text-2xl font-bold text-[#0F3D2E] mb-4">
                    Jadi, Tunggu Apa Lagi? Mulai Riset Anda Sekarang!
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Dengan modal kecil, risiko rendah, dan pasar yang pasti, bisnis pengepul jelantah adalah peluang yang tidak boleh Anda lewatkan.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/blog/peluang-bisnis-pengepul-jelantah"
                      className="inline-block bg-[#0F3D2E] text-white hover:bg-[#134E3A] px-8 py-4 rounded-card font-bold text-lg transition-smooth shadow-soft-lg hover:shadow-soft-xl"
                    >
                      Peluang Bisnis Pengepul Jelantah 2025 →
                    </Link>
                    <Link
                      href="/mitra"
                      className="inline-block bg-white text-[#0F3D2E] border-2 border-[#0F3D2E] hover:bg-[#F9F8F6] px-8 py-4 rounded-card font-bold text-lg transition-smooth shadow-soft hover:shadow-soft-lg"
                    >
                      Program Mitra JelantahGO →
                    </Link>
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

