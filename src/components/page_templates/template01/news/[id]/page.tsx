'use client';

import React from 'react';
import Link from 'next/link';
import { FiShare2, FiEye, FiClock } from 'react-icons/fi';

export default function Template01NewsDetailPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-16">
      
      <div className="flex flex-col lg:flex-row gap-10">
        
        {/* Main Content Area */}
        <div className="flex-grow">
          
          {/* Article Header */}
          <div className="border-b border-gray-200 pb-6 mb-8">
            <div className="text-gold font-bold text-[14px] mb-3">[전문 칼럼]</div>
            <h1 className="text-3xl md:text-4xl font-bold text-dark leading-tight mb-6">
              스타트업을 위한 공유오피스 vs 지식산업센터, 정답은?
            </h1>
            
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4 text-gray-500 text-[14px]">
                <span className="flex items-center gap-1.5"><FiClock /> 2026.04.20 14:15</span>
                <span>·</span>
                <span>작성자: 남웅태 대표</span>
                <span>·</span>
                <span className="flex items-center gap-1.5"><FiEye /> 89 읽음</span>
              </div>
              
              <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 rounded text-[13px] text-gray-600 hover:bg-gray-50 transition-colors">
                <FiShare2 /> 공유하기
              </button>
            </div>
          </div>

          {/* Article Body */}
          <article className="prose max-w-none text-gray-800 leading-loose text-[16px]">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
              alt="오피스 전경" 
              className="w-full rounded-lg mb-8"
            />
            
            <p>초기 자본이 부족한 스타트업 입장에서 최적의 사무공간을 찾는 것은 언제나 핵심 과제입니다. 최근 금리 인상과 투자 시장 위축으로 어느 때보다 고정비 절감의 중요성이 대두되면서, 공유오피스의 유연성과 지식산업센터의 독립성을 저울질하는 창업자들이 폭발적으로 늘고 있습니다.</p>
            
            <h3 className="text-xl font-bold text-dark mt-10 mb-4 border-l-4 border-gold pl-3">초기 비용과 유연성을 중시한다면: 공유오피스</h3>
            <p>공유오피스의 가장 큰 강점은 인테리어, 책상, 의자, 집기류 등 막대한 초기 인테리어 비용이 '0원'이라는 점입니다. 월 단위 계약이 자유로워 인원 확장에 맞춰 유동적으로 사무실 크기를 조정할 수 있으며, 라운지, 회의실, 커피머신 등의 공용 시설을 대기업 수준으로 누릴 수 있습니다.</p>
            
            <h3 className="text-xl font-bold text-dark mt-10 mb-4 border-l-4 border-gold pl-3">안정적인 성장과 대출 혜택을 노린다면: 지식산업센터</h3>
            <p>반면, 팀 규모가 10인 이상으로 넘어가고 비즈니스 모델이 어느 정도 안정화되었다면 지식산업센터(아파트형 공장) 입주 또는 분양이 훨씬 유리할 수 있습니다. 가장 큰 메리트는 '저금리 대출'과 '세제 혜택'입니다. 실입주 기업의 경우 최대 80% 이상의 담보대출을 받을 수 있으며 쾌적한 사옥을 마련할 수 있는 기반이 됩니다.</p>
            
            <p className="mt-8 text-gray-500 bg-gray-50 p-6 rounded-lg text-[14px]">
              * 본 칼럼은 빌드온 중개법인의 데이터를 기반으로 작성되었으며, 시장 상황에 따라 실제 조건은 변동될 수 있습니다.
            </p>
          </article>

          {/* Footer Actions */}
          <div className="mt-16 flex justify-between border-t border-gray-200 pt-8">
            <Link href="/news" className="px-6 py-3 bg-dark text-white font-bold rounded hover:bg-black transition-colors">
              목록으로
            </Link>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-full lg:w-[320px] shrink-0 space-y-8">
          <div className="border border-gray-200 rounded-lg p-6 bg-gray-50 sticky top-24">
            <h3 className="font-bold text-[16px] text-dark mb-4 pb-2 border-b-2 border-gold inline-block">인기 칼럼</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="flex gap-3 group">
                  <span className="text-gold font-bold text-[18px] leading-none mt-1">1</span>
                  <span className="text-[14px] text-gray-800 group-hover:text-gold leading-tight transition-colors">
                    상가 임대차보호법 핵심 총정리
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex gap-3 group">
                  <span className="text-gold font-bold text-[18px] leading-none mt-1">2</span>
                  <span className="text-[14px] text-gray-800 group-hover:text-gold leading-tight transition-colors">
                    GTX-A 개통이 가져올 상권 변화
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
