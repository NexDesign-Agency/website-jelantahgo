// Simple script to fix BlogArticleFooter placement
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

function fixFooter(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Check if has BlogArticleFooter but wrong structure
  if (!content.includes('BlogArticleFooter')) {
    return false;
  }
  
  // Find the sidebar marker
  const sidebarMarker = '{/* Sidebar */}';
  if (!content.includes(sidebarMarker)) {
    return false;
  }
  
  // Extract slug from BlogArticleFooter
  const slugMatch = content.match(/<BlogArticleFooter currentSlug="([^"]+)" \/>/);
  if (!slugMatch) {
    return false;
  }
  const slug = slugMatch[1];
  
  // Find wrong footer pattern: inside CTA div
  // Pattern: </a></div></div>{/* Article Footer */}... (wrong placement)
  const wrongPattern = /(\s+<\/a>\s+<\/div>\s+<\/div>)\s+{\/\* Article Footer \*\/}\s+(\s+)<BlogArticleFooter[^>]+>\s+(\s+)<\/div>\s+(\s+)<\/div>\s+(\s+)<\/div>\s+\<\/div>/;
  
  if (content.match(wrongPattern)) {
    // Remove wrong footer placement
    content = content.replace(
      /(\s+<\/a>\s+<\/div>\s+<\/div>)\s+{\/\* Article Footer \*\/}\s+\s+<BlogArticleFooter[^>]+>\s+\s+<\/div>\s+\s+<\/div>\s+\s+<\/div>\s+\<\/div>\s+\n\s+\n\s+{\/\* Sidebar \*\/}/,
      `$1</div>\n            </div>\n\n            {/* Article Footer */}\n            <BlogArticleFooter currentSlug="${slug}" />\n              </div>\n            </div>\n            \n            {/* Sidebar */}`
    );
    modified = true;
  } else {
    // Try different pattern - footer with extra closing divs
    const pattern2 = /(\s+<\/div>\s+<\/div>)\s+{\/\* Article Footer \*\/}\s+\s+<BlogArticleFooter[^>]+>\s+\s+<\/div>\s+\s+<\/div>\s+\s+<\/div>\s+\<\/div>\s+\n\s+\n\s+{\/\* Sidebar \*\/}/;
    
    if (content.match(pattern2)) {
      content = content.replace(
        pattern2,
        `$1\n\n            {/* Article Footer */}\n            <BlogArticleFooter currentSlug="${slug}" />\n              </div>\n            </div>\n            \n            {/* Sidebar */}`
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
console.log(`Found ${blogPages.length} blog pages`);

let fixed = 0;
blogPages.forEach(pagePath => {
  if (fixFooter(pagePath)) {
    fixed++;
  }
});

console.log(`\nFixed ${fixed} files`);

