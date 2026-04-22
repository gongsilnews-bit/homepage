export default function Template01AboutPage() {
  return (
    <div className="max-w-[960px] mx-auto px-4 py-16">
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-5xl font-black text-dark mb-4">회사소개</h1>
        <p className="text-gray-medium text-[15px]">빌드온 상업용 전문 부동산 중개법인입니다.</p>
      </div>

      <div className="bg-white border border-gray-border rounded-xl p-8 md:p-12 shadow-sm text-dark prose prose-lg max-w-none">
        
        <div className="w-full flex justify-center mb-10">
          <img 
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80" 
            alt="Office Background (Compressed as WebP)" 
            className="rounded-xl w-full max-h-[500px] object-cover shadow border border-gray-100"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4 text-gold">비즈니스 성공을 위한 최적의 파트너</h2>
        <p className="mb-6 leading-relaxed text-[16px] text-gray-700">
          안녕하십니까? 빌드온 중개사무소에 방문해주셔서 진심으로 감사드립니다.<br/><br/>
          저희 빌드온은 변화하는 시장 환경 속에서 정확한 데이터 분석과 깊이 있는 전문성을 바탕으로 고객 한 분 한 분께 맞춤형 솔루션을 제공하고 있습니다. 상가, 사무실, 공장 공간의 모든 영역에서 검증된 네트워크를 제공합니다.
        </p>

        <div className="w-full mb-10 mt-10 rounded-xl overflow-hidden shadow-lg border border-gray-200">
          <div className="relative pb-[56.25%] h-0">
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
          <div className="bg-gray-50 px-4 py-3 border-t border-gray-200 text-[13px] text-gray-500 text-center">
            [에디터 동영상 첨부 기능 테스트] 빌드온 유튜브 소개 영상
          </div>
        </div>

        <p className="mb-8 leading-relaxed text-[16px] text-gray-700">
          고객의 자산 가치를 극대화하는 강력한 도구가 될 것입니다.<br/>
          항상 낮은 자세로 고객의 목소리에 귀 기울이며 함께 성장해 나가는 빌드온이 되겠습니다.
        </p>

        <div className="text-right mt-16 pt-8 border-t border-gray-100">
          <p className="text-gray-900 text-lg font-bold">빌드온부동산중개법인 대표이사 <span className="text-gold ml-2">남 웅 태</span></p>
        </div>

      </div>
    </div>
  );
}
