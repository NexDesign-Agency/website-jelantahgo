import React from 'react'

interface ContactPageSchemaProps {
  name?: string
  description?: string
  telephone?: string
  email?: string
  address?: {
    streetAddress?: string
    addressLocality?: string
    addressRegion?: string
    postalCode?: string
    addressCountry?: string
  }
  openingHours?: string[]
  url?: string
}

export default function ContactPageSchema({
  name = 'JelantahGO',
  description = 'Hubungi JelantahGO untuk menjual minyak jelantah. Layanan penjemputan gratis, bayar tunai langsung.',
  telephone = '+6285183033995',
  email = 'info.jelantahgo@gmail.com',
  address,
  openingHours = ['Mo-Sa 11:00-23:00'],
  url = 'https://jelantahgo.com/contact',
}: ContactPageSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name,
    description,
    mainEntity: {
      '@type': 'Organization',
      name,
      url: 'https://jelantahgo.com',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone,
        email,
        contactType: 'Customer Service',
        availableLanguage: ['Indonesian'],
        areaServed: 'ID',
      },
      ...(address && {
        address: {
          '@type': 'PostalAddress',
          ...address,
        },
      }),
    },
    url,
  }

  return (
    <script
      id="contactpage-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

