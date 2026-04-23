import Header01 from '@/components/templates/template01/Header01';
import Footer01 from '@/components/templates/template01/Footer01';
import Header02 from '@/components/templates/template02/Header02';
import Footer02 from '@/components/templates/template02/Footer02';
import Template01Home from '@/components/templates/template01/Template01Home';
import Template02Home from '@/components/templates/template02/Template02Home';
import { getHomepageSettings } from '@/app/actions/homepage';

// 페이지 레벨에서도 정적 캐싱이 적용되지 않도록 강력한 옵션 설정
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function TenantHomePage({ params }: { params: Promise<{ tenant_id: string }> }) {
  const resolvedParams = await params;
  
  // 실시간 캐시 무효화가 적용된 DB 조회 함수 (no-store 반영됨)
  const { themeName } = await getHomepageSettings(resolvedParams.tenant_id);

  if (themeName.toLowerCase().includes('template02') || themeName.toLowerCase().includes('templete02')) {
    return (
      <div className="min-h-screen flex flex-col bg-[#fbfbfb] font-pretendard">
        <Header02 />
        <Template02Home />
        <Footer02 />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-[#fbfbfb] font-pretendard">
      <Header01 />
      <Template01Home />
      <Footer01 />
    </div>
  );
}
