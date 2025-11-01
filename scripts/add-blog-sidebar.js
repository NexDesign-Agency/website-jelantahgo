// Script to add BlogSidebar to all blog posts
// Run with: node scripts/add-blog-sidebar.js

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
      // Check if it has page.tsx
      const pagePath = path.join(filePath, 'page.tsx');
      if (fs.existsSync(pagePath)) {
        results.push(pagePath);
      }
    }
  });
  
  return results;
}

function addSidebarToFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Skip if already has BlogSidebar
  if (content.includes('BlogSidebar')) {
    console.log(`Skipping ${filePath} - already has sidebar`);
    return false;
  }
  
  // 1. Add import if not exists
  if (!content.includes("import BlogSidebar")) {
    const importPattern = /(import Link from 'next\/link')/;
    if (content.match(importPattern)) {
      content = content.replace(
        importPattern,
        "$1\nimport BlogSidebar from '@/components/BlogSidebar'"
      );
    }
  }
  
  // 2. Change max-w-4xl to max-w-7xl and add grid
  const containerPattern = /<div className="container-custom max-w-4xl">\s*<div className="prose prose-lg max-w-none">/;
  const replacement = `<div className="container-custom max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">`;
  
  if (content.match(containerPattern)) {
    content = content.replace(containerPattern, replacement);
  }
  
  // 3. Find closing tags and add sidebar before closing
  // Look for the closing pattern: </div></div></section>
  const closingPattern = /(\s*<\/div>\s*<\/div>\s*<\/section>)(?=\s*<>\s*$|$)/;
  const sidebarReplacement = `              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <BlogSidebar />
              </div>
            </div>
          </div>
        </div>
      </section>`;
  
  if (content.match(closingPattern)) {
    content = content.replace(closingPattern, sidebarReplacement);
  }
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${filePath}`);
  return true;
}

// Main execution
const blogPages = getAllBlogPages(blogDir);
console.log(`Found ${blogPages.length} blog pages`);

let updated = 0;
blogPages.forEach(page => {
  if (addSidebarToFile(page)) {
    updated++;
  }
});

console.log(`\nUpdated ${updated} files`);

