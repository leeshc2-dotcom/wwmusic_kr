import fs from 'fs';
import path from 'path';

function fixFiles(dir: string) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      fixFiles(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      content = content.replace(/text-\[11px\]/g, 'text-xs');
      
      fs.writeFileSync(fullPath, content);
      console.log(`Fixed in ${fullPath}`);
    }
  }
}

fixFiles('./src');
