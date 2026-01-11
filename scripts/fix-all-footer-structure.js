// Fix all blog posts with incorrect footer structure and indentation
const fs = require('fs');
const path = require('path');

const blogDir = path.join(process.cwd(), 'src', 'app', 'blog');

function getAllBlogPages(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      const pagePath = path.join(filePath, 'page.tsx');
      if (fs.existsSync(pagePath)) {
        results.push(pagePath);
      }
    }
  });
  
  return results;
}

function fixStructure(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;
  
  // Check if BlogArticleFooter exists
  if (!content.includes('BlogArticleFooter')) {
    return false;
  }
  
  // Extract slug
  const slugMatch = content.match(/<BlogArticleFooter currentSlug="([^"]+)" \/>/);
  if (!slugMatch) {
    return false;
  }
  const slug = slugMatch[1];
  
  // Pattern 1: Footer dengan indentasi salah (24 spaces atau lebih)
  // {/* Article Footer */}\n                        <BlogArticleFooter ... />\n                          </div>\n                        </div>\n\n                          
  const pattern1 = /{\/\* Article Footer \*\/}\s*\n\s{24,}<BlogArticleFooter[^>]+>\s*\n\s{26,}<\/div>\s*\n\s{24,}<\/div>\s*\n\s*\n\s{26,}<div className="lg:col-span-1">/;
  
  if (content.match(pattern1)) {
    content = content.replace(
      /{\/\* Article Footer \*\/}\s*\n\s{24,}<BlogArticleFooter[^>]+>\s*\n\s{26,}<\/div>\s*\n\s{24,}<\/div>\s*\n\s*\n\s{26,}<div className="lg:col-span-1">/,
      `{/* Article Footer */}\n            <BlogArticleFooter currentSlug="${slug}" />\n              </div>\n            </div>\n            \n            {/* Sidebar */}\n            <div className="lg:col-span-1">`
    );
  }
  
  // Pattern 2: Footer langsung tanpa closing divs yang benar sebelum sidebar
  const pattern2 = /<BlogArticleFooter[^>]+>\s*\n\s*\n\s+<div className="lg:col-span-1">/;
  
  if (content.match(pattern2) && content === originalContent) {
    content = content.replace(
      /<BlogArticleFooter[^>]+>\s*\n\s*\n\s+<div className="lg:col-span-1">/,
      `<BlogArticleFooter currentSlug="${slug}" />\n              </div>\n            </div>\n            \n            {/* Sidebar */}\n            <div className="lg:col-span-1">`
    );
  }
  
  // Pattern 3: Footer dengan spacing salah
  const pattern3 = /{\/\* Article Footer \*\/}\s*\n\s{24,}<BlogArticleFooter[^>]+>\s*\n\s{26,}<\/div>\s*\n\s{24,}<\/div>\s*\n\s*\n\s{10,}<div className="lg:col-span-1">/;
  
  if (content.match(pattern3) && content === originalContent) {
    content = content.replace(
      /{\/\* Article Footer \*\/}\s*\n\s{24,}<BlogArticleFooter[^>]+>\s*\n\s{26,}<\/div>\s*\n\s{24,}<\/div>\s*\n\s*\n\s{10,}<div className="lg:col-span-1">/,
      `{/* Article Footer */}\n            <BlogArticleFooter currentSlug="${slug}" />\n              </div>\n            </div>\n            \n            {/* Sidebar */}\n            <div className="lg:col-span-1">`
    );
  }
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed ${path.basename(path.dirname(filePath))}`);
    return true;
  }
  
  return false;
}

// Main execution
const blogPages = getAllBlogPages(blogDir);
console.log(`Found ${blogPages.length} blog pages\n`);

let fixed = 0;
blogPages.forEach(pagePath => {
  if (fixStructure(pagePath)) {
    fixed++;
  }
});

console.log(`\nFixed ${fixed} files`);

