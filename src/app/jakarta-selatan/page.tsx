import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Home, Building, Car, TreePine, Users, TrendingUp, Star, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Jakarta Selatan: Panduan Lengkap Hunian, Investasi & Gaya Hidup 2024',
  description: 'Cari tahu segalanya tentang Jakarta Selatan! Panduan lengkap untuk mencari rumah, apartemen, dan investasi properti di Kemang, Pondok Indah, dan lainnya. Baca sekarang!',
  keywords: 'Jakarta Selatan, Properti Jakarta, Hunian Jakarta, Investasi Properti, Kemang, Pondok Indah',
  alternates: {
    canonical: 'https://jelantahgo.com/jakarta-selatan',
  },
  openGraph: {
    title: 'Jakarta Selatan: Panduan Lengkap Hunian, Investasi & Gaya Hidup 2024',
    description: 'Cari tahu segalanya tentang Jakarta Selatan! Panduan lengkap untuk mencari rumah, apartemen, dan investasi properti di Kemang, Pondok Indah, dan lainnya.',
    url: 'https://jelantahgo.com/jakarta-selatan',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/v1763061461/jelantahgo_16_gv0jhu.webp',
        width: 1200,
        height: 630,
        alt: 'Jakarta Selatan - Panduan Lengkap Hunian dan Investasi',
      },
    ],
    locale: 'id_ID',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jakarta Selatan: Panduan Lengkap Hunian, Investasi & Gaya Hidup 2024',
    description: 'Cari tahu segalanya tentang Jakarta Selatan! Panduan lengkap untuk mencari rumah, apartemen, dan investasi properti di Kemang, Pondok Indah, dan lainnya.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/v1763061461/jelantahgo_16_gv0jhu.webp'],
  },
}

export default function JakartaSelatanPage() {
  return (
    <>
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "@id": "https://jelantahgo.com/jakarta-selatan#article",
            "headline": "Jakarta Selatan: Panduan Lengkap Hunian, Investasi & Gaya Hidup 2024",
            "description": "Cari tahu segalanya tentang Jakarta Selatan! Panduan lengkap untuk mencari rumah, apartemen, dan investasi properti di Kemang, Pondok Indah, dan lainnya.",
            "image": "https://res.cloudinary.com/dknswj9co/image/upload/v1763061461/jelantahgo_16_gv0jhu.webp",
            "datePublished": "2024-11-12T00:00:00+07:00",
            "dateModified": "2024-11-12T00:00:00+07:00",
            "author": {
              "@type": "Organization",
              "name": "JelantahGO"
            },
            "publisher": {
              "@type": "Organization",
              "name": "JelantahGO",
              "logo": {
                "@type": "ImageObject",
                "url": "https://res.cloudinary.com/dknswj9co/image/upload/v1761172234/favicon_jelantahgo_kjxjs4.webp"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://jelantahgo.com/jakarta-selatan"
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="hero-bg-dots py-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.3) 2.5px, transparent 2.5px)',
            backgroundSize: '8px 8px'
          }}></div>
        </div>

        <div className="container-custom relative z-10 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#D9E3D3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                🏙️ JAKARTA SELATAN 2024
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 text-white">
                Jakarta Selatan: Panduan Lengkap Anda untuk Hunian, Gaya Hidup, dan Investasi
              </h1>

              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                Jakarta Selatan, atau yang akrab disapa "Jaksel", adalah salah satu wilayah paling dinamis dan diminati di Ibukota. Dikenal dengan gaya hidupnya yang modern, kawasan hijau yang asri, dan pusat bisnis yang berkembang pesat, tidak heran jika banyak orang menjadikan Jakarta Selatan sebagai pilihan utama untuk tinggal dan berinvestasi.
                <br /><br />
                Dari apartemen mewah dengan pemandangan kota hingga rumah cluster yang tenang, Jakarta Selatan menawarkan segalanya. Artikel ini akan menjadi panduan lengkap Anda untuk memahami mengapa wilayah ini begitu istimewa, apa saja yang bisa dilakukan di sini, dan bagaimana Anda bisa memulai perjalanan mencari hunian impian.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="#mulai-jelajah"
                  className="bg-white text-[#0F3D2E] hover:bg-[#F9F8F6] px-8 py-4 rounded-card font-bold text-lg flex items-center justify-center gap-2 transition-smooth shadow-soft-lg hover:shadow-soft-xl"
                >
                  📖 Mulai Jelajahi Jakarta Selatan
                </a>
                <a
                  href="#kontak"
                  className="bg-transparent border-2 border-white/30 hover:bg-white/10 hover:border-white text-white px-8 py-4 rounded-card font-bold text-lg flex items-center justify-center gap-2 transition-smooth"
                >
                  💬 Konsultasi Hunian
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-card-lg overflow-hidden shadow-layered hover:shadow-soft-xl transition-smooth">
                <Image
                  src="https://res.cloudinary.com/dknswj9co/image/upload/v1763061461/jelantahgo_16_gv0jhu.webp"
                  alt="Jakarta Selatan - Panduan lengkap hunian dan investasi properti"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#D9E3D3] rounded-card-lg opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Jakarta Selatan */}
      <section id="mulai-jelajah" className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ⭐ MENGAPA JAKARTA SELATAN BEGITU DIMINATI?
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Daya Tarik Jakarta Selatan
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Daya tarik Jakarta Selatan bukanlah hal yang baru. Namun, popularitasnya terus meningkat karena kombinasi sempurna dari beberapa faktor kunci.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="card-premium">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Gaya Hidup Internasional</h3>
              <p className="text-gray-600 leading-relaxed">
                Kawasan seperti Kemang dan Pondok Indah memiliki reputasi sebagai "little international city". Anda akan menemukan banyak kedai kopi, restoran, dan sekolah bertaraf internasional di sini.
              </p>
            </div>

            <div className="card-premium">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Aksesibilitas Strategis</h3>
              <p className="text-gray-600 leading-relaxed">
                Meskipun terkenal macet di jam sibuk, Jakarta Selatan dilintasi jalan-jalan utama seperti Jalan TB Simatupang, Jalan Casablanca, dan Jalan Fatmawati. Akses ke Bandara Soekarno-Hatta dan tol menuju Bogor juga sangat mudah.
              </p>
            </div>

            <div className="card-premium">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Pusat Bisnis dan Perkantoran</h3>
              <p className="text-gray-600 leading-relaxed">
                Banyak perusahaan besar dan pusat bisnis (seperti SCBD dan Kuningan) berlokasi di perbatasan Jakarta Selatan, menjadikannya pilihan strategis bagi para pekerja profesional.
              </p>
            </div>

            <div className="card-premium">
              <div className="text-4xl mb-4">🌳</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Ruang Hijau dan Rekreasi</h3>
              <p className="text-gray-600 leading-relaxed">
                Berbeda dengan Jakarta Pusat yang padat, Jaksel menyediakan banyak ruang terbuka hijau. Taman Mini Indonesia Indah (TMII), Taman Ismail Marzuki (TIM), dan Ragunan menjadi paru-paru kota bagi warganya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Districts Overview */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🗺️ WAJAH JAKARTA SELATAN
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Menjelajahi Kecamatan Favorit
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Jakarta Selatan terdiri dari 10 kecamatan, namun ada beberapa yang menjadi sorotan utama karena popularitas hunian, komersial, dan gaya hidupnya.
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {/* Kebayoran Baru */}
            <div className="card-premium">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">🏙️</div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0F3D2E]">Kebayoran Baru: Jantung Gaya Hidup Jaksel</h3>
                  <p className="text-gray-600">Kebayoran Baru adalah episentrum dari segala hal yang keren di Jakarta Selatan.</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-card">
                  <h4 className="font-bold text-[#0F3D2E] mb-2">Pondok Indah (PIK & PIM)</h4>
                  <p className="text-sm text-gray-600">Dikenal dengan mal besar Pondok Indah Mall (PIM) yang selalu ramai. Area ini penuh dengan apartemen high-rise, rumah mewah, dan akses tol yang lancar.</p>
                </div>
                <div className="bg-white p-4 rounded-card">
                  <h4 className="font-bold text-[#0F3D2E] mb-2">Kemang</h4>
                  <p className="text-sm text-gray-600">Surga bagi para ekspatriat dan anak muda kreatif. Kemang dipenuhi dengan bar, restoran, galeri seni, dan suasana yang santai.</p>
                </div>
                <div className="bg-white p-4 rounded-card">
                  <h4 className="font-bold text-[#0F3D2E] mb-2">Lebak Bulus</h4>
                  <p className="text-sm text-gray-600">Area yang lebih tenang namun strategis, terutama dengan adanya terminal bus dan akses ke Jakarta-Serpong.</p>
                </div>
              </div>
            </div>

            {/* Mampang Prapatan */}
            <div className="card-premium">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">🍽️</div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0F3D2E]">Mampang Prapatan: Surga Kuliner dan Perkantoran</h3>
                  <p className="text-gray-600">Jika Anda seorang foodies, Mampang adalah surga Anda.</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Kawasan ini terkenal dengan segudang restoran dan kafe legendaris. Selain itu, Mampang juga menjadi lokasi banyak perkantoran besar dan kawasan komersial seperti Plaza Festival Kuningan. Hunian di sini didominasi oleh apartemen dan rumah di kompleks perumahan yang mapan.
              </p>
            </div>

            {/* Pasar Minggu */}
            <div className="card-premium">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">🎓</div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0F3D2E]">Pasar Minggu: Perpaduan Hunian dan Edukasi</h3>
                  <p className="text-gray-600">Kecamatan ini menawarkan keseimbangan yang baik antara area hunian yang tenang dan akses mudah ke pusat kota.</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Pasar Minggu dikenal karena dekat dengan Universitas Indonesia (UI) dan pusat perbelanjaan seperti Cilandak Town Square (Citos). Properti di sini cenderung lebih terjangkau dibandingkan Kebayoran Baru, menjadikannya pilihan cerdas untuk investasi properti di Jakarta Selatan.
              </p>
            </div>

            {/* Jagakarsa & Tanjung Barat */}
            <div className="card-premium">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">🌿</div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0F3D2E]">Jagakarsa & Tanjung Barat: Oasis Ketenangan</h3>
                  <p className="text-gray-600">Bagi Anda yang mencari ketenangan dan nuansa lebih hijau, dua kecamatan di pinggiran ini adalah pilihan tepat.</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Jagakarsa dan Tanjung Barat menawarkan banyak pilihan rumah dengan lahan lebih luas dan harga yang lebih bersahabat. Akses ke Ragunan dan Depok menjadi nilai plus tersendiri.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🏠 TIPE PROPERTI POPULER
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Tipe Properti Populer di Jakarta Selatan
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Memilih hunian di Jakarta Selatan sangatlah beragam. Sesuaikan dengan budget, gaya hidup, dan kebutuhan keluarga Anda.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-6xl mx-auto bg-white rounded-card-lg shadow-soft overflow-hidden">
              <thead className="bg-[#0F3D2E] text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">Tipe Properti</th>
                  <th className="px-6 py-4 text-left font-bold">Karakteristik & Lokasi Populer</th>
                  <th className="px-6 py-4 text-left font-bold">Cocok Untuk</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-[#0F3D2E]">Apartemen</td>
                  <td className="px-6 py-4 text-gray-700">Pilihan paling populer. Tersedia dari studio hingga 3+1 kamar. Lokasi favorit: Kemang, TB Simatupang, Pondok Indah, Casablanca.</td>
                  <td className="px-6 py-4 text-gray-700">Profesional muda, keluarga kecil, investor.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-[#0F3D2E]">Rumah Cluster</td>
                  <td className="px-6 py-4 text-gray-700">Kompleks dengan fasilitas keamanan 24 jam. Banyak ditemukan di Pasar Minggu, Jagakarsa, dan Cilandak.</td>
                  <td className="px-6 py-4 text-gray-700">Keluarga yang butuh privasi dan ruang.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-[#0F3D2E]">Rumah Townhouse</td>
                  <td className="px-6 py-4 text-gray-700">Pilihan praktis dengan desain modern. Populer di area strategis seperti Ampera dan Kemang.</td>
                  <td className="px-6 py-4 text-gray-700">Keluarga muda, investasi sewa.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-[#0F3D2E]">Rumah Biasa</td>
                  <td className="px-6 py-4 text-gray-700">Menawarkan keleluasaan lahan dan privasi maksimal. Banyak ditemukan di kecamatan pinggiran seperti Tanjung Barat.</td>
                  <td className="px-6 py-4 text-gray-700">Keluarga besar, mencari hunian jangka panjang.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Transportation */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🚇 TRANSPORTASI & MOBILITAS
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Transportasi dan Mobilitas di Jakarta Selatan
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Salah satu kunci kenyamanan tinggal di Jakarta Selatan adalah sistem transportasinya.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="card-premium">
              <div className="text-4xl mb-4">🛣️</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Jalan Utama</h3>
              <p className="text-gray-600 leading-relaxed">
                Jalan Tol TB Simatupang, Tol Jagorawi, Jalan Fatmawati, Jalan Casablanca, dan Jalan Ampera adalah arteri utama yang menghubungkan Jaksel ke wilayah lain.
              </p>
            </div>

            <div className="card-premium">
              <div className="text-4xl mb-4">🚌</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Transjakarta</h3>
              <p className="text-gray-600 leading-relaxed">
                Banyak koridor Transjakarta yang melintasi Jaksel, seperti Koridor 6 (Ragunan - Balai Kota), 7B (Kampung Rambutan - Juanda), dan 9B (Pinang Ranti - Pluit).
              </p>
            </div>

            <div className="card-premium">
              <div className="text-4xl mb-4">🚇</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">MRT & LRT</h3>
              <p className="text-gray-600 leading-relaxed">
                Stasiun MRT seperti Blok M, ASEAN, dan Velodrome memberikan alternatif transportasi cepat dan bebas macet. LRT juga mulai beroperasi di area Cawang dan Cililitan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Corner */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              📈 SUDUT INVESTOR
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Mengapa Jakarta Selatan Adalah Pilihan Cerdas?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Bagi para investor, properti di Jakarta Selatan adalah komoditas panas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card-premium">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Nilai Properti Stabil</h3>
              <p className="text-gray-600 leading-relaxed">
                Nilai tanah dan properti di sini cenderung naik secara konsisten. Permintaan sewa untuk apartemen dan rumah selalu tinggi, terutama dari para profesional dan ekspatriat yang bekerja di sekitar SCBD, Kuningan, dan CBD Casablanca.
              </p>
            </div>

            <div className="card-premium">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Investasi Jangka Panjang</h3>
              <p className="text-gray-600 leading-relaxed">
                Lokasi strategis, fasilitas lengkap, dan gaya hidup premium menjadikan Jakarta Selatan sebagai magnet investasi jangka panjang. Jika Anda mencari aset yang aman dan menguntungkan, Jaksel adalah jawabannya.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-[#0F3D2E] to-[#134E3A] text-white p-8 rounded-card-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Tertarik berinvestasi properti di Jakarta Selatan?</h3>
              <p className="text-lg mb-6">Temukan peluang terbaik hanya di [Link ke Blog: Panduan Investasi Properti].</p>
              <Link href="/blog" className="inline-flex items-center gap-2 bg-white text-[#0F3D2E] hover:bg-gray-100 px-6 py-3 rounded-card font-semibold transition-smooth">
                Pelajari Lebih Lanjut <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion & CTA */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ✨ KESIMPULAN
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Jakarta Selatan, Lebih dari Sekadar Alamat
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Jakarta Selatan bukan hanya sebuah wilayah administratif. Ini adalah sebuah gaya hidup, sebuah investasi masa depan, dan sebuah komunitas yang dinamis. Dengan perpaduan sempurna antara fasilitas modern, ruang hijau, dan aksesibilitas, tidak mengherankan jika Jaksel terus menjadi primadona.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Baik Anda mencari rumah di Jakarta Selatan untuk keluarga, apartemen untuk disewa, atau peluang investasi properti, wilayah ini menawarkan solusi untuk setiap kebutuhan.
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#0F3D2E] to-[#134E3A] text-white p-12 rounded-card-lg max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Siap Menemukan Hunian Impian Anda?</h3>
            <p className="text-xl mb-8 opacity-90">
              Jelajahi pilihan properti terbaik di seluruh penjuru Jakarta Selatan. Tim kami siap membantu Anda menemukan hunian yang sesuai dengan impian dan budget Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/+6285183033995033995?text=Halo%20JelantahGO,%20saya%20ingin%20konsultasi%20hunian%20di%20Jakarta%20Selatan"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#0F3D2E] hover:bg-gray-100 px-8 py-4 rounded-card font-bold text-lg flex items-center justify-center gap-2 transition-smooth shadow-soft-lg hover:shadow-soft-xl"
              >
                💬 Konsultasi Sekarang
              </a>
              <Link
                href="/jakarta"
                className="bg-transparent border-2 border-white/30 hover:bg-white/10 hover:border-white text-white px-8 py-4 rounded-card font-bold text-lg flex items-center justify-center gap-2 transition-smooth"
              >
                🏙️ Jelajahi Jakarta Lainnya
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}