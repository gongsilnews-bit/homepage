'use client';

import { FiSearch } from 'react-icons/fi';

const themes = [
  { id: 1, enName: 'Inexpensive', krName: '#시세이하 매물', color: 'from-purple-900/70' },
  { id: 2, enName: '1st Floor/Retail', krName: '#1층/리테일', color: 'from-blue-900/70' },
  { id: 3, enName: 'Prime Office', krName: '#프라임 오피스', color: 'from-slate-900/70' },
  { id: 4, enName: 'Interior', krName: '#인테리어', color: 'from-emerald-900/70' },
  { id: 5, enName: 'Whole Building', krName: '#통건물', color: 'from-orange-900/70' },
  { id: 6, enName: 'Academy/Hospital', krName: '#학원/병원', color: 'from-rose-900/70' },
  { id: 7, enName: 'Basement/Studio', krName: '#지하/스튜디오', color: 'from-indigo-900/70' },
  { id: 8, enName: 'Residential', krName: '#주택형 사무실', color: 'from-teal-900/70' },
  { id: 9, enName: 'Boulevard Office', krName: '#대로변 사무실', color: 'from-amber-900/70' },
  { id: 10, enName: 'Station Sphere', krName: '#역세권', color: 'from-cyan-900/70' },
  { id: 11, enName: 'Terrace', krName: '#테라스', color: 'from-lime-900/70' },
  { id: 12, enName: 'New Building', krName: '#신축 첫임대', color: 'from-pink-900/70' },
  { id: 13, enName: 'Housing', krName: '#주택', color: 'from-violet-900/70' },
];

// 테마별 이미지 키워드 (unsplash placeholder 대용)
const themeImages: Record<number, string> = {
  1: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
  2: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
  3: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
  4: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop',
  5: 'https://images.unsplash.com/photo-1464938050520-ef2571e0c6c7?w=400&h=300&fit=crop',
  6: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
  7: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop',
  8: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop',
  9: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop',
  10: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=400&h=300&fit=crop',
  11: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop',
  12: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=300&fit=crop',
  13: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&h=300&fit=crop',
};

export default function ThemeSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-[1280px] mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-[26px] font-bold text-dark mb-2">테마별 상가·사무실</h2>
          <p className="text-gray-medium text-[14px]">원하시는 테마로 상가·사무실 매물을 한눈에 찾아보세요</p>
        </div>

        {/* Grid: 5 columns, 3 rows */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {themes.map((theme) => (
            <a
              key={theme.id}
              href={`/theme/${theme.id}`}
              className="theme-card aspect-[4/3] rounded-lg"
            >
              {/* Background Image */}
              <img
                src={themeImages[theme.id]}
                alt={theme.krName}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Text overlay */}
              <div className="card-text">
                <p className="text-[11px] text-white/70 italic mb-0.5">{theme.enName}</p>
                <p className="text-[16px] font-bold text-white">{theme.krName}</p>
              </div>

              {/* Search icon */}
              <div className="search-icon">
                <FiSearch className="text-white" size={16} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
