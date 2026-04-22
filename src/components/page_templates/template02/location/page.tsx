'use client';

import Script from 'next/script';

export default function Template02LocationPage() {
  return (
    <div className="max-w-[960px] mx-auto px-4 py-16">
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-5xl font-black text-dark mb-4">오시는 길</h1>
        <p className="text-gray-medium text-[15px]">고객님의 방문을 진심으로 환영합니다.</p>
      </div>

      <div className="bg-white border border-gray-border rounded-xl p-8 md:p-12 shadow-sm text-dark prose prose-lg max-w-none">
        
        <h2 className="text-2xl font-bold mb-4 text-teal mt-0">여기와방(리움7공인중개사사무소) 오시는 길을 알려드립니다.</h2>
        <p className="mb-6 leading-relaxed text-[16px] text-gray-700">
          대중교통이나 자가용을 이용해 방문하시는 고객분들께서는 아래 상세 약도 및 교통편을 참고해 주시기 바랍니다.<br/>
          건물 내 <strong>무료 주차가 가능</strong>하오니 방문 전 연락 한 번 부탁드립니다!
        </p>

        <div className="w-full flex justify-center mb-10">
          <img 
            src="https://images.unsplash.com/photo-1542382103-ba82ea794dc2?auto=format&fit=crop&w=1200&q=80" 
            alt="Map Outside View (Compressed as WebP)" 
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
                center: new (window as any).kakao.maps.LatLng(36.108502, 128.423984),
                level: 3
              };
              const map = new (window as any).kakao.maps.Map(container, options);
              const markerPosition  = new (window as any).kakao.maps.LatLng(36.108502, 128.423984); 
              const marker = new (window as any).kakao.maps.Marker({
                  position: markerPosition
              });
              marker.setMap(map);
            });
          }} 
        />

        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">상세 주소 및 정보</h3>
        <ul className="space-y-3 text-[15px] text-gray-700 bg-gray-50 p-6 rounded-lg mb-8 list-none">
          <li>📍 <strong>도로명 주소:</strong> 경북 구미시 인동남길78, 2층 리움부동산 (여기와방)</li>
          <li>📞 <strong>고객센터:</strong> 010-2373-9378</li>
          <li>🚗 <strong>주차 정보:</strong> 건물 뒷편 리움부동산 전용 주차장 무료 이용 가능</li>
          <li>⏰ <strong>영업 시간:</strong> 평일 09:00 ~ 19:00 / 토요일 10:00 ~ 15:00 (일요일 휴무)</li>
        </ul>

      </div>
    </div>
  );
}
