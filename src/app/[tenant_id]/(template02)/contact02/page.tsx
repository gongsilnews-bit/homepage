import React from 'react';

import Header02 from '@/components/templates/template02/Header02';
import Footer02 from '@/components/templates/template02/Footer02';
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-pretendard">
      <Header02 />

      <main className="flex-grow w-full max-w-[800px] mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">1:1 문의하기</h1>
          <p className="text-gray-600">궁금하신 점을 남겨주시면 담당자가 확인 후 신속히 답변해 드리겠습니다.</p>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">이름 <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                placeholder="이름을 입력하세요"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">연락처 <span className="text-red-500">*</span></label>
              <input 
                type="tel" 
                placeholder="010-0000-0000"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">이메일</label>
            <input 
              type="email" 
              placeholder="example@email.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">문의 유형 <span className="text-red-500">*</span></label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all bg-white">
              <option>유형을 선택해주세요</option>
              <option>매물 문의</option>
              <option>매물 등록 의뢰</option>
              <option>기타 문의</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">제목 <span className="text-red-500">*</span></label>
            <input 
              type="text" 
              placeholder="제목을 입력하세요"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">내용 <span className="text-red-500">*</span></label>
            <textarea 
              rows={6}
              placeholder="문의하실 내용을 상세히 적어주세요"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all resize-none"
            ></textarea>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" className="mt-1 w-4 h-4 accent-gold" />
              <span className="text-sm text-gray-600 leading-snug">
                개인정보 수집 및 이용에 동의합니다. (필수) <br />
                <span className="text-xs text-gray-400">문의 처리를 위해 최소한의 개인정보를 수집합니다.</span>
              </span>
            </label>
          </div>

          <div className="flex justify-center pt-4">
            <button className="w-full md:w-64 bg-gold text-white font-bold py-4 rounded-lg hover:bg-[#d59800] transform active:scale-[0.98] transition-all shadow-lg">
              문의 제출하기
            </button>
          </div>
        </form>
      </main>

      <Footer02 />
    </div>
  );
}
