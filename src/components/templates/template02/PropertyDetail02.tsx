'use client';

import React, { useState } from 'react';
import { FiHeart, FiShare2, FiLink, FiChevronDown, FiChevronUp, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Property } from '@/data/sampleData';

interface PropertyDetailProps {
  property: Property;
}

export default function PropertyDetail02({ property }: PropertyDetailProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % property.images.length);
  };
  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (
    <div className="bg-[#f9f9fa] min-h-screen py-10 font-pretendard">
      <div className="max-w-[1280px] mx-auto px-4 xl:px-0">
        
        {/* Top Title Bar */}
        <div className="bg-white border text-[13px] border-gray-200 p-3 mb-4 rounded flex items-center gap-4">
          <span className="font-bold text-gray-800 bg-gray-100 px-2 py-1 rounded">{property.number}</span>
          <span className="text-gray-500">-</span>
          <span className="text-gray-500">{property.location}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-start">
          
          {/* Left Content Area (65%) */}
          <div className="w-full lg:w-[68%]">
            
            {/* Image Slider */}
            <div className="relative bg-black rounded-lg overflow-hidden aspect-[16/10] flex items-center justify-center group mb-4">
              <img 
                src={property.images[currentImage]} 
                alt="Property" 
                className="w-full h-full object-cover opacity-90"
              />
              
              {property.images.length > 1 && (
                <>
                  <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/30 hover:bg-white/50 rounded-full flex items-center justify-center text-white transition">
                    <FiChevronLeft size={24} />
                  </button>
                  <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/30 hover:bg-white/50 rounded-full flex items-center justify-center text-white transition">
                    <FiChevronRight size={24} />
                  </button>
                </>
              )}

              {/* Photo Enlarge Button & Paging */}
              <div className="absolute bottom-4 left-4">
                <button className="bg-black/60 text-white text-[13px] px-3 py-1.5 rounded hover:bg-black transition border border-white/20">
                  사진 크게보기
                </button>
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 text-dark text-[13px] font-bold px-3 py-1 rounded-full shadow">
                {currentImage + 1} / {property.images.length}
              </div>
            </div>

            {/* Accordion 1: Basic Information */}
            <div className="bg-white border border-gray-200 rounded mb-4">
              <div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center cursor-pointer">
                <div>
                  <span className="text-[12px] text-gray-500 block mb-0.5">Basic Information</span>
                  <h3 className="font-bold text-[16px] text-gray-900">기본 정보</h3>
                </div>
                <FiChevronUp size={20} className="text-gray-400" />
              </div>
              <div className="p-5 text-[14px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                  <div className="flex">
                    <span className="text-gray-500 w-[100px] shrink-0">주소</span>
                    <span className="text-gray-900 font-medium">{property.location}</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 w-[100px] shrink-0">입주가능일</span>
                    <span className="text-gray-900 font-medium">상시 / 협의</span>
                  </div>
                  <div className="flex md:col-span-2">
                    <span className="text-gray-500 w-[100px] shrink-0">주변정보</span>
                    <span className="text-gray-900 font-medium">{property.nearbyInfo}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Accordion 2: Price Information */}
            <div className="bg-white border border-gray-200 rounded mb-4">
              <div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center cursor-pointer">
                <div>
                  <span className="text-[12px] text-gray-500 block mb-0.5">Price Information</span>
                  <h3 className="font-bold text-[16px] text-gray-900">금액 정보</h3>
                </div>
                <FiChevronUp size={20} className="text-gray-400" />
              </div>
              <div className="p-5 text-[14px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                  <div className="flex">
                    <span className="text-gray-500 w-[100px] shrink-0">보증금</span>
                    <span className="text-gray-900 font-medium">{property.deposit}</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 w-[100px] shrink-0">월 임대료</span>
                    <span className="text-gray-900 font-medium">{property.monthlyRent}</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 w-[100px] shrink-0">관리비</span>
                    <span className="text-gray-900 font-medium">개별확인</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Accordion 3: Detail Information */}
            <div className="bg-white border border-gray-200 rounded mb-4">
              <div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center cursor-pointer">
                <div>
                  <span className="text-[12px] text-gray-500 block mb-0.5">Detail Information</span>
                  <h3 className="font-bold text-[16px] text-gray-900">상세 정보</h3>
                </div>
                <FiChevronUp size={20} className="text-gray-400" />
              </div>
              <div className="p-5 text-[14px] leading-relaxed text-gray-800">
                <p className="font-bold mb-4">{property.description}</p>
                <div className="space-y-1 text-gray-700">
                  <p>ㅇ 최상급 내외부 컨디션</p>
                  <p>ㅇ 높은 층고로 개방감 우수</p>
                  <p>ㅇ 렌트프리 협의 가능</p>
                  <p>ㅇ 주차 1대 무료 제공</p>
                </div>
              </div>
            </div>

            {/* Accordion 4: Rent Information Table */}
            <div className="bg-white border border-gray-200 rounded mb-4">
              <div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center cursor-pointer">
                <div>
                  <span className="text-[12px] text-gray-500 block mb-0.5">Rent Information</span>
                  <h3 className="font-bold text-[16px] text-gray-900 flex items-center gap-2">
                    임대 정보 
                  </h3>
                </div>
                <div className="flex items-center gap-3">
                  <button className="border border-gray-300 p-1.5 rounded text-gray-500 hover:bg-gray-50 text-[12px]">㎡ ↔ 평</button>
                  <FiChevronUp size={20} className="text-gray-400" />
                </div>
              </div>
              <div className="p-0 overflow-x-auto">
                <table className="w-full text-[13px] text-center whitespace-nowrap">
                  <thead className="bg-gray-50 text-gray-600 border-b border-gray-200">
                    <tr>
                      <th className="py-3 px-4 font-medium">층</th>
                      <th className="py-3 px-4 font-medium">업종</th>
                      <th className="py-3 px-4 font-medium">임대면적</th>
                      <th className="py-3 px-4 font-medium">보증금</th>
                      <th className="py-3 px-4 font-medium">임대료</th>
                      <th className="py-3 px-4 font-medium">관리비</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 text-gray-800">
                      <td className="py-4 px-4">해당층</td>
                      <td className="py-4 px-4">-</td>
                      <td className="py-4 px-4">{property.areaPyeong}</td>
                      <td className="py-4 px-4">{property.deposit}</td>
                      <td className="py-4 px-4">{property.monthlyRent}</td>
                      <td className="py-4 px-4">별도</td>
                    </tr>
                    <tr className="bg-[#fff9f2] font-bold text-teal border-t-2 border-teal/20">
                      <td className="py-4 px-4">합계</td>
                      <td className="py-4 px-4"></td>
                      <td className="py-4 px-4">{property.areaPyeong}</td>
                      <td className="py-4 px-4">{property.deposit}</td>
                      <td className="py-4 px-4">{property.monthlyRent}</td>
                      <td className="py-4 px-4">-</td>
                    </tr>
                  </tbody>
                </table>
                <div className="px-4 py-2 text-right text-[11px] text-gray-500">
                  * 임대료/관리비 부가세 별도
                </div>
              </div>
            </div>

            {/* Accordion 5: Map & Facility */}
            <div className="bg-white border border-gray-200 rounded mb-4">
              <div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center cursor-pointer">
                <div>
                  <span className="text-[12px] text-gray-500 block mb-0.5">Map & Facility</span>
                  <h3 className="font-bold text-[16px] text-gray-900">위치 및 주변 편의시설</h3>
                </div>
                <FiChevronUp size={20} className="text-gray-400" />
              </div>
              <div className="p-5">
                <div className="w-full aspect-[21/9] bg-gray-200 rounded mb-6 relative flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800')] bg-cover bg-center opacity-50 sepia-[.3]"></div>
                  <div className="w-32 h-32 bg-dark/60 rounded-full flex items-center justify-center z-10 animate-pulse border border-dark/20">
                    <div className="w-16 h-16 bg-teal/50 rounded-full"></div>
                  </div>
                  <div className="absolute top-2 right-2 flex gap-2">
                    <span className="bg-white px-2 py-1 text-[11px] font-bold rounded shadow-sm">카카오맵 (가상)</span>
                  </div>
                </div>
                
                {/* Facility Icons */}
                <div className="border-t border-gray-100 flex">
                  <button className="flex-1 py-3 text-center border-b-2 border-teal text-teal font-bold text-[14px]">편의시설</button>
                  <button className="flex-1 py-3 text-center border-b-2 border-transparent text-gray-400 hover:text-gray-600 text-[14px]">안전시설</button>
                  <button className="flex-1 py-3 text-center border-b-2 border-transparent text-gray-400 hover:text-gray-600 text-[14px]">교육시설</button>
                </div>
                <div className="flex justify-between items-center max-w-[500px] mx-auto mt-6">
                  {['지하철', '편의점', '카페', '은행', '관공서', '병원'].map((item) => (
                    <div key={item} className="flex flex-col items-center gap-2 cursor-pointer group">
                      <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:border-teal group-hover:text-teal transition">
                        <div className="w-4 h-4 bg-gray-300 rounded-sm group-hover:bg-teal/50"></div>
                      </div>
                      <span className="text-[12px] text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Right Sidebar (Sticky/35%) */}
          <div className="w-full lg:w-[32%] sticky top-[88px] space-y-4">
            
            {/* Major Info Box */}
            <div className="bg-white border border-gray-200 rounded">
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                <div>
                  <span className="text-[11px] text-gray-500 block mb-0.5">Major Info</span>
                  <h3 className="font-bold text-[15px] text-gray-900">주요 정보</h3>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-1.5 border border-gray-200 rounded text-gray-400 hover:text-teal hover:border-teal transition"><FiHeart size={16}/></button>
                  <button className="p-1.5 border border-gray-200 rounded text-gray-400 hover:text-dark transition"><FiShare2 size={16}/></button>
                  <button className="p-1.5 border border-gray-200 rounded text-gray-400 hover:text-dark transition"><FiLink size={16}/></button>
                </div>
              </div>
              
              <div className="p-5">
                <div className="text-[20px] font-bold text-dark mb-4 flex gap-1 items-baseline flex-wrap">
                  <span>보증금 <span className="text-teal">{property.deposit}</span></span>
                  <span className="text-gray-300 mx-1">|</span>
                  <span>월 임대료 <span className="text-teal">{property.monthlyRent}</span></span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-[13px] bg-gray-50/50 p-4 rounded -mx-1 mb-2 border border-gray-100">
                  <div>
                    <span className="text-gray-500 block mb-1">임대면적</span>
                    <span className="font-bold text-dark text-[14px]">{(parseFloat(property.areaPyeong) * 1.5).toFixed(2)}평</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block mb-1">전용면적</span>
                    <span className="font-bold text-dark text-[14px]">{property.areaPyeong}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Consultation Box */}
            <div className="bg-white border border-gray-200 rounded">
              <div className="p-5 border-b border-gray-100 flex items-center gap-4">
                <div className="w-14 h-14 bg-teal/10 rounded-full flex items-center justify-center text-teal font-black text-xl shrink-0">
                  G
                </div>
                <div>
                  <p className="text-[12px] font-bold text-gray-500 mb-0.5">매물문의 및 상담</p>
                  <p className="font-bold text-[15px] text-dark">부동산컨설팅부 <span className="text-teal">02-6959-1946</span></p>
                  <p className="font-medium text-[13px] text-gray-600 mt-0.5">대표번호 02-6959-1923</p>
                </div>
              </div>
              
              <div className="p-5 text-[12px] text-gray-500 leading-relaxed bg-[#fbfbfb]">
                <p><span className="text-dark font-medium">대표 : 김대표</span> | 주식회사 공실뉴스부동산중개법인</p>
                <p><span className="text-dark font-medium">소재지 :</span> 서울특별시 강남구 논현로 123</p>
                <p><span className="text-dark font-medium">중개등록번호 :</span> 11680-2023-00123</p>
              </div>

              <div className="p-5">
                <input 
                  type="text" 
                  placeholder="연락처" 
                  className="w-full border border-gray-300 rounded px-3 py-2.5 text-[14px] mb-3 focus:outline-none focus:border-teal"
                />
                <textarea 
                  placeholder="문의 사항을 남겨주세요"
                  rows={3}
                  className="w-full border border-gray-300 rounded px-3 py-2.5 text-[14px] mb-3 focus:outline-none focus:border-teal resize-none"
                ></textarea>
                
                <div className="flex items-center justify-between mb-4">
                  <label className="flex items-center gap-2 cursor-pointer text-[12px] text-gray-600">
                    <input type="checkbox" className="accent-teal w-3.5 h-3.5" />
                    개인정보수집 약관 동의
                  </label>
                  <button className="text-[11px] border border-gray-200 px-2 py-0.5 rounded text-gray-500 hover:bg-gray-50">약관보기</button>
                </div>

                <button className="w-full bg-teal hover:bg-teal/90 text-white font-bold py-3.5 rounded text-[15px] transition-colors shadow-[0_4px_10px_rgba(212,175,55,0.3)]">
                  상담신청하기
                </button>
              </div>
            </div>

            {/* Other Properties */}
            <div className="bg-white border border-gray-200 rounded">
              <div className="px-5 py-4 border-b border-gray-100">
                <span className="text-[11px] text-gray-500 block mb-0.5">Others</span>
                <h3 className="font-bold text-[15px] text-gray-900">해당 위치 다른 매물</h3>
              </div>
              <div className="p-4">
                <table className="w-full text-[12px] text-center">
                  <thead className="bg-[#f4f4f5] text-gray-500">
                    <tr>
                      <th className="py-2.5 px-2 font-medium">번호</th>
                      <th className="py-2.5 px-2 font-medium">금액 (보증금/월세)</th>
                      <th className="py-2.5 px-2 font-medium">전용면적</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={3} className="py-8 text-gray-400">매물이 없습니다.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
