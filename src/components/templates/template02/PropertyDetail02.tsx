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
                  ?ъ쭊 ?ш쾶蹂닿린
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
                  <h3 className="font-bold text-[16px] text-gray-900">湲곕낯 ?뺣낫</h3>
                </div>
                <FiChevronUp size={20} className="text-gray-400" />
              </div>
              <div className="p-5 text-[14px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                  <div className="flex">
                    <span className="text-gray-500 w-[100px] shrink-0">二쇱냼</span>
                    <span className="text-gray-900 font-medium">{property.location}</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 w-[100px] shrink-0">?낆＜媛?μ씪</span>
                    <span className="text-gray-900 font-medium">?곸떆 / ?묒쓽</span>
                  </div>
                  <div className="flex md:col-span-2">
                    <span className="text-gray-500 w-[100px] shrink-0">二쇰??뺣낫</span>
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
                  <h3 className="font-bold text-[16px] text-gray-900">湲덉븸 ?뺣낫</h3>
                </div>
                <FiChevronUp size={20} className="text-gray-400" />
              </div>
              <div className="p-5 text-[14px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                  <div className="flex">
                    <span className="text-gray-500 w-[100px] shrink-0">蹂댁쬆湲?/span>
                    <span className="text-gray-900 font-medium">{property.deposit}</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 w-[100px] shrink-0">???꾨?猷?/span>
                    <span className="text-gray-900 font-medium">{property.monthlyRent}</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 w-[100px] shrink-0">愿由щ퉬</span>
                    <span className="text-gray-900 font-medium">媛쒕퀎?뺤씤</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Accordion 3: Detail Information */}
            <div className="bg-white border border-gray-200 rounded mb-4">
              <div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center cursor-pointer">
                <div>
                  <span className="text-[12px] text-gray-500 block mb-0.5">Detail Information</span>
                  <h3 className="font-bold text-[16px] text-gray-900">?곸꽭 ?뺣낫</h3>
                </div>
                <FiChevronUp size={20} className="text-gray-400" />
              </div>
              <div className="p-5 text-[14px] leading-relaxed text-gray-800">
                <p className="font-bold mb-4">{property.description}</p>
                <div className="space-y-1 text-gray-700">
                  <p>??理쒖긽湲??댁쇅遺 而⑤뵒??/p>
                  <p>???믪? 痢듦퀬濡?媛쒕갑媛??곗닔</p>
                  <p>???뚰듃?꾨━ ?묒쓽 媛??/p>
                  <p>??二쇱감 1? 臾대즺 ?쒓났</p>
                </div>
              </div>
            </div>

            {/* Accordion 4: Rent Information Table */}
            <div className="bg-white border border-gray-200 rounded mb-4">
              <div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center cursor-pointer">
                <div>
                  <span className="text-[12px] text-gray-500 block mb-0.5">Rent Information</span>
                  <h3 className="font-bold text-[16px] text-gray-900 flex items-center gap-2">
                    ?꾨? ?뺣낫 
                  </h3>
                </div>
                <div className="flex items-center gap-3">
                  <button className="border border-gray-300 p-1.5 rounded text-gray-500 hover:bg-gray-50 text-[12px]">??????/button>
                  <FiChevronUp size={20} className="text-gray-400" />
                </div>
              </div>
              <div className="p-0 overflow-x-auto">
                <table className="w-full text-[13px] text-center whitespace-nowrap">
                  <thead className="bg-gray-50 text-gray-600 border-b border-gray-200">
                    <tr>
                      <th className="py-3 px-4 font-medium">痢?/th>
                      <th className="py-3 px-4 font-medium">?낆쥌</th>
                      <th className="py-3 px-4 font-medium">?꾨?硫댁쟻</th>
                      <th className="py-3 px-4 font-medium">蹂댁쬆湲?/th>
                      <th className="py-3 px-4 font-medium">?꾨?猷?/th>
                      <th className="py-3 px-4 font-medium">愿由щ퉬</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 text-gray-800">
                      <td className="py-4 px-4">?대떦痢?/td>
                      <td className="py-4 px-4">-</td>
                      <td className="py-4 px-4">{property.areaPyeong}</td>
                      <td className="py-4 px-4">{property.deposit}</td>
                      <td className="py-4 px-4">{property.monthlyRent}</td>
                      <td className="py-4 px-4">蹂꾨룄</td>
                    </tr>
                    <tr className="bg-[#fff9f2] font-bold text-teal border-t-2 border-teal/20">
                      <td className="py-4 px-4">?⑷퀎</td>
                      <td className="py-4 px-4"></td>
                      <td className="py-4 px-4">{property.areaPyeong}</td>
                      <td className="py-4 px-4">{property.deposit}</td>
                      <td className="py-4 px-4">{property.monthlyRent}</td>
                      <td className="py-4 px-4">-</td>
                    </tr>
                  </tbody>
                </table>
                <div className="px-4 py-2 text-right text-[11px] text-gray-500">
                  * ?꾨?猷?愿由щ퉬 遺媛??蹂꾨룄
                </div>
              </div>
            </div>

            {/* Accordion 5: Map & Facility */}
            <div className="bg-white border border-gray-200 rounded mb-4">
              <div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center cursor-pointer">
                <div>
                  <span className="text-[12px] text-gray-500 block mb-0.5">Map & Facility</span>
                  <h3 className="font-bold text-[16px] text-gray-900">?꾩튂 諛?二쇰? ?몄쓽?쒖꽕</h3>
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
                    <span className="bg-white px-2 py-1 text-[11px] font-bold rounded shadow-sm">移댁뭅?ㅻ㏊ (媛??</span>
                  </div>
                </div>
                
                {/* Facility Icons */}
                <div className="border-t border-gray-100 flex">
                  <button className="flex-1 py-3 text-center border-b-2 border-teal text-teal font-bold text-[14px]">?몄쓽?쒖꽕</button>
                  <button className="flex-1 py-3 text-center border-b-2 border-transparent text-gray-400 hover:text-gray-600 text-[14px]">?덉쟾?쒖꽕</button>
                  <button className="flex-1 py-3 text-center border-b-2 border-transparent text-gray-400 hover:text-gray-600 text-[14px]">援먯쑁?쒖꽕</button>
                </div>
                <div className="flex justify-between items-center max-w-[500px] mx-auto mt-6">
                  {['吏?섏쿋', '?몄쓽??, '移댄럹', '???, '愿怨듭꽌', '蹂묒썝'].map((item) => (
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
                  <h3 className="font-bold text-[15px] text-gray-900">二쇱슂 ?뺣낫</h3>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-1.5 border border-gray-200 rounded text-gray-400 hover:text-teal hover:border-teal transition"><FiHeart size={16}/></button>
                  <button className="p-1.5 border border-gray-200 rounded text-gray-400 hover:text-dark transition"><FiShare2 size={16}/></button>
                  <button className="p-1.5 border border-gray-200 rounded text-gray-400 hover:text-dark transition"><FiLink size={16}/></button>
                </div>
              </div>
              
              <div className="p-5">
                <div className="text-[20px] font-bold text-dark mb-4 flex gap-1 items-baseline flex-wrap">
                  <span>蹂댁쬆湲?<span className="text-teal">{property.deposit}</span></span>
                  <span className="text-gray-300 mx-1">|</span>
                  <span>???꾨?猷?<span className="text-teal">{property.monthlyRent}</span></span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-[13px] bg-gray-50/50 p-4 rounded -mx-1 mb-2 border border-gray-100">
                  <div>
                    <span className="text-gray-500 block mb-1">?꾨?硫댁쟻</span>
                    <span className="font-bold text-dark text-[14px]">{(parseFloat(property.areaPyeong) * 1.5).toFixed(2)}??/span>
                  </div>
                  <div>
                    <span className="text-gray-500 block mb-1">?꾩슜硫댁쟻</span>
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
                  <p className="text-[12px] font-bold text-gray-500 mb-0.5">留ㅻЪ臾몄쓽 諛??곷떞</p>
                  <p className="font-bold text-[15px] text-dark">遺?숈궛而⑥꽕?낅? <span className="text-teal">02-6959-1946</span></p>
                  <p className="font-medium text-[13px] text-gray-600 mt-0.5">??쒕쾲??02-6959-1923</p>
                </div>
              </div>
              
              <div className="p-5 text-[12px] text-gray-500 leading-relaxed bg-[#fbfbfb]">
                <p><span className="text-dark font-medium">???: 源???/span> | 二쇱떇?뚯궗 怨듭떎?댁뒪遺?숈궛以묎컻踰뺤씤</p>
                <p><span className="text-dark font-medium">?뚯옱吏 :</span> ?쒖슱?밸퀎??媛뺣궓援??쇳쁽濡?123</p>
                <p><span className="text-dark font-medium">以묎컻?깅줉踰덊샇 :</span> 11680-2023-00123</p>
              </div>

              <div className="p-5">
                <input 
                  type="text" 
                  placeholder="?곕씫泥? 
                  className="w-full border border-gray-300 rounded px-3 py-2.5 text-[14px] mb-3 focus:outline-none focus:border-teal"
                />
                <textarea 
                  placeholder="臾몄쓽 ?ы빆???④꺼二쇱꽭??
                  rows={3}
                  className="w-full border border-gray-300 rounded px-3 py-2.5 text-[14px] mb-3 focus:outline-none focus:border-teal resize-none"
                ></textarea>
                
                <div className="flex items-center justify-between mb-4">
                  <label className="flex items-center gap-2 cursor-pointer text-[12px] text-gray-600">
                    <input type="checkbox" className="accent-teal w-3.5 h-3.5" />
                    媛쒖씤?뺣낫?섏쭛 ?쎄? ?숈쓽
                  </label>
                  <button className="text-[11px] border border-gray-200 px-2 py-0.5 rounded text-gray-500 hover:bg-gray-50">?쎄?蹂닿린</button>
                </div>

                <button className="w-full bg-teal hover:bg-teal/90 text-white font-bold py-3.5 rounded text-[15px] transition-colors shadow-[0_4px_10px_rgba(212,175,55,0.3)]">
                  ?곷떞?좎껌?섍린
                </button>
              </div>
            </div>

            {/* Other Properties */}
            <div className="bg-white border border-gray-200 rounded">
              <div className="px-5 py-4 border-b border-gray-100">
                <span className="text-[11px] text-gray-500 block mb-0.5">Others</span>
                <h3 className="font-bold text-[15px] text-gray-900">?대떦 ?꾩튂 ?ㅻⅨ 留ㅻЪ</h3>
              </div>
              <div className="p-4">
                <table className="w-full text-[12px] text-center">
                  <thead className="bg-[#f4f4f5] text-gray-500">
                    <tr>
                      <th className="py-2.5 px-2 font-medium">踰덊샇</th>
                      <th className="py-2.5 px-2 font-medium">湲덉븸 (蹂댁쬆湲??붿꽭)</th>
                      <th className="py-2.5 px-2 font-medium">?꾩슜硫댁쟻</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={3} className="py-8 text-gray-400">留ㅻЪ???놁뒿?덈떎.</td>
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

