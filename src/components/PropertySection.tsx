'use client';

import { useState, useMemo } from 'react';
import PropertyCard from './PropertyCard';
import { sampleProperties } from '@/data/sampleData';

const filterTabs = [
  { label: '전체', min: 0, max: Infinity },
  { label: '50평 미만', min: 0, max: 50 },
  { label: '50~100평 미만', min: 50, max: 100 },
  { label: '100~200평 미만', min: 100, max: 200 },
  { label: '200평 이상', min: 200, max: Infinity },
];

function extractPyeong(areaPyeong: string): number {
  if (areaPyeong === '-') return 0;
  const match = areaPyeong.match(/([\d.]+)/);
  return match ? parseFloat(match[1]) : 0;
}

export default function PropertySection() {
  const [activeTab, setActiveTab] = useState(0);

  const filteredProperties = useMemo(() => {
    const tab = filterTabs[activeTab];
    if (activeTab === 0) return sampleProperties;
    return sampleProperties.filter((p) => {
      const pyeong = extractPyeong(p.areaPyeong);
      return pyeong >= tab.min && pyeong < tab.max;
    });
  }, [activeTab]);

  return (
    <section className="py-16 px-4 bg-gray-light">
      <div className="max-w-[1280px] mx-auto">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-[26px] font-bold text-dark mb-2">평형별 최신 상가·사무실</h2>
          <p className="text-gray-medium text-[14px]">원하시는 평형대의 상가·사무실 매물을 확인해보세요</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex border border-gray-border rounded-lg overflow-hidden">
            {filterTabs.map((tab, idx) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-2.5 text-[14px] font-medium transition-colors ${
                  idx === activeTab
                    ? 'bg-white text-gold border-b-2 border-gold'
                    : 'bg-white text-dark hover:text-gold'
                } ${idx > 0 ? 'border-l border-gray-border' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-medium text-[15px]">해당 평형대의 매물이 없습니다.</p>
          </div>
        )}

        {/* More Button */}
        <div className="text-center mt-10">
          <a
            href="/properties"
            className="inline-block border-2 border-gold text-gold hover:bg-gold hover:text-white font-bold text-[15px] px-12 py-3.5 rounded-lg transition-colors"
          >
            더보기
          </a>
        </div>
      </div>
    </section>
  );
}
