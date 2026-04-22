import { FiCalendar } from 'react-icons/fi';

const sampleNotices = [
  { id: 1, title: '2026년 5월 휴무 안내', date: '2026-04-20', isImportant: true },
  { id: 2, title: '홈페이지 리뉴얼 안내', date: '2026-04-15', isImportant: true },
  { id: 3, title: '봄 이사 시즌 특별 이벤트 안내', date: '2026-04-10', isImportant: false },
  { id: 4, title: '개인정보처리방침 변경 안내 (시행일: 2026.04.01)', date: '2026-04-01', isImportant: false },
  { id: 5, title: '전세보증보험 가입 무료 대행 서비스 오픈', date: '2026-03-25', isImportant: false },
  { id: 6, title: '신규 매물 업데이트 주기 변경 안내 (매일 → 실시간)', date: '2026-03-20', isImportant: false },
  { id: 7, title: '설 연휴 영업시간 안내', date: '2026-01-25', isImportant: false },
  { id: 8, title: '2026년 새해 인사 및 영업 안내', date: '2026-01-02', isImportant: false },
];

export default function Template02BoardPage() {
  return (
    <div className="max-w-[960px] mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-dark mb-2">공지사항</h1>
      <p className="text-gray-medium text-[14px] mb-10">여기와방의 최신 소식과 안내사항입니다.</p>
      <div className="border-t-2 border-dark">
        <div className="hidden md:grid grid-cols-[60px_1fr_120px] gap-4 px-4 py-3 bg-gray-light border-b border-gray-border text-[13px] font-semibold text-gray-medium">
          <span className="text-center">번호</span>
          <span>제목</span>
          <span className="text-center">날짜</span>
        </div>
        {sampleNotices.map((notice, idx) => (
          <div key={notice.id} className="grid grid-cols-1 md:grid-cols-[60px_1fr_120px] gap-2 md:gap-4 px-4 py-4 border-b border-gray-border hover:bg-teal-light/30 transition-colors cursor-pointer group">
            <span className="hidden md:block text-center text-[13px] text-gray-medium">{sampleNotices.length - idx}</span>
            <div className="flex items-center gap-2">
              {notice.isImportant && <span className="shrink-0 text-[10px] font-bold px-2 py-0.5 rounded text-white bg-coral">중요</span>}
              <span className="text-[14px] text-dark group-hover:text-teal transition-colors font-medium">{notice.title}</span>
            </div>
            <div className="flex items-center justify-center gap-1 text-[12px] text-gray-medium">
              <FiCalendar size={11} />
              <span>{notice.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
