import { FiPhoneCall, FiMessageCircle, FiCheck } from 'react-icons/fi';

const latestRequests = [
  { id: 1, type: '사무실', location: '강남역 인근', date: '방금 전', status: '의뢰접수' },
  { id: 2, type: '상가', location: '홍대입구역', date: '30분 전', status: '상담완료' },
  { id: 3, type: '통건물', location: '성수동', date: '1시간 전', status: '매물제안' },
  { id: 4, type: '프라임', location: '역삼동', date: '2시간 전', status: '투어예약' },
  { id: 5, type: '사무실', location: '판교역', date: '3시간 전', status: '상담완료' },
];

export default function Consultation01() {
  return (
    <section className="bg-gray-50 py-16 border-t border-gray-200">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          
          {/* Left: Consultation Form */}
          <div className="bg-white rounded-xl p-8 lg:p-10 shadow-sm border border-gray-200">
            <h2 className="text-[26px] font-bold text-dark mb-2">프리미엄 매물 의뢰</h2>
            <p className="text-gray-500 text-[15px] mb-8">고객님의 조건에 딱 맞는 최적의 공간을 제안해 드립니다.</p>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <input type="text" placeholder="담당자 성함" className="w-1/2 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 outline-none focus:border-gold transition-colors text-[14px]" />
                <input type="text" placeholder="연락처" className="w-1/2 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 outline-none focus:border-gold transition-colors text-[14px]" />
              </div>
              <input type="text" placeholder="희망 지역 (예: 강남구, 서초구)" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 outline-none focus:border-gold transition-colors text-[14px]" />
              <textarea placeholder="희망 평수, 예산, 업종 등 자유롭게 적어주세요." rows={3} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 outline-none focus:border-gold transition-colors text-[14px] resize-none" />
              
              <div className="flex items-center gap-2 mt-4 mb-2 text-[13px] text-gray-500">
                <input type="checkbox" id="agree01" className="rounded text-gold focus:ring-gold/30 accent-gold" />
                <label htmlFor="agree01">개인정보 수집 및 이용 동의</label>
              </div>

              <div className="flex gap-3 mt-6">
                <button className="flex-1 bg-dark hover:bg-gold text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-[15px]">
                  <FiPhoneCall size={18} /> 의뢰 접수하기
                </button>
                <button className="w-[60px] h-[56px] bg-[#FEE500] hover:bg-[#FADC00] rounded-lg flex items-center justify-center transition-colors">
                  <FiMessageCircle size={28} className="text-[#391B1B]" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Live Request Status */}
          <div className="lg:py-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-[22px] font-bold text-dark mb-1">실시간 의뢰 현황</h2>
                <p className="text-sm text-gray-500">빌드온 전문가들이 신속하게 매칭 중입니다.</p>
              </div>
              <span className="text-[11px] font-bold text-dark flex items-center gap-1.5 bg-gray-100 px-3 py-1.5 rounded-sm border border-gray-200 tracking-wider">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                LIVE
              </span>
            </div>

            <div className="space-y-3 relative before:absolute before:inset-0 before:-left-3 before:w-px before:bg-gray-200">
              {latestRequests.map((req) => (
                <div key={req.id} className="relative flex items-center justify-between bg-white rounded-lg p-5 border border-gray-200 hover:border-gold transition-colors ml-4 shadow-sm group">
                  {/* Timeline dot */}
                  <div className="absolute top-1/2 -translate-y-1/2 -left-[20px] w-2 h-2 rounded-full bg-gray-300 group-hover:bg-gold transition-colors" />
                  
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="text-[15px] font-bold text-dark mb-0.5">
                        <span className="text-gold mr-1.5">[{req.location}]</span>
                        {req.type} 매물 의뢰합니다.
                      </p>
                      <p className="text-[12px] text-gray-400">{req.date}</p>
                    </div>
                  </div>
                  
                  {req.status === '상담완료' || req.status === '투어예약' ? (
                    <div className="flex items-center gap-1 text-[13px] font-bold text-dark bg-gray-100 px-3 py-1 rounded">
                      <FiCheck className="text-gold" /> {req.status}
                    </div>
                  ) : (
                    <div className="text-[13px] font-bold text-gold border border-gold/30 px-3 py-1 rounded bg-gold/5">
                      {req.status}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
