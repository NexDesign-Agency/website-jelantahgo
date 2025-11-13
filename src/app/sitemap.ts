import { MetadataRoute } from 'next'

const baseUrl = 'https://jelantahgo.com'

// Static pages sitemap
export async function sitemapPage(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cara-kerja`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cara-jual-minyak-jelantah`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mengapa-jelantahgo`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mitra`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/area-layanan`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/testimoni`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/syarat-ketentuan`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
  ]
}

// Blog posts sitemap
export async function sitemapPost(): Promise<MetadataRoute.Sitemap> {
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

  return blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
}

// Location pages sitemap
export async function sitemapLokasi(): Promise<MetadataRoute.Sitemap> {
  const locationPages = [
    'jakarta',
    'jakarta-barat',
    'jakarta-pusat',
    'jakarta-selatan',
    'jakarta-timur',
    'jakarta-utara',
  ]

  return locationPages.map((location) => ({
    url: `${baseUrl}/${location}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))
}

// Main sitemap index
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/sitemap-page.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sitemap-post.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sitemap-lokasi.xml`,
      lastModified: new Date(),
    },
  ]
}

