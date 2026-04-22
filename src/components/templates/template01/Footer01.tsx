'use client';

import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { FiMessageSquare, FiYoutube } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';
import { SiNaver } from 'react-icons/si';
import Link from 'next/link';

const footerLinks = [
  { label: '회사소개', path: '/about' },
  { label: '오시는 길', path: '/location' },
  { label: '공지사항', path: '/board' },
  { label: 'Contact Us', path: '/contact' },
  { label: '의뢰하기', path: '/request' },
  { label: '이용약관', path: '/terms' },
  { label: '개인정보처리방침', path: '/privacy' },
];

export default function Footer01() {
  const pathname = usePathname();

  return (
    <footer className="bg-dark text-white">
      {/* Top Links */}
      <div className="border-b border-white/10">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="flex flex-wrap gap-8 py-4">
            {footerLinks.map((link) => {
              return (
                <Link
                  key={link.label}
                  href={link.path}
                  className={`text-[14px] transition-colors hover:text-gold ${
                    link.label === '개인정보취급방침' ? 'font-bold text-white' : 'text-white/70'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-[1280px] mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Left: Company Info */}
          <div className="space-y-3">
            <h4 className="text-[16px] font-bold">주식회사 빌드온부동산중개법인</h4>
            <div className="text-[13px] text-white/50 leading-loose space-y-0.5">
              <p>대표자: 금현민 | 주소: 서울특별시 서초구 강남대로39길 15-11, 002호 (서초동, 서초 노블레스 아파트)</p>
              <p>사업자 등록번호 : 190-86-00985 | 법인 등록번호 : 110111-6455714 | 업태: 부동산업 | 종목: 부동산중개 / 임대관리</p>
            </div>
            <p className="text-[12px] text-white/30 mt-4">Copyright. 주식회사 빌드온부동산중개법인 All Rights Reserved.</p>
          </div>

          {/* Right: Call Center + Social */}
          <div className="shrink-0 text-right lg:text-right">
            <p className="text-[14px] text-white/60 mb-1">
              대표 전화 <span className="text-white/40 ml-1">CALL CENTER</span>
            </p>
            <p className="text-[36px] font-bold tracking-tight leading-none mb-4">
              02-598-9788
            </p>
            <div className="flex gap-3 justify-end">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-colors" aria-label="카카오톡"><FiMessageSquare size={16} /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-colors" aria-label="유튜브"><FiYoutube size={16} /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-colors" aria-label="네이버"><SiNaver size={12} /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-colors" aria-label="인스타그램"><FaInstagram size={16} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
