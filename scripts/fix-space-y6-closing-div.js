const fs = require('fs');
const path = require('path');

const filesToFix = [
  'cara-kumpulkan-100-liter-jelantah',
  'checklist-peralatan-pengepul-jelantah',
  'ciri-pengepul-jelantah-nakal',
  'dampak-jelantah-ekosistem',
  'diy-sabun-lilin-minyak-jelantah',
  'harga-jual-minyak-jelantah-jakarta-utara',
  'jual-minyak-jelantah-tangerang',
  'kisah-sukses-ibu-rina',
  'kisah-sukses-pengepul-jelantah-pak-doni',
  'manajemen-limbah-jelantah-jakarta-pusat',
  'manajemen-logistik-pengepul-jelantah',
  'mitra-jelantahgo-vs-mandiri',
  'negosiasi-harga-pengepul',
  'peluang-bisnis-pengepul-jelantah',
  'pengepul-jelantah-jakarta-selatan',
  'regulasi-limbah-b3-jelantah-bisnis-kuliner',
  'harga-jelantah-oktober-2025',
  'jemput-jelantah-gratis-jakarta-barat',
  'panduan-bisnis-pengepul-jelantah',
  'skrip-template-penawaran-kerjasama-jelantah',
];

let fixedCount = 0;
let skippedCount = 0;
let alreadyFixedCount = 0;

console.log('🔧 Starting batch fix for missing space-y-6 closing div...\n');

filesToFix.forEach((slug, index) => {
  const filePath = path.join(__dirname, '..', 'src', 'app', 'blog', slug, 'page.tsx');
  
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${slug}/page.tsx`);
    skippedCount++;
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Check if already fixed
  if (content.includes('Close space-y-6 div')) {
    console.log(`⏭️  Already fixed: ${slug}/page.tsx`);
    alreadyFixedCount++;
    return;
  }

  // Pattern: Find closing divs before Tips/CTA comment
  // Match: </div> (last card) followed by </div> (should be space-y-6 but missing) then Tips
  // We're looking for: "            </div>\n          </div>\n\n            {/* Tips */}"
  // But actually it's: "            </div>\n\n            {/* Tips */}" (missing the space-y-6 closing div)
  
  let fixed = false;
  
  // Strategy: Find the Tips/CTA comment, then look backwards for closing divs
  const tipsPattern = /\n(\s+)\{(\/\* (Tips|CTA) \*\/\})/;
  const tipsMatch = content.match(tipsPattern);
  
  if (tipsMatch) {
    const commentIndent = tipsMatch[1];
    const comment = tipsMatch[2];
    const commentPos = content.indexOf(`{${comment}`);
    
    // Look backwards from comment to find the last closing divs before it
    const beforeComment = content.substring(Math.max(0, commentPos - 200), commentPos);
    
    // Find pattern: closing divs followed by blank line(s) then comment
    // Match: "            </div>\n          </div>\n\n            {/* Tips */}"
    // But missing: "          </div>" before Tips
    
    // Check if we have two closing divs before (last card + space-y-6)
    const doubleDivPattern = /(\s{10,14})(<\/div>)\s*\n(\s{8,12})(<\/div>)\s*\n\s*\{(\/\* (Tips|CTA) \*\/\})/;
    const doubleMatch = content.match(doubleDivPattern);
    
    if (!doubleMatch) {
      // Only one closing div before Tips - this is the problem
      // Find: "            </div>\n\n            {/* Tips */}"
      // Need to add: "          </div>" before the Tips comment
      
      const singleDivPattern = /(\s{10,14})(<\/div>)\s*\n\s*\n(\s{10,14})\{(\/\* (Tips|CTA) \*\/\})/;
      const singleMatch = content.match(singleDivPattern);
      
      if (singleMatch) {
        const lastCardIndent = singleMatch[1];
        const closingTag = singleMatch[2];
        const commentIndent2 = singleMatch[3];
        const comment2 = singleMatch[4];
        
        // Calculate space-y-6 closing div indent (2 spaces less than comment)
        const spaceY6Indent = commentIndent2.length >= 2 ? commentIndent2.slice(0, -2) : '          ';
        
        const replacement = `${lastCardIndent}</div>\n${spaceY6Indent}</div>  {/* Close space-y-6 div */}\n\n${commentIndent2}{${comment2}}`;
        content = content.replace(singleDivPattern, replacement);
        
        fs.writeFileSync(filePath, content, 'utf8');
        fixedCount++;
        fixed = true;
        console.log(`✅ Fixed: ${slug}/page.tsx`);
      } else {
        // Try even more flexible pattern - match any whitespace
        const flexiblePattern = /(\s+)(<\/div>)\s*\n\s*\n(\s+)\{(\/\* (Tips|CTA) \*\/\})/;
        const flexMatch = content.match(flexiblePattern);
        
        if (flexMatch) {
          const lastCardIndent3 = flexMatch[1];
          const closingTag3 = flexMatch[2];
          const commentIndent3 = flexMatch[3];
          const comment3 = flexMatch[4];
          
          // Calculate space-y-6 closing div indent (2 spaces less than comment)
          const spaceY6Indent3 = commentIndent3.length >= 2 ? commentIndent3.slice(0, -2) : commentIndent3;
          
          const replacement3 = `${lastCardIndent3}</div>\n${spaceY6Indent3}</div>  {/* Close space-y-6 div */}\n\n${commentIndent3}{${comment3}}`;
          content = content.replace(flexiblePattern, replacement3);
          
          fs.writeFileSync(filePath, content, 'utf8');
          fixedCount++;
          fixed = true;
          console.log(`✅ Fixed (flexible): ${slug}/page.tsx`);
        } else {
          // Try exact 12-space pattern: "            </div>\n\n            {/* Tips */}"
          const exact12Pattern = /(            <\/div>)\s*\n\s*\n(            \{(\/\* (Tips|CTA) \*\/)\})/;
          const exact12Match = content.match(exact12Pattern);
          
          if (exact12Match) {
            const lastDiv = exact12Match[1];
            const comment = exact12Match[2];
            
            const replacement12 = `${lastDiv}\n          </div>  {/* Close space-y-6 div */}\n\n          {${exact12Match[3]}}`;
            content = content.replace(exact12Pattern, replacement12);
            
            fs.writeFileSync(filePath, content, 'utf8');
            fixedCount++;
            fixed = true;
            console.log(`✅ Fixed (exact 12-space): ${slug}/page.tsx`);
          }
        }
      }
    }
  }

  if (!fixed) {
    console.log(`⚠️  Pattern not found: ${slug}/page.tsx`);
    skippedCount++;
  }

  // Show progress every 5 files
  if ((index + 1) % 5 === 0) {
    console.log(`\n📊 Progress: ${index + 1}/${filesToFix.length} files processed\n`);
  }
});

console.log(`\n✅ Batch fix complete!`);
console.log(`   Fixed: ${fixedCount} files`);
console.log(`   Already fixed: ${alreadyFixedCount} files`);
console.log(`   Skipped: ${skippedCount} files`);
console.log(`   Total processed: ${filesToFix.length} files\n`);
