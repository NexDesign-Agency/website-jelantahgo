// Final fix for all blog footer structures - add missing closing divs
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
  
  // Pattern 1: Footer followed by empty line then sidebar (missing closing divs)
  // <BlogArticleFooter ... />\n\n            <div className="lg:col-span-1">
  const pattern1 = /<BlogArticleFooter[^>]+>\s*\n\s*\n\s+<div className="lg:col-span-1">/;
  
  if (content.match(pattern1)) {
    // Extract slug
    const slugMatch = content.match(/<BlogArticleFooter currentSlug="([^"]+)" \/>/);
    if (slugMatch) {
      const slug = slugMatch[1];
      
      // Replace
      content = content.replace(
        /<BlogArticleFooter[^>]+>\s*\n\s*\n\s+<div className="lg:col-span-1">/,
        `<BlogArticleFooter currentSlug="${slug}" />\n              </div>\n            </div>\n            \n            {/* Sidebar */}\n            <div className="lg:col-span-1">`
      );
    }
  }
  
  // Pattern 2: Footer with extra whitespace
  const pattern2 = /{\/\* Article Footer \*\/}\s*\n\s*<BlogArticleFooter[^>]+>\s*\n\s*\n\s+<div className="lg:col-span-1">/;
  
  if (content.match(pattern2) && content === originalContent) {
    const slugMatch = content.match(/<BlogArticleFooter currentSlug="([^"]+)" \/>/);
    if (slugMatch) {
      const slug = slugMatch[1];
      
      content = content.replace(
        /{\/\* Article Footer \*\/}\s*\n\s*<BlogArticleFooter[^>]+>\s*\n\s*\n\s+<div className="lg:col-span-1">/,
        `{/* Article Footer */}\n            <BlogArticleFooter currentSlug="${slug}" />\n              </div>\n            </div>\n            \n            {/* Sidebar */}\n            <div className="lg:col-span-1">`
      );
    }
  }
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed ${filePath}`);
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

