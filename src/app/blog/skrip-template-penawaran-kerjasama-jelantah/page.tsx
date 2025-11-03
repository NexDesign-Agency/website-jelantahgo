"use client"

import Image from 'next/image'
import Link from 'next/link'
import BlogSidebar from '@/components/BlogSidebar'
import BlogArticleFooter from '@/components/BlogArticleFooter'
import ArticleSchema from '@/components/ArticleSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { MessageSquare, Mail, Phone, FileText, Copy, DollarSign, TrendingDown, CheckCircle } from 'lucide-react'

export default function SkripTemplatePage() {
  return (
    <>
      <ArticleSchema
        title="5 Skrip & Template Penawaran Kerjasama Jelantah"
        description="5 skrip dan template penawaran kerjasama jelantah yang teruji untuk mendapatkan pemasok. Dari WhatsApp informal hingga email formal, lengkap dengan contoh teks siap pakai."
        image="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761963250/jelantahgo_hero_10_mczrvd.webp"
        datePublished="2025-10-07"
        dateModified="2025-10-07"
        articleUrl="https://jelantahgo.com/blog/skrip-template-penawaran-kerjasama-jelantah"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://jelantahgo.com' },
          { name: 'Blog', url: 'https://jelantahgo.com/blog' },
          { name: '5 Skrip & Template Penawaran Kerjasama Jelantah', url: 'https://jelantahgo.com/blog/skrip-template-penawaran-kerjasama-jelantah' },
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
              5 Skrip & Template Penawaran Kerjasama Jelantah
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Untuk Restoran & Warung Makan
            </p>
            <p className="text-sm text-white/80 mt-2">Terakhir diperbarui: 5 November 2025</p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <Image
            src="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761963250/jelantahgo_hero_10_mczrvd.webp"
            alt="5 Skrip & Template Penawaran Kerjasama Jelantah"
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
              Anda sudah punya peralatan. Anda sudah punya semangat. Tapi kemudian Anda dihadapkan pada tantangan terbesar bagi setiap pengepul jelantah pemula: mendapatkan pemasok (supplier). Bagaimana cara mendekati pemilik restoran yang sibuk? Apa yang harus dikatakan agar penawaran Anda didengar dan tidak langsung ditolak?
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Kunci dari akuisisi pemasok adalah komunikasi yang efektif. Artikel ini adalah "buku contekan" Anda dan bagian dari <Link href="/blog/peluang-bisnis-pengepul-jelantah" className="text-[#0F3D2E] font-semibold hover:underline">blueprint lengkap peluang bisnis pengepul jelantah</Link>. Kami telah merancang 5 skrip dan template yang teruji di lapangan, mulai dari pendekatan informal via WhatsApp hingga email penawaran formal.
            </p>

            {/* Psikologi */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#0F3D2E] mb-6">Psikologi di Balik Penawaran yang Efektif</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sebelum masuk ke skrip, pahami apa yang ada di benak seorang pemilik restoran. Mereka adalah orang-orang yang sangat sibuk, fokus pada tiga hal: <strong>menghasilkan uang, menghemat uang, dan mengurangi masalah.</strong> Penawaran Anda harus bisa menyentuh minimal salah satu dari tiga poin ini.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="card-premium">
                  <DollarSign className="w-8 h-8 text-[#0F3D2E] mb-3" />
                  <h3 className="font-bold text-[#0F3D2E] mb-2">Menghasilkan Uang</h3>
                  <p className="text-gray-700 text-sm">"Limbah dapur Anda bisa jadi pendapatan tambahan."</p>
                </div>
                <div className="card-premium">
                  <TrendingDown className="w-8 h-8 text-[#0F3D2E] mb-3" />
                  <h3 className="font-bold text-[#0F3D2E] mb-2">Menghemat Uang</h3>
                  <p className="text-gray-700 text-sm">"Hindari biaya pipa mampet akibat jelantah."</p>
                </div>
                <div className="card-premium">
                  <CheckCircle className="w-8 h-8 text-[#0F3D2E] mb-3" />
                  <h3 className="font-bold text-[#0F3D2E] mb-2">Mengurangi Masalah</h3>
                  <p className="text-gray-700 text-sm">"Kami yang akan urus semuanya, penjemputan rutin."</p>
                </div>
              </div>
            </section>

            {/* Template 1 */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="w-6 h-6 text-[#0F3D2E]" />
                <h2 className="text-3xl font-bold text-[#0F3D2E]">Template 1: Pendekatan "Tetangga Baik" via WhatsApp</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Tujuan:</strong> Membuka percakapan secara informal dan ramah. Cocok untuk usaha kuliner skala kecil di sekitar lingkungan Anda.
              </p>
              <div className="card-premium bg-[#F9F8F6] border-2 border-[#D9E3D3]">
                <div className="flex items-center justify-between mb-4">
                  <p className="font-semibold text-[#0F3D2E]">[Salin Teks di Bawah Ini]</p>
                  <Copy className="w-5 h-5 text-gray-600 cursor-pointer" />
                </div>
                <div className="bg-white p-4 rounded border border-[#D9E3D3]">
                  <p className="text-gray-700 mb-2">Selamat siang, Pak/Bu [Nama Pemilik, jika tahu].</p>
                  <p className="text-gray-700 mb-2">Perkenalkan, saya [Nama Anda], tetangga Bapak/Ibu dari [Nama Komunitas/Jalan Anda]. Saya lihat [Nama Warung/Kafe] selalu ramai, semoga makin sukses ya, Pak/Bu.</p>
                  <p className="text-gray-700 mb-2">Singkat saja, saya sedang menjalankan program pengumpulan minyak jelantah ramah lingkungan di area kita. Apakah minyak jelantah di [Nama Warung/Kafe] sudah dikelola? Jika belum, saya siap membeli dan menjemputnya dengan harga yang bagus.</p>
                  <p className="text-gray-700 mb-2">Tidak perlu repot, nanti tim saya yang akan angkut. Dapur jadi lebih bersih dan Bapak/Ibu dapat pemasukan tambahan.</p>
                  <p className="text-gray-700 mb-2">Apakah Bapak/Ibu ada waktu 5 menit untuk saya jelaskan lebih lanjut via telepon besok?</p>
                  <p className="text-gray-700 mb-2">Terima kasih banyak atas waktunya. Sukses selalu!</p>
                  <p className="text-gray-700">Salam,<br />[Nama Anda]<br />[Nomor Telepon Anda]</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm italic mt-2">
                <strong>Mengapa ini efektif:</strong> Dimulai dengan pujian dan menyebutkan "tetangga", membangun kedekatan. Langsung ke intinya tanpa bertele-tele. Diakhiri dengan ajakan bertindak yang jelas.
              </p>
            </section>

            {/* Template 2 */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-6 h-6 text-[#0F3D2E]" />
                <h2 className="text-3xl font-bold text-[#0F3D2E]">Template 2: Skrip Percakapan "Door-to-Door"</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Tujuan:</strong> Meninggalkan kesan pertama yang kuat dan profesional saat Anda berkunjung langsung.
              </p>
              <div className="card-premium bg-[#F9F8F6] border-2 border-[#D9E3D3]">
                <div className="flex items-center justify-between mb-4">
                  <p className="font-semibold text-[#0F3D2E]">[Latih Dialog Ini]</p>
                  <Copy className="w-5 h-5 text-gray-600 cursor-pointer" />
                </div>
                <div className="bg-white p-4 rounded border border-[#D9E3D3] space-y-3">
                  <div>
                    <p className="font-semibold text-[#0F3D2E] mb-1">Anda:</p>
                    <p className="text-gray-700">"Selamat sore, Pak/Bu. Maaf mengganggu sebentar. Boleh saya bicara dengan manajer atau pemilik?"</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#0F3D2E] mb-1">Staf:</p>
                    <p className="text-gray-700">"Ada perlu apa ya?"</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#0F3D2E] mb-1">Anda:</p>
                    <p className="text-gray-700">"Saya [Nama Anda] dari [Nama Usaha Anda], kami partner pengelola limbah minyak jelantah. Saya hanya ingin meninggalkan proposal singkat, tidak akan lama."</p>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-600 italic mb-2">(Saat bertemu manajer/pemilik)</p>
                    <div className="space-y-2">
                      <div>
                        <p className="font-semibold text-[#0F3D2E] mb-1">Anda:</p>
                        <p className="text-gray-700">"Selamat sore, Pak/Bu [Sebut Nama Manajer]. Terima kasih waktunya. Saya [Nama Anda], kami membantu restoran seperti [Nama Restoran] untuk mengubah limbah jelantahnya menjadi pendapatan tambahan, sekaligus menjaga dapur tetap bersih dan patuh pada aturan lingkungan."</p>
                      </div>
                      <div>
                        <p className="font-semibold text-[#0F3D2E] mb-1">Anda:</p>
                        <p className="text-gray-700">"Kami menawarkan penjemputan gratis, pembayaran tunai di tempat, dan harga yang sangat kompetitif. Di dalam brosur ini ada estimasi berapa pendapatan tambahan yang bisa didapat restoran Bapak/Ibu setiap bulannya."</p>
                      </div>
                      <div>
                        <p className="font-semibold text-[#0F3D2E] mb-1">Anda:</p>
                        <p className="text-gray-700">"Boleh saya minta nomor WhatsApp Bapak/Ibu untuk saya follow-up besok lusa? Terima kasih banyak atas waktunya, semoga usahanya semakin lancar."</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm italic mt-2">
                <strong>Mengapa ini efektif:</strong> Anda langsung menyatakan tujuan dengan jelas. Anda tidak meminta, tetapi "menawarkan" solusi. Anda fokus pada keuntungan mereka. Anda proaktif dan mengakhiri percakapan dengan langkah selanjutnya yang jelas.
              </p>
            </section>

            {/* Template 3 */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-[#0F3D2E]" />
                <h2 className="text-3xl font-bold text-[#0F3D2E]">Template 3: Email Penawaran Kerjasama Formal</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Tujuan:</strong> Menjangkau bisnis yang lebih besar yang mungkin lebih memilih komunikasi tertulis dan formal. Email ini harus ringkas, profesional, dan mudah dipindai.
              </p>
              <div className="card-premium bg-[#F9F8F6] border-2 border-[#D9E3D3]">
                <div className="flex items-center justify-between mb-4">
                  <p className="font-semibold text-[#0F3D2E]">[Salin Template Email Ini]</p>
                  <Copy className="w-5 h-5 text-gray-600 cursor-pointer" />
                </div>
                <div className="bg-white p-6 rounded border border-[#D9E3D3]">
                  <p className="font-semibold text-gray-800 mb-2">Subjek: [Partnership Opportunity] Pengelolaan Limbah Minyak Jelantah untuk [Nama Restoran]</p>
                  <div className="space-y-3 text-gray-700">
                    <p>Yth. Manajer/Pemilik [Nama Restoran],</p>
                    <p>Perkenalkan, saya [Nama Anda] dari [Nama Usaha Anda]. Kami adalah partner profesional untuk pengelolaan limbah minyak jelantah (used cooking oil) bagi bisnis kuliner di [Nama Kota/Area].</p>
                    <p><strong>Mengapa Memilih Kami:</strong></p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Penjemputan gratis dengan jadwal yang fleksibel</li>
                      <li>Pembayaran tunai langsung di tempat setelah penimbangan</li>
                      <li>Harga kompetitif dan transparan</li>
                      <li>Membantu restoran Anda patuh pada regulasi lingkungan (Limbah B3)</li>
                    </ul>
                    <p><strong>Estimasi Pendapatan Tambahan:</strong></p>
                    <p>Dengan rata-rata produksi jelantah restoran sebesar [X] liter per bulan, restoran Anda berpotensi mendapatkan pendapatan tambahan sekitar <strong>Rp [Estimasi] per bulan</strong>.</p>
                    <p>Kami siap untuk melakukan penjemputan pertama secara gratis sebagai sample layanan kami. Apakah ada waktu yang cocok untuk diskusi lebih lanjut minggu ini?</p>
                    <p>Terima kasih atas perhatiannya. Kami berharap dapat menjadi mitra terpercaya untuk pengelolaan limbah jelantah restoran Anda.</p>
                    <p>Salam hormat,<br />[Nama Anda]<br />[Posisi/Jabatan]<br />[Nomor Telepon] | [Email] | [Website, jika ada]</p>
                  </div>
                </div>
              </div>
            </section>
            </div>

            {/* Article Footer */}
            <BlogArticleFooter currentSlug="skrip-template-penawaran-kerjasama-jelantah" />
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

      {/* Additional Content */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                {/* Tips */}
                <div className="card-premium bg-[#E8F0E3] border-l-4 border-l-[#0F3D2E] mt-8">
                  <h3 className="text-2xl font-bold text-[#0F3D2E] mb-4">Tips Tambahan untuk Keberhasilan</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Personalization:</strong> Selalu sesuaikan template dengan nama dan detail restoran spesifik</li>
                    <li><strong>Follow-up:</strong> Jangan takut untuk follow-up jika tidak mendapat respon. Banyak yang butuh diingatkan 2-3 kali</li>
                    <li><strong>Persistence:</strong> Tidak semua akan langsung setuju. Tetap sopan dan profesional meskipun ditolak</li>
                    <li><strong>Track Your Results:</strong> Catat mana template yang paling efektif untuk area Anda</li>
                  </ul>
                </div>

                {/* CTA */}
                <div className="card-premium bg-gradient-to-br from-[#E8F0E3] to-[#D9E3D3] border-l-4 border-l-[#0F3D2E] text-center mt-12">
                  <h2 className="text-2xl font-bold text-[#0F3D2E] mb-4">
                    Siap Membangun Jaringan Pemasok?
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Dengan menggunakan skrip dan template di atas, Anda memiliki alat yang teruji untuk membuka percakapan dengan calon pemasok. Ingat, kunci sukses adalah konsistensi dan profesionalisme.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/blog/peluang-bisnis-pengepul-jelantah"
                      className="inline-block bg-[#0F3D2E] text-white hover:bg-[#134E3A] px-8 py-4 rounded-card font-bold text-lg transition-smooth shadow-soft-lg hover:shadow-soft-xl"
                    >
                      Peluang Bisnis Pengepul Jelantah →
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
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

