'use client'

import Image from 'next/image'
import Link from 'next/link'
import BlogSidebar from '@/components/BlogSidebar'
import BlogArticleFooter from '@/components/BlogArticleFooter'
import ArticleSchema from '@/components/ArticleSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { Beaker, AlertTriangle, Sparkles, Droplets } from 'lucide-react'

export default function ArticleContent() {
  return (
    <>
      <ArticleSchema
        title="DIY Sabun & Lilin dari Minyak Jelantah: Panduan Aman"
        description="Panduan lengkap membuat sabun dan lilin dari minyak jelantah di rumah. Tutorial aman dengan APD lengkap, bahan, alat, dan langkah-langkah detail. Tips keselamatan penting!"
        image="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163997/jelantahgo_22_wuy3fj.webp"
        datePublished="2025-10-22"
        dateModified="2025-10-22"
        articleUrl="https://jelantahgo.com/blog/diy-sabun-lilin-minyak-jelantah"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://jelantahgo.com' },
          { name: 'Blog', url: 'https://jelantahgo.com/blog' },
          { name: 'DIY Sabun & Lilin dari Minyak Jelantah', url: 'https://jelantahgo.com/blog/diy-sabun-lilin-minyak-jelantah' },
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
              DIY Kreatif: Cara Membuat Sabun & Lilin dari Minyak Jelantah
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Aman & Mudah di Rumah
            </p>
            <p className="text-sm text-white/80 mt-2">Terakhir diperbarui: 2 November 2025</p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <Image
            src="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761163997/jelantahgo_22_wuy3fj.webp"
            alt="DIY Kreatif: Cara Membuat Sabun & Lilin dari Minyak Jelantah"
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
              Punya segudang minyak jelantah di dapur yang sayang dibuang? Sebelum Anda membawanya ke pengepul, tahukah Anda bahwa limbah dapur ini bisa diubah menjadi produk bernilai tambah yang berguna dan ramah lingkungan? Ya, dengan sedikit kreativitas dan panduan yang tepat, minyak jelantah bisa disulap menjadi sabun cuci yang efektif atau lilin aromaterapi yang cantik.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Kegiatan DIY (Do It Yourself) ini tidak hanya memberikan kepuasan tersendiri, tetapi juga merupakan cara brilian untuk mengurangi limbah rumah tangga dan menerapkan prinsip ekonomi sirkular. Namun, penting untuk diingat: keselamatan adalah prioritas utama, terutama saat berurusan dengan bahan kimia seperti soda api (natrium hidroksida).
            </p>

            {/* Peringatan */}
            <div className="card-premium bg-red-50 border-l-4 border-red-500 mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-700 font-semibold mb-2">Peringatan Keselamatan Penting:</p>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    Membuat sabun dari jelantah melibatkan bahan kimia kaustik (soda api/NaOH) yang sangat berbahaya. Pastikan:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Selalu gunakan Alat Pelindung Diri (APD): sarung tangan karet, kacamata pelindung, dan masker</li>
                    <li>Lakukan di area berventilasi baik, jauh dari anak-anak dan hewan peliharaan</li>
                    <li>Jangan pernah mencampur soda api dengan aluminium atau wadah logam reaktif lainnya</li>
                    <li>Jika Anda tidak yakin, pertimbangkan untuk menjual jelantah kepada profesional seperti JelantahGO</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Persiapan */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#0F3D2E] mb-6">Persiapan Penting: Bahan dan Alat</h2>
              
              <div className="card-premium mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Beaker className="w-6 h-6 text-[#0F3D2E]" />
                  <h3 className="text-2xl font-bold text-[#0F3D2E]">Bahan untuk Membuat Sabun Jelantah</h3>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Minyak Jelantah Bersih:</strong> Minimal 1 liter. Pastikan sudah disaring bersih dari sisa makanan dan tidak berbau tengik parah.</li>
                  <li><strong>Soda Api (Natrium Hidroksida/NaOH):</strong> Ini adalah bahan kimia kaustik yang bereaksi dengan minyak untuk membentuk sabun. Dapatkan dari toko bahan kimia atau toko online terpercaya.</li>
                  <li><strong>Air Destilasi (Air Distilled):</strong> Sekitar 350-400 ml (jumlahnya bisa sedikit bervariasi tergantung resep).</li>
                  <li><strong>Aroma Terapi (Opsional):</strong> Minyak esensial (seperti lavender, lemon, peppermint) untuk aroma.</li>
                  <li><strong>Pewarna Sabun (Opsional):</strong> Pewarna khusus sabun jika Anda ingin tampilan lebih menarik.</li>
                </ul>
              </div>

              <div className="card-premium mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="w-6 h-6 text-[#0F3D2E]" />
                  <h3 className="text-2xl font-bold text-[#0F3D2E]">Bahan untuk Membuat Lilin Jelantah</h3>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Minyak Jelantah Bersih:</strong> Minimal 500 ml.</li>
                  <li><strong>Parafin Wax atau Soy Wax (jika perlu):</strong> Campurkan dengan jelantah untuk mendapatkan tekstur lilin yang lebih baik dan titik leleh yang stabil.</li>
                  <li><strong>Aroma Terapi (Opsional):</strong> Essential oil atau fragrance oil.</li>
                  <li><strong>Pewarna Lilin (Opsional):</strong> Krayon bekas yang dihaluskan bisa jadi alternatif pewarna alami.</li>
                  <li><strong>Sumbu Lilin:</strong> Sumbu katun yang sudah diberi lapisan lilin (pre-waxed wick) lebih mudah digunakan.</li>
                </ul>
              </div>

              <div className="card-premium bg-[#E8F0E3] border-l-4 border-l-[#0F3D2E]">
                <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Alat Wajib (Keamanan Utama!)</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Wadah Tahan Panas:</strong> Stainless steel atau kaca borosilikat (Pyrex). JANGAN PERNAH gunakan aluminium atau plastik.</li>
                  <li><strong>Timbangan Digital Akurat:</strong> Mengukur bahan kimia (soda api) dan minyak harus tepat sesuai resep.</li>
                  <li><strong>Thermometer Dapur/Inframerah:</strong> Untuk mengukur suhu minyak dan larutan soda api.</li>
                  <li><strong>Cetakan:</strong> Wadah tahan panas untuk membentuk sabun atau cetakan lilin.</li>
                  <li><strong>Alat Pelindung Diri (APD):</strong> WAJIB! Sarung tangan karet tahan kimia, kacamata pelindung, dan masker pernapasan.</li>
                </ul>
              </div>
            </section>

            {/* Tutorial Sabun */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#0F3D2E] mb-6">Tutorial 1: Membuat Sabun Cuci Jelantah yang Ampuh</h2>
              
              <div className="space-y-4">
                <div className="card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Langkah 1: Persiapan Keamanan & Pengukuran Bahan</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Ini adalah langkah terpenting. Kenakan semua APD Anda (sarung tangan, kacamata, masker). Siapkan area kerja yang berventilasi baik. Timbang semua bahan dengan akurat:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Timbang minyak jelantah yang sudah disaring dan dipanaskan hingga suhu sekitar 50°C (hangat, tidak panas).</li>
                    <li>Di wadah terpisah (stainless steel), timbang air destilasi.</li>
                    <li>Di wadah lain, timbang soda api (NaOH) dengan sangat hati-hati.</li>
                  </ul>
                </div>

                <div className="card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Langkah 2: Membuat Larutan Soda Api (Lye Solution)</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    <strong className="text-red-600">PENTING: Selalu tuangkan soda api ke dalam air, BUKAN sebaliknya!</strong> Menuangkan air ke soda api dapat menyebabkan reaksi eksplosif yang sangat berbahaya.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Tuangkan soda api secara perlahan ke dalam air destilasi sambil diaduk dengan pengaduk stainless steel. Larutan ini akan menjadi sangat panas dan mengeluarkan uap berbahaya. Biarkan mendingin hingga suhu sekitar 40-50°C.
                  </p>
                </div>

                <div className="card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Langkah 3: Mencampur Minyak dengan Larutan Soda Api</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Pastikan suhu minyak jelantah dan larutan soda api sudah sekitar 40-50°C (keduanya harus hampir sama). Tuangkan larutan soda api secara perlahan ke dalam minyak sambil terus diaduk dengan konsisten.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Terus aduk hingga mencapai tahap "trace" - yaitu ketika adonan mengental dan meninggalkan jejak saat Anda mengangkat pengaduk. Ini bisa memakan waktu 15-30 menit tergantung suhu dan kondisi.
                  </p>
                </div>

                <div className="card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Langkah 4: Mencetak & Curing</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Tuangkan adonan sabun ke dalam cetakan. Tutup dengan kain atau karton untuk menjaga panas. Biarkan mengeras selama 24-48 jam.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Setelah mengeras, keluarkan dari cetakan dan potong-potong sesuai keinginan. Sabun perlu "curing" (mengering) selama 4-6 minggu sebelum bisa digunakan. Selama proses ini, sabun akan mengeras dan kelebihan air akan menguap.
                  </p>
                </div>
              </div>
            </section>

            {/* Tutorial Lilin */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#0F3D2E] mb-6">Tutorial 2: Membuat Lilin Aromaterapi dari Jelantah</h2>
              
              <div className="card-premium bg-[#E8F0E3] border-l-4 border-l-[#0F3D2E] mb-4">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Catatan:</strong> Membuat lilin dari jelantah murni bisa menghasilkan asap dan bau yang tidak sedap. Disarankan untuk mencampurnya dengan parafin wax atau soy wax untuk hasil yang lebih baik.
                </p>
              </div>

              <div className="space-y-4">
                <div className="card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Langkah 1: Menyiapkan Bahan</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Saring jelantah dengan baik untuk menghilangkan partikel kasar. Panaskan jelantah dalam panci stainless steel hingga suhu sekitar 80°C. Jika menggunakan parafin wax, lelehkan terpisah kemudian campurkan dengan jelantah dengan perbandingan 1:1 atau sesuai kebutuhan.
                  </p>
                </div>

                <div className="card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Langkah 2: Menambahkan Pewarna & Aroma</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Setelah minyak/lilin meleleh, tambahkan pewarna (jika diinginkan) dan minyak esensial untuk aroma. Aduk hingga rata.
                  </p>
                </div>

                <div className="card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Langkah 3: Mencetak</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Letakkan sumbu lilin di tengah cetakan. Tuangkan campuran jelantah/wax secara perlahan ke dalam cetakan. Biarkan mendingin dan mengeras selama beberapa jam sebelum digunakan.
                  </p>
                </div>
              </div>
            </section>

            {/* Catatan */}
            <div className="card-premium bg-yellow-50 border-l-4 border-yellow-500 mb-8">
              <p className="text-gray-700 leading-relaxed">
                <strong>Catatan Penting:</strong> Proses DIY ini memerlukan ketelitian, kesabaran, dan perhatian terhadap keselamatan. Jika Anda lebih tertarik untuk mendapatkan nilai ekonomi dari jelantah tanpa kerumitan, menjual jelantah kepada pengepul profesional seperti JelantahGO adalah pilihan yang lebih praktis dan menguntungkan.
              </p>
            </div>
              </div>

              {/* CTA */}
              <div className="card-premium bg-gradient-to-br from-[#E8F0E3] to-[#D9E3D3] border-l-4 border-l-[#0F3D2E] text-center mt-12">
                <h2 className="text-2xl font-bold text-[#0F3D2E] mb-4">
                  Ingin Cara yang Lebih Praktis?
                </h2>
                <p className="text-gray-700 mb-6">
                  Jika DIY terlalu rumit atau Anda lebih tertarik untuk mendapatkan nilai ekonomi langsung dari jelantah, menjual jelantah kepada pengepul profesional adalah pilihan yang lebih praktis dan menguntungkan. Anda mendapatkan uang tunai tanpa perlu repot dengan proses kimia yang rumit.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/blog/panduan-jual-minyak-jelantah"
                    className="inline-block bg-[#0F3D2E] text-white hover:bg-[#134E3A] px-8 py-4 rounded-card font-bold text-lg transition-smooth shadow-soft-lg hover:shadow-soft-xl"
                  >
                    Panduan Jual Minyak Jelantah →
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

              {/* Article Footer */}
              <BlogArticleFooter currentSlug="diy-sabun-lilin-minyak-jelantah" />
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
