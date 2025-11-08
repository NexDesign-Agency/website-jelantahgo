import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Users, TrendingUp, Award, Target, Heart, Shield, DollarSign, Zap,
  Clock, MapPin, Phone, Mail, Globe, CheckCircle, Building, Leaf,
  Truck, Scale, Wallet, ArrowRight, Calendar, Users2, TrendingDown,
  Factory, Handshake, GraduationCap, MessageCircle, Star
} from 'lucide-react'
import OrganizationSchema from '@/components/OrganizationSchema'

export const metadata: Metadata = {
  title: 'Tentang JelantahGO - Pengepul Minyak Jelantah Profesional Jakarta Sejak 2020',
  description: 'JelantahGo adalah pengepul minyak jelantah profesional yang beroperasi di Jakarta sejak 2020. Kami mengubah limbah minyak goreng bekas menjadi solusi ramah lingkungan. 30+ mitra aktif, puluhan ribu liter terkumpul, berkontribusi pada ekonomi sirkular dan kelestarian lingkungan Jakarta.',
  keywords: 'tentang jelantahgo, pengepul jelantah jakarta, sejarah jelantahgo, visi misi jelantahgo, perjalanan jelantahgo, pengepul minyak jelantah profesional, biodiesel jakarta',
  alternates: {
    canonical: 'https://jelantahgo.com/about',
  },
  openGraph: {
    title: 'Tentang JelantahGO - Pengepul Minyak Jelantah Profesional Jakarta Sejak 2020',
    description: 'JelantahGo adalah pengepul minyak jelantah profesional yang beroperasi di Jakarta sejak 2020. 30+ mitra aktif, puluhan ribu liter terkumpul, berkontribusi pada ekonomi sirkular.',
    url: 'https://jelantahgo.com/about',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/v1760998331/jelantahgo_6_u3erug.webp',
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
    title: 'Tentang JelantahGO - Pengepul Minyak Jelantah Profesional Jakarta Sejak 2020',
    description: 'JelantahGo adalah pengepul minyak jelantah profesional yang beroperasi di Jakarta sejak 2020. 30+ mitra aktif, puluhan ribu liter terkumpul.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/v1760998331/jelantahgo_6_u3erug.webp'],
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
          'https://wa.me/6281220821983',
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
            Tentang JelantahGO - Pengepul Minyak Jelantah Jakarta Terpercaya
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Pengepul Minyak Jelantah Terpercaya Sejak 2020
          </p>
        </div>
      </section>

      {/* Image */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <Image
            src="https://res.cloudinary.com/dknswj9co/image/upload/v1760998331/jelantahgo_6_u3erug.webp"
            alt="Tentang JelantahGO - Pengepul Minyak Jelantah Jakarta Terpercaya"
            width={1200}
            height={630}
            className="w-full max-w-4xl mx-auto rounded-card-lg shadow-layered"
            loading="lazy"
          />
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <TrendingUp />, number: '5 Tahun+', label: 'Pengalaman' },
              { icon: <Users />, number: '800+', label: 'Pelanggan Aktif' },
              { icon: <Award />, number: '150K+', label: 'Liter Terkumpul' },
              { icon: <Target />, number: 'Rp 1.2M+', label: 'Dibayarkan' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-[#0F3D2E] to-[#134E3A] w-16 h-16 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-[#0F3D2E] mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Visi dan Misi JelantahGO
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="bg-gradient-to-br from-[#0F3D2E] to-[#134E3A] w-16 h-16 rounded-lg flex items-center justify-center text-white text-3xl mb-6">
                🎯
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visi Kami</h3>
              <p className="text-gray-600 leading-relaxed">
                Menjadi <strong>pengepul minyak jelantah terbesar dan terpercaya</strong> di Indonesia, 
                sekaligus memberikan kontribusi nyata dalam pelestarian lingkungan melalui pengelolaan 
                limbah minyak goreng bekas yang bertanggung jawab.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="bg-gradient-to-br from-[#0F3D2E] to-[#134E3A] w-16 h-16 rounded-lg flex items-center justify-center text-white text-3xl mb-6">
                🚀
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Misi Kami</h3>
              <ul className="text-gray-600 space-y-3">
                <li>✓ Memberikan harga pembelian tertinggi di pasaran</li>
                <li>✓ Layanan penjemputan gratis yang profesional</li>
                <li>✓ Pembayaran tunai langsung di tempat</li>
                <li>✓ Mengolah jelantah jadi biodiesel ramah lingkungan</li>
                <li>✓ Memberdayakan masyarakat melalui program mitra</li>
                <li>✓ Mengurangi pencemaran lingkungan</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cerita */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Mengapa JelantahGO Didirikan?
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                Indonesia menghasilkan <strong>jutaan liter</strong> minyak goreng bekas setiap harinya. 
                Sayangnya, sebagian besar masyarakat masih membuang jelantah sembarangan ke saluran air atau tanah. 
                Padahal, <strong>1 liter jelantah dapat mencemari hingga 1 juta liter air bersih!</strong> Pelajari 
                <Link href="/blog/ancaman-dan-peluang-minyak-jelantah" className="text-[#0F3D2E] font-semibold hover:underline"> bahaya membuang jelantah sembarangan</Link> dan 
                <Link href="/cara-kerja" className="text-[#0F3D2E] font-semibold hover:underline"> cara kerja kami</Link> untuk solusinya.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 my-12">
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-bold text-gray-900 mb-2">🌊 Masalah Lingkungan</h4>
                  <p className="text-gray-600 text-sm">
                    Minyak jelantah yang dibuang sembarangan mencemari sumber air, merusak ekosistem, 
                    dan menyumbat saluran pembuangan.
                  </p>
                </div>
                
                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                  <h4 className="font-bold text-gray-900 mb-2">💰 Nilai Ekonomi Terbuang</h4>
                  <p className="text-gray-600 text-sm">
                    Minyak jelantah sebenarnya punya nilai ekonomi tinggi. Bisa diolah jadi biodiesel, 
                    sabun, lilin, dan produk bermanfaat lainnya.
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-gray-900 mb-2">🎯 Solusi JelantahGO</h4>
                  <p className="text-gray-600 text-sm">
                    Kami hadir sebagai jembatan antara masyarakat dan industri pengolahan jelantah. 
                    Memberikan harga tertinggi, proses mudah, dan dampak positif untuk lingkungan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perjalanan */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Perjalanan JelantahGO
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                year: '2020',
                title: 'Awal Mula',
                description: 'Dimulai sebagai startup kecil dengan 1 tim kurir di Jakarta Utara. Dalam 3 bulan pertama berhasil kumpulkan 5.000 liter dari 50 pelanggan.',
              },
              {
                year: '2021',
                title: 'Ekspansi Layanan',
                description: 'Memperluas area ke seluruh Jakarta. Tim bertambah jadi 5 orang. Mulai melayani warung, restoran, dan hotel.',
              },
              {
                year: '2022',
                title: 'Program Mitra',
                description: 'Meluncurkan program mitra pengepul. Puluhan mitra bergabung. Berhasil kumpulkan 50.000+ liter dalam setahun.',
              },
              {
                year: '2023',
                title: 'Digitalisasi',
                description: 'Launching website dan sistem online. Tracking penjemputan real-time. Layanan semakin profesional dan mudah.',
              },
              {
                year: '2024-2025',
                title: 'Semakin Terpercaya',
                description: '800+ pelanggan aktif, 150K+ liter terkumpul, Rp 1,2M+ dibayarkan, 30+ mitra tersebar di berbagai wilayah.',
              },
            ].map((milestone, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-[#0F3D2E] to-[#134E3A] text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {milestone.year}
                </div>
                <div className="flex-grow bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 hero-bg-dots">
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Mari Bersama Selamatkan Lingkungan!
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Setiap liter minyak jelantah yang Anda jual adalah kontribusi nyata untuk bumi yang lebih bersih dan hijau!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6281220821983?text=Halo%20JelantahGO,%20saya%20ingin%20jual%20minyak%20jelantah"
              target="_blank"
              rel="noopener"
              className="inline-block bg-[#0F3D2E] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#134E3A] transition-all shadow-soft-lg hover:shadow-soft-xl"
            >
              Hubungi Kami Sekarang
            </a>
            <Link
              href="/pricing"
              className="inline-block bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all"
            >
              Lihat Harga Jelantah
            </Link>
          </div>
          <div className="mt-8 text-center">
            <p className="text-white/80 mb-4">Jelajahi lebih lanjut:</p>
            <div className="flex flex-wrap justify-center gap-4 text-white/90">
              <Link href="/cara-kerja" className="hover:text-white underline text-sm font-semibold">
                Cara Kerja →
              </Link>
              <Link href="/mitra" className="hover:text-white underline text-sm font-semibold">
                Program Mitra →
              </Link>
              <Link href="/area-layanan" className="hover:text-white underline text-sm font-semibold">
                Area Layanan →
              </Link>
              <Link href="/testimoni" className="hover:text-white underline text-sm font-semibold">
                Testimoni →
              </Link>
              <Link href="/blog" className="hover:text-white underline text-sm font-semibold">
                Panduan Blog →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
