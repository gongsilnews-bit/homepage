'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { FiPhone, FiMenu, FiX } from 'react-icons/fi';
import { FaHome } from 'react-icons/fa';

const mainMenuItems = [
  { label: '지도검색', path: '/map' },
  { label: '원룸', path: '/map?type=oneroom' },
  { label: '미투', path: '/map?type=mini2room' },
  { label: '투룸', path: '/map?type=tworoom' },
  { label: '쓰리룸 이상', path: '/map?type=threeroom' },
  { label: '상가', path: '/map?type=commercial' },
];

const utilMenuItems = [
  { label: '매물 의뢰하기', path: '/request' },
  { label: '부동산 뉴스', path: '/news' },
  { label: '공지사항', path: '/board' },
  { label: '회사소개', path: '/about' },
];

export default function Header02() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const basePath = useMemo(() => {
    // If accessing via template subdomain directly (e.g., template02.gongsilnews.com), no base path is needed
    if (typeof window !== 'undefined' && window.location.hostname.includes('template')) {
      return '';
    }
    const match = pathname?.match(/^(\/[^/]+\/templates\/template02)/);
    return match ? match[1] : '/templates/template02';
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Utility Bar */}
      <div className="hidden lg:block border-b border-gray-border">
        <div className="max-w-[1280px] mx-auto px-4 flex items-center justify-end gap-5 h-[36px]">
          {utilMenuItems.map((item) => (
            <Link
              key={item.label}
              href={`${basePath}${item.path}`}
              className="text-[12px] text-gray-medium hover:text-teal transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-[1280px] mx-auto px-4 flex items-center justify-between h-[64px]">
        <div className="flex items-center gap-8 lg:gap-12">
          <Link href={basePath} className="flex items-center gap-2 shrink-0">
            <FaHome className="text-teal text-2xl" />
            <span className="text-xl font-bold text-dark">
              여기와<span className="text-teal">방</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {mainMenuItems.map((item) => {
              const isActive = pathname?.includes(item.path.split('?')[0]);
              return (
                <Link
                  key={item.label}
                  href={`${basePath}${item.path}`}
                  className={`text-[14px] font-semibold transition-colors hover:text-teal whitespace-nowrap ${
                    isActive ? 'text-teal' : 'text-dark'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="hidden xl:flex items-center gap-4">
          <div className="flex items-center gap-2 border border-teal rounded-full px-4 py-1.5">
            <FiPhone className="text-teal" size={14} />
            <span className="text-[12px] text-gray-medium">문의전화</span>
            <span className="font-bold text-[14px] text-dark">010-2373-9378</span>
          </div>
          <Link href="/login" className="text-[13px] text-gray-medium hover:text-teal transition-colors">로그인</Link>
          <Link href="/register" className="text-[13px] text-gray-medium hover:text-teal transition-colors">회원가입</Link>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-dark p-2" aria-label="메뉴 열기">
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-border px-4 py-4 space-y-2">
          {mainMenuItems.map((item) => (
            <Link key={item.label} href={`${basePath}${item.path}`} className="block text-[15px] font-medium py-2 text-dark hover:text-teal" onClick={() => setMobileOpen(false)}>
              {item.label}
            </Link>
          ))}
          <div className="border-t border-gray-border pt-3 mt-2 space-y-2">
            {utilMenuItems.map((item) => (
              <Link key={item.label} href={`${basePath}${item.path}`} className="block text-[13px] text-gray-medium py-1" onClick={() => setMobileOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
          <div className="pt-3 border-t border-gray-border">
            <p className="text-sm text-gray-medium">문의전화 <span className="font-bold text-dark">010-2373-9378</span></p>
          </div>
        </div>
      )}
    </header>
  );
}
