'use client';

import { useState } from 'react';
import { FiMapPin, FiHeart } from 'react-icons/fi';

const mockProperties = [
  { id: 1, type: '원룸', price: '300/35', tag: '월세', title: '[공단동] 풀옵션 햇살가득 원룸', location: '구미시 공단동', labels: ['풀옵션', '즉시입주'], img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&q=80' },
  { id: 2, type: '미투', price: '500/45', tag: '월세', title: '[진평동] 신축 첫입주 미투', location: '구미시 진평동', labels: ['신축', '주차가능'], img: 'https://images.unsplash.com/photo-1502672260266-1c1e5250ad11?w=500&q=80' },
  { id: 3, type: '투룸', price: '전세 7,000', tag: '전세', title: '[인동] 깔끔한 투룸 올리모델링', location: '구미시 인동', labels: ['올공사', '전세대출'], img: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=500&q=80' },
  { id: 4, type: '상가', price: '2,000/120', tag: '월세', title: '[구평동] 무권리 1층 대로변 상가', location: '구미시 구평동', labels: ['무권리', '1층'], img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=500&q=80' },
];

export default function PropertySection02() {
  const [activeTab, setActiveTab] = useState('추천매물');

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4">
        
        {/* Header & Tabs */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-6">
          <h2 className="text-3xl font-bold text-dark">
            <span className="text-teal">여기와방</span>의 추천 매물
          </h2>
          <div className="flex items-center gap-2">
            {['추천매물', '최신매물(원룸)', '최신매물(미투)'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-full text-[14px] font-bold transition-colors ${
                  activeTab === tab
                    ? 'bg-dark text-white'
                    : 'bg-gray-light text-gray-medium hover:bg-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockProperties.map((prop) => (
            <div key={prop.id} className="group cursor-pointer">
              {/* Image Box */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                <img src={prop.img} alt={prop.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3 bg-dark text-white text-[11px] font-bold px-2 py-1 rounded-full">
                  {prop.type}
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-coral hover:text-white transition-colors">
                  <FiHeart size={16} />
                </div>
              </div>

              {/* Info */}
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-coral font-bold text-[13px]">{prop.tag}</span>
                  <span className="text-dark font-black text-lg tracking-tight">{prop.price}</span>
                  <span className="text-gray-medium text-[13px]">만 원</span>
                </div>
                <h3 className="text-dark font-medium text-[15px] mb-2 truncate group-hover:text-teal transition-colors">
                  {prop.title}
                </h3>
                <div className="flex items-center gap-1.5 text-gray-medium text-[12px] mb-3">
                  <FiMapPin size={12} />
                  {prop.location}
                </div>
                {/* Labels */}
                <div className="flex items-center gap-1.5">
                  {prop.labels.map((label) => (
                    <span key={label} className="text-[11px] text-teal bg-teal-light border border-teal/20 px-2 py-0.5 rounded-md">
                      #{label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Button */}
        <div className="mt-12 text-center">
          <button className="border border-gray-border text-dark px-12 py-3.5 rounded-full text-[14px] font-bold hover:border-teal hover:text-teal transition-colors">
            매물 더보기
          </button>
        </div>
        
      </div>
    </section>
  );
}
