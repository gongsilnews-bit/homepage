import { FiCalendar, FiChevronRight } from 'react-icons/fi';

const sampleNews = [
  { id: 1, title: '2026년 전세사기 예방을 위한 체크리스트 5가지', date: '2026-04-20', category: '전세가이드' },
  { id: 2, title: '구미시 원룸 시장 동향 - 4월 분석 리포트', date: '2026-04-18', category: '시장분석' },
  { id: 3, title: '신혼부부를 위한 LH 전세임대 신청 방법 총정리', date: '2026-04-15', category: 'LH전세' },
  { id: 4, title: '원룸 계약 시 반드시 확인해야 할 특약사항 7가지', date: '2026-04-12', category: '계약가이드' },
  { id: 5, title: '2026년 청년 월세 지원 사업 신청 안내', date: '2026-04-10', category: '정부지원' },
  { id: 6, title: '구미 진평동 신축 원룸 단지 소개', date: '2026-04-08', category: '신규매물' },
  { id: 7, title: '임대차 3법 주요 내용과 세입자 권리 알아보기', date: '2026-04-05', category: '법률정보' },
  { id: 8, title: '봄 이사 시즌, 원룸 구할 때 놓치기 쉬운 포인트', date: '2026-04-02', category: '이사가이드' },
];

export default function Template02NewsPage() {
  return (
    <div className="max-w-[960px] mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-dark mb-2">부동산 뉴스</h1>
      <p className="text-gray-medium text-[14px] mb-10">부동산 시장 동향과 유용한 정보를 알려드립니다.</p>
      <div className="space-y-3">
        {sampleNews.map((news) => (
          <div key={news.id} className="flex items-center justify-between bg-white border border-gray-border rounded-xl px-6 py-5 hover:shadow-md hover:border-teal/30 transition-all cursor-pointer group">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full text-white" style={{ background: 'linear-gradient(135deg, #2ECEC2, #1DB5A9)' }}>{news.category}</span>
              </div>
              <h2 className="text-[15px] font-semibold text-dark group-hover:text-teal transition-colors">{news.title}</h2>
              <div className="flex items-center gap-1.5 mt-2 text-[12px] text-gray-medium">
                <FiCalendar size={12} />
                <span>{news.date}</span>
              </div>
            </div>
            <FiChevronRight className="text-gray-medium group-hover:text-teal transition-colors shrink-0 ml-4" size={20} />
          </div>
        ))}
      </div>
    </div>
  );
}
