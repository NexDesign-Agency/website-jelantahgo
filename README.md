# JelantahGO - Modern Website

Website modern untuk JelantahGO menggunakan Next.js 14, React, TypeScript, dan Tailwind CSS.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm atau yarn

### Installation

1. Clone repository ini
2. Install dependencies:
```bash
npm install
# atau
yarn install
```

3. Jalankan development server:
```bash
npm run dev
# atau
yarn dev
```

4. Buka [http://localhost:3000](http://localhost:3000) di browser Anda

## 📦 Build untuk Production

```bash
npm run build
# atau
yarn build
```

## 🌐 Deploy ke Netlify

1. Push code ke GitHub
2. Connect repository di Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
4. Deploy!

## 📁 Struktur Project

```
jelantahgo-new/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout utama
│   │   ├── page.tsx             # Homepage
│   │   ├── globals.css          # Global styles
│   │   ├── pricing/
│   │   ├── cara-kerja/
│   │   ├── blog/
│   │   ├── mitra/
│   │   ├── about/
│   │   ├── contact/
│   │   └── area-layanan/
│   └── components/
│       ├── Header.tsx           # Header component
│       ├── Footer.tsx           # Footer component
│       ├── WhatsAppFloat.tsx    # Floating WhatsApp button
│       └── Calculator.tsx       # Income calculator
├── public/                      # Static files
├── package.json
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## 🎨 Fitur

- ✅ Fully responsive design
- ✅ SEO optimized dengan metadata lengkap
- ✅ Schema markup untuk rich snippets
- ✅ Modern UI dengan Tailwind CSS
- ✅ Fast page loads dengan Next.js
- ✅ TypeScript untuk type safety
- ✅ Static site generation untuk performance maksimal

## 🔧 Teknologi

- **Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Lucide React
- **Deployment**: Netlify / Vercel

## 📝 License

Copyright © 2025 JelantahGO
