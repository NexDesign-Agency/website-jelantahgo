const fs = require('fs');
const path = require('path');

// Mapping slug ke URL gambar baru
const imageMapping = {
  'ancaman-dan-peluang-minyak-jelantah': 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761963251/jelantahgo_hero_13_ellxu3.webp',
  'bahaya-buang-jelantah-sembarangan': 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761163998/jelantahgo_23_qbzsfv.webp',
  'bahaya-minyak-jelantah-kesehatan': 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761163998/jelantahgo_29_txjglj.webp',
  'cara-jual-jelantah-menguntungkan': 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761963249/jelantahgo_hero_5_r4hdb5.webp',
  'cara-kumpulkan-100-liter-jelantah': 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761163998/jelantahgo_26_hmnqjl.webp',
  'cara-menyimpan-minyak-jelantah': 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761163998/jelantahgo_28_uanklv.webp',
  'checklist-peralatan-pengepul-jelantah': 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761163998/jelantahgo_25_cfmfhd.webp',
  'ciri-pengepul-jelantah-nakal': 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761163998/jelantahgo_24_cbndgk.webp',
  'dampak-jelantah-ekosistem': 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761163998/jelantahgo_23_aru8je.webp',
  'diy-sabun-lilin-minyak-jelantah': 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761163997/jelantahgo_22_wuy3fj.webp',
  'fatberg-monster-bawah-tanah-jelantah': 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761163997/jelantahgo_21_skuom5.webp',
  'harga-jelantah-oktober-2025': 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761963251/jelantahgo_hero_12_qu8bdm.webp',
  'harga-jual-minyak-jelantah-jakarta-utara': 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761163997/jelantahgo_19_n7x6ka.webp',
  'jemput-jelantah-gratis-jakarta-barat': 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761163997/jelantahgo_12_owxvlk.webp',
  'jual-minyak-jelantah-bekasi': 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761963249/jelantahgo_hero_6_y74rop.webp',
  'jual-minyak-jelantah-depok-bogor': 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761963250/jelantahgo_hero_11_vic3dh.webp',
  'jual-minyak-jelantah-jakarta': 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761163996/jelantahgo_10_rhxacq.webp',
  'jual-minyak-jelantah-jakarta-timur': 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761163997/jelantahgo_11_ourqv3.webp',
  'jual-minyak-jelantah-tangerang': 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761963251/jelantahgo_hero_14_tvh1jt.webp',
  'kesalahan-menyimpan-jelantah': 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761963248/jelantahgo_hero_2_k42afg.webp',
  'kesalahan-penjual-jelantah-pemula': 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761163996/jelantahgo_18_idyjtq.webp',
  'kisah-sukses-ibu-rina': 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761163996/jelantahgo_17_fuusoh.webp',
  'kisah-sukses-pengepul-jelantah-pak-doni': 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761163996/jelantahgo_5_mjney9.webp',
  'manajemen-limbah-jelantah-jakarta-pusat': 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761963251/jelantahgo_hero_8_cwujgg.webp',
  'manajemen-logistik-pengepul-jelantah': 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761963250/jelantahgo_hero_9_mzwqd2.webp',
  'mitra-jelantahgo-vs-mandiri': 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761163996/jelantahgo_7_sepkud.webp',
  'negosiasi-harga-pengepul': 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761163995/jelantahgo_9_cjolqm.webp',
  'panduan-bisnis-pengepul-jelantah': 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761963250/jelantahgo_hero_7_rznf5j.webp',
  'panduan-jual-minyak-jelantah': 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761163995/jelantahgo_14_bfmpp8.webp',
  'peluang-bisnis-pengepul-jelantah': 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761163995/jelantahgo_3_fp6hfg.webp',
  'pengepul-jelantah-jakarta-selatan': 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761163995/jelantahgo_13_krbsky.webp',
  'regulasi-limbah-b3-jelantah-bisnis-kuliner': 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761163994/jelantahgo_1_x1hcjb.webp',
  'skrip-template-penawaran-kerjasama-jelantah': 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761963250/jelantahgo_hero_10_mczrvd.webp',
  'waktu-terbaik-jual-jelantah': 'https://res.cloudinary.com/dknswj9co/image/upload/f_webp,w_auto,c_fill,q_auto/v1761171105/jelantah-go_13_ok4gma.webp',
};

const blogDir = path.join(__dirname, '..', 'src', 'app', 'blog');

// Function to extract title from h1 tag
function extractTitle(content) {
  const h1Match = content.match(/<h1[^>]*>([^<]+)<\/h1>/);
  if (h1Match) {
    return h1Match[1].trim();
  }
  return null;
}

// Function to update image in file
function updateImageInFile(filePath, slug, newImageUrl) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Extract title for alt text
  const title = extractTitle(content);
  const altText = title || slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  // Pattern 1: Image component with src attribute
  const imagePattern = /(<Image\s+[^>]*src=["'])([^"']+)(["'][^>]*alt=["'])([^"']*)(["'][^>]*>)/;
  const imageMatch = content.match(imagePattern);
  
  if (imageMatch) {
    content = content.replace(
      imagePattern,
      `$1${newImageUrl}$3${altText}$5`
    );
    modified = true;
    console.log(`  ✅ Updated Image component: ${altText}`);
  } else {
    // Pattern 2: Image component with src on separate line (multiline)
    const multilinePattern = /src=["']([^"']+)["'][\s\S]*?alt=["']([^"']*)["']/;
    if (multilinePattern.test(content)) {
      content = content.replace(
        /src=["']([^"']+)["']/,
        `src="${newImageUrl}"`
      );
      content = content.replace(
        /alt=["']([^"']*)["']/,
        (match, oldAlt) => {
          if (oldAlt && oldAlt.trim().length > 0) {
            // Keep existing alt if it exists
            return match;
          }
          return `alt="${altText}"`;
        }
      );
      
      // If no alt found, add it after src
      if (!/alt=["']/.test(content)) {
        content = content.replace(
          /(src=["'][^"']+["'])/,
          `$1\n            alt="${altText}"`
        );
      }
      
      modified = true;
      console.log(`  ✅ Updated Image (multiline): ${altText}`);
    }
  }
  
  // Also check if image needs to be added (for pages without images)
  if (!modified && !/<Image/.test(content)) {
    // Find the image section or add it after hero section
    const heroSectionEnd = content.indexOf('</section>', content.indexOf('hero-bg-dots'));
    if (heroSectionEnd > 0) {
      const imageSection = `
      {/* Image */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <Image
            src="${newImageUrl}"
            alt="${altText}"
            width={1200}
            height={630}
            className="w-full max-w-4xl mx-auto rounded-card-lg shadow-layered"
            loading="lazy"
          />
        </div>
      </section>

`;
      content = content.slice(0, heroSectionEnd + 10) + imageSection + content.slice(heroSectionEnd + 10);
      modified = true;
      console.log(`  ✅ Added Image section: ${altText}`);
    }
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  
  return false;
}

console.log('🖼️  Starting to update blog images...\n');

let updatedCount = 0;
let skippedCount = 0;

Object.keys(imageMapping).forEach((slug, index) => {
  const filePath = path.join(blogDir, slug, 'page.tsx');
  const newImageUrl = imageMapping[slug];
  
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${slug}/page.tsx`);
    skippedCount++;
    return;
  }
  
  console.log(`${index + 1}. Processing: ${slug}`);
  
  if (updateImageInFile(filePath, slug, newImageUrl)) {
    updatedCount++;
  } else {
    console.log(`  ⚠️  No image found to update`);
    skippedCount++;
  }
  
  if ((index + 1) % 10 === 0) {
    console.log(`\n📊 Progress: ${index + 1}/${Object.keys(imageMapping).length} files processed\n`);
  }
});

console.log(`\n✅ Update complete!`);
console.log(`   Updated: ${updatedCount} files`);
console.log(`   Skipped: ${skippedCount} files`);
console.log(`   Total: ${Object.keys(imageMapping).length} files\n`);

