'use client'

import Image from 'next/image'
import Link from 'next/link'
import BlogSidebar from '@/components/BlogSidebar'
import BlogArticleFooter from '@/components/BlogArticleFooter'
import ArticleSchema from '@/components/ArticleSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { TrendingUp, Search, Users, Truck, Shuffle } from 'lucide-react'

export default function NegosiasiHargaPage() {
  return (
    <>
      <ArticleSchema
        title="5 Langkah Negosiasi Harga Pengepul Jelantah"
        description="Pelajari 5 langkah negosiasi harga dengan pengepul jelantah. Tips pahami kualitas, riset harga pasar, tawarkan volume besar, dan strategi negosiasi untuk dapat harga terbaik."
        image="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163995/jelantahgo_9_cjolqm.webp"
        datePublished="2025-10-05"
        dateModified="2025-10-05"
        articleUrl="https://jelantahgo.com/blog/negosiasi-harga-pengepul"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://jelantahgo.com' },
          { name: 'Blog', url: 'https://jelantahgo.com/blog' },
          { name: '5 Langkah Negosiasi Harga Pengepul Jelantah', url: 'https://jelantahgo.com/blog/negosiasi-harga-pengepul' },
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
              Cara Negosiasi Harga dengan Pengepul Jelantah
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              5 Langkah Jitu untuk Menguatkan Posisi Tawar Anda
            </p>
            <p className="text-sm text-white/80 mt-2">Dipublikasikan: 25 September 2025</p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <Image
            src="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761163995/jelantahgo_9_cjolqm.webp"
            alt="Cara Negosiasi Harga dengan Pengepul Jelantah"
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
              Dalam bisnis jual beli minyak jelantah, harga bisa menjadi sangat fleksibel. Kemampuan Anda untuk bernegosiasi seringkali menjadi penentu utama seberapa besar keuntungan yang bisa Anda dapatkan. Berhadapan dengan pengepul, terutama yang berskala kecil, memerlukan strategi agar Anda tidak dirugikan. Panduan ini adalah bagian dari <Link href="/blog/peluang-bisnis-pengepul-jelantah" className="text-[#0F3D2E] font-semibold hover:underline">blueprint lengkap peluang bisnis pengepul jelantah</Link>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Berikut adalah lima langkah jitu untuk menguatkan posisi tawar Anda dan mendapatkan harga terbaik.
            </p>

            {/* 5 Langkah */}
            <div className="space-y-6">
              <div className="card-premium">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0F3D2E] text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="w-5 h-5 text-[#0F3D2E]" />
                      <h3 className="text-2xl font-bold text-[#0F3D2E]">Pahami Kualitas Jelantah Anda</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Sebelum memulai negosiasi, Anda harus tahu persis kualitas "barang" yang Anda jual. Jelantah yang bersih, jernih, dan bebas dari sisa makanan (sudah disaring) memiliki nilai jual tertinggi. Sebaliknya, jelantah yang kotor, berbau tengik, atau tercampur air akan dihargai sangat rendah.
                    </p>
                    <div className="bg-[#E8F0E3] border-l-4 border-l-[#0F3D2E] p-4">
                      <p className="text-gray-700 font-semibold mb-2">Taktik:</p>
                      <p className="text-gray-700">
                        Saat bernegosiasi, tekankan bahwa jelantah Anda adalah kualitas super. Katakan, "Pak, jelantah saya ini bersih lho, sudah saya saring semua ampasnya. Kualitasnya beda dari yang lain."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-premium">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0F3D2E] text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Search className="w-5 h-5 text-[#0F3D2E]" />
                      <h3 className="text-2xl font-bold text-[#0F3D2E]">Lakukan Riset Harga Pasar</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Jangan pernah datang ke meja negosiasi tanpa mengetahui harga pasar yang wajar. Coba hubungi beberapa pengepul berbeda di area Anda untuk menanyakan harga. Anda juga bisa memeriksa harga acuan dari perusahaan besar seperti JelantahGO. Pengetahuan ini adalah senjata utama Anda.
                    </p>
                    <div className="bg-[#E8F0E3] border-l-4 border-l-[#0F3D2E] p-4">
                      <p className="text-gray-700 font-semibold mb-2">Taktik:</p>
                      <p className="text-gray-700">
                        Jika pengepul menawar terlalu rendah, Anda bisa berkata, "Wah, Pak, di tempat lain berani ambil Rp 8.500 lho untuk kualitas seperti ini. Apa tidak bisa dinaikkan sedikit lagi?"
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-premium">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0F3D2E] text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="w-5 h-5 text-[#0F3D2E]" />
                      <h3 className="text-2xl font-bold text-[#0F3D2E]">Tawarkan Volume Besar dan Konsistensi</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Pengepul mana pun lebih menyukai pemasok yang bisa diandalkan. Jika Anda bisa menjamin pasokan dalam jumlah besar dan secara rutin (misalnya, 100 liter setiap dua minggu), Anda memiliki daya tawar yang sangat kuat. Ini menunjukkan bahwa Anda adalah mitra bisnis yang serius.
                    </p>
                    <div className="bg-[#E8F0E3] border-l-4 border-l-[#0F3D2E] p-4">
                      <p className="text-gray-700 font-semibold mb-2">Taktik:</p>
                      <p className="text-gray-700">
                        Tawarkan kesepakatan jangka panjang. "Bagaimana kalau kita buat harga kontrak saja, Pak? Saya bisa jamin pasokan 200 liter setiap bulan untuk Bapak."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-premium">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0F3D2E] text-white rounded-full flex items-center justify-center font-bold text-xl">4</div>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Truck className="w-5 h-5 text-[#0F3D2E]" />
                      <h3 className="text-2xl font-bold text-[#0F3D2E]">Biarkan Pengepul Datang Menjemput</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Posisi Anda akan lebih kuat jika pengepul yang datang ke lokasi Anda. Ini menunjukkan bahwa mereka yang membutuhkan pasokan dari Anda. Jika Anda yang mengantar ke gudang mereka, Anda berada di posisi yang lebih lemah karena sudah terlanjur mengeluarkan biaya transportasi.
                    </p>
                    <div className="bg-[#E8F0E3] border-l-4 border-l-[#0F3D2E] p-4">
                      <p className="text-gray-700 font-semibold mb-2">Taktik:</p>
                      <p className="text-gray-700">
                        Saat dihubungi, katakan, "Stok saya sudah siap 5 jeriken, Pak. Kapan Bapak bisa jadwalkan penjemputan ke lokasi saya?"
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-premium">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0F3D2E] text-white rounded-full flex items-center justify-center font-bold text-xl">5</div>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Shuffle className="w-5 h-5 text-[#0F3D2E]" />
                      <h3 className="text-2xl font-bold text-[#0F3D2E]">Miliki Alternatif Lain (Rencana B)</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Negosiasi terbaik terjadi ketika Anda siap untuk pergi jika kesepakatan tidak tercapai. Jangan pernah bergantung pada satu pengepul saja. Selalu miliki kontak pengepul lain atau, lebih baik lagi, jadilah mitra dari perusahaan profesional seperti JelantahGO yang menawarkan harga transparan.
                    </p>
                    <div className="bg-[#E8F0E3] border-l-4 border-l-[#0F3D2E] p-4">
                      <p className="text-gray-700 font-semibold mb-2">Taktik:</p>
                      <p className="text-gray-700">
                        Jika harga yang ditawarkan tidak masuk akal, jangan ragu untuk berkata dengan sopan, "Baik, Pak. Terima kasih atas tawarannya. Mungkin saya coba tawarkan ke pihak lain dulu, ya." Ini seringkali membuat mereka berpikir ulang.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Kesimpulan */}
            <div className="card-premium bg-[#E8F0E3] border-l-4 border-l-[#0F3D2E] mt-8">
              <h3 className="text-2xl font-bold text-[#0F3D2E] mb-4">Kesimpulan</h3>
              <p className="text-gray-700 leading-relaxed">
                Pada akhirnya, negosiasi adalah tentang menciptakan hubungan bisnis yang saling menguntungkan. Namun, dengan persiapan yang matang, Anda bisa memastikan bahwa keuntungan tersebut lebih maksimal untuk Anda.
              </p>
            </div>

            {/* CTA */}
            <div className="card-premium bg-gradient-to-br from-[#E8F0E3] to-[#D9E3D3] border-l-4 border-l-[#0F3D2E] text-center mt-12">
              <h2 className="text-2xl font-bold text-[#0F3D2E] mb-4">
                Harga Transparan, Tidak Perlu Nego!
              </h2>
              <p className="text-gray-700 mb-6">
                Di JelantahGO, harga sudah pasti dan transparan. Tidak perlu repot bernegosiasi. Kami menghargai setiap liter jelantah Anda dengan harga yang adil sesuai kualitas dan volume.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/pricing"
                  className="inline-block bg-[#0F3D2E] text-white hover:bg-[#134E3A] px-8 py-4 rounded-card font-bold text-lg transition-smooth shadow-soft-lg hover:shadow-soft-xl"
                >
                  Lihat Harga Pasti →
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
            <BlogArticleFooter currentSlug="negosiasi-harga-pengepul" />
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

