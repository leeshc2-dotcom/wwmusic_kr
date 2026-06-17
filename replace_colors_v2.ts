import fs from 'fs';
import path from 'path';

function replaceColors(dir: string) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceColors(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      content = content.replace(/amber-500/g, 'orange-400');
      content = content.replace(/amber-400/g, 'orange-300');
      content = content.replace(/amber-600/g, 'orange-500');
      
      // Also change the background of "2nd page" (Services) and "last page" (Footer) to lighter navy
      // If the user means Services is 2nd page
      if (fullPath.endsWith('Services.tsx')) {
        content = content.replace(/bg-slate-950/g, 'bg-[#0F172A]'); // section
        content = content.replace(/bg-slate-900/g, 'bg-[#1E293B]'); // cards
      }
      if (fullPath.endsWith('TrustSection.tsx')) {
        content = content.replace(/bg-slate-950/g, 'bg-[#0F172A]');
        content = content.replace(/bg-slate-900/g, 'bg-[#1E293B]');
      }
      if (fullPath.endsWith('Footer.tsx')) {
        content = content.replace(/bg-slate-900/g, 'bg-[#0F172A]'); 
        content = content.replace(/bg-slate-800/g, 'bg-[#1E293B]');
      }
      
      fs.writeFileSync(fullPath, content);
      console.log(`Replaced in ${fullPath}`);
    }
  }
}

replaceColors('./src');
