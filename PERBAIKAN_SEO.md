# 🚀 PERBAIKAN SEO UNTUK JELANTAHGO-NEW

## 📋 CHECKLIST PERBAIKAN

### ✅ SUDAH BENAR (Tidak perlu diubah)
- [x] Meta Title
- [x] Meta Description  
- [x] Meta Keywords
- [x] Open Graph Tags
- [x] Twitter Card
- [x] Schema RecyclingCenter
- [x] Favicon
- [x] Preconnect hints

### ❌ PERLU DIPERBAIKI SEGERA

#### 1. H1 TAG - GANTI DI `src/app/page.tsx`

**SEKARANG (SALAH):**
```tsx
<h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
  Jual minyak jelantah dengan harga premium, penjemputan rapi, dan bukti kuat
</h1>
```

**HARUS JADI (BENAR):**
```tsx
<h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
  Jual Minyak Jelantah Jakarta | Harga Tinggi, Jemput Gratis & Dibayar Tunai
</h1>
```

**ALASAN:**
- Keyword "Jakarta" sangat penting untuk Local SEO
- "Harga Tinggi" lebih spesifik dari "harga premium"
- "Jemput Gratis" lebih jelas dari "penjemputan rapi"
- "Dibayar Tunai" lebih dipahami dari "bukti kuat"

---

#### 2. CANONICAL URL - TAMBAH DI `src/app/layout.tsx`

**TAMBAHKAN INI di bagian <head>:**
```tsx
<link rel="canonical" href="https://jelantahgo.com/" />
```

**LOKASI PENAMBAHAN:**
```tsx
<head>
  <link rel="icon" href="..." type="image/webp" />
  <link rel="preconnect" href="https://res.cloudinary.com" />
  <link rel="canonical" href="https://jelantahgo.com/" /> {/* TAMBAH INI */}
  <script type="application/ld+json">...</script>
</head>
```

---

#### 3. SCHEMA FAQ - TAMBAH DI `src/app/layout.tsx`

**TAMBAHKAN SCHEMA FAQ kedua setelah schema RecyclingCenter:**

```tsx
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
```

---

## 📝 KODE LENGKAP YANG HARUS DIUPDATE

### File: `src/app/page.tsx`
Cari baris ini (sekitar line 27-31):
```tsx
<h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
  Jual minyak jelantah dengan harga premium, penjemputan rapi, dan bukti kuat
</h1>
```

**GANTI DENGAN:**
```tsx
<h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
  Jual Minyak Jelantah Jakarta | Harga Tinggi, Jemput Gratis & Dibayar Tunai
</h1>
```

---

### File: `src/app/layout.tsx`

**TAMBAH CANONICAL URL:**
Cari bagian `<head>` (sekitar line 54-87), lalu tambahkan canonical URL:

```tsx
<head>
  <link rel="icon" href="https://res.cloudinary.com/dknswj9co/image/upload/v1761172234/favicon_jelantahgo_kjxjs4.webp" type="image/webp" />
  <link rel="preconnect" href="https://res.cloudinary.com" />
  
  {/* TAMBAH INI - CANONICAL URL */}
  <link rel="canonical" href="https://jelantahgo.com/" />
  
  {/* Schema RecyclingCenter */}
  <script type="application/ld+json">...</script>
</head>
```

**TAMBAH SCHEMA FAQ:**
Setelah closing tag `</script>` dari schema RecyclingCenter, tambahkan schema FAQ:

```tsx
{/* Schema RecyclingCenter */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "RecyclingCenter",
      // ... (kode yang sudah ada)
    })
  }}
/>

{/* TAMBAH INI - Schema FAQPage */}
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
```

---

## 🎯 DAMPAK PERBAIKAN INI TERHADAP SEO

### 1. H1 Tag yang Diperbaiki
- ✅ Meningkatkan relevance untuk keyword "jual minyak jelantah jakarta"
- ✅ Better Local SEO untuk pencarian Jakarta
- ✅ Lebih jelas value proposition untuk user

### 2. Canonical URL
- ✅ Mencegah duplicate content
- ✅ Consolidate ranking signals
- ✅ Best practice SEO

### 3. Schema FAQ
- ✅ Berpotensi muncul di "People Also Ask" Google
- ✅ Meningkatkan CTR dari search results
- ✅ Rich snippets di SERP
- ✅ Better structured data untuk search engines

---

## ⚠️ CATATAN PENTING

1. **Jangan lupa deploy** setelah perubahan
2. **Test di Google Search Console** setelah deploy
3. **Validasi Schema** menggunakan: https://validator.schema.org/
4. **Monitor performa** di Google Analytics & Search Console

---

## 📊 PERBANDINGAN AKHIR

| Element | Website Lama | Website Baru (Sebelum) | Website Baru (Sesudah) |
|---------|--------------|------------------------|------------------------|
| Title Tag | ✅ | ✅ | ✅ |
| Meta Desc | ✅ | ✅ | ✅ |
| H1 Tag | ✅ SEO-friendly | ❌ Kurang optimal | ✅ Fixed |
| Canonical | ✅ | ❌ Missing | ✅ Fixed |
| Schema FAQ | ✅ | ❌ Missing | ✅ Fixed |
| Schema Business | ✅ | ✅ | ✅ |
| Open Graph | ✅ | ✅ | ✅ |

---

## 🚀 LANGKAH SELANJUTNYA

1. Buka `src/app/page.tsx`
2. Edit H1 tag (line ~27-31)
3. Buka `src/app/layout.tsx`
4. Tambah canonical URL di <head>
5. Tambah schema FAQ setelah schema RecyclingCenter
6. Save semua file
7. Test di local: `npm run dev`
8. Deploy ke production
9. Test menggunakan Google Rich Results Test

---

**DIBUAT:** 31 Oktober 2025
**UNTUK:** JelantahGO Website Optimization
**PRIORITAS:** HIGH (Impact SEO besar)
