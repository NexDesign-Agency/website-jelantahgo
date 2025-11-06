import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'
import ContactPageSchema from '@/components/ContactPageSchema'

export const metadata: Metadata = {
  title: 'Hubungi Kami - JelantahGO | WhatsApp, Telepon & Email',
  description: 'Hubungi JelantahGO untuk menjual minyak jelantah. WhatsApp: 0812-2082-1983, Email: info.jelantahgo@gmail.com. Jam operasional: Senin-Sabtu 11.00-23.00 WIB. Layanan penjemputan gratis, bayar tunai langsung. Konsultasi gratis, harga terbaik, dan proses transparan.',
  keywords: 'kontak jelantahgo, hubungi jelantahgo, whatsapp jelantahgo, telepon jelantahgo, email jelantahgo',
  alternates: {
    canonical: 'https://jelantahgo.com/contact',
  },
  openGraph: {
    title: 'Hubungi Kami - JelantahGO | WhatsApp, Telepon & Email',
    description: 'Hubungi JelantahGO untuk menjual minyak jelantah. WhatsApp: 0812-2082-1983, Email: info.jelantahgo@gmail.com. Jam operasional: Senin-Sabtu 11.00-23.00 WIB. Layanan penjemputan gratis, bayar tunai langsung. Konsultasi gratis, harga terbaik, dan proses transparan.',
    url: 'https://jelantahgo.com/contact',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/v1761171103/jelantah-go_4_ocrkto.webp',
        width: 1200,
        height: 630,
        alt: 'Hubungi JelantahGO - Customer Service Ramah dan Siap Membantu',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hubungi Kami - JelantahGO | WhatsApp, Telepon & Email',
    description: 'Hubungi JelantahGO untuk menjual minyak jelantah. WhatsApp: 0812-2082-1983, Email: info.jelantahgo@gmail.com. Layanan penjemputan gratis, bayar tunai langsung.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/v1761171103/jelantah-go_4_ocrkto.webp'],
  },
}

export default function ContactPage() {
  return (
    <>
      <ContactPageSchema
        address={{
          streetAddress: 'Jl. Papanggo 3C No.250, Papanggo',
          addressLocality: 'Jakarta Utara',
          addressRegion: 'Daerah Khusus Ibukota Jakarta',
          postalCode: '14340',
          addressCountry: 'ID',
        }}
      />
      {/* Hero Section */}
      <section className="hero-bg-dots py-20 lg:py-28">
        <div className="container-custom relative z-10 text-center">
          <div className="inline-block bg-[#D9E3D3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            HUBUNGI KAMI
          </div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
            Hubungi JelantahGO | WhatsApp, Telepon & Email
          </h1>
          <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Punya pertanyaan atau siap jual jelantah? Tim kami siap membantu Anda. Pelajari{' '}
            <Link href="/cara-kerja" className="text-white underline hover:text-[#D9E3D3] font-semibold">
              cara kerja
            </Link>{' '}
            atau{' '}
            <Link href="/pricing" className="text-white underline hover:text-[#D9E3D3] font-semibold">
              lihat harga
            </Link>{' '}
            terbaru kami.
          </p>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <Image
            src="https://res.cloudinary.com/dknswj9co/image/upload/v1761171103/jelantah-go_4_ocrkto.webp"
            alt="Customer service JelantahGO yang ramah dan siap membantu pelanggan melalui telepon"
            width={1200}
            height={630}
            className="max-w-full h-auto rounded-card-lg shadow-layered mx-auto"
            loading="lazy"
          />
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Kontak Utama */}
            <div className="card-premium border-t-4 border-t-[#0F3D2E]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[#0F3D2E] rounded-full flex items-center justify-center">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-[#0F3D2E]">Kontak Utama</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Cara tercepat untuk terhubung dengan kami. Tim kami siap merespon Anda pada jam operasional.
              </p>
              <ul className="space-y-4 text-gray-700">
                <li>
                  <strong>WhatsApp (Recommended):</strong>{' '}
                  <a
                    href="https://wa.me/6281220821983?text=Halo%20JelantahGO"
                    target="_blank"
                    rel="noopener"
                    className="text-[#0F3D2E] hover:underline font-semibold"
                  >
                    0812-2082-1983
                  </a>
                </li>
                <li>
                  <strong>Telepon:</strong>{' '}
                  <a
                    href="tel:+6281220821983"
                    className="text-[#0F3D2E] hover:underline font-semibold"
                  >
                    0812-2082-1983
                  </a>
                </li>
                <li>
                  <strong>Email:</strong>{' '}
                  <a
                    href="mailto:info.jelantahgo@gmail.com"
                    className="text-[#0F3D2E] hover:underline font-semibold"
                  >
                    info.jelantahgo@gmail.com
                  </a>
                </li>
                <li>
                  <strong>Jam Operasional:</strong> Senin - Sabtu, 11.00 - 23.00 WIB
                </li>
              </ul>
            </div>

            {/* Kantor & Drop Point */}
            <div className="card-premium border-t-4 border-t-[#0F3D2E]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[#0F3D2E] rounded-full flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-[#0F3D2E]">Kantor & Drop Point</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Anda juga bisa mengunjungi kantor kami atau mengantarkan jelantah langsung ke lokasi (drop point).
              </p>
              <address className="text-gray-700 mb-4 not-italic">
                <strong className="text-[#0F3D2E]">JelantahGO</strong>
                <br />
                Jl. Papanggo 3C No.250, Papanggo
                <br />
                Kec. Tj. Priok, Jkt Utara, Daerah Khusus Ibukota Jakarta 14340
              </address>
              <p className="text-gray-700 mb-4">
                <strong>Jam Operasional Kantor:</strong> Senin - Sabtu, 08.00 - 20.00 WIB
              </p>
              <a
                href="https://maps.app.goo.gl/Y8BVwkYmfmW1UmjSA"
                target="_blank"
                rel="noopener"
                className="text-[#0F3D2E] font-semibold hover:underline inline-flex items-center gap-2"
              >
                Lihat di Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-0">
        <div className="w-full h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.262782090783!2d106.8700123147694!3d-6.1176049954902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1e3a27a895a9%3A0x3b4b0e0e4e3e3e3e!2sJl.%20Papanggo%20I%20No.250%2C%20Papanggo%2C%20Kec.%20Tj.%20Priok%2C%20Kota%20Jkt%20Utara%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2014340!5e0!3m2!1sen!2sid!4v1633123456789!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
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
              href="/pricing"
              className="card-premium hover-lift text-center group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-smooth">💰</div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-2">Harga Terbaru</h3>
              <p className="text-sm text-gray-600">Cek harga minyak jelantah terbaru 2025</p>
            </Link>
            <Link
              href="/cara-kerja"
              className="card-premium hover-lift text-center group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-smooth">⚙️</div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-2">Cara Kerja</h3>
              <p className="text-sm text-gray-600">Pelajari proses penjemputan dalam 4 langkah mudah</p>
            </Link>
            <Link
              href="/area-layanan"
              className="card-premium hover-lift text-center group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-smooth">📍</div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-2">Area Layanan</h3>
              <p className="text-sm text-gray-600">Cek area layanan penjemputan gratis di Jabodetabek</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

