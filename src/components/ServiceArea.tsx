export default function ServiceArea() {
  return (
    <section className="py-20 bg-[#F9F8F6]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            AREA LAYANAN
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
            AREA LAYANAN KAMI
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Kami melayani penjemputan di seluruh wilayah Jabodetabek:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: '📍',
              title: 'Jakarta',
              description: 'Jakarta Barat, Pusat, Selatan, Utara, Timur'
            },
            {
              icon: '📍',
              title: 'Tangerang',
              description: 'Kota Tangerang, Tangsel, Kab. Tangerang'
            },
            {
              icon: '📍',
              title: 'Bekasi',
              description: 'Kota & Kab. Bekasi'
            },
            {
              icon: '📍',
              title: 'Depok & Bogor',
              description: 'Kota Depok, Kota Bogor, dan sekitarnya'
            }
          ].map((area, index) => (
            <div
              key={index}
              className="card-premium text-center hover-lift group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-smooth">
                {area.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">{area.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            <strong>Catatan:</strong> Untuk area di luar Jabodetabek, Anda bisa bergabung sebagai <a href="/mitra" className="text-[#0F3D2E] font-semibold hover:underline">mitra pengepul</a>.
          </p>
          <a
            href="/area-layanan"
            className="inline-flex items-center gap-2 text-[#0F3D2E] font-semibold hover:gap-3 transition-smooth"
          >
            Selengkapnya tentang area layanan jelantahgo →
          </a>
        </div>
      </div>
    </section>
  )
}
