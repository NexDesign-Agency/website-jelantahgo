'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    layanan: false,
    informasi: false,
    area: false,
  })

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  return (
    <footer className="bg-[#0F3D2E] text-white/80">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Company Info */}
          <div className="company-info lg:col-span-5">
            <h3 className="text-white text-2xl font-bold mb-4">JelantahGO</h3>
            
            {/* SEO-Friendly Content */}
            <div className="seo-footer-content mb-6">
              <p className="text-sm text-white/70 leading-relaxed">
                JelantahGO melayani penjualan minyak jelantah bekas untuk restoran, hotel, katering di Jakarta Utara, Jakarta Selatan, Jakarta Barat, Jakarta Timur, dan Jakarta Pusat. Harga kompetitif mulai Rp 7.500-8.500 per liter.
              </p>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-[#D9E3D3]" />
                <a 
                  href="https://maps.app.goo.gl/Y8BVwkYmfmW1UmjSA" 
                  target="_blank" 
                  rel="noopener"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  3c no 250, Jl. Papanggo I, Papanggo<br />
                  Kec. Tj. Priok, Jkt Utara, Daerah Khusus Ibukota Jakarta 14340
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0 text-[#D9E3D3]" />
                <a href="tel:+6285183033995" className="text-white/70 hover:text-white transition-colors">
                  +62 851-8303-3995
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0 text-[#D9E3D3]" />
                <a href="mailto:info.jelantahgo@gmail.com" className="text-white/70 hover:text-white transition-colors">
                  info.jelantahgo@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Layanan & Informasi */}
          <div className="footer-nav lg:col-span-3">
            <h4 
              className="text-white text-lg font-semibold mb-2 md:mb-2 md:cursor-default cursor-pointer" 
              onClick={() => toggleSection('layanan')}
              aria-expanded={expandedSections.layanan}
              aria-controls="layanan-menu"
            >
              Layanan Utama
            </h4>
            <ul 
              id="layanan-menu"
              className={`space-y-2.5 text-sm mb-6 ${expandedSections.layanan ? 'block' : 'hidden md:block'}`}
            >
              <li>
                <Link href="/" className="hover:text-white hover:translate-x-1 inline-block transition-smooth">
                  Jual Minyak Jelantah
                </Link>
              </li>
              <li>
                <Link href="/cara-kerja" className="hover:text-white hover:translate-x-1 inline-block transition-smooth">
                  Cara Jual Minyak Jelantah
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white hover:translate-x-1 inline-block transition-smooth">
                  Harga Minyak Jelantah Hari Ini
                </Link>
              </li>
              <li>
                <Link href="/testimoni" className="hover:text-white hover:translate-x-1 inline-block transition-smooth">
                  Testimoni Pelanggan
                </Link>
              </li>
            </ul>

            <h4 
              className="text-white text-lg font-semibold mb-2 md:mb-2 md:cursor-default cursor-pointer"
              onClick={() => toggleSection('informasi')}
              aria-expanded={expandedSections.informasi}
              aria-controls="informasi-menu"
            >
              Informasi
            </h4>
            <ul 
              id="informasi-menu"
              className={`space-y-2.5 text-sm ${expandedSections.informasi ? 'block' : 'hidden md:block'}`}
            >
              <li>
                <Link href="/mitra" className="hover:text-white hover:translate-x-1 inline-block transition-smooth">
                  Mitra Pengepul Minyak Jelantah
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white hover:translate-x-1 inline-block transition-smooth">
                  Panduan Daur Ulang Minyak Jelantah
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white hover:translate-x-1 inline-block transition-smooth">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/blog/ancaman-dan-peluang-minyak-jelantah" className="hover:text-white hover:translate-x-1 inline-block transition-smooth">
                  Manfaat Daur Ulang
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white hover:translate-x-1 inline-block transition-smooth">
                  Hubungi Kami
                </Link>
              </li>
              <li>
                <Link href="/syarat-ketentuan" className="hover:text-white hover:translate-x-1 inline-block transition-smooth">
                  Syarat & Ketentuan
                </Link>
              </li>
            </ul>
          </div>

          {/* Area Layanan */}
          <div className="area-pages lg:col-span-4">
            <h4 
              className="text-white text-lg font-semibold mb-4 md:mb-4 md:cursor-default cursor-pointer"
              onClick={() => toggleSection('area')}
              aria-expanded={expandedSections.area}
              aria-controls="area-menu"
            >
              Area Pengambilan Minyak Jelantah
            </h4>
            <ul 
              id="area-menu"
              className={`space-y-2.5 text-sm ${expandedSections.area ? 'block' : 'hidden md:block'}`}
            >
              <li>
                <Link href="/blog/jual-minyak-jelantah-jakarta" className="hover:text-white hover:translate-x-1 inline-block transition-smooth">
                  Jual Minyak Jelantah Jakarta & Sekitarnya
                </Link>
              </li>
              <li>
                <Link href="/blog/harga-jual-minyak-jelantah-jakarta-utara" className="hover:text-white hover:translate-x-1 inline-block transition-smooth">
                  Jual Minyak Jelantah Jakarta Utara
                </Link>
              </li>
              <li>
                <Link href="/blog/pengepul-jelantah-jakarta-selatan" className="hover:text-white hover:translate-x-1 inline-block transition-smooth">
                  Jual Minyak Jelantah Jakarta Selatan
                </Link>
              </li>
              <li>
                <Link href="/blog/jemput-jelantah-gratis-jakarta-barat" className="hover:text-white hover:translate-x-1 inline-block transition-smooth">
                  Jual Minyak Jelantah Jakarta Barat
                </Link>
              </li>
              <li>
                <Link href="/blog/jual-minyak-jelantah-jakarta-timur" className="hover:text-white hover:translate-x-1 inline-block transition-smooth">
                  Jual Minyak Jelantah Jakarta Timur
                </Link>
              </li>
              <li>
                <Link href="/blog/manajemen-limbah-jelantah-jakarta-pusat" className="hover:text-white hover:translate-x-1 inline-block transition-smooth">
                  Jual Minyak Jelantah Jakarta Pusat
                </Link>
              </li>
              <li>
                <Link href="/blog/jual-minyak-jelantah-tangerang" className="hover:text-white hover:translate-x-1 inline-block transition-smooth">
                  Jual Minyak Jelantah Tangerang
                </Link>
              </li>
              <li>
                <Link href="/blog/jual-minyak-jelantah-bekasi" className="hover:text-white hover:translate-x-1 inline-block transition-smooth">
                  Jual Minyak Jelantah Bekasi
                </Link>
              </li>
              <li>
                <Link href="/blog/jual-minyak-jelantah-depok-bogor" className="hover:text-white hover:translate-x-1 inline-block transition-smooth">
                  Jual Minyak Jelantah Depok & Bogor
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              JelantahGO - Pengepul Minyak Jelantah Terpercaya
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
              <Link href="/syarat-ketentuan" className="hover:text-white transition-colors">
                Syarat & Ketentuan
              </Link>
              <span>•</span>
              <Link href="/testimoni" className="hover:text-white transition-colors">
                Testimoni
              </Link>
              <span>•</span>
              <Link href="/contact" className="hover:text-white transition-colors">
                Kontak
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
