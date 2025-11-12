import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

// Import komponen yang sudah ada
import Calculator from '@/components/Calculator'
import VideoPlayer from '@/components/VideoPlayer'
import ServiceArea from '@/components/ServiceArea'
import WhoCanSell from '@/components/WhoCanSell'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import BlogSection from '@/components/BlogSection'

export const metadata: Metadata = {
  title: 'Jual Minyak Jelantah di Jakarta Harga Tinggi - Pengepul Terpercaya #1',
  description: 'Jual minyak jelantah di Jakarta dengan harga tinggi. Jemput gratis, bayar tunai instan. Pengepul #1 untuk restoran, katering, UMKM. Hubungi sekarang!',
  keywords: 'jual minyak jelantah jakarta, pengepul minyak jelantah jakarta, harga minyak jelantah, jual jelantah, minyak goreng bekas, pengepul jelantah terdekat, jual minyak jelantah, harga jelantah, pengepul terpercaya',
  alternates: {
    canonical: 'https://jelantahgo.com',
  },
  openGraph: {
    title: 'Jual Minyak Jelantah di Jakarta Harga Tinggi - Pengepul Terpercaya #1',
    description: 'Jual minyak jelantah di Jakarta dengan harga tinggi. Jemput gratis, bayar tunai instan. Pengepul #1 untuk restoran, katering, UMKM. Hubungi sekarang!',
    url: 'https://jelantahgo.com',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/v1760998331/jelantahgo_6_u3erug.webp',
        width: 1200,
        height: 630,
        alt: 'Jual Minyak Jelantah Jakarta - Pengepul Terpercaya',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jual Minyak Jelantah di Jakarta Harga Tinggi - Pengepul Terpercaya #1',
    description: 'Jual minyak jelantah di Jakarta dengan harga tinggi. Jemput gratis, bayar tunai instan. Pengepul #1 untuk restoran, katering, UMKM. Hubungi sekarang!',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/v1760998331/jelantahgo_6_u3erug.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'JelantahGO' }],
}

export default function HomeNew() {
  return (
    <>
      {/* Schema Markup - LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://jelantahgo.com/#localbusiness",
            "name": "JelantahGO",
            "image": "https://res.cloudinary.com/dknswj9co/image/upload/v1760998331/jelantahgo_6_u3erug.webp",
            "logo": "https://res.cloudinary.com/dknswj9co/image/upload/v1761172234/favicon_jelantahgo_kjxjs4.webp",
            "url": "https://jelantahgo.com",
            "telephone": "+6281220821983",
            "email": "info.jelantahgo@gmail.com",
            "priceRange": "Rp 7.500 - Rp 8.500 per liter",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Jl. Papanggo 3C No.250, Papanggo, Kec. Tj. Priok",
              "addressLocality": "Jakarta Utara",
              "addressRegion": "Daerah Khusus Ibukota Jakarta",
              "postalCode": "14340",
              "addressCountry": "ID"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -6.1176,
              "longitude": 106.8722
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "08:00",
              "closes": "20:00"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Jakarta"
              },
              {
                "@type": "City",
                "name": "Tangerang"
              },
              {
                "@type": "City",
                "name": "Bekasi"
              },
              {
                "@type": "City",
                "name": "Depok"
              },
              {
                "@type": "City",
                "name": "Bogor"
              }
            ],
            "description": "Pengepul minyak jelantah terpercaya di Jakarta. Jemput gratis, bayar cash instan, harga terbaik Rp 7.500-8.500/liter."
          })
        }}
      />

      {/* Schema Markup - Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Pengepul Minyak Jelantah",
            "provider": {
              "@type": "LocalBusiness",
              "@id": "https://jelantahgo.com/#localbusiness",
              "name": "JelantahGO"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Jakarta"
              },
              {
                "@type": "City",
                "name": "Tangerang"
              },
              {
                "@type": "City",
                "name": "Bekasi"
              },
              {
                "@type": "City",
                "name": "Depok"
              },
              {
                "@type": "City",
                "name": "Bogor"
              }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Layanan Pembelian Minyak Jelantah",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Jual Minyak Jelantah Premium (≥200 Liter)"
                  },
                  "price": "8500",
                  "priceCurrency": "IDR",
                  "description": "Harga tertinggi untuk volume besar, minimal 200 liter"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Jual Minyak Jelantah Standar (100-199 Liter)"
                  },
                  "price": "8000",
                  "priceCurrency": "IDR",
                  "description": "Harga untuk volume menengah, 100-199 liter"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Jual Minyak Jelantah Rumah Tangga (40-99 Liter)"
                  },
                  "price": "7500",
                  "priceCurrency": "IDR",
                  "description": "Harga untuk volume kecil, minimal 40 liter"
                }
              ]
            }
          })
        }}
      />

      {/* Schema Markup - BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Beranda",
                "item": "https://jelantahgo.com"
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="hero-bg-dots">
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
                💰 PENGEPUL MINYAK JELANTAH TERPERCAYA • JAKARTA & SEKITARNYA
              </div>
              
              <h1 className="text-hero-mobile lg:text-hero-laptop xl:text-hero-desktop font-bold leading-snug mb-4">
                Jual Minyak Jelantah di Jakarta Harga Tinggi - Pengepul Terpercaya
              </h1>
              
              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                <strong>Pengepul minyak jelantah</strong> terpercaya dengan <strong>harga minyak jelantah</strong> terbaik hingga <strong>Rp 8.500 per liter</strong>. Layanan <strong>jual minyak jelantah</strong> termudah di Jakarta dengan penjemputan <strong>100% GRATIS</strong> dan pembayaran <strong>tunai langsung</strong> di tempat.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-card p-4 text-center border border-white/20 hover:bg-white/15 transition-smooth">
                  <div className="text-3xl font-bold text-white">1.500+</div>
                  <div className="text-sm text-white/80 font-medium">Pelanggan</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-card p-4 text-center border border-white/20 hover:bg-white/15 transition-smooth">
                  <div className="text-3xl font-bold text-white">30+</div>
                  <div className="text-sm text-white/80 font-medium">Area Jakarta</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-card p-4 text-center border border-white/20 hover:bg-white/15 transition-smooth">
                  <div className="text-3xl font-bold text-white">4.9★</div>
                  <div className="text-sm text-white/80 font-medium">Rating</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/6281220821983?text=Halo%20JelantahGO,%20saya%20ingin%20jual%20minyak%20jelantah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#0F3D2E] hover:bg-[#F9F8F6] px-8 py-4 rounded-card font-bold text-lg flex items-center justify-center gap-2 transition-smooth shadow-soft-lg hover:shadow-soft-xl"
                >
                  📱 JUAL SEKARANG
                </a>
                <a
                  href="tel:+6281220821983"
                  className="bg-transparent border-2 border-white/30 hover:bg-white/10 hover:border-white text-white px-8 py-4 rounded-card font-bold text-lg flex items-center justify-center gap-2 transition-smooth"
                >
                  📞 TELEPON
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-card-lg overflow-hidden shadow-layered hover:shadow-soft-xl transition-smooth">
                <Image
                  src="https://res.cloudinary.com/dknswj9co/image/upload/v1760998331/jelantahgo_6_u3erug.webp"
                  alt="Pengepul minyak jelantah sedang menjemput gratis dan bayar tunai"
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

      {/* Harga Section */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              💵 HARGA TERBARU 2025
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Harga Minyak Jelantah Hari Ini di Jakarta
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dapatkan <strong>harga minyak jelantah terbaik</strong> dari <strong>pengepul terpercaya</strong>. Harga kompetitif berdasarkan volume dan kualitas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Paket Standar */}
            <div className="card-premium hover-lift">
              <div className="text-center mb-6">
                <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-3 py-1 rounded-full text-xs font-bold mb-3">
                  RUMAH TANGGA
                </div>
                <h3 className="text-xl font-bold text-[#0F3D2E] mb-2">40-99 Liter</h3>
                <div className="flex items-baseline justify-center gap-1 mb-1">
                  <span className="text-4xl font-bold text-[#0F3D2E]">Rp 7.500</span>
                </div>
                <span className="text-gray-500 text-sm">per liter</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-600 text-sm flex items-start gap-3">
                  <CheckCircle className="text-[#0F3D2E] flex-shrink-0 w-5 h-5" />
                  <span>Jemput gratis area Jakarta</span>
                </li>
                <li className="text-gray-600 text-sm flex items-start gap-3">
                  <CheckCircle className="text-[#0F3D2E] flex-shrink-0 w-5 h-5" />
                  <span>Bayar cash langsung</span>
                </li>
                <li className="text-gray-600 text-sm flex items-start gap-3">
                  <CheckCircle className="text-[#0F3D2E] flex-shrink-0 w-5 h-5" />
                  <span>Minimal 40 liter</span>
                </li>
              </ul>
              <a
                href="https://wa.me/6281220821983?text=Halo,%20saya%20mau%20jual%2040-99%20liter"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center py-3 rounded-card font-semibold transition-smooth bg-[#F9F8F6] text-[#0F3D2E] hover:bg-[#E8F0E3] border border-gray-200"
              >
                Hubungi Sekarang
              </a>
            </div>

            {/* Paket Populer */}
            <div className="relative card-premium hover-lift scale-105 border-2 border-[#0F3D2E]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="bg-gradient-to-r from-[#0F3D2E] to-[#134E3A] text-white text-xs font-bold px-4 py-2 rounded-full shadow-soft-lg">
                  ⭐ POPULER
                </div>
              </div>
              <div className="text-center mb-6 mt-4">
                <div className="inline-block bg-[#0F3D2E] text-white px-3 py-1 rounded-full text-xs font-bold mb-3">
                  UMKM & WARUNG
                </div>
                <h3 className="text-xl font-bold text-[#0F3D2E] mb-2">100-199 Liter</h3>
                <div className="flex items-baseline justify-center gap-1 mb-1">
                  <span className="text-4xl font-bold text-[#0F3D2E]">Rp 8.000</span>
                </div>
                <span className="text-gray-500 text-sm">per liter</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-600 text-sm flex items-start gap-3">
                  <CheckCircle className="text-[#0F3D2E] flex-shrink-0 w-5 h-5" />
                  <span>Harga lebih tinggi</span>
                </li>
                <li className="text-gray-600 text-sm flex items-start gap-3">
                  <CheckCircle className="text-[#0F3D2E] flex-shrink-0 w-5 h-5" />
                  <span>Prioritas penjemputan</span>
                </li>
                <li className="text-gray-600 text-sm flex items-start gap-3">
                  <CheckCircle className="text-[#0F3D2E] flex-shrink-0 w-5 h-5" />
                  <span>Konsultasi gratis</span>
                </li>
              </ul>
              <a
                href="https://wa.me/6281220821983?text=Halo,%20saya%20mau%20jual%20100-199%20liter"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center py-3 rounded-card font-semibold transition-smooth bg-[#0F3D2E] text-white hover:bg-[#134E3A] shadow-soft hover:shadow-soft-lg"
              >
                Hubungi Sekarang
              </a>
            </div>

            {/* Paket Premium */}
            <div className="card-premium hover-lift">
              <div className="text-center mb-6">
                <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-3 py-1 rounded-full text-xs font-bold mb-3">
                  RESTORAN
                </div>
                <h3 className="text-xl font-bold text-[#0F3D2E] mb-2">≥ 200 Liter</h3>
                <div className="flex items-baseline justify-center gap-1 mb-1">
                  <span className="text-4xl font-bold text-[#0F3D2E]">Rp 8.500</span>
                </div>
                <span className="text-gray-500 text-sm">per liter</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-600 text-sm flex items-start gap-3">
                  <CheckCircle className="text-[#0F3D2E] flex-shrink-0 w-5 h-5" />
                  <span>Harga tertinggi</span>
                </li>
                <li className="text-gray-600 text-sm flex items-start gap-3">
                  <CheckCircle className="text-[#0F3D2E] flex-shrink-0 w-5 h-5" />
                  <span>Kontrak rutin</span>
                </li>
                <li className="text-gray-600 text-sm flex items-start gap-3">
                  <CheckCircle className="text-[#0F3D2E] flex-shrink-0 w-5 h-5" />
                  <span>Invoice resmi</span>
                </li>
              </ul>
              <a
                href="https://wa.me/6281220821983?text=Halo,%20saya%20mau%20jual%20200+%20liter"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center py-3 rounded-card font-semibold transition-smooth bg-[#F9F8F6] text-[#0F3D2E] hover:bg-[#E8F0E3] border border-gray-200"
              >
                Hubungi Sekarang
              </a>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/pricing" className="inline-flex items-center gap-2 text-[#0F3D2E] font-semibold hover:gap-3 transition-smooth">
              Lihat Detail Harga →
            </Link>
          </div>
        </div>
      </section>

      {/* Calculator & Video */}
      <section id="kalkulator" className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Calculator - Kiri */}
            <div>
              <Calculator />
            </div>
            
            {/* Video - Kanan */}
            <div>
              <VideoPlayer />
            </div>
          </div>
        </div>
      </section>

      {/* Cara Kerja */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              📋 PROSES MUDAH
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Cara Jual Minyak Jelantah (4 Langkah)
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Proses <strong>jual minyak jelantah</strong> sangat mudah dan cepat
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: '1', title: 'Kumpulkan', desc: 'Tampung minyak bekas minimal 40 liter', icon: '🛢️' },
              { number: '2', title: 'Hubungi', desc: 'WA/Telp 0812-2082-1983', icon: '📱' },
              { number: '3', title: 'Jemput Gratis', desc: 'Tim datang dan timbang transparan', icon: '🚚' },
              { number: '4', title: 'Bayar Tunai', desc: 'Terima uang cash langsung', icon: '💵' },
            ].map((step, i) => (
              <div key={i} className="card-premium hover-lift group">
                <div className="text-4xl mb-3">{step.icon}</div>
                <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 space-y-3">
            <Link 
              href="/blog/cara-jual-minyak-jelantah-3-langkah" 
              className="inline-flex items-center gap-2 text-[#0F3D2E] font-semibold hover:gap-3 transition-smooth mr-6"
            >
              Panduan 3 Langkah Mudah →
            </Link>
            <Link 
              href="/cara-kerja" 
              className="inline-flex items-center gap-2 text-[#0F3D2E] font-semibold hover:gap-3 transition-smooth"
            >
              lihat cara kami bekerja →
            </Link>
          </div>
        </div>
      </section>

      {/* Keunggulan */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              🏆 Keunggulan Kami Sebagai Pengepul Minyak Jelantah
            </h2>
            <Link 
              href="/about" 
              className="inline-flex items-center gap-2 text-[#0F3D2E] font-semibold hover:gap-3 transition-smooth"
            >
              Mengenal JelantahGO lebih dekat →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '💰', title: 'Harga Tertinggi', desc: 'Hingga Rp 8.500/liter' },
              { icon: '🚚', title: 'Jemput Gratis', desc: 'Ke lokasi Anda' },
              { icon: '💵', title: 'Bayar Tunai', desc: 'Langsung di tempat' },
              { icon: '⚡', title: 'Respon Cepat', desc: 'Dalam hitungan menit' },
              { icon: '📊', title: 'Transparan', desc: 'Timbangan digital' },
              { icon: '🌍', title: 'Ramah Lingkungan', desc: 'Diolah jadi biodiesel' },
            ].map((item, i) => (
              <div key={i} className="card-premium hover-lift text-center group">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-smooth">{item.icon}</div>
                <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <ServiceArea />

      {/* Who Can Sell */}
      <WhoCanSell />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* Blog */}
      <BlogSection />

      {/* CTA Final */}
      <section className="hero-bg-dots py-20">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-card-lg p-12 border border-white/10 shadow-layered">
              <div className="text-center">
                <h2 className="text-2xl lg:text-3xl font-bold mb-6">
                  Hubungi Pengepul Terpercaya
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-3xl">📱</span>
                    <div className="font-semibold">WhatsApp</div>
                    <a href="https://wa.me/6281220821983" target="_blank" rel="noopener" className="text-white/90 hover:text-white hover:underline">
                      0812-2082-1983
                    </a>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-3xl">📞</span>
                    <div className="font-semibold">Telepon</div>
                    <a href="tel:+622112345678" className="text-white/90 hover:text-white hover:underline">
                      (021) 1234 5678
                    </a>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-3xl">🕒</span>
                    <div className="font-semibold">Jam Buka</div>
                    <div className="text-white/90">Sen-Min, 08:00-20:00</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/6281220821983?text=Halo%20JelantahGO,%20saya%20ingin%20jadwalkan%20penjemputan"
                    target="_blank"
                    rel="noopener"
                    className="bg-white text-[#0F3D2E] hover:bg-[#F9F8F6] px-8 py-4 rounded-card font-bold text-lg inline-flex items-center justify-center gap-2 transition-smooth shadow-soft-lg hover:shadow-soft-xl"
                  >
                    🚚 JADWALKAN PENJEMPUTAN
                  </a>
                  <a
                    href="https://wa.me/6281220821983?text=Halo,%20saya%20ingin%20konsultasi"
                    target="_blank"
                    rel="noopener"
                    className="bg-transparent border-2 border-white/30 hover:bg-white/10 hover:border-white text-white px-8 py-4 rounded-card font-bold text-lg inline-flex items-center justify-center gap-2 transition-smooth"
                  >
                    💬 KONSULTASI GRATIS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
