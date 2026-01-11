const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '../src/app/blog');

// All 22 files with JSX errors
const problemFiles = [
  'cara-kumpulkan-100-liter-jelantah/page.tsx',
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
  'harga-jelantah-oktober-2025/page.tsx',
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

  // Pattern 1: Find BlogArticleFooter and fix structure around it
  // The correct structure should be:
  //   </div>  // closes prose div
  //   {/* Article Footer */}
  //   <BlogArticleFooter currentSlug="..." />
  // </div>  // closes lg:col-span-2
  
  // Find where BlogArticleFooter is
  const footerMatch = content.match(/(\{\/\*\s*Article Footer\s*\*\/\})\s*\n(\s*)(<BlogArticleFooter[^>]+currentSlug="([^"]+)"[^>]*\s*\/>)/);
  
  if (!footerMatch) {
    console.log(`⚠️  No BlogArticleFooter found in ${filePath}`);
    return false;
  }

  // Find the prose div that should close before footer
  // Look for the content structure pattern
  const lines = content.split('\n');
  let proseDivLine = -1;
  let footerLine = -1;
  let lgColSpan2Line = -1;
  
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('prose prose-lg max-w-none') && proseDivLine === -1) {
      proseDivLine = i;
    }
    if (lines[i].includes('BlogArticleFooter') && footerLine === -1) {
      footerLine = i;
    }
    if (lines[i].includes('lg:col-span-2') && !lines[i].includes('lg:col-span-1')) {
      lgColSpan2Line = i;
    }
  }

  if (proseDivLine === -1 || footerLine === -1) {
    console.log(`⚠️  Structure not found in ${filePath}`);
    return false;
  }

  // Rebuild content with correct structure
  // Strategy: Find content before footer, ensure prose closes, then footer, then lg:col-span-2 closes
  
  // Pattern: Look for closing patterns before BlogArticleFooter
  // We need to ensure there's a </div> closing the prose before footer
  
  // Find the last content div before footer comment
  let fixed = false;
  
  // Fix pattern: Ensure prose div is closed before BlogArticleFooter
  // Look for content ending and ensure proper structure
  
  // More targeted fix: Find where footer is and ensure structure around it
  const beforeFooter = content.substring(0, content.indexOf('{/* Article Footer */}'));
  const afterFooter = content.substring(content.indexOf('<BlogArticleFooter'));
  const footerLineMatch = afterFooter.match(/<BlogArticleFooter[^>]+currentSlug="([^"]+)"[^>]*\s*\/>/);
  
  if (footerLineMatch) {
    const footerSlug = footerLineMatch[1] || slug;
    
    // Check if prose div is properly closed before footer
    const beforeFooterLines = beforeFooter.split('\n');
    let lastContentLine = beforeFooterLines.length - 1;
    
    // Find the last non-empty, non-comment line
    while (lastContentLine >= 0 && (beforeFooterLines[lastContentLine].trim() === '' || beforeFooterLines[lastContentLine].trim().startsWith('{/*'))) {
      lastContentLine--;
    }
    
    // Check if we need to add closing div for prose
    let needsProseClose = true;
    let proseDepth = 0;
    
    for (let i = 0; i < beforeFooterLines.length; i++) {
      if (beforeFooterLines[i].includes('prose prose-lg max-w-none')) {
        proseDepth++;
      }
      if (beforeFooterLines[i].trim().startsWith('</div>')) {
        // Check if this closes prose by checking indentation and context
        const indent = beforeFooterLines[i].match(/^(\s*)/)[1].length;
        if (indent <= 14 && proseDepth > 0) {
          // Likely closes prose
          needsProseClose = false;
          break;
        }
      }
    }
    
    // Reconstruct with proper structure
    const footerIndent = '            '; // 12 spaces (standard for lg:col-span-2 content)
    
    // Remove existing footer section and rebuild
    const footerSectionRegex = /(\s*)(\{\/\*\s*Article Footer\s*\*\/\})\s*\n(\s*)(<BlogArticleFooter[^>]+currentSlug="[^"]+"[^>]*\s*\/>)\s*\n(\s*)(<\/div>)?/g;
    
    content = content.replace(footerSectionRegex, (match, indent1, comment, indent2, footer, indent3, extraDiv) => {
      // Ensure prose closes first
      const beforeMatch = content.substring(0, content.indexOf(match));
      const needsClose = !beforeMatch.match(/<\/div>\s*$/m) || beforeMatch.match(/<\/div>\s*$/m)[0].trim() === '';
      
      return `${indent1}</div>\n\n${indent1}${comment}\n${indent2}<BlogArticleFooter currentSlug="${footerSlug}" />\n${indent3}</div>`;
    });
    
    // Additional fix: Ensure proper nesting
    // Look for pattern where footer is incorrectly nested
    
    // Pattern where footer might be inside prose still
    const insideProsePattern = /(<div className="prose prose-lg max-w-none">[\s\S]*?)(\{\/\*\s*Article Footer\s*\*\/\})\s*\n(\s*)(<BlogArticleFooter[^>]+currentSlug="([^"]+)"[^>]*\s*\/>)\s*\n(\s*)(<\/div>)/;
    
    if (insideProsePattern.test(content)) {
      content = content.replace(insideProsePattern, (match, before, comment, indent1, footer, slug, indent2, closing) => {
        // Find where to close prose - look for last content before footer
        const lastContentIndex = before.lastIndexOf('\n            </div>');
        if (lastContentIndex > 0) {
          const beforeContent = before.substring(0, lastContentIndex);
          const afterContent = before.substring(lastContentIndex);
          return `${beforeContent}\n              </div>\n\n            ${comment}\n            ${footer}\n          </div>`;
        }
        return `${before}\n              </div>\n\n            ${comment}\n            ${footer}\n          </div>`;
      });
    }
    
    fixed = true;
  }

  // Additional cleanup: Ensure no duplicate closing divs
  // Look for patterns like </div></div> with wrong structure
  
  // Save if changed
  if (fixed && content !== originalContent) {
    fs.writeFileSync(fullPath, content, 'utf8');
    return true;
  }
  
  return false;
}

// Fix all files
console.log('🔧 Starting systematic fix of 22 blog post files...\n');

let fixedCount = 0;
for (let i = 0; i < problemFiles.length; i++) {
  const file = problemFiles[i];
  const fileNum = i + 1;
  
  if (fixFile(file)) {
    fixedCount++;
    console.log(`✅ Fixed ${fileNum}/22: ${file}`);
  } else {
    console.log(`⚠️  Could not auto-fix ${fileNum}/22: ${file} - Manual review needed`);
  }
}

console.log(`\n📊 Summary: Fixed ${fixedCount} out of ${problemFiles.length} files.`);
console.log(`\n⚠️  Note: Some files may need manual fixes due to complex structure variations.`);

