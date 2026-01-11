'use client'

import Image from 'next/image'
import Link from 'next/link'
import BlogSidebar from '@/components/BlogSidebar'
import BlogArticleFooter from '@/components/BlogArticleFooter'
import ArticleSchema from '@/components/ArticleSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { Users, TrendingUp, Shield, AlertCircle, CheckCircle } from 'lucide-react'

export default function MitraVsMandiriPage() {
  return (
    <>
      <ArticleSchema
        title="JelantahGO vs Mandiri: Analisis Mitra Pengepul Resmi"
        description="Perbandingan lengkap pengepul jelantah mandiri vs mitra JelantahGO. Analisis untung-rugi, risiko, modal kerja, margin profit, dan panduan memilih jalur terbaik untuk bisnis Anda."
        image="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163998/jelantahgo_27_rwjixk.webp"
        datePublished="2025-10-11"
        dateModified="2025-10-11"
        articleUrl="https://jelantahgo.com/blog/mitra-jelantahgo-vs-mandiri"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://jelantahgo.com' },
          { name: 'Blog', url: 'https://jelantahgo.com/blog' },
          { name: 'JelantahGO vs Mandiri: Analisis Mitra Pengepul Resmi', url: 'https://jelantahgo.com/blog/mitra-jelantahgo-vs-mandiri' },
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
              JelantahGO vs. Mandiri
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Analisis Keuntungan Menjadi Mitra Pengepul Resmi
            </p>
            <p className="text-sm text-white/80 mt-2">Terakhir diperbarui: 8 November 2025</p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <Image
            src="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761163998/jelantahgo_27_rwjixk.webp"
            alt="JelantahGO vs. Mandiri"
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
              Anda telah sampai pada titik krusial dalam perjalanan wirausaha Anda. Setelah memahami secara mendalam tentang <Link href="/blog/peluang-bisnis-pengepul-jelantah" className="text-[#0F3D2E] font-semibold hover:underline">peluang bisnis pengepul minyak jelantah</Link>, kini Anda dihadapkan pada sebuah pilihan strategis yang akan menentukan arah dan kecepatan pertumbuhan bisnis Anda.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              <strong>Haruskah saya membangun semuanya sendiri dari nol (Jalur Mandiri), atau haruskah saya mempercepat langkah dengan bergabung dalam jaringan yang sudah ada (Jalur Kemitraan)?</strong> Artikel ini akan membedah secara jujur dan transparan untung-rugi dari kedua jalur ini.
            </p>

            {/* Jalur Mandiri */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#0F3D2E] mb-6">Jalur 1: Pengepul Mandiri - Kebebasan Penuh, Tanggung Jawab Penuh</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Jalur mandiri adalah impian klasik seorang wirausahawan: membangun kerajaan bisnis Anda sendiri dari fondasi paling dasar. Anda adalah kapten kapal, pembuat keputusan tunggal, dan pemilik 100% keuntungan.
              </p>

              <div className="card-premium bg-[#E8F0E3] border-l-4 border-l-[#0F3D2E] mb-6">
                <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Keuntungan Jalur Mandiri:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Margin Keuntungan Maksimal:</strong> Anda tidak berbagi keuntungan dengan siapapun. Selisih antara harga jual ke pabrik dan harga beli dari pemasok adalah milik Anda sepenuhnya.</li>
                  <li><strong>Kebebasan 100%:</strong> Anda bebas menentukan area operasi, jam kerja, strategi pemasaran, dan kepada siapa Anda akan menjual jelantah Anda. Tidak ada aturan atau sistem yang mengikat.</li>
                  <li><strong>Membangun Aset Brand Sendiri:</strong> Anda membangun nama dan reputasi bisnis Anda sendiri dari nol, yang jika berhasil, bisa menjadi aset yang sangat berharga di masa depan.</li>
                </ul>
              </div>

              <div className="card-premium border-l-4 border-red-500 bg-red-50">
                <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Tantangan dan "Biaya Tersembunyi" Jalur Mandiri:</h3>
                <ol className="list-decimal pl-6 space-y-3 text-gray-700">
                  <li>
                    <strong>Tantangan Terbesar: Menemukan Pembeli Akhir (Pabrik/Eksportir):</strong>
                    <p className="ml-6 mt-1">Pabrik biodiesel atau eksportir besar tidak melayani pembelian dalam volume kecil. Mereka menuntut pasokan dalam jumlah tonase (ribuan liter) per pengiriman dan seringkali memiliki standar kualitas yang sangat ketat.</p>
                  </li>
                  <li>
                    <strong>Risiko Arus Kas (Cash Flow):</strong>
                    <p className="ml-6 mt-1">Sistem pembayaran dari pabrik besar jarang sekali tunai. Biasanya mereka menggunakan sistem termin pembayaran 30, 60, atau bahkan 90 hari. Artinya, Anda harus memiliki modal kerja yang sangat besar untuk terus membeli jelantah dari pemasok Anda (yang harus dibayar tunai) sambil menunggu pembayaran dari pabrik cair.</p>
                  </li>
                  <li>
                    <strong>Risiko Fluktuasi Harga Pasar:</strong>
                    <p className="ml-6 mt-1">Anda menanggung 100% risiko jika harga pasar global tiba-tiba turun. Jelantah yang Anda beli hari ini seharga Rp 7.000/liter mungkin hanya laku Rp 6.000/liter bulan depan, membuat Anda merugi.</p>
                  </li>
                  <li>
                    <strong>Membangun Kepercayaan dari Nol:</strong>
                    <p className="ml-6 mt-1">Tanpa nama besar di belakang Anda, meyakinkan restoran atau hotel besar untuk bekerja sama akan menjadi perjuangan berat.</p>
                  </li>
                  <li>
                    <strong>Menjadi "One-Man Show":</strong>
                    <p className="ml-6 mt-1">Anda harus mengurus semuanya sendiri: mencari pemasok, menjemput barang, mengelola keuangan, mencari pembeli, hingga menangani keluhan.</p>
                  </li>
                </ol>
              </div>
            </section>

            {/* Jalur Kemitraan */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#0F3D2E] mb-6">Jalur 2: Mitra JelantahGO - Akselerasi Pertumbuhan, Risiko Minimal</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Jalur kemitraan ibarat menaiki "jalan tol". Anda mungkin harus membayar "biaya tol" (berbagi margin keuntungan), tetapi Anda akan sampai ke tujuan (profitabilitas) jauh lebih cepat, lebih aman, dan dengan lebih sedikit stres.
              </p>

              <div className="card-premium bg-gradient-to-br from-[#E8F0E3] to-[#D9E3D3] border-l-4 border-l-[#0F3D2E] mb-6">
                <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Keuntungan Menjadi Mitra JelantahGO:</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#0F3D2E] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-[#0F3D2E] mb-2">KEPASTIAN PEMBELI (Masalah No. 1 Teratasi):</h4>
                        <p className="text-gray-700">Ini adalah keuntungan terbesar. Anda tidak perlu pusing mencari pabrik atau eksportir. <strong>Kami menjamin akan membeli 100% jelantah yang Anda kumpulkan</strong> sesuai dengan standar kualitas. Fokus Anda hanya pada satu hal: mengumpulkan sebanyak-banyaknya.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#0F3D2E] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-[#0F3D2E] mb-2">ARUS KAS SEHAT (Pembayaran Tunai):</h4>
                        <p className="text-gray-700">Lupakan termin pembayaran 90 hari. Saat Anda menyetorkan jelantah ke gudang kami, Anda akan dibayar tunai atau transfer instan. Ini membuat modal kerja Anda terus berputar dengan cepat.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Shield className="w-6 h-6 text-[#0F3D2E] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-[#0F3D2E] mb-2">RISIKO PASAR MINIM:</h4>
                        <p className="text-gray-700">Kami yang akan menanggung risiko fluktuasi harga pasar global. Harga beli kami kepada Anda mungkin akan disesuaikan secara berkala, tetapi Anda tidak akan pernah mengalami kerugian karena harga pasar tiba-tiba anjlok setelah Anda membeli barang.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Users className="w-6 h-6 text-[#0F3D2E] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-[#0F3D2E] mb-2">LEVERAGE BRAND JELANTAHGO:</h4>
                        <p className="text-gray-700">Anda bisa memperkenalkan diri sebagai "Mitra Resmi JelantahGO". Nama yang sudah dikenal ini memberikan kredibilitas instan dan membuka pintu yang mungkin tertutup bagi pengepul perorangan.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-6 h-6 text-[#0F3D2E] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-[#0F3D2E] mb-2">DUKUNGAN & KOMUNITAS:</h4>
                        <p className="text-gray-700">Anda tidak sendirian. Anda menjadi bagian dari jaringan, mendapatkan dukungan operasional, informasi pasar, dan bahkan potensi limpahan klien dari kami jika ada permintaan di area Anda.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-premium bg-yellow-50 border-l-4 border-yellow-500">
                <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Satu-satunya "Pengorbanan": Berbagi Margin</h3>
                <p className="text-gray-700 leading-relaxed">
                  Tentu, ada trade-off. Margin keuntungan per liter Anda sebagai mitra akan sedikit lebih kecil dibandingkan jika Anda menjual langsung ke pabrik. Namun, pertimbangkan ini: <strong>Margin yang sedikit lebih kecil namun dengan volume yang stabil, perputaran yang cepat, dan risiko nol, seringkali menghasilkan keuntungan bersih bulanan yang lebih besar dan lebih pasti</strong> daripada mengejar margin maksimal tetapi dengan volume yang tidak menentu dan risiko finansial yang tinggi.
                </p>
              </div>
            </section>

            {/* Perbandingan */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#0F3D2E] mb-6">Perbandingan Singkat</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse card-premium">
                  <thead>
                    <tr className="bg-[#0F3D2E] text-white">
                      <th className="border border-white p-3 text-left">Aspek</th>
                      <th className="border border-white p-3 text-center">Mandiri</th>
                      <th className="border border-white p-3 text-center">Mitra JelantahGO</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-[#0F3D2E] p-3 font-semibold">Margin per Liter</td>
                      <td className="border border-[#0F3D2E] p-3 text-center">Tinggi (100% milik Anda)</td>
                      <td className="border border-[#0F3D2E] p-3 text-center">Sedang (berbagi margin)</td>
                    </tr>
                    <tr>
                      <td className="border border-[#0F3D2E] p-3 font-semibold">Kepastian Pembeli</td>
                      <td className="border border-[#0F3D2E] p-3 text-center">❌ Harus cari sendiri</td>
                      <td className="border border-[#0F3D2E] p-3 text-center">✅ Dijamin 100%</td>
                    </tr>
                    <tr>
                      <td className="border border-[#0F3D2E] p-3 font-semibold">Sistem Pembayaran</td>
                      <td className="border border-[#0F3D2E] p-3 text-center">Termin 30-90 hari</td>
                      <td className="border border-[#0F3D2E] p-3 text-center">Tunai/Transfer instan</td>
                    </tr>
                    <tr>
                      <td className="border border-[#0F3D2E] p-3 font-semibold">Risiko Pasar</td>
                      <td className="border border-[#0F3D2E] p-3 text-center">❌ Ditanggung sendiri</td>
                      <td className="border border-[#0F3D2E] p-3 text-center">✅ Ditanggung JelantahGO</td>
                    </tr>
                    <tr>
                      <td className="border border-[#0F3D2E] p-3 font-semibold">Modal Kerja</td>
                      <td className="border border-[#0F3D2E] p-3 text-center">Besar (untuk termin pembayaran)</td>
                      <td className="border border-[#0F3D2E] p-3 text-center">Kecil (pembayaran tunai)</td>
                    </tr>
                    <tr>
                      <td className="border border-[#0F3D2E] p-3 font-semibold">Dukungan & Training</td>
                      <td className="border border-[#0F3D2E] p-3 text-center">❌ Belajar sendiri</td>
                      <td className="border border-[#0F3D2E] p-3 text-center">✅ Disediakan JelantahGO</td>
                    </tr>
                    <tr>
                      <td className="border border-[#0F3D2E] p-3 font-semibold">Kredibilitas Brand</td>
                      <td className="border border-[#0F3D2E] p-3 text-center">Dibangun dari nol</td>
                      <td className="border border-[#0F3D2E] p-3 text-center">✅ Brand JelantahGO</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Kesimpulan */}
            <div className="card-premium bg-[#E8F0E3] border-l-4 border-l-[#0F3D2E] mb-8">
              <h3 className="text-2xl font-bold text-[#0F3D2E] mb-4">Kapan Memilih Jalur Mandiri vs. Kemitraan?</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Pilih Jalur Mandiri jika:</strong></p>
                <ul className="list-disc pl-6 space-y-1 ml-4">
                  <li>Anda sudah memiliki koneksi dengan pabrik biodiesel atau eksportir besar</li>
                  <li>Anda memiliki modal kerja yang sangat besar (minimal ratusan juta)</li>
                  <li>Anda siap menanggung risiko fluktuasi harga pasar</li>
                  <li>Anda ingin membangun brand sendiri dari awal</li>
                </ul>
                <p className="mt-4"><strong>Pilih Jalur Kemitraan jika:</strong></p>
                <ul className="list-disc pl-6 space-y-1 ml-4">
                  <li>Anda adalah pemula yang ingin belajar sambil menghasilkan</li>
                  <li>Modal kerja Anda terbatas</li>
                  <li>Anda ingin fokus pada pengumpulan tanpa pusing mencari pembeli</li>
                  <li>Anda ingin mengurangi risiko dan mendapatkan keuntungan yang lebih pasti</li>
                  <li>Anda ingin mendapatkan dukungan dan menjadi bagian dari komunitas</li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="card-premium bg-gradient-to-br from-[#E8F0E3] to-[#D9E3D3] border-l-4 border-l-[#0F3D2E] text-center mt-12">
              <h2 className="text-2xl font-bold text-[#0F3D2E] mb-4">
                Siap Memilih Jalur Anda?
              </h2>
              <p className="text-gray-700 mb-6">
                Kedua jalur memiliki kelebihan dan kekurangannya masing-masing. Pilih yang paling sesuai dengan situasi, sumber daya, dan tujuan jangka panjang Anda. Jika Anda tertarik untuk menjadi mitra JelantahGO, kami siap membantu Anda memulai perjalanan wirausaha yang lebih aman dan terstruktur.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/mitra"
                  className="inline-block bg-[#0F3D2E] text-white hover:bg-[#134E3A] px-8 py-4 rounded-card font-bold text-lg transition-smooth shadow-soft-lg hover:shadow-soft-xl"
                >
                  Pelajari Program Mitra →
                </Link>
                <a
                  href="https://wa.me/6285183033995?text=Halo%20JelantahGO,%20saya%20tertarik%20jadi%20mitra%20pengepul%20jelantah"
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
            <BlogArticleFooter currentSlug="mitra-jelantahgo-vs-mandiri" />
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

