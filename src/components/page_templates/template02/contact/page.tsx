'use client';

export default function Template02ContactPage() {
  return (
    <div className="max-w-[960px] mx-auto px-4 py-16">
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-5xl font-black text-dark mb-4">Contact Us</h1>
        <p className="text-gray-medium text-[15px]">궁금하신 점이나 제휴 문의를 남겨주시면 빠르게 답변해 드립니다.</p>
      </div>

      <div className="bg-white border border-gray-border rounded-xl p-8 md:p-12 shadow-sm text-dark max-w-3xl mx-auto">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">이름 (담당자명)</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-teal text-[15px]" placeholder="홍길동" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">연락처</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-teal text-[15px]" placeholder="010-1234-5678" />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">이메일 주소</label>
            <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-teal text-[15px]" placeholder="example@email.com" />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">문의 유형</label>
            <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-teal text-[15px] bg-white">
              <option>일반 문의 (상담창구)</option>
              <option>광고/제휴 문의</option>
              <option>고객 대량 렌탈 의뢰</option>
              <option>기타 문의</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">상세 내용</label>
            <textarea className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-teal text-[15px] min-h-[150px]" placeholder="문의하실 내용을 자유롭게 적어주세요."></textarea>
          </div>

          <div className="pt-4 border-t border-gray-100 flex justify-end">
            <button className="bg-teal text-white font-bold py-4 px-10 rounded-lg shadow-sm hover:bg-teal-600 transition-colors">
              문의 접수하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
