export default function Template02AboutPage() {
  return (
    <div className="max-w-[960px] mx-auto px-4 py-16">
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-5xl font-black text-dark mb-4">회사소개</h1>
        <p className="text-gray-medium text-[15px]">여기와방 원룸전문 부동산 중개법인입니다.</p>
      </div>

      {/* WYSIWYG Editor Content Container (Mockup) */}
      <div className="bg-white border border-gray-border rounded-xl p-8 md:p-12 shadow-sm text-dark prose prose-lg max-w-none">
        
        {/* Dummy image matching WYSIWYG output (representing WebP upload) */}
        <div className="w-full flex justify-center mb-10">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80" 
            alt="Office Interior (Compressed as WebP)" 
            className="rounded-xl w-full max-h-[500px] object-cover shadow border border-gray-100"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4 text-teal">최상의 주거 환경을 제공하는 전문가 그룹</h2>
        <p className="mb-6 leading-relaxed text-[16px] text-gray-700">
          안녕하십니까? 여기와방 중개사무소에 방문해주셔서 진심으로 감사드립니다.<br/><br/>
          저희 여기와방은 다년간 축적된 구미 지역 원룸, 투룸, 미니투룸 부동산 데이터를 바탕으로 고객님께서 원하시는 최적의 보금자리를 가장 빠르고 정확하게 매칭해드리고 있습니다. 단순한 중개를 넘어, 입주 후 발생하는 다양한 생활 인프라 문제까지 끝까지 책임지는 <strong>토탈 케어 서비스</strong>를 제공합니다.
        </p>

        {/* Dummy Video Embed (representing YouTube iframe embed per rules) */}
        <div className="w-full mb-10 mt-10 rounded-xl overflow-hidden shadow-lg border border-gray-200">
          {/* 16:9 Aspect Ratio Container */}
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
            [에디터 동영상 첨부 기능 테스트] 유튜브 임베드 영상
          </div>
        </div>

        <p className="mb-8 leading-relaxed text-[16px] text-gray-700">
          항상 정직하고 투명한 운영을 통해 고객님께 확신을 드리는 중개법인이 되겠습니다.<br/>
          저희의 핵심 가치는 <strong>신뢰(Trust)와 전문성(Expertise)</strong>입니다. 한 치의 거짓 없이 허위매물 제로(Zero)를 달성해나가며, 지역 사회와 함께 성장하겠습니다.
        </p>

        <div className="text-right mt-16 pt-8 border-t border-gray-100">
          <p className="text-gray-900 text-lg font-bold">리움7공인중개사사무소 대표사원 <span className="text-teal ml-2">유 다 혜</span></p>
        </div>

      </div>
    </div>
  );
}

