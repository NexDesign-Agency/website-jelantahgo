import ReviewSchema from './ReviewSchema'

export default function Testimonials() {
  const reviews = [
    {
      authorName: 'Ibu Sari',
      ratingValue: '5',
      reviewBody: 'Pengepul yang profesional. Harga terbaik dan langsung dibayar tunai.',
      datePublished: '2024-01-15',
    },
    {
      authorName: 'Pak Andi',
      ratingValue: '5',
      reviewBody: 'Minyak goreng bekas yang biasa dibuang sekarang jadi penghasilan tambahan. Recommended!',
      datePublished: '2024-02-20',
    },
    {
      authorName: 'Doni',
      ratingValue: '5',
      reviewBody: 'Sebagai mitra, penghasilan stabil 2-3 juta/bulan dari limbah dapur.',
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
            💬 TESTIMONI PELANGGAN
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              quote: 'Pengepul yang profesional. Harga terbaik dan langsung dibayar tunai.',
              name: 'Ibu Sari',
              location: 'Jakarta Selatan'
            },
            {
              quote: 'Minyak goreng bekas yang biasa dibuang sekarang jadi penghasilan tambahan. Recommended!',
              name: 'Pak Andi',
              location: 'Tangerang'
            },
            {
              quote: 'Sebagai mitra, penghasilan stabil 2-3 juta/bulan dari limbah dapur.',
              name: 'Doni',
              location: 'Bekasi'
            }
          ].map((testimonial, index) => (
            <div
              key={index}
              className="card-premium hover-lift"
            >
              <p className="text-gray-700 mb-4 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="text-xl text-yellow-400 mb-3">
                ⭐️⭐️⭐️⭐️⭐️
              </div>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-[#0F3D2E]">
                  - {testimonial.name}, {testimonial.location}
                </p>
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
            <a href="/blog/kisah-sukses-pengepul-jelantah-pak-doni" className="text-[#0F3D2E] font-semibold hover:underline">
              kisah sukses mitra
            </a>
            .
          </p>
        </div>
      </div>
    </section>
    </>
  )
}
