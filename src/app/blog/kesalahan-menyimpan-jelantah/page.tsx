'use client'

import Image from 'next/image'
import Link from 'next/link'
import BlogSidebar from '@/components/BlogSidebar'
import BlogArticleFooter from '@/components/BlogArticleFooter'
import ArticleSchema from '@/components/ArticleSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { AlertTriangle, Filter, Container, Droplets, Sun, Lock } from 'lucide-react'

export default function KesalahanMenyimpanPage() {
  return (
    <>
      <ArticleSchema
        title="5 Kesalahan Menyimpan Jelantah yang Bikin Harga Turun"
        description="Hindari 5 kesalahan menyimpan minyak jelantah yang membuat harga jual turun: tidak menyaring, wadah salah, campur air, terbuka, dan tempat penyimpanan salah."
        image="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761964478/jelantahoffer_rank9r.webp"
        datePublished="2025-10-03"
        dateModified="2025-10-03"
        articleUrl="https://jelantahgo.com/blog/kesalahan-menyimpan-jelantah"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://jelantahgo.com' },
          { name: 'Blog', url: 'https://jelantahgo.com/blog' },
          { name: '5 Kesalahan Menyimpan Jelantah yang Bikin Harga Turun', url: 'https://jelantahgo.com/blog/kesalahan-menyimpan-jelantah' },
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
              5 Kesalahan Menyimpan Jelantah
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Yang Bikin Harga Turun
            </p>
            <p className="text-sm text-white/80 mt-2">Terakhir diperbarui: 3 Oktober 2025</p>
          </div>
        </div>
      </section>
      {/* Image */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <Image
            src="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761964478/jelantahoffer_rank9r.webp"
            alt="5 Kesalahan Menyimpan Jelantah"
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
              Mengumpulkan minyak jelantah adalah langkah pertama yang bagus untuk menjaga lingkungan dan mendapatkan penghasilan tambahan. Namun, tahukah Anda bahwa cara Anda menyimpannya sangat menentukan kualitas dan harga jualnya? Banyak orang tanpa sadar melakukan kesalahan fatal yang membuat jelantah mereka dihargai rendah, atau bahkan ditolak oleh pengepul. Panduan ini adalah bagian penting dari <Link href="/blog/panduan-jual-minyak-jelantah" className="text-[#0F3D2E] font-semibold hover:underline">panduan lengkap jual minyak jelantah</Link>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Hindari lima kesalahan berikut ini untuk memastikan usaha Anda tidak sia-sia.
            </p>

            {/* 5 Kesalahan */}
            <div className="space-y-6">
              <div className="card-premium border-l-4 border-red-500">
                <div className="flex items-center gap-3 mb-4">
                  <Filter className="w-6 h-6 text-red-600" />
                  <h3 className="text-2xl font-bold text-[#0F3D2E]">1. Tidak Menyaring Sisa Makanan</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ini adalah kesalahan paling umum dan paling merusak. Memasukkan jelantah ke wadah penyimpanan bersama sisa-sisa makanan seperti remah tepung, potongan gosong, atau bumbu akan menurunkan kualitasnya secara drastis.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Sisa makanan ini akan meningkatkan kadar air dan asam lemak bebas (Free Fatty Acid/FFA) dalam minyak, yang merupakan parameter utama kualitas. Jelantah dengan FFA tinggi akan menghasilkan bau tengik dan dihargai sangat rendah.
                </p>
                <div className="bg-[#E8F0E3] border-l-4 border-l-[#0F3D2E] p-4">
                  <p className="text-gray-700 font-semibold">Solusi:</p>
                  <p className="text-gray-700">Selalu saring minyak jelantah selagi masih hangat (bukan panas) menggunakan saringan teh yang rapat atau kain tipis sebelum memasukkannya ke dalam jeriken.</p>
                </div>
              </div>

              <div className="card-premium border-l-4 border-orange-500">
                <div className="flex items-center gap-3 mb-4">
                  <Container className="w-6 h-6 text-orange-600" />
                  <h3 className="text-2xl font-bold text-[#0F3D2E]">2. Menggunakan Wadah yang Salah</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Tidak semua wadah cocok untuk menyimpan jelantah. Menggunakan botol plastik air mineral yang tipis sangat berbahaya karena bisa meleleh jika jelantah dimasukkan saat masih terlalu hangat. Menggunakan wadah logam seperti kaleng biskuit juga tidak disarankan karena bisa berkarat dan mengkontaminasi minyak.
                </p>
                <div className="bg-[#E8F0E3] border-l-4 border-l-[#0F3D2E] p-4">
                  <p className="text-gray-700 font-semibold">Solusi:</p>
                  <p className="text-gray-700">Gunakan jeriken plastik yang tebal dan kuat (seperti bekas minyak goreng) yang memiliki tutup ulir yang rapat untuk mencegah kebocoran dan kontaminasi. Untuk detail lengkap, baca artikel kami tentang <Link href="/blog/cara-menyimpan-minyak-jelantah" className="text-[#0F3D2E] font-semibold hover:underline">cara menyimpan minyak jelantah yang benar</Link>.</p>
                </div>
              </div>

              <div className="card-premium border-l-4 border-yellow-500">
                <div className="flex items-center gap-3 mb-4">
                  <Droplets className="w-6 h-6 text-yellow-600" />
                  <h3 className="text-2xl font-bold text-[#0F3D2E]">3. Mencampur Jelantah dengan Air atau Cairan Lain</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Tetesan air yang masuk ke dalam tempat penyimpanan jelantah dapat memicu pertumbuhan bakteri dan jamur. Ini akan membuat minyak menjadi busuk dan tidak layak untuk diolah menjadi biodiesel.
                </p>
                <div className="bg-[#E8F0E3] border-l-4 border-l-[#0F3D2E] p-4">
                  <p className="text-gray-700 font-semibold">Solusi:</p>
                  <p className="text-gray-700">Pastikan jeriken dalam keadaan kering sempurna. Simpan jelantah di tempat yang terlindung dari hujan atau cipratan air.</p>
                </div>
              </div>

              <div className="card-premium border-l-4 border-purple-500">
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="w-6 h-6 text-purple-600" />
                  <h3 className="text-2xl font-bold text-[#0F3D2E]">4. Membiarkan Wadah Terbuka</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Oksigen adalah musuh minyak jelantah. Membiarkan wadah penyimpanan terbuka akan memicu proses oksidasi, yang merusak struktur kimia minyak dan membuatnya cepat tengik. Wadah yang terbuka juga mengundang debu, kotoran, dan serangga masuk, yang tentunya akan mencemari jelantah Anda.
                </p>
                <div className="bg-[#E8F0E3] border-l-4 border-l-[#0F3D2E] p-4">
                  <p className="text-gray-700 font-semibold">Solusi:</p>
                  <p className="text-gray-700">Selalu tutup rapat wadah penyimpanan setelah Anda menuangkan jelantah ke dalamnya. Pastikan tutupnya kedap udara.</p>
                </div>
              </div>

              <div className="card-premium border-l-4 border-red-500">
                <div className="flex items-center gap-3 mb-4">
                  <Sun className="w-6 h-6 text-red-600" />
                  <h3 className="text-2xl font-bold text-[#0F3D2E]">5. Menyimpan di Tempat Panas dan Terkena Matahari</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Sinar matahari langsung dan suhu yang panas adalah katalisator yang mempercepat kerusakan minyak jelantah. Paparan panas akan meningkatkan laju oksidasi dan menaikkan kadar FFA. Jelantah yang disimpan di luar ruangan di bawah terik matahari akan menurun kualitasnya dalam waktu singkat.
                </p>
                <div className="bg-[#E8F0E3] border-l-4 border-l-[#0F3D2E] p-4">
                  <p className="text-gray-700 font-semibold">Solusi:</p>
                  <p className="text-gray-700">Simpan jeriken jelantah Anda di tempat yang sejuk, kering, dan teduh, seperti di bawah wastafel dapur, di gudang, atau di garasi yang tidak terkena sinar matahari langsung.</p>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="card-premium bg-[#E8F0E3] border-l-4 border-l-[#0F3D2E] mt-8">
              <h3 className="text-2xl font-bold text-[#0F3D2E] mb-4">Ringkasan: 5 Kesalahan yang Harus Dihindari</h3>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                <li>Selalu saring jelantah sebelum menyimpannya</li>
                <li>Gunakan jeriken plastik HDPE yang tebal dan kuat</li>
                <li>Jangan pernah mencampur jelantah dengan air atau cairan lain</li>
                <li>Selalu tutup rapat wadah penyimpanan</li>
                <li>Simpan di tempat sejuk, kering, dan teduh (jauh dari sinar matahari)</li>
              </ol>
            </div>

            {/* CTA */}
            <div className="card-premium bg-gradient-to-br from-[#E8F0E3] to-[#D9E3D3] border-l-4 border-l-[#0F3D2E] text-center mt-12">
              <h2 className="text-2xl font-bold text-[#0F3D2E] mb-4">
                Simpan dengan Benar, Jual dengan Harga Tinggi!
              </h2>
              <p className="text-gray-700 mb-6">
                Dengan menghindari kesalahan-kesalahan di atas dan menyimpan jelantah dengan benar, kualitas jelantah Anda akan terjaga dan harga jualnya tetap tinggi. Ingat, kualitas adalah kunci untuk mendapatkan harga terbaik.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/blog/cara-menyimpan-minyak-jelantah"
                  className="inline-block bg-[#0F3D2E] text-white hover:bg-[#134E3A] px-8 py-4 rounded-card font-bold text-lg transition-smooth shadow-soft-lg hover:shadow-soft-xl"
                >
                  Baca Tips Menyimpan Lengkap →
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
            <BlogArticleFooter currentSlug="kesalahan-menyimpan-jelantah" />
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


