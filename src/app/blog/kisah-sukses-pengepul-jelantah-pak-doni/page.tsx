'use client'

import Image from 'next/image'
import Link from 'next/link'
import BlogSidebar from '@/components/BlogSidebar'
import BlogArticleFooter from '@/components/BlogArticleFooter'
import ArticleSchema from '@/components/ArticleSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { Award, TrendingUp, Users, Target, CheckCircle } from 'lucide-react'

export default function KisahSuksesPakDoniPage() {
  return (
    <>
      <ArticleSchema
        title="Kisah Sukses Pak Doni: Pengepul Omzet 25+ Juta/Bulan dengan Harga Rp 7.500-8.500/L"
        description="Kisah inspiratif Pak Doni: dari karyawan pabrik jadi pengepul sukses omzet 25+ juta/bulan! Dengan harga baru Rp 7.500-8.500/L, profit naik 25%. Strategi scale-up bisnis pengepul jelantah."
        image="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163996/jelantahgo_5_mjney9.webp"
        datePublished="2025-10-12"
        dateModified="2025-10-12"
        articleUrl="https://jelantahgo.com/blog/kisah-sukses-pengepul-jelantah-pak-doni"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://jelantahgo.com' },
          { name: 'Blog', url: 'https://jelantahgo.com/blog' },
          { name: 'Kisah Sukses Pak Doni: Pengepul Omzet 20 Juta/Bulan', url: 'https://jelantahgo.com/blog/kisah-sukses-pengepul-jelantah-pak-doni' },
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
              Kisah Sukses Pak Doni
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Dari Karyawan Pabrik Menjadi Bos Jelantah dengan Omzet 20 Juta/Bulan
            </p>
            <p className="text-sm text-white/80 mt-2">Terakhir diperbarui: 6 November 2025</p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <Image
            src="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761163996/jelantahgo_5_mjney9.webp"
            alt="Kisah Sukses Pak Doni"
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
              Di tengah hiruk pikuk kawasan industri Bekasi, Doni Ramadhan (38) dulunya adalah satu dari ribuan wajah yang setiap pagi berpacu dengan waktu, masuk ke dalam gerbang pabrik otomotif dengan rutinitas yang monoton. Selama lebih dari 10 tahun, hidupnya ditentukan oleh jam shift, target produksi, dan upah bulanan yang terasa selalu pas-pasan.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Hari ini, "kantornya" adalah jalanan Bekasi dan Cikarang, "mesin produksinya" adalah motor bebek yang dimodifikasi, dan "produknya" adalah limbah yang oleh banyak orang dianggap tidak berguna: minyak jelantah. Dalam waktu kurang dari dua tahun, Pak Doni berhasil mentransformasi dirinya dari seorang karyawan pabrik menjadi wirausahawan mandiri dengan omzet bisnis pengumpulan jelantah yang stabil di angka 20 juta rupiah per bulan. Kisah inspiratif ini adalah contoh nyata dari <Link href="/blog/peluang-bisnis-pengepul-jelantah" className="text-[#0F3D2E] font-semibold hover:underline">peluang bisnis pengepul jelantah</Link> yang kami dokumentasikan.
            </p>

            {/* Titik Balik */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-[#0F3D2E]" />
                <h2 className="text-3xl font-bold text-[#0F3D2E]">Titik Balik: Sebuah Keresahan dan Ide di Warung Pecel Lele</h2>
              </div>
              <div className="card-premium bg-[#E8F0E3] border-l-4 border-l-[#0F3D2E] mb-4">
                <p className="text-gray-700 leading-relaxed italic mb-4">
                  "Saya itu sudah jenuh, Mas," ujar Pak Doni saat kami temui di gudang sederhananya. "Kerja belasan tahun, rasanya kok hidup gini-gini aja. Mau ambil cicilan rumah takut, anak makin besar kebutuhannya. Saya mulai cari-cari peluang usaha sampingan, apa saja yang modalnya kecil."
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Ide itu datang dari tempat yang tak terduga. Saat sedang makan malam di warung pecel lele langganannya, ia melihat sang pemilik membuang minyak jelantah yang sudah hitam ke selokan. "Dalam hati saya mikir, ini minyak kan banyak sekali setiap hari. Dibuang begitu saja. Pasti ada nilainya."
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Keresahan itu membawanya ke dunia maya. Ia menghabiskan waktu berjam-jam setelah pulang kerja untuk riset di Google dan YouTube. Ia menemukan fakta bahwa minyak jelantah adalah komoditas yang dicari untuk biodiesel. Ia melihat ada pengepul-pengepul besar, tetapi ia juga melihat ada celah: banyak warung kecil dan pedagang kaki lima yang belum terjangkau oleh mereka.
              </p>
              <div className="card-premium bg-gradient-to-br from-[#E8F0E3] to-[#D9E3D3] border-l-4 border-l-[#0F3D2E] mt-4">
                <p className="text-gray-700 leading-relaxed italic font-semibold">
                  "Saya sadar, saya tidak bisa langsung bersaing dengan bos-bos besar yang pakai mobil pick-up. Tapi saya bisa mulai dari yang mereka lewatkan. Saya bisa jadi 'semut' yang mengumpulkan dari sumber-sumber kecil."
                </p>
              </div>
            </section>

            {/* Langkah Pertama */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#0F3D2E] mb-6">Langkah Pertama: Modal Nekat dan Dua Jeriken Pertama</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dengan modal awal di bawah satu juta rupiah dari sisa gajinya, Pak Doni membeli peralatan pertamanya: sebuah timbangan digital duduk bekas seharga 300 ribu dan 10 buah jeriken 25 liter bekas seharga 25 ribu per buah.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                "Motor saya bebek biasa, Mas. Saya pasang keranjang besi di belakang. Awalnya malu, jujur saja. Kelihatan seperti pemulung. Tapi saya kuatkan tekad, ini demi masa depan," kenangnya sambil tertawa.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="card-premium text-center">
                  <p className="text-2xl font-bold text-[#0F3D2E] mb-2">Bulan 1</p>
                  <p className="text-gray-700">80 Liter</p>
                  <p className="text-sm text-gray-600 mt-2">Untung: Rp 100.000</p>
                </div>
                <div className="card-premium text-center">
                  <p className="text-2xl font-bold text-[#0F3D2E] mb-2">Bulan 3</p>
                  <p className="text-gray-700">300 Liter</p>
                  <p className="text-sm text-gray-600 mt-2">Untung: Rp 400.000</p>
                </div>
                <div className="card-premium text-center bg-[#E8F0E3]">
                  <p className="text-2xl font-bold text-[#0F3D2E] mb-2">Bulan 6</p>
                  <p className="text-gray-700">1.000 Liter</p>
                  <p className="text-sm text-gray-600 mt-2">Untung: Rp 1.500.000</p>
                </div>
              </div>

              <div className="card-premium bg-gradient-to-br from-[#E8F0E3] to-[#D9E3D3] text-center mt-6">
                <p className="text-3xl font-bold text-[#0F3D2E] mb-2">Rp 20 Juta</p>
                <p className="text-gray-700">Omzet per Bulan Saat Ini</p>
              </div>
            </section>

            {/* Strategi Kunci */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#0F3D2E] mb-6">Strategi Kunci Kesuksesan Pak Doni</h2>

              <div className="space-y-6">
                <div className="card-premium">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-6 h-6 text-[#0F3D2E]" />
                    <h3 className="text-2xl font-bold text-[#0F3D2E]">1. Fokus pada "Ikan Teri", Bukan "Ikan Paus"</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Pak Doni sengaja tidak mendekati restoran besar atau hotel di awal. Ia fokus pada target pasar yang sering diabaikan: warung tenda, pedagang gorengan, katering rumahan, dan kafe-kafe kecil. "Mereka ini jumlahnya ribuan, dan jelantahnya tidak terlalu banyak jadi sering dilewatkan pengepul besar. Tapi kalau dikumpulkan semua, jadinya banyak sekali," jelasnya.
                  </p>
                </div>

                <div className="card-premium">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="w-6 h-6 text-[#0F3D2E]" />
                    <h3 className="text-2xl font-bold text-[#0F3D2E]">2. Layanan Adalah Raja: Prinsip "Cepat, Ramah, Jujur"</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Ini adalah senjata utamanya untuk bersaing. Ia sadar tidak bisa bersaing harga dengan pemain besar, jadi ia bersaing di layanan.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Cepat:</strong> Jika ada panggilan, ia berusaha datang di hari yang sama atau paling lambat keesokan harinya.</li>
                    <li><strong>Ramah:</strong> Ia selalu menyapa dengan senyum, mengobrol sebentar dengan pemilik warung, dan membangun hubungan personal.</li>
                    <li><strong>Jujur:</strong> Ini yang terpenting. Ia selalu membawa timbangan digitalnya dan menimbang di depan pemilik. "Saya bilang ke mereka, 'Pak, Bu, monggo dilihat sendiri timbangannya.' Kepercayaan itu yang paling mahal, Mas," katanya.</li>
                  </ul>
                </div>

                <div className="card-premium">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-6 h-6 text-[#0F3D2E]" />
                    <h3 className="text-2xl font-bold text-[#0F3D2E]">3. Menjadi Mitra, Bukan Sekadar Pembeli</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Pak Doni tidak hanya datang, timbang, dan bayar. Ia sering memberikan "bonus" kecil. Jika ia melihat jeriken pemasoknya sudah rusak, ia akan membawakan jeriken bekas yang lebih layak secara gratis. Terkadang ia memberikan tips sederhana cara menyaring jelantah agar lebih bersih. Hal-hal kecil ini membuatnya dianggap sebagai mitra yang peduli, bukan sekadar pengepul.
                  </p>
                </div>
              </div>
            </section>

            {/* Pelajaran */}
            <div className="card-premium bg-[#E8F0E3] border-l-4 border-l-[#0F3D2E] mt-8">
              <h3 className="text-2xl font-bold text-[#0F3D2E] mb-4">Pelajaran dari Kisah Pak Doni</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Mulai dari Kecil:</strong> Tidak perlu modal besar untuk memulai. Modal utama adalah semangat dan ketekunan.</li>
                <li><strong>Temukan Niche:</strong> Jangan langsung bersaing dengan pemain besar. Cari celah pasar yang terlewatkan.</li>
                <li><strong>Layanan adalah Kunci:</strong> Dalam bisnis yang kompetitif, layanan yang unggul akan membuat Anda menonjol.</li>
                <li><strong>Bangun Kepercayaan:</strong> Transparansi dan kejujuran adalah modal jangka panjang yang tak ternilai.</li>
                <li><strong>Konsistensi:</strong> Kesuksesan tidak datang dalam semalam. Butuh ketekunan dan konsistensi.</li>
              </ul>
            </div>

            {/* CTA */}
            <div className="card-premium bg-gradient-to-br from-[#E8F0E3] to-[#D9E3D3] border-l-4 border-l-[#0F3D2E] text-center mt-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Award className="w-8 h-8 text-[#0F3D2E]" />
                <h2 className="text-2xl font-bold text-[#0F3D2E]">Anda Juga Bisa Sukses Seperti Pak Doni!</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Kisah Pak Doni membuktikan bahwa dengan modal kecil, strategi yang tepat, dan ketekunan, siapa saja bisa sukses di bisnis pengepul jelantah. Mulai dari langkah kecil, konsisten, dan yakin bahwa setiap perjalanan panjang dimulai dari satu langkah.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/blog/peluang-bisnis-pengepul-jelantah"
                  className="inline-block bg-[#0F3D2E] text-white hover:bg-[#134E3A] px-8 py-4 rounded-card font-bold text-lg transition-smooth shadow-soft-lg hover:shadow-soft-xl"
                >
                  Pelajari Bisnis Pengepul Lengkap →
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

            {/* Article Footer */}
            <BlogArticleFooter currentSlug="kisah-sukses-pengepul-jelantah-pak-doni" />
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

