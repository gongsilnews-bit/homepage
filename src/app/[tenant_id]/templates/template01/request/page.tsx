'use client';

import React, { useState } from 'react';

export default function Template01RequestPage() {
  const [activeTab, setActiveTab] = useState<'rent' | 'lease'>('rent');

  return (
    <div className="w-full max-w-[1024px] mx-auto px-4 py-12 md:py-16">
      
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-8 mt-4 tracking-tight">임대·임차 의뢰</h1>

      {/* Tabs */}
      <div className="flex justify-center mb-10">
        <div className="flex w-full max-w-[500px]">
          <button
            onClick={() => setActiveTab('rent')}
            className={`flex-1 py-4 text-[16px] font-bold border-b-2 transition-colors ${
              activeTab === 'rent'
                ? 'border-gold text-gold'
                : 'border-gray-200 text-gray-400 hover:text-gray-600'
            }`}
          >
            임대 의뢰 (매물 내놓기)
          </button>
          <button
            onClick={() => setActiveTab('lease')}
            className={`flex-1 py-4 text-[16px] font-bold border-b-2 transition-colors ${
              activeTab === 'lease'
                ? 'border-gold text-gold'
                : 'border-gray-200 text-gray-400 hover:text-gray-600'
            }`}
          >
            임차 의뢰 (매물 구하기)
          </button>
        </div>
      </div>

      {/* Current Tab Description */}
      <div className="text-center mb-10">
        <p className="text-gray-600 text-[15px]">
          {activeTab === 'rent' 
            ? '보유하고 계신 상가 또는 사무실의 임대를 안전하고 신속하게 의뢰하실 수 있습니다.'
            : '단순한 중개를 넘어 비즈니스 성공을 위한 최적의 공간을 제안해 드립니다.'}
        </p>
      </div>

      {/* Form Container */}
      <div className="max-w-[800px] mx-auto">

        {activeTab === 'rent' && (
          <section className="mb-12 animate-fadeIn">
            <h2 className="text-[18px] font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-gold mr-1">*</span> 내놓으시는 물건 정보 (필수)
            </h2>
            <div className="border-t-2 border-gray-900">
              
              <div className="flex flex-col md:flex-row border-b border-gray-200">
                <div className="bg-gray-50 md:w-[180px] p-4 flex items-center shrink-0">
                  <label className="text-[14px] font-bold text-gray-700">의뢰인 성함 <span className="text-gold">*</span></label>
                </div>
                <div className="flex-1 p-4 bg-white">
                  <input type="text" placeholder="성함을 입력해주세요" className="w-full md:w-[320px] px-3 py-2 border border-gray-300 rounded text-[14px] focus:outline-none focus:border-gold" />
                </div>
              </div>

              <div className="flex flex-col md:flex-row border-b border-gray-200">
                <div className="bg-gray-50 md:w-[180px] p-4 flex items-center shrink-0">
                  <label className="text-[14px] font-bold text-gray-700">연락처 <span className="text-gold">*</span></label>
                </div>
                <div className="flex-1 p-4 bg-white">
                  <input type="text" placeholder="010-0000-0000" className="w-full md:w-[320px] px-3 py-2 border border-gray-300 rounded text-[14px] focus:outline-none focus:border-gold" />
                </div>
              </div>

              <div className="flex flex-col md:flex-row border-b border-gray-200">
                <div className="bg-gray-50 md:w-[180px] p-4 flex items-center shrink-0">
                  <label className="text-[14px] font-bold text-gray-700">물건 접수 주소 <span className="text-gold">*</span></label>
                </div>
                <div className="flex-1 p-4 bg-white flex flex-col gap-2">
                  <div className="flex gap-2">
                    <input type="text" placeholder="우편번호 찾기" className="flex-1 max-w-[200px] px-3 py-2 border border-gray-300 rounded bg-gray-50 text-[14px]" readOnly />
                    <button className="bg-gray-800 text-white px-4 py-2 text-[13px] font-bold rounded">주소검색</button>
                  </div>
                  <input type="text" placeholder="상세 주소 및 호수" className="w-full px-3 py-2 border border-gray-300 rounded text-[14px] focus:outline-none focus:border-gold" />
                </div>
              </div>

              <div className="flex flex-col md:flex-row border-b border-gray-200">
                <div className="bg-gray-50 md:w-[180px] p-4 flex items-center shrink-0">
                  <label className="text-[14px] font-bold text-gray-700">희망 물건 금액 <span className="text-gold">*</span></label>
                </div>
                <div className="flex-1 p-4 bg-white flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[14px] w-14">보증금</span>
                    <input type="text" placeholder="숫자만 입력" className="w-full max-w-[150px] px-3 py-2 border border-gray-300 rounded text-right text-[14px] focus:border-gold" />
                    <span className="text-[14px]">만원</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[14px] w-14">월세</span>
                    <input type="text" placeholder="숫자만 입력" className="w-full max-w-[150px] px-3 py-2 border border-gray-300 rounded text-right text-[14px] focus:border-gold" />
                    <span className="text-[14px]">만원</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row border-b border-gray-200">
                <div className="bg-gray-50 md:w-[180px] p-4 flex items-start pt-6 shrink-0">
                  <label className="text-[14px] font-bold text-gray-700">추가 설명문</label>
                </div>
                <div className="flex-1 p-4 bg-white">
                  <textarea 
                    placeholder="권리금 유무, 인테리어 특징 등 상세한 내용을 적어주시면 빠른 거래에 도움이 됩니다."
                    className="w-full min-h-[160px] p-3 border border-gray-300 rounded text-[14px] focus:outline-none focus:border-gold"
                  ></textarea>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'lease' && (
          <section className="mb-12 animate-fadeIn">
            <h2 className="text-[18px] font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-gold mr-1">*</span> 매물 찾는 조건 (필수)
            </h2>
            <div className="border-t-2 border-gray-900">
              
              <div className="flex flex-col md:flex-row border-b border-gray-200">
                <div className="bg-gray-50 md:w-[180px] p-4 flex items-center shrink-0">
                  <label className="text-[14px] font-bold text-gray-700">의뢰인 성함 <span className="text-gold">*</span></label>
                </div>
                <div className="flex-1 p-4 bg-white">
                  <input type="text" placeholder="성함을 입력해주세요" className="w-full md:w-[320px] px-3 py-2 border border-gray-300 rounded text-[14px] focus:outline-none focus:border-gold" />
                </div>
              </div>

              <div className="flex flex-col md:flex-row border-b border-gray-200">
                <div className="bg-gray-50 md:w-[180px] p-4 flex items-center shrink-0">
                  <label className="text-[14px] font-bold text-gray-700">연락처 <span className="text-gold">*</span></label>
                </div>
                <div className="flex-1 p-4 bg-white">
                  <input type="text" placeholder="010-0000-0000" className="w-full md:w-[320px] px-3 py-2 border border-gray-300 rounded text-[14px] focus:outline-none focus:border-gold" />
                </div>
              </div>

              <div className="flex flex-col md:flex-row border-b border-gray-200">
                <div className="bg-gray-50 md:w-[180px] p-4 flex items-center shrink-0">
                  <label className="text-[14px] font-bold text-gray-700">희망 지역 <span className="text-gold">*</span></label>
                </div>
                <div className="flex-1 p-4 bg-white">
                  <input type="text" placeholder="예) 강남역 인근 5분 거리, 판교 테크노밸리 등" className="w-full px-3 py-2 border border-gray-300 rounded text-[14px] focus:outline-none focus:border-gold" />
                </div>
              </div>

              <div className="flex flex-col md:flex-row border-b border-gray-200">
                <div className="bg-gray-50 md:w-[180px] p-4 flex items-center shrink-0">
                  <label className="text-[14px] font-bold text-gray-700">가용 예산 <span className="text-gold">*</span></label>
                </div>
                <div className="flex-1 p-4 bg-white flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[14px] w-14">보증금</span>
                    <input type="text" placeholder="숫자만 입력" className="w-full max-w-[150px] px-3 py-2 border border-gray-300 rounded text-right text-[14px] focus:border-gold" />
                    <span className="text-[14px]">만원</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[14px] w-14">월세</span>
                    <input type="text" placeholder="숫자만 입력" className="w-full max-w-[150px] px-3 py-2 border border-gray-300 rounded text-right text-[14px] focus:border-gold" />
                    <span className="text-[14px]">만원 (최대)</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row border-b border-gray-200">
                <div className="bg-gray-50 md:w-[180px] p-4 flex items-start pt-6 shrink-0">
                  <label className="text-[14px] font-bold text-gray-700">필수 조건 <span className="text-gold">*</span></label>
                </div>
                <div className="flex-1 p-4 bg-white">
                  <textarea 
                    placeholder="면적, 주차 대수, 룸 개수, 기타 필수 인테리어 조건을 꼼꼼히 적어주세요."
                    className="w-full min-h-[160px] p-3 border border-gray-300 rounded text-[14px] focus:outline-none focus:border-gold"
                  ></textarea>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Privacy Policy */}
        <section className="mb-12">
          <h2 className="text-[16px] font-bold text-gray-900 mb-3">개인정보 보호 정책</h2>
          <div className="border border-gray-200 p-4 h-[120px] overflow-y-auto w-full text-[13px] text-gray-600 leading-relaxed bg-gray-50 mb-4 rounded-sm">
            <p className="font-bold mb-1">■ 개인정보의 수집 및 이용 목적</p>
            <p className="mb-2">본 사이트는 의뢰 상담 및 맞춤형 매물 추천을 위해 최소한의 개인정보를 수집하고 있습니다. 수집된 정보는 의뢰 처리 외의 목적으로는 사용되지 않습니다.</p>
            <p className="font-bold mb-1">■ 수집하는 개인정보 항목</p>
            <p className="mb-2">필수항목: 성함, 연락처, 매물조건(주소/금액 등)</p>
            <p className="font-bold mb-1">■ 개인정보의 보유 및 이용기간</p>
            <p>원칙적으로, 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.</p>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 cursor-pointer text-[14px] text-gray-800">
              <input type="checkbox" className="w-4 h-4 accent-gold cursor-pointer" defaultChecked />
              <span>개인정보 수집 및 이용에 동의합니다. (필수)</span>
            </label>
          </div>
        </section>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button className="w-[300px] bg-gold text-white text-[16px] font-bold py-4 rounded hover:bg-[#d59800] hover:shadow-lg transition-all">
            {activeTab === 'rent' ? '매물 내놓기' : '매물 찾아주세요'}
          </button>
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
