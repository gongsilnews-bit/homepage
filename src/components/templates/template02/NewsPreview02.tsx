import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const newsItems = [
  { id: 1, category: '부동산 꿀팁', title: '자취생 필수! 원룸 계약 전 놓치면 후회하는 5가지', date: '2026.04.22', img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&q=80' },
  { id: 2, category: '동네 소식', title: '구미 인동 상권 활성화 수혜, 인근 원룸 수요 급증', date: '2026.04.18', img: 'https://images.unsplash.com/photo-1542314831-c6a4d14fe6a1?w=500&q=80' },
  { id: 3, category: '지원 정책', title: '2026 청년 전월세 보증금 이자지원 사업 신청 안내', date: '2026.04.15', img: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=500&q=80' },
];

export default function NewsPreview02() {
  return (
    <section className="py-20 bg-gray-light">
      <div className="max-w-[1280px] mx-auto px-4">
        
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-dark mb-2">
              <span className="text-teal">여기와방</span> 매거진
            </h2>
            <p className="text-gray-medium text-[15px]">유용한 부동산 정보부터 동네 핫한 소식까지!</p>
          </div>
          <Link href="/news" className="hidden md:flex items-center gap-1.5 text-[14px] font-bold text-teal hover:text-teal-hover transition-colors px-4 py-2 bg-teal-light rounded-full border border-teal/20">
            전체 매거진 보기 <FiArrowRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((news) => (
            <Link key={news.id} href={`/news/${news.id}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-border hover:border-teal/30 hover:shadow-md transition-all">
              <div className="aspect-[16/10] overflow-hidden bg-gray-200">
                <img src={news.img} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <span className="inline-block text-[11px] font-bold text-white bg-teal rounded px-2 py-0.5 mb-3">
                  {news.category}
                </span>
                <h3 className="text-[17px] font-bold text-dark group-hover:text-teal transition-colors line-clamp-2 leading-snug mb-3">
                  {news.title}
                </h3>
                <p className="text-[13px] text-gray-medium font-medium">{news.date}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/news" className="inline-flex items-center gap-1.5 text-[14px] font-bold text-teal hover:text-teal-hover transition-colors px-6 py-3 bg-teal-light rounded-full border border-teal/20">
            전체 매거진 보기 <FiArrowRight />
          </Link>
        </div>

      </div>
    </section>
  );
}
