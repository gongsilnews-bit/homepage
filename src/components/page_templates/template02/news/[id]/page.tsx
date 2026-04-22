'use client';

import React from 'react';
import Link from 'next/link';

export default function Template02NewsDetailPage() {
  return (
    <div className="max-w-[1000px] mx-auto px-4 py-16">
      
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Main Content Areas */}
        <div className="flex-grow bg-white rounded-3xl border border-gray-border shadow-sm p-6 md:p-10">
          
          <div className="mb-8 font-pretendard border-b border-gray-100 pb-6">
            <span className="bg-teal/10 text-teal px-3 py-1 rounded-full text-[13px] font-bold mb-4 inline-block">원룸 꿀팁</span>
            <h1 className="text-2xl md:text-3xl font-bold text-dark leading-snug mb-4">
              원룸·투룸 전세사기 안 당하는 법. "이것만은 꼭 확인하세요!"
            </h1>
            <div className="flex items-center text-[13px] text-gray-medium gap-3">
              <span>여기와방 에디터</span>
              <span className="w-1 h-1 rounded-full bg-gray-300"></span>
              <span>2026.04.20</span>
              <span className="w-1 h-1 rounded-full bg-gray-300"></span>
              <span>조회 405</span>
            </div>
          </div>

          <div className="prose max-w-none text-[15px] text-gray-700 leading-loose">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200" 
              alt="계약서 작성" 
              className="w-full rounded-2xl mb-8"
            />
            
            <p>보증금이 가장 큰 자산인 청년층에게 전세 보증금을 돌려받지 못하는 상황은 상상조차 하기 싫은 악몽입니다. 최근 전국적으로 빌라, 다가구 주택을 중심으로 전세사기 피해 사례가 늘고 있어 각별한 주의가 필요합니다.</p>
            
            <h3 className="text-lg font-bold text-dark mt-8 mb-3 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-teal text-white flex items-center justify-center text-xs">1</span> 
              등기부등본 확인은 선택이 아닌 필수!
            </h3>
            <p>계약 전 대법원 인터넷 등기소에서 등기부등본 열람은 필수입니다. 갑구에서는 진짜 소유자가 누구인지, 을구에서는 선순위 근저당권(집주인이 집을 담보로 빌린 돈)이 얼마나 있는지 꼼꼼하게 따져봐야 합니다. 건물의 시세 대비 대출금이 너무 많다면 위험 신호입니다.</p>
            
            <h3 className="text-lg font-bold text-dark mt-8 mb-3 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-teal text-white flex items-center justify-center text-xs">2</span> 
              전세보증보험 가입 여부 체크
            </h3>
            <p>계약을 결심했다면 HUG(주택도시보증공사)의 전세보증금반환보증 보험에 가입이 가능한 매물인지 임대인과 공인중개사에게 반드시 확인하세요. 특약 사항에 '전세보증보험 가입 불가 시 계약은 무효로 하고 계약금은 전액 반환한다'는 문구를 넣는 것이 안전합니다.</p>

            <div className="mt-8 bg-teal/5 p-6 rounded-2xl border border-teal/20 text-center">
              <p className="font-bold text-teal mb-1">여기와방은 안전한 매물만 소개합니다</p>
              <p className="text-sm">믿을 수 있는 공인중개사와 함께 안전한 보금자리를 찾아보세요!</p>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <Link href="/news" className="border border-gray-300 text-gray-600 px-8 py-3 rounded-full hover:border-teal hover:text-teal font-bold transition-colors">
              목록으로 돌아가기
            </Link>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full md:w-[280px] shrink-0 sticky top-24 self-start space-y-6">
          <div className="bg-white rounded-2xl border border-gray-border p-6 shadow-sm">
            <h3 className="font-bold text-dark mb-4 border-b border-gray-100 pb-3">추천 소식</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="flex gap-3 group">
                  <span className="text-[13px] text-gray-700 font-medium group-hover:text-teal transition-colors line-clamp-2 leading-snug">
                    내 자취방 인테리어 가이드: 다이소 템으로 5만원에 끝내기
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex gap-3 group">
                  <span className="text-[13px] text-gray-700 font-medium group-hover:text-teal transition-colors line-clamp-2 leading-snug">
                    구미 원룸촌, 대기업 이전에 따른 공실률 변화 분석
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="bg-dark text-white rounded-2xl p-6 text-center cursor-pointer hover:bg-black transition-colors shadow-sm">
            <p className="text-sm opacity-80 mb-1">원하는조건 매물 찾기</p>
            <p className="font-bold text-lg text-teal">무료 상담 신청하기 👉</p>
          </div>
        </div>
      </div>
    </div>
  );
}
