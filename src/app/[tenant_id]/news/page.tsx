import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

// Mock Data
const TOP_ARTICLES = [
  {
    id: 1,
    title: "후와 '떡볶이 먹방' 황교익, 한국문화관광연구원장 임명",
    image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&w=400&q=80",
    link: "#"
  },
  {
    id: 2,
    title: "[KBO 초점] '안타 출발'에도 요지부동 한화 벤치... 6연패 속 잃어버린 '승리 의지'",
    image: "https://images.unsplash.com/photo-1508344928928-7165b67de128?auto=format&fit=crop&w=400&q=80",
    link: "#"
  },
  {
    id: 3,
    title: "“운전하다 벽 들이받고 싶었다”… 허술리송, 우울증 딛고 일어선 ‘인간 승리’",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=400&q=80",
    link: "#"
  }
];

const LIST_ARTICLES = [
  {
    id: 101,
    title: "[공실뉴스] 20일부터 2개월간 전국 700여 개소 국토교통 집중안전점검 실시",
    excerpt: "김이탁 제1차관 단장으로 도로·철도·공항 등 7개 분야 1,323명 점검반 전면 기동 토론, 지표투과레이더(GPR) 등 최첨단 장비 투입해 노후 침식 시설물 정밀 진단 안전 사각지대 해소 및 보수·보강 조치로 대규모 재난 사고 사전 예방",
    category: "뉴스/칼럼 > 부동산·주식·재테크",
    date: "2026.04.20 22:59",
    modified: "2026.04.20 13:59",
    author: "빌드온 중개법인"
  },
  {
    id: 102,
    title: "[공실뉴스] 정부, 'K-AI 시티' 속도 낸다... 민간 기업과 실증 규제 혁파 논의",
    excerpt: "국토부, 21일 'AI 시티 기업 간담회' 개최... 시범도시 특례 타격 지원 시사 기업의 목소리 직접 청취하고 전폭적인 법·제도적 지원 사격 AI 특화 생태계 조기 상용화로 부동산 시장 지형도 큰 폭 변화 예고",
    category: "뉴스/칼럼 > 부동산·주식·재테크",
    date: "2026.04.24 09:00",
    modified: "2026.04.20 13:35",
    author: "빌드온 중개법인"
  },
  {
    id: 103,
    title: "눈길을 끄는 분양/경매 트렌드: '규제 우회'와 '틈새 주거'의 부상",
    excerpt: "서울 강남 일대 규제 수도권 비서울 지역으로 눈 돌리는 투자자 고령화 시대, 실버타운과 주거용 오피스텔 등 틈새 주거 상품 주목 경매 시장 활발 속, 초보 투자자는 권리분석 유의 필수",
    category: "뉴스/칼럼 > 일반뉴스",
    date: "2026.04.18 10:15",
    modified: "",
    author: "빌드온 중개법인"
  }
];

const HOT_ARTICLES = [
  "‘나도 에어비앤비 해볼까?’... 오피스텔·하숙권 덜컥 계약했다간 ‘전과자’ 될 수도",
  "삼성전자, 성과급 갈등에 ‘총파업’ 전운...생산 차질 우려 고조",
  "작년 공인중개사 신규 개업 1998년 IMF 외환위기 이후 최소",
  "관악구 대단지 관악드림타운 네이버 전세 매물 0건?",
  "“같은 서울인데…” 광명동 3만명·상계동 222명 등장 내놨다"
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-pretendard">
      <Header />

      <main className="flex-grow w-full max-w-[1200px] mx-auto px-4 py-8">
        
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Left Column: Main News Section */}
          <div className="lg:w-[70%]">
            
            {/* Top 3 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {TOP_ARTICLES.map((article) => (
                <Link href={article.link} key={article.id} className="group block cursor-pointer">
                  <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden mb-3">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-bold text-[15px] text-gray-900 leading-snug line-clamp-2 group-hover:underline decoration-gold decoration-2 underline-offset-2">
                    {article.title}
                  </h3>
                </Link>
              ))}
            </div>

            {/* List Header */}
            <div className="flex items-center gap-2 border-b-2 border-gray-900 pb-3 mb-6">
              <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              <h2 className="text-[18px] font-bold text-gray-900 tracking-tight">전체뉴스</h2>
            </div>

            {/* Article List */}
            <div className="flex flex-col gap-8">
              {LIST_ARTICLES.map((article) => (
                <article key={article.id} className="pb-8 border-b border-gray-100 last:border-0 last:pb-0">
                  <Link href={`/news/${article.id}`} className="group block">
                    <h3 className="text-[20px] font-bold text-gray-900 mb-3 leading-snug group-hover:underline decoration-gold underline-offset-2">
                      {article.title}
                    </h3>
                  </Link>
                  <p className="text-[14px] text-gray-500 leading-relaxed mb-3 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-2 text-[12px] text-gray-400">
                    <span className="text-gold font-medium">[{article.category}]</span>
                    <span className="inline-block w-0.5 h-2.5 bg-gray-300"></span>
                    <span>{article.date} {article.modified && `(수정: ${article.modified})`}</span>
                    <span className="inline-block w-0.5 h-2.5 bg-gray-300"></span>
                    <span>{article.author}</span>
                  </div>
                </article>
              ))}
            </div>

          </div>

          {/* Right Column: Sidebar */}
          <aside className="lg:w-[30%]">
            
            <div className="border border-gold rounded-sm p-5 sticky top-24 rounded-tl-xl rounded-br-xl mt-1 lg:mt-0 shadow-sm bg-white">
              <h3 className="text-[17px] font-bold text-gray-900 border-b border-gray-200 pb-3 mb-4 tracking-tight">
                전체뉴스 많이 본 뉴스
              </h3>
              
              <ul className="flex flex-col gap-4">
                {HOT_ARTICLES.map((title, index) => (
                  <li key={index} className="flex gap-3 group cursor-pointer">
                    <span className="font-extrabold text-[15px] text-gold italic shrink-0 w-4">{index + 1}</span>
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
