import Link from 'next/link'
import { BookOpen, Globe, Handshake, MapPin, TrendingUp, FileText } from 'lucide-react'

export default function BlogSidebar() {
  const latestArticles = [
    {
      title: 'Kisah Sukses: Dari Karyawan Pabrik Jadi Bos Jelantah',
      link: '/blog/kisah-sukses-pengepul-jelantah-pak-doni',
    },
    {
      title: 'Fatberg: Monster Bawah Tanah dari Dapur Anda',
      link: '/blog/fatberg-monster-bawah-tanah-jelantah',
    },
    {
      title: 'DIY Kreatif: Membuat Sabun & Lilin dari Jelantah',
      link: '/blog/diy-sabun-lilin-minyak-jelantah',
    },
    {
      title: 'Regulasi Limbah B3 Jelantah untuk Bisnis Kuliner',
      link: '/blog/regulasi-limbah-b3-jelantah-bisnis-kuliner',
    },
    {
      title: '5 Skrip & Template Penawaran Kerjasama ke Restoran',
      link: '/blog/skrip-template-penawaran-kerjasama-jelantah',
    },
  ]

  return (
    <aside className="space-y-6">
      {/* Panduan Utama */}
      <div className="card-premium">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-5 h-5 text-[#0F3D2E]" />
          <h3 className="text-lg font-bold text-[#0F3D2E]">PANDUAN UTAMA</h3>
        </div>
        <ul className="space-y-3">
          <li>
            <Link
              href="/blog/panduan-jual-minyak-jelantah"
              className="flex items-start gap-2 text-gray-700 hover:text-[#0F3D2E] transition-colors group"
            >
              <span className="text-lg mt-0.5">📘</span>
              <span className="group-hover:underline">Panduan Lengkap Menjual Jelantah</span>
            </Link>
          </li>
          <li>
            <Link
              href="/blog/ancaman-dan-peluang-minyak-jelantah"
              className="flex items-start gap-2 text-gray-700 hover:text-[#0F3D2E] transition-colors group"
            >
              <span className="text-lg mt-0.5">🌍</span>
              <span className="group-hover:underline">Dampak Lingkungan & Peluang Ekonomi</span>
            </Link>
          </li>
          <li>
            <Link
              href="/blog/peluang-bisnis-pengepul-jelantah"
              className="flex items-start gap-2 text-gray-700 hover:text-[#0F3D2E] transition-colors group"
            >
              <span className="text-lg mt-0.5">🤝</span>
              <span className="group-hover:underline">Peluang Bisnis Menjadi Mitra</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Jelajahi Area Layanan */}
      <div className="card-premium">
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-5 h-5 text-[#0F3D2E]" />
          <h3 className="text-lg font-bold text-[#0F3D2E]">JELAJAHI AREA LAYANAN</h3>
        </div>
        <ul className="space-y-2">
          <li>
            <Link
              href="/blog/jual-minyak-jelantah-jakarta"
              className="text-[#0F3D2E] font-semibold hover:underline block mb-2"
            >
              Panduan Utama DKI Jakarta
            </Link>
            <ul className="ml-4 space-y-1.5 text-sm">
              <li>
                <Link
                  href="/blog/pengepul-jelantah-jakarta-selatan"
                  className="text-gray-700 hover:text-[#0F3D2E] hover:underline transition-colors"
                >
                  Jakarta Selatan
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/manajemen-limbah-jelantah-jakarta-pusat"
                  className="text-gray-700 hover:text-[#0F3D2E] hover:underline transition-colors"
                >
                  Jakarta Pusat
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/jemput-jelantah-gratis-jakarta-barat"
                  className="text-gray-700 hover:text-[#0F3D2E] hover:underline transition-colors"
                >
                  Jakarta Barat
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/jual-minyak-jelantah-jakarta-timur"
                  className="text-gray-700 hover:text-[#0F3D2E] hover:underline transition-colors"
                >
                  Jakarta Timur
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/harga-jual-minyak-jelantah-jakarta-utara"
                  className="text-gray-700 hover:text-[#0F3D2E] hover:underline transition-colors"
                >
                  Jakarta Utara
                </Link>
              </li>
            </ul>
          </li>
          <li className="mt-3 pt-3 border-t border-gray-200">
            <Link
              href="/area-layanan"
              className="text-gray-700 hover:text-[#0F3D2E] hover:underline transition-colors"
            >
              Area Lain (Bodetabek)
            </Link>
          </li>
        </ul>
      </div>

      {/* CTA Siap Jual Jelantah */}
      <div className="card-premium bg-gradient-to-br from-[#E8F0E3] to-[#D9E3D3] border-l-4 border-l-[#0F3D2E]">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-[#0F3D2E]" />
          <h3 className="text-lg font-bold text-[#0F3D2E]">SIAP JUAL JELANTAH ANDA?</h3>
        </div>
        <p className="text-gray-700 text-sm mb-4 leading-relaxed">
          Dapatkan harga terbaik di pasaran dengan layanan jemput gratis (min. 40L) di seluruh Jabodetabek.
        </p>
        <div className="bg-white rounded-lg p-4 mb-4 space-y-2">
          <div className="flex items-center justify-between border-b border-gray-200 pb-2 last:border-0 last:pb-0">
            <span className="text-base font-bold text-[#0F3D2E]">Rp 7.500</span>
            <span className="text-sm text-gray-600">40-99 liter</span>
          </div>
          <div className="flex items-center justify-between border-b border-gray-200 pb-2 last:border-0 last:pb-0">
            <span className="text-base font-bold text-[#0F3D2E]">Rp 8.000</span>
            <span className="text-sm text-gray-600">100-199 liter</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-base font-bold text-[#0F3D2E]">Rp 8.500</span>
            <span className="text-sm text-gray-600">≥ 200 liter</span>
          </div>
        </div>
        <a
          href="https://wa.me/6285183033995?text=Halo%20JelantahGO,%20saya%20ingin%20jual%20minyak%20jelantah"
          target="_blank"
          rel="noopener"
          className="block w-full bg-[#0F3D2E] text-white hover:bg-[#134E3A] px-6 py-3 rounded-card font-bold text-center transition-smooth shadow-soft hover:shadow-soft-lg"
        >
          Hubungi & Jadwalkan via WhatsApp
        </a>
      </div>

      {/* Artikel Terbaru */}
      <div className="card-premium">
        <div className="flex items-center gap-2 mb-4">
          <FileText className="w-5 h-5 text-[#0F3D2E]" />
          <h3 className="text-lg font-bold text-[#0F3D2E]">ARTIKEL TERBARU</h3>
        </div>
        <ul className="space-y-3">
          {latestArticles.map((article, index) => (
            <li key={index}>
              <Link
                href={article.link}
                className="text-gray-700 hover:text-[#0F3D2E] hover:underline transition-colors text-sm leading-relaxed block"
              >
                {article.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

