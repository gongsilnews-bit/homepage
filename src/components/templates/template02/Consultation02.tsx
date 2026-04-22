import { FiPhoneCall, FiMessageCircle, FiCheck } from 'react-icons/fi';

const latestRequests = [
  { id: 1, type: '원룸', location: '인동', date: '방금 전', status: '상담대기' },
  { id: 2, type: '미투', location: '진평동', date: '10분 전', status: '상담완료' },
  { id: 3, type: '투룸', location: '구평동', date: '1시간 전', status: '상담대기' },
  { id: 4, type: '상가', location: '인의동', date: '2시간 전', status: '상담완료' },
  { id: 5, type: '원룸', location: '임수동', date: '3시간 전', status: '상담완료' },
];

export default function Consultation02() {
  return (
    <section className="bg-gray-light py-16 border-t border-gray-border/50">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left: Consultation Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-border">
            <h2 className="text-2xl font-bold text-dark mb-2">빠른 매물 의뢰</h2>
            <p className="text-gray-medium text-sm mb-6">원하시는 조건을 남겨주시면 빠르게 찾아드립니다.</p>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <input type="text" placeholder="이름" className="w-1/2 bg-gray-light border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-teal/30 text-sm" />
                <input type="text" placeholder="연락처" className="w-1/2 bg-gray-light border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-teal/30 text-sm" />
              </div>
              <input type="text" placeholder="희망 지역, 예산, 방 종류 등 자유롭게 적어주세요." className="w-full bg-gray-light border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-teal/30 text-sm" />
              
              <div className="flex items-center gap-2 mt-2 text-xs text-gray-medium">
                <input type="checkbox" id="agree" className="rounded text-teal focus:ring-teal/30" />
                <label htmlFor="agree">개인정보 수집 및 이용 동의</label>
              </div>

              <div className="flex gap-3 mt-6">
                <button className="flex-1 bg-coral hover:bg-coral-hover text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-[15px]">
                  <FiPhoneCall size={18} /> 상담 신청하기
                </button>
                <button className="w-14 h-[50px] bg-[#FEE500] hover:bg-[#FADC00] rounded-xl flex items-center justify-center transition-colors">
                  <FiMessageCircle size={24} className="text-[#391B1B]" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Live Status */}
          <div className="lg:py-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-dark">실시간 매물 의뢰 현황</h2>
              <span className="text-xs font-bold text-teal flex items-center gap-1 bg-teal-light px-3 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-teal animate-pulse"></span>
                LIVE
              </span>
            </div>

            <div className="space-y-3">
              {latestRequests.map((req) => (
                <div key={req.id} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-border hover:border-teal/30 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-light flex items-center justify-center text-sm font-bold text-dark">
                      {req.type}
                    </div>
                    <div>
                      <p className="text-[14px] font-semibold text-dark">
                        <span className="text-teal mr-1">[{req.location}]</span>
                        매물 찾아주세요!
                      </p>
                      <p className="text-[12px] text-gray-medium">{req.date}</p>
                    </div>
                  </div>
                  {req.status === '상담완료' ? (
                    <div className="flex items-center gap-1 text-[12px] font-bold text-teal">
                      <FiCheck /> {req.status}
                    </div>
                  ) : (
                    <div className="text-[12px] font-bold text-coral">
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
