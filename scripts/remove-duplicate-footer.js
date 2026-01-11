// Remove duplicate footer instances
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

function removeDuplicates(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;
  
  // Count BlogArticleFooter instances
  const matches = content.match(/<BlogArticleFooter/g);
  if (!matches || matches.length <= 1) return false;
  
  // Find all footer instances
  const footerPattern = /{\/\* Article Footer \*\/}\s*\n\s*<BlogArticleFooter[^>]+>\s*\n/g;
  const footerMatches = [...content.matchAll(footerPattern)];
  
  if (footerMatches.length > 1) {
    // Keep only the first correctly indented one (12 spaces or less)
    // Remove all instances with 20+ spaces
    let newContent = content;
    let foundCorrect = false;
    
    // Remove wrong ones (20+ spaces)
    newContent = newContent.replace(
      /{\/\* Article Footer \*\/}\s*\n\s{20,}<BlogArticleFooter[^>]+>\s*\n\s{20,}<\/div>\s*\n\s{20,}<\/div>\s*\n(\s+<\/div>\s*\n)?\s*<\/div>\s*\n\s*\n\s*{\/\* Sidebar \*\/}/g,
      ''
    );
    
    // If still has duplicates, keep the first properly indented one
    if (newContent.match(/<BlogArticleFooter/g) && newContent.match(/<BlogArticleFooter/g).length > 1) {
      // Find the correct one (12 spaces)
      const correctPattern = /{\/\* Article Footer \*\/}\s*\n\s{12}<BlogArticleFooter[^>]+>\s*\n\s{14}<\/div>\s*\n\s{12}<\/div>\s*\n/;
      const correctMatch = newContent.match(correctPattern);
      
      if (correctMatch) {
        // Remove all others
        newContent = newContent.replace(
          /{\/\* Article Footer \*\/}\s*\n\s{20,}<BlogArticleFooter[^>]+>\s*\n\s{20,}<\/div>\s*\n\s{20,}<\/div>\s*\n/g,
          ''
        );
      }
    }
    
    if (newContent !== originalContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Removed duplicates from ${filePath}`);
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
  if (removeDuplicates(pagePath)) {
    fixed++;
  }
});

console.log(`\nFixed ${fixed} files`);

