import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HOT_ARTICLES = [
  "‘나도 에어비앤비 해볼까?’... 오피스텔·하숙권 덜컥 계약했다간 ‘전과자’ 될 수도",
  "삼성전자, 성과급 갈등에 ‘총파업’ 전운...생산 차질 우려 고조",
  "작년 공인중개사 신규 개업 1998년 IMF 외환위기 이후 최소",
  "관악구 대단지 관악드림타운 네이버 전세 매물 0건?",
  "“같은 서울인데…” 광명동 3만명·상계동 222명 등장 내놨다"
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function NewsDetailPage({ params }: { params: any }) {
  // In a real app, you would fetch data using params.id
  const articleId = params?.id || '101';

  return (
    <div className="min-h-screen bg-white flex flex-col font-pretendard">
      <Header />

      <main className="flex-grow w-full max-w-[1200px] mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Left Column: Article Content */}
          <div className="lg:w-[70%]">
            
            <article>
              {/* Category Breadcrumbs */}
              <div className="text-[14px] text-blue-600 font-medium mb-3">
                뉴스/칼럼 &gt; 부동산·주식·재테크
              </div>

              {/* Title */}
              <h1 className="text-[26px] md:text-[32px] font-bold text-gray-900 leading-snug mb-6 tracking-tight">
                [공실뉴스] 20일부터 2개월간 전국 700여 개소 국토교통 집중안전점검 실시
              </h1>

              {/* Meta Data Box */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-y border-gray-200 py-3 mb-8 gap-4">
                <div className="text-[13px] text-gray-500 flex items-center gap-2 flex-wrap">
                  <span className="font-bold text-gray-800">빌드온 중개법인 기자</span>
                  <span className="inline-block w-0.5 h-3 bg-gray-300"></span>
                  <span>입력 2026.04.20 22:59</span>
                  <span className="inline-block w-0.5 h-3 bg-gray-300"></span>
                  <span>수정 2026.04.20 13:59</span>
                </div>
                
                {/* Social Share Mock */}
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#3b5998] text-white flex items-center justify-center text-[12px] cursor-pointer">F</div>
                  <div className="w-8 h-8 rounded-full bg-[#00acee] text-white flex items-center justify-center text-[12px] cursor-pointer">T</div>
                  <div className="w-8 h-8 rounded-full bg-[#00c73c] text-white flex items-center justify-center text-[12px] cursor-pointer">N</div>
                  <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center cursor-pointer">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                  </div>
                </div>
              </div>

              {/* Content Body */}
              <div className="text-[16px] text-gray-800 leading-loose">
                
                {/* Summary Box */}
                <div className="bg-gray-50 p-5 rounded border border-gray-200 mb-8">
                  <p className="font-bold text-gray-900 mb-1">■ 기사 요약</p>
                  <ul className="list-disc list-inside text-gray-700 text-[15px] space-y-1">
                    <li>김이탁 제1차관 단장으로 도로·철도·공항 등 7개 분야 1,323명 점검반 전면 기동</li>
                    <li>지표투과레이더(GPR) 등 최첨단 장비 투입해 노후 침식 시설물 정밀 진단</li>
                    <li>안전 사각지대 해소 및 보수·보강 조치로 대규모 재난 사고 사전 예방</li>
                  </ul>
                </div>

                {/* Main Article Text */}
                <p className="mb-6">
                  국토교통부(장관 박상우)는 이달 20일부터 2개월간 도로, 철도, 공항 등 소관 인프라 시설 700여 개소에 대해 '국토교통 집중안전점검'을 실시한다고 밝혔다.
                </p>
                
                <figure className="my-8">
                  <img 
                    src="https://images.unsplash.com/photo-1541888085-ae234ff3fe43?auto=format&fit=crop&w=800&q=80" 
                    alt="안전점검 실시 이미지" 
                    className="w-full rounded"
                  />
                  <figcaption className="text-center text-[13px] text-gray-500 mt-2">
                    ▲ 최첨단 드론 장비를 투입하여 교량 하부의 노후 시설물을 면밀히 점검하고 있다.
                  </figcaption>
                </figure>

                 <p className="mb-6">
                  이번 집중안전점검에는 김이탁 제1차관을 단장으로 하여 7개 분야별 1,323명의 대규모 점검반이 전면 투입된다. 특히 그간 접근이 어려워 육안 확인이 불가능했던 안전 사각지대 시설물에 대해서는 드론과 지표투과레이더(GPR) 등 첨단 스마트 장비가 대거 투입된다.
                </p>

                <p className="mb-6">
                  점검 결과 경미한 안전 위험 요소는 현장에서 즉시 시정 조치하며, 노후화가 심각하거나 구조적인 결함이 우려되는 시설물에 대해서는 신속한 보수·보강 작업과 함께 지속적인 모니터링 체계를 가동할 방침이다. 이를 통해 예측 불가능한 대규모 재난 및 안전 사고를 근본적으로 차단하겠다는 계획이다.
                </p>

              </div>
            </article>

            <div className="border-t-2 border-gray-900 mt-12 pt-6">
              <a href="/news" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 text-[14px] font-bold rounded transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
                목록으로 돌아가기
              </a>
            </div>

          </div>

          {/* Right Column: Sidebar (Shared with List Page) */}
          <aside className="lg:w-[30%]">
            <div className="border border-red-500 rounded-sm p-5 sticky top-24 shadow-sm bg-white rounded-tl-xl rounded-br-xl">
              <h3 className="text-[17px] font-bold text-gray-900 border-b border-gray-200 pb-3 mb-4 tracking-tight">
                전체뉴스 많이 본 뉴스
              </h3>
              <ul className="flex flex-col gap-4">
                {HOT_ARTICLES.map((title, index) => (
                  <li key={index} className="flex gap-3 group cursor-pointer">
                    <span className="font-extrabold text-[15px] text-red-600 italic shrink-0 w-4">{index + 1}</span>
                    <p className="text-[14px] text-gray-800 leading-tight group-hover:underline decoration-gray-400 underline-offset-2">
                      {title}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

        </div>
      </main>

      <Footer />
    </div>
  );
}
