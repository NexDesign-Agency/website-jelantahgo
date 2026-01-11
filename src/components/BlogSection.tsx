export default function BlogSection() {
  const articles = [
    {
      title: 'Aturan Baru Jelantah 2025: Niat Baik yang Bikin Pengepul Kecil Kelabakan',
      excerpt: 'Belajar dari kebijakan yang justru bikin usaha kecil terpukul. Analisis dampak aturan ketat ekspor jelantah terhadap pengepul kecil...',
      link: '/blog/aturan-baru-jelantah-2025',
      icon: '📋',
      anchorText: 'Analisis dampak aturan baru jelantah 2025 →'
    },
    {
      title: 'Panduan Lengkap Jual Minyak Jelantah Jakarta: Harga, Cara & Tips Terbaik 2025',
      excerpt: 'Semua yang perlu Anda tahu, dari cara menyimpan, cek harga, hingga memilih pengepul terpercaya...',
      link: '/blog/panduan-jual-minyak-jelantah',
      icon: '📖',
      anchorText: 'Panduan lengkap jual minyak jelantah Jakarta →'
    },
    {
      title: 'Bahaya & Peluang Emas Minyak Jelantah',
      excerpt: 'Mengapa jelantah dianggap limbah berbahaya? Dan bagaimana ia bisa menjadi peluang ekonomi hijau? Temukan jawabannya...',
      link: '/blog/ancaman-dan-peluang-minyak-jelantah',
      icon: '⚠️',
      anchorText: 'Bahaya dan peluang ekonomi minyak jelantah →'
    },
    {
      title: 'Peluang Bisnis Pengepul Jelantah: Modal & Untung',
      excerpt: 'Analisis lengkap modal, potensi keuntungan puluhan juta, dan strategi untuk memulai bisnis jelantah dari nol...',
      link: '/blog/peluang-bisnis-pengepul-jelantah',
      icon: '💼',
      anchorText: 'Peluang bisnis pengepul jelantah dengan analisis modal dan untung →'
    },
    {
      title: 'Update Harga Minyak Jelantah Jakarta 2025: Rp 7.500 - Rp 8.500 per Liter',
      excerpt: 'Cek harga terbaru minyak jelantah di Jakarta. Transparan, akurat, dan update berkala. Dapatkan harga terbaik sesuai volume Anda...',
      link: '/pricing',
      icon: '💰',
      anchorText: 'Update harga minyak jelantah Jakarta 2025 →'
    },
    {
      title: 'Pengepul Minyak Jelantah Jakarta Terpercaya: Ciri-Ciri & Cara Memilihnya',
      excerpt: 'Pelajari 5 ciri pengepul terpercaya dan cara memilih yang tepat. Hindari penipuan dan dapatkan transaksi aman & menguntungkan...',
      link: '/blog/panduan-jual-minyak-jelantah#memilih-pengepul',
      icon: '✅',
      anchorText: 'Cara memilih pengepul minyak jelantah terpercaya →'
    },
    {
      title: 'Cara Jual Minyak Jelantah: 3 Langkah Mudah (Gratis Jemput & Bayar Cash!)',
      excerpt: 'Panduan praktis jual minyak jelantah dalam 3 langkah: Hubungi kami, gratis jemput, bayar cash di tempat. Prosesnya cepat & mudah. Mulai sekarang!',
      link: '/blog/cara-jual-minyak-jelantah-3-langkah',
      icon: '🚀',
      anchorText: 'Cara jual minyak jelantah dalam 3 langkah mudah →'
    }
  ]

  return (
    <section className="py-20 bg-[#F9F8F6]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ARTIKEL PILAR
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
            Artikel Paling Dicari
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Artikel-artikel terpopuler yang banyak dibaca pengunjung kami. Pelajari tips dan strategi terbaik untuk jual minyak goreng bekas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="card-premium hover-lift group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-smooth">
                {article.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3 group-hover:text-[#134E3A] transition-smooth">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {article.excerpt}
              </p>
              <a
                href={article.link}
                className="inline-flex items-center gap-2 text-[#0F3D2E] font-semibold hover:gap-3 transition-smooth"
              >
                {article.anchorText}
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-[#0F3D2E] font-semibold text-lg hover:gap-3 transition-smooth"
          >
            Lihat semua artikel panduan minyak jelantah →
          </a>
        </div>
      </div>
    </section>
  )
}
