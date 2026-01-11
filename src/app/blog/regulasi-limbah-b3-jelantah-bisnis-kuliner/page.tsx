'use client'

import Image from 'next/image'
import Link from 'next/link'
import BlogSidebar from '@/components/BlogSidebar'
import BlogArticleFooter from '@/components/BlogArticleFooter'
import ArticleSchema from '@/components/ArticleSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { FileText, AlertTriangle, CheckCircle, Shield } from 'lucide-react'

export default function RegulasiB3Page() {
  return (
    <>
      <ArticleSchema
        title="Regulasi Limbah B3 Jelantah: Panduan Bisnis Kuliner"
        description="Pahami kewajiban hukum pengelolaan limbah B3 jelantah untuk restoran, hotel, dan katering. PP No. 22/2021, sanksi, dokumentasi, dan solusi kepatuhan dengan JelantahGO."
        image="https://res.cloudinary.com/dknswj9co/image/upload/v1761163994/jelantahgo_1_x1hcjb.webp"
        datePublished="2025-10-16"
        dateModified="2025-10-16"
        articleUrl="https://jelantahgo.com/blog/regulasi-limbah-b3-jelantah-bisnis-kuliner"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://jelantahgo.com' },
          { name: 'Blog', url: 'https://jelantahgo.com/blog' },
          { name: 'Regulasi Limbah B3 Jelantah: Panduan Bisnis Kuliner', url: 'https://jelantahgo.com/blog/regulasi-limbah-b3-jelantah-bisnis-kuliner' },
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
              Regulasi Limbah B3 Jelantah di Indonesia
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Apa yang Perlu Diketahui Pebisnis Kuliner?
            </p>
            <p className="text-sm text-white/80 mt-2">Terakhir diperbarui: 3 November 2025</p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <Image
            src="https://res.cloudinary.com/dknswj9co/image/upload/v1761163994/jelantahgo_1_x1hcjb.webp"
            alt="Regulasi Limbah B3 Jelantah di Indonesia"
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
              Bagi seorang pengusaha di industri Makanan & Minuman (F&B), kata "limbah" seringkali identik dengan biaya dan kerepotan. Namun, ada satu jenis limbah dapur yang statusnya jauh lebih serius dari sisa makanan biasa: minyak jelantah.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Mungkin terdengar mengejutkan, tetapi menurut hukum di Indonesia, minyak goreng bekas yang dihasilkan oleh restoran, hotel, dan katering Anda diklasifikasikan sebagai <strong>Limbah Bahan Berbahaya dan Beracun (B3)</strong>. Memahami kewajiban hukum Anda adalah kunci untuk operasional bisnis yang aman dan berkelanjutan. Artikel ini adalah bagian dari eksplorasi lengkap tentang <Link href="/blog/ancaman-dan-peluang-minyak-jelantah" className="text-[#0F3D2E] font-semibold hover:underline">bahaya dan peluang emas minyak jelantah</Link>.
            </p>

            {/* Dasar Hukum */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-[#0F3D2E]" />
                <h2 className="text-3xl font-bold text-[#0F3D2E]">Dasar Hukum: Mengapa Jelantah adalah Limbah B3?</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Landasan hukum utama yang mengatur hal ini adalah <strong>Peraturan Pemerintah (PP) Nomor 22 Tahun 2021 tentang Penyelenggaraan Perlindungan dan Pengelolaan Lingkungan Hidup</strong>. Dalam lampiran peraturan ini, minyak jelantah secara eksplisit dikategorikan sebagai Limbah B3 dari sumber spesifik tidak umum dengan <strong>kode limbah B105d</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Mengapa dikategorikan sebagai B3? Alasannya bukan karena ia beracun jika disentuh, melainkan karena sifat dan dampaknya saat dilepaskan ke lingkungan tanpa pengolahan:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Karakteristik Korosif & Iritan:</strong> Minyak yang terdegradasi memiliki kadar Asam Lemak Bebas (FFA) yang tinggi, membuatnya bersifat asam dan dapat merusak ekosistem.</li>
                <li><strong>Dampak Ekologis Luas:</strong> Kemampuannya untuk mencemari ribuan liter air, merusak biota perairan, dan menyumbat infrastruktur (fenomena fatberg) memberinya status "berbahaya" bagi lingkungan.</li>
                <li><strong>Potensi Kontaminan Beracun:</strong> Pemanasan berulang menghasilkan senyawa-senyawa baru yang berbahaya, yang jika masuk ke rantai makanan dapat berdampak buruk.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Dengan status ini, setiap restoran, hotel, atau pabrik makanan yang menghasilkan jelantah secara otomatis menjadi <strong>"Penghasil Limbah B3"</strong> dan terikat pada peraturan pengelolaannya.
              </p>
            </section>

            {/* Kewajiban */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-[#0F3D2E]" />
                <h2 className="text-3xl font-bold text-[#0F3D2E]">Kewajiban Utama Anda Sebagai Penghasil Limbah B3 Jelantah</h2>
              </div>

              <div className="space-y-6">
                <div className="card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">1. Identifikasi dan Pencatatan Limbah</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Anda wajib mengetahui jenis dan volume limbah B3 yang Anda hasilkan. Ini berarti Anda harus memiliki sistem untuk mencatat atau setidaknya mengestimasi berapa liter minyak jelantah yang diproduksi oleh dapur Anda setiap hari, minggu, atau bulan. Data ini penting untuk perencanaan penyimpanan dan pelaporan jika diperlukan.
                  </p>
                </div>

                <div className="card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">2. Penyimpanan Sesuai Standar</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Anda tidak bisa menyimpan Limbah B3 jelantah secara sembarangan. Aturan mengharuskan penyimpanan di <strong>Tempat Penyimpanan Sementara (TPS) Limbah B3</strong> yang memenuhi syarat:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Wadah yang Sesuai:</strong> Limbah harus disimpan dalam wadah yang kuat, tidak mudah bocor atau berkarat, dan tertutup rapat. Drum logam atau plastik HDPE adalah standar industri.</li>
                    <li><strong>Label dan Simbol:</strong> Wadah penyimpanan harus diberi label yang jelas bertuliskan "LIMBAH B3" dan simbol B3 yang sesuai. Label juga harus mencantumkan identitas penghasil (nama restoran Anda), tanggal pengemasan, dan kode limbah.</li>
                    <li><strong>Lokasi Penyimpanan:</strong> Area penyimpanan harus terlindung dari hujan dan sinar matahari langsung, memiliki ventilasi yang baik, dan berada di lokasi yang aman untuk mencegah tumpahan yang tidak disengaja.</li>
                    <li><strong>Durasi Penyimpanan:</strong> Ada batas waktu maksimal penyimpanan Limbah B3 di TPS sebelum diserahkan ke pengelola berizin, biasanya antara 90 hingga 365 hari tergantung volume yang dihasilkan.</li>
                  </ul>
                </div>

                <div className="card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">3. Penyerahan kepada Pihak Berizin</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Ini adalah poin paling krusial. Sebagai penghasil, Anda <strong>DILARANG</strong> menyerahkan, membuang, atau memberikan Limbah B3 jelantah kepada pihak yang tidak memiliki izin pengelolaan atau pengangkutan Limbah B3 dari KLHK.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Artinya, Anda tidak bisa sekadar memberikannya kepada perorangan atau pengepul informal yang tidak jelas status legalitasnya. Tanggung jawab hukum Anda sebagai penghasil baru berakhir ketika limbah tersebut telah diserahkan secara sah kepada pihak ketiga yang berizin.
                  </p>
                </div>

                <div className="card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">4. Dokumentasi (Bukti Kepatuhan Anda)</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Setiap kali Anda menyerahkan Limbah B3, harus ada dokumen yang membuktikannya. Dokumen ini, yang sering disebut <strong>manifest</strong> atau <strong>bukti serah terima</strong>, adalah bukti hukum Anda bahwa Anda telah mengelola limbah sesuai peraturan. Dokumen ini harus mencatat:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Nama dan alamat penghasil (restoran Anda)</li>
                    <li>Nama dan alamat pengangkut/pengumpul</li>
                    <li>Jenis dan jumlah (volume/berat) limbah yang diserahkan</li>
                    <li>Tanggal transaksi</li>
                    <li>Tanda tangan dari kedua belah pihak</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    Menyimpan arsip dokumen-dokumen ini sangat penting untuk audit atau inspeksi dari Dinas Lingkungan Hidup.
                  </p>
                </div>
              </div>
            </section>

            {/* Risiko Sanksi */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                <h2 className="text-3xl font-bold text-[#0F3D2E]">Risiko dan Sanksi Hukum</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Pelanggaran terhadap peraturan pengelolaan Limbah B3 dapat mengakibatkan sanksi yang serius:
              </p>
              <div className="card-premium bg-red-50 border-l-4 border-red-500">
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Sanksi Administratif:</strong> Peringatan, denda administratif, atau pencabutan izin usaha</li>
                  <li><strong>Sanksi Pidana:</strong> Menurut UU No. 32/2009 tentang Perlindungan dan Pengelolaan Lingkungan Hidup, pelanggaran dapat dikenai pidana penjara dan/atau denda</li>
                  <li><strong>Tanggung Jawab Perdata:</strong> Jika limbah yang tidak dikelola dengan benar menyebabkan kerusakan lingkungan, Anda dapat dituntut ganti rugi</li>
                </ul>
              </div>
            </section>

            {/* Solusi */}
            <div className="card-premium bg-gradient-to-br from-[#E8F0E3] to-[#D9E3D3] border-l-4 border-l-[#0F3D2E] mt-12">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-[#0F3D2E]" />
                <h2 className="text-2xl font-bold text-[#0F3D2E]">Solusi Praktis: Bekerja dengan Pengepul Berizin</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Cara terbaik untuk memastikan kepatuhan hukum adalah bekerja sama dengan pengepul atau perusahaan yang memiliki izin pengelolaan Limbah B3 dari KLHK. JelantahGO adalah perusahaan yang berizin dan dapat membantu Anda mengelola limbah jelantah sesuai dengan regulasi yang berlaku, sekaligus memberikan nilai ekonomi dari limbah tersebut.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-block bg-[#0F3D2E] text-white hover:bg-[#134E3A] px-8 py-4 rounded-card font-bold text-lg transition-smooth shadow-soft-lg hover:shadow-soft-xl"
                >
                  Hubungi JelantahGO →
                </Link>
                <a
                  href="https://wa.me/6285183033995?text=Halo%20JelantahGO,%20saya%20pemilik%20restoran%20dan%20ingin%20mengelola%20limbah%20jelantah%20sesuai%20regulasi"
                  target="_blank"
                  rel="noopener"
                  className="inline-block bg-[#25D366] text-white hover:bg-[#20BA5A] px-8 py-4 rounded-card font-bold text-lg transition-smooth shadow-soft-lg hover:shadow-soft-xl"
                >
                  WhatsApp Sekarang
                </a>
              </div>
            </div>
            </div>

            {/* Article Footer */}
            <BlogArticleFooter currentSlug="regulasi-limbah-b3-jelantah-bisnis-kuliner" />
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

