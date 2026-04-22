'use client';

import Link from 'next/link';
import { useState, useMemo, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { FiPhone, FiMenu, FiX, FiUser } from 'react-icons/fi';
import { FaHome } from 'react-icons/fa';

const mainMenuItems = [
  { label: '메인', path: '/' },
  { label: '지도검색', path: '/map02' },
  { label: '테마물건', path: '/theme02' },
  { label: '뉴스기사', path: '/news02' },
  { label: '문의하기', path: '/request02' },
];



export default function Header02() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isRoot = pathname?.split('/').filter(Boolean).length === 1;

  return (
    <header className={`sticky top-0 z-50 bg-white transition-all duration-300 ${isScrolled ? 'border-b-2 border-teal shadow-md' : 'shadow-sm'}`}>


      {/* Main Nav */}
      <div className="max-w-[1280px] mx-auto px-4 flex items-center justify-between h-[64px]">
        <div className="flex items-center gap-8 lg:gap-12">
          <Link href="/" className="flex items-center gap-2 shrink-0">
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
                  href={item.path}
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
          <a 
            href="http://localhost:3000/realty_admin" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[13px] font-medium bg-dark text-white px-3 py-1.5 rounded hover:bg-teal transition-colors ml-4"
          >
            매물 관리
          </a>
          <a 
            href="http://localhost:3000/realty_admin" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-0.5 text-gray-medium hover:text-teal transition-colors ml-2"
          >
            <FiUser size={18} />
            <span className="text-[10px] font-medium leading-none">로그인/회원가입</span>
          </a>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-dark p-2" aria-label="메뉴 열기">
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-border px-4 py-4 space-y-2">
          {mainMenuItems.map((item) => (
            <Link key={item.label} href={item.path} className="block text-[15px] font-medium py-2 text-dark hover:text-teal" onClick={() => setMobileOpen(false)}>
              {item.label}
            </Link>
          ))}

          <div className="pt-3 border-t border-gray-border">
            <p className="text-sm text-gray-medium">문의전화 <span className="font-bold text-dark">010-2373-9378</span></p>
          </div>
        </div>
      )}
    </header>
  );
}
