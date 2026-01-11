'use client'

import Image from 'next/image'
import Link from 'next/link'
import BlogSidebar from '@/components/BlogSidebar'
import BlogArticleFooter from '@/components/BlogArticleFooter'
import ArticleSchema from '@/components/ArticleSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { AlertTriangle, Droplets, Construction, Shield } from 'lucide-react'

export default function ArticleContent() {
  return (
    <>
      <ArticleSchema
        title="Fatberg: Monster Bawah Tanah dari Jelantah"
        description="Fatberg adalah gumpalan raksasa di saluran pembuangan yang terbentuk dari jelantah. Pelajari bagaimana jelantah Anda bisa menjadi monster bawah tanah yang melumpuhkan kota."
        image="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163997/jelantahgo_21_skuom5.webp"
        datePublished="2025-10-18"
        dateModified="2025-10-18"
        articleUrl="https://jelantahgo.com/blog/fatberg-monster-bawah-tanah-jelantah"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://jelantahgo.com' },
          { name: 'Blog', url: 'https://jelantahgo.com/blog' },
          { name: 'Fatberg: Monster Bawah Tanah dari Jelantah', url: 'https://jelantahgo.com/blog/fatberg-monster-bawah-tanah-jelantah' },
        ]}
      />
      {/* Hero Section */}
      <section className="hero-bg-dots py-20 lg:py-28">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-[#D9E3D3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Dampak & Daur Ulang Jelantah
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Fatberg: Monster Bawah Tanah
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Yang Lahir dari Jelantah Dapur Anda
            </p>
            <p className="text-sm text-white/80 mt-2">Terakhir diperbarui: 31 Oktober 2025</p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <Image
            src="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761163997/jelantahgo_21_skuom5.webp"
            alt="Fatberg: Monster Bawah Tanah"
            width={1200}
            height={630}
            className="w-full max-w-4xl mx-auto rounded-card-lg shadow-layered"
            loading="lazy"
          />
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Jauh di bawah jalanan kota yang ramai, di dalam labirin pipa pembuangan yang gelap dan lembap, sesosok monster sedang tumbuh. Ia tidak memiliki mata, tidak bernapas, dan tidak bersuara, tetapi ia mampu melumpuhkan sebuah kota dari bawah ke atas. Monster ini bernama <strong>Fatberg</strong>, sebuah gumpalan raksasa sekeras beton yang lahir dari kebiasaan kita sehari-hari di dapur.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Setiap kali Anda menuang sisa minyak jelantah ke wastafel, Anda sedang memberinya makan. Fenomena fatberg adalah salah satu <Link href="/blog/ancaman-dan-peluang-minyak-jelantah" className="text-[#0F3D2E] font-semibold hover:underline">ancaman lingkungan paling nyata</Link> dari pengelolaan limbah yang buruk. Artikel ini adalah bagian dari eksplorasi lengkap tentang <Link href="/blog/ancaman-dan-peluang-minyak-jelantah" className="text-[#0F3D2E] font-semibold hover:underline">bahaya dan peluang emas minyak jelantah</Link>.
            </p>

            {/* Anatomi */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#0F3D2E] mb-6">Anatomi Fatberg: Apa Sebenarnya Monster Ini?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Istilah "Fatberg" adalah gabungan dari kata "Fat" (lemak) dan "Iceberg" (gunung es). Secara komposisi, fatberg adalah massa padat yang menjijikkan, terdiri dari dua bahan utama:
              </p>
              <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
                <li><strong>"Lem" - FOG (Fats, Oils, and Grease):</strong> Ini adalah minyak jelantah, lemak sisa memasak daging, mentega, dan segala jenis minyak yang seharusnya tidak pernah masuk ke saluran pembuangan.</li>
                <li><strong>"Kerangka" - Sampah Non-Flushable:</strong> Ini adalah semua benda padat yang seringkali salah dibuang ke toilet. Pelaku utamanya adalah <strong>tisu basah</strong> (wet wipes), yang tidak hancur seperti tisu toilet. Benda lain termasuk kapas, pembalut, popok, benang gigi, dan kondom.</li>
              </ol>
              <p className="text-gray-700 leading-relaxed">
                Lemak (FOG) bertindak sebagai perekat super. Ia melapisi dinding pipa, dan saat sampah non-flushable lewat, mereka akan menempel. Lapisan demi lapisan terus menumpuk. Melalui proses kimia yang disebut <strong>saponifikasi</strong>, massa ini perlahan-lahan mengeras, mengubahnya dari gumpalan lembek menjadi bongkahan padat sekeras batu karang.
              </p>
            </section>

            {/* Studi Kasus */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#0F3D2E] mb-6">Kisah Horor dari Dunia Nyata: Fatberg Paling Terkenal</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Fenomena ini bukan isapan jempol. Para pekerja saluran pembuangan di seluruh dunia telah bertarung melawan monster-monster ini.
              </p>
              
              <div className="card-premium bg-red-50 border-l-4 border-red-500">
                <h3 className="text-2xl font-bold text-[#0F3D2E] mb-4">Studi Kasus: The Whitechapel Fatberg, London</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Pada September 2017, di bawah jalanan Whitechapel, London, para pekerja menemukan fatberg yang menjadi legenda.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li><strong>Berat:</strong> 130 ton (setara dengan 11 bus tingkat London).</li>
                  <li><strong>Panjang:</strong> 250 meter (lebih panjang dari Tower Bridge).</li>
                  <li><strong>Komposisi:</strong> Minyak goreng, lemak, tisu basah, popok, dan kondom, semuanya mengeras menjadi massa padat.</li>
                  <li><strong>Proses Penghancuran:</strong> Butuh tim yang terdiri dari delapan orang yang bekerja siang dan malam selama <strong>sembilan minggu</strong>.</li>
                  <li><strong>Biaya:</strong> Diperkirakan menelan biaya sekitar <strong>£1 juta (sekitar 20 miliar Rupiah)</strong> per bulan untuk membersihkan penyumbatan akibat fatberg di seluruh London.</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>Bagaimana dengan di Indonesia?</strong> Meskipun mungkin tidak terekspos sebesar di London, masalah ini sangat nyata di kota-kota besar Indonesia. PDAM dan Dinas Pekerjaan Umum di Jakarta, Surabaya, dan kota lainnya secara rutin menghadapi masalah penyumbatan pipa akibat akumulasi lemak.
              </p>
            </section>

            {/* Dampak */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#0F3D2E] mb-6">Kerusakan Berantai: Dampak Mengerikan dari Sebuah Fatberg</h2>
              
              <div className="space-y-6">
                <div className="card-premium">
                  <div className="flex items-center gap-3 mb-3">
                    <Droplets className="w-6 h-6 text-red-600" />
                    <h3 className="text-xl font-bold text-[#0F3D2E]">1. Banjir Air Limbah (Sanitary Sewer Overflows)</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Ketika fatberg menyumbat pipa utama, air kotor dari ribuan rumah tidak punya tempat untuk mengalir. Akibatnya, ia akan kembali ke atas. Skenario terburuknya adalah <strong>aliran balik air limbah mentah</strong>—berisi tinja, urin, dan bakteri berbahaya—yang keluar dari toilet dan wastafel di dalam rumah Anda.
                  </p>
                </div>

                <div className="card-premium">
                  <div className="flex items-center gap-3 mb-3">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                    <h3 className="text-xl font-bold text-[#0F3D2E]">2. Krisis Kesehatan Masyarakat</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Luapan air limbah mentah membawa serta bakteri berbahaya seperti E. coli dan Salmonella, serta berbagai virus dan parasit. Kontak dengan air ini dapat menyebabkan berbagai penyakit serius, mulai dari diare, demam tifoid, hingga hepatitis A.
                  </p>
                </div>

                <div className="card-premium">
                  <div className="flex items-center gap-3 mb-3">
                    <Construction className="w-6 h-6 text-red-600" />
                    <h3 className="text-xl font-bold text-[#0F3D2E]">3. Kerusakan Infrastruktur yang Mahal</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Tekanan yang diciptakan oleh penyumbatan fatberg dapat menyebabkan pipa-pipa beton tua retak atau bahkan pecah. Biaya untuk menggali jalan, mengganti pipa bawah tanah, dan memperbaiki kerusakan adalah beban finansial yang sangat besar bagi pemerintah kota, yang pada akhirnya dibayar melalui pajak dan tagihan air masyarakat.
                  </p>
                </div>

                <div className="card-premium">
                  <div className="flex items-center gap-3 mb-3">
                    <Droplets className="w-6 h-6 text-red-600" />
                    <h3 className="text-xl font-bold text-[#0F3D2E]">4. Bencana Lingkungan</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Ketika sistem pembuangan meluap, air limbah mentah yang tidak diolah akan langsung mengalir ke saluran drainase terdekat, dan berakhir di sungai, danau, atau laut. Ini menyebabkan pencemaran air yang parah, membunuh ikan dan merusak ekosistem perairan secara luas.
                  </p>
                </div>
              </div>
            </section>

            {/* Solusi */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-[#0F3D2E]" />
                <h2 className="text-3xl font-bold text-[#0F3D2E]">Anda Adalah Pencipta Monster, Sekaligus Pembunuhnya</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kabar baiknya adalah, fatberg 100% merupakan bencana buatan manusia, yang berarti ia juga 100% bisa dicegah oleh manusia. Kunci untuk membunuh monster ini ada di setiap dapur dan setiap kamar mandi.
              </p>

              <div className="card-premium bg-[#E8F0E3] border-l-4 border-l-[#0F3D2E] mb-6">
                <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Aturan #1: Saluran Pembuangan Bukan Tempat Sampah</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Tanamkan prinsip ini: saluran pembuangan hanya untuk "Tiga P" dan air:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li><strong>Pee</strong> (Air Seni)</li>
                  <li><strong>Poo</strong> (Tinja)</li>
                  <li><strong>Paper</strong> (Hanya Tisu Toilet, yang dirancang untuk hancur)</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4 font-semibold">
                  <strong>JANGAN PERNAH</strong> membuang tisu basah, pembalut, kapas, atau sampah padat lainnya ke dalam toilet, meskipun kemasannya mengatakan "aman untuk di-flush".
                </p>
              </div>

              <div className="card-premium bg-[#E8F0E3] border-l-4 border-l-[#0F3D2E]">
                <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">Aturan #2: Perlakukan Minyak Jelantah sebagai Aset, Bukan Sampah</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Untuk lemak, minyak, dan jelantah (FOG), ikuti mantra sederhana ini:
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                  <li><strong>Cool It (Dinginkan):</strong> Biarkan minyak mendingin di wajan.</li>
                  <li><strong>Scrape It (Kerok):</strong> Kerok sisa-sisa lemak padat dari wajan atau piring.</li>
                  <li><strong>Can It (Wadahi):</strong> Tuang minyak dingin ke dalam wadah yang kuat dan tertutup rapat, seperti jeriken bekas.</li>
                  <li><strong>Bin It or Sell It (Buang atau Jual):</strong> Untuk jumlah kecil, Anda bisa membuangnya ke tempat sampah. Namun, solusi terbaik dan paling cerdas adalah <strong>menjualnya</strong>.</li>
                </ol>
              </div>
            </section>

            {/* CTA */}
            <div className="card-premium bg-gradient-to-br from-[#E8F0E3] to-[#D9E3D3] border-l-4 border-l-[#0F3D2E] text-center mt-12">
              <h2 className="text-2xl font-bold text-[#0F3D2E] mb-4">
                Hentikan Fatberg, Mulai dari Dapur Anda!
              </h2>
              <p className="text-gray-700 mb-6">
                Setiap tetes jelantah yang Anda simpan dan jual adalah satu langkah untuk mencegah terciptanya fatberg. Mari bersama-sama melindungi infrastruktur kota dan lingkungan kita dengan tidak membuang jelantah sembarangan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/blog/panduan-jual-minyak-jelantah"
                  className="inline-block bg-[#0F3D2E] text-white hover:bg-[#134E3A] px-8 py-4 rounded-card font-bold text-lg transition-smooth shadow-soft-lg hover:shadow-soft-xl"
                >
                  Panduan Jual Minyak Jelantah →
                </Link>
                <a
                  href="https://wa.me/6285183033995?text=Halo%20JelantahGO,%20saya%20ingin%20jual%20minyak%20jelantah"
                  target="_blank"
                  rel="noopener"
                  className="inline-block bg-[#25D366] text-white hover:bg-[#20BA5A] px-8 py-4 rounded-card font-bold text-lg transition-smooth shadow-soft-lg hover:shadow-soft-xl"
                >
                  Hubungi JelantahGO
                </a>
              </div>
            </div>

            {/* Article Footer */}
            <BlogArticleFooter currentSlug="fatberg-monster-bawah-tanah-jelantah" />
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <BlogSidebar />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
