import React from 'react';
import Header from '@/components/templates/template02/Header02';
import Footer from '@/components/templates/template02/Footer02';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-pretendard">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80"
            alt="Office background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative text-center text-white px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">회사소개</h1>
            <p className="text-lg md:text-xl font-light opacity-90">최상의 전문성으로 비즈니스 공간의 가치를 더합니다</p>
          </div>
        </section>

        {/* CEO Message Section */}
        <section className="max-w-[1200px] mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3">
              <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
                  alt="CEO Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <span className="text-gold font-bold text-lg mb-2 block tracking-widest uppercase">CEO Message</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                안녕하십니까? <br />
                빌드온 중개법인 대표이사 남웅태입니다.
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                  빌드온은 단순한 부동산 중개를 넘어, 기업의 비즈니스 성공을 위한 최적의 파트너가 되고자 탄생했습니다.
                  우리는 변화하는 시장 환경 속에서 정확한 데이터 분석과 깊이 있는 전문성을 바탕으로 고객 한 분 한 분께 맞춤형 솔루션을 제공하고 있습니다.
                </p>
                <p>
                  상가, 사무실, 공장, 토지에 이르기까지 비즈니스 공간의 모든 영역에서 빌드온만의 검증된 네트워크와 노하우는
                  고객의 소중한 자산 가치를 극대화하는 가장 강력한 도구가 될 것입니다.
                </p>
                <p>
                  고객 여러분의 신뢰를 최우선 가치로 여기며, 정직하고 투명한 중개 문화를 선도해 나가겠습니다.
                  언제나 낮은 자세로 고객의 목소리에 귀 기울이며 함께 성장해 나가는 빌드온이 되겠습니다.
                </p>
              </div>
              <div className="mt-10 pt-6 border-t border-gray-100">
                <p className="text-gray-500 italic">빌드온 부동산 중개법인 대표 <span className="text-gray-900 font-bold not-italic ml-2">남 웅 태</span></p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="max-w-[1200px] mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">빌드온의 핵심 가치</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: '신뢰 (Trust)', desc: '정직하고 투명한 중개로 고객과의 두터운 믿음을 쌓아갑니다.', icon: '🤝' },
                { title: '전문성 (Expertise)', desc: '심층적인 시장 분석과 전문 지식으로 최상의 결과를 도출합니다.', icon: '💡' },
                { title: '열정 (Passion)', desc: '고객의 비즈니스 성공을 위해 멈추지 않는 열정으로 함께합니다.', icon: '🔥' },
              ].map((val, idx) => (
                <div key={idx} className="bg-white p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-5xl mb-6">{val.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{val.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="max-w-[1200px] mx-auto px-4 py-16 md:py-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">오시는 길</h2>
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-grow aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-sm">
              {/* Map Placeholder */}
              <div className="w-full h-full flex items-center justify-center text-gray-400 flex-col">
                <span className="text-4xl mb-2">📍</span>
                <p>Google Maps / Kakao Maps API 연동 예정 영역</p>
              </div>
            </div>
            <div className="lg:w-[350px] shrink-0 space-y-8">
              <div>
                <h4 className="text-sm font-bold text-gold uppercase tracking-widest mb-3">Address</h4>
                <p className="text-gray-800 leading-relaxed">
                  서울특별시 강남구 테헤란로 123 <br />
                  빌드온빌딩 5층
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gold uppercase tracking-widest mb-3">Contact</h4>
                <p className="text-gray-800">
                  대표전화: 02-598-9788 <br />
                  팩스: 02-598-9789 <br />
                  이메일: contact@buildon.com
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gold uppercase tracking-widest mb-3">Transport</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  지하철: 2호선 역삼역 4번 출구 도보 3분 <br />
                  버스: 역삼역/테헤란로 정류장 하차
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
