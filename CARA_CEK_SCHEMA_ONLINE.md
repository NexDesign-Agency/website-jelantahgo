# 🔍 CARA CEK SCHEMA.ORG SETELAH ONLINE
## Tools & Metode Verifikasi

**Tanggal:** 29 Januari 2025  
**Status:** Ready for Verification

---

## 🎯 TOOLS UNTUK VERIFIKASI

### **1. Google Rich Results Test** ⭐ **RECOMMENDED**

**URL:** https://search.google.com/test/rich-results

**Cara Pakai:**
1. Buka: https://search.google.com/test/rich-results
2. Paste URL website (contoh: `https://jelantahgo.com`)
   - Atau paste kode HTML langsung
3. Klik **"Test URL"**
4. Tunggu hasil test

**Yang Dicek:**
- ✅ Schema.org markup valid atau tidak
- ✅ Error property yang tidak valid
- ✅ Rich snippets eligibility
- ✅ Structured data types

**Expected Result:**
- ✅ **No errors** tentang `serviceType`
- ✅ **Valid** structured data
- ✅ Rich results eligibility (jika ada)

**Screenshot Areas:**
- "Valid" green checkmark
- "Errors" section (harus kosong)
- "Rich results" preview

---

### **2. Schema.org Validator** ⭐ **RECOMMENDED**

**URL:** https://validator.schema.org/

**Cara Pakai:**
1. Buka: https://validator.schema.org/
2. Pilih tab **"Code Snippet"**
3. Copy JSON-LD dari website:
   - Buka website di browser
   - View page source (Ctrl+U)
   - Cari `<script type="application/ld+json">`
   - Copy isinya
4. Paste ke validator
5. Klik **"Run Test"**

**Yang Dicek:**
- ✅ Schema.org vocabulary compliance
- ✅ Property validity
- ✅ Type compatibility

**Expected Result:**
- ✅ **No errors** tentang `serviceType`
- ✅ **Valid** structured data
- ✅ Proper Schema.org types

---

### **3. Google Search Console** ⭐ **IMPORTANT**

**URL:** https://search.google.com/search-console

**Cara Pakai:**
1. Login ke Google Search Console
2. Pilih property: `jelantahgo.com`
3. Buka **"Enhancements"** → **"Structured Data"**
4. Cek error reports

**Yang Dicek:**
- ✅ Error count untuk `serviceType`
- ✅ Affected pages list
- ✅ Error status (fixed/active)

**Expected Result:**
- ✅ Error `serviceType` **menghilang** setelah re-crawl (1-2 minggu)
- ✅ Status berubah dari "Error" → "Valid"

**Timeline:**
- Immediate: Fix sudah di-deploy
- 1-2 hari: Re-crawl mulai
- 1-2 minggu: Error hilang dari reports

**Cara Request Re-index:**
1. Buka **"URL Inspection"** tool
2. Paste URL yang error
3. Klik **"Request Indexing"**
4. Repeat untuk beberapa halaman utama

---

### **4. Structured Data Testing Tool (Google Legacy)**

**URL:** https://developers.google.com/search/docs/appearance/structured-data

**Note:** Tool ini sudah deprecated, tapi masih bisa digunakan untuk testing.

**Alternatif:**
- Gunakan Rich Results Test (tool #1) sebagai pengganti

---

### **5. Browser DevTools (Manual Check)**

**Cara Pakai:**
1. Buka website di browser (Chrome/Firefox)
2. Tekan **F12** (buka DevTools)
3. Buka tab **"Elements"** atau **"Inspector"**
4. Cari `<script type="application/ld+json">`
5. Copy JSON content
6. Paste ke JSON validator (jsonlint.com)

**Yang Dicek:**
- ✅ JSON syntax valid
- ✅ Tidak ada property `serviceType`
- ✅ Ada property `description` atau `category`

**Expected Result:**
- ✅ JSON valid
- ✅ Tidak ada `serviceType` di schema
- ✅ Ada `description` (RecyclingCenter) atau `category` (Service)

---

### **6. SEO Tools (Third-Party)**

#### **A. Screaming Frog SEO Spider**
- Download: https://www.screamingfrog.co.uk/seo-spider/
- Crawl website
- Cek structured data errors
- Export report

#### **B. Ahrefs Site Audit**
- URL: https://ahrefs.com/site-audit
- Crawl website
- Cek structured data issues
- View detailed reports

#### **C. SEMrush Site Audit**
- URL: https://www.semrush.com/site-audit/
- Crawl website
- Cek structured data errors
- View recommendations

---

## 📋 CHECKLIST VERIFIKASI

### **Immediate (Setelah Deploy):**
- [ ] Test dengan Google Rich Results Test
- [ ] Test dengan Schema.org Validator
- [ ] Cek di browser DevTools (JSON valid)
- [ ] Pastikan tidak ada `serviceType` di source code

### **1-2 Hari Setelah Deploy:**
- [ ] Request re-index di Google Search Console
- [ ] Monitor Google Search Console untuk re-crawl
- [ ] Cek Rich Results Test lagi

### **1-2 Minggu Setelah Deploy:**
- [ ] Cek Google Search Console → Enhancements → Structured Data
- [ ] Verifikasi error `serviceType` hilang
- [ ] Cek apakah rich snippets muncul (jika eligible)

---

## 🔍 DETAIL VERIFIKASI PER TOOL

### **Google Rich Results Test**

**Steps:**
1. Buka: https://search.google.com/test/rich-results
2. Input: `https://jelantahgo.com`
3. Klik "Test URL"

**Expected Output:**
```
✅ Valid
No errors found
Structured data: RecyclingCenter, Service (if applicable)
```

**If Error:**
```
❌ Error: The property serviceType is not recognized
→ Fix belum ter-deploy atau perlu re-crawl
```

---

### **Schema.org Validator**

**Steps:**
1. Buka: https://validator.schema.org/
2. Tab: "Code Snippet"
3. Copy JSON-LD dari page source
4. Paste dan klik "Run Test"

**Expected Output:**
```
✅ Valid
Type: RecyclingCenter
Properties: name, description, address, geo, areaServed, priceRange
No errors
```

**If Error:**
```
❌ Error: Unknown property "serviceType"
→ Fix belum ter-deploy
```

---

### **Google Search Console**

**Steps:**
1. Login: https://search.google.com/search-console
2. Select property: `jelantahgo.com`
3. Navigate: Enhancements → Structured Data
4. Check errors

**Expected Output (After 1-2 weeks):**
```
✅ No errors
Valid structured data: 42 pages
```

**Current Status (Before Fix):**
```
❌ 42 pages with errors
Error: serviceType property not recognized
```

---

## 🚀 QUICK VERIFICATION COMMANDS

### **Check via cURL (Terminal/Command Prompt):**
```bash
# Get HTML and check for serviceType
curl -s https://jelantahgo.com | grep -i "servicetype"

# Expected: No output (tidak ada serviceType)
```

### **Check via Browser Console (JavaScript):**
```javascript
// Open browser console (F12)
// Run this:
document.querySelectorAll('script[type="application/ld+json"]').forEach(script => {
  const data = JSON.parse(script.textContent);
  if (data.serviceType) {
    console.error('❌ serviceType found:', data.serviceType);
  } else {
    console.log('✅ No serviceType found');
  }
});
```

---

## 📊 MONITORING CHECKLIST

### **Week 1:**
- [ ] Deploy fix ke production
- [ ] Test dengan Rich Results Test
- [ ] Request re-index di Google Search Console
- [ ] Monitor crawl status

### **Week 2:**
- [ ] Check Google Search Console errors
- [ ] Verify error count berkurang
- [ ] Test beberapa URLs lagi dengan Rich Results Test

### **Week 3-4:**
- [ ] Final check Google Search Console
- [ ] Verify semua errors hilang
- [ ] Check rich snippets appearance (jika ada)

---

## 🎯 EXPECTED RESULTS

### **Before Fix:**
```
❌ 42 pages with errors
❌ Error: serviceType property not recognized
❌ Google Search Console warnings
```

### **After Fix (Immediate):**
```
✅ Rich Results Test: Valid
✅ Schema.org Validator: Valid
✅ No serviceType in source code
```

### **After Fix (1-2 weeks):**
```
✅ Google Search Console: No errors
✅ All 42 pages: Valid structured data
✅ Rich snippets: Eligible (if applicable)
```

---

## 🔗 LINKS PENTING

1. **Google Rich Results Test:**
   https://search.google.com/test/rich-results

2. **Schema.org Validator:**
   https://validator.schema.org/

3. **Google Search Console:**
   https://search.google.com/search-console

4. **Schema.org Documentation:**
   https://schema.org/RecyclingCenter
   https://schema.org/Service

---

## ⚠️ TROUBLESHOOTING

### **Problem: Masih ada error di Rich Results Test**

**Possible Causes:**
1. Fix belum ter-deploy ke production
2. Cache browser/CDN masih menyimpan versi lama
3. Perlu re-crawl oleh Google

**Solutions:**
1. Verify deployment status
2. Clear cache atau test di incognito mode
3. Request re-index di Google Search Console
4. Tunggu 1-2 hari untuk re-crawl

---

### **Problem: Google Search Console masih show errors**

**Possible Causes:**
1. Google belum re-crawl halaman
2. Error masih di cache Google
3. Perlu waktu untuk update

**Solutions:**
1. Request re-index untuk beberapa halaman utama
2. Tunggu 1-2 minggu untuk Google re-crawl semua halaman
3. Monitor secara berkala

---

## ✅ KESIMPULAN

**Tools Terbaik untuk Verifikasi:**
1. ⭐ **Google Rich Results Test** - Immediate verification
2. ⭐ **Schema.org Validator** - Detailed validation
3. ⭐ **Google Search Console** - Long-term monitoring

**Timeline:**
- **Immediate:** Rich Results Test & Schema.org Validator
- **1-2 hari:** Request re-index
- **1-2 minggu:** Google Search Console errors hilang

**Action Items:**
1. Deploy fix ke production
2. Test dengan Rich Results Test
3. Request re-index di Google Search Console
4. Monitor selama 2-4 minggu

---

**Last Updated:** 29 Januari 2025  
**Status:** ✅ **Ready for Online Verification**

