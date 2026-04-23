'use client';

import React, { useState } from 'react';

import Header02 from '@/components/templates/template02/Header02';
import Footer02 from '@/components/templates/template02/Footer02';
export default function RequestPage() {
  const [activeTab, setActiveTab] = useState<'rent' | 'lease'>('rent');

  return (
    <div className="min-h-screen flex flex-col bg-white font-pretendard">
      <Header02 />

      <main className="flex-grow w-full max-w-[1024px] mx-auto px-4 py-12 md:py-16">
        
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8 mt-4 tracking-tight">임대·임차의뢰</h1>

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
              임대 의뢰
            </button>
            <button
              onClick={() => setActiveTab('lease')}
              className={`flex-1 py-4 text-[16px] font-bold border-b-2 transition-colors ${
                activeTab === 'lease'
                  ? 'border-gold text-gold'
                  : 'border-gray-200 text-gray-400 hover:text-gray-600'
              }`}
            >
              임차 의뢰
            </button>
          </div>
        </div>

        {/* Current Tab Description */}
        <div className="text-center mb-10">
          <p className="text-gray-600 text-[15px]">
            {activeTab === 'rent' 
              ? '보유하고 계신 상가 또는 사무실의 임대를 의뢰할 수 있습니다.'
              : '원하시는 조건의 상가 또는 사무실 입주(임차)를 의뢰할 수 있습니다.'}
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-[800px] mx-auto">

          {/* Section 1: Required Info */}
          <section className="mb-12">
            <h2 className="text-[18px] font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-gold mr-1">*</span> 의뢰인 정보 (필수)
            </h2>
            <div className="border-t-2 border-gray-900">
              
              {/* Row: Name */}
              <div className="flex flex-col md:flex-row border-b border-gray-200">
                <div className="bg-gray-50 md:w-[180px] p-4 flex items-center justify-start md:justify-center shrink-0">
                  <label className="text-[14px] font-bold text-gray-700">성 함 <span className="text-gold">*</span></label>
                </div>
                <div className="flex-1 p-4 bg-white">
                  <input type="text" placeholder="성함을 입력해주세요" className="w-full md:w-[320px] px-3 py-2 border border-gray-300 rounded text-[14px] focus:outline-none focus:border-gold transition-colors" />
                </div>
              </div>

              {/* Row: Phone */}
              <div className="flex flex-col md:flex-row border-b border-gray-200">
                <div className="bg-gray-50 md:w-[180px] p-4 flex items-center justify-start md:justify-center shrink-0">
                  <label className="text-[14px] font-bold text-gray-700">연락처 <span className="text-gold">*</span></label>
                </div>
                <div className="flex-1 p-4 bg-white">
                  <div className="flex flex-col sm:flex-row gap-2 max-w-[320px]">
                    <select className="px-3 py-2 border border-gray-300 rounded text-[14px] focus:outline-none focus:border-gold bg-white h-[42px]">
                      <option>010</option>
                      <option>02</option>
                      <option>031</option>
                    </select>
                    <span className="hidden sm:flex items-center text-gray-400">-</span>
                    <input type="text" maxLength={4} className="flex-1 px-3 py-2 border border-gray-300 rounded text-[14px] focus:outline-none focus:border-gold h-[42px] text-center" />
                    <span className="hidden sm:flex items-center text-gray-400">-</span>
                    <input type="text" maxLength={4} className="flex-1 px-3 py-2 border border-gray-300 rounded text-[14px] focus:outline-none focus:border-gold h-[42px] text-center" />
                  </div>
                </div>
              </div>

              {/* Row: Content */}
              <div className="flex flex-col md:flex-row border-b border-gray-200">
                <div className="bg-gray-50 md:w-[180px] p-4 flex items-start justify-start md:justify-center shrink-0 pt-6">
                  <label className="text-[14px] font-bold text-gray-700">상세 문의 내용 <span className="text-gold">*</span></label>
                </div>
                <div className="flex-1 p-4 bg-white">
                  <textarea 
                    placeholder="원하시는 지역, 면적, 예산 등 구체적인 조건을 적어주시면 더욱 빠르고 정확한 상담이 가능합니다."
                    className="w-full min-h-[160px] p-3 border border-gray-300 rounded text-[14px] focus:outline-none focus:border-gold resize-y transition-colors"
                  ></textarea>
                </div>
              </div>

            </div>
          </section>

          {/* Section 2: Optional Info */}
          <section className="mb-12">
            <h2 className="text-[18px] font-bold text-gray-900 mb-4">의뢰 정보 (선택)</h2>
            <div className="border-t-2 border-gray-900">
              
              {/* Row: Email */}
              <div className="flex flex-col md:flex-row border-b border-gray-200">
                <div className="bg-gray-50 md:w-[180px] p-4 flex items-center justify-start md:justify-center shrink-0">
                  <label className="text-[14px] font-bold text-gray-700">이메일</label>
                </div>
                <div className="flex-1 p-4 bg-white flex flex-col sm:flex-row items-center gap-2 max-w-full sm:max-w-md">
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded text-[14px] focus:outline-none focus:border-gold h-[42px]" />
                  <span className="text-gray-500">@</span>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded text-[14px] focus:outline-none focus:border-gold h-[42px]" />
                </div>
              </div>

              {/* Row: Location */}
              <div className="flex flex-col md:flex-row border-b border-gray-200">
                <div className="bg-gray-50 md:w-[180px] p-4 flex items-center justify-start md:justify-center shrink-0">
                  <label className="text-[14px] font-bold text-gray-700">희망 지역</label>
                </div>
                <div className="flex-1 p-4 bg-white flex flex-col sm:flex-row gap-2 max-w-xl">
                  <select className="flex-1 px-3 py-2 border border-gray-300 rounded text-[14px] focus:outline-none focus:border-gold bg-white h-[42px]">
                    <option>시/도 선택</option>
                    <option>서울특별시</option>
                  </select>
                  <select className="flex-1 px-3 py-2 border border-gray-300 rounded text-[14px] focus:outline-none focus:border-gold bg-white h-[42px]">
                    <option>구/군 선택</option>
                    <option>강남구</option>
                    <option>서초구</option>
                  </select>
                  <select className="flex-1 px-3 py-2 border border-gray-300 rounded text-[14px] focus:outline-none focus:border-gold bg-white h-[42px]">
                    <option>동 선택</option>
                  </select>
                </div>
              </div>

              {/* Row: Budget */}
              <div className="flex flex-col md:flex-row border-b border-gray-200">
                <div className="bg-gray-50 md:w-[180px] p-4 flex items-center justify-start md:justify-center shrink-0">
                  <label className="text-[14px] font-bold text-gray-700">희망 금액</label>
                </div>
                <div className="flex-1 p-4 bg-white flex flex-col sm:flex-row gap-4 max-w-xl">
                  <div className="flex items-center gap-2 flex-1">
                    <span className="text-[14px] text-gray-700 whitespace-nowrap w-12 shrink-0">보증금</span>
                    <input type="text" placeholder="숫자만 입력" className="w-full px-3 py-2 border border-gray-300 rounded text-[14px] focus:outline-none focus:border-gold h-[42px] text-right" />
                    <span className="text-[14px] text-gray-700 shrink-0">만 원</span>
                  </div>
                  <div className="flex items-center gap-2 flex-1">
                    <span className="text-[14px] text-gray-700 whitespace-nowrap w-12 shrink-0">월임대료</span>
                    <input type="text" placeholder="숫자만 입력" className="w-full px-3 py-2 border border-gray-300 rounded text-[14px] focus:outline-none focus:border-gold h-[42px] text-right" />
                    <span className="text-[14px] text-gray-700 shrink-0">만 원</span>
                  </div>
                </div>
              </div>

              {/* Row: Area */}
              <div className="flex flex-col md:flex-row border-b border-gray-200">
                <div className="bg-gray-50 md:w-[180px] p-4 flex items-center justify-start md:justify-center shrink-0">
                  <label className="text-[14px] font-bold text-gray-700">희망 면적</label>
                </div>
                <div className="flex-1 p-4 bg-white flex items-center gap-2 max-w-[280px]">
                  <input type="text" placeholder="숫자만 입력" className="w-full px-3 py-2 border border-gray-300 rounded text-[14px] focus:outline-none focus:border-gold h-[42px] text-right" />
                  <span className="text-[14px] text-gray-700 shrink-0">평</span>
                </div>
              </div>

              {/* Row: Move-in Date */}
              <div className="flex flex-col md:flex-row border-b border-gray-200">
                <div className="bg-gray-50 md:w-[180px] p-4 flex items-center justify-start md:justify-center shrink-0">
                  <label className="text-[14px] font-bold text-gray-700">입주 가능 시기</label>
                </div>
                <div className="flex-1 p-4 bg-white">
                  <div className="flex flex-wrap gap-2 text-[14px]">
                     {/* Buttons pseudo-style for choice */}
                    <button className="px-4 py-2 border border-gold text-gold bg-white hover:bg-gold/5 transition-colors font-medium rounded-sm">즉시 입주</button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-600 bg-white hover:border-gray-400 transition-colors font-medium rounded-sm">1개월 내</button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-600 bg-white hover:border-gray-400 transition-colors font-medium rounded-sm">2개월 내</button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-600 bg-white hover:border-gray-400 transition-colors font-medium rounded-sm">직접 입력</button>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Privacy Policy */}
          <section className="mb-12">
            <h2 className="text-[16px] font-bold text-gray-900 mb-3">개인정보 보호 정책</h2>
            <div className="border border-gray-200 p-4 h-[120px] overflow-y-auto w-full text-[13px] text-gray-600 leading-relaxed bg-gray-50 mb-4 rounded-sm">
              <p className="font-bold mb-1">■ 개인정보의 수집 및 이용 목적</p>
              <p className="mb-2">본 사이트는 의뢰 상담 및 맞춤형 매물 추천을 위해 최소한의 개인정보를 수집하고 있습니다. 수집된 정보는 의뢰 처리 외의 목적으로는 사용되지 않습니다.</p>
              <p className="font-bold mb-1">■ 수집하는 개인정보 항목</p>
              <p className="mb-2">필수항목: 성함, 연락처<br />선택항목: 이메일, 희망지역, 예산, 면적 등 의뢰사항</p>
              <p className="font-bold mb-1">■ 개인정보의 보유 및 이용기간</p>
              <p>원칙적으로, 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.</p>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 cursor-pointer text-[14px] text-gray-800">
                <input type="checkbox" className="w-4 h-4 accent-gold cursor-pointer" />
                <span>개인정보 수집 및 이용에 동의합니다. (필수)</span>
              </label>
            </div>
          </section>

          {/* Submit Button */}
          <div className="flex justify-center mb-section">
            <button className="w-[300px] bg-gold text-white text-[16px] font-bold py-4 rounded hover:bg-[#d59800] hover:shadow-lg transition-all">
              의뢰 보내기
            </button>
          </div>

        </div>
      </main>

      <Footer02 />
    </div>
  );
}
