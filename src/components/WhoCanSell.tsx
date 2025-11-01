export default function WhoCanSell() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            UNTUK SIAPA
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
            Siapa yang Bisa Jual Minyak Jelantah ke JelantahGO?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Kami menerima minyak jelantah dari berbagai sumber.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: '🏡',
              title: 'Rumah Tangga',
              description: 'Ibu rumah tangga bisa kumpulkan jelantah sebagai penghasilan tambahan.'
            },
            {
              icon: '🍜',
              title: 'Warung & Restoran',
              description: 'Usaha kuliner bisa jual rutin dalam volume besar.'
            },
            {
              icon: '🏨',
              title: 'Hotel & Kantin',
              description: 'Institusi besar jadi partner rutin kami.'
            },
            {
              icon: '🤝',
              title: 'Pengepul/Mitra',
              description: 'Punya jiwa wirausaha? Pelajari selengkapnya tentang peluang bisnis menjadi mitra pengepul jelantah dan dapatkan support penuh dari kami.',
              hasLink: true
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
                {item.hasLink ? (
                  <>
                    Punya jiwa wirausaha? Pelajari selengkapnya tentang{' '}
                    <a href="/blog/peluang-bisnis-pengepul-jelantah" className="text-[#0F3D2E] font-semibold hover:underline">
                      peluang bisnis menjadi mitra pengepul jelantah
                    </a>
                    {' '}dan dapatkan support penuh dari kami.
                  </>
                ) : (
                  item.description
                )}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/mitra"
            className="inline-flex items-center gap-2 text-[#0F3D2E] font-semibold hover:gap-3 transition-smooth"
          >
            Selengkapnya →
          </a>
        </div>
      </div>
    </section>
  )
}
