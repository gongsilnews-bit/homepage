'use client';

import React from 'react';
import Link from 'next/link';

// 더미 데이터
const dummyArticles = [
  { id: '1', title: '강남구 오피스 공실률 3분기 연속 하락세... "우량 매물 품귀 현상"', desc: '최근 강남 주요 권역의 프라임 오피스 공실률이 연일 최저치를 경신하고 있습니다. 전문가들은 기업들의 거점 오피스 수요가 늘어남에 따라...', date: '2026.04.22 10:30', category: '부동산 동향', views: 124 },
  { id: '2', title: '스타트업을 위한 공유오피스 vs 지식산업센터, 정답은?', desc: '초기 자본이 부족한 스타트업 입장에서 최적의 사무공간을 찾는 것은 언제나 핵심 과제입니다. 공유오피스의 유연성과 지식산업센터의 독립성을 비교분석해 보았습니다.', date: '2026.04.20 14:15', category: '전문 칼럼', views: 89, hasImage: true },
  { id: '3', title: '테헤란로 이면도로 꼬마빌딩 거래 활발, 자산가들 시선 쏠리는 이유', desc: '대로변 대형 빌딩의 수익률이 정체되면서 이면도로의 50억~100억대 중소형 빌딩으로 투자자들의 발길이 이어지고 있습니다...', date: '2026.04.18 09:00', category: '투자 리포트', views: 245, hasImage: true },
];

export default function Template01NewsPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-16">
      
      {/* Page Header */}
      <div className="border-b-[3px] border-dark pb-4 mb-8">
        <h1 className="text-3xl font-bold text-dark flex items-center gap-2">
          <span className="w-1.5 h-8 bg-gold inline-block"></span>
          부동산 뉴스 및 칼럼
        </h1>
        <p className="text-gray-600 mt-2 ml-4">빌드온 중개법인이 전하는 핵심 부동산 정보</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        
        {/* Main List Area */}
        <div className="flex-grow">
          <div className="space-y-6">
            {dummyArticles.map((article) => (
              <Link key={article.id} href={`news/${article.id}`} className="block group">
                <article className="flex gap-6 p-6 border border-gray-200 rounded-lg hover:border-gold hover:shadow-md transition-all bg-white">
                  <div className="flex-grow flex flex-col justify-between">
                    <div>
                      <h2 className="text-[20px] font-bold text-dark mb-2 group-hover:text-gold transition-colors line-clamp-1">
                        {article.title}
                      </h2>
                      <p className="text-gray-600 text-[15px] leading-relaxed mb-4 line-clamp-2">
                        {article.desc}
                      </p>
                    </div>
                    <div className="text-[13px] text-gray-500 flex items-center gap-3">
                      <span className="text-gold font-bold">[{article.category}]</span>
                      <span>{article.date}</span>
                      <span>·</span>
                      <span>조회수 {article.views}</span>
                    </div>
                  </div>
                  
                  {article.hasImage && (
                    <div className="w-[160px] h-[120px] bg-gray-100 shrink-0 rounded overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400" 
                        alt="Article Thumbnail" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                      />
                    </div>
                  )}
                </article>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center gap-2">
            <button className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center text-gray-400 hover:border-gold hover:text-gold transition-colors">{'<'}</button>
            <button className="w-10 h-10 bg-dark text-white rounded font-bold">1</button>
            <button className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center text-gray-600 hover:border-gold hover:text-gold transition-colors">2</button>
            <button className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center text-gray-600 hover:border-gold hover:text-gold transition-colors">3</button>
            <button className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center text-gray-400 hover:border-gold hover:text-gold transition-colors">{'>'}</button>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-full lg:w-[320px] shrink-0 space-y-8">
          
          <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
            <h3 className="font-bold text-[16px] text-dark mb-4 pb-2 border-b-2 border-gold inline-block">많이 본 뉴스</h3>
            <ul className="space-y-4">
              {dummyArticles.slice(0).reverse().map((item, idx) => (
                <li key={idx}>
                  <Link href={`news/${item.id}`} className="flex gap-3 group">
                    <span className="text-gold font-bold text-[18px] leading-none mt-1">{idx + 1}</span>
                    <span className="text-[14px] text-gray-800 group-hover:text-gold leading-tight line-clamp-2 transition-colors">
                      {item.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Banner Placeholder */}
          <div className="w-full aspect-[4/3] bg-dark text-white flex items-center justify-center rounded-lg flex-col gap-2">
            <span className="text-gold font-bold text-lg">프리미엄 부동산 리포트</span>
            <span className="text-xs opacity-70">무료 구독 이벤트 진행 중</span>
          </div>

        </div>
      </div>
    </div>
  );
}
