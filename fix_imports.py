import os
import glob

base_dir = r"c:\Users\user\Desktop\homepage\src\app\[tenant_id]"

def process_file(filepath):
    # Determine which template this file belongs to
    is_t1 = "(template01)" in filepath
    is_t2 = "(template02)" in filepath
    
    if not is_t1 and not is_t2:
        return
        
    template_num = "01" if is_t1 else "02"
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    has_header_tag = "<Header />" in content or "<Header />" in content
    has_footer_tag = "<Footer />" in content or "<Footer />" in content
    
    # We only care if we actually have the tags
    if not has_header_tag and not has_footer_tag:
        return

    # Replace tags
    content = content.replace("<Header />", f"<Header{template_num} />")
    content = content.replace("<Footer />", f"<Footer{template_num} />")
    
    # Add imports if missing
    header_import = f"import Header{template_num} from '@/components/templates/template{template_num}/Header{template_num}';"
    footer_import = f"import Footer{template_num} from '@/components/templates/template{template_num}/Footer{template_num}';"
    
    lines = content.split('\n')
    
    if has_header_tag and header_import not in content:
        # insert after first or second import
        for i, line in enumerate(lines):
            if not line.startswith('import ') and 'use client' not in line and line.strip() != '':
                lines.insert(i, header_import)
                break
                
    if has_footer_tag and footer_import not in '\n'.join(lines):
        for i, line in enumerate(lines):
            if not line.startswith('import ') and 'use client' not in line and line.strip() != '':
                lines.insert(i, footer_import)
                break
                
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write('\n'.join(lines))
        print(f"Fixed {filepath}")

for root, dirs, files in os.walk(base_dir):
    for func in files:
        if func.endswith(('.tsx', '.ts')):
            process_file(os.path.join(root, func))
