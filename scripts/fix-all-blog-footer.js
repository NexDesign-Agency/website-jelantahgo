// Comprehensive fix for all blog footer structures
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
  const originalContent = content;
  
  // Extract slug
  const slugMatch = content.match(/<BlogArticleFooter currentSlug="([^"]+)" \/>/);
  if (!slugMatch) return false;
  const slug = slugMatch[1];
  
  // Check if has wrong indentation (20+ spaces or wrong structure)
  const hasWrongFooter = content.match(/\s{20,}<BlogArticleFooter/) || 
                        content.match(/{\/\* Article Footer \*\/}\s+\s+<BlogArticleFooter/);
  
  if (!hasWrongFooter) return false;
  
  // Remove all footer instances that have wrong structure
  content = content.replace(
    /{\/\* Article Footer \*\/}\s*(\s{12,})?<BlogArticleFooter[^>]+>\s*(\s{12,})?<\/div>\s*(\s{12,})?<\/div>\s*(\s{12,})?<\/div>\s*(\s+)?<\/div>\s*\n\s*\n\s*{\/\* Sidebar \*\/}/g,
    ''
  );
  
  // Find sidebar
  const sidebarIndex = content.indexOf('{/* Sidebar */}');
  if (sidebarIndex === -1) return false;
  
  const beforeSidebar = content.substring(0, sidebarIndex);
  const afterSidebar = content.substring(sidebarIndex);
  
  // Find last </div></div> pattern before sidebar
  const lines = beforeSidebar.split('\n');
  let insertIndex = -1;
  
  // Look for closing </div></div> pattern
  for (let i = lines.length - 1; i >= 1; i--) {
    const line1 = lines[i].trim();
    const line2 = lines[i-1].trim();
    if (line1 === '</div>' && line2 === '</div>') {
      insertIndex = i - 1;
      break;
    }
  }
  
  if (insertIndex === -1) {
    // Fallback: insert before last </div> before sidebar
    for (let i = lines.length - 1; i >= 0; i--) {
      if (lines[i].trim() === '</div>') {
        insertIndex = i;
        break;
      }
    }
  }
  
  if (insertIndex >= 0) {
    const indent = lines[insertIndex].match(/^(\s*)/)[1];
    lines.splice(insertIndex, 0,
      '',
      `${indent}{/* Article Footer */}`,
      `${indent}            <BlogArticleFooter currentSlug="${slug}" />`,
      `${indent}              </div>`,
      `${indent}            </div>`
    );
    
    content = lines.join('\n') + '\n' + afterSidebar;
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed ${filePath}`);
      return true;
    }
  }
  
  return false;
}

// Main execution
const blogPages = getAllBlogPages(blogDir);
console.log(`Found ${blogPages.length} blog pages\n`);

let fixed = 0;
blogPages.forEach(pagePath => {
  if (fixFooter(pagePath)) {
    fixed++;
  }
});

console.log(`\nFixed ${fixed} files`);

