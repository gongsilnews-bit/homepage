'use client';

import Script from 'next/script';

export default function Template01LocationPage() {
  return (
    <div className="max-w-[960px] mx-auto px-4 py-16">
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-5xl font-black text-dark mb-4">오시는 길</h1>
        <p className="text-gray-medium text-[15px]">정확한 데이터 기반 전문 상담을 약속드립니다.</p>
      </div>

      <div className="bg-white border border-gray-border rounded-xl p-8 md:p-12 shadow-sm text-dark prose prose-lg max-w-none">
        
        <h2 className="text-2xl font-bold mb-4 text-gold mt-0">빌드온 중개법인 본사 오시는 길</h2>
        <p className="mb-6 leading-relaxed text-[16px] text-gray-700">
          대중교통이나 자가용을 이용해 방문하시는 비즈니스 고객분들께서는 아래 상세 약도 및 주차안내를 참고해 주시기 바랍니다.<br/>
          빌딩 내 <strong>발렛 주차가 지원</strong>됩니다. 도착 전 연락 주시면 안내해 드리겠습니다.
        </p>

        <div className="w-full flex justify-center mb-10">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80" 
            alt="Office Map Outside View" 
            className="rounded-xl w-full max-h-[400px] object-cover shadow border border-gray-100"
          />
        </div>

        {/* Daum (Kakao) Maps API Integration */}
        <div id="daum_map" className="w-full h-[400px] bg-gray-200 mt-10 mb-10 rounded-xl overflow-hidden border border-gray-200 shadow-sm relative z-0"></div>

        <Script 
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=9fa99df38ffc10f845af0fd7c32b5ebf&autoload=false" 
          strategy="lazyOnload"
          onLoad={() => {
            (window as any).kakao.maps.load(() => {
              const container = document.getElementById('daum_map');
              const options = {
                // Example coordinates for template01
                center: new (window as any).kakao.maps.LatLng(37.500977, 127.037286),
                level: 4
              };
              const map = new (window as any).kakao.maps.Map(container, options);
              const markerPosition  = new (window as any).kakao.maps.LatLng(37.500977, 127.037286); 
              const marker = new (window as any).kakao.maps.Marker({
                  position: markerPosition
              });
              marker.setMap(map);
            });
          }} 
        />

        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">상세 주소 및 정보</h3>
        <ul className="space-y-3 text-[15px] text-gray-700 bg-gray-50 p-6 rounded-lg mb-8 list-none">
          <li>📍 <strong>본사:</strong> 서울특별시 강남구 테헤란로 123, 5층 빌드온 빌딩</li>
          <li>📞 <strong>상담전화:</strong> 02-598-9788</li>
          <li>🚗 <strong>주차 안내:</strong> 빌딩 1층 로비 앞 무료 발렛 부스 이용</li>
          <li>⏰ <strong>영업 시간:</strong> 평일 09:00 ~ 18:00 (주말 예약 상담 가능)</li>
        </ul>

      </div>
    </div>
  );
}
