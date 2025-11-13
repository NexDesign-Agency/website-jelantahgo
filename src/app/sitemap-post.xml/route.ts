import { NextRequest } from 'next/server'

const baseUrl = 'https://jelantahgo.com'

export async function GET(request: NextRequest) {
  const blogSlugs = [
    'aturan-baru-jelantah-2025',
    'cara-jual-minyak-jelantah-3-langkah',
    'cara-kumpulkan-100-liter-jelantah',
    'cara-menyimpan-minyak-jelantah',
    'checklist-peralatan-pengepul-jelantah',
    'ciri-pengepul-jelantah-nakal',
    'dampak-jelantah-ekosistem',
    'diy-sabun-lilin-minyak-jelantah',
    'fatberg-monster-bawah-tanah-jelantah',
    'harga-jelantah-oktober-2025',
    'harga-jual-minyak-jelantah-jakarta-utara',
    'jemput-jelantah-gratis-jakarta-barat',
    'jual-minyak-jelantah-bekasi',
    'jual-minyak-jelantah-depok-bogor',
    'jual-minyak-jelantah-jakarta',
    'jual-minyak-jelantah-jakarta-timur',
    'jual-minyak-jelantah-tangerang',
    'kesalahan-menyimpan-jelantah',
    'kesalahan-penjual-jelantah-pemula',
    'kisah-sukses-ibu-rina',
    'kisah-sukses-pengepul-jelantah-pak-doni',
    'manajemen-limbah-jelantah-jakarta-pusat',
    'manajemen-logistik-pengepul-jelantah',
    'mitra-jelantahgo-vs-mandiri',
    'negosiasi-harga-pengepul',
    'panduan-bisnis-pengepul-jelantah',
    'panduan-jual-minyak-jelantah',
    'peluang-bisnis-pengepul-jelantah',
    'pengepul-jelantah-jakarta-selatan',
    'regulasi-limbah-b3-jelantah-bisnis-kuliner',
    'skrip-template-penawaran-kerjasama-jelantah',
    'waktu-terbaik-jual-jelantah',
  ]

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${blogSlugs.map(slug => `  <url>
    <loc>${baseUrl}/blog/${slug}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('\n')}
</urlset>`

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}