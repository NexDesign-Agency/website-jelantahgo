const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '../src/app/blog');

const problemFiles = [
  'checklist-peralatan-pengepul-jelantah/page.tsx',
  'ciri-pengepul-jelantah-nakal/page.tsx',
  'dampak-jelantah-ekosistem/page.tsx',
  'diy-sabun-lilin-minyak-jelantah/page.tsx',
  'harga-jual-minyak-jelantah-jakarta-utara/page.tsx',
  'jual-minyak-jelantah-tangerang/page.tsx',
  'kisah-sukses-ibu-rina/page.tsx',
  'kisah-sukses-pengepul-jelantah-pak-doni/page.tsx',
  'manajemen-limbah-jelantah-jakarta-pusat/page.tsx',
  'manajemen-logistik-pengepul-jelantah/page.tsx',
  'mitra-jelantahgo-vs-mandiri/page.tsx',
  'negosiasi-harga-pengepul/page.tsx',
  'peluang-bisnis-pengepul-jelantah/page.tsx',
  'pengepul-jelantah-jakarta-selatan/page.tsx',
  'regulasi-limbah-b3-jelantah-bisnis-kuliner/page.tsx',
  'jemput-jelantah-gratis-jakarta-barat/page.tsx',
  'panduan-bisnis-pengepul-jelantah/page.tsx',
  'skrip-template-penawaran-kerjasama-jelantah/page.tsx',
];

function extractSlug(filename) {
  const match = filename.match(/([^/]+)\/page\.tsx$/);
  return match ? match[1] : '';
}

function fixFile(filePath) {
  const fullPath = path.join(blogDir, filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`❌ File not found: ${fullPath}`);
    return false;
  }

  let content = fs.readFileSync(fullPath, 'utf8');
  const originalContent = content;
  const slug = extractSlug(filePath);

  // Pattern fix: Find the problematic structure and fix it
  // Common patterns:
  // 1. "            </div>            </div>" - double closing on same line
  // 2. Footer inside prose div
  // 3. Missing closing div for prose

  // Fix pattern 1: Double closing divs on same line
  content = content.replace(/            <\/div>\s*<\/div>\s*\n\s*\{\/\* Article Footer \*\/\}/g, 
    '            </div>\n            </div>\n\n            {/* Article Footer */}'
  );

  // Fix pattern 2: Missing prose div close before footer
  // Look for: content ends -> footer comment -> BlogArticleFooter -> closing div
  // Should be: content ends -> close prose -> footer comment -> BlogArticleFooter -> close lg:col-span-2
  
  const footerPattern = /(\s*)(\{\/\* Article Footer \*\/\})\s*\n(\s*)(<BlogArticleFooter[^>]+currentSlug="([^"]+)"[^>]*\s*\/>)\s*\n(\s*)(<\/div>)\s*\n(\s*)(<\/div>)/;
  
  if (footerPattern.test(content)) {
    content = content.replace(footerPattern, (match, indent1, comment, indent2, footer, slugValue, indent3, close1, indent4, close2) => {
      const slugToUse = slugValue || slug;
      return `${indent1}</div>\n\n${indent1}${comment}\n${indent2}<BlogArticleFooter currentSlug="${slugToUse}" />\n${indent3}</div>`;
    });
  }

  // Fix pattern 3: Footer followed by single closing div (missing prose close)
  const singleClosePattern = /(\s*)(\{\/\* Article Footer \*\/\})\s*\n(\s*)(<BlogArticleFooter[^>]+currentSlug="([^"]+)"[^>]*\s*\/>)\s*\n(\s*)(<\/div>)\s*\n(\s*)\{\/\* Sidebar \*\/\}/;
  
  if (singleClosePattern.test(content)) {
    content = content.replace(singleClosePattern, (match, indent1, comment, indent2, footer, slugValue, indent3, close1, indent4) => {
      const slugToUse = slugValue || slug;
      return `${indent1}</div>\n\n            ${comment}\n            <BlogArticleFooter currentSlug="${slugToUse}" />\n          </div>\n\n          {/* Sidebar */}`;
    });
  }

  // Fix pattern 4: Content ending with double divs then footer
  content = content.replace(/(<\/div>)\s*<\/div>\s*\n\s*\{\/\* Article Footer \*\/\}/g, 
    '$1\n            </div>\n\n            {/* Article Footer */}'
  );

  if (content !== originalContent) {
    fs.writeFileSync(fullPath, content, 'utf8');
    return true;
  }
  
  return false;
}

console.log('🔧 Fixing remaining blog post files...\n');

let fixedCount = 0;
for (let i = 0; i < problemFiles.length; i++) {
  const file = problemFiles[i];
  const fileNum = i + 2 + 1; // +2 because we already fixed 2 files
  
  if (fixFile(file)) {
    fixedCount++;
    console.log(`✅ Fixed ${fileNum}/22: ${file}`);
  } else {
    console.log(`⚠️  Auto-fix failed ${fileNum}/22: ${file} - needs manual check`);
  }
}

console.log(`\n📊 Fixed ${fixedCount + 2} out of 22 files (2 were fixed manually, ${fixedCount} by script)`);

