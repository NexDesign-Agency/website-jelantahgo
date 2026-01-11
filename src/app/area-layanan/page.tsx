import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ServiceSchema from '@/components/ServiceSchema'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'

export const metadata: Metadata = {
  title: 'Area Layanan Penjemputan Minyak Jelantah | Jakarta & Sekitarnya',
  description: 'JelantahGo melayani seluruh Jakarta & sekitarnya. Penjemputan gratis ≥40L, bayar instant Rp 6.500-7.500/L. Cek area layanan kami!',
  alternates: {
    canonical: 'https://jelantahgo.com/area-layanan',
  },
  openGraph: {
    title: 'Area Layanan Penjemputan Minyak Jelantah | Jakarta & Sekitarnya',
    description: 'JelantahGo melayani seluruh Jakarta & sekitarnya. Penjemputan gratis ≥40L, bayar instant Rp 6.500-7.500/L. Cek area layanan kami!',
    url: 'https://jelantahgo.com/area-layanan',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/v1760998331/jelantahgo_6_u3erug.webp',
        width: 1200,
        height: 630,
        alt: 'Area Layanan JelantahGO - Penjemputan Gratis Jabodetabek',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Area Layanan Penjemputan Minyak Jelantah | Jakarta & Sekitarnya',
    description: 'JelantahGo melayani seluruh Jakarta & sekitarnya. Penjemputan gratis ≥40L, bayar instant Rp 6.500-7.500/L. Cek area layanan kami!',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/v1760998331/jelantahgo_6_u3erug.webp'],
  },
}

export default function AreaLayananPage() {
  const areas = [
    {
      id: 'jakarta',
      name: 'DKI Jakarta',
      description: 'Sebagai jantung Ibu Kota, Jakarta adalah fokus utama layanan kami. Kami memahami dinamika setiap wilayah, dari pusat bisnis hingga sentra kuliner, untuk memberikan layanan yang cepat dan andal.',
      blogLink: '/blog/jual-minyak-jelantah-jakarta',
      districts: [
        {
          name: 'Jakarta Pusat',
          details: 'Gambir, Tanah Abang, Menteng, Senen, Cempaka Putih, Johar Baru, Kemayoran, Sawah Besar.',
        },
        {
          name: 'Jakarta Barat',
          details: 'Cengkareng, Grogol Petamburan, Taman Sari, Tambora, Kebon Jeruk, Kalideres, Palmerah, Kembangan.',
        },
        {
          name: 'Jakarta Selatan',
          details: 'Kebayoran Baru, Kebayoran Lama, Pesanggrahan, Cilandak, Pasar Minggu, Jagakarsa, Mampang Prapatan, Pancoran, Tebet, Setiabudi.',
        },
        {
          name: 'Jakarta Timur',
          details: 'Matraman, Jatinegara, Pulogadung, Cakung, Kramat Jati, Makasar, Pasar Rebo, Ciracas, Cipayung, Duren Sawit.',
        },
        {
          name: 'Jakarta Utara',
          details: 'Penjaringan, Pademangan, Tanjung Priok, Koja, Kelapa Gading, Cilincing.',
        },
      ],
    },
    {
      id: 'tangerang',
      name: 'Tangerang & Tangsel',
      description: 'Melayani seluruh wilayah Tangerang Raya termasuk Kota Tangerang, Tangerang Selatan, dan Kabupaten Tangerang dengan layanan penjemputan gratis.',
      blogLink: '/blog/jual-minyak-jelantah-tangerang',
      districts: [
        {
          name: 'Kota Tangerang',
          details: 'Tangerang Kota, Batu Ceper, Benda, Cibodas, Ciledug, Jatiuwung, Karawaci, Karang Tengah, Larangan, Neglasari, Periuk, Pinang.',
        },
        {
          name: 'Tangerang Selatan',
          details: 'Ciputat, Pamulang, Pondok Aren, Serpong, Serpong Utara, Setu, Benda.',
        },
        {
          name: 'Kabupaten Tangerang',
          details: 'Balaraja, Cikupa, Cisauk, Curug, Gunung Kaler, Jayanti, Kelapa Dua, Kemiri, Kosambi, Kresek, Kronjo, Legok, Mauk, Mekar Baru, Pagedangan, Pakuhaji, Panongan, Pasarkemis, Rajeg, Sepatan, Sepatan Timur, Sindang Jaya, Solear, Sukadiri, Sukamulya, Teluknaga, Tigaraksa.',
        },
      ],
    },
    {
      id: 'bekasi',
      name: 'Bekasi',
      description: 'Layanan penjemputan gratis untuk seluruh wilayah Bekasi baik Kota maupun Kabupaten Bekasi dengan harga kompetitif.',
      blogLink: '/blog/jual-minyak-jelantah-bekasi',
      districts: [
        {
          name: 'Kota Bekasi',
          details: 'Bekasi Barat, Bekasi Selatan, Bekasi Timur, Bekasi Utara, Jatiasih, Jatisampurna, Medan Satria, Mustika Jaya, Pondok Gede, Pondok Melati, Rawalumbu.',
        },
        {
          name: 'Kabupaten Bekasi',
          details: 'Babelan, Bojongmangu, Cabangbungin, Cibarusah, Cibitung, Cikarang Barat, Cikarang Pusat, Cikarang Selatan, Cikarang Timur, Cikarang Utara, Cikedung, Cikarang Selatan, Karangbahagia, Kedungwaringin, Muaragembong, Pebayuran, Serang Baru, Setu, Sukakarya, Sukatani, Sukawangi, Tambelang, Tambun Selatan, Tambun Utara, Tarumajaya.',
        },
      ],
    },
    {
      id: 'depok',
      name: 'Depok',
      description: 'Melayani seluruh wilayah Kota Depok dengan layanan penjemputan gratis untuk volume minimal 40 liter.',
      blogLink: '/blog/jual-minyak-jelantah-depok-bogor',
      districts: [
        {
          name: 'Kota Depok',
          details: 'Beji, Bojongsari, Cilodong, Cimanggis, Cinere, Cipayung, Limo, Pancoran Mas, Sawangan, Sukmajaya, Tapos.',
        },
      ],
    },
    {
      id: 'bogor',
      name: 'Bogor',
      description: 'Layanan untuk Kota Bogor dan sebagian wilayah Kabupaten Bogor dengan sistem penjemputan gratis yang efisien.',
      blogLink: '/blog/jual-minyak-jelantah-depok-bogor',
      districts: [
        {
          name: 'Kota Bogor',
          details: 'Bogor Barat, Bogor Selatan, Bogor Tengah, Bogor Timur, Bogor Utara, Tanah Sereal.',
        },
        {
          name: 'Kabupaten Bogor (Sebagian)',
          details: 'Cibinong, Cileungsi, Citeureup, Gunung Putri, Jonggol, Klapanunggal, Megamendung, Sukaraja, Tanjungsari, Ciawi, Cijeruk, Cisarua, Dramaga, Kemang, Leuwiliang, Leuwisadeng, Nanggung, Pamijahan, Parung, Ranca Bungur, Rumpin, Sukajaya, Tamansari, Tenjo, Tenjolaya.',
        },
      ],
    },
  ]

  return (
    <>
      <LocalBusinessSchema
        name="JelantahGO - Pengepul Minyak Jelantah Jabodetabek"
        address={{
          addressLocality: 'Jakarta',
          addressRegion: 'DKI Jakarta',
          addressCountry: 'ID',
        }}
        geo={{
          latitude: -6.2088,
          longitude: 106.8456,
        }}
        areaServed={['Jakarta', 'Tangerang', 'Bekasi', 'Depok', 'Bogor']}
        priceRange="Rp6500 - Rp7500"
      />
      <ServiceSchema />
      {/* Hero Section */}
      <section className="hero-bg-dots py-20 lg:py-28">
        <div className="container-custom relative z-10 text-center">
          <div className="inline-block bg-[#D9E3D3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🗺️ AREA LAYANAN JAKARTA
          </div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
            Penjemputan Gratis ≥20L di Seluruh Jakarta
          </h1>
          <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            <strong>5 wilayah Jakarta terlayani:</strong> Utara, Selatan, Timur, Barat, Pusat. Response 5-30 menit, bayar instant Rp 6.500-7.500/liter. <strong>Cek apakah area Anda sudah terlayani!</strong>
          </p>
        </div>
      </section>

      {/* Image */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <Image
            src="https://res.cloudinary.com/dknswj9co/image/upload/v1761171104/jelantah-go_8_aa2c3g.webp"
            alt="Area layanan JelantahGO di seluruh wilayah Jabodetabek - Jakarta, Bogor, Depok, Tangerang, Bekasi dengan layanan penjemputan gratis"
            width={1200}
            height={630}
            className="w-full max-w-4xl mx-auto rounded-card-lg shadow-layered"
            loading="lazy"
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Jangkauan Luas, Layanan Terpercaya
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Sebagai spesialis pengumpul minyak jelantah di Jabodetabek, kami telah merancang sistem logistik yang efisien untuk menjangkau Anda di mana pun Anda berada. Dengan minimal pengambilan <strong>40 liter</strong>, tim kami siap memberikan layanan penjemputan gratis langsung ke lokasi Anda.
            </p>
          </div>

          <div className="space-y-12">
            {areas.map((area, index) => (
              <div key={index} className="card-premium">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#0F3D2E] mb-4">
                      {area.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {area.description}
                    </p>
                    <Link
                      href={area.blogLink}
                      className="inline-block bg-[#0F3D2E] text-white hover:bg-[#134E3A] px-6 py-3 rounded-card font-bold text-sm transition-smooth shadow-soft hover:shadow-soft-lg"
                    >
                      Lihat Panduan Lengkap untuk {area.name} →
                    </Link>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  {area.districts.map((district, dIndex) => (
                    <div
                      key={dIndex}
                      className="bg-[#F9F8F6] rounded-card p-5 border border-gray-200"
                    >
                      <h4 className="font-bold text-[#0F3D2E] mb-2 text-lg">
                        {district.name}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {district.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom text-center max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
            Area Anda Belum Ada?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Jika area Anda belum tercantum di atas, jangan ragu untuk menghubungi kami. Kami terus mengembangkan jangkauan layanan kami.
          </p>
          <a
            href="https://wa.me/6285183033995?text=Halo%20JelantahGO,%20saya%20ingin%20tanya%20apakah%20area%20saya%20dilayani"
            target="_blank"
            rel="noopener"
            className="inline-block bg-[#0F3D2E] text-white hover:bg-[#134E3A] px-8 py-4 rounded-card font-bold text-lg transition-smooth shadow-soft-lg hover:shadow-soft-xl"
          >
            Tanya Area Layanan
          </a>
        </div>
      </section>

      {/* Related Pages Section */}
      <section className="py-16 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#0F3D2E] mb-4">
              Informasi Terkait
            </h2>
            <p className="text-gray-600">
              Jelajahi halaman lain untuk informasi lengkap tentang layanan kami
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link
              href="/cara-kerja"
              className="card-premium hover-lift text-center group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-smooth">⚙️</div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-2">Cara Kerja</h3>
              <p className="text-sm text-gray-600">Pelajari proses penjemputan dalam 4 langkah mudah</p>
            </Link>
            <Link
              href="/pricing"
              className="card-premium hover-lift text-center group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-smooth">💰</div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-2">Harga Terbaru</h3>
              <p className="text-sm text-gray-600">Cek harga minyak jelantah terbaru 2025</p>
            </Link>
            <Link
              href="/blog/jual-minyak-jelantah-jakarta"
              className="card-premium hover-lift text-center group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-smooth">📚</div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-2">Panduan Jakarta</h3>
              <p className="text-sm text-gray-600">Panduan lengkap jual minyak jelantah Jakarta</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

