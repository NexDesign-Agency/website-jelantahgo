import React from 'react'

interface OrganizationSchemaProps {
  name?: string
  url?: string
  logo?: string
  description?: string
  email?: string
  telephone?: string
  address?: {
    streetAddress?: string
    addressLocality?: string
    addressRegion?: string
    postalCode?: string
    addressCountry?: string
  }
  sameAs?: string[]
}

export default function OrganizationSchema({
  name = 'JelantahGO',
  url = 'https://jelantahgo.com',
  logo = 'https://res.cloudinary.com/dknswj9co/image/upload/v1760998331/jelantahgo_6_u3erug.webp',
  description = 'Pengepul minyak jelantah terpercaya di Jakarta sejak 2020. Harga tertinggi Rp 8.500/L, jemput gratis, bayar tunai.',
  email = 'info.jelantahgo@gmail.com',
  telephone = '+6285183033995',
  address,
  sameAs = [],
}: OrganizationSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    logo,
    description,
    email,
    telephone,
    ...(address && {
      address: {
        '@type': 'PostalAddress',
        ...address,
      },
    }),
    ...(sameAs.length > 0 && { sameAs }),
  }

  return (
    <script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

