import Template01Layout from './templates/template01/layout';
import Template01Page from './templates/template01/page';
import Template02Layout from './templates/template02/layout';
import Template02Page from './templates/template02/page';

export default function TenantHomePage({ params }: { params: { tenant_id: string } }) {
  // TODO: Fetch theme_name from Supabase and render Template01 or Template02
  const theme = params.tenant_id === 'template02' || params.tenant_id === 'templete02' ? 'Template02' : 'Template01';

  if (theme === 'Template02') {
    return (
      <Template02Layout>
        <Template02Page />
      </Template02Layout>
    );
  }
  
  return (
    <Template01Layout>
      <Template01Page />
    </Template01Layout>
  );
}
