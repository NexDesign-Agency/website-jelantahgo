interface LocalBusinessSchemaProps {
  name?: string
  address?: {
    streetAddress?: string
    addressLocality?: string
    addressRegion?: string
    postalCode?: string
    addressCountry?: string
  }
  geo?: {
    latitude: number
    longitude: number
  }
  areaServed?: string[]
  priceRange?: string
}

export default function LocalBusinessSchema({
  name = 'JelantahGO - Pengepul Minyak Jelantah',
  address,
  geo,
  areaServed,
  priceRange = 'Rp7500 - Rp8500',
}: LocalBusinessSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    image: 'https://res.cloudinary.com/dknswj9co/image/upload/v1760998331/jelantahgo_6_u3erug.webp',
    url: 'https://jelantahgo.com',
    telephone: '+6285183033995',
    email: 'info.jelantahgo@gmail.com',
    priceRange,
    ...(address && {
      address: {
        '@type': 'PostalAddress',
        ...address,
      },
    }),
    ...(geo && {
      geo: {
        '@type': 'GeoCoordinates',
        ...geo,
      },
    }),
    ...(areaServed && areaServed.length > 0 && { areaServed }),
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '20:00',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

