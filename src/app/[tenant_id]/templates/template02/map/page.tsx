import { Suspense } from 'react';
import MapClient from '../../../map/MapClient';
import { getVacancies } from '@/app/actions/vacancy';

export const revalidate = 60;

export const metadata = {
  title: '지도검색 | 여기와방',
  description: '원룸·투룸·오피스텔 매물을 지도에서 실시간 검색하세요.',
};

export default async function Template02MapPage() {
  const res = await getVacancies({ all: true });
  const initialVacancies = res.success ? (res.data || []) : [];

  return (
    <div className="oneroom-map-wrapper">
      <style>{`
        .oneroom-map-wrapper header.sticky {
          display: none !important;
        }
      `}</style>
      <Suspense fallback={<div style={{ padding: "50px", textAlign: "center" }}>지도를 불러오는 중...</div>}>
        <MapClient initialVacancies={initialVacancies} />
      </Suspense>
    </div>
  );
}
