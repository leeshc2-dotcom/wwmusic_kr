import fs from 'fs';
import path from 'path';

function replaceOrange(dir: string) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceOrange(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      content = content.replace(/orange/g, 'amber');
      
      fs.writeFileSync(fullPath, content);
      console.log(`Replaced in ${fullPath}`);
    }
  }
}

replaceOrange('./src');
