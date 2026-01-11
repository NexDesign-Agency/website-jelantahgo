'use client'

import Image from 'next/image'
import Link from 'next/link'
import BlogSidebar from '@/components/BlogSidebar'
import BlogArticleFooter from '@/components/BlogArticleFooter'
import ArticleSchema from '@/components/ArticleSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import FAQSchema from '@/components/FAQSchema'
import { AlertTriangle, Heart, Brain, ShieldOff } from 'lucide-react'

export default function ArticleContent() {
  return (
    <>
      <ArticleSchema
        title="5 Bahaya Minyak Jelantah Bagi Kesehatan"
        description="Waspada! Menggunakan minyak jelantah berulang kali memicu radikal bebas, senyawa karsinogenik, dan risiko penyakit jantung. Simak 5 bahayanya menurut ahli."
        image="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_1200,c_fill,q_auto/v1761163998/jelantahgo_29_txjglj.webp"
        datePublished="2025-11-01"
        dateModified="2025-11-01"
        articleUrl="https://jelantahgo.com/blog/bahaya-minyak-jelantah-kesehatan"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://jelantahgo.com' },
          { name: 'Blog', url: 'https://jelantahgo.com/blog' },
          { name: '5 Bahaya Minyak Jelantah Bagi Kesehatan', url: 'https://jelantahgo.com/blog/bahaya-minyak-jelantah-kesehatan' },
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
              5 Bahaya Minyak Jelantah Bagi Kesehatan
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Menurut Ahli Gizi
            </p>
            <p className="text-sm text-white/80 mt-2">Terakhir diperbarui: 1 November 2025</p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <Image
            src="https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761163998/jelantahgo_29_txjglj.webp"
            alt="5 Bahaya Minyak Jelantah Bagi Kesehatan"
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
                  Di banyak dapur, baik rumah tangga maupun warung makan, ada satu kebiasaan yang diwariskan turun-temurun demi penghematan: menggunakan minyak goreng berulang kali hingga tetes terakhir. Minyak yang tadinya berwarna keemasan jernih perlahan berubah menjadi cokelat gelap, kental, dan berbau tengik.
                </p>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Tindakan yang tampaknya 'hemat' ini, menurut para ahli gizi, sebenarnya adalah undangan terbuka bagi serangkaian masalah kesehatan serius. Minyak jelantah bukan sekadar minyak bekas. Dari sudut pandang kimia, ia adalah produk yang telah terdegradasi secara fundamental. Artikel ini adalah bagian dari <Link href="/blog/ancaman-dan-peluang-minyak-jelantah" className="text-[#0F3D2E] font-semibold hover:underline">eksplorasi lengkap bahaya dan peluang minyak jelantah</Link>. Mari kita bedah 5 bahaya utama menggunakan minyak jelantah berulang kali bagi kesehatan Anda.
                </p>

                {/* 5 Bahaya */}
                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-[#0F3D2E] mb-6">Lima Ancaman Tersembunyi dalam Wajan Anda</h2>

                  {/* Bahaya 1 */}
                  <div className="card-premium mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                  <h3 className="text-2xl font-bold text-[#0F3D2E]">1. Pemicu Kanker (Pembentukan Senyawa Karsinogenik)</h3>
                  </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ini adalah risiko paling menakutkan. Saat minyak dipanaskan melewati titik asapnya, molekul lemaknya terurai dalam proses yang disebut pirolisis. Proses ini menghasilkan berbagai senyawa berbahaya, salah satunya adalah <strong>Akrolein</strong>, aldehida beracun yang juga ditemukan dalam asap rokok.
                  </p>
                <p className="text-gray-700 leading-relaxed">
                  Akrolein telah diidentifikasi oleh Badan Internasional untuk Penelitian Kanker (IARC) sebagai senyawa yang berpotensi karsinogenik bagi manusia. Selain akrolein, pemanasan berulang juga membentuk senyawa lain yang disebut <strong>aldehida</strong> dan <strong>hidrokarbon aromatik polisiklik (PAH)</strong>. PAH adalah kelompok senyawa kimia yang dikenal luas sebagai karsinogen kuat.
                  </p>
                  </div>

              {/* Bahaya 2 */}
                  <div className="card-premium mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldOff className="w-6 h-6 text-red-600" />
                  <h3 className="text-2xl font-bold text-[#0F3D2E]">2. Badai Radikal Bebas dan Penuaan Dini</h3>
                  </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Minyak goreng segar kaya akan antioksidan seperti Vitamin E. Namun, setiap kali dipanaskan, antioksidan ini hancur dan proses oksidasi mengambil alih. Oksidasi ini menghasilkan molekul yang sangat tidak stabil dan reaktif yang disebut <strong>radikal bebas</strong>.
                  </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Bayangkan radikal bebas seperti bola liar yang menabrak dan merusak segala sesuatu di sekitarnya. Ketika masuk ke dalam tubuh, radikal bebas akan 'mencuri' elektron dari sel-sel sehat Anda, menyebabkan kerusakan seluler yang luas dalam sebuah proses yang disebut stres oksidatif.
                  </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Penuaan Dini:</strong> Radikal bebas merusak kolagen dan elastin di kulit, mempercepat munculnya keriput dan garis halus.</li>
                  <li><strong>Melemahkan Imunitas:</strong> Kerusakan sel akibat radikal bebas membuat tubuh lebih rentan terhadap infeksi dan penyakit.</li>
                  <li><strong>Pemicu Penyakit Degeneratif:</strong> Stres oksidatif kronis sangat terkait dengan perkembangan penyakit seperti Alzheimer, Parkinson, dan katarak.</li>
                  </ul>
                  </div>

              {/* Bahaya 3 */}
                  <div className="card-premium mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-6 h-6 text-red-600" />
                  <h3 className="text-2xl font-bold text-[#0F3D2E]">3. Peningkatan Risiko Penyakit Jantung dan Kolesterol Jahat</h3>
                  </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Proses pemanasan berulang tidak hanya menghasilkan senyawa baru, tetapi juga mengubah struktur lemak yang ada di dalam minyak. Salah satu perubahan paling berbahaya adalah pembentukan <strong>lemak trans (trans fat)</strong>.
                  </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Lemak trans terkenal sebagai jenis lemak paling jahat bagi kesehatan kardiovaskular:
                  </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Meningkatkan LDL (Kolesterol Jahat):</strong> Lemak trans mendorong peningkatan kadar Low-Density Lipoprotein (LDL) dalam darah. LDL inilah yang menumpuk di dinding arteri, membentuk plak yang menyumbat aliran darah (aterosklerosis).</li>
                  <li><strong>Menurunkan HDL (Kolesterol Baik):</strong> Lemak trans juga menurunkan kadar High-Density Lipoprotein (HDL), yaitu kolesterol 'pembersih' yang bertugas mengangkut kelebihan kolesterol kembali ke hati.</li>
                  </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Kombinasi mematikan dari LDL tinggi dan HDL rendah ini secara dramatis meningkatkan risiko penyakit jantung, tekanan darah tinggi (hipertensi), stroke, dan serangan jantung.
                  </p>
                  </div>

              {/* Bahaya 4 */}
                  <div className="card-premium mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="w-6 h-6 text-red-600" />
                  <h3 className="text-2xl font-bold text-[#0F3D2E]">4. Peradangan Kronis di Seluruh Tubuh (Inflamasi)</h3>
                  </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Radikal bebas dan produk oksidasi lainnya dalam minyak jelantah adalah pemicu kuat untuk peradangan (inflamasi) di dalam tubuh. Meskipun peradangan akut adalah respons alami tubuh terhadap cedera, peradangan kronis tingkat rendah adalah kondisi berbahaya yang menjadi akar dari banyak penyakit modern.
                  </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Peradangan kronis ini tidak terlihat seperti bengkak atau kemerahan, melainkan terjadi di tingkat seluler. Ia dapat memicu atau memperburuk kondisi seperti:
                  </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Arthritis (Radang Sendi)</li>
                  <li>Diabetes Tipe 2</li>
                  <li>Penyakit Metabolik</li>
                  <li>Penyakit autoimun</li>
                  </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Mengonsumsi makanan yang digoreng dengan minyak jelantah secara teratur seperti terus-menerus menyiram 'bensin' ke 'api' peradangan di dalam tubuh Anda.
                  </p>
                  </div>

              {/* Bahaya 5 */}
                  <div className="card-premium mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                  <h3 className="text-2xl font-bold text-[#0F3D2E]">5. Gangguan Pencernaan dan Masalah Lambung</h3>
                  </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Minyak yang telah rusak secara kimia menjadi lebih sulit untuk dicerna oleh sistem pencernaan kita. Hal ini dapat menyebabkan berbagai keluhan yang tidak nyaman.
                  </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Meningkatnya Asam Lambung:</strong> Sifat asam dari minyak yang terdegradasi (FFA tinggi) dapat mengiritasi lapisan lambung, menyebabkan rasa mulas, nyeri ulu hati, dan memperburuk kondisi bagi penderita GERD (Gastroesophageal Reflux Disease).</li>
                  <li><strong>Kembung dan Begah:</strong> Tubuh membutuhkan waktu lebih lama untuk memecah molekul lemak yang kompleks dan rusak, yang dapat menyebabkan perasaan kembung, begah, dan gangguan pencernaan lainnya.</li>
                  <li><strong>Iritasi Usus:</strong> Senyawa-senyawa dalam jelantah dapat mengganggu keseimbangan bakteri baik di usus dan menyebabkan iritasi pada dinding usus.</li>
                  </ul>
                  </div>
            </section>

            {/* FAQ */}
            <FAQSchema faqs={[
              {
                question: 'Berapa kali maksimal minyak goreng boleh dipakai?',
                answer: 'Tidak ada aturan pasti, tetapi sebagian besar ahli gizi dan lembaga keamanan pangan merekomendasikan untuk tidak menggunakan minyak goreng lebih dari 2-3 kali pemakaian. Perhatikan tanda-tanda kerusakan seperti warna yang sangat gelap, munculnya buih berlebih, bau tengik, dan titik asap yang menurun drastis.',
              },
              {
                question: 'Apakah ada cara untuk membersihkan minyak jelantah agar aman dipakai lagi?',
                answer: 'Meskipun ada trik rumah tangga seperti menggunakan nasi untuk menyerap kotoran, cara ini hanya membersihkan sisa makanan fisik, BUKAN memperbaiki kerusakan kimia yang sudah terjadi. Senyawa berbahaya seperti radikal bebas dan akrolein yang sudah terbentuk tidak dapat dihilangkan dengan cara sederhana. Cara teraman adalah dengan tidak menggunakannya kembali untuk konsumsi.',
              },
              {
                question: 'Apakah semua jenis minyak sama berbahayanya jika dipakai berulang?',
                answer: 'Minyak dengan titik asap tinggi (high smoke point) seperti minyak kelapa sawit atau minyak kanola cenderung lebih stabil dan tahan terhadap pemanasan berulang dibandingkan minyak dengan titik asap rendah seperti minyak zaitun extra virgin. Namun, pada akhirnya, SEMUA jenis minyak akan terdegradasi dan membentuk senyawa berbahaya jika dipanaskan berulang kali melewati titik asapnya.',
              },
            ]} />
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#0F3D2E] mb-6">Pertanyaan yang Sering Diajukan (FAQ)</h2>
              
              <div className="space-y-6">
                <div className="card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">
                    Berapa kali maksimal minyak goreng boleh dipakai?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Tidak ada aturan pasti, tetapi sebagian besar ahli gizi dan lembaga keamanan pangan merekomendasikan untuk tidak menggunakan minyak goreng lebih dari 2-3 kali pemakaian. Perhatikan tanda-tanda kerusakan seperti warna yang sangat gelap, munculnya buih berlebih, bau tengik, dan titik asap yang menurun drastis.
                  </p>
                </div>

                <div className="card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">
                    Apakah ada cara untuk 'membersihkan' minyak jelantah agar aman dipakai lagi?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Meskipun ada trik rumah tangga seperti menggunakan nasi untuk menyerap kotoran, cara ini hanya membersihkan sisa makanan fisik, BUKAN memperbaiki kerusakan kimia yang sudah terjadi. Senyawa berbahaya seperti radikal bebas dan akrolein yang sudah terbentuk tidak dapat dihilangkan dengan cara sederhana. Cara teraman adalah dengan tidak menggunakannya kembali untuk konsumsi.
                  </p>
                </div>

                <div className="card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">
                    Apakah semua jenis minyak sama berbahayanya jika dipakai berulang?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Minyak dengan titik asap tinggi (high smoke point) seperti minyak kelapa sawit atau minyak kanola cenderung lebih stabil dan tahan terhadap pemanasan berulang dibandingkan minyak dengan titik asap rendah seperti minyak zaitun extra virgin. Namun, pada akhirnya, SEMUA jenis minyak akan terdegradasi dan membentuk senyawa berbahaya jika dipanaskan berulang kali melewati titik asapnya.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <div className="card-premium bg-gradient-to-br from-[#E8F0E3] to-[#D9E3D3] border-l-4 border-l-[#0F3D2E] text-center mt-12">
              <h2 className="text-2xl font-bold text-[#0F3D2E] mb-4">
                Jangan Buang Jelantah Anda - Jual Saja!
              </h2>
              <p className="text-gray-700 mb-6">
                Setelah membaca artikel ini, semoga Anda memahami bahwa menggunakan minyak jelantah berulang kali adalah praktik yang sangat berbahaya. Namun, jangan langsung membuangnya ke saluran air! Jelantah Anda masih sangat berharga untuk didaur ulang menjadi biodiesel. Mari bersama-sama mengubah ancaman menjadi peluang ekonomi dan lingkungan.
              </p>
              <Link
                href="/blog/ancaman-dan-peluang-minyak-jelantah"
                className="inline-block bg-[#0F3D2E] text-white hover:bg-[#134E3A] px-8 py-4 rounded-card font-bold text-lg transition-smooth shadow-soft-lg hover:shadow-soft-xl mr-4"
              >
                Pelajari Peluang Daur Ulang →
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
            <BlogArticleFooter currentSlug="bahaya-minyak-jelantah-kesehatan" />
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
