import Header01 from '@/components/templates/template01/Header01';
import Footer01 from '@/components/templates/template01/Footer01';
import Header02 from '@/components/templates/template02/Header02';
import Footer02 from '@/components/templates/template02/Footer02';
import Template01Page from './templates/template01/page';
import Template02Page from './templates/template02/page';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function TenantHomePage({ params }: { params: Promise<{ tenant_id: string }> }) {
  const resolvedParams = await params;
  const theme = resolvedParams.tenant_id === 'template02' || resolvedParams.tenant_id === 'templete02' ? 'Template02' : 'Template01';

  if (theme === 'Template02') {
    return (
      <div className="min-h-screen flex flex-col bg-[#fbfbfb] font-pretendard">
        <Header02 />
        <Template02Page />
        <Footer02 />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-[#fbfbfb] font-pretendard">
      <Header01 />
      <Template01Page />
      <Footer01 />
    </div>
  );
}
