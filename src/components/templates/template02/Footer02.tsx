'use client';

import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';

const footerLinks = [
  { label: '회사소개', path: '/about' },
  { label: '오시는 길', path: '/location' },
  { label: '공지사항', path: '/board' },
  { label: '의뢰하기', path: '/request' },
  { label: '이용약관', path: '/terms' },
  { label: '개인정보처리방침', path: '/privacy' },
];

export default function Footer02() {
  const pathname = usePathname();

  return (
    <footer className="bg-[#3B3B3B] text-white">
      <div className="border-b border-white/10">
        <div className="max-w-[1280px] mx-auto px-4 py-3 flex items-center gap-6">
          {footerLinks.map((link, idx) => (
            <span key={link.label} className="flex items-center gap-6">
              <Link
                href={link.path}
                className={`text-[13px] hover:text-teal transition-colors ${
                  link.label === '개인정보처리방침' ? 'font-bold' : 'text-white/80'
                }`}
              >
                {link.label}
              </Link>
              {idx < footerLinks.length - 1 && (
                <span className="text-white/20">|</span>
              )}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FaHome className="text-teal text-2xl" />
              <span className="text-xl font-bold">
                여기와<span className="text-teal">방</span>
              </span>
            </div>
            <div className="text-[12px] text-white/50 leading-relaxed space-y-0.5">
              <p>회사명 : 리움7공인중개사사무소 | 대표자 : 유다혜 | 주소 : 경북 구미시 인동남길78, 2층 리움부동산 |</p>
              <p>사업자 번호 : 639-18-01438 | 부동산 번호 : 47190-2021-00006 | 전화 : 010-2373-9378 | 이메일 : 9378ryu@naver.com</p>
            </div>
            <p className="text-[11px] text-white/30 mt-4">부동산에 기술을 더하는 사람들 © BUGISA, Inc. All rights reserved.</p>
          </div>

          <div className="text-right shrink-0">
            <p className="text-[13px] text-white/60 mb-1">대표전화 <span className="text-white/80 font-medium">CALL CENTER</span></p>
            <p className="text-3xl md:text-4xl font-black text-white tracking-tight">010-2373-9378</p>
            <div className="flex items-center gap-3 mt-4 justify-end">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-[10px] font-bold">blog</span>
              </div>
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-[10px] font-bold">chat</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
