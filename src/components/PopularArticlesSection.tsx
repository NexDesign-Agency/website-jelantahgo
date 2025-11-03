import Link from 'next/link'

export default function PopularArticlesSection() {
  const articles = [
    {
      title: 'Cara Jual Jelantah Menguntungkan: 5 Strategi',
      excerpt: 'Pelajari 5 strategi jual minyak jelantah yang paling menguntungkan. Tips memilih pengepul terpercaya dan teknik negosiasi harga.',
      link: '/blog/cara-jual-jelantah-menguntungkan',
      icon: '💰'
    },
    {
      title: '5 Ciri Pengepul Jelantah Nakal & Cara Menghindarinya',
      excerpt: 'Jangan tertipu! Kenali 5 ciri pengepul minyak jelantah nakal, dari permainan harga, timbangan curang, hingga pembayaran fiktif.',
      link: '/blog/ciri-pengepul-jelantah-nakal',
      icon: '⚠️'
    },
    {
      title: 'Waktu Terbaik Jual Minyak Jelantah: Strategi Optimal',
      excerpt: 'Pelajari kapan waktu terbaik menjual minyak jelantah untuk dapat harga tertinggi. Strategi musim, volume, dan faktor yang mempengaruhi harga.',
      link: '/blog/waktu-terbaik-jual-jelantah',
      icon: '📅'
    },
    {
      title: '5 Langkah Negosiasi Harga Pengepul Jelantah',
      excerpt: 'Pelajari 5 langkah negosiasi harga dengan pengepul jelantah. Tips pahami kualitas, riset harga pasar, dan strategi dapat harga terbaik.',
      link: '/blog/negosiasi-harga-pengepul',
      icon: '🤝'
    },
    {
      title: 'Kisah Sukses Ibu Rina | Mitra Pengepul Omzet Jutaan',
      excerpt: 'Kisah inspiratif Ibu Rina, ibu rumah tangga yang membangun usaha pengepul jelantah dari dapur rumah hingga omzet 3-3,5 juta per bulan.',
      link: '/blog/kisah-sukses-ibu-rina',
      icon: '🌟'
    },
    {
      title: 'Bahaya Buang Jelantah Sembarangan | Dampak Lingkungan',
      excerpt: 'Jangan buang jelantah sembarangan! Pelajari bahaya jelantah untuk lingkungan dan kesehatan: pencemaran air, kerusakan ekosistem, hingga risiko kesehatan.',
      link: '/blog/bahaya-buang-jelantah-sembarangan',
      icon: '🌱'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ARTIKEL POPULER
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
            Artikel Paling Dicari
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Artikel-artikel terpopuler yang banyak dibaca pengunjung kami. Pelajari tips dan strategi terbaik untuk jual minyak jelantah.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <Link
                href={article.link}
                className="inline-flex items-center gap-2 text-[#0F3D2E] font-semibold hover:gap-3 transition-smooth"
              >
                Baca Selengkapnya →
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#0F3D2E] font-semibold text-lg hover:gap-3 transition-smooth"
          >
            Jelajahi Semua Artikel →
          </Link>
        </div>
      </div>
    </section>
  )
}

