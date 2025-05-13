import fs from 'fs';
import path from 'path';

const signature = `
<!--
  🚀 Built by 24PapaDollar (Group Emergent)
  📧 Contact: groupemergents@gmail.com
  🌐 Portfolio: https://groupemergent.vercel.app
  ⭐ GitHub: https://github.com/PapaDollars
  📅 Build Date: ${new Date().toLocaleString()}
-->`;

const distPath = path.join(process.cwd(), 'dist');
const htmlFiles = fs.readdirSync(distPath).filter(file => file.endsWith('.html'));

htmlFiles.forEach(file => {
  const filePath = path.join(distPath, file);
  let content = fs.readFileSync(filePath, 'utf8');
  content = signature + '\n' + content;
  fs.writeFileSync(filePath, content);
});

console.log('✅ Signature 24PapaDollar ajoutée aux fichiers build');