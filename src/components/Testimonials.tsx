import ReviewSchema from './ReviewSchema'

export default function Testimonials() {
  const reviews = [
    {
      authorName: 'Ibu Siti',
      ratingValue: '5',
      reviewBody: 'Prosesnya sangat mudah dan cepat... sebulan bisa dapat tambahan Rp 300-400 ribu. Recommended!',
      datePublished: '2024-01-15',
    },
    {
      authorName: 'Pak Budi',
      ratingValue: '5',
      reviewBody: 'Dulu dibuang percuma, sekarang jadi penghasilan tambahan. Harga paling tinggi!',
      datePublished: '2024-02-20',
    },
    {
      authorName: 'Doni Ramadhan',
      ratingValue: '5',
      reviewBody: 'Sudah jadi bisnis sampingan yang stabil. Bisa dapat 2-3 juta per bulan.',
      datePublished: '2024-03-10',
    },
  ]

  return (
    <>
      <ReviewSchema 
        ratingValue="4.9" 
        reviewCount="1500" 
        reviews={reviews}
      />
      <section className="py-20 bg-[#F9F8F6]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            TESTIMONI
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
            Testimoni Pelanggan
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Apa kata mereka yang sudah jual jelantah ke JelantahGO?
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              stars: 5,
              quote: 'Prosesnya sangat mudah dan cepat... sebulan bisa dapat tambahan Rp 300-400 ribu. Recommended!',
              name: 'Ibu Siti',
              location: 'Jakarta Barat',
              since: 'Pelanggan sejak 2022'
            },
            {
              stars: 5,
              quote: 'Dulu dibuang percuma, sekarang jadi penghasilan tambahan. Harga paling tinggi!',
              name: 'Pak Budi',
              location: 'Tangerang',
              since: 'Warung Nasi Ibu Budi'
            },
            {
              stars: 5,
              quote: 'Sudah jadi bisnis sampingan yang stabil. Bisa dapat 2-3 juta per bulan.',
              name: 'Doni Ramadhan',
              location: 'Bekasi',
              since: 'Mitra JelantahGO'
            }
          ].map((testimonial, index) => (
            <div
              key={index}
              className="card-premium hover-lift"
            >
              <div className="text-3xl text-yellow-400 mb-4">
                {'★'.repeat(testimonial.stars)}
              </div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-[#0F3D2E] mb-1">
                  {testimonial.name} - {testimonial.location}
                </p>
                <p className="text-sm text-gray-500">{testimonial.since}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Lihat lebih banyak{' '}
            <a href="/testimoni" className="text-[#0F3D2E] font-semibold hover:underline">
              testimoni
            </a>
            {' '}atau baca{' '}
            <a href="/blog/kisah-sukses-mitra" className="text-[#0F3D2E] font-semibold hover:underline">
              kisah sukses mitra
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
