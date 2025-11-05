import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export const metadata: Metadata = {
  title: 'Pengepul Minyak Jelantah Jakarta | Harga Tertinggi + Jemput Gratis',
  description: 'JelantahGO - Pengepul minyak jelantah Jakarta beli minyak bekas Rp 7.500-8.500/liter. Proses mudah + jemput GRATIS + bayar tunai langsung. Dapatkan harga tertinggi! Hubungi 0851-8303-3995.',
  keywords: 'jual minyak jelantah jakarta, pengepul minyak jelantah jakarta, harga minyak jelantah, jual jelantah, minyak goreng bekas, pengepul jelantah terdekat',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    title: 'Pengepul Minyak Jelantah Jakarta | Harga Tertinggi + Jemput Gratis',
    description: 'JelantahGO - Pengepul minyak jelantah Jakarta beli minyak bekas Rp 7.500-8.500/liter. Proses mudah + jemput GRATIS + bayar tunai langsung. Dapatkan harga tertinggi! Hubungi 0851-8303-3995.',
    url: 'https://jelantahgo.com',
    siteName: 'JelantahGO',
    images: [
      {
        url: 'https://res.cloudinary.com/dknswj9co/image/upload/v1760998331/jelantahgo_6_u3erug.webp',
        width: 1200,
        height: 630,
      }
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pengepul Minyak Jelantah Jakarta | Harga Tertinggi + Jemput Gratis',
    description: 'JelantahGO - Pengepul minyak jelantah Jakarta beli minyak bekas Rp 7.500-8.500/liter. Proses mudah + jemput GRATIS + bayar tunai langsung. Dapatkan harga tertinggi!',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/v1760998331/jelantahgo_6_u3erug.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'JelantahGO' }],
  alternates: {
    canonical: 'https://jelantahgo.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="icon" href="https://res.cloudinary.com/dknswj9co/image/upload/v1761172234/favicon_jelantahgo_kjxjs4.webp" type="image/webp" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RecyclingCenter",
              "@id": "https://jelantahgo.com/#organization",
              "name": "JelantahGO",
              "logo": "https://res.cloudinary.com/dknswj9co/image/upload/v1761172234/favicon_jelantahgo_kjxjs4.webp",
              "image": "https://res.cloudinary.com/dknswj9co/image/upload/v1760998331/jelantahgo_6_u3erug.webp",
              "url": "https://jelantahgo.com",
              "telephone": "+6285183033995",
              "email": "info.jelantahgo@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "3c no 250, Jl. Papanggo I, Papanggo, Kec. Tj. Priok",
                "addressLocality": "Jakarta Utara",
                "addressRegion": "Daerah Khusus Ibukota Jakarta",
                "postalCode": "14340",
                "addressCountry": "ID"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -6.1176,
                "longitude": 106.8722
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                "opens": "11:00",
                "closes": "23:00"
              },
              "priceRange": "Rp7500 - Rp8500 per liter",
              "areaServed": ["Jakarta","Tangerang","Bekasi","Depok","Bogor"],
              "description": "Pengepul minyak jelantah terpercaya di Jakarta. Layanan penjemputan gratis, harga tertinggi Rp 7.500-8.500 per liter, bayar tunai langsung."
            })
          }}
        />
        {/* Microsoft Clarity tracking code */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "tzlv93p4my");
            `,
          }}
        />
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-940WRJ0SCY"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-940WRJ0SCY');
              
              // Web Vitals Tracking
              function sendToAnalytics(metric) {
                gtag('event', metric.name, {
                  event_category: 'Web Vitals',
                  value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
                  event_label: metric.id,
                  non_interaction: true,
                });
              }
              
              // Track Core Web Vitals using Performance API
              if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
                try {
                  // Track LCP (Largest Contentful Paint)
                  new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    const lastEntry = entries[entries.length - 1];
                    sendToAnalytics({
                      name: 'LCP',
                      value: lastEntry.renderTime || lastEntry.loadTime,
                      id: 'lcp-' + Date.now()
                    });
                  }).observe({ entryTypes: ['largest-contentful-paint'] });
                  
                  // Track FID (First Input Delay)
                  new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    entries.forEach((entry) => {
                      sendToAnalytics({
                        name: 'FID',
                        value: entry.processingStart - entry.startTime,
                        id: 'fid-' + Date.now()
                      });
                    });
                  }).observe({ entryTypes: ['first-input'] });
                  
                  // Track CLS (Cumulative Layout Shift)
                  let clsValue = 0;
                  new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    entries.forEach((entry) => {
                      if (!entry.hadRecentInput) {
                        clsValue += entry.value;
                        sendToAnalytics({
                          name: 'CLS',
                          value: clsValue,
                          id: 'cls-' + Date.now()
                        });
                      }
                    });
                  }).observe({ entryTypes: ['layout-shift'] });
                } catch (e) {
                  // Performance Observer not supported
                }
              }
              
              // Track custom events
              document.addEventListener('click', function(e) {
                const target = e.target;
                if (target.tagName === 'A' && target.href) {
                  if (target.href.includes('wa.me')) {
                    gtag('event', 'whatsapp_click', {
                      event_category: 'CTA',
                      event_label: target.getAttribute('aria-label') || 'WhatsApp Button',
                      value: 1
                    });
                  }
                  if (target.href.includes('jelantahgo.com')) {
                    gtag('event', 'internal_link_click', {
                      event_category: 'Navigation',
                      event_label: target.href,
                      value: 1
                    });
                  }
                }
              });
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* Skip to content link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-[#0F3D2E] focus:text-white focus:px-6 focus:py-3 focus:rounded-card focus:shadow-soft-lg focus:font-semibold"
          aria-label="Skip to main content"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-grow" role="main">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
