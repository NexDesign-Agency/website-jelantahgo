const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '..', 'src', 'app', 'blog');

// Get all blog directories
const blogDirs = fs.readdirSync(blogDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory() && dirent.name !== 'page.tsx')
  .map(dirent => dirent.name);

const blogList = [];

// Function to extract image URLs from file
function extractImages(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const images = [];
  
  // Match Image component src
  const imageRegex = /src=["']([^"']+)["']/g;
  let match;
  while ((match = imageRegex.exec(content)) !== null) {
    if (match[1].startsWith('http')) {
      images.push(match[1]);
    }
  }
  
  return images;
}

// Process each blog directory
blogDirs.forEach(slug => {
  const pagePath = path.join(blogDir, slug, 'page.tsx');
  
  if (fs.existsSync(pagePath)) {
    const images = extractImages(pagePath);
    const url = `/blog/${slug}`;
    
    blogList.push({
      slug,
      url,
      images,
    });
  }
});

// Sort alphabetically
blogList.sort((a, b) => a.slug.localeCompare(b.slug));

// Generate markdown report
let report = '# LIST SEMUA HALAMAN BLOGPOST DAN URL GAMBAR\n\n';
report += `**Total Halaman:** ${blogList.length}\n\n`;
report += '---\n\n';

blogList.forEach((item, index) => {
  report += `## ${index + 1}. ${item.slug}\n\n`;
  report += `**URL:** \`${item.url}\`\n\n`;
  
  if (item.images.length > 0) {
    report += `**Gambar (${item.images.length}):**\n`;
    item.images.forEach((img, idx) => {
      report += `${idx + 1}. \`${img}\`\n`;
    });
  } else {
    report += `**Gambar:** *Tidak ada gambar ditemukan*\n`;
  }
  
  report += '\n---\n\n';
});

// Save to file
const outputPath = path.join(__dirname, '..', 'BLOG_IMAGES_LIST.md');
fs.writeFileSync(outputPath, report, 'utf8');

console.log(`✅ Report berhasil dibuat: ${outputPath}`);
console.log(`📊 Total halaman: ${blogList.length}`);
console.log(`🖼️  Total gambar: ${blogList.reduce((sum, item) => sum + item.images.length, 0)}`);

// Also output to console in simpler format
console.log('\n=== RINGKASAN CEPAT ===\n');
blogList.forEach(item => {
  console.log(`${item.url}`);
  item.images.forEach(img => {
    console.log(`  → ${img}`);
  });
  if (item.images.length === 0) {
    console.log(`  → *Tidak ada gambar*`);
  }
});

