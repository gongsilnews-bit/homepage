import Hero02 from '@/components/templates/template02/Hero02';
import ConditionSearch02 from '@/components/templates/template02/ConditionSearch02';
import PropertySection02 from '@/components/templates/template02/PropertySection02';
import Consultation02 from '@/components/templates/template02/Consultation02';
import NewsPreview02 from '@/components/templates/template02/NewsPreview02';
import Location02 from '@/components/templates/template02/Location02';
import PartnerBanner02 from '@/components/templates/template02/PartnerBanner02';

export const metadata = {
  title: '여기와방 | 원룸·투룸·오피스텔 전문',
  description: '내가 찾는 방 여기 다 있다! 원룸, 미투, 투룸, 쓰리룸 이상 전문 부동산.',
};

export default function Template02Home() {
  return (
    <>
      {/* 3. 메인페이지 (히어로) */}
      <Hero02 />
      
      {/* 5. 테마검색 (조건검색) */}
      <ConditionSearch02 />
      
      {/* + 매물 리스트 (최신/추천) */}
      <PropertySection02 />
      
      {/* 7. 문의남기기 (상담폼) */}
      <Consultation02 />
      
      {/* 6. 뉴스기사 (미리보기) */}
      <NewsPreview02 />
      
      {/* 8. 오시는길 (지도) */}
      <Location02 />
      
      {/* + 파트너 배너 */}
      <PartnerBanner02 />
    </>
  );
}
