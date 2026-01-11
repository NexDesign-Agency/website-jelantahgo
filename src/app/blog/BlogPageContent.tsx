'use client'

import Image from 'next/image'
import Link from 'next/link'
import ItemListSchema from '@/components/ItemListSchema'

export default function BlogPageContent() {
  const pillars = [
    {
      badge: '⭐ ARTIKEL PILAR',
      title: 'Panduan Terlengkap Jual Minyak Jelantah 2025',
      excerpt: 'Titik awal terbaik Anda. Pelajari semua yang perlu Anda ketahui tentang menjual jelantah—mulai dari cara mengumpulkan, memahami harga pasar, hingga menemukan pengepul terpercaya dalam satu panduan super lengkap.',
      link: '/blog/panduan-jual-minyak-jelantah',
      clusters: [
        { title: 'Cara Menyimpan Minyak Jelantah: 5 Tips Anti Bau & Tumpah', link: '/blog/cara-menyimpan-minyak-jelantah' },
        { title: 'Cara Jual Minyak Jelantah yang Paling Menguntungkan', link: '/blog/cara-jual-jelantah-menguntungkan' },
        { title: '10 Cara Mengumpulkan 100 Liter Jelantah per Bulan', link: '/blog/cara-kumpulkan-100-liter-jelantah' },
        { title: 'Kapan Waktu Terbaik untuk Menjual Jelantah?', link: '/blog/waktu-terbaik-jual-jelantah' },
        { title: 'Kesalahan Penjual Jelantah Pemula yang Harus Dihindari', link: '/blog/kesalahan-penjual-jelantah-pemula' },
        { title: '5 Kesalahan Menyimpan Jelantah yang Bikin Harga Turun', link: '/blog/kesalahan-menyimpan-jelantah' },
        { title: 'Update Harga Minyak Jelantah Oktober 2025', link: '/blog/harga-jelantah-oktober-2025' },
        { title: 'Ciri-ciri Pengepul Jelantah Nakal (Tahu Sebelum Kena Tipu)', link: '/blog/ciri-pengepul-jelantah-nakal' },
      ],
    },
    {
      badge: '⭐ ARTIKEL PILAR',
      title: 'Bahaya & Peluang Emas Minyak Jelantah',
      excerpt: 'Eksplorasi mendalam tentang bahaya membuang jelantah sembarangan dan peluang besar di baliknya. Dari dampak lingkungan hingga potensi bisnis yang luar biasa.',
      link: '/blog/ancaman-dan-peluang-minyak-jelantah',
      clusters: [
        { title: 'Bahaya Buang Jelantah Sembarangan: Dampak Lingkungan & Kesehatan', link: '/blog/bahaya-buang-jelantah-sembarangan' },
        { title: 'Dampak Jelantah pada Ekosistem Air', link: '/blog/dampak-jelantah-ekosistem' },
        { title: 'Fatberg: Monster Bawah Tanah dari Jelantah', link: '/blog/fatberg-monster-bawah-tanah-jelantah' },
        { title: '5 Bahaya Minyak Jelantah Bagi Kesehatan', link: '/blog/bahaya-minyak-jelantah-kesehatan' },
        { title: 'DIY Sabun & Lilin dari Minyak Jelantah', link: '/blog/diy-sabun-lilin-minyak-jelantah' },
        { title: 'Regulasi Limbah B3 untuk Bisnis Kuliner', link: '/blog/regulasi-limbah-b3-jelantah-bisnis-kuliner' },
      ],
    },
    {
      badge: '⭐ ARTIKEL PILAR',
      title: 'Bisnis Pengepul Jelantah 2025: Modal, Untung & Pemasaran',
      excerpt: 'Ingin jadi wirausaha hijau? Blueprint bisnis ini membedah tuntas rincian modal, simulasi keuntungan, dan strategi pemasaran untuk membangun bisnis pengepul jelantah dari nol.',
      link: '/blog/peluang-bisnis-pengepul-jelantah',
      clusters: [
        { title: 'Panduan Memulai Bisnis Pengepul', link: '/blog/panduan-bisnis-pengepul-jelantah' },
        { title: 'Cara Negosiasi Harga dengan Pengepul', link: '/blog/negosiasi-harga-pengepul' },
        { title: 'Kisah Sukses Ibu Rina, Mitra Pengepul', link: '/blog/kisah-sukses-ibu-rina' },
        { title: 'Checklist Peralatan Pengepul Jelantah Pemula', link: '/blog/checklist-peralatan-pengepul-jelantah' },
        { title: '5 Skrip & Template Penawaran Kerjasama Jelantah', link: '/blog/skrip-template-penawaran-kerjasama-jelantah' },
        { title: 'Kisah Sukses Pak Doni, Omzet 20 Juta/Bulan', link: '/blog/kisah-sukses-pengepul-jelantah-pak-doni' },
        { title: 'Manajemen Logistik Pengepul Jelantah', link: '/blog/manajemen-logistik-pengepul-jelantah' },
        { title: 'Mitra JelantahGO vs Mandiri: Analisis Untung-Rugi', link: '/blog/mitra-jelantahgo-vs-mandiri' },
      ],
    },
    {
      badge: '⭐ ARTIKEL PILAR LOKAL',
      title: 'Jual Minyak Jelantah Jakarta: Panduan Lengkap & Harga Terbaru 2025',
      excerpt: 'Panduan lokal paling komprehensif untuk warga dan bisnis yang ingin menjual minyak jelantah di semua wilayah DKI Jakarta, mencakup harga, cara jual, dan tips memilih pengepul terpercaya di Jakarta.',
      link: '/blog/jual-minyak-jelantah-jakarta',
      clusters: [
        { title: 'Pengepul Jelantah Jakarta Selatan: Solusi Cepat Kafe & Resto', link: '/blog/pengepul-jelantah-jakarta-selatan' },
        { title: 'Harga Jual Minyak Jelantah Terbaik di Jakarta Utara', link: '/blog/harga-jual-minyak-jelantah-jakarta-utara' },
        { title: 'Jemput Jelantah Gratis Jakarta Barat', link: '/blog/jemput-jelantah-gratis-jakarta-barat' },
        { title: 'Jual Minyak Jelantah Jakarta Timur', link: '/blog/jual-minyak-jelantah-jakarta-timur' },
        { title: 'Manajemen Limbah Jelantah Jakarta Pusat', link: '/blog/manajemen-limbah-jelantah-jakarta-pusat' },
      ],
    },
    {
      badge: '⭐ ARTIKEL PILAR LOKAL',
      title: 'Jual Minyak Jelantah Tangerang & Tangsel: Panduan Lengkap 2025',
      excerpt: 'Panduan spesifik untuk warga dan bisnis di Tangerang Raya (Kota, Tangsel, Kabupaten) yang ingin menjual jelantah dengan harga terbaik dan layanan profesional.',
      link: '/blog/jual-minyak-jelantah-tangerang',
      clusters: [],
    },
    {
      badge: '⭐ ARTIKEL PILAR LOKAL',
      title: 'Jual Minyak Jelantah Bekasi: Panduan untuk Warga & Industri 2025',
      excerpt: 'Panduan lengkap untuk warga dan pelaku industri di seluruh wilayah Bekasi (Kota dan Kabupaten) yang ingin menjual jelantah dengan layanan jemput gratis.',
      link: '/blog/jual-minyak-jelantah-bekasi',
      clusters: [],
    },
    {
      badge: '⭐ ARTIKEL PILAR LOKAL',
      title: 'Jual Minyak Jelantah Depok & Bogor: Panduan Kuliner & Warga 2025',
      excerpt: 'Panduan untuk warga dan bisnis kuliner di Depok dan Bogor yang ingin menjual minyak jelantah mereka secara mudah, cepat, dan menguntungkan.',
      link: '/blog/jual-minyak-jelantah-depok-bogor',
      clusters: [],
    },
    {
      badge: '📋 ANALISIS KEBIJAKAN',
      title: 'Aturan Baru Jelantah 2025: Niat Baik yang Bikin Pengepul Kecil Kelabakan',
      excerpt: 'Belajar dari kebijakan yang justru bikin usaha kecil terpukul. Analisis mendalam dampak aturan ketat ekspor jelantah terhadap pengepul kecil dan rekomendasi kebijakan yang lebih seimbang.',
      link: '/blog/aturan-baru-jelantah-2025',
      clusters: [],
    },
  ]

  // Prepare items for ItemList Schema
  const allArticles = pillars.flatMap((pillar) => [
    {
      name: pillar.title,
      url: `https://jelantahgo.com${pillar.link}`,
      description: pillar.excerpt,
    },
    ...pillar.clusters.map((cluster) => ({
      name: cluster.title,
      url: `https://jelantahgo.com${cluster.link}`,
    })),
  ])

  return (
    <>
      <ItemListSchema
        name="Blog Artikel JelantahGO - Panduan Lengkap Minyak Jelantah"
        description="Daftar lengkap artikel dan panduan tentang minyak jelantah, cara jual, tips bisnis, edukasi lingkungan, dan biodiesel dari JelantahGO."
        items={allArticles}
      />
      {/* Hero Section */}
      <section className="hero-bg-dots py-20 lg:py-28">
        <div className="container-custom relative z-10 text-center">
          <div className="inline-block bg-[#D9E3D3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            BLOG & PANDUAN
          </div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
            Blog JelantahGO - Panduan Lengkap Minyak Jelantah
          </h1>
          <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Pusat Informasi Terlengkap tentang Minyak Jelantah, Bisnis, dan Lingkungan
          </p>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <Image
            src="https://res.cloudinary.com/dknswj9co/image/upload/v1761171103/jelantah-go_6_sop0by.webp"
            alt="Kumpulan artikel dan panduan lengkap mengenai bisnis minyak jelantah dari JelantahGO"
            width={1200}
            height={630}
            className="max-w-full h-auto rounded-card-lg shadow-layered mx-auto"
            loading="lazy"
          />
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom max-w-6xl">
          {pillars.map((pillar, index) => (
            <div key={index} className="card-premium mb-12 overflow-hidden">
              <div className="p-8 lg:p-10">
                <div className="inline-block bg-gradient-to-r from-[#0F3D2E] to-[#134E3A] text-white px-4 py-2 rounded-full text-xs font-bold mb-6">
                  {pillar.badge}
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-[#0F3D2E] mb-4">
                  {pillar.title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {pillar.excerpt}
                </p>
                <Link
                  href={pillar.link}
                  className="inline-block bg-[#0F3D2E] text-white hover:bg-[#134E3A] px-6 py-3 rounded-card font-bold transition-smooth shadow-soft hover:shadow-soft-lg"
                >
                  Baca {pillar.badge.includes('LOKAL') ? 'Panduan' : 'Artikel'} Lengkapnya →
                </Link>
              </div>
              
              {pillar.clusters.length > 0 && (
                <div className="px-8 lg:px-10 pb-8 lg:pb-10">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                    {pillar.clusters.map((cluster, cIndex) => (
                      <div
                        key={cIndex}
                        className="bg-[#F9F8F6] border border-gray-200 rounded-card p-4 hover:border-[#0F3D2E] hover:shadow-soft transition-smooth"
                      >
                        <h3 className="font-bold text-[#0F3D2E] mb-2 text-sm">
                          {cluster.title}
                        </h3>
                        <Link
                          href={cluster.link}
                          className="text-[#0F3D2E] text-sm font-semibold hover:underline inline-flex items-center gap-1"
                        >
                          Baca →
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
