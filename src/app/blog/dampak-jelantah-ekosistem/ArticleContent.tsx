'use client'

import Image from 'next/image'
import Link from 'next/link'
import BlogSidebar from '@/components/BlogSidebar'
import BlogArticleFooter from '@/components/BlogArticleFooter'
import ArticleSchema from '@/components/ArticleSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { Droplets, Fish, TreePine, AlertTriangle } from 'lucide-react'

export default function ArticleContent() {
  return (
    <>
      <ArticleSchema
        title="Dampak Jelantah pada Ekosistem Air"
        description="Pahami dampak jelantah pada ekosistem air: bagaimana jelantah merusak biota perairan, mencemari sumber air, dan mengancam rantai makanan. Solusi daur ulang jelantah."
        image="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163998/jelantahgo_23_aru8je.webp"
        datePublished="2025-10-15"
        dateModified="2025-10-15"
        articleUrl="https://jelantahgo.com/blog/dampak-jelantah-ekosistem"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://jelantahgo.com' },
          { name: 'Blog', url: 'https://jelantahgo.com/blog' },
          { name: 'Dampak Jelantah pada Ekosistem Air', url: 'https://jelantahgo.com/blog/dampak-jelantah-ekosistem' },
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
              Dampak Jelantah pada Ekosistem Air
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Kerusakan Berantai yang Mematikan Kehidupan Akuatik
            </p>
            <p className="text-sm text-white/80 mt-2">Dipublikasikan: 18 September 2025</p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <Image
            src="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761163998/jelantahgo_23_aru8je.webp"
            alt="Dampak Jelantah pada Ekosistem Air"
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
              Satu liter minyak jelantah yang dibuang ke saluran air dapat mencemari hingga satu juta liter air bersih. Angka ini bukan sekadar statistik, melainkan sebuah peringatan keras tentang daya rusak limbah dapur yang sering kita anggap sepele.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Ketika jelantah memasuki ekosistem air, ia memicu serangkaian kerusakan berantai yang mematikan bagi kehidupan di dalamnya. Ini adalah bagian penting dari diskusi tentang <Link href="/blog/ancaman-dan-peluang-minyak-jelantah" className="text-[#0F3D2E] font-semibold hover:underline">bahaya dan peluang emas minyak jelantah</Link> yang perlu dipahami semua pihak.
            </p>

            {/* Lapisan Maut */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Droplets className="w-6 h-6 text-red-600" />
                <h2 className="text-3xl font-bold text-[#0F3D2E]">Lapisan Maut di Permukaan Air</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Minyak dan air tidak akan pernah bersatu. Ketika jelantah sampai ke sungai atau danau, ia akan membentuk lapisan tipis yang menyelimuti permukaan air. Lapisan ini secara efektif memblokir dua elemen vital bagi kehidupan akuatik: sinar matahari dan oksigen.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tanpa sinar matahari, tumbuhan air seperti alga dan fitoplankton tidak dapat berfotosintesis, menyebabkan mereka mati. Padahal, mereka adalah fondasi dari jaring makanan di ekosistem air. Tanpa mereka, seluruh rantai makanan akan runtuh.
              </p>
              <div className="card-premium bg-red-50 border-l-4 border-red-500">
                <p className="text-gray-700 font-semibold">
                  <strong>Fakta Mengerikan:</strong> Satu liter minyak jelantah dapat mencemari hingga 1.000 liter air bersih. Bayangkan jika setiap rumah tangga di Jakarta membuang hanya 1 liter per bulan—dampaknya akan sangat luar biasa.
                </p>
              </div>
            </section>

            {/* Efek Domino */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                <h2 className="text-3xl font-bold text-[#0F3D2E]">Efek Domino yang Mematikan</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kematian tumbuhan air adalah awal dari efek domino yang mengerikan. Proses pembusukan tumbuhan mati akan menyedot oksigen terlarut dalam air (deoksigenasi). Kondisi ini, ditambah dengan terhalangnya pertukaran oksigen dari atmosfer oleh lapisan minyak, menciptakan zona mati (dead zone) di mana kadar oksigen sangat rendah (hipoksia).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ikan, kepiting, dan berbagai organisme air lainnya akan mati lemas. Bangkai mereka yang membusuk akan melepaskan gas-gas beracun seperti amonia dan hidrogen sulfida, yang semakin meracuni air dan membunuh lebih banyak kehidupan. Lingkaran setan ini mengubah perairan yang tadinya hidup menjadi sunyi dan mati.
              </p>
            </section>

            {/* Kerusakan Jangka Panjang */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Fish className="w-6 h-6 text-red-600" />
                <h2 className="text-3xl font-bold text-[#0F3D2E]">Kerusakan Jangka Panjang pada Biota</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dampak jelantah tidak berhenti pada kematian massal. Senyawa kimia berbahaya yang terkandung di dalamnya dapat menyebabkan kerusakan jangka panjang:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Kerusakan Insang Ikan:</strong> Minyak dapat menempel pada insang ikan, membuatnya sulit bernapas.</li>
                <li><strong>Kerusakan pada Burung Air:</strong> Bulu-bulu burung air yang terkena minyak akan kehilangan kemampuan isolasi dan daya apungnya, menyebabkan mereka mati kedinginan atau tenggelam.</li>
                <li><strong>Bioakumulasi:</strong> Bahan kimia ini dapat terakumulasi dalam jaringan lemak hewan dan merusak sistem reproduksi serta menyebabkan cacat lahir.</li>
                <li><strong>Rantai Makanan Tercemar:</strong> Ketika manusia mengonsumsi ikan yang tercemar, racun tersebut akan masuk ke dalam tubuh manusia melalui rantai makanan.</li>
              </ul>
            </section>

            {/* Solusi */}
            <div className="card-premium bg-gradient-to-br from-[#E8F0E3] to-[#D9E3D3] border-l-4 border-l-[#0F3D2E] text-center mt-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <TreePine className="w-8 h-8 text-[#0F3D2E]" />
                <h2 className="text-2xl font-bold text-[#0F3D2E]">Anda Adalah Solusinya</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Melihat dampak yang begitu mengerikan, jelas bahwa membuang jelantah sembarangan adalah tindakan yang tidak bertanggung jawab. Solusinya ada di tangan kita. Dengan mengumpulkan setiap tetes minyak jelantah dan menyalurkannya ke pihak yang tepat seperti JelantahGO, kita memutus rantai perusakan ini. Anda tidak hanya menyelamatkan jutaan liter air bersih, tetapi juga membantu mengubah limbah berbahaya menjadi sumber energi terbarukan.
              </p>
              <p className="text-gray-700 font-bold mb-6">
                Jadilah pahlawan bagi lingkungan, mulai dari dapur Anda sendiri.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/blog/ancaman-dan-peluang-minyak-jelantah"
                  className="inline-block bg-[#0F3D2E] text-white hover:bg-[#134E3A] px-8 py-4 rounded-card font-bold text-lg transition-smooth shadow-soft-lg hover:shadow-soft-xl"
                >
                  Pelajari Dampak Lengkap →
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
            <BlogArticleFooter currentSlug="dampak-jelantah-ekosistem" />
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
