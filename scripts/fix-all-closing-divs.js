// Fix all blog posts with missing closing divs
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

function fixClosingDivs(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Pattern: BlogArticleFooter followed by empty line then sidebar (missing closing divs)
  const pattern = /<BlogArticleFooter[^>]+>\s*\n\s*\n\s+<div className="lg:col-span-1">/;
  
  if (content.match(pattern)) {
    // Extract slug
    const slugMatch = content.match(/<BlogArticleFooter currentSlug="([^"]+)" \/>/);
    if (slugMatch) {
      const slug = slugMatch[1];
      
      // Replace with correct structure
      content = content.replace(
        /<BlogArticleFooter[^>]+>\s*\n\s*\n\s+<div className="lg:col-span-1">/,
        `<BlogArticleFooter currentSlug="${slug}" />\n              </div>\n            </div>\n            \n            {/* Sidebar */}\n            <div className="lg:col-span-1">`
      );
      
      modified = true;
    }
  }
  
  if (modified) {
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
  if (fixClosingDivs(pagePath)) {
    fixed++;
  }
});

console.log(`\nFixed ${fixed} files`);

