import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jelantahgo.com'

  // Static pages
  const staticPages = [
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

  // Blog posts - all 35 articles
  const blogPosts = [
    'ancaman-dan-peluang-minyak-jelantah',
    'bahaya-buang-jelantah-sembarangan',
    'bahaya-minyak-jelantah-kesehatan',
    'cara-jual-jelantah-menguntungkan',
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
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...blogPosts]
}

