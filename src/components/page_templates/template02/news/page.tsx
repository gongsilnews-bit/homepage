'use client';

import React from 'react';
import Link from 'next/link';

const dummyArticles = [
  { id: '1', title: '구미 원룸촌, 대기업 이전에 따른 공실률 변화 분석', desc: '구미 국가산업단지 내 주요 대기업 라인 가동이 변경됨에 따라, 인동/진평 일대 원룸촌의 임대차 수요가 급격히 요동치고 있습니다.', date: '2026.04.22 10:30', category: '동네 소식', views: 882 },
  { id: '2', title: '원룸·투룸 전세사기 안 당하는 법. "이것만은 꼭 확인하세요!"', desc: '최근 전세사기로 인한 피해가 급증하는 가운데, 안전한 계약을 위해 등기부등본 확인법과 전세보증보험 가입 절차를 핵심만 정리했습니다.', date: '2026.04.20 14:15', category: '원룸 꿀팁', views: 405, hasImage: true },
  { id: '3', title: '내 자취방 인테리어 가이드: 다이소 템으로 5만원에 끝내기', desc: '칙칙했던 기본 옵션 원룸. 몇 가지 소품만으로 감성 우드톤 인테리어를 완성하는 꿀팁을 전수합니다.', date: '2026.04.18 09:00', category: '라이프', views: 320, hasImage: true },
];

export default function Template02NewsPage() {
  return (
    <div className="max-w-[1000px] mx-auto px-4 py-16">
      
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-dark tracking-tight">부동산 소식 & 꿀팁</h1>
        <p className="text-gray-medium mt-3 text-[15px]">여기와방에서 전해드리는 알짜배기 자취 & 부동산 정보</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Main List */}
        <div className="flex-grow">
          <div className="grid grid-cols-1 gap-6">
            {dummyArticles.map((article) => (
              <Link key={article.id} href={`/news02/${article.id}`} className="group block">
                <div className="bg-white rounded-2xl p-6 border border-gray-border shadow-sm hover:shadow-md hover:border-teal transition-all flex flex-col sm:flex-row gap-6">
                  
                  {article.hasImage && (
                    <div className="w-full sm:w-[180px] h-[120px] rounded-xl overflow-hidden shrink-0">
                      <img 
                        src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=400" 
                        alt="thumbnail" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                      />
                    </div>
                  )}
                  
                  <div className="flex-col flex justify-center">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-teal/10 text-teal px-2 py-0.5 rounded text-[12px] font-bold">{article.category}</span>
                      <span className="text-gray-400 text-[13px]">{article.date}</span>
                    </div>
                    <h2 className="text-[18px] font-bold text-dark group-hover:text-teal transition-colors mb-2 line-clamp-1">
                      {article.title}
                    </h2>
                    <p className="text-gray-500 text-[14px] leading-relaxed line-clamp-2">
                      {article.desc}
                    </p>
                  </div>

                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex justify-center gap-2">
            <button className="w-9 h-9 rounded-full border border-gray-border flex items-center justify-center text-gray-500 hover:border-teal hover:text-teal transition-colors">{'<'}</button>
            <button className="w-9 h-9 rounded-full bg-teal text-white font-bold flex items-center justify-center">1</button>
            <button className="w-9 h-9 rounded-full border border-gray-border flex items-center justify-center text-gray-600 hover:border-teal hover:text-teal transition-colors">2</button>
            <button className="w-9 h-9 rounded-full border border-gray-border flex items-center justify-center text-gray-500 hover:border-teal hover:text-teal transition-colors">{'>'}</button>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-full md:w-[300px] shrink-0">
          <div className="bg-white rounded-2xl border border-gray-border p-6 shadow-sm">
            <h3 className="font-bold text-dark mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal"></span>
              주간 인기 TOP
            </h3>
            <ul className="space-y-4">
              {dummyArticles.slice(0).reverse().map((item, idx) => (
                <li key={idx} className="flex gap-3 group">
                  <span className={`font-black text-[16px] mt-0.5 ${idx === 0 ? 'text-teal' : 'text-gray-300'}`}>{idx + 1}</span>
                  <Link href={`/news02/${item.id}`} className="text-[14px] text-gray-700 font-medium group-hover:text-teal transition-colors line-clamp-2 leading-snug">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  );
}
