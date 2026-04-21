import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GridPropertyCard from '@/components/GridPropertyCard';

const MOCK_PROPERTIES = Array.from({ length: 16 }).map((_, i) => ({
  id: `mock-${i}`,
  imageUrl: `https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80`,
  isRecommended: i === 0 || i === 5,
  propertyNo: `${12845 + i}`,
  location: i % 3 === 0 ? "서울특별시 강남구 역삼동" : i % 2 === 0 ? "서울특별시 한남동" : "서울특별시 성수동1가",
  title: i % 4 === 0 ? "강남대로변 초역세권 신축급 인테리어 사무실" : i % 3 === 0 ? "테라스가 있는 프라이빗 단독주택형 오피스" : "전망이 우수한 고층 통유리 코너 사무실",
  exclusiveArea: 45 + (i * 12) % 150,
  deposit: `${(i % 4 + 1) * 3}000만`,
  monthlyRent: `${(i % 4 + 1) * 150}만`,
  subwayInfo: i % 2 === 0 ? "강남역 도보 3분" : "성수역 도보 5분"
}));

export default function PropertiesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fbfbfb] font-pretendard">
      <Header />
      
      {/* Main Layout Container */}
      <main className="flex-grow max-w-[1440px] w-full mx-auto px-6 py-10 flex flex-col md:flex-row gap-10">
        
        {/* Left Sidebar (Filters) */}
        <aside className="w-full md:w-[240px] flex-shrink-0">
          <div className="bg-white border border-gray-200 rounded-lg p-5 sticky top-[88px] shadow-sm">
            
            {/* Top Links */}
            <div className="mb-6 space-y-3">
              <a href="#" className="block text-[15px] font-bold text-gold cursor-pointer hover:underline">전체 매물 보기</a>
              <a href="#" className="block text-[15px] font-medium text-gray-700 cursor-pointer hover:text-gold">추천 매물 보기</a>
            </div>

            <hr className="border-gray-100 my-4" />

            {/* Area Filter Accordion */}
            <div className="mb-4">
              <h3 className="text-[14px] font-bold text-gray-900 mb-3 flex justify-between items-center cursor-pointer">
                평형별
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </h3>
              <ul className="space-y-2.5 text-[13px] text-gray-600 pl-1">
                <li className="cursor-pointer hover:text-gold">50평 미만</li>
                <li className="cursor-pointer hover:text-gold">50평~100평</li>
                <li className="cursor-pointer hover:text-gold">100평~200평</li>
                <li className="cursor-pointer hover:text-gold">200평 이상</li>
                <li className="cursor-pointer hover:text-gold">시세이하 매물</li>
              </ul>
            </div>

            <hr className="border-gray-100 my-4" />

            {/* Theme Filter Accordion */}
            <div>
              <h3 className="text-[14px] font-bold text-gray-900 mb-3 flex justify-between items-center cursor-pointer">
                테마종류
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </h3>
              <ul className="space-y-2.5 text-[13px] text-gray-600 pl-1">
                <li className="flex items-center gap-2 cursor-pointer hover:text-gold">
                  <input type="checkbox" className="accent-gold cursor-pointer" /> 1층/리테일
                </li>
                <li className="flex items-center gap-2 cursor-pointer hover:text-gold">
                  <input type="checkbox" className="accent-gold cursor-pointer" /> 프라임 오피스
                </li>
                <li className="flex items-center gap-2 cursor-pointer hover:text-gold">
                  <input type="checkbox" className="accent-gold cursor-pointer" /> 인테리어
                </li>
                <li className="flex items-center gap-2 cursor-pointer hover:text-gold">
                  <input type="checkbox" className="accent-gold cursor-pointer" /> 통건물
                </li>
                <li className="flex items-center gap-2 cursor-pointer hover:text-gold">
                  <input type="checkbox" className="accent-gold cursor-pointer" /> 지하/스튜디오
                </li>
                <li className="flex items-center gap-2 cursor-pointer hover:text-gold">
                  <input type="checkbox" className="accent-gold cursor-pointer" /> 주택형 사무실
                </li>
                <li className="flex items-center gap-2 cursor-pointer hover:text-gold">
                  <input type="checkbox" className="accent-gold cursor-pointer" /> 테라스
                </li>
              </ul>
            </div>
          </div>
        </aside>

        {/* Right Content Area */}
        <div className="flex-1 min-w-0">
          
          {/* Top Filter Bar */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4">
            
            {/* Search Input */}
            <div className="relative w-full sm:w-[280px]">
              <input 
                type="text" 
                placeholder="지역명, 지하철역명 입력" 
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded text-[14px] focus:outline-none focus:border-gold transition-colors"
                style={{ fontFamily: 'inherit' }}
              />
              <svg className="absolute left-3 top-2.5 text-gray-400" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>

            {/* Sort & Filters */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <select className="bg-white border border-gray-200 text-gray-700 text-[13px] py-2 px-3 rounded focus:outline-none cursor-pointer">
                <option>추천순</option>
                <option>최신순</option>
                <option>면적넓은순</option>
                <option>보증금낮은순</option>
              </select>
              
              <button className="text-[13px] text-gray-500 hover:text-gray-900 border border-gray-200 bg-white px-3 py-2 rounded flex items-center gap-1 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>
                초기화
              </button>

              <a href="/map" className="ml-auto sm:ml-0 text-[13px] bg-dark text-white hover:bg-gold px-4 py-2 rounded font-medium transition-colors flex items-center gap-1 text-center whitespace-nowrap">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                지도로 매물보기
              </a>
            </div>
          </div>

          {/* Result Count */}
          <div className="mb-4">
            <span className="text-[14px] font-bold text-gray-900">검색결과 {MOCK_PROPERTIES.length}건</span>
          </div>

          {/* Grid Layout taking 4 columns on extremely large screens, 3 on large, 2 on medium */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {MOCK_PROPERTIES.map((prop) => (
              <GridPropertyCard key={prop.id} {...prop} />
            ))}
          </div>

          {/* Pagination (Mock) */}
          <div className="flex justify-center items-center gap-2 mt-12 mb-8">
            <button className="w-8 h-8 flex items-center justify-center border border-gray-200 bg-white text-gray-400 hover:text-dark rounded"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg></button>
            <button className="w-8 h-8 flex items-center justify-center border border-gold bg-gold text-white rounded font-bold text-[14px]">1</button>
            <button className="w-8 h-8 flex items-center justify-center border border-gray-200 bg-white text-gray-600 hover:border-gray-300 rounded font-medium text-[14px]">2</button>
            <button className="w-8 h-8 flex items-center justify-center border border-gray-200 bg-white text-gray-600 hover:border-gray-300 rounded font-medium text-[14px]">3</button>
            <button className="w-8 h-8 flex items-center justify-center border border-gray-200 bg-white text-gray-400 hover:text-dark rounded"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg></button>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
