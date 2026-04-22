const fs = require('fs');
const path = require('path');

const walk = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if(file.endsWith('page.tsx')) {
      results.push(file);
    }
  });
  return results;
};

// Fix template01 (Keep bottom return, drop the IF block)
const files01 = walk('src/app/[tenant_id]/(template01)');
files01.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  const before = c;

  c = c.replace(/(\s*)const theme = [^\n]*\n/, '');
  c = c.replace(/(\s*)if\s*\(\s*theme\s*===\s*['"]Template02['"]\s*\)\s*\{[\s\S]*?\}\s*return\s*\(/g, '$1return (');

  if (c !== before) {
    fs.writeFileSync(f, c, 'utf8');
    console.log('Fixed T1:', f);
  }
});

// Fix template02 (Extract IF block inner return, drop the bottom return)
const files02 = walk('src/app/[tenant_id]/(template02)');
files02.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  const before = c;

  c = c.replace(/(\s*)const theme = [^\n]*\n/, '');
  
  // Extract return(...) from inside the if block, and discard the rest of the function block until the closing brace
  c = c.replace(/(\s*)if\s*\(\s*theme\s*===\s*['"]Template02['"]\s*\)\s*\{\s*return\s*\(([\s\S]*?)\);\s*\}([\s\S]*?)$/g, 
    function(match, p1, p2, p3) {
      // Find the last closing brace in p3 (which closes the main function)
      let out = p1 + 'return (' + p2 + ');\n';
      // If p3 contains a closing brace for the function, append it
      if (p3.includes('}')) {
        const lastBraceIndex = p3.lastIndexOf('}');
        out += p3.substring(lastBraceIndex);
      }
      return out;
  });

  if (c !== before) {
    fs.writeFileSync(f, c, 'utf8');
    console.log('Fixed T2:', f);
  }
});
