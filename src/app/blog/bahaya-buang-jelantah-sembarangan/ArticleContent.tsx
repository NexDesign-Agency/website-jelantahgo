'use client'

import Image from 'next/image'
import Link from 'next/link'
import BlogSidebar from '@/components/BlogSidebar'
import BlogArticleFooter from '@/components/BlogArticleFooter'
import ArticleSchema from '@/components/ArticleSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { AlertTriangle, Droplets, Fish, TreePine } from 'lucide-react'

export default function ArticleContent() {
  return (
    <>
      <ArticleSchema
        title="Bahaya Buang Jelantah Sembarangan"
        description="Jangan buang jelantah sembarangan! Pelajari bahaya jelantah untuk lingkungan dan kesehatan: pencemaran air, kerusakan ekosistem, fatberg, hingga risiko kesehatan."
        image="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163998/jelantahgo_23_qbzsfv.webp"
        datePublished="2025-10-20"
        dateModified="2025-10-20"
        articleUrl="https://jelantahgo.com/blog/bahaya-buang-jelantah-sembarangan"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://jelantahgo.com' },
          { name: 'Blog', url: 'https://jelantahgo.com/blog' },
          { name: 'Bahaya Buang Jelantah Sembarangan', url: 'https://jelantahgo.com/blog/bahaya-buang-jelantah-sembarangan' },
        ]}
      />
      {/* Hero Section */}
      <section className="hero-bg-dots py-20 lg:py-28">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-[#D9E3D3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Dampak & Daur Ulang Jelantah
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Bahaya Buang Jelantah Sembarangan
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Dampak Lingkungan & Kesehatan yang Harus Anda Ketahui
            </p>
            <p className="text-sm text-white/80 mt-2">Terakhir diperbarui: 20 Oktober 2025</p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <Image
            src="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761163998/jelantahgo_23_qbzsfv.webp"
            alt="Bahaya Buang Jelantah Sembarangan"
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
                  Setiap hari, jutaan liter minyak jelantah dibuang ke wastafel, selokan, atau langsung ke tanah tanpa disadari bahwa tindakan ini membawa dampak yang sangat merusak. Satu liter minyak jelantah yang dibuang ke saluran air dapat mencemari hingga 1.000 liter air bersih, dan dampaknya jauh lebih luas dari yang dibayangkan.
                </p>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Artikel ini akan menjelaskan secara mendalam bahaya membuang jelantah sembarangan dan mengapa setiap tetes yang Anda buang memiliki konsekuensi serius bagi lingkungan, kesehatan, dan infrastruktur kota.
                </p>

                {/* Dampak pada Air */}
                <section className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <Droplets className="w-6 h-6 text-red-600" />
                    <h2 className="text-3xl font-bold text-[#0F3D2E]">1. Pencemaran Air: Dari Wastafel ke Sungai</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Ketika jelantah dibuang ke wastafel, ia mengalir melalui pipa pembuangan dan berakhir di sistem pengolahan air atau langsung ke badan air seperti sungai dan danau. Minyak jelantah memiliki sifat yang tidak larut dalam air dan cenderung mengapung di permukaan.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li><strong>Membentuk Lapisan Minyak:</strong> Lapisan minyak di permukaan air menghalangi penetrasi oksigen dan sinar matahari, yang vital bagi kehidupan air.</li>
                    <li><strong>Mengurangi Kadar Oksigen Terlarut:</strong> Proses dekomposisi jelantah membutuhkan oksigen dalam jumlah besar, menciptakan kondisi hipoksia (kekurangan oksigen) yang mematikan bagi ikan dan organisme air.</li>
                    <li><strong>Rantai Makanan Terputus:</strong> Dengan matinya organisme kecil, rantai makanan perairan akan terputus, berdampak pada seluruh ekosistem.</li>
                  </ul>
                  <div className="card-premium bg-red-50 border-l-4 border-red-500">
                    <p className="text-gray-700 font-semibold">
                      <strong>Fakta Mengerikan:</strong> Satu liter minyak jelantah dapat mencemari hingga 1.000 liter air bersih. Bayangkan jika setiap rumah tangga di Jakarta membuang hanya 1 liter per bulan—dampaknya akan sangat luar biasa.
                    </p>
                  </div>
                </section>

                {/* Dampak pada Tanah */}
                <section className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <TreePine className="w-6 h-6 text-red-600" />
                    <h2 className="text-3xl font-bold text-[#0F3D2E]">2. Kontaminasi Tanah dan Air Tanah</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Jika jelantah dibuang langsung ke tanah, dampaknya tidak kalah merusak. Minyak akan melapisi partikel tanah, menyumbat pori-pori, dan mencegah air serta udara mencapai akar tanaman.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li><strong>Tanah Menjadi Tidak Subur:</strong> Tanaman akan kesulitan menyerap nutrisi dan air, menyebabkan kematian tanaman.</li>
                    <li><strong>Mencemari Air Tanah:</strong> Jelantah dapat meresap ke dalam tanah dan mencemari akuifer (sumber air tanah) yang digunakan untuk sumur bor dan pasokan air bersih.</li>
                    <li><strong>Membunuh Mikroorganisme Tanah:</strong> Mikroorganisme yang penting untuk kesuburan tanah akan mati akibat kontaminasi minyak.</li>
                  </ul>
                </section>

                {/* Fatberg */}
                <section className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                    <h2 className="text-3xl font-bold text-[#0F3D2E]">3. Fatberg: Monster Bawah Tanah</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Ketika jelantah mengalir ke pipa pembuangan, ia mendingin dan mengeras. Bersama dengan sampah lainnya seperti tisu basah, jelantah membentuk gumpalan raksasa yang disebut <strong>fatberg</strong>.
                  </p>
                  <div className="card-premium bg-[#E8F0E3] border-l-4 border-l-[#0F3D2E]">
                    <p className="text-gray-700 font-semibold mb-2">Studi Kasus: London Fatberg</p>
                    <p className="text-gray-700">
                      Pada tahun 2017, ditemukan fatberg seberat <strong>130 ton</strong> (setara 11 bus tingkat) yang menyumbat saluran pembuangan di London. Butuh waktu <strong>9 minggu</strong> dan biaya jutaan poundsterling untuk membersihkannya.
                    </p>
                  </div>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Fatberg menyebabkan penyumbatan pipa, banjir air limbah, dan kerusakan infrastruktur yang sangat mahal. Untuk detail lebih lanjut, baca artikel kami tentang <Link href="/blog/fatberg-monster-bawah-tanah-jelantah" className="text-[#0F3D2E] font-semibold hover:underline">Fatberg: Monster Bawah Tanah dari Jelantah</Link>.
                  </p>
                </section>

                {/* Kesehatan */}
                <section className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                    <h2 className="text-3xl font-bold text-[#0F3D2E]">4. Dampak Kesehatan Manusia</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Pencemaran lingkungan yang disebabkan jelantah pada akhirnya akan kembali ke manusia melalui berbagai jalur:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li><strong>Melalui Rantai Makanan:</strong> Senyawa beracun dalam jelantah terakumulasi di tubuh ikan yang kemudian dikonsumsi manusia.</li>
                    <li><strong>Kontaminasi Air Minum:</strong> Jika sumber air tanah tercemar, air yang kita konsumsi juga akan tercemar.</li>
                    <li><strong>Bau Tidak Sedap:</strong> Jelantah yang terurai menciptakan bau busuk yang mengganggu kenyamanan dan dapat memicu gangguan pernapasan.</li>
                  </ul>
                </section>

                {/* Ekonomi */}
                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-[#0F3D2E] mb-6">5. Dampak Ekonomi: Biaya yang Harus Dibayar</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Dampak ekonomi dari pembuangan jelantah sembarangan tidak bisa diabaikan:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Biaya Perawatan Infrastruktur:</strong> Pembersihan fatberg dan perbaikan pipa yang rusak menghabiskan anggaran negara dan pajak masyarakat.</li>
                    <li><strong>Kerugian Ekonomi dari Banjir:</strong> Banjir akibat penyumbatan saluran air menyebabkan kerugian properti dan aktivitas ekonomi yang terhenti.</li>
                    <li><strong>Biaya Pengolahan Air:</strong> Air yang tercemar memerlukan biaya lebih tinggi untuk diolah menjadi air bersih yang aman dikonsumsi.</li>
                  </ul>
                </section>

                {/* Solusi */}
                <div className="card-premium bg-gradient-to-br from-[#E8F0E3] to-[#D9E3D3] border-l-4 border-l-[#0F3D2E] mt-12">
                  <h2 className="text-2xl font-bold text-[#0F3D2E] mb-4">
                    Solusi: Jangan Buang, Jual Saja!
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Setelah memahami betapa berbahayanya membuang jelantah sembarangan, solusinya sangat sederhana: <strong>jangan buang, jual saja!</strong> Dengan menjual jelantah, Anda tidak hanya mencegah kerusakan lingkungan, tetapi juga mendapatkan penghasilan tambahan. Artikel ini adalah bagian dari eksplorasi lengkap tentang <Link href="/blog/ancaman-dan-peluang-minyak-jelantah" className="text-[#0F3D2E] font-semibold hover:underline">bahaya dan peluang emas minyak jelantah</Link>.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/blog/panduan-jual-minyak-jelantah"
                      className="inline-block bg-[#0F3D2E] text-white hover:bg-[#134E3A] px-8 py-4 rounded-card font-bold text-lg transition-smooth shadow-soft-lg hover:shadow-soft-xl text-center"
                    >
                      Panduan Jual Minyak Jelantah →
                    </Link>
                    <a
                      href="https://wa.me/6285183033995?text=Halo%20JelantahGO,%20saya%20ingin%20jual%20minyak%20jelantah"
                      target="_blank"
                      rel="noopener"
                      className="inline-block bg-[#25D366] text-white hover:bg-[#20BA5A] px-8 py-4 rounded-card font-bold text-lg transition-smooth shadow-soft-lg hover:shadow-soft-xl text-center"
                    >
                      Hubungi JelantahGO
                    </a>
                  </div>
                </div>
              </div>

            {/* Article Footer */}
            <BlogArticleFooter currentSlug="bahaya-buang-jelantah-sembarangan" />
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
