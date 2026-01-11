import type { Metadata } from 'next'
import Image from 'next/image'
import { Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Testimoni Pelanggan JelantahGO | 1000+ Review Positif',
  description: '1000+ testimoni nyata pelanggan JelantahGo Jakarta. Ibu rumah tangga dapat Rp 300-400rb/bulan, warung dapat Rp 1-1.2jt/bulan. Response cepat, bayar langsung!',
  alternates: {
    canonical: 'https://jelantahgo.com/testimoni',
  },
  openGraph: {
    title: 'Testimoni Pelanggan JelantahGO | 1000+ Review Positif',
    description: '1000+ testimoni nyata pelanggan JelantahGo Jakarta. Ibu rumah tangga dapat Rp 300-400rb/bulan, warung dapat Rp 1-1.2jt/bulan. Response cepat, bayar langsung!',
    url: 'https://jelantahgo.com/testimoni',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/v1761171104/jelantah-go_10_rs4pcn.webp',
        width: 1200,
        height: 630,
        alt: 'Testimoni pelanggan JelantahGo Jakarta',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Testimoni Pelanggan JelantahGO | 1000+ Review Positif',
    description: '1000+ testimoni nyata pelanggan JelantahGo Jakarta. Ibu rumah tangga dapat Rp 300-400rb/bulan, warung dapat Rp 1-1.2jt/bulan.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/v1761171104/jelantah-go_10_rs4pcn.webp'],
  },
}

export default function TestimoniPage() {
  const testimonials = [
    {
      category: '🏠 Testimoni Ibu Rumah Tangga',
      items: [
        {
          stars: 5,
          text: '"Prosesnya sangat mudah dan cepat. Tim kurir datang tepat waktu, timbang langsung, dan bayar cash di tempat. Saya kumpulkan jelantah dari memasak sehari-hari, sebulan bisa dapat tambahan Rp 300-400 ribu..."',
          author: 'Ibu Siti Rahayu - Jakarta Barat',
          since: 'Pelanggan sejak: Maret 2022',
        },
        {
          stars: 5,
          text: '"Awalnya ragu karena lokasi saya di Serpong... tapi ternyata tetap dijemput gratis dan pelayanannya oke banget! Harga juga paling tinggi dibanding pengepul lain..."',
          author: 'Ibu Dewi Kusuma - Tangerang Selatan',
          since: 'Pelanggan sejak: Agustus 2023',
        },
      ],
    },
    {
      category: '🍜 Testimoni Pemilik Warung & Restoran',
      items: [
        {
          stars: 5,
          text: '"Sebagai pemilik warung makan, setiap hari saya hasilkan banyak minyak bekas... Sejak kenal JelantahGO, jelantah malah jadi penghasilan tambahan yang lumayan. Sebulan bisa dapat 1-1,2 juta dari jelantah saja!"',
          author: 'Pak Budi Santoso - Warung Nasi Ibu Budi, Tangerang',
          since: 'Pelanggan sejak: Juni 2022',
        },
        {
          stars: 5,
          text: '"Warung saya fokus jualan gorengan dan pecel lele... Dulu bingung mau diapain, akhirnya dibuang aja ke selokan. Sejak tahu JelantahGO, setiap minggu jelantah saya dijemput dan langsung dibayar tunai."',
          author: 'Ibu Wati - Warung Pecel Lele Bu Wati, Jakarta Timur',
          since: 'Pelanggan sejak: November 2022',
        },
      ],
    },
    {
      category: '🤝 Testimoni Mitra Pengepul JelantahGO',
      items: [
        {
          stars: 5,
          text: '"Saya bergabung jadi mitra JelantahGO sejak 8 bulan lalu dan ini adalah keputusan terbaik! Program mitranya sangat menguntungkan, support dari tim juga luar biasa... Sekarang malah udah bisa beli motor dari hasil bisnis jelantah!"',
          author: 'Doni Ramadhan - Mitra JelantahGO Bekasi',
          since: 'Mitra sejak: Februari 2023',
        },
        {
          stars: 5,
          text: '"Awalnya saya cuma pelanggan biasa... Tapi setelah lihat potensinya, saya memutuskan jadi mitra. Sebagai ibu rumah tangga, ini bisnis yang pas banget karena waktunya fleksibel."',
          author: 'Ibu Sari - Mitra JelantahGO Jakarta Barat',
          since: 'Mitra sejak: Mei 2023',
        },
      ],
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="hero-bg-dots py-20 lg:py-28">
        <div className="container-custom relative z-10 text-center">
          <div className="inline-block bg-[#D9E3D3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            TESTIMONI NYATA 🌟
          </div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
            1000+ Testimoni Sukses Jual Jelantah di Jakarta
          </h1>
          <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Dengarkan kisah nyata pelanggan JelantahGo yang berhasil mengubah minyak jelantah jadi uang tunai. <strong>Dari ibu rumah tangga yang dapat Rp 300-400rb/bulan hingga pemilik warung yang meraup Rp 1-1.2jt/bulan!</strong>
          </p>
        </div>
      </section>

      {/* Image */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <Image
            src="https://res.cloudinary.com/dknswj9co/image/upload/v1761171104/jelantah-go_10_rs4pcn.webp"
            alt="Testimoni pelanggan JelantahGO - Ibu rumah tangga, pemilik warung, restoran, dan mitra pengepul yang puas dengan layanan"
            width={1200}
            height={630}
            className="w-full max-w-4xl mx-auto rounded-card-lg shadow-layered"
            loading="lazy"
          />
        </div>
      </section>

      {/* Testimonials Content */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom max-w-6xl">
          {testimonials.map((category, catIndex) => (
            <div key={catIndex} className="card-premium mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#0F3D2E] mb-8">
                {category.category}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-white rounded-card-lg p-6 border border-gray-100 hover:shadow-soft-lg transition-smooth"
                  >
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: item.stars }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-[#0F3D2E] text-[#0F3D2E]"
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-6 italic">
                      {item.text}
                    </p>
                    <div className="border-t border-gray-100 pt-4">
                      <div className="font-bold text-[#0F3D2E] mb-1">
                        {item.author}
                      </div>
                      <div className="text-sm text-gray-500">{item.since}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

