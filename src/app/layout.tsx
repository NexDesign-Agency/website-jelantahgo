import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export const metadata: Metadata = {
  title: 'Jual Minyak Jelantah Jakarta | Rp 7.500-8.500/L | JelantahGO',
  description: 'Jual minyak jelantah Jakarta dengan harga Rp 7.500-8.500 per liter sesuai volume. Dijemput GRATIS ke lokasi Anda. Bayar tunai langsung di tempat. Hubungi untuk harga terbaru!',
  keywords: 'jual minyak jelantah jakarta, pengepul minyak jelantah jakarta, harga minyak jelantah, jual jelantah, minyak goreng bekas, pengepul jelantah terdekat',
  openGraph: {
    title: 'Jual Minyak Jelantah Jakarta | Rp 7.500-8.500/L | JelantahGO',
    description: 'Jual minyak jelantah Jakarta dengan harga Rp 7.500-8.500 per liter sesuai volume. Dijemput GRATIS ke lokasi Anda. Bayar tunai langsung di tempat.',
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
    title: 'Jual Minyak Jelantah Jakarta | Rp 7.500-8.500/L | JelantahGO',
    description: 'Jual minyak jelantah Jakarta dengan harga Rp 7.500-8.500 per liter sesuai volume. Dijemput GRATIS, bayar tunai langsung di tempat.',
    images: ['https://res.cloudinary.com/dknswj9co/image/upload/v1760998331/jelantahgo_6_u3erug.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'JelantahGO' }],
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
        <link rel="canonical" href="https://jelantahgo.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RecyclingCenter",
              "name": "JelantahGO",
              "image": "https://res.cloudinary.com/dknswj9co/image/upload/v1760998331/jelantahgo_6_u3erug.webp",
              "url": "https://jelantahgo.com",
              "telephone": "+628518303395",
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
              "serviceType": "Used cooking oil collection and recycling"
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
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
