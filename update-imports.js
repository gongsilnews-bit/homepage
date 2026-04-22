const fs = require('fs');
const path = require('path');

// Move directory safely
if (fs.existsSync('src/app/[tenant_id]/templates')) {
  fs.cpSync('src/app/[tenant_id]/templates', 'src/components/page_templates', { recursive: true });
  fs.rmSync('src/app/[tenant_id]/templates', { recursive: true, force: true });
}

const targets = ['src/app/[tenant_id]/(template01)', 'src/app/[tenant_id]/(template02)'];

const replaceInDir = (dir) => {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(file => {
    const p = path.join(dir, file);
    if(fs.statSync(p).isDirectory()) {
      replaceInDir(p);
    } else if(p.endsWith('.tsx') || p.endsWith('.ts')) {
      let c = fs.readFileSync(p, 'utf8');
      
      // Replace "../../templates/template01/layout" to "@/components/page_templates/template01/layout"
      c = c.replace(/from\s+['"]\.\.\/\.\.\/templates\//g, "from '@/components/page_templates/");
      c = c.replace(/from\s+['"]\.\.\/templates\//g, "from '@/components/page_templates/");
      
      fs.writeFileSync(p, c, 'utf8');
    }
  });
};

targets.forEach(replaceInDir);
