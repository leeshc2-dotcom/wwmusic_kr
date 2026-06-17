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
      
      content = content.replace(/text-\[10px\]/g, 'text-[11px]');
      content = content.replace(/text-\[9px\]/g, 'text-[10px]');
      
      if (fullPath.endsWith('Footer.tsx')) {
         content = content.replace(
           /글로벌 독립 퍼블리셔 및 지식재산 권리자들에게 주요 현지 단체 환경에 맞춘 직접적인 행정망 파이프라인, 현지화된 저작권 승인 통제, 그리고 폭발적인 수요의 브랜드 동기화 마케팅 솔루션을 전문적으로 제공하고 있습니다\./g,
           '투명하고 효율적인 저작권 대리중개 서비스를 바탕으로, 국내외 권리자의 가치를 극대화하고 신뢰도 높은 권리 보호와 행정 솔루션을 전문적으로 제공합니다.'
         );
      }
      
      fs.writeFileSync(fullPath, content);
      console.log(`Fixed in ${fullPath}`);
    }
  }
}

fixFiles('./src');
