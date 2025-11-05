export default function WhoCanSell() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            UNTUK SIAPA
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
            👥 KAMI MELAYANI:
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: '🏠',
              title: 'RUMAH TANGGA',
              description: 'Hasilkan tambahan Rp 200.000-500.000/bulan dari minyak goreng bekas dapur.'
            },
            {
              icon: '🍽️',
              title: 'USAHA KULINER',
              description: 'Restoran, warung, catering dengan volume minyak bekas besar.'
            },
            {
              icon: '🏨',
              title: 'HOTEL & KANTIN',
              description: 'Institusi dengan volume limbah tinggi.'
            },
            {
              icon: '🤝',
              title: 'MITRA PENGEPUL',
              description: 'Peluang bisnis dengan dukungan penuh dari tim profesional.'
            }
          ].map((item, index) => (
            <div
              key={index}
              className="card-premium text-center hover-lift group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-smooth">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0F3D2E] mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
