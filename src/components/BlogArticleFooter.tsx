import Link from 'next/link'
import { ArrowLeft, ArrowRight, User, BookOpen } from 'lucide-react'

interface BlogArticleFooterProps {
  currentSlug: string
  category?: string
}

// Mapping artikel terkait berdasarkan kategori/topik
const relatedArticlesByCategory: Record<string, string[]> = {
  // Panduan Jual Jelantah Cluster
  'panduan-jual-minyak-jelantah': [
    '/blog/cara-menyimpan-minyak-jelantah',
    '/blog/cara-jual-jelantah-menguntungkan',
    '/blog/waktu-terbaik-jual-jelantah',
  ],
  'cara-menyimpan-minyak-jelantah': [
    '/blog/panduan-jual-minyak-jelantah',
    '/blog/kesalahan-menyimpan-jelantah',
    '/blog/cara-jual-jelantah-menguntungkan',
  ],
  'cara-jual-jelantah-menguntungkan': [
    '/blog/panduan-jual-minyak-jelantah',
    '/blog/ciri-pengepul-jelantah-nakal',
    '/blog/negosiasi-harga-pengepul',
  ],
  'ciri-pengepul-jelantah-nakal': [
    '/blog/panduan-jual-minyak-jelantah',
    '/blog/cara-jual-jelantah-menguntungkan',
    '/blog/kesalahan-penjual-jelantah-pemula',
  ],
  'waktu-terbaik-jual-jelantah': [
    '/blog/panduan-jual-minyak-jelantah',
    '/blog/cara-jual-jelantah-menguntungkan',
    '/blog/harga-jelantah-oktober-2025',
  ],
  'harga-jelantah-oktober-2025': [
    '/blog/panduan-jual-minyak-jelantah',
    '/blog/waktu-terbaik-jual-jelantah',
    '/blog/cara-jual-jelantah-menguntungkan',
  ],
  'kesalahan-penjual-jelantah-pemula': [
    '/blog/panduan-jual-minyak-jelantah',
    '/blog/ciri-pengepul-jelantah-nakal',
    '/blog/cara-jual-jelantah-menguntungkan',
  ],
  'kesalahan-menyimpan-jelantah': [
    '/blog/cara-menyimpan-minyak-jelantah',
    '/blog/panduan-jual-minyak-jelantah',
    '/blog/cara-jual-jelantah-menguntungkan',
  ],
  'cara-kumpulkan-100-liter-jelantah': [
    '/blog/panduan-jual-minyak-jelantah',
    '/blog/cara-menyimpan-minyak-jelantah',
    '/blog/waktu-terbaik-jual-jelantah',
  ],
  'negosiasi-harga-pengepul': [
    '/blog/cara-jual-jelantah-menguntungkan',
    '/blog/panduan-jual-minyak-jelantah',
    '/blog/ciri-pengepul-jelantah-nakal',
  ],
  
  // Bahaya & Dampak Cluster
  'ancaman-dan-peluang-minyak-jelantah': [
    '/blog/bahaya-buang-jelantah-sembarangan',
    '/blog/dampak-jelantah-ekosistem',
    '/blog/bahaya-minyak-jelantah-kesehatan',
  ],
  'bahaya-buang-jelantah-sembarangan': [
    '/blog/ancaman-dan-peluang-minyak-jelantah',
    '/blog/fatberg-monster-bawah-tanah-jelantah',
    '/blog/dampak-jelantah-ekosistem',
  ],
  'fatberg-monster-bawah-tanah-jelantah': [
    '/blog/bahaya-buang-jelantah-sembarangan',
    '/blog/dampak-jelantah-ekosistem',
    '/blog/ancaman-dan-peluang-minyak-jelantah',
  ],
  'dampak-jelantah-ekosistem': [
    '/blog/bahaya-buang-jelantah-sembarangan',
    '/blog/fatberg-monster-bawah-tanah-jelantah',
    '/blog/bahaya-minyak-jelantah-kesehatan',
  ],
  'bahaya-minyak-jelantah-kesehatan': [
    '/blog/ancaman-dan-peluang-minyak-jelantah',
    '/blog/dampak-jelantah-ekosistem',
    '/blog/bahaya-buang-jelantah-sembarangan',
  ],
  'diy-sabun-lilin-minyak-jelantah': [
    '/blog/ancaman-dan-peluang-minyak-jelantah',
    '/blog/bahaya-buang-jelantah-sembarangan',
    '/blog/regulasi-limbah-b3-jelantah-bisnis-kuliner',
  ],
  'regulasi-limbah-b3-jelantah-bisnis-kuliner': [
    '/blog/ancaman-dan-peluang-minyak-jelantah',
    '/blog/diy-sabun-lilin-minyak-jelantah',
    '/blog/manajemen-limbah-jelantah-jakarta-pusat',
  ],
  
  // Bisnis Pengepul Cluster
  'peluang-bisnis-pengepul-jelantah': [
    '/blog/panduan-bisnis-pengepul-jelantah',
    '/blog/mitra-jelantahgo-vs-mandiri',
    '/blog/kisah-sukses-pengepul-jelantah-pak-doni',
  ],
  'panduan-bisnis-pengepul-jelantah': [
    '/blog/peluang-bisnis-pengepul-jelantah',
    '/blog/checklist-peralatan-pengepul-jelantah',
    '/blog/manajemen-logistik-pengepul-jelantah',
  ],
  'mitra-jelantahgo-vs-mandiri': [
    '/blog/peluang-bisnis-pengepul-jelantah',
    '/blog/kisah-sukses-pengepul-jelantah-pak-doni',
    '/blog/kisah-sukses-ibu-rina',
  ],
  'kisah-sukses-pengepul-jelantah-pak-doni': [
    '/blog/peluang-bisnis-pengepul-jelantah',
    '/blog/kisah-sukses-ibu-rina',
    '/blog/mitra-jelantahgo-vs-mandiri',
  ],
  'kisah-sukses-ibu-rina': [
    '/blog/peluang-bisnis-pengepul-jelantah',
    '/blog/kisah-sukses-pengepul-jelantah-pak-doni',
    '/blog/mitra-jelantahgo-vs-mandiri',
  ],
  'checklist-peralatan-pengepul-jelantah': [
    '/blog/panduan-bisnis-pengepul-jelantah',
    '/blog/peluang-bisnis-pengepul-jelantah',
    '/blog/manajemen-logistik-pengepul-jelantah',
  ],
  'manajemen-logistik-pengepul-jelantah': [
    '/blog/panduan-bisnis-pengepul-jelantah',
    '/blog/checklist-peralatan-pengepul-jelantah',
    '/blog/peluang-bisnis-pengepul-jelantah',
  ],
  'skrip-template-penawaran-kerjasama-jelantah': [
    '/blog/peluang-bisnis-pengepul-jelantah',
    '/blog/panduan-bisnis-pengepul-jelantah',
    '/blog/manajemen-logistik-pengepul-jelantah',
  ],
  
  // Jakarta Local Cluster
  'jual-minyak-jelantah-jakarta': [
    '/blog/pengepul-jelantah-jakarta-selatan',
    '/blog/jemput-jelantah-gratis-jakarta-barat',
    '/blog/harga-jual-minyak-jelantah-jakarta-utara',
  ],
  'pengepul-jelantah-jakarta-selatan': [
    '/blog/jual-minyak-jelantah-jakarta',
    '/blog/manajemen-limbah-jelantah-jakarta-pusat',
    '/blog/jemput-jelantah-gratis-jakarta-barat',
  ],
  'harga-jual-minyak-jelantah-jakarta-utara': [
    '/blog/jual-minyak-jelantah-jakarta',
    '/blog/jemput-jelantah-gratis-jakarta-barat',
    '/blog/jual-minyak-jelantah-jakarta-timur',
  ],
  'jemput-jelantah-gratis-jakarta-barat': [
    '/blog/jual-minyak-jelantah-jakarta',
    '/blog/jual-minyak-jelantah-jakarta-timur',
    '/blog/pengepul-jelantah-jakarta-selatan',
  ],
  'jual-minyak-jelantah-jakarta-timur': [
    '/blog/jual-minyak-jelantah-jakarta',
    '/blog/jemput-jelantah-gratis-jakarta-barat',
    '/blog/manajemen-limbah-jelantah-jakarta-pusat',
  ],
  'manajemen-limbah-jelantah-jakarta-pusat': [
    '/blog/jual-minyak-jelantah-jakarta',
    '/blog/pengepul-jelantah-jakarta-selatan',
    '/blog/regulasi-limbah-b3-jelantah-bisnis-kuliner',
  ],
  
  // Other Local
  'jual-minyak-jelantah-tangerang': [
    '/blog/jual-minyak-jelantah-jakarta',
    '/blog/jual-minyak-jelantah-bekasi',
    '/blog/jual-minyak-jelantah-depok-bogor',
  ],
  'jual-minyak-jelantah-bekasi': [
    '/blog/jual-minyak-jelantah-jakarta',
    '/blog/jual-minyak-jelantah-tangerang',
    '/blog/jual-minyak-jelantah-depok-bogor',
  ],
  'jual-minyak-jelantah-depok-bogor': [
    '/blog/jual-minyak-jelantah-jakarta',
    '/blog/jual-minyak-jelantah-bekasi',
    '/blog/jual-minyak-jelantah-tangerang',
  ],
}

// Mapping artikel berdasarkan slug untuk judul
const articleTitles: Record<string, string> = {
  '/blog/panduan-jual-minyak-jelantah': 'Panduan Terlengkap Jual Minyak Jelantah 2025',
  '/blog/cara-menyimpan-minyak-jelantah': 'Cara Menyimpan Minyak Jelantah: 5 Tips Anti Bau & Tumpah',
  '/blog/cara-jual-jelantah-menguntungkan': 'Cara Jual Minyak Jelantah yang Paling Menguntungkan',
  '/blog/waktu-terbaik-jual-jelantah': 'Kapan Waktu Terbaik untuk Menjual Jelantah?',
  '/blog/ciri-pengepul-jelantah-nakal': 'Waspada! 5 Ciri Pengepul Jelantah Nakal & Cara Menghindarinya',
  '/blog/bahaya-buang-jelantah-sembarangan': 'Bahaya Buang Jelantah Sembarangan: Dampak Lingkungan & Kesehatan',
  '/blog/fatberg-monster-bawah-tanah-jelantah': 'Fatberg: Monster Bawah Tanah dari Jelantah',
  '/blog/dampak-jelantah-ekosistem': 'Dampak Pencemaran Jelantah terhadap Ekosistem Air',
  '/blog/bahaya-minyak-jelantah-kesehatan': '5 Bahaya Minyak Jelantah Bagi Kesehatan',
  '/blog/peluang-bisnis-pengepul-jelantah': 'Peluang Bisnis Pengepul Minyak Jelantah 2025',
  '/blog/panduan-bisnis-pengepul-jelantah': 'Panduan Memulai Bisnis Pengepul Jelantah',
  '/blog/mitra-jelantahgo-vs-mandiri': 'JelantahGO vs. Mandiri: Analisis Keuntungan',
  '/blog/kisah-sukses-pengepul-jelantah-pak-doni': 'Kisah Sukses Pak Doni, Omzet 20 Juta/Bulan',
  '/blog/kisah-sukses-ibu-rina': 'Kisah Sukses Ibu Rina, Mitra Pengepul',
  '/blog/checklist-peralatan-pengepul-jelantah': 'Checklist Peralatan Wajib untuk Pengepul Jelantah Pemula',
  '/blog/manajemen-logistik-pengepul-jelantah': 'Manajemen Logistik Pengepul Jelantah',
  '/blog/pengepul-jelantah-jakarta-selatan': 'Pengepul Jelantah Terpercaya di Jakarta Selatan',
  '/blog/jemput-jelantah-gratis-jakarta-barat': 'Layanan Jemput Jelantah Gratis di Jakarta Barat',
  '/blog/harga-jual-minyak-jelantah-jakarta-utara': 'Harga Jual Minyak Jelantah Terbaik di Jakarta Utara',
  '/blog/jual-minyak-jelantah-jakarta-timur': 'Jual Minyak Jelantah Jakarta Timur',
  '/blog/manajemen-limbah-jelantah-jakarta-pusat': 'Manajemen Limbah Jelantah Profesional untuk Hotel & Perkantoran',
  '/blog/ancaman-dan-peluang-minyak-jelantah': 'Bahaya & Peluang Emas Minyak Jelantah',
  '/blog/negosiasi-harga-pengepul': 'Cara Negosiasi Harga dengan Pengepul Jelantah',
  '/blog/kesalahan-penjual-jelantah-pemula': '7 Kesalahan Fatal Penjual Jelantah Pemula',
  '/blog/kesalahan-menyimpan-jelantah': '5 Kesalahan Menyimpan Jelantah yang Bikin Harga Turun',
  '/blog/diy-sabun-lilin-minyak-jelantah': 'DIY Kreatif: Cara Membuat Sabun & Lilin dari Minyak Jelantah',
  '/blog/regulasi-limbah-b3-jelantah-bisnis-kuliner': 'Regulasi Limbah B3 Jelantah untuk Bisnis Kuliner',
  '/blog/cara-kumpulkan-100-liter-jelantah': '10 Cara Mengumpulkan Minyak Jelantah 100 Liter per Bulan',
  '/blog/harga-jelantah-oktober-2025': 'Update Harga Minyak Jelantah Oktober 2025',
  '/blog/skrip-template-penawaran-kerjasama-jelantah': '5 Skrip & Template Penawaran Kerjasama Jelantah ke Restoran',
  '/blog/jual-minyak-jelantah-jakarta': 'Jual Minyak Jelantah Jakarta: Panduan Lengkap & Harga Terbaru 2025',
  '/blog/jual-minyak-jelantah-tangerang': 'Jual Minyak Jelantah Tangerang & Tangsel: Panduan Lengkap 2025',
  '/blog/jual-minyak-jelantah-bekasi': 'Jual Minyak Jelantah Bekasi: Panduan untuk Warga & Industri 2025',
  '/blog/jual-minyak-jelantah-depok-bogor': 'Jual Minyak Jelantah Depok & Bogor: Panduan Kuliner & Warga 2025',
}

// Default related articles jika tidak ditemukan mapping
const defaultRelatedArticles = [
  '/blog/panduan-jual-minyak-jelantah',
  '/blog/peluang-bisnis-pengepul-jelantah',
  '/blog/ancaman-dan-peluang-minyak-jelantah',
]

// Urutan artikel untuk navigasi sebelumnya/berikutnya
const articleOrder: string[] = [
  // Panduan Jual Cluster
  'panduan-jual-minyak-jelantah',
  'cara-menyimpan-minyak-jelantah',
  'cara-jual-jelantah-menguntungkan',
  'waktu-terbaik-jual-jelantah',
  'harga-jelantah-oktober-2025',
  'ciri-pengepul-jelantah-nakal',
  'kesalahan-penjual-jelantah-pemula',
  'kesalahan-menyimpan-jelantah',
  'cara-kumpulkan-100-liter-jelantah',
  'negosiasi-harga-pengepul',
  
  // Bahaya & Dampak Cluster
  'ancaman-dan-peluang-minyak-jelantah',
  'bahaya-buang-jelantah-sembarangan',
  'fatberg-monster-bawah-tanah-jelantah',
  'dampak-jelantah-ekosistem',
  'bahaya-minyak-jelantah-kesehatan',
  'diy-sabun-lilin-minyak-jelantah',
  'regulasi-limbah-b3-jelantah-bisnis-kuliner',
  
  // Bisnis Pengepul Cluster
  'peluang-bisnis-pengepul-jelantah',
  'panduan-bisnis-pengepul-jelantah',
  'mitra-jelantahgo-vs-mandiri',
  'kisah-sukses-pengepul-jelantah-pak-doni',
  'kisah-sukses-ibu-rina',
  'checklist-peralatan-pengepul-jelantah',
  'manajemen-logistik-pengepul-jelantah',
  'skrip-template-penawaran-kerjasama-jelantah',
  
  // Jakarta & Local Cluster
  'jual-minyak-jelantah-jakarta',
  'pengepul-jelantah-jakarta-selatan',
  'harga-jual-minyak-jelantah-jakarta-utara',
  'jemput-jelantah-gratis-jakarta-barat',
  'jual-minyak-jelantah-jakarta-timur',
  'manajemen-limbah-jelantah-jakarta-pusat',
  'jual-minyak-jelantah-tangerang',
  'jual-minyak-jelantah-bekasi',
  'jual-minyak-jelantah-depok-bogor',
]

export default function BlogArticleFooter({ currentSlug, category }: BlogArticleFooterProps) {
  // Get related articles
  const relatedSlugs = relatedArticlesByCategory[currentSlug] || defaultRelatedArticles
  const relatedArticles = relatedSlugs
    .slice(0, 3)
    .map(slug => ({
      slug,
      title: articleTitles[slug] || slug.split('/').pop()?.replace(/-/g, ' ') || 'Artikel Terkait',
    }))

  // Get previous and next articles
  const currentIndex = articleOrder.indexOf(currentSlug)
  const prevSlug = currentIndex > 0 ? articleOrder[currentIndex - 1] : null
  const nextSlug = currentIndex < articleOrder.length - 1 ? articleOrder[currentIndex + 1] : null
  
  const prevArticle = prevSlug ? {
    slug: `/blog/${prevSlug}`,
    title: articleTitles[`/blog/${prevSlug}`] || prevSlug.replace(/-/g, ' '),
  } : null
  
  const nextArticle = nextSlug ? {
    slug: `/blog/${nextSlug}`,
    title: articleTitles[`/blog/${nextSlug}`] || nextSlug.replace(/-/g, ' '),
  } : null

  return (
    <div className="mt-16 space-y-12">
      {/* Author Section */}
      <div className="card-premium bg-[#E8F0E3] border-l-4 border-l-[#0F3D2E]">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-[#0F3D2E] rounded-full flex items-center justify-center flex-shrink-0">
            <User className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-[#0F3D2E] mb-2">Ditulis oleh Tim JelantahGO</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              JelantahGO adalah tim ahli dalam ekonomi sirkular minyak jelantah. Misi kami adalah mengedukasi masyarakat tentang pentingnya daur ulang sambil menyediakan layanan pengumpulan yang profesional, menguntungkan, dan berdampak positif bagi lingkungan.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#0F3D2E] font-semibold hover:underline transition-colors"
            >
              Pelajari Lebih Lanjut Tentang Kami
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation: Previous/Next Article */}
      <div className="flex items-center justify-between gap-4 py-6 border-t border-b border-gray-200">
        {/* Previous Article */}
        {prevArticle ? (
          <Link
            href={prevArticle.slug}
            className="group flex items-center gap-2 text-gray-700 hover:text-[#0F3D2E] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <div className="text-sm">
              <div className="text-xs text-gray-500 mb-1">Artikel Sebelumnya</div>
              <div className="font-semibold line-clamp-1">{prevArticle.title}</div>
            </div>
          </Link>
        ) : (
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <ArrowLeft className="w-4 h-4" />
            <span className="italic">Artikel Sebelumnya</span>
          </div>
        )}

        {/* Next Article */}
        {nextArticle ? (
          <Link
            href={nextArticle.slug}
            className="group flex items-center gap-2 text-gray-700 hover:text-[#0F3D2E] transition-colors"
          >
            <div className="text-sm text-right">
              <div className="text-xs text-gray-500 mb-1">Artikel Berikutnya</div>
              <div className="font-semibold line-clamp-1">{nextArticle.title}</div>
            </div>
            <ArrowRight className="w-4 h-4" />
          </Link>
        ) : (
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span className="italic">Artikel Berikutnya</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        )}
      </div>

      {/* Related Articles */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <BookOpen className="w-5 h-5 text-[#0F3D2E]" />
          <h3 className="text-2xl font-bold text-[#0F3D2E]">Anda Mungkin Juga Suka / Artikel Terkait</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedArticles.map((article, index) => (
            <Link
              key={index}
              href={article.slug}
              className="group card-premium hover:shadow-soft-lg transition-smooth bg-white hover:bg-[#F9F8F6]"
            >
              <h4 className="text-lg font-bold text-gray-800 group-hover:text-[#0F3D2E] transition-colors line-clamp-3 leading-snug">
                {article.title}
              </h4>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

