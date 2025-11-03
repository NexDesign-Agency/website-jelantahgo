'use client'

import Image from 'next/image'
import Link from 'next/link'
import BlogSidebar from '@/components/BlogSidebar'
import BlogArticleFooter from '@/components/BlogArticleFooter'
import ArticleSchema from '@/components/ArticleSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { MapPin, Route, Clock, TrendingUp } from 'lucide-react'

export default function ManajemenLogistikPage() {
  return (
    <>
      <ArticleSchema
        title="Manajemen Logistik Pengepul Jelantah: Tips Rute Efisien"
        description="Panduan lengkap optimasi rute penjemputan jelantah menggunakan Google Maps. Strategi zonasi, multi-stop route, efisiensi logistik untuk meningkatkan profit pengepul."
        image="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761963250/jelantahgo_hero_9_mzwqd2.webp"
        datePublished="2025-10-06"
        dateModified="2025-10-06"
        articleUrl="https://jelantahgo.com/blog/manajemen-logistik-pengepul-jelantah"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://jelantahgo.com' },
          { name: 'Blog', url: 'https://jelantahgo.com/blog' },
          { name: 'Manajemen Logistik Pengepul Jelantah', url: 'https://jelantahgo.com/blog/manajemen-logistik-pengepul-jelantah' },
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
              Manajemen Logistik Pengepul Jelantah
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Tips Rute Efisien untuk Hemat Bensin & Waktu
            </p>
            <p className="text-sm text-white/80 mt-2">Terakhir diperbarui: 7 November 2025</p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <Image
            src="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761963250/jelantahgo_hero_9_mzwqd2.webp"
            alt="Manajemen Logistik Pengepul Jelantah"
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
              Anda sudah berhasil mendapatkan pemasok. Jeriken Anda mulai terisi, dan telepon Anda mulai berdering dengan permintaan penjemputan. Selamat, Anda telah melewati fase awal dan kini masuk ke jantung operasional bisnis ini.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Namun, di sinilah banyak pengepul pemula terjebak: mereka sibuk "berlari" dari satu titik ke titik lain tanpa strategi, menghabiskan keuntungan mereka untuk bensin dan waktu yang terbuang di jalan. Logistik bukan sekadar "mengambil dan mengantar barang". Dalam bisnis pengepul jelantah, manajemen logistik adalah <strong>pusat keuntungan (profit center)</strong> Anda. Panduan ini adalah bagian penting dari <Link href="/blog/peluang-bisnis-pengepul-jelantah" className="text-[#0F3D2E] font-semibold hover:underline">blueprint lengkap peluang bisnis pengepul jelantah</Link>.
            </p>

            {/* Mindset */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#0F3D2E] mb-6">Mindset Shift: Dari "Kurir" Menjadi "Manajer Logistik"</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Perubahan pertama harus terjadi di kepala Anda. Berhentilah berpikir seperti seorang kurir yang hanya merespons panggilan. Mulailah berpikir seperti seorang manajer logistik yang merancang sebuah sistem.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card-premium border-l-4 border-red-500">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Kurir Reaktif ❌</h3>
                  <p className="text-gray-700 italic mb-2">
                    "Ada panggilan dari Jakarta Barat, saya langsung berangkat. Lalu ada panggilan dari Jakarta Timur, saya berangkat lagi."
                  </p>
                  <p className="text-gray-700 font-semibold text-red-600">
                    Hasil: Bolak-balik, boros bensin, waktu habis di jalan.
                  </p>
                </div>
                <div className="card-premium border-l-4 border-[#0F3D2E] bg-[#E8F0E3]">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Manajer Logistik Proaktif ✅</h3>
                  <p className="text-gray-700 italic mb-2">
                    "Oke, hari ini ada 5 permintaan dari Jakarta Barat dan 3 dari Jakarta Selatan. Saya akan alokasikan hari Selasa untuk semua titik di Jakarta Barat, membuat rute melingkar yang paling efisien."
                  </p>
                  <p className="text-gray-700 font-semibold text-[#0F3D2E]">
                    Hasil: Sekali jalan, banyak titik terlayani, hemat biaya, waktu produktif.
                  </p>
                </div>
              </div>
            </section>

            {/* Google Maps */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-[#0F3D2E]" />
                <h2 className="text-3xl font-bold text-[#0F3D2E]">Toolkit Utama: Memaksimalkan Google Maps untuk Optimasi Rute</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Lupakan aplikasi logistik mahal. Google Maps, jika digunakan dengan benar, adalah alat yang sangat powerful untuk pengepul skala kecil hingga menengah.
              </p>

              <div className="space-y-6">
                <div className="card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">1. Pin Semua Pemasok Anda: Membuat Peta "Harta Karun"</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Langkah pertama adalah memvisualisasikan jaringan Anda. Setiap kali Anda mendapatkan pemasok baru, jangan hanya menyimpan nomornya. Buka Google Maps, cari alamatnya, dan simpan lokasi tersebut dengan label yang jelas.
                  </p>
                  <div className="bg-[#E8F0E3] border-l-4 border-l-[#0F3D2E] p-4">
                    <p className="text-gray-700 font-semibold mb-2">Cara Melakukannya:</p>
                    <p className="text-gray-700">
                      Cari alamat → Klik "Save" → Pilih "New List" (buat daftar baru bernama "Pemasok Jelantah") → Beri nama pin sesuai nama pemasok (misal: "Warung Sate Pak Kumis").
                    </p>
                  </div>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    <strong>Manfaat:</strong> Dalam sekejap, Anda bisa melihat peta area Anda dengan titik-titik pemasok. Ini membantu Anda mengidentifikasi cluster atau area dengan kepadatan pemasok tertinggi.
                  </p>
                </div>

                <div className="card-premium">
                  <div className="flex items-center gap-3 mb-3">
                    <Route className="w-5 h-5 text-[#0F3D2E]" />
                    <h3 className="text-xl font-bold text-[#0F3D2E]">2. Merancang Rute Multi-Stop: Jantung Efisiensi</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Ini adalah fitur yang paling sering disalahgunakan. Jangan hanya mencari rute dari titik A ke B. Rencanakan seluruh perjalanan Anda dalam satu rute.
                  </p>
                  <div className="bg-[#E8F0E3] border-l-4 border-l-[#0F3D2E] p-4">
                    <p className="text-gray-700 font-semibold mb-2">Cara Melakukannya:</p>
                    <p className="text-gray-700 mb-2">
                      Masukkan titik awal (gudang Anda) dan tujuan pertama. Lalu, klik ikon tiga titik dan pilih <strong>"Add Stop"</strong>. Terus tambahkan semua titik yang ingin Anda kunjungi hari itu (Google Maps mendukung hingga 9 perhentian).
                    </p>
                    <p className="text-gray-700 font-semibold mt-3">Pro Tip: Optimasi Manual</p>
                    <p className="text-gray-700">
                      Setelah semua titik dimasukkan, Google Maps akan membuat rute berdasarkan urutan Anda memasukkannya. Seringkali ini tidak efisien. <strong>Seret dan lepas (drag and drop) urutan perhentian</strong> untuk menciptakan sebuah "lingkaran" atau "loop" yang logis, meminimalkan jarak bolak-balik.
                    </p>
                  </div>
                </div>

                <div className="card-premium">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-5 h-5 text-[#0F3D2E]" />
                    <h3 className="text-xl font-bold text-[#0F3D2E]">3. Simpan Rute Anda: Ciptakan Template Zona</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Setelah Anda membuat rute yang optimal untuk sebuah zona (misal: "Rute Zona Bekasi Barat"), Anda bisa menyimpannya untuk digunakan di masa depan. Ini menghemat waktu perencanaan Anda setiap minggunya.
                  </p>
                </div>
              </div>
            </section>

            {/* Strategi Zonasi */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#0F3D2E] mb-6">Strategi Zonasi: Kelompokkan Pemasok Berdasarkan Area</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Salah satu strategi paling efektif adalah mengelompokkan penjemputan berdasarkan zona geografis:
              </p>
              <div className="space-y-4">
                <div className="card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-2">Manfaat Zonasi:</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Menghemat biaya bensin secara signifikan</li>
                    <li>Mengurangi waktu perjalanan dan meningkatkan jumlah titik yang bisa dilayani per hari</li>
                    <li>Memudahkan perencanaan jadwal mingguan</li>
                    <li>Membangun rutinitas yang memudahkan pemasok untuk mengetahui kapan Anda akan datang</li>
                  </ul>
                </div>

                <div className="card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-2">Contoh Zonasi:</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li><strong>Senin:</strong> Zona Jakarta Selatan (Cilandak, Kebayoran, dll.)</li>
                    <li><strong>Selasa:</strong> Zona Jakarta Barat (Kembangan, Kebon Jeruk, dll.)</li>
                    <li><strong>Rabu:</strong> Zona Bekasi Barat</li>
                    <li><strong>Kamis:</strong> Zona Tangerang</li>
                    <li><strong>Jumat:</strong> Zona Jakarta Pusat & Utara</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Tips Efisiensi */}
            <div className="card-premium bg-[#E8F0E3] border-l-4 border-l-[#0F3D2E]">
              <h3 className="text-2xl font-bold text-[#0F3D2E] mb-4">Tips Tambahan untuk Efisiensi Maksimal</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Perkirakan Waktu di Setiap Titik:</strong> Berikan estimasi 15-30 menit per titik (untuk timbangan, transfer, dan komunikasi).</li>
                <li><strong>Batasi Volume per Perjalanan:</strong> Jangan memaksakan mengambil terlalu banyak dalam satu hari. Kualitas layanan lebih penting daripada kuantitas.</li>
                <li><strong>Komunikasi Proaktif:</strong> Hubungi pemasok sehari sebelum penjemputan untuk memastikan mereka siap dan jelantahnya sudah terkumpul.</li>
                <li><strong>Track Biaya:</strong> Catat konsumsi bensin dan waktu untuk setiap zona, kemudian evaluasi mana yang paling efisien.</li>
              </ul>
            </div>

            {/* CTA */}
            <div className="card-premium bg-gradient-to-br from-[#E8F0E3] to-[#D9E3D3] border-l-4 border-l-[#0F3D2E] text-center mt-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8 text-[#0F3D2E]" />
                <h2 className="text-2xl font-bold text-[#0F3D2E]">Maksimalkan Keuntungan dengan Logistik yang Efisien</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Setiap kilometer yang Anda hemat adalah rupiah yang masuk ke kantong keuntungan. Dengan manajemen logistik yang baik, operasional Anda akan lebih efisien dan profitabilitas akan meningkat secara signifikan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/blog/peluang-bisnis-pengepul-jelantah"
                  className="inline-block bg-[#0F3D2E] text-white hover:bg-[#134E3A] px-8 py-4 rounded-card font-bold text-lg transition-smooth shadow-soft-lg hover:shadow-soft-xl"
                >
                  Peluang Bisnis Pengepul 2025 →
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
            <BlogArticleFooter currentSlug="manajemen-logistik-pengepul-jelantah" />
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

