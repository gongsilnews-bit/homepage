'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { FiPhone, FiMenu, FiX } from 'react-icons/fi';

const menuItems = [
  { label: '메인', href: '/' },
  { label: '지도검색', href: '/map' },
  { label: '전체매물보기', href: '/properties' },
  { label: '뉴스기사', href: '/news' },
  { label: '임대·임차의뢰', href: '/request' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white border-b-[3px] border-gold shadow-sm">
      <div className={`${pathname === '/map' ? 'w-full px-6' : 'max-w-[1280px] px-4'} mx-auto flex items-center justify-between h-[64px]`}>
        {/* Left Section: Logo & Nav */}
        <div className="flex items-center gap-8 lg:gap-14">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/images/buildon_logo_real.png"
              alt="빌드온 브랜드 로고"
              width={160}
              height={53}
              priority
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {menuItems.map((item) => {
              const isActive = item.href === '/' ? pathname === '/' : pathname?.startsWith(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-[14px] font-medium transition-colors hover:text-gold whitespace-nowrap ${
                    isActive ? 'text-gold font-bold' : 'text-dark'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Phone Numbers */}
        <div className="hidden xl:flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-dark">
            <FiPhone className="text-gold" size={14} />
            <span className="text-gray-medium text-[13px]">대표전화</span>
            <span className="font-bold text-[14px]">02-598-9788</span>
          </div>
          <div className="w-px h-5 bg-gray-border" />
          <div className="flex items-center gap-2 text-sm text-dark">
            <FiPhone className="text-gold" size={14} />
            <span className="text-gray-medium text-[13px]">임대/임차문의</span>
            <span className="font-bold text-[14px]">010-3398-7678</span>
          </div>
          <div className="w-px h-5 bg-gray-border" />
          <a 
            href="http://localhost:3000/realty_admin" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[13px] font-medium bg-dark text-white px-3 py-1.5 rounded hover:bg-gold transition-colors"
          >
            매물 관리
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-dark p-2"
          aria-label="메뉴 열기"
        >
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-border px-4 py-4 space-y-3">
          {menuItems.map((item) => {
            const isActive = item.href === '/' ? pathname === '/' : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`block text-[15px] font-medium py-2 ${
                  isActive ? 'text-gold' : 'text-dark'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-gray-border">
            <p className="text-sm text-gray-medium mb-3">대표전화 <span className="font-bold text-dark">02-598-9788</span></p>
            <a 
              href="http://localhost:3000/realty_admin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-[13px] font-medium bg-dark text-white px-4 py-2 rounded hover:bg-gold transition-colors"
            >
              매물 관리 (중개사 전용)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
