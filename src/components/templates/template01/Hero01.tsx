'use client';

import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { FiSearch } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

export default function Hero01() {
  const router = useRouter();
  const pathname = usePathname();

  const basePath = useMemo(() => {
    if (typeof window !== 'undefined' && window.location.hostname.includes('template')) {
      return '';
    }
    const match = pathname?.match(/^(\/[^/]+\/templates\/template01)/);
    return match ? match[1] : '/templates/template01';
  }, [pathname]);

  const handleSearch = () => {
    router.push(`${basePath}/map`);
  };

  return (
    <section className="relative w-full min-h-[560px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-[800px] mx-auto">
        {/* Subtitle */}
        <p className="text-gold text-[15px] font-semibold tracking-[0.15em] mb-4 uppercase">
          No.1 Commercial Real Estate - BUILDON
        </p>

        {/* Main Title */}
        <h1 className="text-[32px] md:text-[42px] font-bold leading-[1.3] mb-5">
          고객님의 조건에 맞는
          <br />
          <span className="text-gold">상가·사무실</span>을 찾아드려요
        </h1>

        {/* Description */}
        <p className="text-white/80 text-[15px] leading-relaxed mb-8">
          상가·사무실 임대, 아직도 발품 팔고 계신가요?
          <br />
          전문가에게 맡기세요. 부담없이 편하게 문의하세요
        </p>

        {/* Search Bar */}
        <div className="bg-white rounded-full flex items-center max-w-[640px] mx-auto overflow-hidden shadow-lg">
          <div className="flex items-center px-5 flex-1">
            <FiSearch className="text-gray-medium shrink-0" size={20} />
            <input
              type="text"
              placeholder="지역명, 지하철역, 건물명으로 상가·사무실 검색"
              className="w-full py-4 px-3 text-[15px] text-dark outline-none bg-transparent placeholder:text-gray-medium"
            />
          </div>
          <button 
            onClick={handleSearch}
            className="bg-gold hover:bg-gold-hover text-white font-bold text-[15px] px-8 py-4 transition-colors shrink-0"
          >
            매물검색
          </button>
        </div>

        {/* Bottom Text */}
        <p className="text-white/70 text-[13px] mt-8 leading-relaxed">
          빌드온 중개법인은 상가·사무실 임대를 전문으로 하는
          <br />
          No.1 상업용 부동산 종합 솔루션 기업입니다.
        </p>
      </div>
    </section>
  );
}
