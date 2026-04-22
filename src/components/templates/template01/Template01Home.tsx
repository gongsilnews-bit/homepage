import Hero01 from '@/components/templates/template01/Hero01';
import ThemeSection01 from '@/components/templates/template01/ThemeSection01';
import PropertySection01 from '@/components/templates/template01/PropertySection01';
import Consultation01 from '@/components/templates/template01/Consultation01';
import NewsPreview01 from '@/components/templates/template01/NewsPreview01';
import Location01 from '@/components/templates/template01/Location01';
import PartnerBanner01 from '@/components/templates/template01/PartnerBanner01';

export default function Template01Home() {
  return (
    <>
      {/* 3. 메인페이지 (히어로) */}
      <Hero01 />
      
      {/* 5. 테마검색 (조건검색) */}
      <ThemeSection01 />
      
      {/* + 매물 리스트 (최신/추천) */}
      <PropertySection01 />
      
      {/* 7. 문의남기기 (상담폼) */}
      <Consultation01 />
      
      {/* 6. 뉴스기사 (미리보기) */}
      <NewsPreview01 />
      
      {/* 8. 오시는길 (지도) */}
      <Location01 />
      
      {/* + 파트너 배너 */}
      <PartnerBanner01 />
    </>
  );
}
