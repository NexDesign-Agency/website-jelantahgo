'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import FAQSchema from '@/components/FAQSchema'

export default function MitraContent() {
  const [activeCalc, setActiveCalc] = useState(1)
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  const calcLevels = [
    {
      id: 1,
      title: 'Mitra Pemula - 500 Liter/Bulan',
      volume: '500 liter',
      beli: 'Rp 6.500/liter',
      jual: 'Rp 8.000/liter',
      margin: 'Rp 1.500',
      profit: 'Rp 750.000',
      profitYear: 'Rp 9.000.000',
      modal: [
        'Jerigen 20L (10 unit): Rp 300.000',
        'Marketing materials: Rp 200.000',
        'Total Modal: ±Rp 500.000',
      ],
    },
    {
      id: 2,
      title: 'Mitra Aktif - 1000 Liter/Bulan',
      volume: '1.000 liter',
      beli: 'Rp 6.500/liter',
      jual: 'Rp 8.500/liter',
      margin: 'Rp 2.000',
      profit: 'Rp 2.000.000',
      profitYear: 'Rp 24.000.000',
      modal: [
        'Jerigen & wadah: Rp 600.000',
        'Timbangan digital: Rp 400.000',
        'Marketing: Rp 300.000',
        'Total Modal: ±Rp 1.300.000',
      ],
    },
    {
      id: 3,
      title: 'Mitra Sukses - 2000 Liter/Bulan',
      volume: '2.000 liter',
      beli: 'Rp 6.000/liter',
      jual: 'Rp 8.500/liter',
      margin: 'Rp 2.500',
      bonus: '+ Rp 1.000.000',
      profit: 'Rp 6.000.000',
      profitYear: 'Rp 72.000.000',
      modal: [
        'Wadah & jerigen lengkap: Rp 1.200.000',
        'Timbangan profesional: Rp 600.000',
        'Marketing & operasional: Rp 500.000',
        'Total Modal: ±Rp 2.300.000',
      ],
    },
  ]

  const faqs = [
    {
      question: 'Apakah ada biaya franchise atau biaya bergabung?',
      answer: 'TIDAK ADA. Program mitra JelantahGO 100% gratis tanpa biaya franchise, pendaftaran, atau biaya tersembunyi apapun. Anda hanya perlu modal operasional untuk membeli jelantah dari masyarakat.',
    },
    {
      question: 'Berapa modal awal yang dibutuhkan?',
      answer: 'Modal minimal Rp 500.000 - 1.000.000 untuk jerigen/wadah (Rp 300-500rb), marketing materials (Rp 100-200rb), dan operasional awal (Rp 100-300rb). Modal ini berputar cepat dan balik dalam 2-4 minggu.',
    },
    {
      question: 'Apakah harus full time?',
      answer: 'Tidak harus. Banyak mitra sukses yang menjalankan sambil kerja utama. 2-3 jam per hari sudah cukup untuk mengumpulkan 500-1000L per bulan. Waktu fleksibel dan bisa diatur sendiri.',
    },
    {
      question: 'Wilayah mana saja yang bisa jadi mitra?',
      answer: 'Prioritas: Jabodetabek (Jakarta, Tangerang, Bekasi, Depok, Bogor). Terbuka untuk: Jawa Barat, Jawa Tengah, dan kota-kota besar lainnya. Hubungi kami untuk konfirmasi area Anda.',
    },
    {
      question: 'Apakah ada target volume minimal?',
      answer: 'Tidak ada target minimal wajib. Namun untuk efisiensi, disarankan minimal 500L per bulan agar profitable. Kami membantu Anda mencapai target melalui training dan support.',
    },
    {
      question: 'Bagaimana sistem pembayaran dari JelantahGO?',
      answer: 'Standard: Cash on pickup (bayar tunai saat dijemput). Opsional: Transfer H+1 atau tempo 3-7 hari untuk mitra rutin dengan track record baik. Semua dilengkapi invoice resmi.',
    },
  ]

  return (
    <>
      <FAQSchema faqs={faqs} />
      {/* Hero Section */}
      <section className="hero-bg-dots py-20 lg:py-28">
        <div className="container-custom relative z-10 text-center">
          <div className="inline-block bg-[#F59E0B] text-white px-4 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
            🔥 30+ MITRA SUKSES | 100% GRATIS TANPA FRANCHISE FEE
          </div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
            Jadilah Mitra Pengepul Jelantah | Raih Rp 1-5 Juta/Bulan
          </h1>
          <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Bergabung dengan program mitra JelantahGO dan mulai bisnis pengepulan minyak jelantah dengan modal kecil. Dapatkan website gratis, training lengkap, dan support penuh dari tim kami!{' '}
            <Link href="/blog/peluang-bisnis-pengepul-jelantah" className="text-white underline hover:text-[#D9E3D3] font-semibold">
              Pelajari lebih lanjut →
            </Link>
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
            {[
              { amount: 'Rp 500rb', label: 'Modal Awal Minimal' },
              { amount: 'Rp 1-5jt', label: 'Penghasilan/Bulan' },
              { amount: '1-2 Bulan', label: 'ROI Modal Balik' },
              { amount: '30+ Mitra', label: 'Sudah Bergabung' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/15 backdrop-blur-sm rounded-card p-4 text-center border border-white/20"
              >
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                  {stat.amount}
                </div>
                <div className="text-sm text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/6285183033995?text=Halo%20JelantahGO%2C%20saya%20tertarik%20bergabung%20jadi%20mitra"
            target="_blank"
            rel="noopener"
            className="inline-block bg-white text-[#0F3D2E] hover:bg-[#F9F8F6] px-8 py-4 rounded-card font-bold text-lg transition-smooth shadow-soft-lg hover:shadow-soft-xl"
          >
            📱 Daftar Jadi Mitra Sekarang
          </a>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <Image
            src="https://res.cloudinary.com/dknswj9co/image/upload/v1761171103/jelantah-go_5_moegd4.webp"
            alt="Mitra JelantahGO sedang melakukan penimbangan minyak jelantah dari pelanggan"
            width={1200}
            height={630}
            className="max-w-full h-auto rounded-card-lg shadow-layered mx-auto"
            loading="lazy"
          />
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Kenapa Bisnis Jelantah Menjanjikan?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Peluang bisnis dengan prospek cerah, modal kecil, dan berkontribusi untuk lingkungan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '📈',
                title: 'Bahan Baku Melimpah',
                desc: 'Setiap rumah tangga dan warung makan pasti ada jelantah. Pasar sangat luas dan terus bertumbuh.',
              },
              {
                icon: '🏭',
                title: 'Permintaan Tinggi',
                desc: 'Industri biodiesel terus berkembang pesat. Pemerintah dukung program B30 untuk energi terbarukan.',
              },
              {
                icon: '💰',
                title: 'Modal Kecil',
                desc: 'Mulai dari Rp 500rb sudah bisa jalan. Tidak perlu toko/kantor fisik. Modal berputar cepat.',
              },
              {
                icon: '⏰',
                title: 'Flexible Time',
                desc: 'Bisa sambil kerja utama. 2-3 jam per hari sudah cukup. Atur jadwal sendiri sesuai waktu luang.',
              },
              {
                icon: '🚀',
                title: 'ROI Cepat',
                desc: 'Modal kembali dalam 1-2 bulan. Setelah itu, keuntungan bersih masuk kantong Anda.',
              },
              {
                icon: '🌍',
                title: 'Ramah Lingkungan',
                desc: 'Dapat penghasilan sambil selamatkan lingkungan dari pencemaran. Bisnis yang berkah!',
              },
            ].map((item, index) => (
              <div key={index} className="card-premium text-center hover-lift">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculation Section */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Simulasi Penghasilan Mitra JelantahGO
            </h2>
            <p className="text-lg text-gray-600">Pilih level yang sesuai dengan target Anda</p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { id: 1, label: '💼 Level 1: Pemula', sub: '500L/bulan' },
              { id: 2, label: '🚀 Level 2: Aktif', sub: '1000L/bulan' },
              { id: 3, label: '⭐ Level 3: Sukses', sub: '2000L/bulan' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCalc(tab.id)}
                className={`px-6 py-3 rounded-card font-semibold transition-smooth ${activeCalc === tab.id
                    ? 'bg-[#0F3D2E] text-white shadow-soft-lg'
                    : 'bg-white text-[#0F3D2E] border-2 border-gray-200 hover:border-[#0F3D2E]'
                  }`}
              >
                {tab.label}
                <br />
                <small className="text-xs">{tab.sub}</small>
              </button>
            ))}
          </div>

          {/* Calc Content */}
          {calcLevels.map((calc) => (
            <div
              key={calc.id}
              className={`max-w-3xl mx-auto card-premium ${activeCalc === calc.id ? 'block' : 'hidden'}`}
            >
              <h3 className="text-2xl font-bold text-[#0F3D2E] mb-6 text-center">{calc.title}</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Volume Kumpul per Bulan</span>
                  <span className="font-bold text-[#0F3D2E]">{calc.volume}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Harga Beli dari Masyarakat</span>
                  <span className="font-bold text-[#0F3D2E]">{calc.beli}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Harga Jual ke JelantahGO</span>
                  <span className="font-bold text-[#0F3D2E]">{calc.jual}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Margin per Liter</span>
                  <span className="font-bold text-[#0F3D2E]">{calc.margin}</span>
                </div>
                {calc.bonus && (
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600">Bonus Volume (2000L+)</span>
                    <span className="font-bold text-[#F59E0B]">{calc.bonus}</span>
                  </div>
                )}
              </div>

              <div className="bg-[#0F3D2E] text-white rounded-card p-6 text-center">
                <div className="text-sm mb-2">Keuntungan per Bulan:</div>
                <div className="text-4xl font-bold mb-2">{calc.profit}</div>
                <div className="text-sm opacity-90">Keuntungan per Tahun: {calc.profitYear}</div>
              </div>

              <div className="mt-6 bg-gradient-to-br from-[#F9F8F6] to-[#E8F0E3] border-l-4 border-l-[#0F3D2E] rounded-card p-6">
                <h4 className="font-bold text-[#0F3D2E] mb-4">💡 Modal Awal yang Dibutuhkan:</h4>
                <ul className="space-y-2 text-gray-700">
                  {calc.modal.map((item, i) => (
                    <li key={i} className={i === calc.modal.length - 1 ? 'font-bold' : ''}>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 font-semibold text-[#0F3D2E]">
                  ⚡ ROI: Modal balik dalam {calc.id === 3 ? '1-2 bulan! Plus bonus!' : '1 bulan!'}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200 text-sm text-gray-600">
                  <p className="mb-2">
                    💡 Pelajari lebih lanjut: <Link href="/blog/panduan-bisnis-pengepul-jelantah" className="text-[#0F3D2E] font-semibold hover:underline">panduan bisnis pengepul jelantah lengkap</Link>, <Link href="/blog/checklist-peralatan-pengepul-jelantah" className="text-[#0F3D2E] font-semibold hover:underline">checklist peralatan yang dibutuhkan</Link>, dan <Link href="/blog/kisah-sukses-ibu-rina" className="text-[#0F3D2E] font-semibold hover:underline">kisah sukses Ibu Rina</Link> sebagai referensi.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Mitra vs Pelanggan Biasa
            </h2>
            <p className="text-lg text-gray-600">Keuntungan jadi mitra JelantahGO dibanding jual sendiri</p>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-card-lg shadow-layered overflow-hidden">
              <thead>
                <tr className="bg-[#0F3D2E] text-white">
                  <th className="p-4 text-left">Aspek</th>
                  <th className="p-4 text-left">Pelanggan Biasa</th>
                  <th className="p-4 text-left bg-[#F59E0B]">Mitra JelantahGO</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { aspect: 'Peran', biasa: 'Jual jelantah sendiri', mitra: 'Kumpulkan dari banyak orang' },
                  { aspect: 'Volume Bulanan', biasa: '40-200 liter', mitra: '500-2.000 liter' },
                  { aspect: 'Penghasilan', biasa: 'Rp 300rb - 1,7jt', mitra: 'Rp 1jt - 6jt (dari margin)' },
                  { aspect: 'Support', biasa: 'Standar', mitra: 'Premium (training, marketing, tools)' },
                  { aspect: 'Website Gratis', biasa: '❌', mitra: '✓ Sub-domain .jelantahgo.com' },
                  { aspect: 'Google Maps Listing', biasa: '❌', mitra: '✓ Gratis + optimasi SEO' },
                  { aspect: 'Training & Mentoring', biasa: '❌', mitra: '✓ 2 hari training + support' },
                  { aspect: 'Marketing Materials', biasa: '❌', mitra: '✓ Banner, flyer, social media kit' },
                  { aspect: 'Komunitas & Network', biasa: '❌', mitra: '✓ WhatsApp group + gathering' },
                  { aspect: 'Bonus & Incentive', biasa: '❌', mitra: '✓ Bonus volume + konsistensi' },
                  { aspect: 'Prioritas Pickup', biasa: 'Normal', mitra: '✓ High priority' },
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                    <td className="p-4 font-semibold">{row.aspect}</td>
                    <td className="p-4">{row.biasa}</td>
                    <td className="p-4 font-semibold text-[#0F3D2E]">{row.mitra}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Benefits Detail */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Benefit Lengkap Menjadi Mitra
            </h2>
            <p className="text-lg text-gray-600">Semua support ini Anda dapatkan GRATIS!</p>
          </div>

          <div className="space-y-6">
            {[
              {
                icon: '🌐',
                title: 'Support Marketing Digital Gratis',
                items: [
                  'Website Gratis: Sub-domain profesional (namakamu.jelantahgo.com), desain responsive, hosting gratis selamanya',
                  'Google Maps Listing: Kami buatkan Google Business Profile, optimasi SEO lokal untuk area Anda',
                  'Social Media Kit: Template postingan Instagram/Facebook, caption siap pakai, poster/banner editable',
                  'Backlink dari Website Utama: Link dari JelantahGO.com (domain authority tinggi), traffic referral',
                ],
              },
              {
                icon: '🎓',
                title: 'Training & Pendampingan',
                items: [
                  'Training Awal 2 Hari: Teori bisnis jelantah, cara hitung harga, strategi marketing, customer service',
                  'Praktik Lapangan: Cara identifikasi kualitas, teknik penimbangan, handling customer',
                  'Pendampingan Berkelanjutan: Konsultasi gratis via WhatsApp, monthly meetup, update info pasar',
                ],
              },
              {
                icon: '🛠️',
                title: 'Tools & Peralatan',
                items: [
                  'Timbangan Digital: Subsidi 50% pembelian atau pinjam dengan deposit, kalibrasi gratis',
                  'Wadah/Jerigen: Harga khusus bulk, rekomendasi supplier berkualitas',
                  'Marketing Materials: Banner/spanduk design gratis, X-banner, brosur, kartu nama',
                ],
              },
              {
                icon: '💳',
                title: 'Sistem Pembayaran Fleksibel',
                items: [
                  'Cash on Pickup: Bayar tunai saat dijemput (standar)',
                  'Transfer H+1: Transfer dalam 24 jam untuk mitra rutin',
                  'Tempo 3-7 hari: Untuk mitra dengan track record baik',
                  'Invoice Resmi: Faktur lengkap untuk pembukuan',
                ],
              },
            ].map((benefit, index) => (
              <div key={index} className="card-premium">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-[#0F3D2E]">{benefit.title}</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  {benefit.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#0F3D2E] font-bold mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Cara Bergabung Jadi Mitra
            </h2>
            <p className="text-lg text-gray-600">Proses mudah dan cepat, 1-2 minggu sudah bisa mulai operasi</p>
          </div>

          <div className="space-y-6">
            {[
              {
                number: 1,
                title: 'Registrasi Awal',
                desc: 'Isi form pendaftaran via WhatsApp atau website. Kirim data: nama, alamat, foto KTP, dan ceritakan motivasi Anda.',
                timeline: '⏱️ Timeline: Review 1-2 hari kerja',
              },
              {
                number: 2,
                title: 'Interview & Seleksi',
                desc: 'Interview via telepon/video call 30 menit. Diskusi ekspektasi, komitmen, dan penjelasan detail program mitra.',
                timeline: '⏱️ Timeline: Hasil interview H+1',
              },
              {
                number: 3,
                title: 'Training & Onboarding',
                desc: 'Training 2 hari (teori + praktik). Setup website, Google Maps listing, dan penandatanganan MOU kemitraan.',
                timeline: '⏱️ Timeline: 2-3 hari',
              },
              {
                number: 4,
                title: 'Kick Off & Go Live!',
                desc: 'Mulai promosi di area Anda, kumpulkan jelantah pertama, jual ke JelantahGO, dan terima keuntungan!',
                timeline: '🎉 Selamat! Anda sudah jadi Mitra JelantahGO',
              },
            ].map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-[#0F3D2E] text-white rounded-full flex items-center justify-center font-bold text-xl shadow-soft-lg">
                  {step.number}
                </div>
                <div className="flex-1 card-premium">
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-2">{step.desc}</p>
                  <p className="text-[#0F3D2E] font-semibold">{step.timeline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Kisah Sukses Mitra JelantahGO
            </h2>
            <p className="text-lg text-gray-600">Inspirasi nyata dari mitra yang sudah merasakan manfaatnya</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Pak Doni - Bekasi',
                title: 'Dari Pegawai Swasta ke Pengusaha Full Time',
                stats: [
                  { period: 'Bulan 1-2:', value: '300L (Rp 450rb/bln)' },
                  { period: 'Bulan 5-6:', value: '1000L (Rp 2jt/bln)' },
                  { period: 'Sekarang:', value: '3000L (Rp 6jt/bln)', highlight: true },
                ],
                quote: '"Awalnya skeptis, tapi setelah coba ternyata bisnis jelantah ini real! Sekarang penghasilan sudah melebihi gaji kantor. Yang penting konsisten!"',
                key: 'Konsisten promosi, excellent service, database 50+ warung, koordinator 3 RT/RW',
              },
              {
                name: 'Ibu Rina - Tangerang',
                title: 'Ibu Rumah Tangga Dapat Penghasilan Sendiri',
                stats: [
                  { period: 'Bulan 1:', value: '200L (Rp 300rb)' },
                  { period: 'Bulan 4-6:', value: '800L (Rp 1,2jt/bln)' },
                  { period: 'Sekarang:', value: '1200L (Rp 2jt/bln)', highlight: true },
                ],
                quote: '"Bisnis ini pas banget buat ibu rumah tangga. Bisa sambil ngurus anak, waktunya fleksibel. Senangnya dapet penghasilan sekaligus bantu lingkungan!"',
                key: 'Network ibu-ibu PKK, aktif di grup WhatsApp warga, sosialisasi rutin',
              },
              {
                name: 'Andi - Depok',
                title: 'Mahasiswa yang Bayar Kuliah Sendiri',
                stats: [
                  { period: 'Bulan 1-2:', value: '400L (Rp 600rb/bln)' },
                  { period: 'Bulan 3-6:', value: '1000L (Rp 1,5jt/bln)' },
                  { period: 'Pasca lulus:', value: 'Bisnis utama!', highlight: true },
                ],
                quote: '"Bisnis jelantah biayai kuliah saya sampai lulus. Modal kecil, keuntungan lumayan, waktunya flexible. Sekarang mau jadiin bisnis utama!"',
                key: 'Target kos-kosan & kantin kampus, team work, marketing via Instagram/TikTok',
              },
            ].map((story, index) => (
              <div
                key={index}
                className="card-premium bg-gradient-to-br from-[#F0FDFA] to-[#CCFBF1] border-l-4 border-l-[#0F3D2E]"
              >
                <h3 className="text-lg font-bold text-[#0F3D2E] mb-2">{story.name}</h3>
                <p className="font-semibold text-gray-800 mb-4">{story.title}</p>
                <div className="bg-white rounded-card p-4 mb-4">
                  {story.stats.map((stat, i) => (
                    <div key={i} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                      <span className="text-gray-600 text-sm">{stat.period}</span>
                      <span className={`font-semibold text-sm ${stat.highlight ? 'text-[#0F3D2E]' : ''}`}>
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-700 italic text-sm mb-4 leading-relaxed">"{story.quote}"</p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-600">
                    <strong>Kunci Sukses:</strong> {story.key}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Pertanyaan yang Sering Ditanyakan
            </h2>
            <p className="text-lg text-gray-600">Jawaban untuk pertanyaan umum calon mitra</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card-premium">
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full flex justify-between items-center text-left font-bold text-[#0F3D2E]"
                >
                  <span>{faq.question}</span>
                  <span className="text-2xl transition-transform duration-300">
                    {activeFaq === index ? '▲' : '▼'}
                  </span>
                </button>
                {activeFaq === index && (
                  <div className="mt-4 pt-4 border-t border-gray-200 text-gray-600">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
              Syarat Menjadi Mitra
            </h2>
            <p className="text-lg text-gray-600">Persyaratan yang mudah dan realistis</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="card-premium">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-6 text-center">✅ Syarat Umum</h3>
              <ul className="space-y-3 text-gray-700">
                {[
                  'Usia minimal 21 tahun',
                  'Memiliki KTP/identitas resmi',
                  'Domisili di Jabodetabek atau Jawa Barat/Tengah',
                  'Punya kendaraan (motor/mobil)',
                  'Punya smartphone untuk komunikasi',
                  'Punya tempat penyimpanan jelantah',
                  'Komitmen serius minimal 6 bulan',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#0F3D2E] font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-premium">
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-6 text-center">❌ Yang TIDAK Wajib</h3>
              <ul className="space-y-3 text-gray-700">
                {[
                  'Tidak harus punya toko/kantor',
                  'Tidak harus full time',
                  'Tidak harus punya pengalaman',
                  'Tidak ada biaya franchise',
                  'Tidak harus modal besar',
                  'Tidak perlu skill khusus',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="card-premium bg-gradient-to-br from-[#F9F8F6] to-[#E8F0E3] border-l-4 border-l-[#0F3D2E]">
            <h4 className="text-xl font-bold text-[#0F3D2E] mb-4">⭐ Nilai Plus (Tapi Tidak Wajib):</h4>
            <div className="grid md:grid-cols-2 gap-2">
              {[
                'Punya network luas (banyak kenalan)',
                'Aktif di sosial media',
                'Pernah berbisnis sebelumnya',
                'Tinggal di area padat penduduk',
                'Pengalaman logistik/pengepulan',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-[#0F3D2E] font-bold">•</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-bg-dots py-20">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm rounded-card-lg p-8 lg:p-12 border border-white/10">
            <div className="text-center">
              <div className="inline-block bg-[#F59E0B] text-white px-6 py-3 rounded-full text-sm font-bold mb-6">
                100% GRATIS - TANPA FRANCHISE FEE
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Siap Mulai Bisnis Jelantah?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Bergabunglah dengan 30+ mitra sukses kami dan raih penghasilan jutaan rupiah per bulan!
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-card p-6 mb-8 text-left">
                <p className="font-semibold mb-3">Format Pesan WhatsApp:</p>
                <div className="bg-black/20 rounded-card p-4 font-mono text-sm whitespace-pre-wrap leading-relaxed">
                  Halo JelantahGO,
                  Saya tertarik bergabung jadi mitra.

                  Nama: [Nama Lengkap]
                  Usia: [Usia]
                  Domisili: [Kota/Kecamatan]
                  Pekerjaan: [Pegawai/Wirausaha/Mahasiswa/IRT]
                  Motivasi: [Ceritakan singkat]

                  Mohon info selengkapnya. Terima kasih!
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/6285183033995?text=Halo%20JelantahGO%2C%20saya%20tertarik%20bergabung%20jadi%20mitra"
                  target="_blank"
                  rel="noopener"
                  className="bg-white text-[#0F3D2E] hover:bg-[#F9F8F6] px-8 py-4 rounded-card font-bold text-lg inline-flex items-center justify-center gap-2 transition-smooth shadow-soft-lg hover:shadow-soft-xl"
                >
                  📱 Daftar via WhatsApp
                </a>
                <a
                  href="tel:+6285183033995"
                  className="bg-transparent border-2 border-white/30 hover:bg-white/10 hover:border-white px-8 py-4 rounded-card font-bold text-lg inline-flex items-center justify-center gap-2 transition-smooth"
                >
                  📞 Telepon Sekarang
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-white/30">
                <p className="text-sm opacity-90 mb-2">
                  📧 Email: info.jelantahgo@gmail.com
                </p>
                <p className="text-sm opacity-90">
                  🕐 Jam Konsultasi: Senin-Sabtu, 09.00-21.00 WIB
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages Section */}
      <section className="py-16 bg-[#F9F8F6]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#0F3D2E] mb-4">
              Informasi Terkait
            </h2>
            <p className="text-gray-600">
              Jelajahi halaman lain untuk informasi lengkap tentang program mitra dan layanan kami
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link
              href="/pricing"
              className="card-premium hover-lift text-center group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-smooth">💰</div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-2">Harga Terbaru</h3>
              <p className="text-sm text-gray-600">Cek harga minyak jelantah terbaru 2025</p>
            </Link>
            <Link
              href="/blog/peluang-bisnis-pengepul-jelantah"
              className="card-premium hover-lift text-center group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-smooth">📚</div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-2">Panduan Bisnis</h3>
              <p className="text-sm text-gray-600">Panduan lengkap bisnis pengepul jelantah</p>
            </Link>
            <Link
              href="/contact"
              className="card-premium hover-lift text-center group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-smooth">📞</div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-2">Hubungi Kami</h3>
              <p className="text-sm text-gray-600">Konsultasi gratis untuk calon mitra</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
