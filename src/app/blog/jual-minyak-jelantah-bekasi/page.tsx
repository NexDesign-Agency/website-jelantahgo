import type { Metadata } from 'next'
import Image from 'next/image'
import BlogSidebar from '@/components/BlogSidebar'
import BlogArticleFooter from '@/components/BlogArticleFooter'
import ArticleSchema from '@/components/ArticleSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Jual Minyak Jelantah Bekasi | Harga Rp 7.500-8.500/L',
  description: 'Jual minyak jelantah di Bekasi dengan harga premium Rp 7.500-8.500/liter. Layanan jemput gratis untuk industri Cikarang & perumahan. Min 40L.',
  alternates: {
    canonical: 'https://jelantahgo.com/blog/jual-minyak-jelantah-bekasi',
  },
  openGraph: {
    title: 'Jual Minyak Jelantah Bekasi | Harga Rp 7.500-8.500/L',
    description: 'Jual minyak jelantah di Bekasi dengan harga premium Rp 7.500-8.500/liter. Layanan jemput gratis untuk industri Cikarang & perumahan. Min 40L.',
    url: 'https://jelantahgo.com/blog/jual-minyak-jelantah-bekasi',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761963249/jelantahgo_hero_6_y74rop.webp',
        width: 1200,
        height: 630,
        alt: 'Jual Minyak Jelantah Bekasi',
      },
    ],
    locale: 'id_ID',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jual Minyak Jelantah Bekasi | Harga Rp 7.500-8.500/L',
    description: 'Jual minyak jelantah di Bekasi dengan harga premium Rp 7.500-8.500/liter. Layanan jemput gratis untuk industri Cikarang & perumahan. Min 40L.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761963249/jelantahgo_hero_6_y74rop.webp'],
  },
}

export default function JualBekasiPage() {
  return (
    <>
      <ArticleSchema
        title="Jual Minyak Jelantah Bekasi - Panduan Lengkap 2025"
        description="Panduan lengkap untuk warga dan pelaku industri di seluruh wilayah Bekasi (Kota dan Kabupaten) yang ingin menjual jelantah dengan layanan jemput gratis."
        image="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761963249/jelantahgo_hero_6_y74rop.webp"
        datePublished="2025-10-22"
        dateModified="2025-10-22"
        articleUrl="https://jelantahgo.com/blog/jual-minyak-jelantah-bekasi"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://jelantahgo.com' },
          { name: 'Blog', url: 'https://jelantahgo.com/blog' },
          { name: 'Jual Minyak Jelantah Bekasi', url: 'https://jelantahgo.com/blog/jual-minyak-jelantah-bekasi' },
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
              Jual Minyak Jelantah Bekasi | Panduan Lengkap 2025
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Panduan untuk Warga & Industri 2025
            </p>
          </div>
        </div>
      </section>
      {/* Image */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <Image
            src="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761963249/jelantahgo_hero_6_y74rop.webp"
            alt="Jual Minyak Jelantah Bekasi"
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
              Bekasi, dengan kombinasi kawasan industri dan perumahan yang padat, memiliki kebutuhan khusus untuk pengelolaan limbah jelantah. Dari pabrik-pabrik di Cikarang hingga komplek perumahan di Jatiasih, JelantahGO hadir memberikan solusi yang terpercaya.
            </p>

            <div className="card-premium mb-8">
              <h2 className="text-2xl font-bold text-[#0F3D2E] mb-4">Layanan di Bekasi</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-[#0F3D2E] mb-2">1. Kawasan Industri Cikarang & Sekitarnya: Solusi B2B</h3>
                  <p className="text-gray-700 mb-2">
                    Untuk pabrik, hotel, restoran, dan kantin karyawan di kawasan industri, kami menyediakan:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm">
                    <li>Penjemputan Volume Besar: Siap mengangkut jelantah dalam jumlah ratusan hingga ribuan liter.</li>
                    <li>Jadwal Rutin: Penjemputan mingguan atau bulanan yang terencana untuk menjaga area limbah Anda tetap terkelola.</li>
                    <li>Kepatuhan Regulasi: Kami menyediakan dokumentasi serah terima untuk membantu Anda dalam pelaporan pengelolaan Limbah B3.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-[#0F3D2E] mb-2">2. Kota Bekasi & Sekitarnya: Layanan Praktis untuk Komunitas Urban</h3>
                  <p className="text-gray-700 mb-2">
                    Untuk area perumahan padat di Jatiasih, Tambun, Pondok Gede, dan pusat Kota Bekasi, kami menawarkan:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm">
                    <li>Program Pengumpulan Komunitas: Kami siap bekerja sama dengan pengurus RT/RW di perumahan untuk menciptakan sistem pengumpulan kolektif yang menguntungkan.</li>
                    <li>Penjemputan UKM Kuliner: Layanan jemput gratis yang andal untuk ribuan warung, kafe, dan restoran yang tersebar di seluruh Kota Bekasi.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card-premium bg-gradient-to-br from-[#F9F8F6] to-[#E8F0E3] border-l-4 border-l-[#0F3D2E] mb-8">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Studi Kasus: Efisiensi di Kantin Karyawan Kawasan Industri Cikarang</h3>
              <p className="text-gray-700 leading-relaxed">
                Sebuah pabrik elektronik di Kawasan Industri Jababeka dengan 2.000 karyawan menghadapi masalah pengelolaan limbah dari kantin mereka. Jelantah menumpuk dalam jeriken yang tidak teratur. Setelah bermitra dengan JelantahGO, kami menyediakan 3 drum 200L dan jadwal penjemputan pasti setiap 2 minggu. Hasilnya, mereka kini secara rutin menjual <strong>~550 liter</strong> jelantah setiap bulan, menghasilkan pendapatan tambahan lebih dari <strong>4,5 juta Rupiah</strong> dan membuat area limbah mereka jauh lebih bersih dan terorganisir.
              </p>
            </div>

            <div className="card-premium bg-gradient-to-br from-[#E8F0E3] to-[#D9E3D3] border-l-4 border-l-[#0F3D2E] text-center">
              <h2 className="text-2xl font-bold text-[#0F3D2E] mb-4">
                Partner Jelantah Terpercaya Anda di Bekasi
              </h2>
              <p className="text-gray-700 mb-6">
                Baik Anda manajer pabrik di Cikarang atau ibu rumah tangga di Tambun, JelantahGO memiliki solusi yang tepat untuk Anda. Hubungi kami dan mari ubah limbah jelantah di Bekasi menjadi aset yang produktif.
              </p>
              <a
                href="https://wa.me/6285183033995?text=Halo%20JelantahGO,%20saya%20di%20Bekasi%20dan%20ingin%20menjual%20jelantah."
                target="_blank"
                rel="noopener"
                className="inline-block bg-[#25D366] text-white hover:bg-[#128C7E] px-8 py-4 rounded-full font-bold text-lg transition-smooth shadow-soft-lg hover:shadow-soft-xl"
              >
                Hubungi Tim Bekasi
              </a>
            </div>

            {/* Article Footer */}
            <BlogArticleFooter currentSlug="jual-minyak-jelantah-bekasi" />
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

