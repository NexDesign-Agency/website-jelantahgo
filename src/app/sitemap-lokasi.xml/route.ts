import { NextRequest } from 'next/server'

const baseUrl = 'https://jelantahgo.com'

export async function GET(request: NextRequest) {
  const locationPages = [
    'jakarta',
    'jakarta-barat',
    'jakarta-pusat',
    'jakarta-selatan',
    'jakarta-timur',
    'jakarta-utara',
  ]

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${locationPages.map(location => `  <url>
    <loc>${baseUrl}/${location}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}