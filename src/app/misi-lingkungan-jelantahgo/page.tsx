import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Target, TrendingUp, Users, Award, CheckCircle, ArrowRight, MessageCircle, DollarSign, Truck, MapPin, Clock, Zap, CreditCard, Wallet, Smartphone, FileText, Scale, Shield, Leaf, Phone, Mail, Calendar, Star, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Misi Lingkungan JelantahGO | Mengubah Limbah Jadi Energi',
  description: 'Misi lingkungan JelantahGO: Mengubah 3 miliar liter minyak jelantah Indonesia menjadi biodiesel ramah lingkungan. Target 2030 bebas pencemaran jelantah.',
  alternates: {
    canonical: 'https://jelantahgo.com/misi-lingkungan-jelantahgo',
  },
  openGraph: {
    title: 'Misi Lingkungan JelantahGO | Mengubah Limbah Jadi Energi',
    description: 'Misi lingkungan JelantahGO: Mengubah 3 miliar liter minyak jelantah Indonesia menjadi biodiesel ramah lingkungan. Target 2030 bebas pencemaran jelantah.',
    url: 'https://jelantahgo.com/misi-lingkungan-jelantahgo',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/v1762937709/jelantahgo_hero_1_wwdp5p.webp',
        width: 1200,
        height: 630,
        alt: 'Misi Lingkungan JelantahGO',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Misi Lingkungan JelantahGO | Mengubah Limbah Jadi Energi',
    description: 'Misi lingkungan JelantahGO: Mengubah 3 miliar liter minyak jelantah Indonesia menjadi biodiesel ramah lingkungan.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/v1762937709/jelantahgo_hero_1_wwdp5p.webp'],
  },
}

export default function MengapaJelantahGoPage() {
  return (
    <>
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Misi Lingkungan JelantahGO - Mengubah Limbah Jadi Energi Bersih",
            "description": "Misi lingkungan JelantahGO: Mengubah 3 miliar liter minyak jelantah Indonesia menjadi biodiesel ramah lingkungan. Target 2030 bebas pencemaran jelantah.",
            "image": "https://res.cloudinary.com/dknswj9co/image/upload/v1762937709/jelantahgo_hero_1_wwdp5p.webp",
            "datePublished": "2025-01-12",
            "dateModified": "2025-01-12",
            "author": {
              "@type": "Organization",
              "name": "JelantahGO",
              "url": "https://jelantahgo.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "JelantahGO",
              "logo": {
                "@type": "ImageObject",
                "url": "https://res.cloudinary.com/dknswj9co/image/upload/v1761172234/favicon_jelantahgo_kjxjs4.webp"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://jelantahgo.com/misi-lingkungan-jelantahgo"
            }
          })
        }}
      />

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "JelantahGO",
            "description": "Platform pengepul minyak jelantah terpercaya dengan misi lingkungan mengubah limbah jadi energi bersih",
            "url": "https://jelantahgo.com",
            "foundingDate": "2020",
            "numberOfEmployees": "200+",
            "slogan": "Ubah Limbah Jadi Energi Bersih",
            "areaServed": ["Jakarta", "Bekasi", "Tangerang", "Depok", "Bogor"],
            "mission": "Mengubah 3 miliar liter minyak jelantah Indonesia menjadi biodiesel ramah lingkungan"
          })
        }}
      />

      {/* Hero Section */}
      <section className="hero-bg-dots py-20">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#D9E3D3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                🌍 MISI LINGKUNGAN
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 text-white">
                Misi Lingkungan JelantahGO
              </h1>
              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                Indonesia menghasilkan lebih dari 3 miliar liter minyak jelantah setiap tahunnya. Tanpa pengelolaan yang tepat, limbah ini menjadi ancaman serius bagi lingkungan kita. JelantahGO hadir dengan misi lingkungan yang jelas: mengubah limbah minyak jelantah menjadi sumber daya berkelanjutan untuk masa depan Indonesia yang lebih hijau.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/6285183033995?text=Halo%20JelantahGO,%20saya%20ingin%20kontribusi%20untuk%20lingkungan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#0F3D2E] hover:bg-[#F9F8F6] px-8 py-4 rounded-card font-bold text-lg flex items-center justify-center gap-2 transition-smooth shadow-soft-lg hover:shadow-soft-xl"
                >
                  🌱 Mulai Kontribusi
                </a>
                <a
                  href="#dampak"
                  className="bg-transparent border-2 border-white/30 hover:bg-white/10 hover:border-white text-white px-8 py-4 rounded-card font-bold text-lg flex items-center justify-center gap-2 transition-smooth"
                >
                  📊 Lihat Dampak
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-card-lg overflow-hidden shadow-layered hover:shadow-soft-xl transition-smooth">
                <Image
                  src="https://res.cloudinary.com/dknswj9co/image/upload/v1762937709/jelantahgo_hero_1_wwdp5p.webp"
                  alt="Misi Lingkungan JelantahGO"
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

      {/* Environmental Impact Section */}
      <section id="dampak" className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                ⚠️ DAMPAK LINGKUNGAN
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
                Dampak Minyak Jelantah terhadap Lingkungan
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Minyak jelantah yang dibuang sembarangan menciptakan masalah lingkungan yang kompleks. Satu liter minyak jelantah dapat mencemari hingga satu juta liter air.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Environmental Impact Cards */}
              <div className="card-premium">
                <div className="text-4xl mb-4">💧</div>
                <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Pencemaran Air</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ketika dibuang ke saluran pembuangan, minyak jelantah menyumbat pipa dan merusak sistem pengolahan air. Satu liter minyak jelantah dapat mencemari hingga satu juta liter air.
                </p>
              </div>

              <div className="card-premium">
                <div className="text-4xl mb-4">🐟</div>
                <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Kematian Ekosistem</h3>
                <p className="text-gray-600 leading-relaxed">
                  Di perairan, minyak jelantah membentuk lapisan yang menghalangi oksigen masuk ke dalam air. Ini mengancam kehidupan ikan dan organisme air lainnya.
                </p>
              </div>

              <div className="card-premium">
                <div className="text-4xl mb-4">🌫️</div>
                <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Polusi Udara</h3>
                <p className="text-gray-600 leading-relaxed">
                  Pembakaran minyak jelantah untuk memasak berulang kali menghasilkan senyawa karsinogenik yang membahayakan kesehatan dan berkontribusi pada polusi udara.
                </p>
              </div>

              <div className="card-premium">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Kerusakan Tanah</h3>
                <p className="text-gray-600 leading-relaxed">
                  Tanah yang terkontaminasi minyak jelantah kehilangan kesuburannya. Mikroorganisme tanah yang penting untuk pertanian mati, dan pemulihan membutuhkan waktu bertahun-tahun.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🎯 VISI KAMI
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-6">
              Visi Kami untuk Indonesia Berkelanjutan
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              JelantahGO memimpinkan Indonesia bebas dari pencemaran minyak jelantah pada tahun 2030. Visi ini bukan sekadar impian, melainkan target konkret yang kami kejar setiap hari. Kami percaya setiap tetes minyak jelantah memiliki potensi untuk diubah menjadi energi bersih.
            </p>
            <p className="text-xl font-semibold text-[#0F3D2E] mb-8">
              Misi lingkungan JelantahGO berfokus pada ekonomi sirkular. Kami mengubah paradigma "buang" menjadi "daur ulang". Minyak jelantah bukan lagi limbah, melainkan bahan baku bernilai tinggi untuk biodiesel dan produk ramah lingkungan lainnya.
            </p>
          </div>
        </div>
      </section>

      {/* Programs & Initiatives */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🌱 PROGRAM & INISIATIF
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Program dan Inisiatif Lingkungan
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kami aktif berkontribusi untuk lingkungan melalui berbagai program yang berdampak nyata
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Program Edukasi */}
            <div className="card-premium">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Program Edukasi Masyarakat</h3>
              <p className="text-gray-600 leading-relaxed">
                JelantahGO aktif mengedukasi masyarakat tentang bahaya minyak jelantah. Kami mengadakan workshop di sekolah, kampus, dan komunitas. Peserta belajar cara pengelolaan minyak jelantah yang benar dan dampaknya bagi lingkungan.
              </p>
            </div>

            {/* Biodiesel Production */}
            <div className="card-premium">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Jelantah untuk Energi Bersih</h3>
              <p className="text-gray-600 leading-relaxed">
                Minyak jelantah yang terkumpul diolah menjadi biodiesel berkualitas tinggi. Biodiesel ini mengurangi emisi karbon hingga 86% dibanding solar konvensional. Setiap liter biodiesel dari minyak jelantah menyelamatkan lingkungan dari 2.5 kg emisi CO2.
              </p>
            </div>

            {/* Green Partnership */}
            <div className="card-premium">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Green Partnership Program</h3>
              <p className="text-gray-600 leading-relaxed">
                Kami bermitra dengan perusahaan yang berkomitmen pada sustainability. Partner mendapat sertifikat green business dan laporan dampak lingkungan. Program ini menciptakan ekosistem bisnis yang peduli lingkungan.
              </p>
            </div>

            {/* Collection Points */}
            <div className="card-premium">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Community Collection Points</h3>
              <p className="text-gray-600 leading-relaxed">
                JelantahGO membangun titik pengumpulan di berbagai lokasi strategis. Masyarakat dapat menyetorkan minyak jelantah dengan mudah. Setiap kontribusi dihargai dengan poin reward yang dapat ditukar dengan produk ramah lingkungan.
              </p>
            </div>

            {/* R&D */}
            <div className="card-premium">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Research & Development</h3>
              <p className="text-gray-600 leading-relaxed">
                Tim R&D kami terus berinovasi mencari penggunaan baru minyak jelantah. Dari sabun organik hingga pelumas ramah lingkungan, kami eksplorasi setiap kemungkinan. Inovasi ini membuka peluang ekonomi baru dari limbah.
              </p>
            </div>

            {/* CSR Activities */}
            <div className="card-premium">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Aktivitas CSR</h3>
              <p className="text-gray-600 leading-relaxed">
                Program CSR meliputi edukasi lingkungan, beach cleanup, tree planting, dan program daur ulang komunitas. Setiap aktivitas dirancang untuk memberikan dampak maksimal bagi lingkungan dan masyarakat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="space-y-16 max-w-5xl mx-auto">
            {/* Keunggulan 1: Harga Tertinggi */}
            <div className="card-premium">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#0F3D2E] to-[#134E3A] text-white rounded-full flex items-center justify-center font-bold text-2xl">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#0F3D2E] mb-3 flex items-center gap-3">
                    <DollarSign className="w-8 h-8" />
                    Harga Tertinggi & Transparan di Pasaran
                  </h3>
                  <p className="text-gray-700 text-lg font-semibold">
                    Kami berani jamin harga kami paling tinggi.
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">
                    <strong>Rp 7.500-8.500/liter</strong> (tergantung volume & lokasi)
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Harga update real-time bisa dicek di kalkulator kami</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">
                    <strong>Price matching:</strong> Dapat harga lebih tinggi? Kami cocokkan!
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">
                    <strong>Kontrak 3 bulan:</strong> Lock harga untuk stabilitas income
                  </span>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-card mb-6">
                <h4 className="font-bold text-[#0F3D2E] mb-3 text-lg">Kenapa harga kami lebih tinggi?</h4>
                <p className="text-gray-700">
                  Kami langsung supply ke pabrik biodiesel—tidak ada middleman yang ambil untung di tengah.
                  Margin yang biasanya hilang, kami berikan ke Anda.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-card border-2 border-blue-200">
                <div className="flex items-start gap-4">
                  <Star className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-700 mb-2 italic">
                      "Pengepul lama saya bayar Rp 6.000/L, JelantahGo bayar Rp 8.000/L.
                      Selisih Rp 2.000 × 50 liter = <strong className="text-[#0F3D2E]">Rp 100.000 lebih banyak per bulan!</strong>"
                    </p>
                    <p className="text-sm text-gray-600 font-semibold">— Ibu Sari, Restoran Padang, Tebet</p>
                    <div className="flex gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 bg-[#0F3D2E] text-white px-6 py-3 rounded-card font-bold hover:bg-[#134E3A] transition-all"
                >
                  Cek Harga Hari Ini
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Keunggulan 2: Pickup Express */}
            <div className="card-premium">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#0F3D2E] to-[#134E3A] text-white rounded-full flex items-center justify-center font-bold text-2xl">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#0F3D2E] mb-3 flex items-center gap-3">
                    <Zap className="w-8 h-8" />
                    Pickup Express: 2-6 Jam (Same Day Guarantee)
                  </h3>
                  <p className="text-gray-700 text-lg font-semibold">
                    Kami tahu waktu Anda berharga.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-card border-2 border-green-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-6 h-6 text-green-600" />
                    <span className="font-bold text-[#0F3D2E]">Jakarta Pusat/Selatan</span>
                  </div>
                  <p className="text-gray-700 text-lg">2-4 jam</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-card border-2 border-blue-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-6 h-6 text-blue-600" />
                    <span className="font-bold text-[#0F3D2E]">Jakarta Utara/Barat</span>
                  </div>
                  <p className="text-gray-700 text-lg">3-5 jam</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-card border-2 border-purple-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-6 h-6 text-purple-600" />
                    <span className="font-bold text-[#0F3D2E]">Bekasi/Tangerang/Depok</span>
                  </div>
                  <p className="text-gray-700 text-lg">4-6 jam</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-card border-2 border-orange-200">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle className="w-6 h-6 text-orange-600" />
                    <span className="font-bold text-[#0F3D2E]">Same Day Service</span>
                  </div>
                  <p className="text-gray-700 text-lg">Order sebelum jam 15:00</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-card mb-6">
                <h4 className="font-bold text-[#0F3D2E] mb-4 text-lg">Armada kami:</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-start gap-3">
                    <Truck className="w-6 h-6 text-[#0F3D2E] flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">20+ mobil pickup</p>
                      <p className="text-sm text-gray-600">Tersebar strategis</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-[#0F3D2E] flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">GPS tracking</p>
                      <p className="text-sm text-gray-600">Real-time monitoring</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-[#0F3D2E] flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Team terlatih</p>
                      <p className="text-sm text-gray-600">Profesional & uniformed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-card border-2 border-blue-200 mb-6">
                <h4 className="font-bold text-[#0F3D2E] mb-3 text-lg">Scheduled Pickup untuk Volume Rutin:</h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Mingguan, 2x seminggu, atau custom schedule</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Tidak perlu telepon berulang kali</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Auto-reminder H-1</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-card border-2 border-green-200">
                <div className="flex items-start gap-4">
                  <Star className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-700 mb-2 italic">
                      "Saya WhatsApp jam 10 pagi, tim datang jam 1 siang. <strong className="text-[#0F3D2E]">Cepat banget!</strong>"
                    </p>
                    <p className="text-sm text-gray-600 font-semibold">— Pak Budi, Kafe BSD</p>
                    <div className="flex gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <a
                  href="https://wa.me/6285183033995?text=Halo%20JelantahGo,%20saya%20ingin%20jadwalkan%20pickup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0F3D2E] text-white px-6 py-3 rounded-card font-bold hover:bg-[#134E3A] transition-all"
                >
                  Jadwalkan Pickup Sekarang
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Keunggulan 3: Pembayaran Instant */}
            <div className="card-premium">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#0F3D2E] to-[#134E3A] text-white rounded-full flex items-center justify-center font-bold text-2xl">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#0F3D2E] mb-3 flex items-center gap-3">
                    <CreditCard className="w-8 h-8" />
                    Pembayaran Instant & Fleksibel
                  </h3>
                  <p className="text-gray-700 text-lg font-semibold">
                    Bayar langsung di tempat, tidak ada tunggu-tunggu.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-card mb-6">
                <h4 className="font-bold text-[#0F3D2E] mb-4 text-lg">Metode Pembayaran:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Wallet className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Cash on the spot</p>
                      <p className="text-sm text-gray-600">Langsung terima uang</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CreditCard className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Transfer bank instant</p>
                      <p className="text-sm text-gray-600">BCA, Mandiri, BNI, BRI</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Smartphone className="w-6 h-6 text-purple-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">E-wallet</p>
                      <p className="text-sm text-gray-600">GoPay, OVO, DANA, ShopeePay</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText className="w-6 h-6 text-orange-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Receipt resmi</p>
                      <p className="text-sm text-gray-600">Untuk setiap transaksi</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-card border-2 border-blue-200 mb-6">
                <h4 className="font-bold text-[#0F3D2E] mb-3 text-lg">Untuk Corporate/Restoran:</h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Invoice proper untuk pembukuan</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Monthly report detail</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Dedicated account manager</span>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-card border-2 border-red-200 mb-6">
                <h4 className="font-bold text-red-700 mb-3 text-lg">Tidak ada:</h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 text-xl flex-shrink-0">✗</span>
                    <span className="text-gray-700">Hutang/tempo</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 text-xl flex-shrink-0">✗</span>
                    <span className="text-gray-700">Potongan tidak jelas</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 text-xl flex-shrink-0">✗</span>
                    <span className="text-gray-700">"Nanti saya transfer ya"</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-card border-2 border-green-200">
                <div className="flex items-start gap-4">
                  <Star className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-700 mb-2 italic">
                      "Langsung terima transfer sebelum tim nya pergi. <strong className="text-[#0F3D2E]">Transparansi 100%!</strong>"
                    </p>
                    <p className="text-sm text-gray-600 font-semibold">— Pak Joko, Hotel Santika</p>
                    <div className="flex gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Keunggulan 4: Timbangan Digital */}
            <div className="card-premium">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#0F3D2E] to-[#134E3A] text-white rounded-full flex items-center justify-center font-bold text-2xl">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#0F3D2E] mb-3 flex items-center gap-3">
                    <Scale className="w-8 h-8" />
                    Timbangan Digital Transparan
                  </h3>
                  <p className="text-gray-700 text-lg font-semibold">
                    Lihat sendiri beratnya, tidak ada kecurangan.
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Timbangan digital certified (akurasi 99.9%)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Layar besar (customer bisa lihat jelas)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Foto struk timbangan dikirim via WhatsApp</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Calibration regular setiap bulan</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-card border-2 border-blue-200 mb-6">
                <h4 className="font-bold text-[#0F3D2E] mb-4 text-lg">Proses Timbang:</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#0F3D2E] text-white rounded-full flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Jerigen kosong ditimbang dulu (tara)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#0F3D2E] text-white rounded-full flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Jerigen isi ditimbang (gross)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#0F3D2E] text-white rounded-full flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Net weight = gross - tara</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#0F3D2E] text-white rounded-full flex items-center justify-center font-bold text-sm">
                      4
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Hitung otomatis: Net weight × harga</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-card border-2 border-green-200 mb-6 text-center">
                <p className="text-xl font-bold text-[#0F3D2E]">
                  100% fair, 0% curang.
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-card border-2 border-green-200">
                <div className="flex items-start gap-4">
                  <Star className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-700 mb-2 italic">
                      "Pertama kali pakai pengepul yang timbang di depan saya. <strong className="text-[#0F3D2E]">Trust level 10/10!</strong>"
                    </p>
                    <p className="text-sm text-gray-600 font-semibold">— Ibu Dewi, Katering Kemang</p>
                    <div className="flex gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Keunggulan 5: Legal & Tersertifikasi */}
            <div className="card-premium">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#0F3D2E] to-[#134E3A] text-white rounded-full flex items-center justify-center font-bold text-2xl">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#0F3D2E] mb-3 flex items-center gap-3">
                    <Shield className="w-8 h-8" />
                    Legal, Terdaftar, dan Tersertifikasi
                  </h3>
                  <p className="text-gray-700 text-lg font-semibold">
                    Kami bukan pengepul abal-abal.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-card mb-6">
                <h4 className="font-bold text-[#0F3D2E] mb-4 text-lg">Legalitas Lengkap:</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      <strong>NIB (Nomor Induk Berusaha):</strong> Terdaftar resmi
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">Izin pengangkutan limbah B3 dari KLHK</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">Sertifikat ISO 14001 (Environmental Management)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">Partner resmi Pertamina untuk biodiesel</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-card border-2 border-blue-200 mb-6">
                <h4 className="font-bold text-[#0F3D2E] mb-3 text-lg">Keuntungan untuk Anda:</h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Sertifikat kontribusi lingkungan (untuk CSR report)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Tax benefit documentation (pengelolaan limbah)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Audit trail lengkap untuk compliance</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Asuransi transaksi (protected up to Rp 100 juta)</span>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-card border-2 border-yellow-200">
                <div className="flex items-start gap-3">
                  <Award className="w-8 h-8 text-yellow-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-[#0F3D2E] mb-2 text-lg">Untuk Corporate:</h4>
                    <p className="text-gray-700">
                      Kami satu-satunya pengepul yang bisa kasih dokumentasi lengkap untuk audit external.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Keunggulan 6: Platform Digital */}
            <div className="card-premium">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#0F3D2E] to-[#134E3A] text-white rounded-full flex items-center justify-center font-bold text-2xl">
                  6
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#0F3D2E] mb-3 flex items-center gap-3">
                    <Smartphone className="w-8 h-8" />
                    Platform Digital: Semua Serba Mudah
                  </h3>
                  <p className="text-gray-700 text-lg font-semibold">
                    Manage semua dari HP Anda.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-card mb-6">
                <h4 className="font-bold text-[#0F3D2E] mb-4 text-lg">Fitur Web & App:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Target className="w-6 h-6 text-[#0F3D2E] flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Dashboard personal</p>
                      <p className="text-sm text-gray-600">Tracking history, income, volume</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-6 h-6 text-[#0F3D2E] flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Booking system</p>
                      <p className="text-sm text-gray-600">Jadwal pickup online</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <DollarSign className="w-6 h-6 text-[#0F3D2E] flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Live pricing</p>
                      <p className="text-sm text-gray-600">Cek harga real-time</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-[#0F3D2E] flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Income analytics</p>
                      <p className="text-sm text-gray-600">Lihat performance bulanan</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-6 h-6 text-[#0F3D2E] flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Loyalty points</p>
                      <p className="text-sm text-gray-600">Tracking reward & bonus</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-card border-2 border-blue-200 mb-6">
                <h4 className="font-bold text-[#0F3D2E] mb-4 text-lg">Customer Service Multi-Channel:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">WhatsApp Business</p>
                      <p className="text-sm text-gray-600">Response &lt;15 menit</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Call center</p>
                      <p className="text-sm text-gray-600">08:00-20:00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-6 h-6 text-purple-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Live chat</p>
                      <p className="text-sm text-gray-600">Di website</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-6 h-6 text-orange-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Email support</p>
                      <p className="text-sm text-gray-600">24/7 monitoring</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-card border-2 border-green-200 mb-6">
                <h4 className="font-bold text-[#0F3D2E] mb-3 text-lg">Notifikasi Otomatis:</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Konfirmasi booking</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Driver on the way</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Pickup completed</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Payment received</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-card border-2 border-green-200">
                <div className="flex items-start gap-4">
                  <Star className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-700 mb-2 italic">
                      "Enak banget ada dashboard. Bisa pantau income dari jelantah tiap bulan.
                      <strong className="text-[#0F3D2E]">Kayak nge-track bisnis sendiri!</strong>"
                    </p>
                    <p className="text-sm text-gray-600 font-semibold">— Ibu Linda, Program RT Pluit</p>
                    <div className="flex gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Keunggulan 7: Dampak Lingkungan */}
            <div className="card-premium">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#0F3D2E] to-[#134E3A] text-white rounded-full flex items-center justify-center font-bold text-2xl">
                  7
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#0F3D2E] mb-3 flex items-center gap-3">
                    <Leaf className="w-8 h-8" />
                    Dampak Positif untuk Lingkungan
                  </h3>
                  <p className="text-gray-700 text-lg font-semibold">
                    Jual jelantah = selamatkan lingkungan.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-card border-2 border-green-200 mb-6">
                <h4 className="font-bold text-[#0F3D2E] mb-4 text-lg">Impact JelantahGo per Tahun:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🌍</span>
                    <span className="text-gray-700"><strong>500+ ton</strong> jelantah diselamatkan dari pencemaran</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💧</span>
                    <span className="text-gray-700"><strong>5 juta liter</strong> air terlindungi dari kontaminasi</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🐟</span>
                    <span className="text-gray-700">Ekosistem sungai Jakarta <strong>lebih sehat</strong></span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">♻️</span>
                    <span className="text-gray-700"><strong>150 ton</strong> biodiesel diproduksi</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🌳</span>
                    <span className="text-gray-700">Carbon offset setara <strong>10,000 pohon</strong></span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-card border-2 border-blue-200 mb-6">
                <h4 className="font-bold text-[#0F3D2E] mb-3 text-lg">Setiap 1 liter jelantah yang Anda jual:</h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Mencegah <strong>10 liter air</strong> tercemar</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Reduce <strong>0.5 kg CO₂</strong> emission</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Support <strong>energy independence</strong> Indonesia</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-card mb-6">
                <h4 className="font-bold text-[#0F3D2E] mb-3 text-lg">Program CSR:</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl mb-2">🏫</div>
                    <p className="text-gray-700">Edukasi ke <strong>50+ sekolah/tahun</strong></p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🌊</div>
                    <p className="text-gray-700">Beach cleanup <strong>collaboration</strong></p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🌳</div>
                    <p className="text-gray-700">Tree planting <strong>program</strong></p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-card border-2 border-green-300 text-center">
                <p className="text-xl font-bold text-[#0F3D2E]">
                  Anda bukan cuma dapat uang—Anda jadi pahlawan lingkungan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Bukti Nyata: Numbers Don't Lie
            </h2>
            <p className="text-gray-600 text-lg">
              Data yang membuktikan kepercayaan customer
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { number: '10,000+', label: 'Customer Aktif' },
              { number: '1,000+', label: 'Restoran Partner' },
              { number: '500 Ton', label: 'Jelantah/Tahun' },
              { number: 'Rp 5 Miliar', label: 'Distributed ke Customer' },
              { number: '4.8/5', label: 'Rating (2,341 reviews)' },
              { number: '98%', label: 'Customer Satisfaction' },
              { number: '127', label: 'RT/RW Partner' },
              { number: '45', label: 'Sekolah Partner' },
            ].map((stat, index) => (
              <div key={index} className="card-premium text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm lg:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Apa Kata Mereka yang Sudah Pakai JelantahGo
            </h2>
            <p className="text-gray-600 text-lg">
              Real stories dari customer kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                type: 'Rumah Tangga',
                quote: 'Awalnya skeptis, kok bisa harga tinggi. Ternyata legit! Sekarang rutin jual 15L/bulan, dapat Rp 120rb. Lumayan banget buat bayar listrik.',
                author: 'Ibu Maria, Kelapa Gading'
              },
              {
                type: 'Restoran',
                quote: 'Sudah 2 tahun pakai JelantahGo. Income dari jelantah bisa Rp 2,5 juta/bulan. Yang dulu jadi limbah, sekarang jadi profit.',
                author: 'Pak Udin, Restoran Padang Sederhana'
              },
              {
                type: 'Hotel',
                quote: 'JelantahGo satu-satunya pengepul yang kasih dokumentasi lengkap untuk audit. Professional banget!',
                author: 'GM Hotel Santika, SCBD'
              },
              {
                type: 'Komunitas',
                quote: 'Program RT kami sudah jalan 1 tahun. Dari jelantah warga, kas RT dapat tambahan Rp 1,5 juta/bulan!',
                author: 'Pak RT 05, Pluit'
              },
            ].map((testimonial, index) => (
              <div key={index} className="card-premium">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="inline-block bg-[#D9E3D3] text-[#0F3D2E] px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  {testimonial.type}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <p className="text-sm text-gray-600 font-semibold">
                  — {testimonial.author}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/testimoni"
              className="inline-flex items-center gap-2 text-[#0F3D2E] font-semibold hover:underline"
            >
              Baca 500+ Testimoni Lainnya
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
                Masih Ragu? Kami Jawab Kekhawatiran Anda
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: 'Apa bedanya JelantahGo dengan yang lain?',
                  a: 'Simple: Kami platform digital, bukan pengepul jalanan. Ada system, ada tracking, ada guarantee. Seperti beda ojek pangkalan vs Gojek.'
                },
                {
                  q: 'Kok harganya bisa lebih tinggi?',
                  a: 'Karena supply chain kami efisien. Direct ke pabrik, no middleman. Kami ambil margin tipis, fokus ke volume & kepuasan customer.'
                },
                {
                  q: 'Apakah pickup benar-benar gratis?',
                  a: 'Yes, 100% gratis untuk minimum 5 liter area Jabodetabek. No hidden cost, no charge tambahan.'
                },
                {
                  q: 'Bagaimana jika saya punya volume kecil?',
                  a: 'No problem! Mulai dari 5 liter saja sudah bisa. Atau gabung dengan tetangga untuk pooling volume.'
                },
                {
                  q: 'Apakah aman & legal?',
                  a: 'Sangat aman. Kami punya izin lengkap, asuransi transaksi, dan sudah melayani 10,000+ customer tanpa masalah.'
                },
              ].map((faq, index) => (
                <div key={index} className="card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-gray-700">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href="/cara-jual-minyak-jelantah"
                className="inline-flex items-center gap-2 text-[#0F3D2E] font-semibold hover:underline"
              >
                Lihat FAQ Lengkap
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-bg-dots">
        <div className="container-custom text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
              Siap Rasakan Perbedaannya?
            </h2>
            <p className="text-xl mb-4 text-white/90">
              Mulai Jual Jelantah dengan Platform Terbaik Hari Ini
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-card-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Promo Spesial untuk New Customer:
              </h3>
              <div className="grid md:grid-cols-3 gap-4 text-left">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎁</span>
                  <span className="text-white">Bonus <strong>Rp 50.000</strong> untuk penjualan pertama &gt;20L</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎁</span>
                  <span className="text-white"><strong>Free jerigen</strong> untuk volume &gt;30L</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎁</span>
                  <span className="text-white"><strong>Priority pickup</strong> untuk order hari ini</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-card-lg p-8 mb-8 text-left">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Langkah Mudah:
              </h3>
              <div className="space-y-3 max-w-2xl mx-auto">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white text-[#0F3D2E] rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <span className="text-white text-lg">WhatsApp kami di bawah ini</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white text-[#0F3D2E] rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <span className="text-white text-lg">Jadwalkan pickup</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white text-[#0F3D2E] rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <span className="text-white text-lg">Terima pembayaran instant</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white text-[#0F3D2E] rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <span className="text-white text-lg">Nikmati income tambahan rutin!</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href="https://wa.me/6285183033995?text=Halo%20JelantahGo,%20saya%20ingin%20mulai%20jual%20jelantah"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0F3D2E] px-8 py-4 rounded-card font-bold hover:bg-[#D9E3D3] transition-all shadow-soft-lg hover:shadow-soft-xl"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp: 0851-8303-3995
              </a>
              <a
                href="tel:+6285183033995"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-card font-bold hover:bg-white/20 transition-all"
              >
                <Phone className="w-5 h-5" />
                Telepon: 021-XXXX-XXXX
              </a>
            </div>

            <div className="bg-green-50/20 backdrop-blur-sm rounded-card p-4 inline-block">
              <p className="text-white flex items-center gap-2 justify-center">
                <Zap className="w-5 h-5" />
                <span className="font-bold">Fast Response Guarantee:</span>
                <span>Tim online 24/7, average response time 10 menit!</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Area Coverage */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
                Kami Melayani Seluruh Jabodetabek
              </h2>
            </div>

            <div className="card-premium">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-6 text-center">
                Area Coverage:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { area: 'Jakarta', detail: 'Utara, Barat, Timur, Selatan, Pusat' },
                  { area: 'Bekasi', detail: 'Kota & Kabupaten' },
                  { area: 'Tangerang', detail: 'Kota, Selatan, BSD' },
                  { area: 'Depok', detail: 'Semua kecamatan' },
                  { area: 'Bogor', detail: 'Kota, Sentul, Cibinong' },
                ].map((location, index) => (
                  <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-card">
                    <MapPin className="w-6 h-6 text-[#0F3D2E] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-gray-900">{location.area}</p>
                      <p className="text-sm text-gray-600">{location.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Link
                  href="/area-layanan"
                  className="inline-flex items-center gap-2 text-[#0F3D2E] font-semibold hover:underline"
                >
                  Cek Coverage Area Lengkap
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Lebih Lanjut */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
                Explore Lebih Lanjut
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="card-premium">
                <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Untuk Segmen Spesifik:</h3>
                <div className="space-y-3">
                  <Link href="/mitra" className="flex items-center justify-between p-3 bg-gray-50 rounded-card hover:bg-gray-100 transition-colors">
                    <span className="text-gray-700">Solusi untuk Restoran</span>
                    <ArrowRight className="w-5 h-5 text-[#0F3D2E]" />
                  </Link>
                  <Link href="/mitra" className="flex items-center justify-between p-3 bg-gray-50 rounded-card hover:bg-gray-100 transition-colors">
                    <span className="text-gray-700">Solusi untuk Hotel</span>
                    <ArrowRight className="w-5 h-5 text-[#0F3D2E]" />
                  </Link>
                  <Link href="/cara-jual-minyak-jelantah" className="flex items-center justify-between p-3 bg-gray-50 rounded-card hover:bg-gray-100 transition-colors">
                    <span className="text-gray-700">Solusi untuk Rumah Tangga</span>
                    <ArrowRight className="w-5 h-5 text-[#0F3D2E]" />
                  </Link>
                  <Link href="/mitra" className="flex items-center justify-between p-3 bg-gray-50 rounded-card hover:bg-gray-100 transition-colors">
                    <span className="text-gray-700">Program Komunitas</span>
                    <ArrowRight className="w-5 h-5 text-[#0F3D2E]" />
                  </Link>
                </div>
              </div>

              <div className="card-premium">
                <h3 className="text-xl font-bold text-[#0F3D2E] mb-4">Tools & Resources:</h3>
                <div className="space-y-3">
                  <Link href="/pricing" className="flex items-center justify-between p-3 bg-gray-50 rounded-card hover:bg-gray-100 transition-colors">
                    <span className="text-gray-700">Kalkulator Harga</span>
                    <ArrowRight className="w-5 h-5 text-[#0F3D2E]" />
                  </Link>
                  <Link href="/cara-jual-minyak-jelantah" className="flex items-center justify-between p-3 bg-gray-50 rounded-card hover:bg-gray-100 transition-colors">
                    <span className="text-gray-700">Panduan Lengkap</span>
                    <ArrowRight className="w-5 h-5 text-[#0F3D2E]" />
                  </Link>
                  <Link href="/testimoni" className="flex items-center justify-between p-3 bg-gray-50 rounded-card hover:bg-gray-100 transition-colors">
                    <span className="text-gray-700">Success Stories</span>
                    <ArrowRight className="w-5 h-5 text-[#0F3D2E]" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="card-premium bg-gradient-to-r from-[#0F3D2E] to-[#134E3A] text-white">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">About Us:</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <Link href="/about" className="flex items-center justify-center gap-2 p-4 bg-white/10 rounded-card hover:bg-white/20 transition-colors">
                    <span>Tentang JelantahGo</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                  <Link href="/cara-kerja" className="flex items-center justify-center gap-2 p-4 bg-white/10 rounded-card hover:bg-white/20 transition-colors">
                    <span>Cara Kerja</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                  <Link href="/about" className="flex items-center justify-center gap-2 p-4 bg-white/10 rounded-card hover:bg-white/20 transition-colors">
                    <span>Misi Lingkungan</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Footer CTA */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Kesimpulan: Mengapa JelantahGo?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Karena kami bukan sekadar pengepul—kami partner terpercaya untuk income tambahan Anda.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                'Harga tertinggi',
                'Pickup tercepat',
                'Pembayaran instant',
                'Legal & tersertifikasi',
                'Platform digital modern',
                'Dampak lingkungan nyata',
                '10,000+ customer puas',
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 text-left">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 text-lg font-semibold">{benefit}</span>
                </div>
              ))}
            </div>

            <p className="text-xl font-bold text-[#0F3D2E] mb-8">
              Jangan settle dengan pengepul biasa. Anda deserve the best.
            </p>

            <a
              href="https://wa.me/6285183033995?text=Halo%20JelantahGo,%20saya%20ingin%20mulai%20sekarang"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#0F3D2E] text-white px-8 py-4 rounded-card font-bold hover:bg-[#134E3A] transition-all shadow-soft-lg hover:shadow-soft-xl text-lg"
            >
              Mulai Sekarang
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
