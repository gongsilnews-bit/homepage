const fs = require('fs');
const path = require('path');
const targets = ['src/app/[tenant_id]/(template01)', 'src/app/[tenant_id]/(template02)'];

const replaceInDir = (dir) => {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(file => {
    const p = path.join(dir, file);
    if (fs.statSync(p).isDirectory()) {
      replaceInDir(p);
    } else if (p.endsWith('.tsx') || p.endsWith('.ts')) {
      let c = fs.readFileSync(p, 'utf8');
      
      const before = c;

      // When the component was at `templates/template01/news/[id]/page.tsx`, it referenced layout at `../../layout`.
      // Now it's at `(template01)/news01/[id]/page.tsx`, referencing `../../templates/template01/layout` which is literally `@/components/page_templates/template01/layout`.
      c = c.replace(/from\s+['"](?:\.\.\/)+templates\//g, "from '@/components/page_templates/");
      
      if (before !== c) {
        console.log(`Updated ${p}`);
        fs.writeFileSync(p, c, 'utf8');
      }
    }
  });
};

targets.forEach(replaceInDir);
console.log('Done replacing imports');
