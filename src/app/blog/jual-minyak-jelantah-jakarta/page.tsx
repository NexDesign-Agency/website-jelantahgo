import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import BlogSidebar from '@/components/BlogSidebar'
import BlogArticleFooter from '@/components/BlogArticleFooter'
import ArticleSchema from '@/components/ArticleSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ReadingTime from '@/components/ReadingTime'
import FAQSchema from '@/components/FAQSchema'

export const metadata: Metadata = {
  title: 'Jual Minyak Jelantah Jakarta | Harga Rp 7.500-8.500/L',
  description: 'Panduan lengkap jual minyak jelantah di Jakarta harga premium Rp 7.500-8.500/liter! Penjemputan gratis ≥40L seluruh DKI, response 5-30 menit, bayar tunai instant.',
  alternates: {
    canonical: 'https://jelantahgo.com/blog/jual-minyak-jelantah-jakarta',
  },
  openGraph: {
    title: 'Jual Minyak Jelantah Jakarta | Harga Rp 7.500-8.500/L',
    description: 'Panduan lengkap jual minyak jelantah di Jakarta harga premium Rp 7.500-8.500/liter! Penjemputan gratis ≥40L seluruh DKI, response 5-30 menit, bayar tunai instant.',
    url: 'https://jelantahgo.com/blog/jual-minyak-jelantah-jakarta',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163996/jelantahgo_10_rhxacq.webp',
        width: 1200,
        height: 630,
        alt: 'Jual Minyak Jelantah Jakarta',
      },
    ],
    locale: 'id_ID',
    type: 'article',
    publishedTime: '2025-11-15T00:00:00+07:00',
    modifiedTime: '2025-11-15T00:00:00+07:00',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jual Minyak Jelantah Jakarta | Harga Rp 7.500-8.500/L',
    description: 'Panduan lengkap jual minyak jelantah di Jakarta harga premium Rp 7.500-8.500/liter! Penjemputan gratis ≥40L seluruh DKI, response 5-30 menit, bayar tunai instant.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163996/jelantahgo_10_rhxacq.webp'],
  },
}

export default function JualJakartaPage() {
  return (
    <>
      <ArticleSchema
        title="Jual Minyak Jelantah Jakarta | Panduan Lengkap 2025"
        description="Panduan lengkap jual minyak jelantah di semua wilayah DKI Jakarta. Harga terbaru, cara jual, tips memilih pengepul terpercaya, dan layanan jemput gratis ke lokasi Anda."
        image="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163996/jelantahgo_10_rhxacq.webp"
        datePublished="2025-11-15"
        dateModified="2025-11-15"
        articleUrl="https://jelantahgo.com/blog/jual-minyak-jelantah-jakarta"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://jelantahgo.com' },
          { name: 'Blog', url: 'https://jelantahgo.com/blog' },
          { name: 'Jual Minyak Jelantah Jakarta', url: 'https://jelantahgo.com/blog/jual-minyak-jelantah-jakarta' },
        ]}
      />
      {/* Hero Section */}
      <section className="hero-bg-dots py-20 lg:py-28">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-[#D9E3D3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              ⭐ ARTIKEL PILAR LOKAL
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Jual Minyak Jelantah Jakarta | Panduan Lengkap 2025
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Panduan Lengkap & Harga Terbaru 2025
            </p>
            <div className="flex items-center gap-4 mt-4">
              <p className="text-sm text-white/80">Terakhir diperbarui: 15 November 2025</p>
              <ReadingTime wordCount={3500} />
            </div>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <Image
            src="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761163996/jelantahgo_10_rhxacq.webp"
            alt="Jual Minyak Jelantah Jakarta"
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
              Di tengah hiruk pikuk Jakarta, kota dengan lebih dari 10 juta penduduk dan puluhan ribu restoran, kafe, serta pedagang kaki lima, ada satu komoditas yang diproduksi dalam jumlah masif setiap harinya: minyak jelantah. Limbah dapur ini, jika tidak dikelola dengan benar, menjadi salah satu kontributor utama masalah klasik Ibu Kota: saluran air mampet dan risiko banjir yang meningkat.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Kabar baiknya, limbah ini adalah aset yang sangat berharga. Bagi Anda, warga atau pebisnis di Jakarta, menjual minyak jelantah bukan hanya tindakan peduli lingkungan, tetapi juga sumber pendapatan tambahan yang signifikan. Namun, pertanyaan seringkali muncul: "Di mana saya bisa <strong>jual minyak jelantah di Jakarta</strong> dengan harga terbaik?", "Siapa pengepul yang bisa dipercaya?", "Apakah mereka bisa menjemput ke lokasi saya?". Artikel ini adalah jawaban terlengkap untuk semua pertanyaan Anda.
            </p>

            {/* Table of Contents */}
            <div className="card-premium bg-[#E8F0E3] border-l-4 border-l-[#0F3D2E] mb-8">
              <h2 className="text-2xl font-bold text-[#0F3D2E] mb-4">Panduan Lengkap Area Jakarta</h2>
              <ul className="space-y-2 text-gray-700">
                <li><a href="#harga-jakarta" className="text-[#0F3D2E] hover:underline">1. Update Harga Minyak Jelantah di Jakarta (November 2025)</a></li>
                <li><a href="#mengapa-jual" className="text-[#0F3D2E] hover:underline">2. Mengapa Menjual Jelantah di Jakarta Sangat Penting?</a></li>
                <li><a href="#cara-jual" className="text-[#0F3D2E] hover:underline">3. Cara Praktis Jual Minyak Jelantah di Jakarta (4 Langkah Mudah)</a></li>
                <li><a href="#jangkauan" className="text-[#0F3D2E] hover:underline">4. Jangkauan Layanan JelantahGO di 5 Wilayah Jakarta</a></li>
                <li><a href="#studi-kasus" className="text-[#0F3D2E] hover:underline">5. Studi Kasus Lokal: Kisah Sukses dari Jantung Ibu Kota</a></li>
                <li><a href="#faq" className="text-[#0F3D2E] hover:underline">6. Pertanyaan Umum (FAQ) Seputar Jual Jelantah di Jakarta</a></li>
              </ul>
            </div>

            {/* Harga Jakarta */}
            <section id="harga-jakarta" className="mb-12">
              <h2 className="text-3xl font-bold text-[#0F3D2E] mb-4">1. Update Harga Minyak Jelantah di Jakarta (November 2025)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Harga adalah faktor penentu bagi banyak orang. Penting untuk diketahui bahwa harga jelantah bersifat dinamis. Namun, sebagai pengepul jelantah terkemuka di Jakarta, JelantahGO selalu berupaya memberikan penawaran terbaik dan paling transparan.
              </p>
              <div className="card-premium border-2 border-dashed border-[#0F3D2E] text-center mb-6">
                <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Estimasi Harga Beli JelantahGO untuk Area Jakarta</h3>
                <p className="text-2xl font-bold text-[#0F3D2E] mb-4">Rp 7.800 - Rp 8.800 per Liter</p>
                <ul className="text-left space-y-2 text-gray-700 max-w-md mx-auto mb-4">
                  <li><strong>40 - 99 Liter:</strong> ~ Rp 7.800 / Liter</li>
                  <li><strong>100 - 199 Liter:</strong> ~ Rp 8.300 / Liter</li>
                  <li><strong>200+ Liter:</strong> ~ Rp 8.800 / Liter</li>
                </ul>
                <p className="text-gray-600 text-sm">
                  Harga final akan ditentukan oleh volume, kualitas, dan kemudahan akses di lokasi. Hubungi tim kami untuk mendapatkan penawaran akurat hari ini!
                </p>
              </div>
            </section>

            {/* Mengapa Jual */}
            <section id="mengapa-jual" className="mb-12">
              <h2 className="text-3xl font-bold text-[#0F3D2E] mb-4">2. Mengapa Menjual Jelantah di Jakarta Sangat Penting?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Di kota padat seperti Jakarta, dampak dari satu tindakan kecil bisa menjadi sangat besar jika dilakukan oleh jutaan orang. Membuang jelantah ke selokan bukan lagi sekadar kebiasaan buruk, melainkan kontribusi langsung pada masalah kota.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Mencegah Banjir:</strong> Jelantah adalah bahan utama pembentuk <em>fatberg</em>, gumpalan lemak beku yang menyumbat sistem drainase. Dengan menjual jelantah, Anda membantu menjaga kelancaran saluran air dan mengurangi risiko banjir lokal di lingkungan Anda.</li>
                <li><strong>Menjaga Kebersihan Lingkungan:</strong> Teluk Jakarta sudah menghadapi tantangan pencemaran yang berat. Menghentikan aliran limbah jelantah dari dapur kita adalah langkah nyata untuk tidak memperburuk kondisi perairan.</li>
                <li><strong>Peluang Ekonomi:</strong> Di tengah biaya hidup Jakarta yang tinggi, mengubah limbah dapur menjadi ratusan ribu hingga jutaan rupiah setiap bulan adalah langkah finansial yang cerdas.</li>
              </ul>
            </section>

            {/* Cara Jual */}
            <section id="cara-jual" className="mb-12">
              <h2 className="text-3xl font-bold text-[#0F3D2E] mb-4">3. Cara Praktis Jual Minyak Jelantah di Jakarta (4 Langkah Mudah)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kami merancang prosesnya agar sangat mudah, bahkan di tengah kesibukan Jakarta.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                💡 <strong>Panduan Cepat:</strong> Untuk panduan step-by-step yang lebih detail, baca <Link href="/blog/cara-jual-minyak-jelantah-3-langkah" className="text-[#0F3D2E] font-semibold hover:underline">Cara Jual Minyak Jelantah: 3 Langkah Mudah</Link>
              </p>
              <ol className="list-decimal pl-6 space-y-3 text-gray-700">
                <li><strong>Kumpulkan Jelantah Anda:</strong> Simpan jelantah dalam jeriken atau wadah tertutup lainnya hingga mencapai minimal 40 liter.</li>
                <li><strong>Hubungi JelantahGO:</strong> Kirim pesan WhatsApp ke nomor kami. Cukup sebutkan nama, estimasi volume, dan alamat lengkap Anda di Jakarta.</li>
                <li><strong>Jadwalkan Penjemputan:</strong> Tim kami akan menghubungi Anda untuk mengkonfirmasi jadwal penjemputan yang paling sesuai, dengan mempertimbangkan kondisi lalu lintas Jakarta.</li>
                <li><strong>Terima Pembayaran di Tempat:</strong> Tim kami akan datang, menimbang jelantah secara transparan di depan Anda, dan langsung melakukan pembayaran tunai. Selesai!</li>
              </ol>
            </section>

            {/* Jangkauan */}
            <section id="jangkauan" className="mb-12">
              <h2 className="text-3xl font-bold text-[#0F3D2E] mb-4">4. Jangkauan Layanan JelantahGO di 5 Wilayah Jakarta</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Kami bangga dapat melayani seluruh penjuru DKI Jakarta. Tim kami yang berbasis di berbagai titik strategis memastikan kami bisa menjangkau Anda dengan cepat.
              </p>

              <div className="space-y-6">
                <div className="card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Jakarta Selatan: Pusat Gaya Hidup & Kuliner</h3>
                  <p className="text-gray-700 mb-2">
                    Dengan denyut kehidupan malam dan ribuan kafe serta restorannya, Jakarta Selatan adalah penghasil jelantah volume tinggi. Kami menawarkan solusi yang cepat dan profesional untuk area sibuk ini. Baca panduan lengkap untuk <Link href="/blog/pengepul-jelantah-jakarta-selatan" className="text-[#0F3D2E] font-semibold hover:underline">pengepul jelantah Jakarta Selatan</Link>.
                  </p>
                  <p className="text-gray-600 text-sm">
                    <strong>Wilayah:</strong> Kebayoran Baru, Kebayoran Lama, Pesanggrahan, Cilandak, Pasar Minggu, Jagakarsa, Mampang Prapatan, Pancoran, Tebet, Setiabudi.
                  </p>
                </div>

                <div className="card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Jakarta Pusat: Jantung Bisnis & Pemerintahan</h3>
                  <p className="text-gray-700 mb-2">
                    Hotel, mal, dan gedung perkantoran di Jakarta Pusat membutuhkan lebih dari sekadar pengepul; mereka butuh partner manajemen limbah yang profesional dan patuh regulasi. Pelajari detail <Link href="/blog/manajemen-limbah-jelantah-jakarta-pusat" className="text-[#0F3D2E] font-semibold hover:underline">manajemen limbah jelantah Jakarta Pusat</Link> untuk lingkungan korporat.
                  </p>
                  <p className="text-gray-600 text-sm">
                    <strong>Wilayah:</strong> Gambir, Tanah Abang, Menteng, Senen, Cempaka Putih, Johar Baru, Kemayoran, Sawah Besar.
                  </p>
                </div>

                <div className="card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Jakarta Barat: Dinamika Perumahan & Komersial</h3>
                  <p className="text-gray-700 mb-2">
                    Dari komplek perumahan hingga UKM kuliner, Jakarta Barat memiliki kebutuhan yang beragam. Kami menyediakan solusi fleksibel untuk semua. Informasi lengkap tentang <Link href="/blog/jemput-jelantah-gratis-jakarta-barat" className="text-[#0F3D2E] font-semibold hover:underline">jemput jelantah gratis Jakarta Barat</Link> tersedia untuk Anda.
                  </p>
                  <p className="text-gray-600 text-sm">
                    <strong>Wilayah:</strong> Cengkareng, Grogol Petamburan, Taman Sari, Tambora, Kebon Jeruk, Kalideres, Palmerah, Kembangan.
                  </p>
                </div>

                <div className="card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Jakarta Timur: Area Industri & Pemukiman Padat</h3>
                  <p className="text-gray-700 mb-2">
                    Kekuatan Jakarta Timur terletak pada komunitas warganya yang solid dan banyaknya industri rumahan. Kami menawarkan program kolektif dan layanan B2B yang disesuaikan. Baca panduan spesifik untuk <Link href="/blog/jual-minyak-jelantah-jakarta-timur" className="text-[#0F3D2E] font-semibold hover:underline">jual minyak jelantah Jakarta Timur</Link>.
                  </p>
                  <p className="text-gray-600 text-sm">
                    <strong>Wilayah:</strong> Matraman, Jatinegara, Pulogadung, Cakung, Kramat Jati, Makasar, Pasar Rebo, Ciracas, Cipayung, Duren Sawit.
                  </p>
                </div>

                <div className="card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Jakarta Utara: Sentra Perdagangan & Kuliner Pesisir</h3>
                  <p className="text-gray-700 mb-2">
                    Bagi para pebisnis di surga kuliner Kelapa Gading, PIK, dan Muara Karang, mendapatkan harga terbaik adalah kunci. Cek <Link href="/blog/harga-jual-minyak-jelantah-jakarta-utara" className="text-[#0F3D2E] font-semibold hover:underline">harga jual minyak jelantah Jakarta Utara</Link> terbaru.
                  </p>
                  <p className="text-gray-600 text-sm">
                    <strong>Wilayah:</strong> Penjaringan, Pademangan, Tanjung Priok, Koja, Kelapa Gading, Cilincing.
                  </p>
                </div>
              </div>
            </section>

            {/* Studi Kasus */}
            <section id="studi-kasus" className="mb-12">
              <h2 className="text-3xl font-bold text-[#0F3D2E] mb-4">5. Studi Kasus Lokal: Kisah Sukses dari Jantung Ibu Kota</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Untuk memberi Anda gambaran nyata, mari kita lihat kisah sukses salah satu mitra kami, sebuah restoran SOTO BETAWI ternama di area Tebet, Jakarta Selatan.
              </p>
              <div className="card-premium bg-gradient-to-br from-[#F9F8F6] to-[#E8F0E3]">
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Masalah:</strong> Sebelum bermitra, mereka menghasilkan sekitar 15 liter jelantah setiap hari. Jelantah ini seringkali hanya diberikan kepada pengepul informal tanpa catatan dan dengan harga yang tidak menentu.</li>
                  <li><strong>Solusi:</strong> Mereka menjalin kontrak kerjasama dengan JelantahGO. Kami menyediakan drum 200L dan jadwal penjemputan rutin setiap minggu.</li>
                  <li><strong>Hasil:</strong>
                    <ul className="ml-6 mt-2 space-y-2">
                      <li>Volume Terkumpul per Bulan: ~15 Liter/hari x 28 hari = <strong>420 Liter</strong></li>
                      <li>Harga Jual (Tier Volume Besar): Rp 8.800 / Liter</li>
                      <li><strong>Pendapatan Tambahan per Bulan: 420 x Rp 8.800 = Rp 3.696.000</strong></li>
                      <li><strong>Pendapatan Tambahan per Tahun: ~Rp 44 Juta!</strong></li>
                    </ul>
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Dengan sistem yang profesional, limbah dapur yang tadinya tidak terurus kini menjadi sumber pendapatan tambahan yang signifikan, setara dengan gaji beberapa karyawan.
                </p>
              </div>
            </section>

            {/* FAQ */}
            <FAQSchema faqs={[
              {
                question: 'Berapa harga minyak jelantah per liter di Jakarta saat ini?',
                answer: 'Pada akhir tahun 2025, harga minyak jelantah di Jakarta berkisar antara Rp 7.800 hingga Rp 8.800 per liter. Harga ini dipengaruhi oleh volume penjualan, kualitas jelantah, dan lokasi penjemputan Anda di Jakarta. JelantahGO selalu menawarkan harga yang kompetitif dan transparan.',
              },
              {
                question: 'Apakah ada biaya penjemputan untuk area gang sempit di Jakarta?',
                answer: 'Tidak ada. Selama volume penjualan Anda memenuhi syarat minimal 40 liter, layanan penjemputan kami di seluruh wilayah Jakarta tetap GRATIS, termasuk untuk lokasi di dalam gang yang hanya bisa diakses oleh motor.',
              },
              {
                question: 'Bagaimana cara jual minyak jelantah di apartemen Jakarta?',
                answer: 'Sangat mudah. Anda bisa mengumpulkan jelantah secara kolektif bersama tetangga satu lantai atau satu tower. Setelah terkumpul minimal 40 liter, hubungi kami. Tim kami akan berkoordinasi dengan Anda untuk melakukan penjemputan di lobi atau area loading dock apartemen Anda.',
              },
            ]} />
            <section id="faq" className="mb-12">
              <h2 className="text-3xl font-bold text-[#0F3D2E] mb-6">6. Pertanyaan Umum (FAQ) Seputar Jual Jelantah di Jakarta</h2>
              
              <div className="space-y-6">
                <div className="card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">
                    Berapa harga minyak jelantah per liter di Jakarta saat ini?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Pada akhir tahun 2025, harga minyak jelantah di Jakarta berkisar antara Rp 7.800 hingga Rp 8.800 per liter. Harga ini dipengaruhi oleh volume penjualan, kualitas jelantah, dan lokasi penjemputan Anda di Jakarta. JelantahGO selalu menawarkan harga yang kompetitif dan transparan.
                  </p>
                </div>

                <div className="card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">
                    Apakah ada biaya penjemputan untuk area gang sempit di Jakarta?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Tidak ada. Selama volume penjualan Anda memenuhi syarat minimal 40 liter, layanan penjemputan kami di seluruh wilayah Jakarta tetap GRATIS, termasuk untuk lokasi di dalam gang yang hanya bisa diakses oleh motor.
                  </p>
                </div>

                <div className="card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">
                    Bagaimana cara jual minyak jelantah di apartemen Jakarta?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Sangat mudah. Anda bisa mengumpulkan jelantah secara kolektif bersama tetangga satu lantai atau satu tower. Setelah terkumpul minimal 40 liter, hubungi kami. Tim kami akan berkoordinasi dengan Anda untuk melakukan penjemputan di lobi atau area loading dock apartemen Anda.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <div className="card-premium bg-gradient-to-br from-[#E8F0E3] to-[#D9E3D3] border-l-4 border-l-[#0F3D2E] text-center">
              <h2 className="text-2xl font-bold text-[#0F3D2E] mb-4">
                Kesimpulan: JelantahGO, Solusi Anda untuk Jual Minyak Jelantah di Jakarta
              </h2>
              <p className="text-gray-700 mb-6">
                Menjual minyak jelantah di Jakarta kini lebih mudah dan menguntungkan dari sebelumnya. Anda tidak perlu lagi bingung mencari pembeli atau khawatir dengan pengepul yang tidak profesional. JelantahGO hadir sebagai solusi satu atap yang terpercaya, menawarkan harga terbaik, layanan penjemputan gratis yang andal, dan jangkauan di seluruh penjuru kota.
              </p>
              <p className="text-gray-700 mb-6">
                Baik Anda seorang ibu rumah tangga di Cipayung, pemilik kafe di Kemang, atau manajer hotel di Sudirman, kami siap menjadi partner Anda. Mari bersama-sama menjaga kebersihan Jakarta sambil mengubah limbah dapur menjadi aset yang berharga.
              </p>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">
                Warga & Pebisnis Jakarta, Siap Jual Jelantah Anda?
              </h3>
              <p className="text-gray-700 mb-6">
                Hubungi tim kami sekarang untuk mendapatkan penawaran harga terbaik dan menjadwalkan penjemputan gratis pertama Anda!
              </p>
              <a
                href="https://wa.me/6285183033995?text=Halo%20JelantahGO,%20saya%20di%20Jakarta%20dan%20ingin%20menjual%20minyak%20jelantah."
                target="_blank"
                rel="noopener"
                className="inline-block bg-[#25D366] text-white hover:bg-[#128C7E] px-8 py-4 rounded-full font-bold text-lg transition-smooth shadow-soft-lg hover:shadow-soft-xl"
              >
                Hubungi Kami via WhatsApp
              </a>
            </div>

            {/* Article Footer */}
            <BlogArticleFooter currentSlug="jual-minyak-jelantah-jakarta" />
              </div>
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

