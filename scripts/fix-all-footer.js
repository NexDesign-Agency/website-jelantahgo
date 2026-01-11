// Fix all blog footer structures
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
  
  // Pattern: wrong indentation with many spaces before BlogArticleFooter
  const wrongPatterns = [
    // Pattern with many spaces
    /\s{24,}<BlogArticleFooter currentSlug="([^"]+)" \/>/,
    // Pattern with wrong closing divs
    /{\/\* Article Footer \*\/}\s+\s+<BlogArticleFooter[^>]+>\s+\s+<\/div>\s+\s+<\/div>\s+\s+<\/div>\s+\<\/div>/,
  ];
  
  let slugFromFooter = slug;
  const slugMatch = content.match(/<BlogArticleFooter currentSlug="([^"]+)" \/>/);
  if (slugMatch) {
    slugFromFooter = slugMatch[1];
  }
  
  // Check if has wrong pattern - many spaces before BlogArticleFooter
  if (content.match(/\s{20,}<BlogArticleFooter/)) {
    // Remove old footer section
    content = content.replace(
      /{\/\* Article Footer \*\/}\s+\s+<BlogArticleFooter[^>]+>\s+\s+<\/div>\s+\s+<\/div>\s+(\s+<\/div>\s+)?\<\/div>\s+\n\s+\n\s+{\/\* Sidebar \*\/}/,
      ''
    );
    
    // Find sidebar and insert footer before it
    const sidebarIndex = content.indexOf('{/* Sidebar */}');
    if (sidebarIndex > 0) {
      const beforeSidebar = content.substring(0, sidebarIndex);
      const afterSidebar = content.substring(sidebarIndex);
      
      // Find last closing divs before sidebar
      const lines = beforeSidebar.split('\n');
      let insertIndex = lines.length;
      
      // Find last </div></div> pattern
      for (let i = lines.length - 1; i >= 0; i--) {
        const line = lines[i];
        if (line.trim() === '</div>' && i > 0 && lines[i-1].trim() === '</div>') {
          insertIndex = i - 1;
          break;
        }
      }
      
      if (insertIndex < lines.length) {
        const indent = lines[insertIndex].match(/^(\s*)/)[1];
        lines.splice(insertIndex, 0,
          '',
          `${indent}{/* Article Footer */}`,
          `${indent}            <BlogArticleFooter currentSlug="${slugFromFooter}" />`,
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
console.log(`Found ${blogPages.length} blog pages`);

let fixed = 0;
blogPages.forEach(({ path: pagePath, slug }) => {
  if (fixFooter(pagePath, slug)) {
    fixed++;
  }
});

console.log(`\nFixed ${fixed} files`);
console.log(`\nChecking remaining files...`);

// Check for remaining issues
let issues = 0;
blogPages.forEach(({ path: pagePath }) => {
  const content = fs.readFileSync(pagePath, 'utf8');
  if (content.match(/\s{20,}<BlogArticleFooter/)) {
    console.log(`Still has issue: ${pagePath}`);
    issues++;
  }
});

if (issues === 0) {
  console.log('All files fixed!');
} else {
  console.log(`\n${issues} files still need manual fixing.`);
}

