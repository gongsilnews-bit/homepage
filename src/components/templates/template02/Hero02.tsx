'use client';

import { useMemo } from 'react';
import { usePathname } from 'next/navigation';

import Link from 'next/link';
import { FiSearch } from 'react-icons/fi';
import { BsBuildings, BsHouseDoor, BsShop } from 'react-icons/bs';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { MdOutlineApartment } from 'react-icons/md';

const roomTypes = [
  { icon: BsHouseDoor, label: '원룸', engLabel: '1ROOM', href: '/map?type=oneroom' },
  { icon: MdOutlineApartment, label: '미투', engLabel: 'MINI 2ROOM', href: '/map?type=mini2room' },
  { icon: HiOutlineOfficeBuilding, label: '투룸', engLabel: '2ROOM', href: '/map?type=tworoom' },
  { icon: BsBuildings, label: '쓰리룸 이상', engLabel: '3ROOM+', href: '/map?type=threeroom' },
  { icon: BsShop, label: '상가', engLabel: 'MARKET', href: '/map?type=commercial' },
];

export default function Hero02() {
  const pathname = usePathname();
  const basePath = useMemo(() => {
    if (typeof window !== 'undefined' && window.location.hostname.includes('template')) {
      return '';
    }
    const match = pathname?.match(/^(\/[^/]+\/templates\/template02)/);
    return match ? match[1] : '/templates/template02';
  }, [pathname]);

  return (
    <section>
      {/* Hero Banner */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #2ECEC2, #1DB5A9)' }}>
        <div className="max-w-[1280px] mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-xl">
            <h1 className="text-white text-3xl md:text-5xl font-black leading-tight mb-4">
              내가 찾는 방<br />
              여기 다 있다!
            </h1>
            <p className="text-white/80 text-lg md:text-xl font-medium">
              원룸·투룸·오피스텔 전문 부동산
            </p>
          </div>
        </div>
        {/* Decorative circles */}
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-white/5" />
        <div className="absolute bottom-0 right-20 w-96 h-96 rounded-full bg-white/5" />
        <div className="absolute -bottom-20 right-60 w-48 h-48 rounded-full bg-white/10" />
      </div>

      {/* Search Bar */}
      <div className="max-w-[1280px] mx-auto px-4 -mt-7 relative z-20">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <div className="flex items-center gap-3">
            <FiSearch className="text-gray-medium text-xl shrink-0" />
            <input
              type="text"
              placeholder="원하시는 지역명, 지하철역, 키워드를 입력해주세요."
              className="flex-1 text-[15px] outline-none placeholder-gray-medium/60 bg-transparent"
            />
            <button className="shrink-0 bg-coral hover:bg-coral-hover text-white px-6 py-3 rounded-xl font-bold text-[15px] transition-colors">
              매물검색
            </button>
          </div>
        </div>
      </div>

      {/* Room Type Icons */}
      <div className="max-w-[1280px] mx-auto px-4 mt-8 mb-4">
        <div className="flex items-center justify-center gap-6 md:gap-12">
          {roomTypes.map((room) => {
            const Icon = room.icon;
            return (
              <Link
                key={room.label}
                href={`${basePath}${room.href}`}
                className="flex flex-col items-center gap-2 group cursor-pointer"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gray-light flex items-center justify-center group-hover:bg-teal-light transition-colors">
                  <Icon className="text-3xl md:text-4xl text-gray-medium group-hover:text-teal transition-colors" />
                </div>
                <span className="text-[10px] text-gray-medium uppercase tracking-wider">
                  {room.engLabel}
                </span>
                <span className="text-[13px] md:text-[14px] font-bold text-dark">
                  {room.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
