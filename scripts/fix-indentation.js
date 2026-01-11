const fs = require('fs');
const path = require('path');

const files = [
  'src/app/blog/bahaya-buang-jelantah-sembarangan/page.tsx',
  'src/app/blog/bahaya-minyak-jelantah-kesehatan/page.tsx'
];

function fixIndentation(filePath) {
  const fullPath = path.join(__dirname, '..', filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`File not found: ${fullPath}`);
    return false;
  }

  let content = fs.readFileSync(fullPath, 'utf8');
  
  // Fix indentation inside prose div
  // Lines after "prose prose-lg max-w-none"> should be indented by 16 spaces (4 levels)
  // But content after opening div should be indented properly
  
  // Split into lines
  const lines = content.split('\n');
  let inProse = false;
  const fixed = [];
  
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    
    // Detect opening of prose div
    if (line.includes('prose prose-lg max-w-none')) {
      inProse = true;
      fixed.push(line);
      continue;
    }
    
    // Detect closing of prose div (before Article Footer)
    if (inProse && (line.includes('Article Footer') || line.includes('BlogArticleFooter'))) {
      // Close prose div before footer
      if (fixed[fixed.length - 1].trim() && !fixed[fixed.length - 1].includes('</div>')) {
        // Check if we need to add closing div
        const prevLine = fixed[fixed.length - 1];
        if (!prevLine.includes('</div>') && !prevLine.trim().startsWith('{/*')) {
          fixed.push('              </div>');
        }
      }
      inProse = false;
      fixed.push(line);
      continue;
    }
    
    // Fix indentation for content inside prose
    if (inProse && line.trim() && !line.trim().startsWith('{/*')) {
      // Content should be indented by 16 spaces
      const trimmed = line.trim();
      if (!trimmed.startsWith('</') && !trimmed.startsWith('<Blog')) {
        // Ensure proper indentation (16 spaces = 4 levels)
        const currentIndent = line.match(/^(\s*)/)[1].length;
        if (currentIndent < 14) {
          line = '                ' + trimmed;
        }
      }
    }
    
    fixed.push(line);
  }
  
  fs.writeFileSync(fullPath, fixed.join('\n'), 'utf8');
  console.log(`Fixed indentation: ${filePath}`);
  return true;
}

// Fix all files
files.forEach(file => fixIndentation(file));
console.log('Done!');

