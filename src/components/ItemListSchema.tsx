import React from 'react'

interface ItemListItem {
  name: string
  url: string
  description?: string
  image?: string
}

interface ItemListSchemaProps {
  name: string
  description: string
  items: ItemListItem[]
}

export default function ItemListSchema({
  name,
  description,
  items,
}: ItemListSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    description,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Article',
        '@id': item.url,
        name: item.name,
        ...(item.description && { description: item.description }),
        ...(item.image && { image: item.image }),
        url: item.url,
      },
    })),
  }

  return (
    <script
      id="itemlist-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

