export default function BlogSection() {
  const articles = [
    {
      title: 'Panduan Terlengkap Jual Minyak Jelantah 2025',
      excerpt: 'Semua yang perlu Anda tahu, dari cara menyimpan, cek harga, hingga memilih pengepul terpercaya...',
      link: '/blog/panduan-jual-minyak-jelantah',
      icon: '📖'
    },
    {
      title: 'Bahaya & Peluang Emas Minyak Jelantah',
      excerpt: 'Mengapa jelantah dianggap limbah berbahaya? Dan bagaimana ia bisa menjadi peluang ekonomi hijau? Temukan jawabannya...',
      link: '/blog/ancaman-dan-peluang-minyak-jelantah',
      icon: '⚠️'
    },
    {
      title: 'Peluang Bisnis Pengepul Jelantah: Modal & Untung',
      excerpt: 'Analisis lengkap modal, potensi keuntungan puluhan juta, dan strategi untuk memulai bisnis jelantah dari nol...',
      link: '/blog/peluang-bisnis-pengepul-jelantah',
      icon: '💼'
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
                Baca Selengkapnya →
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-[#0F3D2E] font-semibold text-lg hover:gap-3 transition-smooth"
          >
            Lihat Semua Artikel →
          </a>
        </div>
      </div>
    </section>
  )
}
