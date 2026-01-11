import type { Metadata } from 'next'
import Image from 'next/image'
import BlogSidebar from '@/components/BlogSidebar'
import BlogArticleFooter from '@/components/BlogArticleFooter'
import ArticleSchema from '@/components/ArticleSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Jual Minyak Jelantah Depok & Bogor | Harga Rp 7.500-8.500/L',
  description: 'Jual minyak jelantah di Depok & Bogor harga premium Rp 7.500-8.500/liter. Layanan jemput gratis untuk kampus UI, pusat kuliner Bogor. Min 40L.',
  alternates: {
    canonical: 'https://jelantahgo.com/blog/jual-minyak-jelantah-depok-bogor',
  },
  openGraph: {
    title: 'Jual Minyak Jelantah Depok & Bogor | Harga Rp 7.500-8.500/L',
    description: 'Jual minyak jelantah di Depok & Bogor harga premium Rp 7.500-8.500/liter. Layanan jemput gratis untuk kampus UI, pusat kuliner Bogor. Min 40L.',
    url: 'https://jelantahgo.com/blog/jual-minyak-jelantah-depok-bogor',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761963250/jelantahgo_hero_11_vic3dh.webp',
        width: 1200,
        height: 630,
        alt: 'Jual Minyak Jelantah Depok & Bogor',
      },
    ],
    locale: 'id_ID',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jual Minyak Jelantah Depok & Bogor | Harga Rp 7.500-8.500/L',
    description: 'Jual minyak jelantah di Depok & Bogor harga premium Rp 7.500-8.500/liter. Layanan jemput gratis untuk kampus UI, pusat kuliner Bogor. Min 40L.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761963250/jelantahgo_hero_11_vic3dh.webp'],
  },
}

export default function JualDepokBogorPage() {
  return (
    <>
      <ArticleSchema
        title="Jual Minyak Jelantah Depok & Bogor - Panduan 2025"
        description="Panduan lengkap untuk warga dan bisnis kuliner di Depok dan Bogor yang ingin menjual minyak jelantah mereka secara mudah, cepat, dan menguntungkan dengan jemput gratis."
        image="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761963250/jelantahgo_hero_11_vic3dh.webp"
        datePublished="2025-10-22"
        dateModified="2025-10-22"
        articleUrl="https://jelantahgo.com/blog/jual-minyak-jelantah-depok-bogor"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://jelantahgo.com' },
          { name: 'Blog', url: 'https://jelantahgo.com/blog' },
          { name: 'Jual Minyak Jelantah Depok & Bogor', url: 'https://jelantahgo.com/blog/jual-minyak-jelantah-depok-bogor' },
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
              Jual Minyak Jelantah Depok & Bogor
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Panduan Kuliner & Warga 2025
            </p>
          </div>
        </div>
      </section>
      {/* Image */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <Image
            src="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761963250/jelantahgo_hero_11_vic3dh.webp"
            alt="Jual Minyak Jelantah Depok & Bogor"
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
              Depok dan Bogor adalah dua kota yang identik dengan kehidupan modern yang seimbang dengan keasrian lingkungan. Dengan banyaknya kawasan perumahan, pusat kuliner, dan kampus-kampus besar, kedua kota ini menghasilkan volume jelantah yang signifikan setiap harinya.
            </p>

            <div className="card-premium mb-8">
              <h2 className="text-2xl font-bold text-[#0F3D2E] mb-4">Layanan di Depok & Bogor</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-[#0F3D2E] mb-2">1. Depok: Solusi untuk Perumahan & Kampus</h3>
                  <p className="text-gray-700 mb-2">
                    Kota Depok dengan karakteristiknya sebagai kota pendidikan dan perumahan membutuhkan solusi yang praktis:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm">
                    <li>Jalan Margonda & Sekitarnya: Penjemputan rutin untuk ratusan kafe, restoran, dan mal di sepanjang arteri utama Depok.</li>
                    <li>Area Perumahan: Jangkauan luas ke area perumahan di Sawangan, Cinere, hingga Cibubur untuk layanan jemput gratis bagi warga.</li>
                    <li>Kawasan Kampus: Layanan khusus untuk kantin-kantin kampus di UI dan kampus lain di Depok.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-[#0F3D2E] mb-2">2. Bogor: Partner bagi Industri Kuliner & Warga Kota Hujan</h3>
                  <p className="text-gray-700 mb-2">
                    Sebagai surga kuliner, Bogor membutuhkan partner pengelolaan limbah yang andal:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm">
                    <li>Pusat Kuliner Kota Bogor: Layanan prioritas untuk restoran, kafe, dan toko oleh-oleh di sekitar Kebun Raya Bogor, Pajajaran, dan Suryakencana.</li>
                    <li>Hotel & Villa: Solusi B2B untuk industri perhotelan di Bogor dan sekitarnya (area tertentu).</li>
                    <li>Kabupaten Bogor (Cibinong, Sentul, dll.): Jangkauan layanan yang terus berkembang untuk melayani pusat pemerintahan dan area pemukiman baru di sekitar Bogor.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card-premium bg-gradient-to-br from-[#F9F8F6] to-[#E8F0E3] border-l-4 border-l-[#0F3D2E] mb-8">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Studi Kasus: Inisiatif "Asinan Peduli Lingkungan" di Bogor</h3>
              <p className="text-gray-700 leading-relaxed">
                Sebuah produsen asinan legendaris di Kota Bogor yang juga menjual gorengan menghasilkan sekitar 80 liter jelantah per bulan. Sebelumnya, mereka kesulitan mencari pengepul yang mau datang rutin untuk volume "tanggung" tersebut. Setelah bermitra dengan JelantahGO, kami menjadwalkan penjemputan rutin setiap bulan. Kini, mereka tidak hanya memastikan limbahnya tidak mencemari lingkungan asri Bogor, tetapi juga mendapatkan pemasukan tambahan hampir <strong>8 juta Rupiah per tahun</strong>, yang mereka gunakan untuk bonus karyawan.
              </p>
            </div>

            <div className="card-premium bg-gradient-to-br from-[#E8F0E3] to-[#D9E3D3] border-l-4 border-l-[#0F3D2E] text-center">
              <h2 className="text-2xl font-bold text-[#0F3D2E] mb-4">
                Solusi Jelantah Anda di Depok dan Bogor
              </h2>
              <p className="text-gray-700 mb-6">
                Jadikan pengelolaan jelantah sebagai bagian dari gaya hidup modern di Depok dan komitmen pada keasrian di Bogor. Hubungi JelantahGO untuk layanan yang mudah, cepat, dan menguntungkan.
              </p>
              <a
                href="https://wa.me/6285183033995?text=Halo%20JelantahGO,%20saya%20di%20Depok/Bogor%20dan%20ingin%20menjual%20jelantah."
                target="_blank"
                rel="noopener"
                className="inline-block bg-[#25D366] text-white hover:bg-[#128C7E] px-8 py-4 rounded-full font-bold text-lg transition-smooth shadow-soft-lg hover:shadow-soft-xl"
              >
                Hubungi Tim Depok-Bogor
              </a>
            </div>

            {/* Article Footer */}
            <BlogArticleFooter currentSlug="jual-minyak-jelantah-depok-bogor" />
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

