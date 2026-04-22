'use client';

import { useState } from 'react';
import { FiSend, FiHome, FiSearch } from 'react-icons/fi';

export default function Template02RequestPage() {
  const [activeTab, setActiveTab] = useState<'구해요' | '내놔요'>('구해요');

  return (
    <div className="max-w-[800px] mx-auto px-4 py-16">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-dark mb-2">매물 의뢰하기</h1>
        <p className="text-gray-medium text-[14px]">원하시는 조건을 남겨주시거나 소중한 매물을 의뢰하시면 빠르게 연결해 드립니다.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-border overflow-hidden">
        
        {/* Tabs */}
        <div className="flex border-b border-gray-border">
          <button 
            onClick={() => setActiveTab('구해요')}
            className={`flex-1 py-4 text-[15px] font-bold flex items-center justify-center gap-2 transition-colors ${activeTab === '구해요' ? 'bg-teal text-white' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
          >
            <FiSearch size={18} /> 매물 구해요
          </button>
          <button 
            onClick={() => setActiveTab('내놔요')}
            className={`flex-1 py-4 text-[15px] font-bold flex items-center justify-center gap-2 transition-colors ${activeTab === '내놔요' ? 'bg-dark text-white' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
          >
            <FiHome size={18} /> 매물 내놔요
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-10">
          
          {/* 탭 1: 매물 구해요 */}
          {activeTab === '구해요' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-[13px] font-semibold text-dark mb-1.5 block">이름 <span className="text-coral">*</span></label>
                  <input type="text" placeholder="이름을 입력해주세요" className="w-full border border-gray-border rounded-lg px-4 py-3 text-[14px] outline-none focus:border-teal transition-colors" />
                </div>
                <div>
                  <label className="text-[13px] font-semibold text-dark mb-1.5 block">연락처 <span className="text-coral">*</span></label>
                  <input type="text" placeholder="010-0000-0000" className="w-full border border-gray-border rounded-lg px-4 py-3 text-[14px] outline-none focus:border-teal transition-colors" />
                </div>
              </div>
              
              <div>
                <label className="text-[13px] font-semibold text-dark mb-1.5 block">희망 매물 유형 <span className="text-coral">*</span></label>
                <div className="flex flex-wrap gap-2">
                  {['원룸', '미투', '투룸', '쓰리룸 이상', '상가'].map((type) => (
                    <button key={type} className="px-4 py-2 rounded-full text-[13px] border border-gray-border text-gray-medium hover:border-teal hover:text-teal transition-colors">{type}</button>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-[13px] font-semibold text-dark mb-1.5 block">희망 지역</label>
                  <input type="text" placeholder="예: 구미시 인동, 진평동" className="w-full border border-gray-border rounded-lg px-4 py-3 text-[14px] outline-none focus:border-teal transition-colors" />
                </div>
                <div>
                  <label className="text-[13px] font-semibold text-dark mb-1.5 block">예산 범위</label>
                  <input type="text" placeholder="예: 보증금 500만 / 월세 30만" className="w-full border border-gray-border rounded-lg px-4 py-3 text-[14px] outline-none focus:border-teal transition-colors" />
                </div>
              </div>
              
              <div>
                <label className="text-[13px] font-semibold text-dark mb-1.5 block">상세 요청사항</label>
                <textarea rows={5} placeholder="원하시는 조건이나 요청사항을 자유롭게 작성해 주세요." className="w-full border border-gray-border rounded-lg px-4 py-3 text-[14px] outline-none focus:border-teal transition-colors resize-none" />
              </div>
              
              <div className="flex items-center gap-2 text-[12px] text-gray-medium">
                <input type="checkbox" className="rounded" defaultChecked />
                <span>개인정보 수집·이용에 동의합니다.</span>
              </div>
              
              <button className="w-full flex items-center justify-center gap-2 text-white font-bold py-4 rounded-xl transition-colors text-[16px]" style={{ background: 'linear-gradient(135deg, #2ECEC2, #1DB5A9)' }}>
                <FiSend size={18} />
                구해요 매물 의뢰 접수
              </button>
            </div>
          )}

          {/* 탭 2: 매물 내놔요 */}
          {activeTab === '내놔요' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-[13px] font-semibold text-dark mb-1.5 block">의뢰인 이름 <span className="text-coral">*</span></label>
                  <input type="text" placeholder="홍길동" className="w-full border border-gray-border rounded-lg px-4 py-3 text-[14px] outline-none focus:border-dark transition-colors" />
                </div>
                <div>
                  <label className="text-[13px] font-semibold text-dark mb-1.5 block">연락처 <span className="text-coral">*</span></label>
                  <input type="text" placeholder="010-0000-0000" className="w-full border border-gray-border rounded-lg px-4 py-3 text-[14px] outline-none focus:border-dark transition-colors" />
                </div>
              </div>

              <div>
                <label className="text-[13px] font-semibold text-dark mb-1.5 block">물건 주소 <span className="text-coral">*</span></label>
                <div className="flex gap-2 mb-2">
                  <input type="text" className="flex-1 bg-gray-50 border border-gray-border rounded-lg px-4 py-3 text-[14px]" placeholder="우편번호 검색" readOnly />
                  <button type="button" className="bg-dark text-white px-6 py-3 rounded-lg font-bold text-[13px] hover:bg-black">주소 찾기</button>
                </div>
                <input type="text" className="w-full border border-gray-border rounded-lg px-4 py-3 outline-none focus:border-dark text-[14px]" placeholder="상세 주소 및 호수" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-[13px] font-semibold text-dark mb-1.5 block">희망 거래 유형</label>
                  <select className="w-full border border-gray-border rounded-lg px-4 py-3 text-[14px] outline-none focus:border-dark bg-white">
                    <option>매매</option>
                    <option>전세</option>
                    <option>월세</option>
                    <option>단기</option>
                  </select>
                </div>
                <div>
                  <label className="text-[13px] font-semibold text-dark mb-1.5 block">물건 희망 금액 <span className="text-coral">*</span></label>
                  <input type="text" placeholder="예: 보증금 5,000 / 월세 30" className="w-full border border-gray-border rounded-lg px-4 py-3 text-[14px] outline-none focus:border-dark transition-colors" />
                </div>
              </div>

              <div>
                <label className="text-[13px] font-semibold text-dark mb-1.5 block">기타 특징 및 특이사항</label>
                <textarea rows={5} placeholder="내부 특징, 옵션 사항 등을 자유롭게 작성해 주세요." className="w-full border border-gray-border rounded-lg px-4 py-3 text-[14px] outline-none focus:border-dark transition-colors resize-none" />
              </div>
              
              <div className="flex items-center gap-2 text-[12px] text-gray-medium">
                <input type="checkbox" className="rounded" defaultChecked />
                <span>개인정보 수집·이용에 동의합니다.</span>
              </div>
              
              <button className="w-full flex items-center justify-center gap-2 bg-dark hover:bg-black text-white font-bold py-4 rounded-xl transition-colors text-[16px]">
                <FiSend size={18} />
                내놔요 매물 의뢰 접수
              </button>
            </div>
          )}

        </div>
      </div>
      
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
