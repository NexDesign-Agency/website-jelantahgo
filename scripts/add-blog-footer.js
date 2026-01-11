// Script to add BlogArticleFooter to all blog posts
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
        results.push({
          path: pagePath,
          slug: file,
        });
      }
    }
  });
  
  return results;
}

function addFooterToFile(filePath, slug) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Skip if already has BlogArticleFooter
  if (content.includes('BlogArticleFooter')) {
    console.log(`Skipping ${filePath} - already has footer`);
    return false;
  }
  
  // 1. Add import if not exists
  if (!content.includes("import BlogArticleFooter")) {
    // Find the import statement for BlogSidebar
    const importPattern = /(import BlogSidebar from '@\/components\/BlogSidebar')/;
    if (content.match(importPattern)) {
      content = content.replace(
        importPattern,
        "$1\nimport BlogArticleFooter from '@/components/BlogArticleFooter'"
      );
    } else {
      // If no BlogSidebar, add after Link import
      const linkImportPattern = /(import Link from 'next\/link')/;
      if (content.match(linkImportPattern)) {
        content = content.replace(
          linkImportPattern,
          "$1\nimport BlogArticleFooter from '@/components/BlogArticleFooter'"
        );
      }
    }
  }
  
  // 2. Find the sidebar marker and insert footer before it
  const sidebarMarker = '{/* Sidebar */}';
  
  if (content.includes(sidebarMarker)) {
    const sidebarIndex = content.indexOf(sidebarMarker);
    const beforeSidebar = content.substring(0, sidebarIndex);
    const afterSidebar = content.substring(sidebarIndex);
    
    // Find the last closing divs pattern before sidebar
    // Look for pattern: </div></div> with some whitespace
    const lines = beforeSidebar.split('\n');
    let lastClosingDivsIndex = -1;
    let indent = '            ';
    
    // Go backwards to find the last closing divs
    for (let i = lines.length - 1; i >= 0; i--) {
      const line = lines[i];
      if (line.trim() === '</div>' || line.match(/^\s+<\/div>\s*$/)) {
        // Check if previous line is also closing div
        if (i > 0 && lines[i-1].trim() === '</div>') {
          lastClosingDivsIndex = i - 1;
          // Get indent from this line
          const match = line.match(/^(\s*)/);
          if (match) indent = match[1];
          break;
        }
      }
    }
    
    if (lastClosingDivsIndex >= 0) {
      // Insert footer before the closing divs
      const footerLines = [
        `${indent}{/* Article Footer */}`,
        `${indent}            <BlogArticleFooter currentSlug="${slug}" />`,
        `${indent}              </div>`,
        `${indent}            </div>`,
      ];
      
      lines.splice(lastClosingDivsIndex, 2, ...footerLines, ...lines.slice(lastClosingDivsIndex, lastClosingDivsIndex + 2));
      
      const newBeforeSidebar = lines.join('\n');
      content = newBeforeSidebar + '\n' + afterSidebar;
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${filePath}`);
      return true;
    }
  }
  
  // Alternative: Just before the sidebar div
  const sidebarDivPattern = /(\s+)(<div className="lg:col-span-1">)/;
  if (content.match(sidebarDivPattern)) {
    const match = content.match(sidebarDivPattern);
    const indent = match[1];
    const footerCode = `${indent}{/* Article Footer */}
${indent}            <BlogArticleFooter currentSlug="${slug}" />
${indent}              </div>
${indent}            </div>
`;
    
    content = content.replace(sidebarDivPattern, footerCode + match[0]);
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
    return true;
  }
  
  console.log(`Could not find insertion point in ${filePath}`);
  return false;
}

// Main execution
const blogPages = getAllBlogPages(blogDir);
console.log(`Found ${blogPages.length} blog pages`);

let updated = 0;
blogPages.forEach(({ path: pagePath, slug }) => {
  if (addFooterToFile(pagePath, slug)) {
    updated++;
  }
});

console.log(`\nUpdated ${updated} files`);
