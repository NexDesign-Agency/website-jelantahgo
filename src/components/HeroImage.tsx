import Image from 'next/image'

export default function HeroImage() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="relative rounded-card-lg overflow-hidden shadow-layered hover:shadow-soft-xl transition-smooth">
          <Image
            src="https://res.cloudinary.com/dknswj9co/image/upload/v1760998331/jelantahgo_6_u3erug.webp"
            alt="Tim JelantahGO sedang menjemput minyak jelantah dari pelanggan di Jakarta dan membayar tunai langsung"
            width={1200}
            height={630}
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
