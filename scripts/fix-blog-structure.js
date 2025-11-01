const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '../src/app/blog');

// Files with syntax errors from build output
const problemFiles = [
  'bahaya-buang-jelantah-sembarangan/page.tsx',
  'bahaya-minyak-jelantah-kesehatan/page.tsx',
  'cara-jual-jelantah-menguntungkan/page.tsx',
  'cara-kumpulkan-100-liter-jelantah/page.tsx',
  'checklist-peralatan-pengepul-jelantah/page.tsx',
];

function fixFile(filePath) {
  const fullPath = path.join(blogDir, filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`File not found: ${fullPath}`);
    return false;
  }

  let content = fs.readFileSync(fullPath, 'utf8');
  let modified = false;

  // Fix pattern: BlogArticleFooter should be outside prose div, and fix closing divs
  // Pattern to find: 
  //   </div>  // closes some content div
  //   {/* Article Footer */}
  //   <BlogArticleFooter ... />
  //   </div>  // extra closing div
  //   </div>  // extra closing div

  // Look for BlogArticleFooter placement issue
  const footerPattern = /(\s*)(<\/div>\s*\/\/.*?)?(\s*\{\/\* Article Footer \*\/\})\s*\n(\s*)(<BlogArticleFooter[^>]+ \/>)\s*\n(\s*)(<\/div>)\s*\n(\s*)(<\/div>)/;
  
  if (footerPattern.test(content)) {
    // Replace with correct structure: Footer should be after prose div closes
    content = content.replace(
      /(\s*)(\{\/\* Article Footer \*\/\})\s*\n(\s*)(<BlogArticleFooter[^>]+ \/>)\s*\n(\s*)(<\/div>)\s*\n(\s*)(<\/div>)/,
      (match, before, comment, indent1, footer, indent2, closing1, indent3, closing2) => {
        // Find the slug from BlogArticleFooter
        const slugMatch = footer.match(/currentSlug="([^"]+)"/);
        const slug = slugMatch ? slugMatch[1] : '';
        
        // Return correct structure: close prose div, then footer outside
        return `${indent1}</div>\n\n${indent1}${comment}\n${indent1}${footer}\n${indent2}</div>`;
      }
    );
    modified = true;
  }

  // Alternative fix: if footer is inside prose but structure is different
  const footerInsidePattern = /(<\/div>\s*\n\s*\{\/\* Article Footer \*\/\})\s*\n\s*(<BlogArticleFooter[^>]+ \/>)\s*\n\s*(<\/div>\s*\n\s*<\/div>)/;
  if (footerInsidePattern.test(content)) {
    content = content.replace(
      footerInsidePattern,
      (match, before, footer, after) => {
        // Extract the footer component
        return `${before.replace('</div>', '</div>\n')}\n            ${footer}\n          </div>`;
      }
    );
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Fixed: ${filePath}`);
    return true;
  }

  return false;
}

// Fix all problem files
console.log('Fixing blog post structure issues...\n');

let fixedCount = 0;
for (const file of problemFiles) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`\nFixed ${fixedCount} out of ${problemFiles.length} files.`);

