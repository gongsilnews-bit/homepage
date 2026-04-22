'use client';

import { useState } from 'react';
import { FiCheckCircle, FiHome, FiSearch } from 'react-icons/fi';

export default function Template01RequestPage() {
  const [activeTab, setActiveTab] = useState<'구해요' | '내놔요'>('구해요');

  return (
    <div className="max-w-[1000px] mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-3xl md:text-5xl font-black text-dark mb-4">매물 의뢰하기</h1>
        <p className="text-gray-medium text-[15px]">고객님의 조건에 딱 맞는 최적의 공간을 제안해 드리거나 신속하게 거래를 성사시켜 드립니다.</p>
      </div>

      <div className="bg-white border border-gray-border rounded-xl shadow-sm text-dark overflow-hidden">
        
        {/* Tabs */}
        <div className="flex border-b border-gray-border overflow-hidden">
          <button 
            onClick={() => setActiveTab('구해요')}
            className={`flex-1 py-5 text-lg font-bold flex items-center justify-center gap-2 transition-colors ${activeTab === '구해요' ? 'bg-gold text-white' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
          >
            <FiSearch size={22} /> 매물 구해요
          </button>
          <button 
            onClick={() => setActiveTab('내놔요')}
            className={`flex-1 py-5 text-lg font-bold flex items-center justify-center gap-2 transition-colors ${activeTab === '내놔요' ? 'bg-dark text-white' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
          >
            <FiHome size={22} /> 매물 내놔요
          </button>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12">
          
          {/* 탭 1: 매물 구해요 */}
          {activeTab === '구해요' && (
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="border-l-4 border-gold pl-4 mb-8">
                <h2 className="text-xl font-bold text-dark mb-1">매물 찾아주세요!</h2>
                <p className="text-sm text-gray-medium">원하시는 예산과 조건을 남겨주시면 빌드온 데이터베이스와 네트워크를 통해 최적의 매물을 찾아드립니다.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">당사자(담당자) 성함 <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-gold text-[15px]" placeholder="홍길동" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">연락처 <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-gold text-[15px]" placeholder="010-1234-5678" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">희망 지역</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-gold text-[15px]" placeholder="예) 강남구 역삼동, 선릉역 인근 5분 거리 등" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">희망 평수 (전용면적)</label>
                  <div className="relative">
                    <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-gold text-[15px]" placeholder="예) 50" />
                    <span className="absolute right-4 top-3 text-gray-400">평 이상</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">가용 예산 (단위: 만원)</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-gold text-[15px]" placeholder="예) 보증금 5,000 / 월세 300" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">필수 조건 및 기타 문의사항</label>
                <textarea className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-gold text-[15px] min-h-[120px]" placeholder="예) 룸 3개, 개별 냉난방, 주차 2대 필수, 빠른 입주 가능 등"></textarea>
              </div>

              <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                  <input type="checkbox" id="agree1" className="rounded text-gold focus:ring-gold" defaultChecked />
                  <label htmlFor="agree1" className="cursor-pointer">개인정보 수집 및 이용에 동의합니다.</label>
                </div>
                <button className="bg-gold hover:bg-yellow-600 text-white font-bold py-4 px-10 rounded-lg shadow-sm transition-colors flex items-center gap-2">
                  <FiCheckCircle /> 의뢰 접수하기
                </button>
              </div>
            </form>
          )}

          {/* 탭 2: 매물 내놔요 */}
          {activeTab === '내놔요' && (
            <form className="space-y-6 animate-fadeIn" onSubmit={(e) => e.preventDefault()}>
              <div className="border-l-4 border-dark pl-4 mb-8">
                <h2 className="text-xl font-bold text-dark mb-1">우리 매물 내놓습니다!</h2>
                <p className="text-sm text-gray-medium">소중한 자산의 거래를 신속하고 안전하게 성사시켜 드립니다. 기본 정보를 적어주세요.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">의뢰인 성함 <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-dark text-[15px]" placeholder="홍길동" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">연락처 <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-dark text-[15px]" placeholder="010-1234-5678" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">물건 주소 <span className="text-red-500">*</span></label>
                <div className="flex gap-2 mb-2">
                  <input type="text" className="flex-1 bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-[15px]" placeholder="우편번호 검색" readOnly />
                  <button type="button" className="bg-gray-800 text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-black">주소 찾기</button>
                </div>
                <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-dark text-[15px]" placeholder="상세 주소 (동/호수 포함)" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">희망 거래 유형</label>
                  <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-dark text-[15px] bg-white">
                    <option>매매</option>
                    <option>전세</option>
                    <option>월세</option>
                    <option>기타</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">물건 희망 금액 (단위: 만원) <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-dark text-[15px]" placeholder="예) 보증금 5,000 / 월세 300" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">기타 특징 및 특이사항</label>
                <textarea className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-dark text-[15px] min-h-[120px]" placeholder="예) 권리금 3천만원, 내부 인테리어 최상, 즉시 입주 가능 등"></textarea>
              </div>

              <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                  <input type="checkbox" id="agree2" className="rounded text-dark focus:ring-dark" defaultChecked />
                  <label htmlFor="agree2" className="cursor-pointer">개인정보 수집 및 이용에 동의합니다.</label>
                </div>
                <button className="bg-dark hover:bg-black text-white font-bold py-4 px-10 rounded-lg shadow-sm transition-colors flex items-center gap-2">
                  <FiCheckCircle /> 매물 접수하기
                </button>
              </div>
            </form>
          )}

        </div>
      </div>
      
      {/* CSS Animation Utility */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}} />
    </div>
  );
}
