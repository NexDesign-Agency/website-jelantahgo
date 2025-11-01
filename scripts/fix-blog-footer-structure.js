// Script to fix BlogArticleFooter structure in all blog posts
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

function fixFooterStructure(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Pattern 1: Footer di dalam CTA div dengan indentasi salah
  // Pattern: </a></div></div>{/* Article Footer */}\n                        <BlogArticleFooter
  const pattern1 = /(\s+<\/a>\s+<\/div>\s+<\/div>)\s+{\/\* Article Footer \*\/}\s+(\s+)<BlogArticleFooter currentSlug="([^"]+)" \/>\s+(\s+)<\/div>\s+(\s+)<\/div>\s+(\s+)<\/div>\s+\<\/div>\s+\n\s+\n\s+{\/\* Sidebar \*\/}/;
  
  if (content.match(pattern1)) {
    // Extract slug
    const match = content.match(pattern1);
    const slug = match[3];
    const beforeFooter = content.substring(0, content.indexOf('{/* Article Footer */}'));
    const afterFooter = content.substring(content.indexOf('</div>', content.indexOf('</div>', content.indexOf('</div>', content.indexOf('{/* Article Footer */}')))) + 6);
    
    // Find the correct position - before sidebar
    const sidebarIndex = content.indexOf('{/* Sidebar */}');
    const beforeSidebar = content.substring(0, sidebarIndex);
    const afterSidebar = content.substring(sidebarIndex);
    
    // Find last closing divs before sidebar (should be closing prose and lg:col-span-2 divs)
    const lastDivsMatch = beforeSidebar.match(/(\s+<\/div>\s+<\/div>\s+)(?=\s*$)/);
    
    if (lastDivsMatch) {
      const indent = lastDivsMatch[1].match(/^(\s+)/)[1];
      const newBeforeSidebar = beforeSidebar.replace(
        /(\s+<\/div>\s+<\/div>\s+)(?=\s*$)/,
        `\n${indent}{/* Article Footer */}\n${indent}            <BlogArticleFooter currentSlug="${slug}" />\n${indent}              </div>\n${indent}            </div>`
      );
      
      // Remove old footer location
      const cleaned = newBeforeSidebar.replace(
        /{\/\* Article Footer \*\/}\s+\s+<BlogArticleFooter[^>]+>\s+\s+<\/div>\s+\s+<\/div>\s+\s+<\/div>\s+\<\/div>\s+\n\s+\n\s+{\/\* Sidebar \*\/}/,
        ''
      );
      
      content = cleaned + afterSidebar;
      modified = true;
    }
  }
  
  // Pattern 2: Footer dengan banyak closing div yang salah
  const pattern2 = /{\/\* Article Footer \*\/}\s+(\s+)<BlogArticleFooter currentSlug="([^"]+)" \/>\s+(\s+)<\/div>\s+(\s+)<\/div>\s+(\s+)<\/div>\s+\<\/div>\s+\n\s+\n\s+{\/\* Sidebar \*\/}/;
  
  if (!modified && content.match(pattern2)) {
    const sidebarIndex = content.indexOf('{/* Sidebar */}');
    const beforeSidebar = content.substring(0, sidebarIndex);
    const afterSidebar = content.substring(sidebarIndex);
    
    // Remove old footer
    const cleanedBefore = beforeSidebar.replace(
      /{\/\* Article Footer \*\/}\s+\s+<BlogArticleFooter[^>]+>\s+\s+<\/div>\s+\s+<\/div>\s+\s+<\/div>\s+\<\/div>\s+$/m,
      ''
    );
    
    // Find match for slug
    const slugMatch = content.match(/<BlogArticleFooter currentSlug="([^"]+)" \/>/);
    if (slugMatch) {
      const slug = slugMatch[1];
      const lastDivsMatch = cleanedBefore.match(/(\s+<\/div>\s+<\/div>\s+)(?=\s*$)/);
      
      if (lastDivsMatch) {
        const indent = lastDivsMatch[1].match(/^(\s+)/)[1];
        const newBeforeSidebar = cleanedBefore.replace(
          /(\s+<\/div>\s+<\/div>\s+)(?=\s*$)/,
          `\n${indent}{/* Article Footer */}\n${indent}            <BlogArticleFooter currentSlug="${slug}" />\n${indent}              </div>\n${indent}            </div>`
        );
        
        content = newBeforeSidebar + '\n' + afterSidebar;
        modified = true;
      }
    }
  }
  
  // Simple fix: look for the pattern and fix it manually
  if (!modified) {
    // Find all instances of wrong footer placement
    const wrongPattern = /(\s+<\/a>\s+<\/div>\s+<\/div>)\s+{\/\* Article Footer \*\/}\s+(\s+)<BlogArticleFooter currentSlug="([^"]+)" \/>\s+(\s+)<\/div>\s+(\s+)<\/div>\s+(\s+)<\/div>\s+\<\/div>\s+\n\s+\n\s+{\/\* Sidebar \*\/}/;
    
    if (content.match(wrongPattern)) {
      const lines = content.split('\n');
      const newLines = [];
      let skipUntilSidebar = false;
      let foundFooter = false;
      let footerSlug = '';
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Find footer
        if (line.includes('{/* Article Footer */}')) {
          foundFooter = true;
          skipUntilSidebar = true;
          // Extract slug from next line
          if (i + 1 < lines.length) {
            const slugMatch = lines[i + 1].match(/currentSlug="([^"]+)"/);
            if (slugMatch) footerSlug = slugMatch[1];
          }
          // Skip footer lines until sidebar
          continue;
        }
        
        // Skip lines until sidebar if we found footer
        if (skipUntilSidebar) {
          if (line.includes('{/* Sidebar */}')) {
            skipUntilSidebar = false;
            // Find the right place to insert footer - before last closing divs
            // Look back for last </div></div> pattern
            let insertIndex = newLines.length;
            for (let j = newLines.length - 1; j >= 0; j--) {
              if (newLines[j].trim() === '</div>' && j > 0 && newLines[j-1].trim() === '</div>') {
                insertIndex = j - 1;
                break;
              }
            }
            
            // Get indent from the div we're inserting before
            const indent = insertIndex < newLines.length ? newLines[insertIndex].match(/^(\s*)/)[1] : '            ';
            
            // Insert footer before the closing divs
            newLines.splice(insertIndex, 0, 
              `${indent}{/* Article Footer */}`,
              `${indent}            <BlogArticleFooter currentSlug="${footerSlug}" />`,
              `${indent}              </div>`,
              `${indent}            </div>`
            );
            
            newLines.push(line);
          }
          continue;
        }
        
        newLines.push(line);
      }
      
      content = newLines.join('\n');
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
  if (fixFooterStructure(pagePath)) {
    fixed++;
  }
});

console.log(`\nFixed ${fixed} files`);

