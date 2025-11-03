interface ReviewSchemaProps {
  ratingValue: string
  reviewCount: string
  reviews?: Array<{
    authorName: string
    ratingValue: string
    reviewBody: string
    datePublished?: string
  }>
}

export default function ReviewSchema({ 
  ratingValue, 
  reviewCount,
  reviews = []
}: ReviewSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://jelantahgo.com/#organization',
    name: 'JelantahGO',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue,
      reviewCount,
      bestRating: '5',
      worstRating: '1',
    },
    review: reviews.length > 0 ? reviews.map((review) => ({
      '@type': 'Review' as const,
      author: {
        '@type': 'Person' as const,
        name: review.authorName,
      },
      reviewRating: {
        '@type': 'Rating' as const,
        ratingValue: review.ratingValue,
        bestRating: '5',
        worstRating: '1',
      },
      reviewBody: review.reviewBody,
      ...(review.datePublished && { datePublished: review.datePublished }),
    })) : undefined,
  }

  // Remove review if empty
  if (!schema.review || schema.review.length === 0) {
    delete schema.review
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

