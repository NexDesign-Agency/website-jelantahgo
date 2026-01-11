// Final fix for all blog footer structures
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
        results.push({ path: pagePath, slug: file });
      }
    }
  });
  
  return results;
}

function fixFooter(filePath, slug) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Extract slug
  const slugMatch = content.match(/<BlogArticleFooter currentSlug="([^"]+)" \/>/);
  const footerSlug = slugMatch ? slugMatch[1] : slug;
  
  // Pattern: wrong indentation (20+ spaces)
  if (content.match(/\s{20,}<BlogArticleFooter/)) {
    // Remove all wrong footer instances
    content = content.replace(
      /{\/\* Article Footer \*\/}\s+\s+<BlogArticleFooter[^>]+>\s+\s+<\/div>\s+\s+<\/div>\s+(\s+<\/div>\s+)?\<\/div>\s*\n\s*\n\s*{\/\* Sidebar \*\/}/g,
      ''
    );
    
    // Find sidebar
    const sidebarIndex = content.indexOf('{/* Sidebar */}');
    if (sidebarIndex > 0) {
      const beforeSidebar = content.substring(0, sidebarIndex);
      const afterSidebar = content.substring(sidebarIndex);
      
      // Find last </div></div> before sidebar
      const lines = beforeSidebar.split('\n');
      let insertIndex = lines.length - 1;
      
      // Look for pattern </div> followed by </div>
      for (let i = lines.length - 1; i >= 1; i--) {
        if (lines[i].trim() === '</div>' && lines[i-1].trim() === '</div>') {
          insertIndex = i - 1;
          break;
        }
      }
      
      if (insertIndex < lines.length) {
        const indent = lines[insertIndex].match(/^(\s*)/)[1];
        lines.splice(insertIndex, 0,
          '',
          `${indent}{/* Article Footer */}`,
          `${indent}            <BlogArticleFooter currentSlug="${footerSlug}" />`,
          `${indent}              </div>`,
          `${indent}            </div>`
        );
        
        content = lines.join('\n') + '\n' + afterSidebar;
        modified = true;
      }
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
blogPages.forEach(({ path: pagePath, slug }) => {
  if (fixFooter(pagePath, slug)) {
    fixed++;
  }
});

console.log(`\nFixed ${fixed} files`);

