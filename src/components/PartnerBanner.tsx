'use client';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useState } from 'react';

const partners = [
  { name: '빌드온', description: '임대 시세 분석', subtitle: '빌드온 전문 분석 페이지' },
  { name: 'YouTube', description: '빌드온', subtitle: '빌드온 공식 유튜브 채널' },
  { name: '네이버', description: '빌드온 블로그', subtitle: '빌드온 공식 블로그' },
  { name: '인터넷등기소', description: '대한민국 법원', subtitle: '등기부등본 발급' },
  { name: '정부24', description: '정부 서비스', subtitle: '건축물대장 발급' },
];

export default function PartnerBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 4;

  const next = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, partners.length - visibleCount));
  };

  const prev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-8 px-4 bg-white border-t border-gray-border">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex items-center gap-2">
          {/* Prev */}
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className="w-9 h-9 rounded-full border border-gray-border flex items-center justify-center text-gray-medium hover:border-gold hover:text-gold transition-colors disabled:opacity-30"
            aria-label="이전"
          >
            <FiChevronLeft size={18} />
          </button>

          {/* Partner Items */}
          <div className="flex-1 overflow-hidden">
            <div
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
            >
              {partners.map((partner, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <div className="flex items-center gap-3 border border-gray-border rounded-lg px-4 py-4 hover:border-gold transition-colors cursor-pointer h-full">
                    <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-gold font-bold text-[13px]">{partner.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-dark">{partner.description}</p>
                      <p className="text-[12px] text-gray-medium">{partner.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next */}
          <button
            onClick={next}
            disabled={currentIndex >= partners.length - visibleCount}
            className="w-9 h-9 rounded-full border border-gray-border flex items-center justify-center text-gray-medium hover:border-gold hover:text-gold transition-colors disabled:opacity-30"
            aria-label="다음"
          >
            <FiChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
