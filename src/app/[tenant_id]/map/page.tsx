import { Suspense } from 'react';
import MapClient from './MapClient';
import { getVacancies } from '@/app/actions/vacancy';
import Header01 from '@/components/templates/template01/Header01';
import Header02 from '@/components/templates/template02/Header02';

export const revalidate = 60;

export const metadata = {
  title: '지도검색 | 빌드온',
  description: '빌드온의 상가·사무실 매물을 실시간으로 지도에서 검색하세요.',
};

export default async function MapSearchPage({ params }: { params: Promise<{ tenant_id: string }> }) {
  const res = await getVacancies({ all: true });
  const initialVacancies = res.success ? (res.data || []) : [];

  const resolvedParams = await params;
  const theme = (resolvedParams.tenant_id === 'template02' || resolvedParams.tenant_id === 'templete02') ? 'Template02' : 'Template01';

  if (theme === 'Template02') {
    return (
      <div className="flex flex-col h-screen">
        <Header02 />
        <main className="flex-1 min-h-0">
          <Suspense fallback={<div style={{ padding: "50px", textAlign: "center" }}>Loading Maps...</div>}>
            <MapClient initialVacancies={initialVacancies} hideHeader={true} />
          </Suspense>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen">
      <Header01 />
      <main className="flex-1 min-h-0">
        <Suspense fallback={<div style={{ padding: "50px", textAlign: "center" }}>Loading Maps...</div>}>
          <MapClient initialVacancies={initialVacancies} hideHeader={true} />
        </Suspense>
      </main>
    </div>
  );
}
