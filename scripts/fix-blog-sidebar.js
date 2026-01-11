// Script to fix blog sidebar placement
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

function fixSidebar(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Skip if already has sidebar div
  if (content.includes('lg:col-span-1') && content.includes('BlogSidebar')) {
    console.log(`Skipping ${filePath} - sidebar already placed`);
    return false;
  }
  
  // Check if has BlogSidebar import but not placed
  if (content.includes('BlogSidebar') && !content.includes('lg:col-span-1')) {
    // Find the closing pattern before </section>
    // Look for patterns like: </div></div></section> before </>)
    const patterns = [
      /(\s*)<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/,
      /(\s*)<\/div>\s*<\/div>\s*<\/section>/,
    ];
    
    let replaced = false;
    for (const pattern of patterns) {
      if (content.match(pattern)) {
        const sidebarCode = `$1              </div>
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
        
        content = content.replace(pattern, sidebarCode);
        replaced = true;
        break;
      }
    }
    
    if (replaced) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed sidebar in ${filePath}`);
      return true;
    }
  }
  
  return false;
}

// Main execution
const blogPages = getAllBlogPages(blogDir);
let fixed = 0;

blogPages.forEach(page => {
  if (fixSidebar(page)) {
    fixed++;
  }
});

console.log(`\nFixed ${fixed} files`);

