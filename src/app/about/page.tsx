import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Users, TrendingUp, Award, Target, Heart, Shield, DollarSign, Zap,
  Clock, MapPin, Phone, Mail, Globe, CheckCircle, Building, Leaf,
  Truck, Scale, Wallet, ArrowRight, Calendar, Users2, TrendingDown,
  Factory, Handshake, GraduationCap, MessageCircle, Star, BookOpen,
  ExternalLink, Home, UtensilsCrossed, Building2, Gauge, Eye
} from 'lucide-react'
import OrganizationSchema from '@/components/OrganizationSchema'

export const metadata: Metadata = {
  title: 'Tentang JelantahGO: Pengepul Minyak Jelantah Terpercaya di Jakarta',
  description: 'JelantahGo adalah pengepul minyak jelantah profesional di Jakarta sejak 2020. Melayani 30+ mitra dengan harga terbaik, proses transparan, dan komitmen lingkungan. Hub: 0851-8303-3995',
  alternates: {
    canonical: 'https://jelantahgo.com/about',
  },
  openGraph: {
    title: 'Tentang JelantahGO - Pengepul Minyak Jelantah Terpercaya di Indonesia',
    description: 'JelantahGo adalah pengepul minyak jelantah profesional yang berkomitmen mengubah limbah minyak goreng bekas menjadi solusi ramah lingkungan dan bernilai ekonomis.',
    url: 'https://jelantahgo.com/about',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/v1763061453/about_jelantahgo_sssxbm.webp',
        width: 1200,
        height: 630,
        alt: 'Tentang JelantahGO - Pengepul Minyak Jelantah Terpercaya',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tentang JelantahGO - Pengepul Minyak Jelantah Terpercaya di Indonesia',
    description: 'JelantahGo adalah pengepul minyak jelantah profesional yang berkomitmen mengubah limbah minyak goreng bekas menjadi solusi ramah lingkungan.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/v1763061453/about_jelantahgo_sssxbm.webp'],
  },
}

export default function AboutPage() {
  return (
    <>
      <OrganizationSchema
        address={{
          streetAddress: 'Jl. Papanggo 3C No.250, Papanggo, Kec. Tj. Priok',
          addressLocality: 'Jakarta Utara',
          addressRegion: 'Daerah Khusus Ibukota Jakarta',
          postalCode: '14340',
          addressCountry: 'ID',
        }}
        sameAs={[
          'https://wa.me/6285183033995',
          'https://jelantahgo.com',
        ]}
      />
      {/* Hero */}
      <section className="hero-bg-dots py-20">
        <div className="container-custom text-center relative z-10">
          <div className="inline-block bg-[#D9E3D3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            TENTANG KAMI
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Tentang JelantahGo - Pengepul Minyak Jelantah Terpercaya di Jakarta
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Pengepul Minyak Jelantah Profesional Sejak 2020
          </p>
        </div>
      </section>

      {/* Siapa Kami */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#0F3D2E] mb-8">
              Siapa Kami
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                JelantahGo adalah pengepul minyak jelantah profesional yang beroperasi di Jakarta sejak 2020. Kami mengubah limbah minyak goreng bekas menjadi solusi ramah lingkungan dengan membeli minyak jelantah dari rumah tangga, restoran, hotel, hingga industri food & beverage.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dalam 5 tahun operasional, kami telah melayani 30+ mitra aktif dan mengumpulkan puluhan ribu liter minyak jelantah yang kemudian diolah menjadi biodiesel oleh pabrik mitra kami. Setiap tetes minyak jelantah yang Anda jual kepada kami berkontribusi pada ekonomi sirkular dan kelestarian lingkungan Jakarta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-16 bg-[#F9F8F6]">
        <div className="container-custom">
          <Image
            src="https://res.cloudinary.com/dknswj9co/image/upload/v1763061453/about_jelantahgo_sssxbm.webp"
            alt="Tentang JelantahGO - Pengepul Minyak Jelantah Jakarta Terpercaya"
            width={1200}
            height={630}
            className="w-full max-w-4xl mx-auto rounded-card-lg shadow-layered"
            loading="lazy"
          />
        </div>
      </section>

      {/* Sejarah & Perjalanan Kami */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#0F3D2E] mb-12">
              Sejarah & Perjalanan Kami
            </h2>

            <div className="card-premium mb-8">
              <h3 className="text-2xl font-bold text-[#0F3D2E] mb-4">Awal Mula (2020)</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                JelantahGo lahir dari keprihatinan melihat minyak jelantah dibuang sembarangan ke saluran air Jakarta, mencemari lingkungan dan ekosistem. Kami percaya minyak jelantah memiliki nilai ekonomis tinggi jika dikelola dengan benar.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Berawal dari 5 restoran mitra di Jakarta Utara, kami membangun sistem pengepulan minyak goreng bekas yang transparan, menguntungkan, dan ramah lingkungan.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-center text-[#0F3D2E] mb-8">Milestone 5 Tahun</h3>
              <div className="space-y-6">
                {[
                  {
                    year: '2020',
                    description: 'Memulai dengan 5 restoran mitra di Jakarta Utara',
                  },
                  {
                    year: '2021',
                    description: 'Bermitra dengan pabrik biodiesel & ekspansi ke seluruh Jakarta',
                  },
                  {
                    year: '2022',
                    description: 'Meluncurkan layanan penjemputan rutin (10.000+ liter/bulan)',
                  },
                  {
                    year: '2023',
                    description: 'Program "Jelantah Go Green" untuk edukasi masyarakat',
                  },
                  {
                    year: '2024',
                    description: 'Kantor resmi di Papanggo & 30+ mitra aktif',
                  },
                  {
                    year: '2025',
                    description: 'Rencana ekspansi ke Jabodetabek',
                  },
                ].map((milestone, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-[#0F3D2E] to-[#134E3A] text-white rounded-full flex items-center justify-center font-bold">
                      {milestone.year}
                    </div>
                    <div className="flex-grow card-premium">
                      <p className="text-gray-700">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-gray-600 mt-8">
                Perjalanan 5 tahun kami sebagai pengepul minyak jelantah terus berkembang, dan kami bangga menjadi bagian dari gerakan ekonomi sirkular di Jakarta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#0F3D2E] mb-12">
            Visi & Misi
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card-premium">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-[#0F3D2E]" />
                <h3 className="text-2xl font-bold text-[#0F3D2E]">Visi Kami</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Menjadi pengepul minyak jelantah terdepan di Indonesia yang menciptakan ekosistem daur ulang berkelanjutan dan memberikan nilai ekonomis maksimal bagi setiap mitra.
              </p>
            </div>

            <div className="card-premium">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-8 h-8 text-[#0F3D2E]" />
                <h3 className="text-2xl font-bold text-[#0F3D2E]">Misi Kami</h3>
              </div>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Mengumpulkan minyak jelantah dengan harga terbaik dan proses transparan</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Mendistribusikan ke pabrik pengolahan resmi untuk biodiesel berkualitas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Mengedukasi masyarakat Jakarta tentang nilai ekonomis minyak jelantah</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Membangun jaringan pengepul di seluruh Indonesia</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nilai-Nilai Perusahaan */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#0F3D2E] mb-12">
            Nilai-Nilai Perusahaan
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: <Handshake className="w-8 h-8" />,
                title: '🤝 Transparansi',
                description: 'Timbangan digital, harga jelas, bayar langsung',
              },
              {
                icon: <Leaf className="w-8 h-8" />,
                title: '🌱 Sustainability',
                description: 'Setiap keputusan prioritaskan dampak lingkungan',
              },
              {
                icon: <DollarSign className="w-8 h-8" />,
                title: '💰 Keadilan',
                description: 'Harga pasar terbaik tanpa potongan tersembunyi',
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: '⚡ Profesional',
                description: 'Cepat, efisien, dapat diandalkan',
              },
            ].map((value, index) => (
              <div key={index} className="card-premium text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-[#0F3D2E] text-white rounded-full flex items-center justify-center">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mengapa JelantahGo Berbeda */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#0F3D2E] mb-4">
              Mengapa JelantahGo Berbeda
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Sebagai Pengepul Minyak Jelantah Terpercaya
            </p>
            <p className="text-center text-gray-700 mb-8 text-lg">
              Apa yang membuat kami berbeda dari pengepul minyak jelantah lainnya?
            </p>

            <div className="space-y-6">
              {[
                {
                  number: '1',
                  title: 'Harga Kompetitif & Transparan',
                  description: 'Bermitra langsung dengan pabrik biodiesel, kami memberikan harga lebih baik tanpa banyak perantara. Update harga rutin sesuai pasar.',
                  icon: <DollarSign className="w-6 h-6" />,
                },
                {
                  number: '2',
                  title: 'Timbangan Digital Transparan',
                  description: 'Tidak ada potongan tidak wajar. Anda bisa saksikan penimbangan langsung. Yang tertera = yang Anda terima.',
                  icon: <Eye className="w-6 h-6" />,
                },
                {
                  number: '3',
                  title: 'Pembayaran Instant',
                  description: 'Tunai atau transfer langsung di tempat setelah penimbangan. Tanpa sistem tempo.',
                  icon: <Wallet className="w-6 h-6" />,
                },
                {
                  number: '4',
                  title: 'Layanan Fleksibel',
                  description: 'Dari botol kecil rumah tangga (bisa antar ke kantor) hingga ratusan liter industri (kami jemput).',
                  icon: <Users className="w-6 h-6" />,
                },
                {
                  number: '5',
                  title: 'Kantor & Gudang Resmi',
                  description: 'Alamat jelas di Papanggo, Jakarta Utara. Buka 6 hari seminggu. Anda bisa datang langsung.',
                  icon: <Building className="w-6 h-6" />,
                },
              ].map((point, index) => (
                <div key={index} className="card-premium">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#0F3D2E] text-white rounded-full flex items-center justify-center font-bold text-xl">
                      {point.number}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="text-[#0F3D2E]">
                          {point.icon}
                        </div>
                        <h3 className="text-xl font-bold text-[#0F3D2E]">{point.title}</h3>
                      </div>
                      <p className="text-gray-700">{point.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tim Kami */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#0F3D2E] mb-4">
              Tim Kami
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Di balik layanan pengepulan minyak jelantah JelantahGo, ada tim solid yang berdedikasi tinggi:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Tim Pengepul Lapangan',
                  description: 'Berpengalaman dalam handling dan transportasi minyak jelantah dengan aman. Mereka adalah wajah JelantahGo yang akan Anda temui.',
                  icon: <Truck className="w-8 h-8" />,
                },
                {
                  title: 'Tim Quality Control',
                  description: 'Memastikan setiap batch minyak goreng bekas yang dikumpulkan memenuhi standar kualitas untuk pengolahan biodiesel.',
                  icon: <CheckCircle className="w-8 h-8" />,
                },
                {
                  title: 'Tim Operasional',
                  description: 'Mengatur jadwal pengambilan, logistik, dan memastikan proses pengepulan minyak jelantah berjalan efisien.',
                  icon: <Calendar className="w-8 h-8" />,
                },
                {
                  title: 'Tim Customer Service',
                  description: 'Siap membantu Anda 6 hari seminggu untuk pertanyaan, keluhan, atau koordinasi penjemputan.',
                  icon: <MessageCircle className="w-8 h-8" />,
                },
              ].map((team, index) => (
                <div key={index} className="card-premium">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-[#0F3D2E] text-white rounded-full flex items-center justify-center">
                      {team.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#0F3D2E]">{team.title}</h3>
                  </div>
                  <p className="text-gray-700">{team.description}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-8">
              Setiap anggota tim kami dilatih untuk memberikan layanan terbaik dan menjunjung tinggi nilai-nilai perusahaan kami sebagai pengepul minyak jelantah profesional.
            </p>
          </div>
        </div>
      </section>

      {/* Komitmen Profesional */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#0F3D2E] mb-12">
              Komitmen Profesional
            </h2>
            <p className="text-center text-gray-700 mb-8">
              Sebagai pengepul minyak jelantah yang bertanggung jawab, kami beroperasi dengan prinsip profesional dan transparan:
            </p>

            <div className="card-premium">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  '✅ Kantor & Gudang Resmi di Jakarta Utara yang dapat Anda kunjungi',
                  '✅ Kemitraan Resmi dengan pabrik biodiesel berlisensi di Indonesia',
                  '✅ SOP Terstandar dalam pengepulan dan pengelolaan minyak goreng bekas',
                  '✅ Sistem Pembayaran Legal dengan bukti transfer/nota yang jelas',
                  '✅ Tracking & Dokumentasi lengkap untuk setiap transaksi',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-gray-700 mt-6 font-semibold">
                Kami berkomitmen memberikan layanan pengepulan minyak jelantah yang profesional, aman, dan dapat dipertanggungjawabkan kepada setiap mitra kami.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Layanan Pengepulan Minyak Jelantah */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#0F3D2E] mb-4">
            Layanan Pengepulan Minyak Jelantah
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Sebagai pengepul minyak jelantah yang komprehensif, kami melayani berbagai segmen:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: <Home className="w-8 h-8" />,
                title: '🏠 Rumah Tangga',
                description: 'Minyak goreng bekas dari dapur Anda memiliki nilai! Minimal volume rendah, pembayaran tunai, cocok untuk ibu rumah tangga yang ingin penghasilan tambahan.',
              },
              {
                icon: <UtensilsCrossed className="w-8 h-8" />,
                title: '🍽️ Restoran & Warung',
                description: 'Jadwal pengambilan rutin (mingguan/bulanan), kontrak kerjasama jangka panjang, dokumentasi lengkap untuk pembukuan bisnis Anda.',
              },
              {
                icon: <Building2 className="w-8 h-8" />,
                title: '🏨 Hotel & Catering',
                description: 'Layanan pick-up terjadwal, volume besar, sistem kontrak B2B, sertifikat pengepulan untuk compliance perusahaan.',
              },
              {
                icon: <Factory className="w-8 h-8" />,
                title: '🏭 Industri Food & Beverage',
                description: 'Tangki penyimpanan on-site, truk khusus untuk volume ratusan liter, tim dedicated untuk handling industri, reporting berkala.',
              },
            ].map((service, index) => (
              <div key={index} className="card-premium">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-[#0F3D2E] text-white rounded-full flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#0F3D2E] mb-3 text-center">{service.title}</h3>
                <p className="text-gray-700 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proses Kerja Kami */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#0F3D2E] mb-4">
              Proses Kerja Kami
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Bagaimana kami beroperasi sebagai pengepul minyak jelantah profesional?
            </p>

            <div className="space-y-6">
              {[
                {
                  number: '1',
                  title: 'Hubungi Kami',
                  description: 'WhatsApp/telepon/email untuk koordinasi penjemputan atau pengantaran.',
                },
                {
                  number: '2',
                  title: 'Konfirmasi',
                  description: 'Volume, lokasi, jadwal - tim kami akan mengatur semuanya.',
                },
                {
                  number: '3',
                  title: 'Penjemputan/Antar',
                  description: 'Min. 40L kami jemput gratis | <40L bisa antar ke kantor kami.',
                },
                {
                  number: '4',
                  title: 'Penimbangan',
                  description: 'Timbangan digital transparan, Anda saksikan langsung prosesnya.',
                },
                {
                  number: '5',
                  title: 'Pembayaran',
                  description: 'Tunai/transfer instant dengan nota resmi, tanpa potongan.',
                },
                {
                  number: '6',
                  title: 'Distribusi',
                  description: 'Kami kirim ke pabrik biodiesel mitra untuk pengolahan ramah lingkungan.',
                },
              ].map((step, index) => (
                <div key={index} className="card-premium">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#0F3D2E] text-white rounded-full flex items-center justify-center font-bold text-xl">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#0F3D2E] mb-2">{step.title}</h3>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-8">
              Seluruh proses ini memastikan bahwa kami beroperasi sebagai pengepul minyak goreng bekas yang bertanggung jawab dan profesional.
            </p>
          </div>
        </div>
      </section>

      {/* Komitmen Lingkungan */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#0F3D2E] mb-4">
              Komitmen Lingkungan
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Lebih dari sekadar pengepul minyak jelantah, kami adalah agen perubahan untuk lingkungan yang lebih baik:
            </p>

            <div className="card-premium mb-8">
              <h3 className="text-2xl font-bold text-[#0F3D2E] mb-6 text-center">Dampak Kami di Jakarta - Pencapaian 5 Tahun (2020-2025)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: '📊', text: '50.000+ liter minyak jelantah terkumpul' },
                  { icon: '🌍', text: '50+ juta liter air Jakarta terselamatkan dari pencemaran' },
                  { icon: '♻️', text: '35+ ton CO2 berkurang melalui biodiesel' },
                  { icon: '🤝', text: '30+ mitra aktif di 5 wilayah Jakarta' },
                  { icon: '✅', text: '500+ transaksi berhasil dengan kepuasan tinggi' },
                ].map((impact, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-2xl">{impact.icon}</span>
                    <span className="text-gray-700">{impact.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-premium">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-8 h-8 text-[#0F3D2E]" />
                <h3 className="text-2xl font-bold text-[#0F3D2E]">Program Edukasi</h3>
              </div>
              <p className="text-gray-700 mb-4">Kami rutin mengadakan:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Workshop tentang bahaya minyak jelantah dan cara pengelolaannya</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Kampanye di sekolah dan komunitas tentang daur ulang</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Pelatihan bagi calon mitra pengepul lokal</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Sosialisasi ke UMKM kuliner tentang sistem pengepulan</span>
                </li>
              </ul>
              <p className="text-gray-700 mt-6 font-semibold">
                Sebagai pengepul minyak jelantah yang peduli, kami percaya edukasi adalah kunci perubahan jangka panjang.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lokasi & Area Layanan */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#0F3D2E] mb-12">
              Lokasi & Area Layanan
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="card-premium">
                <h3 className="text-xl font-bold text-[#0F3D2E] mb-4 flex items-center gap-2">
                  <MapPin className="w-6 h-6" />
                  Kantor & Gudang Pusat
                </h3>
                <p className="text-gray-700 mb-4">
                  Jl. Papanggo 3C No.250, Papanggo<br />
                  Kec. Tanjung Priok, Jakarta Utara<br />
                  DKI Jakarta 14340
                </p>
                <a
                  href="https://maps.google.com/?q=Jl.+Papanggo+3C+No.250,+Jakarta+Utara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0F3D2E] font-semibold hover:underline inline-flex items-center gap-2"
                >
                  📍 Lihat di Google Maps
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="card-premium">
                <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Area Layanan Pengepul Minyak Jelantah</h3>
                <p className="text-gray-700 mb-4">Kami melayani seluruh wilayah DKI Jakarta:</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Jakarta Utara:</strong> Kelapa Gading, Sunter, Tanjung Priok, Pluit, Ancol</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Jakarta Pusat:</strong> Kemayoran, Menteng, Tanah Abang, Gambir, Senen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Jakarta Barat:</strong> Cengkareng, Kebon Jeruk, Grogol, Taman Sari, Tambora</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Jakarta Selatan:</strong> Kebayoran, Cilandak, Mampang, Jagakarsa, Pasar Minggu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Jakarta Timur:</strong> Cakung, Pulogadung, Jatinegara, Kramat Jati, Matraman</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card-premium">
              <p className="text-gray-700 mb-2">
                <strong>Layanan Penjemputan:</strong> Kami menyediakan layanan penjemputan ke seluruh Jakarta untuk volume minimal 40 liter. Untuk volume di bawah itu, Anda bisa antar langsung ke kantor kami.
              </p>
              <p className="text-gray-700">
                <strong>Rencana Ekspansi:</strong> Sebagai pengepul minyak jelantah yang terus berkembang, kami berencana membuka layanan di Tangerang, Bekasi, Depok, dan Bogor dalam waktu dekat. Stay tuned!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kemitraan & Kolaborasi */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#0F3D2E] mb-12">
              Kemitraan & Kolaborasi
            </h2>
            <p className="text-center text-gray-600 mb-8">
              JelantahGo terbuka untuk berbagai bentuk kemitraan:
            </p>

            <div className="space-y-6">
              <div className="card-premium">
                <div className="flex items-center gap-3 mb-4">
                  <Factory className="w-8 h-8 text-[#0F3D2E]" />
                  <h3 className="text-xl font-bold text-[#0F3D2E]">Mitra Pabrik Biodiesel</h3>
                </div>
                <p className="text-gray-700">
                  Kami bekerja sama dengan pabrik biodiesel berlisensi yang mengolah minyak jelantah menjadi bahan bakar ramah lingkungan berkualitas tinggi.
                </p>
              </div>

              <div className="card-premium">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-8 h-8 text-[#0F3D2E]" />
                  <h3 className="text-xl font-bold text-[#0F3D2E]">Mitra Pengepul Lokal</h3>
                </div>
                <p className="text-gray-700 mb-4">Ingin menjadi pengepul minyak jelantah di daerah Anda? Kami menyediakan program kemitraan dengan:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Pelatihan operasional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Sistem harga kompetitif</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Support marketing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Bagi hasil yang menguntungkan</span>
                  </li>
                </ul>
              </div>

              <div className="card-premium">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-8 h-8 text-[#0F3D2E]" />
                  <h3 className="text-xl font-bold text-[#0F3D2E]">Mitra Korporat</h3>
                </div>
                <p className="text-gray-700">
                  Untuk perusahaan food & beverage yang ingin program CSR pengelolaan limbah minyak jelantah, kami siap berkolaborasi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hubungi Kami */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#0F3D2E] mb-4">
              Hubungi Kami
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Tertarik bermitra atau ingin menjual minyak jelantah Anda? Tim JelantahGo siap membantu!
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="card-premium">
                <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Kontak Kami:</h3>
                <div className="space-y-3">
                  <a href="https://wa.me/6285183033995" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-[#0F3D2E]">
                    <MessageCircle className="w-5 h-5" />
                    <span><strong>WhatsApp:</strong> +6285183033995 - Fast Response!</span>
                  </a>
                  <a href="mailto:info.jelantahgo@gmail.com" className="flex items-center gap-3 text-gray-700 hover:text-[#0F3D2E]">
                    <Mail className="w-5 h-5" />
                    <span><strong>Email:</strong> info.jelantahgo@gmail.com</span>
                  </a>
                  <Link href="/" className="flex items-center gap-3 text-gray-700 hover:text-[#0F3D2E]">
                    <Globe className="w-5 h-5" />
                    <span><strong>Website:</strong> www.jelantahgo.com</span>
                  </Link>
                  <div className="flex items-start gap-3 text-gray-700">
                    <MapPin className="w-5 h-5 mt-0.5" />
                    <div>
                      <strong>Alamat:</strong><br />
                      Jl. Papanggo 3C No.250, Papanggo,<br />
                      Kec. Tanjung Priok, Jakarta Utara 14340
                    </div>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Jl.+Papanggo+3C+No.250,+Jakarta+Utara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#0F3D2E] font-semibold hover:underline"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>🗺️ Google Maps: Klik di sini</span>
                  </a>
                </div>
              </div>

              <div className="card-premium">
                <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Jam Operasional:</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Senin - Sabtu:</strong> 08.00 - 17.00 WIB</p>
                  <p><strong>Minggu:</strong> Libur (kecuali kontrak khusus)</p>
                </div>

                <h3 className="text-xl font-bold text-[#0F3D2E] mb-4 mt-6">Media Sosial:</h3>
                <div className="space-y-2 text-gray-700">
                  <p>📷 <strong>Instagram:</strong> @jelantahgo</p>
                  <p>📘 <strong>Facebook:</strong> JelantahGo Official</p>
                  <p>🎵 <strong>TikTok:</strong> @jelantahgo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 hero-bg-dots">
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
            Mari Bergabung Bersama JelantahGo!
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90 leading-relaxed">
            Jadilah bagian dari gerakan daur ulang minyak jelantah di Indonesia. Bersama JelantahGo - pengepul minyak jelantah terpercaya, mari kita ubah limbah menjadi berkah, ciptakan lingkungan yang lebih bersih, dan dapatkan nilai ekonomis dari minyak goreng bekas Anda.
          </p>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white font-semibold">
            Setiap tetes minyak jelantah Anda bernilai. Mari kita kelola bersama dengan bijak!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6285183033995?text=Halo%20JelantahGo,%20saya%20ingin%20jual%20minyak%20jelantah"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#0F3D2E] px-8 py-4 rounded-card font-bold hover:bg-[#D9E3D3] transition-all shadow-soft-lg hover:shadow-soft-xl"
            >
              Hubungi Kami Sekarang
            </a>
            <Link
              href="/cara-jual-minyak-jelantah"
              className="inline-block bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-card font-bold hover:bg-white/20 transition-all"
            >
              Pelajari Cara Jual Jelantah
            </Link>
          </div>
          <div className="mt-8 text-center">
            <p className="text-white/80 mb-4">JelantahGo - Pengepul Minyak Jelantah Profesional & Terpercaya</p>
            <div className="flex flex-wrap justify-center gap-2 text-white/70 text-sm">
              <span>#PengepulMinyakJelantah</span>
              <span>#JualMinyakJelantah</span>
              <span>#DaurUlangJelantah</span>
              <span>#BiodieselIndonesia</span>
              <span>#JelantahGo</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
