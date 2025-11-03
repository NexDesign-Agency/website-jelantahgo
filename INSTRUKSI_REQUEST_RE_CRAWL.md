# 📋 INSTRUKSI REQUEST RE-CRAWL GOOGLE SEARCH CONSOLE

## ✅ STATUS PERBAIKAN
- **Masalah:** Duplikasi FAQPage schema (2 item)
- **Solusi:** FAQPage schema dihapus dari root layout
- **Commit:** `adeae88` - "Fix: Hapus duplikasi FAQPage schema dari root layout"
- **Status Kode:** ✅ **SUDAH DIPERBAIKI**

## 🔍 VERIFIKASI PERBAIKAN
Dari HTML yang Anda kirim, sekarang hanya ada **1 FAQPage schema** (benar):
```html
<script id="faq-schema" type="application/ld+json">
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[...]}
</script>
```

✅ **Tidak ada duplikasi lagi di kode**

---

## 🚀 LANGKAH-LANGKAH REQUEST RE-CRAWL

### **STEP 1: Request URL Inspection di Google Search Console**

1. Buka **Google Search Console**: https://search.google.com/search-console
2. Pilih property **jelantahgo.com**
3. Klik menu **"URL Inspection"** (di sidebar kiri atau search bar di atas)
4. Masukkan URL yang error:
   - `https://jelantahgo.com/blog/panduan-jual-minyak-jelantah`
   - `https://jelantahgo.com/` (homepage jika juga error)
5. Klik **"Test Live URL"** atau **"Request Indexing"**
6. Tunggu hasil - Google akan crawl ulang halaman tersebut

### **STEP 2: Request Indexing via Sitemap**

1. Di Google Search Console, klik **"Sitemaps"** (di sidebar)
2. Lihat sitemap yang terdaftar: `https://jelantahgo.com/sitemap.xml`
3. Jika sudah terdaftar, klik **"Resubmit"** atau **"Request Indexing"**
4. Ini akan memicu Google untuk crawl ulang semua URL di sitemap

### **STEP 3: Validasi Structured Data**

1. Buka **Google Rich Results Test**: 
   - https://search.google.com/test/rich-results
2. Masukkan URL yang error:
   - `https://jelantahgo.com/blog/panduan-jual-minyak-jelantah`
3. Klik **"Test URL"**
4. **Pastikan hasilnya:**
   - ✅ FAQPage schema terdeteksi (1 item saja)
   - ✅ Tidak ada error duplikasi
   - ✅ Status: "Valid"

### **STEP 4: Validasi Schema.org**

1. Buka **Schema.org Validator**: 
   - https://validator.schema.org/
2. Masukkan URL atau paste JSON-LD dari halaman
3. Verifikasi tidak ada error

---

## ⏱️ TIMELINE UPDATE

- **Immediate (0-24 jam):** Google mulai crawl ulang
- **Short term (1-3 hari):** Error hilang dari Google Search Console
- **Medium term (1-2 minggu):** Rich snippets FAQ muncul di hasil pencarian

---

## 📊 MONITORING

### **Yang Harus Diperhatikan:**

1. **Google Search Console → Coverage Report**
   - Monitor jumlah halaman yang di-index
   - Pastikan tidak ada error baru

2. **Google Search Console → Enhancements → FAQ**
   - Cek apakah FAQPage schema terdeteksi dengan benar
   - Pastikan jumlah FAQ sesuai (tidak duplikat)

3. **Google Search Console → URL Inspection**
   - Test beberapa URL secara berkala
   - Pastikan "Last crawl" terbaru setelah deploy

---

## ⚠️ CATATAN PENTING

1. **Cache Google bisa bertahan 1-3 hari** - Jangan khawatir jika error masih muncul hari ini
2. **Request indexing terbatas** - Jangan spam request (max 10 request per hari per URL)
3. **Deploy sudah dilakukan** - Pastikan perubahan sudah live di production

---

## 🔧 TROUBLESHOOTING

### **Jika Error Masih Muncul Setelah 3 Hari:**

1. **Cek HTML Source**
   - View source halaman di browser
   - Search untuk `FAQPage` - harus hanya ada 1 kali per halaman
   
2. **Cek Structured Data Testing Tool**
   - Pastikan tidak ada duplikasi di hasil test
   
3. **Hubungi Support**
   - Jika masalah persist, mungkin ada issue di caching atau CDN

---

## ✅ CHECKLIST VERIFIKASI

- [ ] Request indexing di Google Search Console (URL Inspection)
- [ ] Request indexing via Sitemap (Resubmit)
- [ ] Validasi di Google Rich Results Test
- [ ] Validasi di Schema.org Validator
- [ ] Monitor Google Search Console (24 jam, 3 hari, 1 minggu)
- [ ] Cek HTML source untuk memastikan hanya 1 FAQPage per halaman

---

**Dibuat:** 3 November 2025
**Status:** Perbaikan kode sudah selesai, tunggu Google re-crawl

