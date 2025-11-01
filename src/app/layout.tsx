import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export const metadata: Metadata = {
  title: 'Jual Minyak Jelantah Jakarta | Harga Rp 7.500-8.500/L | Jemput Gratis | Bayar Tunai - JelantahGO',
  description: 'Jual minyak jelantah Jakarta dapat uang tunai HINGGA Rp 8.500/liter. Dijemput GRATIS ke lokasi Anda. Bayar langsung di tempat. Hubungi kami untuk harga terbaru!',
  keywords: 'jual minyak jelantah jakarta, pengepul minyak jelantah jakarta, harga minyak jelantah, jual jelantah, minyak goreng bekas, pengepul jelantah terdekat',
  openGraph: {
    title: 'Jual Minyak Jelantah Jakarta | Harga Rp 7.500-8.500/L | Jemput Gratis | Bayar Tunai',
    description: 'Pengepul minyak jelantah terpercaya di Jakarta. Harga hingga Rp 8.500/liter, dijemput gratis, bayar langsung. Melayani Jakarta & sekitarnya.',
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
    title: 'Jual Minyak Jelantah Jakarta | Harga Rp 7.500-8.500/L | Jemput Gratis',
    description: 'Pengepul jelantah terpercaya. Harga tertinggi Rp 8.500/L. Bayar tunai di tempat.',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Berapa harga minyak jelantah per liter di JelantahGO?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Harga minyak jelantah di JelantahGO bervariasi berdasarkan volume: Rp 7.500/liter untuk 40-99 liter, Rp 8.000/liter untuk 100-199 liter, dan Rp 8.500/liter untuk volume 200 liter ke atas."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Apakah penjemputan minyak jelantah benar-benar gratis?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ya, kami menyediakan layanan penjemputan GRATIS untuk minyak jelantah dengan volume minimal 40 liter di seluruh area Jabodetabek. Tidak ada biaya tambahan."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Bagaimana cara jual minyak jelantah ke JelantahGO?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Cukup 4 langkah: 1) Kumpulkan minyak jelantah minimal 40 liter, 2) Hubungi kami via WhatsApp, 3) Tim kami datang ke lokasi, 4) Timbang & terima pembayaran tunai langsung."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Minyak jelantah harus bersih atau tidak?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Tidak perlu disaring sangat bersih. Cukup buang sisa makanan besar. Jangan campur dengan air, sabun, atau detergen karena akan mempengaruhi kualitas dan harga."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Wilayah mana saja yang dilayani?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Kami melayani seluruh Jabodetabek: Jakarta, Tangerang, Bekasi, Depok, Bogor. Untuk area di luar Jabodetabek, Anda bisa bergabung sebagai mitra pengepul."
                  }
                }
              ]
            })
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
