'use client'

import Image from 'next/image'
import Link from 'next/link'
import BlogSidebar from '@/components/BlogSidebar'
import BlogArticleFooter from '@/components/BlogArticleFooter'
import ArticleSchema from '@/components/ArticleSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { Building, Shield, FileText, Award } from 'lucide-react'

export default function JakartaPusatManajemenPage() {
  return (
    <>
      <ArticleSchema
        title="Manajemen Limbah Jelantah Jakarta Pusat Rp 7.500-8.500/L - Solusi B2B Hotel & Perkantoran"
        description="Solusi manajemen limbah jelantah premium Jakarta Pusat: bayar Rp 7.500-8.500/L, kepatuhan regulasi B3, dokumentasi PROPER lengkap, kontrak B2B hotel & perkantoran."
        image="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761963251/jelantahgo_hero_8_cwujgg.webp"
        datePublished="2025-11-14"
        dateModified="2025-11-14"
        articleUrl="https://jelantahgo.com/blog/manajemen-limbah-jelantah-jakarta-pusat"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://jelantahgo.com' },
          { name: 'Blog', url: 'https://jelantahgo.com/blog' },
          { name: 'Manajemen Limbah Jelantah Profesional untuk Hotel & Perkantoran di Jakarta Pusat', url: 'https://jelantahgo.com/blog/manajemen-limbah-jelantah-jakarta-pusat' },
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
              Manajemen Limbah Jelantah Profesional untuk Hotel & Perkantoran di Jakarta Pusat
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Solusi Terintegrasi untuk Lingkungan Korporat
            </p>
            <p className="text-sm text-white/80 mt-2">Terakhir diperbarui: 14 November 2025</p>
          </div>
        </div>
      </section>
      {/* Image */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <Image
            src="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761963251/jelantahgo_hero_8_cwujgg.webp"
            alt="Manajemen Limbah Jelantah Profesional untuk Hotel & Perkantoran di Jakarta Pusat"
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
              Di jantung bisnis dan pemerintahan Indonesia, Jakarta Pusat adalah rumah bagi hotel-hotel internasional, gedung perkantoran pencakar langit, dan pusat perbelanjaan premium. Bagi para manajer gedung, manajer operasional hotel, dan divisi General Affairs di kawasan ini, "manajemen limbah" adalah sebuah disiplin ilmu yang kompleks.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Salah satu komponen limbah yang paling menantang adalah minyak jelantah, yang dihasilkan dalam volume masif dari dapur hotel, katering gedung, dan puluhan tenant food court. Mengelola limbah ini bukan lagi sekadar urusan kebersihan. Ini adalah masalah kepatuhan regulasi Limbah B3, efisiensi operasional, dan yang terpenting, reputasi korporat. Panduan ini adalah bagian dari <Link href="/blog/jual-minyak-jelantah-jakarta" className="text-[#0F3D2E] font-semibold hover:underline">panduan lengkap jual minyak jelantah Jakarta</Link>.
            </p>

            {/* Tantangan Korporat */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#0F3D2E] mb-6">Tantangan Unik Manajemen Limbah Jelantah di Lingkungan Korporat</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Berbeda dengan UKM atau rumah tangga, hotel dan gedung perkantoran di Jakarta Pusat menghadapi tantangan yang jauh lebih kompleks:
              </p>
              <div className="space-y-4">
                <div className="card-premium">
                  <div className="flex items-center gap-3 mb-2">
                    <Shield className="w-6 h-6 text-[#0F3D2E]" />
                    <h3 className="text-xl font-bold text-[#0F3D2E]">Kepatuhan Regulasi (Compliance) yang Ketat</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Sebagai entitas bisnis besar, Anda adalah subjek pengawasan yang lebih ketat dari Dinas Lingkungan Hidup. Anda wajib membuktikan bahwa Limbah B3 (termasuk jelantah) Anda dikelola oleh pihak yang berizin dan terdokumentasi dengan baik, terutama untuk keperluan audit lingkungan seperti PROPER. Baca artikel kami tentang <Link href="/blog/regulasi-limbah-b3-jelantah-bisnis-kuliner" className="text-[#0F3D2E] font-semibold hover:underline">regulasi limbah B3 untuk bisnis kuliner</Link>.
                  </p>
                </div>

                <div className="card-premium">
                  <div className="flex items-center gap-3 mb-2">
                    <Building className="w-6 h-6 text-[#0F3D2E]" />
                    <h3 className="text-xl font-bold text-[#0F3D2E]">Volume Produksi Masif dan Multi-Sumber</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Sebuah hotel bisa memiliki beberapa restoran, dapur banquet, dan kantin karyawan. Sebuah mal bisa memiliki puluhan tenant F&B. Mengkoordinasikan pengumpulan dari banyak sumber ini membutuhkan sistem yang terorganisir.
                  </p>
                </div>

                <div className="card-premium">
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="w-6 h-6 text-[#0F3D2E]" />
                    <h3 className="text-xl font-bold text-[#0F3D2E]">Standar Profesionalisme dan Keamanan Tinggi</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Partner yang masuk ke area loading dock Anda harus mematuhi standar K3 (Keselamatan dan Kesehatan Kerja) yang berlaku, bekerja dengan efisien, dan tidak mengganggu alur logistik gedung lainnya.
                  </p>
                </div>

                <div className="card-premium">
                  <div className="flex items-center gap-3 mb-2">
                    <FileText className="w-6 h-6 text-[#0F3D2E]" />
                    <h3 className="text-xl font-bold text-[#0F3D2E]">Pentingnya Reputasi dan Corporate Social Responsibility (CSR)</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Di era kesadaran lingkungan, cara perusahaan Anda mengelola limbah berdampak langsung pada citra merek. Bekerja sama dengan partner daur ulang yang profesional adalah bagian dari narasi CSR yang positif.
                  </p>
                </div>
              </div>
            </section>

            {/* Solusi JelantahGO */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#0F3D2E] mb-6">Solusi Terintegrasi JelantahGO untuk Lingkungan Korporat</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kami memahami bahwa kebutuhan Anda lebih dari sekadar "pengepul jelantah". Anda memerlukan <strong>solusi manajemen limbah terintegrasi</strong> yang mencakup:
              </p>
              <div className="space-y-4">
                <div className="card-premium bg-[#E8F0E3] border-l-4 border-l-[#0F3D2E]">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">1. Kepatuhan Regulasi Lengkap</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Izin pengelolaan Limbah B3 dari KLHK</li>
                    <li>Dokumentasi serah terima resmi (manifest) untuk setiap transaksi</li>
                    <li>Laporan berkala untuk keperluan audit lingkungan</li>
                    <li>Dukungan untuk sertifikasi PROPER dan ISO</li>
                  </ul>
                </div>

                <div className="card-premium bg-[#E8F0E3] border-l-4 border-l-[#0F3D2E]">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">2. Sistem Operasional Profesional</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Penjadwalan rutin yang fleksibel sesuai kebutuhan operasional Anda</li>
                    <li>Tim yang terlatih dalam standar K3 dan profesionalisme</li>
                    <li>Armada dan peralatan yang memenuhi standar industri</li>
                    <li>Koordinasi multi-sumber untuk hotel dan mal dengan banyak tenant</li>
                  </ul>
                </div>

                <div className="card-premium bg-[#E8F0E3] border-l-4 border-l-[#0F3D2E]">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">3. Transparansi dan Pelaporan</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Laporan volume dan dokumentasi untuk setiap penjemputan</li>
                    <li>Dashboard online untuk tracking dan monitoring</li>
                    <li>Koordinasi dengan divisi General Affairs atau Engineering</li>
                    <li>Dukungan untuk program CSR dan sustainability reporting</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Area Layanan */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#0F3D2E] mb-6">Area Layanan Jakarta Pusat</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                JelantahGO melayani seluruh wilayah Jakarta Pusat, termasuk:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="card-premium bg-[#E8F0E3]">
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Menteng</li>
                    <li>Gambir</li>
                    <li>Tanah Abang</li>
                    <li>Kemayoran</li>
                    <li>Senen</li>
                  </ul>
                </div>
                <div className="card-premium bg-[#E8F0E3]">
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Cempaka Putih</li>
                    <li>Johar Baru</li>
                    <li>Sawah Besar</li>
                    <li>Dan seluruh wilayah Jakpus</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Keuntungan */}
            <div className="card-premium bg-gradient-to-br from-[#E8F0E3] to-[#D9E3D3] border-l-4 border-l-[#0F3D2E]">
              <h3 className="text-2xl font-bold text-[#0F3D2E] mb-4">Mengapa Memilih JelantahGO untuk Hotel & Perkantoran di Jakarta Pusat?</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Kepatuhan Regulasi:</strong> Izin resmi dari KLHK untuk pengelolaan Limbah B3</li>
                <li><strong>Pengalaman Korporat:</strong> Klien hotel dan gedung perkantoran di seluruh Jakarta</li>
                <li><strong>Standar Profesional:</strong> Tim terlatih, prosedur K3, dan dokumentasi lengkap</li>
                <li><strong>Fleksibilitas:</strong> Sistem penjadwalan yang disesuaikan dengan kebutuhan operasional Anda</li>
                <li><strong>Transparansi:</strong> Laporan dan dokumentasi lengkap untuk audit dan compliance</li>
                <li><strong>Dukungan CSR:</strong> Membantu Anda membangun narasi sustainability dan lingkungan yang positif</li>
              </ul>
            </div>

            {/* CTA */}
            <div className="card-premium bg-gradient-to-br from-[#E8F0E3] to-[#D9E3D3] border-l-4 border-l-[#0F3D2E] text-center mt-12">
              <h2 className="text-2xl font-bold text-[#0F3D2E] mb-4">
                Solusi Profesional untuk Manajemen Limbah Korporat
              </h2>
              <p className="text-gray-700 mb-6">
                Jangan biarkan pengelolaan limbah jelantah menjadi beban compliance atau risiko reputasi. Serahkan kepada profesional yang memahami kebutuhan hotel dan perkantoran di Jakarta Pusat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/blog/jual-minyak-jelantah-jakarta"
                  className="inline-block bg-[#0F3D2E] text-white hover:bg-[#134E3A] px-8 py-4 rounded-card font-bold text-lg transition-smooth shadow-soft-lg hover:shadow-soft-xl"
                >
                  Panduan Lengkap Jakarta →
                </Link>
                <a
                  href="https://wa.me/6285183033995?text=Halo%20JelantahGO,%20saya%20mewakili%20hotel/perkantoran%20di%20Jakarta%20Pusat%20dan%20butuh%20solusi%20manajemen%20limbah%20jelantah%20profesional"
                  target="_blank"
                  rel="noopener"
                  className="inline-block bg-[#25D366] text-white hover:bg-[#20BA5A] px-8 py-4 rounded-card font-bold text-lg transition-smooth shadow-soft-lg hover:shadow-soft-xl"
                >
                  Konsultasi untuk Korporat
                </a>
              </div>
            </div>
            </div>

            {/* Article Footer */}
            <BlogArticleFooter currentSlug="manajemen-limbah-jelantah-jakarta-pusat" />
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

