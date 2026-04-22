import { FiMapPin, FiPhone, FiMail, FiClock, FiAward } from 'react-icons/fi';

export default function Template02AboutPage() {
  return (
    <div className="max-w-[960px] mx-auto px-4 py-16">
      <div className="rounded-2xl p-10 md:p-14 mb-12 text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #2ECEC2, #1DB5A9)' }}>
        <div className="absolute top-6 right-6 w-40 h-40 rounded-full bg-white/10" />
        <div className="absolute -bottom-10 -right-10 w-60 h-60 rounded-full bg-white/5" />
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-black mb-3">회사소개</h1>
          <p className="text-white/80 text-[15px] max-w-lg leading-relaxed">여기와방은 고객님의 소중한 보금자리를 찾아드리는 원룸·투룸 전문 공인중개사사무소입니다. 정직하고 신뢰할 수 있는 중개 서비스를 약속드립니다.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white border border-gray-border rounded-xl p-6 flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #2ECEC2, #1DB5A9)' }}><FiMapPin className="text-white" size={20} /></div>
          <div><h3 className="text-[14px] font-bold text-dark mb-1">주소</h3><p className="text-[13px] text-gray-medium leading-relaxed">경북 구미시 인동남길78, 2층<br />리움부동산</p></div>
        </div>
        <div className="bg-white border border-gray-border rounded-xl p-6 flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #2ECEC2, #1DB5A9)' }}><FiPhone className="text-white" size={20} /></div>
          <div><h3 className="text-[14px] font-bold text-dark mb-1">대표전화</h3><p className="text-[13px] text-gray-medium">010-2373-9378</p><p className="text-[12px] text-gray-medium mt-0.5">연중무휴 24시간 상담</p></div>
        </div>
        <div className="bg-white border border-gray-border rounded-xl p-6 flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #2ECEC2, #1DB5A9)' }}><FiMail className="text-white" size={20} /></div>
          <div><h3 className="text-[14px] font-bold text-dark mb-1">이메일</h3><p className="text-[13px] text-gray-medium">9378ryu@naver.com</p></div>
        </div>
        <div className="bg-white border border-gray-border rounded-xl p-6 flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #2ECEC2, #1DB5A9)' }}><FiClock className="text-white" size={20} /></div>
          <div><h3 className="text-[14px] font-bold text-dark mb-1">영업시간</h3><p className="text-[13px] text-gray-medium leading-relaxed">평일 09:00 ~ 19:00<br />토요일 10:00 ~ 15:00<br /><span className="text-coral">일요일·공휴일 휴무</span></p></div>
        </div>
      </div>
      <div className="bg-gray-light rounded-xl p-8">
        <h2 className="text-xl font-bold text-dark mb-6 flex items-center gap-2"><FiAward className="text-teal" size={22} />사업자 정보</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
          {[
            { label: '상호명', value: '리움7공인중개사사무소' },
            { label: '대표자', value: '유다혜' },
            { label: '사업자 번호', value: '639-18-01438' },
            { label: '중개 등록번호', value: '47190-2021-00006' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <span className="text-[13px] text-gray-medium font-medium w-28 shrink-0">{item.label}</span>
              <span className="text-[14px] text-dark font-semibold">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
