import { Suspense } from 'react';
import MapClient from '../../../map/MapClient';
import { getVacancies } from '@/app/actions/vacancy';

export const revalidate = 60;

export const metadata = {
  title: '지도검색 | 빌드온',
  description: '빌드온의 상가·사무실 매물을 실시간으로 지도에서 검색하세요.',
};

export default async function Template01MapPage() {
  const res = await getVacancies({ all: true });
  const initialVacancies = res.success ? (res.data || []) : [];

  return (
    <Suspense fallback={<div style={{ padding: "50px", textAlign: "center" }}>Loading Maps...</div>}>
      <MapClient initialVacancies={initialVacancies} />
    </Suspense>
  );
}
