import Template01Layout from './templates/template01/layout';
import Template01Page from './templates/template01/page';

export default function TenantHomePage() {
  // TODO: Fetch theme_name from Supabase and render Template01 or Template02
  // For now, default to Template01 for existing agencies. 
  // (Preview routes /preview/templates/template01 bypass this and go directly to the template page)
  
  return (
    <Template01Layout>
      <Template01Page />
    </Template01Layout>
  );
}
