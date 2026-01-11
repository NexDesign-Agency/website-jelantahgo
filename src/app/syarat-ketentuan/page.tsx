import type { Metadata } from 'next'
import Image from 'next/image'
import { FileText, CheckCircle, AlertCircle, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Syarat & Ketentuan Jual Minyak Jelantah | JelantahGO',
  description: 'Syarat & ketentuan jual minyak jelantah di JelantahGO: Standar kualitas, min 40L penjemputan gratis, bayar tunai langsung. Harga transparan Rp 6.500-7.500/L.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://jelantahgo.com/syarat-ketentuan',
  },
}

export default function SyaratKetentuanPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg-dots py-20">
        <div className="container-custom text-center relative z-10">
          <div className="inline-block bg-[#D9E3D3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            SYARAT & KETENTUAN 📋
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Syarat Ketentuan Jual Minyak Jelantah Jakarta
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Panduan lengkap standar kualitas, harga transparan, dan proses jual beli yang fair untuk semua pelanggan JelantahGo Jakarta
          </p>
        </div>
      </section>

      {/* Image */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <Image
            src="https://res.cloudinary.com/dknswj9co/image/upload/v1761163997/jelantahgo_19_n7x6ka.webp"
            alt="Syarat dan ketentuan layanan jual beli minyak jelantah JelantahGO - Standar kualitas, layanan penjemputan, dan prosedur pembayaran"
            width={1200}
            height={630}
            className="w-full max-w-4xl mx-auto rounded-card-lg shadow-layered"
            loading="lazy"
          />
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-[#F9F8F6]">
        <div className="container-custom max-w-4xl">
          <div className="space-y-6">
            {/* Definisi */}
            <div className="card-premium p-8">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-[#0F3D2E]" />
                <h2 className="text-2xl font-bold text-[#0F3D2E]">Definisi</h2>
              </div>
              <div className="space-y-3 text-gray-700">
                <p><strong className="text-[#0F3D2E]">JelantahGO:</strong> Pihak penyelenggara layanan jual beli minyak jelantah.</p>
                <p><strong className="text-[#0F3D2E]">Pelanggan:</strong> Individu atau badan usaha yang menjual minyak jelantah kepada JelantahGO.</p>
                <p><strong className="text-[#0F3D2E]">Minyak Jelantah:</strong> Minyak goreng bekas pakai yang memenuhi kriteria kualitas yang ditetapkan.</p>
              </div>
            </div>

            {/* Kualitas */}
            <div className="card-premium p-8">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-[#0F3D2E]" />
                <h2 className="text-2xl font-bold text-[#0F3D2E]">Kualitas Minyak Jelantah</h2>
              </div>
              <p className="text-gray-700 mb-4">Pelanggan wajib memastikan minyak jelantah yang dijual memenuhi standar berikut:</p>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>Bebas dari campuran air, sisa makanan padat, dan kotoran lainnya.</li>
                <li>Tidak terkontaminasi bahan kimia berbahaya, sabun, atau deterjen.</li>
                <li>Disimpan dalam wadah yang bersih dan tertutup.</li>
              </ul>
              <p className="text-gray-700 mt-4">
                <strong className="text-[#0F3D2E]">JelantahGO berhak menolak atau mengurangi harga</strong> jika kualitas minyak jelantah tidak memenuhi standar.
              </p>
            </div>

            {/* Penjemputan */}
            <div className="card-premium p-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-[#0F3D2E]" />
                <h2 className="text-2xl font-bold text-[#0F3D2E]">Layanan Penjemputan</h2>
              </div>
              <p className="text-gray-700">
                Layanan penjemputan gratis berlaku untuk volume minimum <strong className="text-[#0F3D2E]">40 liter</strong> di area layanan yang tertera di website. Jadwal penjemputan akan disepakati bersama antara Pelanggan dan tim JelantahGO.
              </p>
            </div>

            {/* Harga & Pembayaran */}
            <div className="card-premium p-8">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-6 h-6 text-[#0F3D2E]" />
                <h2 className="text-2xl font-bold text-[#0F3D2E]">Harga dan Pembayaran</h2>
              </div>
              <p className="text-gray-700">
                Harga minyak jelantah yang berlaku adalah harga yang tertera di website pada saat transaksi dan dapat berubah sewaktu-waktu. Pembayaran dilakukan secara <strong className="text-[#0F3D2E]">tunai</strong> setelah proses penimbangan selesai di lokasi Pelanggan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

