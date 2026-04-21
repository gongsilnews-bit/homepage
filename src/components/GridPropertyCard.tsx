'use client';

import React from 'react';
import Link from 'next/link';

interface GridPropertyCardProps {
  id: string | number;
  imageUrl: string;
  isRecommended?: boolean;
  propertyNo: string;
  location: string;
  title: string;
  exclusiveArea: number; // 전용면적 (평)
  deposit: string;
  monthlyRent: string;
  subwayInfo?: string;
}

export default function GridPropertyCard({
  id,
  imageUrl,
  isRecommended,
  propertyNo,
  location,
  title,
  exclusiveArea,
  deposit,
  monthlyRent,
  subwayInfo
}: GridPropertyCardProps) {
  return (
    <Link href={`/property/${id}`} className="group block cursor-pointer transition-all duration-200 hover:border-gold hover:shadow-md bg-white border border-gray-200 overflow-hidden" style={{ minWidth: 0 }}>
      {/* Image Container */}
      <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
          onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80'; }}
        />
        
        {/* Recommended Badge */}
        {isRecommended && (
          <div className="absolute top-0 left-0">
            <div className="bg-white px-2 py-1 m-3 border border-red-500 rounded-sm">
              <span className="text-red-500 text-[12px] font-bold tracking-wide">추천</span>
            </div>
          </div>
        )}

        {/* Heart Icon */}
        <button className="absolute bottom-3 right-3 text-white hover:text-red-500 transition-colors z-10 drop-shadow-md" aria-label="관심매물 추가">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>

        {/* Gallery Arrows */}
        <div className="absolute inset-y-0 left-0 flex items-center">
          <div className="w-8 h-10 flex items-center justify-center bg-black/40 text-white rounded-r-md opacity-0 group-hover:opacity-100 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <div className="w-8 h-10 flex items-center justify-center bg-black/40 text-white rounded-l-md opacity-0 group-hover:opacity-100 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4 px-5">
        
        {/* Meta Info (Number & Location) */}
        <div className="flex items-center gap-2 mb-1">
          <span className="border border-gray-300 text-gray-800 px-1.5 py-0.5 text-[12px] bg-white">{propertyNo}</span>
          <div className="flex items-center text-gray-900 font-bold text-[16px]">
            <svg className="w-4 h-4 mr-0.5 text-gray-300" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            <span className="truncate">{location}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-[14px] text-gray-800 leading-snug mb-3 line-clamp-1 mt-0.5 font-medium">
          [{title}]
        </h3>

        <div className="h-px bg-gray-200 w-full mb-3" />

        {/* Specs Table/Grid */}
        <div className="flex text-[14px]">
          {/* Left Column */}
          <div className="w-[60%] flex flex-col gap-1">
            <div className="flex items-center">
              <span className="text-gray-400 w-[65px] shrink-0 text-[13px]">전용면적</span>
              <span className="text-gray-800">{exclusiveArea}평</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-400 w-[65px] shrink-0 text-[13px]">보증금</span>
              <span className="text-black font-bold">{deposit}</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-400 w-[65px] shrink-0 text-[13px]">월임대료</span>
              <span className="text-black font-bold">{monthlyRent}</span>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="w-[40%] flex flex-col gap-1 pl-1">
            <span className="text-gray-400 text-[13px]">주변정보</span>
            <span className="text-black text-[13.5px] leading-snug line-clamp-2">{subwayInfo}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
