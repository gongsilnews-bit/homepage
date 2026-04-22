import Link from 'next/link';

const newsItems = [
  { id: 1, category: '오피스 동향', title: '강남권 오피스 공실률 1%대 유지... 임대료 상승 지속', date: '2026.04.22', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=80' },
  { id: 2, category: '부동산 정책', title: '하반기 상업용 부동산 대출 규제 완화 검토 소식에 시장 들썩', date: '2026.04.18', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&q=80' },
  { id: 3, category: '빌드온 소식', title: '빌드온 부동산, AI 기반 매물 자동 추천 서비스 도입', date: '2026.04.15', img: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=500&q=80' },
];

export default function NewsPreview01() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4">
        
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-[28px] font-bold text-dark mb-2">빌드온 부동산 뉴스</h2>
            <p className="text-gray-500 text-[15px]">가장 빠르고 정확한 상업용 부동산 인사이트</p>
          </div>
          <Link href="/news" className="text-[14px] font-bold text-gray-400 hover:text-gold transition-colors flex items-center gap-1">
            전체보기 <span>+</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((news) => (
            <Link key={news.id} href={`/news01/${news.id}`} className="group block">
              <div className="aspect-[16/10] overflow-hidden rounded-xl mb-4 bg-gray-100">
                <img src={news.img} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div>
                <span className="inline-block text-[11px] font-bold text-gold border border-gold/30 rounded px-2 py-0.5 mb-2">
                  {news.category}
                </span>
                <h3 className="text-[17px] font-bold text-dark group-hover:text-gold transition-colors line-clamp-2 leading-snug mb-2">
                  {news.title}
                </h3>
                <p className="text-[13px] text-gray-400 font-medium">{news.date}</p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
