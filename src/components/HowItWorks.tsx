export default function HowItWorks() {
  return (
    <section id="cara-kerja" className="py-20 bg-[#F9F8F6]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            CARA KERJA
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
            Cara Jual Minyak Jelantah yang Mudah dan Praktis
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Proses <strong>jual minyak jelantah</strong> di JelantahGO sangat sederhana. Jika ini pertama kalinya bagi Anda, kami sarankan membaca panduan lengkap kami untuk menjual minyak jelantah. Berikut 4 langkah singkatnya:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              number: '1',
              title: 'Kumpulkan Jelantah',
              description: 'Minimal 40 liter dalam wadah tertutup.',
              icon: '🪣'
            },
            {
              number: '2',
              title: 'Hubungi Kami',
              description: 'Via WhatsApp atau telepon.',
              icon: '📞'
            },
            {
              number: '3',
              title: 'Dijemput Tim Kami',
              description: 'Kurir datang sesuai jadwal.',
              icon: '🚚'
            },
            {
              number: '4',
              title: 'Terima Uang Tunai',
              description: 'Bayar langsung di tempat!',
              icon: '💵'
            }
          ].map((step, index) => (
            <div
              key={index}
              className="card-premium text-center hover-lift group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-smooth">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/cara-kerja"
            className="inline-flex items-center gap-2 text-[#0F3D2E] font-semibold hover:gap-3 transition-smooth"
          >
            Selengkapnya →
          </a>
        </div>
      </div>
    </section>
  )
}
