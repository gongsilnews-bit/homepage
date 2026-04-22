import React from 'react';
import Link from 'next/link';

const MOCK_POSTS = [
  { id: 1, title: '빌드온 부동산 홈페이지 오픈을 축하합니다!', author: '관리자', date: '2026.04.21', views: 125 },
  { id: 2, title: '역삼역 인근 가성비 좋은 사무실 추천 부탁드립니다.', author: '이정훈', date: '2026.04.20', views: 82 },
  { id: 3, title: '강남 지역 상가 임대 시 유의사항이 있을까요?', author: '김미영', date: '2026.04.19', views: 243 },
  { id: 4, title: '무료 주차 가능한 지식산업센터 찾고 있습니다.', author: '박준서', date: '2026.04.18', views: 56 },
  { id: 5, title: '관리비 포함 여부 확인하는 법', author: '최상민', date: '2026.04.17', views: 91 },
];

export default function BoardPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-pretendard">
      <Header />

      <main className="flex-grow w-full max-w-[1000px] mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 border-b-2 border-gray-900 pb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">자유게시판</h1>
            <p className="text-gray-500 text-sm">빌드온 고객님들의 자유로운 소통 공간입니다.</p>
          </div>
          <Link 
            href="/board/write" 
            className="inline-block bg-gold text-white px-6 py-2.5 rounded font-bold hover:bg-[#d59800] transition-colors shadow-sm"
          >
            글쓰기
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-4 py-4 text-sm font-bold text-gray-700 w-16 text-center">번호</th>
                <th className="px-4 py-4 text-sm font-bold text-gray-700">제목</th>
                <th className="px-4 py-4 text-sm font-bold text-gray-700 w-24 text-center">작성자</th>
                <th className="px-4 py-4 text-sm font-bold text-gray-700 w-32 text-center">날짜</th>
                <th className="px-4 py-4 text-sm font-bold text-gray-700 w-16 text-center">조회</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_POSTS.map((post) => (
                <tr key={post.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-4 text-sm text-gray-400 text-center">{post.id}</td>
                  <td className="px-4 py-4 text-[15px] font-medium text-gray-800">
                    <Link href={`/board/${post.id}`} className="hover:text-gold">
                      {post.title}
                    </Link>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600 text-center">{post.author}</td>
                  <td className="px-4 py-4 text-sm text-gray-400 text-center">{post.date}</td>
                  <td className="px-4 py-4 text-sm text-gray-400 text-center">{post.views}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Placeholder */}
        <div className="flex justify-center mt-12 gap-2">
          {[1, 2, 3, 4, 5].map((num) => (
            <button 
              key={num} 
              className={`w-9 h-9 rounded flex items-center justify-center text-sm font-medium border transition-all ${
                num === 1 ? 'bg-gold border-gold text-white' : 'border-gray-200 text-gray-500 hover:border-gold hover:text-gold'
              }`}
            >
              {num}
            </button>
          ))}
        </div>

        {/* Search Box */}
        <div className="mt-12 flex justify-center">
          <div className="flex w-full max-w-sm border border-gray-300 rounded-lg overflow-hidden focus-within:border-gold transition-colors">
            <select className="bg-gray-50 px-3 text-sm border-r outline-none">
              <option>제목</option>
              <option>본문</option>
              <option>작성자</option>
            </select>
            <input 
              type="text" 
              placeholder="검색어를 입력하세요" 
              className="flex-grow px-4 py-2 outline-none text-sm"
            />
            <button className="px-4 py-2 bg-gray-50 hover:bg-gray-100 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
