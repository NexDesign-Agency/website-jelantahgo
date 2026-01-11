import { NextRequest } from 'next/server'

const baseUrl = 'https://jelantahgo.com'

export async function GET(request: NextRequest) {
  const pages = [
    { url: baseUrl, priority: '1.0', changefreq: 'weekly' },
    { url: `${baseUrl}/about`, priority: '0.8', changefreq: 'monthly' },
    { url: `${baseUrl}/pricing`, priority: '0.9', changefreq: 'weekly' },
    { url: `${baseUrl}/cara-kerja`, priority: '0.8', changefreq: 'monthly' },
    { url: `${baseUrl}/cara-jual-minyak-jelantah`, priority: '0.8', changefreq: 'monthly' },
    { url: `${baseUrl}/misi-lingkungan-jelantahgo`, priority: '0.7', changefreq: 'monthly' },
    { url: `${baseUrl}/blog`, priority: '0.9', changefreq: 'daily' },
    { url: `${baseUrl}/mitra`, priority: '0.7', changefreq: 'monthly' },
    { url: `${baseUrl}/contact`, priority: '0.7', changefreq: 'monthly' },
    { url: `${baseUrl}/area-layanan`, priority: '0.7', changefreq: 'monthly' },
    { url: `${baseUrl}/testimoni`, priority: '0.6', changefreq: 'monthly' },
    { url: `${baseUrl}/syarat-ketentuan`, priority: '0.5', changefreq: 'yearly' },
  ]

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}