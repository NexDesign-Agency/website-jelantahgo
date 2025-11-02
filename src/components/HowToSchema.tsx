import React from 'react'

interface HowToStep {
  name: string
  text: string
  image?: string
  url?: string
}

interface HowToSchemaProps {
  name: string
  description: string
  steps: HowToStep[]
  image?: string
  totalTime?: string
}

export default function HowToSchema({
  name,
  description,
  steps,
  image,
  totalTime,
}: HowToSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    image: image || 'https://res.cloudinary.com/dknswj9co/image/upload/v1761171104/jelantah-go_9_pdl5dv.webp',
    totalTime: totalTime || 'PT1H',
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.image && { image: step.image }),
      ...(step.url && { url: step.url }),
    })),
  }

  return (
    <script
      id="howto-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

