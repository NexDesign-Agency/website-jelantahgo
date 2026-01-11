const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/app/blog/bahaya-minyak-jelantah-kesehatan/page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Fix indentation for content inside the section starting at line 59
// All content inside the section should be indented by 18 spaces (2 more than current 14)

const lines = content.split('\n');
let inSection = false;
let sectionDepth = 0;
const fixed = [];

for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  
  // Detect section start
  if (line.includes('{/* 5 Bahaya */}')) {
    inSection = true;
    sectionDepth = 0;
    fixed.push(line);
    continue;
  }
  
  // Detect section end
  if (inSection && line.trim() === '</section>') {
    inSection = false;
    fixed.push(line);
    continue;
  }
  
  // Inside section - fix indentation
  if (inSection) {
    const trimmed = line.trim();
    
    // Skip empty lines and comments
    if (!trimmed || trimmed.startsWith('{/*') || trimmed.startsWith('*/')) {
      fixed.push(line);
      continue;
    }
    
    // Check if this is a closing tag
    if (trimmed.startsWith('</')) {
      // Count depth and adjust
      if (trimmed.includes('</section>')) {
        line = '                ' + trimmed;
      } else {
        line = '                  ' + trimmed;
      }
    } else if (trimmed.startsWith('<')) {
      // Opening tags - ensure 18 spaces
      const currentIndent = line.match(/^(\s*)/)[1].length;
      if (currentIndent < 16) {
        line = '                  ' + trimmed;
      }
    } else {
      // Other content - ensure proper indentation
      const currentIndent = line.match(/^(\s*)/)[1].length;
      if (currentIndent < 16) {
        line = '                  ' + trimmed;
      }
    }
  }
  
  fixed.push(line);
}

fs.writeFileSync(filePath, fixed.join('\n'), 'utf8');
console.log('Fixed indentation in bahaya-minyak-jelantah-kesehatan/page.tsx');

