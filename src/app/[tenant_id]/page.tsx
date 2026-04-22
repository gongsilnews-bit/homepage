import Template01Layout from './templates/template01/layout';
import Template01Page from './templates/template01/page';
import Template02Layout from './templates/template02/layout';
import Template02Page from './templates/template02/page';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function TenantHomePage({ params }: { params: Promise<{ tenant_id: string }> }) {
  const resolvedParams = await params;
  const theme = resolvedParams.tenant_id === 'template02' || resolvedParams.tenant_id === 'templete02' ? 'Template02' : 'Template01';

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
