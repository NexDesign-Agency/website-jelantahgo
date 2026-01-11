/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Disabled for development - uncomment ONLY for static export build (production)
  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  // trailingSlash: false (default) - better for SEO, no unnecessary redirects
  async redirects() {
    return [
      // Redirect /harga to /pricing
      {
        source: '/harga',
        destination: '/pricing',
        permanent: true,
      },
      {
        source: '/harga/',
        destination: '/pricing',
        permanent: true,
      },
      // Redirect URLs with .html to without .html
      {
        source: '/kontak.html',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/testimoni.html',
        destination: '/testimoni',
        permanent: true,
      },
      {
        source: '/syarat-ketentuan.html',
        destination: '/syarat-ketentuan',
        permanent: true,
      },
      {
        source: '/faq.html',
        destination: '/',
        permanent: true,
      },
      // Blog posts with .html
      {
        source: '/blog/:slug.html',
        destination: '/blog/:slug',
        permanent: true,
      },
      // Old blog URLs that don't exist
      {
        source: '/blog/peluang-bisnis-pengepul-jelantah.html',
        destination: '/blog/peluang-bisnis-pengepul-jelantah',
        permanent: true,
      },
      {
        source: '/blog/kisah-sukses-mitra.html',
        destination: '/blog/kisah-sukses-pengepul-jelantah-pak-doni',
        permanent: true,
      },
      {
        source: '/blog/kisah-sukses-mitra',
        destination: '/blog/kisah-sukses-pengepul-jelantah-pak-doni',
        permanent: true,
      },
      {
        source: '/blog/kisah-sukses-mitra/',
        destination: '/blog/kisah-sukses-pengepul-jelantah-pak-doni',
        permanent: true,
      },
      {
        source: '/blog/kesalahan-menyimpan-jelantah.html',
        destination: '/blog/kesalahan-menyimpan-jelantah',
        permanent: true,
      },
      {
        source: '/blog/bahaya-menjual-jelantah-ke-pihak-tidak-resmi',
        destination: '/blog/ciri-pengepul-jelantah-nakal',
        permanent: true,
      },
      {
        source: '/blog/pengepul-minyak-jelantah-panduan-lengkap',
        destination: '/blog/panduan-jual-minyak-jelantah',
        permanent: true,
      },
      {
        source: '/blog/analisis-bisnis-jelantah-modal-omzet-roi',
        destination: '/blog/peluang-bisnis-pengepul-jelantah',
        permanent: true,
      },
      {
        source: '/blog/rekomendasi-pengepul-jelantah-terpercaya',
        destination: '/blog/ciri-pengepul-jelantah-nakal',
        permanent: true,
      },
      {
        source: '/blog/kesalahan-umum-saat-jual-jelantah',
        destination: '/blog/kesalahan-penjual-jelantah-pemula',
        permanent: true,
      },
      {
        source: '/blog/potensi-jelantah-sebagai-sumber-energi-terbarukan',
        destination: '/blog/ancaman-dan-peluang-minyak-jelantah',
        permanent: true,
      },
      {
        source: '/blog/manfaat-ekonomi-menjual-jelantah-bagi-rumah-tangga',
        destination: '/blog/cara-jual-jelantah-menguntungkan',
        permanent: true,
      },
      {
        source: '/blog/jual-minyak-jelantah-tips-untung',
        destination: '/blog/cara-jual-jelantah-menguntungkan',
        permanent: true,
      },
      {
        source: '/blog/manfaat-menjual-minyak-jelantah',
        destination: '/blog/cara-jual-jelantah-menguntungkan',
        permanent: true,
      },
      {
        source: '/blog/mengenal-biodiesel-dari-jelantah',
        destination: '/blog/ancaman-dan-peluang-minyak-jelantah',
        permanent: true,
      },
      {
        source: '/blog/bisnis-minyak-jelantah-cara-memulai',
        destination: '/blog/panduan-bisnis-pengepul-jelantah',
        permanent: true,
      },
      {
        source: '/blog/strategi-mengembangkan-bisnis-jual-beli-jelantah',
        destination: '/blog/panduan-bisnis-pengepul-jelantah',
        permanent: true,
      },
      {
        source: '/blog/tips-harga-tinggi-saat-jual-jelantah',
        destination: '/blog/cara-jual-jelantah-menguntungkan',
        permanent: true,
      },
      {
        source: '/blog/syarat-prosedur-jual-jelantah-resmi',
        destination: '/blog/panduan-jual-minyak-jelantah',
        permanent: true,
      },
      {
        source: '/blog/peran-kurir-dalam-ekosistem-jelantah',
        destination: '/blog/panduan-bisnis-pengepul-jelantah',
        permanent: true,
      },
      {
        source: '/blog/faktor-yang-mempengaruhi-harga-jelantah',
        destination: '/blog/harga-jelantah-oktober-2025',
        permanent: true,
      },
      {
        source: '/blog/kisah-sukses-umkm-dari-bisnis-jelantah',
        destination: '/blog/kisah-sukses-pengepul-jelantah-pak-doni',
        permanent: true,
      },
      {
        source: '/blog/apa-itu-pengepul-minyak-jelantah',
        destination: '/blog/panduan-jual-minyak-jelantah',
        permanent: true,
      },
      {
        source: '/blog/prediksi-harga-jelantah-2025-2030',
        destination: '/blog/harga-jelantah-oktober-2025',
        permanent: true,
      },
      {
        source: '/blog/dampak-pembuangan-jelantah-ke-lingkungan-dan-cara-mencegahnya',
        destination: '/blog/bahaya-buang-jelantah-sembarangan',
        permanent: true,
      },
      {
        source: '/blog/bagaimana-proses-jelantah-menjadi-biodiesel',
        destination: '/blog/ancaman-dan-peluang-minyak-jelantah',
        permanent: true,
      },
      {
        source: '/blog/perbedaan-pengepul-resmi-dan-tidak',
        destination: '/blog/ciri-pengepul-jelantah-nakal',
        permanent: true,
      },
      {
        source: '/blog/cara-aman-menyimpan-jelantah-di-rumah-tangga',
        destination: '/blog/cara-menyimpan-minyak-jelantah',
        permanent: true,
      },
      {
        source: '/blog/kenapa-harus-jual-minyak-jelantah',
        destination: '/blog/cara-jual-jelantah-menguntungkan',
        permanent: true,
      },
      {
        source: '/blog/sistem-penjemputan-minyak-jelantah',
        destination: '/cara-kerja',
        permanent: true,
      },
      {
        source: '/blog/sistem-penjemputan-jelantah-di-jakarta',
        destination: '/blog/jual-minyak-jelantah-jakarta',
        permanent: true,
      },
      // Old service area URLs
      {
        source: '/layanan/:path*',
        destination: '/area-layanan',
        permanent: true,
      },
      // Redirect all URLs with trailing slash to without trailing slash (to prevent 404)
      // Exclude homepage (/) from this redirect
      {
        source: '/:path+/',
        destination: '/:path*',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.clarity.ms https://www.google-analytics.com https://va.vercel-scripts.com https://vitals.vercel-insights.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              "img-src 'self' data: https://res.cloudinary.com https://www.google-analytics.com",
              "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://www.clarity.ms https://res.cloudinary.com https://va.vercel-scripts.com https://vitals.vercel-insights.com",
              "frame-src 'self' https://www.youtube.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "upgrade-insecure-requests",
            ].join('; '),
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
