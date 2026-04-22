'use client';

import { FiSend } from 'react-icons/fi';

export default function Template02RequestPage() {
  return (
    <div className="max-w-[800px] mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-dark mb-2">매물 의뢰하기</h1>
      <p className="text-gray-medium text-[14px] mb-10">원하시는 매물 조건을 남겨주시면, 빠르게 맞춤 매물을 찾아드립니다.</p>
      <div className="space-y-6">
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
          <label className="text-[13px] font-semibold text-dark mb-1.5 block">이메일</label>
          <input type="email" placeholder="example@email.com" className="w-full border border-gray-border rounded-lg px-4 py-3 text-[14px] outline-none focus:border-teal transition-colors" />
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
          <label className="text-[13px] font-semibold text-dark mb-1.5 block">입주 희망일</label>
          <input type="date" className="w-full border border-gray-border rounded-lg px-4 py-3 text-[14px] outline-none focus:border-teal transition-colors" />
        </div>
        <div>
          <label className="text-[13px] font-semibold text-dark mb-1.5 block">상세 요청사항</label>
          <textarea rows={5} placeholder="원하시는 조건이나 요청사항을 자유롭게 작성해 주세요." className="w-full border border-gray-border rounded-lg px-4 py-3 text-[14px] outline-none focus:border-teal transition-colors resize-none" />
        </div>
        <div className="flex items-center gap-2 text-[12px] text-gray-medium">
          <input type="checkbox" className="rounded" />
          <span>개인정보 수집·이용에 동의합니다.</span>
          <button className="text-teal underline ml-1">내용 보기</button>
        </div>
        <button className="w-full flex items-center justify-center gap-2 text-white font-bold py-4 rounded-xl transition-colors text-[16px]" style={{ background: 'linear-gradient(135deg, #2ECEC2, #1DB5A9)' }}>
          <FiSend size={18} />
          매물 의뢰 접수하기
        </button>
      </div>
    </div>
  );
}
