'use client'

import Image from 'next/image'
import Link from 'next/link'
import BlogSidebar from '@/components/BlogSidebar'
import BlogArticleFooter from '@/components/BlogArticleFooter'
import ArticleSchema from '@/components/ArticleSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { AlertTriangle, DollarSign, Scale, CreditCard, UserX, FileX } from 'lucide-react'

export default function ArticleContent() {
  return (
    <>
      <ArticleSchema
        title="Waspada! 5 Ciri Pengepul Jelantah Nakal"
        description="Jangan tertipu! Kenali 5 ciri pengepul minyak jelantah nakal, dari permainan harga, timbangan curang, hingga pembayaran fiktif. Lindungi keuntungan Anda dengan tips ini."
        image="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163998/jelantahgo_24_cbndgk.webp"
        datePublished="2025-10-29"
        dateModified="2025-10-29"
        articleUrl="https://jelantahgo.com/blog/ciri-pengepul-jelantah-nakal"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://jelantahgo.com' },
          { name: 'Blog', url: 'https://jelantahgo.com/blog' },
          { name: 'Waspada! 5 Ciri Pengepul Jelantah Nakal', url: 'https://jelantahgo.com/blog/ciri-pengepul-jelantah-nakal' },
        ]}
      />
      {/* Hero Section */}
      <section className="hero-bg-dots py-20 lg:py-28">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-[#D9E3D3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Panduan Jual Jelantah
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Waspada! 5 Ciri Pengepul Jelantah Nakal
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              & Cara Menghindarinya
            </p>
            <p className="text-sm text-white/80 mt-2">Terakhir diperbarui: 29 Oktober 2025</p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <Image
            src="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761163998/jelantahgo_24_cbndgk.webp"
            alt="Waspada! 5 Ciri Pengepul Jelantah Nakal"
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
              Bayangkan skenario ini: Anda telah dengan teliti mengumpulkan minyak jelantah selama berbulan-bulan. Anda merasa bangga bisa berkontribusi pada lingkungan dan berharap mendapatkan imbalan yang adil. Namun, saat tim penjemput datang, harga yang dijanjikan tiba-tiba anjlok, timbangan terlihat meragukan, dan uang yang Anda terima jauh di bawah ekspektasi.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Sayangnya, skenario ini bukanlah fiksi. Di balik citra bisnis daur ulang yang mulia, ada oknum-oknum "pengepul nakal" yang memanfaatkan ketidaktahuan penjual pemula untuk meraup keuntungan secara tidak jujur. Artikel ini adalah panduan pertahanan diri Anda dan bagian penting dari <Link href="/blog/panduan-jual-minyak-jelantah" className="text-[#0F3D2E] font-semibold hover:underline">panduan terlengkap jual minyak jelantah</Link>. Kami akan membongkar 5 modus operandi paling umum yang digunakan pengepul nakal dan membekali Anda dengan pengetahuan untuk menghindarinya.
            </p>

            {/* 5 Ciri Nakal */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#0F3D2E] mb-6">5 Modus Operandi Pengepul Jelantah Nakal</h2>

              {/* Ciri 1 */}
              <div className="card-premium mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="w-6 h-6 text-red-600" />
                  <h3 className="text-2xl font-bold text-[#0F3D2E]">1. Jebakan Harga "Umpan dan Ganti" (Bait and Switch)</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Modus Operandi:</strong> Melalui telepon atau chat WhatsApp, mereka akan memberikan penawaran harga yang sangat tinggi, jauh di atas rata-rata pasaran. Namun, saat tim mereka sudah tiba di lokasi Anda dan jelantah sudah siap diangkut, mereka akan mulai melancarkan berbagai alasan untuk memotong harga secara drastis.
                </p>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                  <p className="text-gray-700 italic mb-2">Contoh alasan mereka:</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>"Waduh, Bu, ini jelantahnya kotor sekali ya, banyak ampasnya. Kalau begini kualitasnya, harganya turun jadi Rp 6.500."</li>
                    <li>"Sepertinya ini ada sedikit campuran air, minyaknya tidak murni. Kami hanya bisa ambil di harga Rp 6.000."</li>
                    <li>"Maaf, Bos saya baru update harga pagi ini, ternyata pasar lagi turun."</li>
                  </ul>
                </div>
                <div className="bg-[#E8F0E3] border-l-4 border-[#0F3D2E] p-4">
                  <p className="text-gray-700 font-semibold mb-2">Cara Menghindarinya:</p>
                  <p className="text-gray-700">
                    Lakukan riset harga pasar yang wajar. Curigai setiap penawaran yang terlalu bagus untuk menjadi kenyataan. Tanyakan secara spesifik di telepon: "Apakah ini harga final, atau ada kemungkinan penyesuaian di lokasi?"
                  </p>
                </div>
              </div>

              {/* Ciri 2 */}
              <div className="card-premium mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Scale className="w-6 h-6 text-red-600" />
                  <h3 className="text-2xl font-bold text-[#0F3D2E]">2. Permainan Timbangan yang Tidak Akurat</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Modus Operandi:</strong> Oknum nakal akan memanipulasi proses penimbangan untuk mengurangi volume tercatat jelantah Anda.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li><strong>Menggunakan Timbangan Gantung/Manual:</strong> Mereka sengaja menggunakan timbangan pasar model lama yang sangat tidak akurat dan mudah goyang.</li>
                  <li><strong>Manipulasi Timbangan Digital:</strong> Tidak meletakkannya di permukaan yang 100% rata, atau melakukan 'tare' (mengatur ulang ke nol) secara cepat saat ada beban lain di atasnya.</li>
                  <li><strong>Konversi Kilogram ke Liter yang Aneh:</strong> Mereka menggunakan rasio konversi yang merugikan Anda. Rasio yang benar adalah sekitar 1 kg = 1.08 - 1.1 liter.</li>
                </ul>
                <div className="bg-[#E8F0E3] border-l-4 border-[#0F3D2E] p-4">
                  <p className="text-gray-700 font-semibold mb-2">Cara Menghindarinya:</p>
                  <p className="text-gray-700">
                    Tegaskan sejak awal bahwa Anda hanya mau bertransaksi jika menggunakan <strong>timbangan digital duduk yang diletakkan di permukaan rata</strong>. Perhatikan layar timbangan dengan saksama. Jangan ragu untuk meminta mereka menimbang ulang jika Anda merasa ada yang aneh.
                  </p>
                </div>
              </div>

              {/* Ciri 3 */}
              <div className="card-premium mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <CreditCard className="w-6 h-6 text-red-600" />
                  <h3 className="text-2xl font-bold text-[#0F3D2E]">3. Pembayaran yang Ditunda-tunda atau Fiktif</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Modus Operandi:</strong> Setelah jelantah selesai ditimbang dan dimuat ke kendaraan, mereka akan beralasan tidak membawa uang tunai yang cukup.
                </p>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                  <p className="text-gray-700 italic">
                    "Maaf, Bu, saya tidak pegang cash sebanyak ini. Nanti saya transfer ya, paling lambat sore ini."
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Namun, "sore ini" seringkali berubah menjadi "besok", lalu "lusa", hingga akhirnya nomor telepon mereka tidak bisa dihubungi lagi.
                </p>
                <div className="bg-[#E8F0E3] border-l-4 border-[#0F3D2E] p-4">
                  <p className="text-gray-700 font-semibold mb-2">Cara Menghindarinya:</p>
                  <p className="text-gray-700">
                    Buat aturan yang tidak bisa ditawar: <strong>TIDAK ADA UANG, TIDAK ADA BARANG</strong>. Sampaikan dengan jelas di awal bahwa Anda hanya menerima pembayaran tunai di tempat (cash on the spot) atau transfer instan yang langsung Anda cek saat itu juga.
                  </p>
                </div>
              </div>

              {/* Ciri 4 */}
              <div className="card-premium mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <UserX className="w-6 h-6 text-red-600" />
                  <h3 className="text-2xl font-bold text-[#0F3D2E]">4. Identitas Anonim dan Tidak Profesional</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Modus Operandi:</strong> Pengepul nakal biasanya beroperasi secara sembunyi-sembunyi. Mereka tidak memiliki identitas bisnis yang jelas.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Mereka hanya menggunakan nomor WhatsApp pribadi, bukan akun WhatsApp Business.</li>
                  <li>Mereka tidak memiliki nama usaha, website, atau jejak digital apapun.</li>
                  <li>Kendaraan yang mereka gunakan adalah kendaraan pribadi tanpa branding atau identitas perusahaan.</li>
                </ul>
                <div className="bg-[#E8F0E3] border-l-4 border-[#0F3D2E] p-4">
                  <p className="text-gray-700 font-semibold mb-2">Cara Menghindarinya:</p>
                  <p className="text-gray-700">
                    Pilih pengepul yang memiliki identitas profesional. Adanya website, akun media sosial, atau pendaftaran di Google Maps menunjukkan bahwa mereka sedang membangun reputasi jangka panjang dan lebih bisa dipertanggungjawabkan.
                  </p>
                </div>
              </div>

              {/* Ciri 5 */}
              <div className="card-premium mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <FileX className="w-6 h-6 text-red-600" />
                  <h3 className="text-2xl font-bold text-[#0F3D2E]">5. Terlalu Banyak Alasan untuk Kualitas</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Modus Operandi:</strong> Berbeda dengan taktik nomor satu yang memotong harga secara drastis, taktik ini lebih halus. Mereka akan mencari-cari kesalahan kecil pada jelantah Anda untuk memotong harga sedikit demi sedikit.
                </p>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                  <p className="text-gray-700 italic">
                    "Warnanya agak gelap ya, Bu. Ini saya potong Rp 200 per liter."
                    <br />
                    "Ada sedikit endapan halus di dasar, saya kurangi lagi Rp 100 ya."
                  </p>
                </div>
                <div className="bg-[#E8F0E3] border-l-4 border-[#0F3D2E] p-4">
                  <p className="text-gray-700 font-semibold mb-2">Cara Menghindarinya:</p>
                  <p className="text-gray-700">
                    Edukasi diri Anda. Ketahui bahwa sedikit endapan atau warna yang gelap adalah hal yang wajar untuk jelantah rumah tangga. Pengepul profesional sudah memasukkan faktor-faktor ini dalam rentang harga standar mereka dan tidak akan mempermasalahkan hal-hal kecil, selama jelantah tidak terkontaminasi air atau bahan kimia.
                  </p>
                </div>
              </div>
            </section>

            {/* Kesimpulan */}
            <div className="card-premium bg-gradient-to-br from-[#E8F0E3] to-[#D9E3D3] border-l-4 border-l-[#0F3D2E] mt-12">
              <h2 className="text-2xl font-bold text-[#0F3D2E] mb-4">
                Kesimpulan: Lindungi Diri, Pilih Pengepul Terpercaya
              </h2>
              <p className="text-gray-700 mb-6">
                Mengetahui tanda-tanda pengepul nakal adalah langkah pertama untuk melindungi keuntungan Anda. Langkah kedua adalah memilih pengepul yang memiliki reputasi baik, transparan, dan profesional seperti JelantahGO.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/blog/panduan-jual-minyak-jelantah"
                  className="inline-block bg-[#0F3D2E] text-white hover:bg-[#134E3A] px-8 py-4 rounded-card font-bold text-lg transition-smooth shadow-soft-lg hover:shadow-soft-xl text-center"
                >
                  Panduan Terlengkap Jual Minyak Jelantah →
                </Link>
                <a
                  href="https://wa.me/6285183033995?text=Halo%20JelantahGO,%20saya%20ingin%20jual%20minyak%20jelantah"
                  target="_blank"
                  rel="noopener"
                  className="inline-block bg-[#25D366] text-white hover:bg-[#20BA5A] px-8 py-4 rounded-card font-bold text-lg transition-smooth shadow-soft-lg hover:shadow-soft-xl text-center"
                >
                  Hubungi JelantahGO
                </a>
              </div>
            </div>
            </div>

            {/* Article Footer */}
            <BlogArticleFooter currentSlug="ciri-pengepul-jelantah-nakal" />
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
