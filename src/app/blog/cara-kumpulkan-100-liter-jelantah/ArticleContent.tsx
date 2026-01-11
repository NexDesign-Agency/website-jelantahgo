import Image from 'next/image'
import Link from 'next/link'
import BlogSidebar from '@/components/BlogSidebar'
import BlogArticleFooter from '@/components/BlogArticleFooter'
import ArticleSchema from '@/components/ArticleSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { Users, Store, School, Calendar, Package, Gift, Lightbulb } from 'lucide-react'

export default function ArticleContent() {
  return (
    <>
      <ArticleSchema
        title="10 Cara Kumpulkan 100 Liter Jelantah = Rp 800rb/Bulan dengan Harga Rp 7.500-8.500/L"
        description="Target 100 liter jelantah per bulan = potensi Rp 800rb! Pelajari 10 strategi praktis: komunitas, warung makan, program kolektif RT/RW untuk profit maksimal dengan harga baru."
        image="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163998/jelantahgo_26_hmnqjl.webp"
        datePublished="2025-10-01"
        dateModified="2025-10-01"
        articleUrl="https://jelantahgo.com/blog/cara-kumpulkan-100-liter-jelantah"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://jelantahgo.com' },
          { name: 'Blog', url: 'https://jelantahgo.com/blog' },
          { name: '10 Cara Mengumpulkan 100 Liter Jelantah per Bulan', url: 'https://jelantahgo.com/blog/cara-kumpulkan-100-liter-jelantah' },
        ]}
      />
      {/* Hero Section */}
      <section className="hero-bg-dots py-20 lg:py-28">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-[#D9E3D3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Panduan Jual Jelantah
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              10 Cara Mengumpulkan 100 Liter Jelantah per Bulan
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Dari Rumah dengan Strategi yang Tepat
            </p>
            <p className="text-sm text-white/80 mt-2">Terakhir diperbarui: 1 Oktober 2025</p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <Image
            src="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761163998/jelantahgo_26_hmnqjl.webp"
            alt="10 Cara Mengumpulkan 100 Liter Jelantah per Bulan"
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
              Mencapai target 100 liter jelantah per bulan dari rumah mungkin terdengar sulit, tetapi dengan strategi yang tepat, hal ini sangat mungkin dicapai. Kuncinya adalah memperluas jaringan Anda dan membuat sistem pengumpulan yang efisien.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Berikut adalah 10 cara praktis yang bisa Anda terapkan untuk mengumpulkan jelantah dalam jumlah besar setiap bulannya. Strategi ini adalah bagian dari <Link href="/blog/panduan-jual-minyak-jelantah" className="text-[#0F3D2E] font-semibold hover:underline">panduan lengkap jual minyak jelantah</Link> yang kami sediakan.
            </p>

            {/* 10 Cara */}
            <div className="space-y-6">
              <div className="card-premium">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0F3D2E] text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-5 h-5 text-[#0F3D2E]" />
                      <h3 className="text-xl font-bold text-[#0F3D2E]">Ajak Keluarga Besar</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Ini adalah langkah pertama yang paling mudah. Hubungi semua anggota keluarga besar Anda—paman, bibi, sepupu, kakek-nenek—dan minta mereka untuk tidak membuang jelantah. Sediakan jeriken kecil untuk masing-masing keluarga dan ambil setoran mereka setiap akhir pekan.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-premium">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0F3D2E] text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-5 h-5 text-[#0F3D2E]" />
                      <h3 className="text-xl font-bold text-[#0F3D2E]">Bentuk Jaringan di Lingkungan RT/RW</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Gunakan grup WhatsApp RT atau RW untuk sosialisasi. Umumkan bahwa Anda menerima setoran minyak jelantah. Tawarkan sistem bagi hasil sederhana, misalnya Rp 1.000 per liter untuk mereka, sementara Anda menjualnya dengan harga lebih tinggi. Ini menciptakan situasi menang-menang.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-premium">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0F3D2E] text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Store className="w-5 h-5 text-[#0F3D2E]" />
                      <h3 className="text-xl font-bold text-[#0F3D2E]">Kerja Sama dengan Warung Makan & Penjual Gorengan</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Warung makan, kafe, dan penjual gorengan adalah sumber jelantah terbesar. Datangi mereka dan tawarkan kerja sama penjemputan rutin. Mereka pasti senang karena Anda menyelesaikan masalah limbah mereka, dan Anda mendapatkan pasokan dalam jumlah besar.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-premium">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0F3D2E] text-white rounded-full flex items-center justify-center font-bold text-xl">4</div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <School className="w-5 h-5 text-[#0F3D2E]" />
                      <h3 className="text-xl font-bold text-[#0F3D2E]">Buat Program di Sekolah Anak</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Bekerja sama dengan komite sekolah atau OSIS untuk membuat program pengumpulan jelantah. Setiap siswa bisa membawa jelantah dari rumah. Dana yang terkumpul bisa digunakan untuk kegiatan sekolah. Ini sekaligus menjadi media edukasi lingkungan yang baik.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-premium">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0F3D2E] text-white rounded-full flex items-center justify-center font-bold text-xl">5</div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-5 h-5 text-[#0F3D2E]" />
                      <h3 className="text-xl font-bold text-[#0F3D2E]">Manfaatkan Momen Hari Raya</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Saat Lebaran, Natal, atau acara keluarga besar lainnya, produksi jelantah biasanya meningkat drastis. Ingatkan keluarga dan tetangga seminggu sebelum hari H untuk menyimpan jelantah sisa memasak. Anda bisa melakukan "panen raya" setelah acara selesai.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-premium">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0F3D2E] text-white rounded-full flex items-center justify-center font-bold text-xl">6</div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Package className="w-5 h-5 text-[#0F3D2E]" />
                      <h3 className="text-xl font-bold text-[#0F3D2E]">Sediakan Titik Pengumpulan (Drop Point)</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Jika Anda punya sedikit ruang di depan rumah, sediakan drum atau beberapa jeriken besar sebagai titik pengumpulan. Beri label yang jelas. Tetangga bisa datang kapan saja untuk menyetor jelantah mereka tanpa harus menunggu Anda di rumah.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-premium">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0F3D2E] text-white rounded-full flex items-center justify-center font-bold text-xl">7</div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Store className="w-5 h-5 text-[#0F3D2E]" />
                      <h3 className="text-xl font-bold text-[#0F3D2E]">Tawarkan Layanan Jemput Gratis</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Untuk tetangga atau warung yang lokasinya agak jauh, tawarkan layanan jemput gratis jika mereka sudah mengumpulkan volume tertentu (misalnya, minimal 5 liter). Kemudahan ini akan membuat mereka lebih termotivasi untuk bekerja sama dengan Anda.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-premium">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0F3D2E] text-white rounded-full flex items-center justify-center font-bold text-xl">8</div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Gift className="w-5 h-5 text-[#0F3D2E]" />
                      <h3 className="text-xl font-bold text-[#0F3D2E]">Buat Kompetisi Kecil</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Di lingkungan perumahan, adakan kompetisi "penyetor jelantah terbanyak" setiap bulan. Hadiahnya tidak perlu mahal, bisa berupa sembako, pulsa, atau produk rumah tangga. Sedikit gamifikasi bisa meningkatkan partisipasi secara signifikan.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-premium">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0F3D2E] text-white rounded-full flex items-center justify-center font-bold text-xl">9</div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="w-5 h-5 text-[#0F3D2E]" />
                      <h3 className="text-xl font-bold text-[#0F3D2E]">Edukasi Manfaat dan Bahaya</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Bagikan artikel atau infografis sederhana di media sosial atau grup lingkungan tentang bahaya membuang jelantah sembarangan dan manfaat ekonomisnya jika dikumpulkan. Semakin banyak orang yang sadar, semakin mudah Anda mendapatkan pasokan.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-premium bg-gradient-to-br from-[#E8F0E3] to-[#D9E3D3] border-l-4 border-l-[#0F3D2E]">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0F3D2E] text-white rounded-full flex items-center justify-center font-bold text-xl">10</div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-5 h-5 text-[#0F3D2E]" />
                      <h3 className="text-xl font-bold text-[#0F3D2E]">Bergabung sebagai Mitra JelantahGO</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Dengan menjadi mitra resmi JelantahGO, Anda akan mendapatkan dukungan penuh, mulai dari materi promosi, wadah pengumpulan standar, hingga harga jual yang pasti dan kompetitif. Ini adalah cara untuk meformalkan usaha Anda dan menaikkannya ke level berikutnya.
                    </p>
                    <Link
                      href="/mitra"
                      className="inline-block bg-[#0F3D2E] text-white hover:bg-[#134E3A] px-6 py-3 rounded-card font-bold transition-smooth shadow-soft hover:shadow-soft-lg"
                    >
                      Pelajari Program Mitra →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="card-premium bg-[#E8F0E3] border-l-4 border-l-[#0F3D2E] mt-8">
              <h3 className="text-2xl font-bold text-[#0F3D2E] mb-4">Tips Sukses Mencapai Target 100 Liter</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Konsistensi adalah Kunci:</strong> Jadwalkan waktu tertentu setiap minggu untuk mengambil setoran dari jaringan Anda.</li>
                <li><strong>Komunikasi Aktif:</strong> Rajin mengingatkan dan follow up dengan kontak Anda. Jangan biarkan mereka lupa menyimpan jelantah.</li>
                <li><strong>Hargai Kontributor:</strong> Sekecil apapun kontribusi mereka, hargai dan ucapkan terima kasih. Ini membangun loyalitas jangka panjang.</li>
                <li><strong>Ekspansi Bertahap:</strong> Mulai dari lingkaran terdekat, lalu perlahan-lahan perluas ke area yang lebih luas.</li>
              </ul>
            </div>

            {/* CTA */}
            <div className="card-premium bg-gradient-to-br from-[#E8F0E3] to-[#D9E3D3] border-l-4 border-l-[#0F3D2E] text-center mt-12">
              <h2 className="text-2xl font-bold text-[#0F3D2E] mb-4">
                Mulai Kumpulkan Jelantah Hari Ini!
              </h2>
              <p className="text-gray-700 mb-6">
                Dengan 10 strategi di atas, target 100 liter per bulan bukan lagi mimpi. Yang terpenting adalah memulai dan konsisten. Mari bersama-sama mengubah limbah menjadi berkah.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/blog/cara-jual-minyak-jelantah-3-langkah"
                  className="inline-block bg-[#0F3D2E] text-white hover:bg-[#134E3A] px-8 py-4 rounded-card font-bold text-lg transition-smooth shadow-soft-lg hover:shadow-soft-xl"
                >
                  Cara Jual: 3 Langkah Mudah →
                </Link>
                <Link
                  href="/blog/panduan-jual-minyak-jelantah"
                  className="inline-block bg-white border-2 border-[#0F3D2E] text-[#0F3D2E] hover:bg-[#F9F8F6] px-8 py-4 rounded-card font-bold text-lg transition-smooth shadow-soft-lg hover:shadow-soft-xl"
                >
                  Panduan Lengkap →
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
            <BlogArticleFooter currentSlug="cara-kumpulkan-100-liter-jelantah" />
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