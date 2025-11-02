# 📋 SEO ONPAGE GUIDELINES - JELANTAHGO

**Tanggal Dibuat:** 2025-01-29  
**Versi:** 2024-2025 Standards  
**Status:** Comprehensive On-Page SEO Guidelines  
**Total Checklist Items:** 85+ points

---

## 🎯 RINGKASAN EKSEKUTIF

Dokumen ini merupakan **panduan lengkap On-Page SEO Best Practices** untuk website JelantahGO. Setiap halaman harus mengikuti checklist ini untuk optimasi SEO maksimal.

**Kategori Utama:**
1. Meta Tags & Title Elements
2. Heading Structure (H1-H6)
3. Content Optimization
4. Image Optimization
5. URL Structure
6. Internal Linking
7. Structured Data (Schema.org)
8. Technical SEO
9. User Experience (UX)
10. Content Elements

---

## ✅ 1. META TAGS & TITLE ELEMENTS

### 1.1 Meta Title Tag

**Panjang Optimal:**
- ✅ **Optimal:** 50-60 karakter
- ✅ **Maksimal:** 60 karakter (Google cut-off)
- ✅ **Mobile:** 50-55 karakter (untuk mobile-friendly)

**Checklist:**
- [ ] Panjang 50-60 karakter (optimal)
- [ ] Maksimal 60 karakter (tidak terpotong di SERP)
- [ ] Unique untuk setiap halaman (tidak duplicate)
- [ ] Keyword utama di awal (jika memungkinkan)
- [ ] Brand name di akhir (opsional: `| JelantahGO`)
- [ ] Menarik untuk CTR (mengandung angka, benefit)
- [ ] Mobile-friendly (50-55 karakter untuk mobile)
- [ ] Tidak keyword stuffing
- [ ] Relevan dengan konten halaman

**Format Template:**
```
[Keyword Utama] | [Value Prop] | [Brand]
```

**Contoh Optimal:**
```html
<!-- ✅ BAIK: 60 karakter -->
<title>Jual Minyak Jelantah Jakarta | Rp 7.500-8.500/L | JelantahGO</title>

<!-- ✅ BAIK: 58 karakter -->
<title>Panduan Jual Minyak Jelantah 2025: Harga & Tips | JelantahGO</title>

<!-- ❌ BURUK: 78 karakter (terlalu panjang) -->
<title>Layanan Jemput Jelantah Gratis di Jakarta Barat: Solusi Praktis untuk Warga & UKM | JelantahGO</title>
```

**Tips:**
- Gunakan pipe `|` untuk memisahkan informasi
- Keyword utama di awal jika memungkinkan
- Sertakan angka konkret (harga, tahun, dll)
- Highlight benefit utama (Gratis, Harga Tinggi, dll)

---

### 1.2 Meta Description

**Panjang Optimal:**
- ✅ **Optimal:** 150-160 karakter
- ✅ **Maksimal:** 160 karakter (Google cut-off)
- ✅ **Mobile:** 120-150 karakter (untuk mobile-friendly)

**Checklist:**
- [ ] Panjang 150-160 karakter (optimal)
- [ ] Maksimal 160 karakter (tidak terpotong di SERP)
- [ ] Unique untuk setiap halaman (tidak duplicate)
- [ ] Deskriptif dan informatif
- [ ] Mengandung call-to-action (CTA) ringan
- [ ] Bisa mengandung keyword (tapi tidak spam)
- [ ] Mobile-friendly (120-150 karakter untuk mobile)
- [ ] Menggunakan angka konkret (harga, volume, dll)
- [ ] Highlight keuntungan utama (Gratis, Tunai, dll)
- [ ] Relevan dengan konten halaman

**Format Template:**
```
[Value Proposition]. [Key Benefit 1]. [Key Benefit 2]. [CTA].
```

**Contoh Optimal:**
```html
<!-- ✅ BAIK: 160 karakter -->
<meta name="description" content="Jual minyak jelantah Jakarta dengan harga Rp 7.500-8.500 per liter sesuai volume. Dijemput GRATIS ke lokasi Anda. Bayar tunai langsung di tempat. Hubungi untuk harga terbaru!" />

<!-- ✅ BAIK: 158 karakter -->
<meta name="description" content="Pelajari 5 strategi jual minyak jelantah yang paling menguntungkan. Tips memilih pengepul terpercaya, teknik negosiasi harga, dan cara dapat harga terbaik untuk jelantah Anda." />

<!-- ❌ BURUK: 180 karakter (terlalu panjang, akan terpotong) -->
<meta name="description" content="Panduan lengkap cara menjual minyak jelantah dengan harga terbaik di tahun 2025. Tips memilih pengepul terpercaya, cara negosiasi harga yang tepat, dan strategi untuk mendapatkan harga tertinggi untuk minyak jelantah Anda di Jakarta dan sekitarnya." />
```

**Tips:**
- Gunakan angka konkret (Rp 8.500, 100 liter, dll)
- Sertakan CTA ringan (Hubungi, Cek, Pelajari, dll)
- Highlight keuntungan utama (Gratis, Tunai, Harga Tinggi)
- Buat yang menarik untuk meningkatkan CTR

---

### 1.3 Meta Keywords (Optional)

**Status:** Optional di 2025, tapi masih bisa membantu untuk semantic SEO

**Checklist:**
- [ ] Ada untuk semua halaman (opsional)
- [ ] 3-10 keywords per halaman (tidak terlalu banyak)
- [ ] Relevan dengan konten
- [ ] Mengandung long-tail keywords
- [ ] Variasi keyword (tidak semua sama)

**Contoh:**
```html
<meta name="keywords" content="jual minyak jelantah jakarta, pengepul minyak jelantah jakarta, harga minyak jelantah, jual jelantah, minyak goreng bekas, pengepul jelantah terdekat" />
```

---

### 1.4 Canonical URL

**Checklist:**
- [ ] Ada untuk setiap halaman (wajib!)
- [ ] Format: `https://jelantahgo.com/[path]`
- [ ] Self-referencing canonical (menunjuk ke dirinya sendiri)
- [ ] Mencegah duplicate content
- [ ] HTTPS, bukan HTTP
- [ ] Absolute URL (bukan relative)

**Contoh:**
```html
<link rel="canonical" href="https://jelantahgo.com/blog/panduan-jual-minyak-jelantah" />
```

**Tips:**
- Selalu gunakan canonical untuk mencegah duplicate content
- Gunakan HTTPS (bukan HTTP)
- Gunakan absolute URL lengkap

---

### 1.5 Meta Robots

**Checklist:**
- [ ] Index/follow untuk halaman utama (default)
- [ ] Noindex untuk halaman admin/private
- [ ] Noindex untuk halaman duplikat
- [ ] Noindex untuk halaman test/staging
- [ ] Nofollow untuk user-generated links (jika ada)

**Contoh:**
```html
<!-- Default (index, follow) -->
<meta name="robots" content="index, follow" />

<!-- Noindex untuk halaman tertentu -->
<meta name="robots" content="noindex, nofollow" />
```

---

### 1.6 Open Graph Tags (Social Media)

**Checklist:**
- [ ] **og:title** - Panjang optimal, unique
- [ ] **og:description** - Deskriptif, menarik
- [ ] **og:url** - Canonical URL lengkap
- [ ] **og:image** - 1200x630px, optimized WebP
- [ ] **og:siteName** - Brand name
- [ ] **og:locale** - `id_ID` untuk Indonesia
- [ ] **og:type** - `website` atau `article`
- [ ] **og:publishedTime** - Untuk artikel (opsional)
- [ ] **og:modifiedTime** - Untuk artikel (opsional)

**Contoh Lengkap:**
```html
<meta property="og:title" content="Jual Minyak Jelantah Jakarta | Rp 7.500-8.500/L | JelantahGO" />
<meta property="og:description" content="Jual minyak jelantah Jakarta dengan harga Rp 7.500-8.500 per liter sesuai volume. Dijemput GRATIS ke lokasi Anda. Bayar tunai langsung di tempat." />
<meta property="og:url" content="https://jelantahgo.com" />
<meta property="og:image" content="https://res.cloudinary.com/.../jelantahgo_6_u3erug.webp" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:siteName" content="JelantahGO" />
<meta property="og:locale" content="id_ID" />
<meta property="og:type" content="website" />
```

**Tips:**
- Image harus 1200x630px untuk optimal di social media
- Gunakan format WebP untuk file size lebih kecil
- Pastikan image relevan dengan konten

---

### 1.7 Twitter Cards

**Checklist:**
- [ ] **twitter:card** - `summary_large_image`
- [ ] **twitter:title** - Panjang optimal
- [ ] **twitter:description** - Deskriptif
- [ ] **twitter:images** - Array of images
- [ ] **twitter:site** - @username (opsional)
- [ ] **twitter:creator** - @username (opsional)

**Contoh:**
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Jual Minyak Jelantah Jakarta | Rp 7.500-8.500/L | JelantahGO" />
<meta name="twitter:description" content="Jual minyak jelantah Jakarta dengan harga Rp 7.500-8.500 per liter sesuai volume. Dijemput GRATIS, bayar tunai langsung di tempat." />
<meta name="twitter:images" content="https://res.cloudinary.com/.../jelantahgo_6_u3erug.webp" />
```

---

## ✅ 2. HEADING STRUCTURE (H1-H6)

### 2.1 H1 Tag (Most Important)

**Checklist:**
- [ ] **Hanya 1 H1 per halaman** (KRISTIS! ❌ tidak boleh lebih)
- [ ] Panjang 30-60 karakter (optimal)
- [ ] Maksimal 70 karakter
- [ ] Di bagian atas halaman (visible, above fold)
- [ ] Mengandung keyword utama
- [ ] Berbeda dengan Meta Title (tidak identik)
- [ ] Deskriptif dan user-friendly
- [ ] Relevan dengan konten

**Format Template:**
```
[Keyword Utama] | [Benefit 1] & [Benefit 2]
```

**Contoh Optimal:**
```html
<!-- ✅ BAIK: 55 karakter -->
<h1>Jual Minyak Jelantah Jakarta | Harga Tinggi, Jemput Gratis & Dibayar Tunai</h1>

<!-- ✅ BAIK: 52 karakter -->
<h1>Panduan Terlengkap Jual Minyak Jelantah 2025: Harga & Pengepul</h1>

<!-- ❌ BURUK: 85 karakter (terlalu panjang) -->
<h1>Cara Menjual Minyak Jelantah di Jakarta dengan Harga Tertinggi dan Penjemputan Gratis Tahun 2025</h1>

<!-- ❌ BURUK: 12 karakter (terlalu pendek, tidak deskriptif) -->
<h1>Hubungi Kami</h1>
```

**Tips:**
- Hanya 1 H1 per halaman (Google melihat ini sebagai judul utama)
- Gunakan pipe `|` untuk memisahkan informasi
- Keyword utama di awal jika memungkinkan
- Buat yang menarik untuk user experience

---

### 2.2 H2 Tags (Section Headings)

**Checklist:**
- [ ] 4-8 H2 per artikel (optimal untuk artikel 1000+ words)
- [ ] Hierarki logis (H1 → H2 → H3)
- [ ] Keyword-rich (mengandung variasi keyword)
- [ ] Deskriptif (jelas isi section)
- [ ] Tidak skip level (H1 langsung ke H3 = ❌)
- [ ] Numbered jika steps/procedures (1, 2, 3...)

**Contoh:**
```html
<h1>Panduan Terlengkap Jual Minyak Jelantah 2025</h1>
  <h2>1. Apa Sebenarnya Minyak Jelantah yang Layak Jual?</h2>
  <h2>2. Mengapa Minyak Jelantah Sangat Berharga di 2025?</h2>
  <h2>3. Cara Menjual Minyak Jelantah dalam 5 Langkah Mudah</h2>
  <h2>4. Tips Mendapatkan Harga Terbaik</h2>
```

---

### 2.3 H3-H6 Tags (Sub-headings)

**Checklist:**
- [ ] 2-5 H3 per H2 (struktur baik)
- [ ] Mendukung H2 (sub-topics)
- [ ] Keyword variations (semantic keywords)
- [ ] Tidak terlalu banyak level (maksimal H4 untuk kebanyakan artikel)
- [ ] Deskriptif (jelas isi sub-section)

**Contoh:**
```html
<h2>Mengapa Minyak Jelantah Sangat Berharga di 2025?</h2>
  <h3>A. Bahan Baku Emas untuk Energi Terbarukan</h3>
  <h3>B. Mencegah Bencana Lingkungan Skala Mikro dan Makro</h3>
  <h3>C. Peran Anda dalam Ekonomi Sirkular</h3>
```

---

### 2.4 Heading Best Practices

**Checklist:**
- [ ] Jangan gunakan untuk styling (gunakan CSS)
- [ ] Jangan duplicate H1 (kecuali di iframe/component khusus)
- [ ] Urutan logis (H1 → H2 → H3, tidak terbalik)
- [ ] Descriptive text (bukan generic "Section 1", "Intro", dll)
- [ ] Tidak terlalu pendek (minimum 3-4 words)

**Hierarchy Pattern:**
```
H1 (1 per page)
  └── H2 (4-8 per page)
      └── H3 (2-5 per H2)
          └── H4 (jarang, hanya jika perlu)
```

---

## ✅ 3. CONTENT OPTIMIZATION

### 3.1 Content Quality

**Checklist:**
- [ ] Minimum 300 words per halaman
- [ ] Blog articles: 1000-3000 words (deep content)
- [ ] Original content (tidak copy-paste)
- [ ] Well-structured (paragraf pendek, readable)
- [ ] User-focused (menjawab pertanyaan user)
- [ ] Updated regularly (fresh content)
- [ ] No duplicate content

**Word Count Guidelines:**
- **Homepage:** 300-500 words
- **Service Pages:** 500-1000 words
- **Blog Posts:** 1000-3000 words (optimal)
- **Product Pages:** 200-500 words

---

### 3.2 Keyword Optimization

**Checklist:**
- [ ] Primary keyword di H1 (wajib)
- [ ] Primary keyword di 100 kata pertama
- [ ] Keyword density 1-2% (natural, tidak spam)
- [ ] Long-tail keywords (variasi keyword)
- [ ] LSI keywords (Latent Semantic Indexing)
- [ ] Keyword di URL slug (jika memungkinkan)
- [ ] Keyword di meta tags (title, description)

**Keyword Density Formula:**
```
Keyword Density = (Jumlah Keyword / Total Words) × 100%
Target: 1-2% (natural)
```

**Tips:**
- Jangan keyword stuffing (terlalu banyak repetisi)
- Gunakan variasi keyword (synonyms, related terms)
- Focus pada user intent, bukan hanya keyword

---

### 3.3 Content Structure

**Checklist:**
- [ ] Introduction dengan primary keyword (100 kata pertama)
- [ ] Body sections dengan subheadings (H2/H3)
- [ ] Conclusion dengan CTA
- [ ] Bullet points/list untuk readability
- [ ] Short paragraphs (3-5 kalimat max)
- [ ] White space cukup (tidak terlalu padat)
- [ ] Table of Contents (untuk artikel panjang >2000 words)

**Content Structure Template:**
```
1. Introduction (100-150 words)
   - Hook menarik
   - Primary keyword di awal
   - Overview konten

2. Main Body (multiple sections)
   - H2: Section utama
     - H3: Sub-section
     - H3: Sub-section
   - H2: Section utama
     - H3: Sub-section

3. Conclusion (100-150 words)
   - Summary
   - CTA
```

---

### 3.4 Content Freshness

**Checklist:**
- [ ] Date published jelas
- [ ] Date modified jika ada update
- [ ] Last updated indicator (opsional)
- [ ] Content review berkala (6-12 bulan)
- [ ] Update konten jika ada perubahan informasi

---

## ✅ 4. IMAGE OPTIMIZATION

### 4.1 Image Technical

**Checklist:**
- [ ] **Alt text untuk semua images** (WAJIB!)
- [ ] Descriptive alt text (jelas, keyword-relevant)
- [ ] File size optimized (<200KB untuk web)
- [ ] Format modern (WebP, AVIF preferred)
- [ ] Responsive images (srcset, sizes)
- [ ] Lazy loading untuk images below fold
- [ ] Proper dimensions (tidak stretched)
- [ ] Aspect ratio maintained

**Contoh Image yang Baik:**
```html
<Image
  src="https://res.cloudinary.com/.../jelantahgo_14_bfmpp8.webp"
  alt="Panduan lengkap jual minyak jelantah dengan harga terbaik di Jakarta"
  width={1200}
  height={630}
  loading="lazy"
  className="..."
/>
```

---

### 4.2 Image SEO

**Checklist:**
- [ ] Alt text mengandung keyword (jika relevan)
- [ ] Alt text deskriptif (jelas isi gambar)
- [ ] File name SEO-friendly (`jelantah-jakarta.webp`, bukan `IMG001.jpg`)
- [ ] Image title attribute (opsional)
- [ ] Images relevant dengan konten

**Alt Text Guidelines:**
- ✅ **BAIK:** `"Panduan lengkap jual minyak jelantah dengan harga terbaik di Jakarta"`
- ✅ **BAIK:** `"Tim penjemputan JelantahGO menimbang minyak jelantah dengan timbangan digital"`
- ❌ **BURUK:** `"Image 1"`, `"Foto"`, `"Picture"`

---

### 4.3 Image Schema (Optional)

**Checklist:**
- [ ] ImageObject Schema untuk featured images (opsional)
- [ ] Image dimensions di metadata

---

## ✅ 5. URL STRUCTURE

### 5.1 URL Best Practices

**Checklist:**
- [ ] SEO-friendly URLs (descriptive, readable)
- [ ] Mengandung keyword (jika memungkinkan)
- [ ] Hyphens, bukan underscores (`-` bukan `_`)
- [ ] Lowercase (tidak mixed case)
- [ ] Tidak terlalu panjang (<100 karakter)
- [ ] HTTPS (bukan HTTP)
- [ ] No special characters (kecuali hyphens)

**Contoh Baik:**
```
✅ https://jelantahgo.com/blog/jual-minyak-jelantah-jakarta
✅ https://jelantahgo.com/blog/panduan-jual-minyak-jelantah-2025
✅ https://jelantahgo.com/blog/cara-kumpulkan-100-liter-jelantah
```

**Contoh Buruk:**
```
❌ https://jelantahgo.com/blog/123
❌ https://jelantahgo.com/blog/jual_minyak_jelantah_jakarta
❌ https://jelantahgo.com/blog/JUAL-MINYAK-JELANTAH-JAKARTA
❌ https://jelantahgo.com/blog/jual%20minyak%20jelantah%20jakarta
```

---

### 5.2 URL Hierarchy

**Checklist:**
- [ ] Flat structure (tidak terlalu dalam)
- [ ] Maksimal 3-4 level (`/blog/category/article`)
- [ ] Breadcrumb-friendly (jelas hierarchy)

**URL Depth Guidelines:**
```
✅ BAIK: https://jelantahgo.com/blog/article-name (2 levels)
✅ BAIK: https://jelantahgo.com/blog/category/article-name (3 levels)
❌ BURUK: https://jelantahgo.com/blog/category/subcategory/article-name (4+ levels)
```

---

## ✅ 6. INTERNAL LINKING

### 6.1 Internal Links Best Practices

**Checklist:**
- [ ] Relevant internal links (3-8 per artikel)
- [ ] Anchor text descriptive (tidak "click here")
- [ ] Anchor text keyword-rich (jika relevan)
- [ ] Links ke halaman penting (pillar pages)
- [ ] NoFollow untuk user-generated links (jika ada)
- [ ] Contextual links (dalam konten, natural)
- [ ] Links ke related articles

**Internal Linking Guidelines:**
- **Homepage:** Link ke semua halaman penting
- **Blog Posts:** 3-8 internal links per artikel
- **Service Pages:** Link ke blog posts relevan
- **Category Pages:** Link ke articles dalam kategori

---

### 6.2 Link Structure

**Checklist:**
- [ ] Navigation menu jelas (Header)
- [ ] Footer links untuk halaman penting
- [ ] Breadcrumbs (visual + schema)
- [ ] Related articles links
- [ ] Category/tag pages links

---

### 6.3 Anchor Text Optimization

**Checklist:**
- [ ] Variasi anchor text (tidak semua sama)
- [ ] Natural language (tidak keyword stuffing)
- [ ] Descriptive (jelas tujuan link)

**Contoh Baik:**
```html
<!-- ✅ BAIK: Natural, descriptive -->
Pelajari <a href="/blog/cara-jual-jelantah">cara jual minyak jelantah</a> dengan harga terbaik.

Baca <a href="/blog/panduan-jual-minyak-jelantah">panduan lengkap jual jelantah</a> di sini.

Lihat <a href="/blog/harga-jelantah-oktober-2025">update harga minyak jelantah Oktober 2025</a>.
```

**Contoh Buruk:**
```html
<!-- ❌ BURUK: Generic, tidak descriptive -->
<a href="/blog/cara-jual-jelantah">Klik di sini</a>

<!-- ❌ BURUK: Keyword stuffing, repetitive -->
<a href="/blog/cara-jual-jelantah">jual jelantah</a>
<a href="/blog/cara-jual-jelantah">jual jelantah</a>
<a href="/blog/cara-jual-jelantah">jual jelantah</a>
```

---

## ✅ 7. STRUCTURED DATA (Schema.org)

### 7.1 Organization Schema

**Checklist:**
- [ ] Organization Schema di homepage
- [ ] Name, logo, contact info
- [ ] Social media profiles (opsional)
- [ ] SameAs property untuk social links

**Contoh:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "JelantahGO",
  "url": "https://jelantahgo.com",
  "logo": "https://res.cloudinary.com/.../logo.webp",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+6285183033995",
    "contactType": "Customer Service"
  }
}
```

---

### 7.2 Article Schema (Blog Posts)

**Checklist:**
- [ ] Article Schema untuk blog posts
- [ ] **headline** (title)
- [ ] **description**
- [ ] **image** (1200x630px)
- [ ] **datePublished**
- [ ] **dateModified**
- [ ] **author** (Organization/Person)
- [ ] **publisher** (Organization + logo)
- [ ] **mainEntityOfPage** (URL)

**Contoh Lengkap:**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Panduan Terlengkap Jual Minyak Jelantah 2025",
  "description": "Punya minyak jelantah? Jangan dibuang! Pelajari cara menjualnya...",
  "image": "https://res.cloudinary.com/.../jelantahgo_14_bfmpp8.webp",
  "datePublished": "2025-10-22",
  "dateModified": "2025-10-22",
  "author": {
    "@type": "Organization",
    "name": "JelantahGO"
  },
  "publisher": {
    "@type": "Organization",
    "name": "JelantahGO",
    "logo": {
      "@type": "ImageObject",
      "url": "https://res.cloudinary.com/.../logo.webp"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://jelantahgo.com/blog/panduan-jual-minyak-jelantah"
  }
}
```

---

### 7.3 BreadcrumbList Schema

**Checklist:**
- [ ] BreadcrumbList Schema untuk navigasi
- [ ] itemListElement dengan positions
- [ ] name dan item (URL) untuk setiap item

**Contoh:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://jelantahgo.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://jelantahgo.com/blog"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Panduan Jual Jelantah",
      "item": "https://jelantahgo.com/blog/panduan-jual-minyak-jelantah"
    }
  ]
}
```

---

### 7.4 FAQPage Schema

**Checklist:**
- [ ] FAQPage Schema untuk halaman dengan FAQ
- [ ] mainEntity dengan Question/Answer pairs
- [ ] Minimum 3 FAQ (best practice)
- [ ] Maximum 10 FAQ per halaman (optimal)
- [ ] Answer length 50-120 words (optimal)

**Contoh:**
```json
{
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
    }
  ]
}
```

---

### 7.5 Other Schema Types (Optional)

**Checklist:**
- [ ] LocalBusiness Schema (jika ada lokasi fisik)
- [ ] Review Schema (untuk testimonials)
- [ ] HowTo Schema (untuk tutorial articles)
- [ ] VideoObject Schema (jika ada video)
- [ ] Product Schema (jika e-commerce)
- [ ] Service Schema (untuk service pages)

---

## ✅ 8. TECHNICAL SEO

### 8.1 Page Speed

**Core Web Vitals (Target):**
- [ ] **LCP < 2.5 detik** (Largest Contentful Paint)
- [ ] **FID < 100ms** (First Input Delay)
- [ ] **CLS < 0.1** (Cumulative Layout Shift)
- [ ] **TTI < 3.8 detik** (Time to Interactive)

**Optimization Checklist:**
- [ ] Images optimized (WebP, lazy loading)
- [ ] Minified CSS/JS
- [ ] CDN digunakan (jika ada)
- [ ] Browser caching enabled
- [ ] Gzip/Brotli compression
- [ ] Critical CSS inlined
- [ ] JavaScript deferred/async

---

### 8.2 Mobile Optimization

**Checklist:**
- [ ] Mobile-friendly design (responsive)
- [ ] Mobile-first indexing ready
- [ ] Touch targets ≥ 48x48px
- [ ] Readable text (minimum 16px)
- [ ] No horizontal scrolling
- [ ] Fast loading di mobile network
- [ ] Viewport meta tag
- [ ] Mobile menu accessible

**Viewport Meta Tag:**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

---

### 8.3 HTTPS & Security

**Checklist:**
- [ ] HTTPS enabled (bukan HTTP)
- [ ] SSL certificate valid
- [ ] Mixed content tidak ada (HTTP di HTTPS page)
- [ ] Security headers (HSTS, CSP, dll)
- [ ] Redirect HTTP → HTTPS (301)

---

## ✅ 9. USER EXPERIENCE (UX)

### 9.1 Readability

**Checklist:**
- [ ] Font size readable (minimum 16px)
- [ ] Line height adequate (1.5-1.8)
- [ ] Contrast ratio (WCAG AA compliant)
- [ ] White space cukup
- [ ] Paragraph length (3-5 kalimat)
- [ ] Font family readable (sans-serif preferred)

---

### 9.2 Navigation

**Checklist:**
- [ ] Clear navigation menu
- [ ] Breadcrumbs visible
- [ ] Search functionality (jika ada)
- [ ] 404 page custom (user-friendly)
- [ ] Sitemap.xml accessible
- [ ] Footer navigation links

---

### 9.3 Call-to-Actions (CTA)

**Checklist:**
- [ ] Clear CTAs di halaman
- [ ] CTAs prominent (visible, clickable)
- [ ] Multiple CTAs (jika panjang halaman)
- [ ] CTA text action-oriented ("Hubungi", "Cek Harga", dll)
- [ ] CTA buttons accessible (color contrast)

---

### 9.4 Reading Experience

**Checklist:**
- [ ] Table of contents (untuk artikel panjang >2000 words)
- [ ] Reading time indicator (opsional)
- [ ] Related articles section
- [ ] Share buttons (opsional)
- [ ] Print-friendly (CSS print styles)

---

## ✅ 10. CONTENT ELEMENTS

### 10.1 Lists & Tables

**Checklist:**
- [ ] Bullet points untuk readability
- [ ] Numbered lists untuk steps/procedures
- [ ] Tables untuk data comparison
- [ ] Proper HTML (`<ul>`, `<ol>`, `<table>`)
- [ ] Tables accessible (headers, captions)

---

### 10.2 Rich Media

**Checklist:**
- [ ] Videos embedded (jika ada)
- [ ] Infographics dengan alt text
- [ ] Charts/graphs accessible
- [ ] Video transcripts (opsional)

---

## 📊 PRIORITY CHECKLIST

### 🔴 PRIORITY HIGH (Must Have - 100% wajib):

1. **Meta Title** (50-60 chars)
2. **Meta Description** (150-160 chars)
3. **H1 Tag** (30-60 chars, hanya 1 per page)
4. **Canonical URL**
5. **Alt text** untuk semua images
6. **Internal linking** (3-8 links per artikel)
7. **Mobile-friendly design**
8. **HTTPS enabled**
9. **Page speed** optimized (Core Web Vitals)

---

### 🟡 PRIORITY MEDIUM (Should Have - Sangat disarankan):

1. **OpenGraph Tags**
2. **Twitter Cards**
3. **Structured Data** (Article, BreadcrumbList, FAQPage)
4. **URL structure** SEO-friendly
5. **Heading hierarchy** (H1-H6)
6. **Keyword optimization** (natural)
7. **Content quality** (1000+ words untuk blog)
8. **Internal linking** strategy

---

### 🟢 PRIORITY LOW (Nice to Have - Opsional):

1. **Meta Keywords** (opsional di 2025)
2. **VideoObject Schema**
3. **Review Schema**
4. **HowTo Schema**
5. **Table of Contents**
6. **Reading time** indicator
7. **Share buttons**

---

## 🎯 IMPLEMENTATION CHECKLIST PER PAGE TYPE

### Homepage Checklist:

**Meta Tags:**
- [ ] Meta Title (50-60 chars) ✅
- [ ] Meta Description (150-160 chars) ✅
- [ ] Canonical URL ✅
- [ ] OpenGraph Tags ✅
- [ ] Twitter Cards ✅

**Content:**
- [ ] H1 (30-60 chars) ✅
- [ ] Content 300-500 words ✅
- [ ] Internal links ke halaman penting ✅

**Schema:**
- [ ] Organization Schema ✅
- [ ] FAQPage Schema (jika ada FAQ) ✅
- [ ] LocalBusiness Schema (jika ada) ✅

---

### Blog Post Checklist:

**Meta Tags:**
- [ ] Meta Title (50-60 chars) ✅
- [ ] Meta Description (150-160 chars) ✅
- [ ] Canonical URL ✅
- [ ] OpenGraph Tags ✅
- [ ] Twitter Cards ✅

**Content:**
- [ ] H1 (30-60 chars) ✅
- [ ] Content 1000-3000 words ✅
- [ ] 4-8 H2 headings ✅
- [ ] Internal links (3-8) ✅

**Images:**
- [ ] Alt text untuk semua images ✅
- [ ] Images optimized (WebP) ✅

**Schema:**
- [ ] Article Schema ✅
- [ ] BreadcrumbList Schema ✅
- [ ] FAQPage Schema (jika ada FAQ) ✅

---

### Service/Landing Page Checklist:

**Meta Tags:**
- [ ] Meta Title (50-60 chars) ✅
- [ ] Meta Description (150-160 chars) ✅
- [ ] Canonical URL ✅
- [ ] OpenGraph Tags ✅

**Content:**
- [ ] H1 (30-60 chars) ✅
- [ ] Content 500-1000 words ✅
- [ ] CTA buttons prominent ✅

**Schema:**
- [ ] Service Schema (opsional) ✅

---

## 🧪 TESTING & VALIDATION

### SEO Testing Tools:

**Checklist:**
- [ ] **Google Search Console** - Preview di SERP
- [ ] **Google Rich Results Test** - Validasi structured data
- [ ] **PageSpeed Insights** - Core Web Vitals
- [ ] **Mobile-Friendly Test** - Mobile optimization
- [ ] **SERP Preview Tools** - Preview title/description
- [ ] **Schema.org Validator** - Validasi JSON-LD
- [ ] **Screaming Frog** - Crawl audit

**Tools URLs:**
- Google Search Console: https://search.google.com/search-console
- Rich Results Test: https://search.google.com/test/rich-results
- PageSpeed Insights: https://pagespeed.web.dev/
- Mobile-Friendly Test: https://search.google.com/test/mobile-friendly
- Schema Validator: https://validator.schema.org/

---

### Manual Checks:

**Checklist:**
- [ ] Test di desktop browser (Chrome, Firefox, Safari)
- [ ] Test di mobile device (iOS, Android)
- [ ] Check semua links (tidak ada broken links)
- [ ] Check semua images (loaded, alt text ada)
- [ ] Check structured data (valid JSON-LD)
- [ ] Check page speed (loading time)
- [ ] Check mobile responsiveness

---

## 📈 METRICS TO MONITOR

### Google Search Console Metrics:

**Checklist:**
- [ ] **Impressions** - Berapa kali muncul di SERP
- [ ] **Clicks** - Berapa klik dari SERP
- [ ] **CTR** - Click-through rate
- [ ] **Average position** - Ranking di SERP
- [ ] **Core Web Vitals** - Performance metrics
- [ ] **Mobile usability** - Mobile issues
- [ ] **Coverage** - Indexing status

---

### Analytics Metrics:

**Checklist:**
- [ ] **Bounce rate** - User engagement
- [ ] **Time on page** - Content quality indicator
- [ ] **Pages per session** - Internal linking effectiveness
- [ ] **Exit rate** - User journey
- [ ] **Conversion rate** - Goal completions

---

## 🚫 COMMON MISTAKES TO AVOID

### ❌ JANGAN LAKUKAN:

1. **Keyword stuffing** - Over-use keyword dalam konten
2. **Duplicate content** - Copy-paste konten dari sumber lain
3. **Missing alt text** - Images tanpa alt text
4. **Multiple H1** - Lebih dari 1 H1 per page
5. **Title terlalu panjang** - >60 karakter
6. **Description terlalu panjang** - >160 karakter
7. **H1 identik dengan Title** - Harus berbeda sedikit
8. **Broken internal links** - Link 404 atau tidak valid
9. **Missing canonical** - Duplicate content issues
10. **Slow page speed** - >3 detik loading time
11. **Missing structured data** - No schema markup
12. **Poor mobile experience** - Tidak responsive
13. **HTTP instead of HTTPS** - Security issues
14. **Empty or generic alt text** - "Image", "Photo", dll
15. **Skipping heading levels** - H1 langsung ke H3

---

### ✅ LAKUKAN:

1. **Natural keyword usage** - Keyword dalam konteks natural
2. **Original content** - Konten unik dan berkualitas
3. **Descriptive alt text** - Jelas, keyword-relevant
4. **Single H1** - Hanya 1 H1 per page
5. **Optimal title length** - 50-60 karakter
6. **Optimal description length** - 150-160 karakter
7. **Different H1 and Title** - Variasi yang menarik
8. **Working links** - Semua links valid dan tested
9. **Canonical URLs** - Setiap halaman punya canonical
10. **Fast page speed** - <2.5 detik LCP
11. **Structured data** - Article, BreadcrumbList, FAQPage
12. **Mobile-first** - Responsive design
13. **HTTPS** - Secure connection
14. **Detailed alt text** - Descriptive, helpful
15. **Proper heading hierarchy** - H1 → H2 → H3

---

## 📚 QUICK REFERENCE

### Character Limits Quick Reference:

```
╔══════════════════════════════════════════════════╗
║         SEO CHARACTER LIMITS - QUICK REF        ║
╠══════════════════════════════════════════════════╣
║                                                  ║
║  H1 TAG:                                         ║
║  ┌─────────────────────────────────────────┐    ║
║  │  Optimal: 30-60 karakter                │    ║
║  │  Max: 70 karakter                        │    ║
║  └─────────────────────────────────────────┘    ║
║                                                  ║
║  META TITLE:                                     ║
║  ┌─────────────────────────────────────────┐    ║
║  │  Optimal: 50-60 karakter                │    ║
║  │  Max: 60 karakter (Google cut-off)      │    ║
║  │  Mobile: 50-55 karakter                 │    ║
║  └─────────────────────────────────────────┘    ║
║                                                  ║
║  META DESCRIPTION:                               ║
║  ┌─────────────────────────────────────────┐    ║
║  │  Optimal: 150-160 karakter              │    ║
║  │  Max: 160 karakter (Google cut-off)     │    ║
║  │  Mobile: 120-150 karakter               │    ║
║  └─────────────────────────────────────────┘    ║
╚══════════════════════════════════════════════════╝
```

---

### Schema Priority List:

```
Priority 1 (Wajib):
  ✅ Organization Schema (homepage)
  ✅ Article Schema (blog posts)
  ✅ BreadcrumbList Schema (navigation)

Priority 2 (Sangat Disarankan):
  ✅ FAQPage Schema (halaman dengan FAQ)
  ✅ LocalBusiness Schema (jika ada lokasi)

Priority 3 (Nice to Have):
  ⚠️ Review Schema (testimonials)
  ⚠️ HowTo Schema (tutorial)
  ⚠️ VideoObject Schema (video)
```

---

### Internal Linking Guidelines:

```
Homepage:        Link ke semua halaman penting
Blog Posts:      3-8 internal links per artikel
Service Pages:   Link ke blog posts relevan
Category Pages:  Link ke articles dalam kategori

Anchor Text:
  ✅ Descriptive & keyword-rich
  ✅ Natural language
  ✅ Variasi (tidak semua sama)
  ❌ Jangan "click here", "read more" (generic)
```

---

## 🎓 RESOURCES & LEARNING

### Official Resources:

- **Google Search Central:** https://developers.google.com/search/docs
- **Schema.org Documentation:** https://schema.org/
- **Web.dev:** https://web.dev/

### SEO Learning Centers:

- **Moz SEO Learning Center:** https://moz.com/learn/seo
- **Ahrefs Blog:** https://ahrefs.com/blog/
- **Search Engine Journal:** https://www.searchenginejournal.com/

### Testing Tools:

- **Google Search Console:** https://search.google.com/search-console
- **Google Rich Results Test:** https://search.google.com/test/rich-results
- **PageSpeed Insights:** https://pagespeed.web.dev/
- **Mobile-Friendly Test:** https://search.google.com/test/mobile-friendly
- **Screaming Frog SEO Spider:** https://www.screamingfrog.co.uk/seo-spider/

---

## ✅ ACTION ITEMS

### Immediate (This Week):

1. ✅ Review semua Meta Title (pastikan ≤60 karakter)
2. ✅ Review semua Meta Description (pastikan ≤160 karakter)
3. ✅ Review semua H1 (pastikan 30-60 karakter, hanya 1 per page)
4. ✅ Test di Google Search Console preview
5. ✅ Validasi structured data dengan Rich Results Test

### Short-term (This Month):

- [ ] Update metadata berdasarkan performance
- [ ] A/B test Title & Description untuk CTR
- [ ] Monitor di Google Search Console
- [ ] Optimasi berdasarkan click-through rate
- [ ] Review dan update content berkala

### Long-term (Ongoing):

- [ ] Content audit berkala (6-12 bulan)
- [ ] Technical SEO audit (kuartal)
- [ ] Competitor analysis
- [ ] Keyword research update
- [ ] Performance monitoring & optimization

---

## 📝 TEMPLATE UNTUK JELANTAHGO

### Template H1:
```
[Action] [Keyword] [Location] | [Benefit 1] & [Benefit 2]
```

**Contoh:**
- `Jual Minyak Jelantah Jakarta | Harga Tinggi, Jemput Gratis`
- `Panduan Jual Minyak Jelantah 2025 | Tips & Strategi`

### Template Meta Title:
```
[Keyword] | [Value Prop] | [Brand]
```

**Contoh:**
- `Jual Minyak Jelantah Jakarta | Rp 7.500-8.500/L | JelantahGO`
- `Harga Minyak Jelantah 2025 | Rp 7.500-8.500/L | JelantahGO`

### Template Meta Description:
```
[Value Prop]. [Key Benefit 1]. [Key Benefit 2]. [CTA].
```

**Contoh:**
- `Jual minyak jelantah Jakarta dengan harga Rp 7.500-8.500 per liter sesuai volume. Dijemput GRATIS ke lokasi Anda. Bayar tunai langsung di tempat. Hubungi untuk harga terbaru!`

---

## 🎯 SUCCESS METRICS

### Target Metrics:

**Search Console:**
- CTR: >3% (average industry: 2-3%)
- Average Position: Top 10 (position 1-10)
- Impressions: Growing month-over-month

**Performance:**
- LCP: <2.5 detik
- FID: <100ms
- CLS: <0.1

**Engagement:**
- Bounce Rate: <60%
- Time on Page: >2 menit (untuk blog posts)
- Pages per Session: >2

---

## 📋 CHECKLIST SUMMARY

**Total Checklist Items:** 85+ points

**By Category:**
- Meta Tags & Title: 20+ items
- Heading Structure: 15+ items
- Content Optimization: 15+ items
- Image Optimization: 10+ items
- URL Structure: 8+ items
- Internal Linking: 10+ items
- Structured Data: 10+ items
- Technical SEO: 12+ items
- User Experience: 10+ items
- Content Elements: 5+ items

**Priority Breakdown:**
- 🔴 High Priority: 25 items (Must Have)
- 🟡 Medium Priority: 40 items (Should Have)
- 🟢 Low Priority: 20 items (Nice to Have)

---

**Dokumen ini adalah comprehensive On-Page SEO Guidelines untuk JelantahGO.**

**Last Updated:** 2025-01-29  
**Version:** 1.0  
**Status:** Active Guidelines

---

**End of Document**

