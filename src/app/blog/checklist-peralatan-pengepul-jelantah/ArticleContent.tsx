'use client'

import Image from 'next/image'
import Link from 'next/link'
import BlogSidebar from '@/components/BlogSidebar'
import BlogArticleFooter from '@/components/BlogArticleFooter'
import ArticleSchema from '@/components/ArticleSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { CheckSquare, Scale, Container, Droplets, Shirt, Car, Clipboard } from 'lucide-react'

export default function ArticleContent() {
  return (
    <>
      <ArticleSchema
        title="Checklist Peralatan Pengepul Jelantah Lengkap"
        description="Checklist lengkap peralatan yang dibutuhkan untuk memulai bisnis pengepul jelantah: timbangan digital, jeriken, APD, kendaraan, dan alat bantu lainnya. Estimasi harga dan rekomendasi."
        image="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163998/jelantahgo_25_cfmfhd.webp"
        datePublished="2025-10-10"
        dateModified="2025-10-10"
        articleUrl="https://jelantahgo.com/blog/checklist-peralatan-pengepul-jelantah"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://jelantahgo.com' },
          { name: 'Blog', url: 'https://jelantahgo.com/blog' },
          { name: 'Checklist Peralatan Pengepul Jelantah Lengkap', url: 'https://jelantahgo.com/blog/checklist-peralatan-pengepul-jelantah' },
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
              Checklist Peralatan Pengepul Jelantah Pemula
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Dengan Estimasi Harga 2025
            </p>
            <p className="text-sm text-white/80 mt-2">Terakhir diperbarui: 4 November 2025</p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <Image
            src="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761163998/jelantahgo_25_cfmfhd.webp"
            alt="Checklist Peralatan Pengepul Jelantah Pemula"
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
              Anda sudah membaca dan memahami potensi besar di industri ini. Anda termotivasi untuk mengambil langkah pertama. Sekarang, saatnya beralih dari ide ke aksi. Dan aksi pertama dalam bisnis apapun adalah mempersiapkan "senjata" atau peralatan kerja Anda.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Dalam bisnis pengepul jelantah, peralatan yang tepat bukan hanya soal kemudahan kerja; ini soal <strong>profesionalisme, kepercayaan, dan profitabilitas</strong>. Menggunakan alat yang benar akan membuat Anda terlihat lebih kredibel di mata pemasok, memastikan setiap transaksi berjalan adil, dan melindungi keuntungan Anda dari kerugian yang tidak perlu. Checklist ini adalah bagian penting dari <Link href="/blog/peluang-bisnis-pengepul-jelantah" className="text-[#0F3D2E] font-semibold hover:underline">blueprint lengkap peluang bisnis pengepul jelantah</Link>.
            </p>

            {/* Kategori 1 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#0F3D2E] mb-6">Kategori 1: Fondasi Bisnis - Alat Ukur & Wadah</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dua item ini adalah jantung dari operasional Anda. Jangan pernah berkompromi pada kualitasnya.
              </p>

              <div className="card-premium mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Scale className="w-6 h-6 text-[#0F3D2E]" />
                  <h3 className="text-2xl font-bold text-[#0F3D2E]">1. Timbangan Digital Duduk</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ini adalah alat paling krusial untuk membangun kepercayaan. Transaksi jelantah didasarkan pada berat, dan timbangan yang akurat adalah bukti kejujuran Anda.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li><strong>Mengapa Wajib?</strong> Menunjukkan profesionalisme dan transparansi. Pemasok akan lebih percaya pada hasil timbangan digital yang stabil.</li>
                  <li><strong>Spesifikasi yang Dicari:</strong>
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>Jenis: Timbangan Duduk (Bench Scale) atau Timbangan Lantai (Floor Scale)</li>
                      <li>Kapasitas: Minimal 100 kg, idealnya 150 kg</li>
                      <li>Presisi: 10 gram (0.01 kg) atau 20 gram (0.02 kg)</li>
                      <li>Material Platform: Stainless steel lebih disukai</li>
                    </ul>
                  </li>
                  <li className="text-lg font-bold text-[#0F3D2E]">Estimasi Harga (2025): Rp 500.000 - Rp 900.000</li>
                </ul>
              </div>

              <div className="card-premium mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Container className="w-6 h-6 text-[#0F3D2E]" />
                  <h3 className="text-2xl font-bold text-[#0F3D2E]">2. Jeriken Plastik HDPE</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ini adalah "gudang berjalan" Anda. Kualitas jeriken menentukan keamanan jelantah Anda selama transportasi dan penyimpanan.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Material:</strong> HDPE (High-Density Polyethylene)</li>
                  <li><strong>Kapasitas:</strong> Ukuran 20, 25, atau 30 liter adalah yang paling umum</li>
                  <li><strong>Kondisi:</strong> Carilah jeriken bekas minyak goreng baru atau bahan makanan lainnya. HINDARI KERAS jeriken bekas bahan kimia berbahaya</li>
                  <li><strong>Fitur:</strong> Pilih yang memiliki tutup dengan segel karet</li>
                  <li className="text-lg font-bold text-[#0F3D2E]">Estimasi Harga (2025): Rp 20.000 - Rp 35.000 per buah</li>
                </ul>
              </div>
            </section>

            {/* Kategori 2 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#0F3D2E] mb-6">Kategori 2: Alat Bantu Kerja - Efisiensi & Kebersihan</h2>

              <div className="space-y-4">
                <div className="card-premium">
                  <div className="flex items-center gap-3 mb-3">
                    <Droplets className="w-5 h-5 text-[#0F3D2E]" />
                    <h3 className="text-xl font-bold text-[#0F3D2E]">3. Pompa Minyak Manual (Rotary Hand Pump)</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    Alat ini memungkinkan Anda memindahkan jelantah dari drum pemasok ke jeriken Anda tanpa harus mengangkat dan menuang secara manual.
                  </p>
                  <p className="text-gray-700 font-bold">Estimasi Harga: Rp 150.000 - Rp 300.000</p>
                </div>

                <div className="card-premium">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckSquare className="w-5 h-5 text-[#0F3D2E]" />
                    <h3 className="text-xl font-bold text-[#0F3D2E]">4. Corong dan Saringan Besar</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    Untuk memudahkan proses transfer jelantah dan menyaring partikel kasar.
                  </p>
                  <p className="text-gray-700 font-bold">Estimasi Harga: Rp 50.000 - Rp 100.000</p>
                </div>

                <div className="card-premium">
                  <div className="flex items-center gap-3 mb-3">
                    <Shirt className="w-5 h-5 text-[#0F3D2E]" />
                    <h3 className="text-xl font-bold text-[#0F3D2E]">5. Alat K3 (Keselamatan dan Kesehatan Kerja)</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    Sarung tangan karet, sepatu boot, dan apron untuk melindungi diri saat bekerja dengan jelantah.
                  </p>
                  <p className="text-gray-700 font-bold">Estimasi Harga: Rp 100.000 - Rp 200.000</p>
                </div>

                <div className="card-premium">
                  <div className="flex items-center gap-3 mb-3">
                    <Car className="w-5 h-5 text-[#0F3D2E]" />
                    <h3 className="text-xl font-bold text-[#0F3D2E]">6. Kendaraan Operasional</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    Sepeda motor untuk volume kecil, atau mobil pick-up untuk volume besar. Jika belum punya, bisa sewa di awal.
                  </p>
                  <p className="text-gray-700">*Asumsikan menggunakan kendaraan pribadi atau sewa</p>
                </div>

                <div className="card-premium">
                  <div className="flex items-center gap-3 mb-3">
                    <Clipboard className="w-5 h-5 text-[#0F3D2E]" />
                    <h3 className="text-xl font-bold text-[#0F3D2E]">7. Buku Catatan atau Aplikasi Catatan</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    Untuk mencatat semua transaksi, volume, harga, dan detail penting lainnya. Transparansi adalah kunci kepercayaan.
                  </p>
                  <p className="text-gray-700 font-bold">Estimasi Harga: Gratis (gunakan aplikasi smartphone)</p>
                </div>
              </div>
            </section>

            {/* Ringkasan Modal */}
            <div className="card-premium bg-gradient-to-br from-[#E8F0E3] to-[#D9E3D3] border-l-4 border-l-[#0F3D2E] mb-8">
              <h3 className="text-2xl font-bold text-[#0F3D2E] mb-4 text-center">Ringkasan Estimasi Modal Awal</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#0F3D2E] text-white">
                      <th className="border border-white p-3 text-left">Item</th>
                      <th className="border border-white p-3 text-right">Estimasi Harga</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-[#0F3D2E] p-3">Timbangan Digital</td>
                      <td className="border border-[#0F3D2E] p-3 text-right">Rp 500.000 - 900.000</td>
                    </tr>
                    <tr>
                      <td className="border border-[#0F3D2E] p-3">Jeriken HDPE (10 buah)</td>
                      <td className="border border-[#0F3D2E] p-3 text-right">Rp 200.000 - 350.000</td>
                    </tr>
                    <tr>
                      <td className="border border-[#0F3D2E] p-3">Pompa Manual</td>
                      <td className="border border-[#0F3D2E] p-3 text-right">Rp 150.000 - 300.000</td>
                    </tr>
                    <tr>
                      <td className="border border-[#0F3D2E] p-3">Corong & Saringan</td>
                      <td className="border border-[#0F3D2E] p-3 text-right">Rp 50.000 - 100.000</td>
                    </tr>
                    <tr>
                      <td className="border border-[#0F3D2E] p-3">Alat K3</td>
                      <td className="border border-[#0F3D2E] p-3 text-right">Rp 100.000 - 200.000</td>
                    </tr>
                    <tr className="bg-[#E8F0E3] font-bold">
                      <td className="border border-[#0F3D2E] p-3 text-center">TOTAL ESTIMASI MODAL AWAL</td>
                      <td className="border border-[#0F3D2E] p-3 text-right">Rp 1.000.000 - 1.850.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-600 text-sm mt-4 italic text-center">
                *Harga dapat bervariasi tergantung lokasi dan kualitas barang. Tidak termasuk kendaraan.
              </p>
            </div>

            {/* Tips */}
            <div className="card-premium bg-[#E8F0E3] border-l-4 border-l-[#0F3D2E]">
              <h3 className="text-2xl font-bold text-[#0F3D2E] mb-4">Tips Membeli Peralatan</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Beli Secara Bertahap:</strong> Tidak perlu membeli semua sekaligus. Mulai dari yang paling esensial (timbangan dan jeriken) dulu.</li>
                <li><strong>Cari di Marketplace:</strong> Banyak peralatan bekas berkualitas yang masih layak pakai dengan harga lebih murah.</li>
                <li><strong>Investasi Jangka Panjang:</strong> Peralatan yang berkualitas akan bertahan lebih lama dan menghemat uang Anda dalam jangka panjang.</li>
                <li><strong>Bandingkan Harga:</strong> Jangan ragu untuk membandingkan harga di beberapa toko sebelum membeli.</li>
              </ul>
            </div>

            {/* CTA */}
            <div className="card-premium bg-gradient-to-br from-[#E8F0E3] to-[#D9E3D3] border-l-4 border-l-[#0F3D2E] text-center mt-12">
              <h2 className="text-2xl font-bold text-[#0F3D2E] mb-4">
                Siap Memulai dengan Peralatan yang Tepat?
              </h2>
              <p className="text-gray-700 mb-6">
                Dengan peralatan yang tepat, Anda akan terlihat lebih profesional dan membangun kepercayaan dengan pemasok. Ini adalah investasi yang akan terbayar melalui transaksi yang lebih lancar dan keuntungan yang lebih besar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/blog/peluang-bisnis-pengepul-jelantah"
                  className="inline-block bg-[#0F3D2E] text-white hover:bg-[#134E3A] px-8 py-4 rounded-card font-bold text-lg transition-smooth shadow-soft-lg hover:shadow-soft-xl"
                >
                  Blueprint Lengkap Bisnis Pengepul →
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
            <BlogArticleFooter currentSlug="checklist-peralatan-pengepul-jelantah" />
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
