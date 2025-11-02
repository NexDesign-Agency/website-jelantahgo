import React from 'react'

interface ServiceSchemaProps {
  name?: string
  description?: string
  provider?: string
  areaServed?: string[]
  serviceType?: string
  url?: string
}

export default function ServiceSchema({
  name = 'Layanan Penjemputan Minyak Jelantah',
  description = 'Layanan penjemputan minyak jelantah gratis di seluruh wilayah Jabodetabek untuk volume minimal 40 liter. Proses cepat, transparan, dan bayar tunai langsung di tempat.',
  provider = 'JelantahGO',
  areaServed = ['Jakarta', 'Tangerang', 'Bekasi', 'Depok', 'Bogor'],
  serviceType = 'Used cooking oil collection and recycling service',
  url = 'https://jelantahgo.com/area-layanan',
}: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: provider,
      url: 'https://jelantahgo.com',
    },
    areaServed: areaServed.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    serviceType,
    url,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'IDR',
      description: 'Penjemputan gratis untuk volume minimal 40 liter',
    },
  }

  return (
    <script
      id="service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

