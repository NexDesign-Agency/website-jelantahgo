import Image from 'next/image'
import Link from 'next/link'
import { TrendingUp, Users, DollarSign, Leaf, CheckCircle, MapPin, Phone } from 'lucide-react'
import Calculator from '@/components/Calculator'
import VideoSection from '@/components/VideoSection'
import ServiceArea from '@/components/ServiceArea'
import WhoCanSell from '@/components/WhoCanSell'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import BlogSection from '@/components/BlogSection'
import PopularArticlesSection from '@/components/PopularArticlesSection'

export default function Home() {
  return (
    <>
      {/* Hero Section - Dark Green Premium */}
      <section className="hero-bg-dots">
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.3) 2.5px, transparent 2.5px)',
            backgroundSize: '8px 8px'
          }}></div>
        </div>
        
        <div className="container-custom relative z-10 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block bg-[#D9E3D3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                🌱 PENGEPUL JELANTAH • JAKARTA • TANGERANG • DEPOK • BEKASI • BOGOR
              </div>
              
              <h1 className="text-hero-mobile lg:text-hero-laptop xl:text-hero-desktop font-bold leading-snug mb-4">
                Jual Minyak Jelantah Jakarta | Harga Rp 8.500/Liter + Jemput Gratis
              </h1>
              
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                JelantahGO - pengepul minyak jelantah terpercaya di Jakarta. Proses jual minyak jelantah yang mudah ditambah penjemputan gratis serta pembayaran tunai langsung di tempat. Dapatkan segera harga minyak goreng bekas tertinggi.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-card p-4 text-center border border-white/20 hover:bg-white/15 transition-smooth">
                  <div className="text-3xl font-bold text-white">1.500+</div>
                  <div className="text-sm text-white/80 font-medium">Pelanggan Setia</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-card p-4 text-center border border-white/20 hover:bg-white/15 transition-smooth">
                  <div className="text-3xl font-bold text-white">30+</div>
                  <div className="text-sm text-white/80 font-medium">Lokasi Terlayani</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-card p-4 text-center border border-white/20 hover:bg-white/15 transition-smooth">
                  <div className="text-3xl font-bold text-white">4,9/5</div>
                  <div className="text-sm text-white/80 font-medium">dari 500 Review</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/6285183033995?text=Halo%20JelantahGO,%20saya%20ingin%20jual%20minyak%20jelantah"
                  target="_blank"
                  rel="noopener"
                  className="bg-white text-[#0F3D2E] hover:bg-[#F9F8F6] px-8 py-4 rounded-card font-bold text-lg flex items-center justify-center gap-2 transition-smooth shadow-soft-lg hover:shadow-soft-xl"
                >
                  💬 KONSULTASI GRATIS
                </a>
                <Link
                  href="#kalkulator"
                  className="bg-transparent border-2 border-white/30 hover:bg-white/10 hover:border-white text-white px-8 py-4 rounded-card font-bold text-lg flex items-center justify-center gap-2 transition-smooth"
                >
                  Lihat Harga Jelantah
                </Link>
              </div>
            </div>

            {/* Right Content - Image with Premium Card Effect */}
            <div className="relative">
              <div className="relative rounded-card-lg overflow-hidden shadow-layered hover:shadow-soft-xl transition-smooth">
                <Image
                  src="https://res.cloudinary.com/dknswj9co/image/upload/v1760998331/jelantahgo_6_u3erug.webp"
                  alt="Tim JelantahGO sedang menjemput minyak jelantah"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#D9E3D3] rounded-card-lg opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Soft Beige Background */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              💰 HARGA TERBARU 2025
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Harga minyak jelantah terbaru 2025
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Sebagai pengepul minyak jelantah profesional, kami menawarkan harga terbaik berdasarkan volume:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                volume: '40-99 liter',
                price: 'Rp 7.500',
                features: ['Minimal untuk gratis jemput', 'Bayar tunai langsung', 'Melayani area JABODETABEK'],
              },
              {
                volume: '100-199 liter',
                price: 'Rp 8.000',
                features: ['Volume menengah', 'Bayar tunai langsung', 'Prioritas penjemputan', 'Gratis konsultasi'],
                featured: true,
              },
              {
                volume: '≥ 200 liter',
                price: 'Rp 8.500',
                features: ['Volume besar', 'Harga terbaik', 'Penjadwalan fleksibel', 'Layanan premium'],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-card-lg p-8 transition-smooth ${
                  plan.featured 
                    ? 'bg-white border-2 border-[#0F3D2E] shadow-soft-xl scale-105 hover:scale-110' 
                    : 'card-premium hover:scale-105'
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-[#0F3D2E] to-[#134E3A] text-white text-xs font-bold px-4 py-2 rounded-full shadow-soft-lg">
                      PALING POPULER
                    </div>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-2">{plan.volume}</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-1">
                    <span className="text-4xl font-bold text-[#0F3D2E]">{plan.price}</span>
                  </div>
                  <span className="text-gray-500 text-sm">per liter</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="text-gray-600 text-sm flex items-start gap-3">
                      <span className="text-[#0F3D2E] font-bold mt-0.5">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/6285183033995?text=Halo%20JelantahGO,%20saya%20ingin%20jual%20minyak%20jelantah"
                  target="_blank"
                  rel="noopener"
                  className={`w-full block text-center py-3 rounded-card font-semibold transition-smooth ${
                    plan.featured
                      ? 'bg-[#0F3D2E] text-white hover:bg-[#134E3A] shadow-soft hover:shadow-soft-lg'
                      : 'bg-[#F9F8F6] text-[#0F3D2E] hover:bg-[#E8F0E3] border border-gray-200'
                  }`}
                >
                  Hubungi Sekarang
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-[#0F3D2E] font-semibold hover:gap-3 transition-smooth"
            >
              Cek Berkala Harga Terbaru Kami →
            </Link>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="kalkulator" className="py-20 bg-white">
        <div className="container-custom">
          <Calculator />
        </div>
      </section>

      {/* Benefits Section - Soft Beige Background */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Cara Kerja
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              4 Langkah Mudah Jual Minyak Jelantah
            </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Kami sediakan berbagai solusi terpercaya jelantah untuk menawarkan maksimal pengumpulan. 
                Pelajari <Link href="/cara-kerja" className="text-[#0F3D2E] font-semibold hover:underline">cara kerja kami</Link> untuk detail lengkap proses penjemputan.
              </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: '1',
                title: 'KUMPULKAN MINYAK BEKAS',
                description: 'Tampung minyak goreng bekas dalam wadah tertutup. Minimal 40 liter untuk penjemputan gratis.',
              },
              {
                number: '2',
                title: 'HUBUNGI KAMI',
                description: 'Telepon/WhatsApp pengepul minyak jelantah di: 0851-8303-3995 untuk jadwalkan penjemputan.',
              },
              {
                number: '3',
                title: 'JEMPUT GRATIS',
                description: 'Tim kami datang ke lokasi dengan peralatan lengkap. Minyak jelantah ditimbang secara transparan.',
              },
              {
                number: '4',
                title: 'BAYAR TUNAI',
                description: 'Pembayaran beli minyak jelantah dilakukan tunai langsung setelah penimbangan.',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="card-premium hover-lift group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#0F3D2E] to-[#134E3A] text-white rounded-card flex items-center justify-center text-2xl font-bold mb-4 shadow-soft group-hover:shadow-soft-lg transition-smooth">
                  {benefit.number}
                </div>
                <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - White Background with Premium Cards */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              KEUNGGULAN KAMI
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              KEUNGGULAN KAMI
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '💰',
                title: 'HARGA KOMPETITIF',
                description: 'Harga minyak jelantah tertinggi dengan sistem transparan.',
              },
              {
                icon: '🚚',
                title: 'JEMPUT GRATIS',
                description: 'Penjemputan minyak bekas gratis ke lokasi Anda.',
              },
              {
                icon: '💵',
                title: 'BAYAR TUNAI',
                description: 'Pembayaran beli minyak jelantah tunai langsung.',
              },
              {
                icon: '🌿',
                title: 'RAMAH LINGKUNGAN',
                description: 'Minyak goreng bekas diolah jadi biodiesel.',
              },
              {
                icon: '📊',
                title: 'TRANSPARAN',
                description: 'Proses penimbangan terbuka, timbangan digital.',
              },
              {
                icon: '⏱️',
                title: 'CEPAT',
                description: 'Proses jual minyak jelantah hanya 30-60 menit.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="card-premium hover-lift text-center group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-smooth">{item.icon}</div>
                <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section - Internal Linking untuk PR Distribution */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              JELAJAHI LAYANAN KAMI
            </div>
            <h2 className="text-3xl font-bold text-[#0F3D2E] mb-4">
              Informasi Lengkap untuk Anda
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Temukan informasi lengkap tentang cara kerja, harga, area layanan, dan program mitra kami
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/cara-kerja"
              className="card-premium hover-lift text-center group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-smooth">⚙️</div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-2">
                Cara Kerja
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Pelajari proses penjemputan jelantah dalam 4 langkah mudah dan transparan
              </p>
            </Link>
            <Link
              href="/mitra"
              className="card-premium hover-lift text-center group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-smooth">🤝</div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-2">
                Jadi Mitra
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Raih Rp 1-5 juta/bulan dengan menjadi mitra pengepul jelantah
              </p>
            </Link>
            <Link
              href="/area-layanan"
              className="card-premium hover-lift text-center group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-smooth">📍</div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-2">
                Area Layanan
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Cek area layanan penjemputan gratis di seluruh wilayah Jabodetabek
              </p>
            </Link>
            <Link
              href="/contact"
              className="card-premium hover-lift text-center group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-smooth">📞</div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-2">
                Hubungi Kami
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                WhatsApp, telepon, atau email untuk konsultasi gratis dan informasi lebih lanjut
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <VideoSection />

      {/* Service Area Section */}
      <ServiceArea />

      {/* Who Can Sell Section */}
      <WhoCanSell />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* Blog Section */}
      <BlogSection />

      {/* Popular Articles Section */}
      <PopularArticlesSection />

      {/* CTA Section - Premium Dark Green */}
      <section className="hero-bg-dots py-20">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-card-lg p-12 border border-white/10 shadow-layered">
              <div className="text-center">
                <h2 className="text-2xl lg:text-3xl font-bold mb-6">
                  HUBUNGI PENGEPUL MINYAK JELANTAH
                </h2>
                <p className="text-lg mb-6 opacity-90 leading-relaxed">
                  Siap jual minyak bekas? Hubungi pengepul minyak jelantah terpercaya:
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">📱</span>
                    <div>
                      <div className="font-semibold text-white mb-1">WhatsApp:</div>
                      <a href="https://wa.me/6285183033995" target="_blank" rel="noopener" className="text-white/90 hover:text-white hover:underline">
                        0851-8303-3995
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">📞</span>
                    <div>
                      <div className="font-semibold text-white mb-1">Telepon:</div>
                      <a href="tel:+622112345678" className="text-white/90 hover:text-white hover:underline">
                        (021) 1234 5678
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">🕒</span>
                    <div>
                      <div className="font-semibold text-white mb-1">Buka:</div>
                      <div className="text-white/90">Senin-Minggu, 08:00-20:00 WIB</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">📧</span>
                    <div>
                      <div className="font-semibold text-white mb-1">Email:</div>
                      <a href="mailto:info@jelantahgo.com" className="text-white/90 hover:text-white hover:underline">
                        info@jelantahgo.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:col-span-2 lg:col-span-1">
                    <span className="text-2xl flex-shrink-0">📍</span>
                    <div>
                      <div className="font-semibold text-white mb-1">Alamat:</div>
                      <div className="text-white/90">Jl. Papanggo I No. 250, Jakarta Utara</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/6285183033995?text=Halo%20JelantahGO,%20saya%20ingin%20jadwalkan%20penjemputan%20minyak%20jelantah"
                    target="_blank"
                    rel="noopener"
                    className="bg-white text-[#0F3D2E] hover:bg-[#F9F8F6] px-8 py-4 rounded-card font-bold text-lg inline-flex items-center justify-center gap-2 transition-smooth shadow-soft-lg hover:shadow-soft-xl"
                  >
                    🚚 JADWALKAN PENJEMPUTAN SEKARANG
                  </a>
                  <a
                    href="https://wa.me/6285183033995?text=Halo%20JelantahGO,%20saya%20ingin%20konsultasi%20gratis"
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
