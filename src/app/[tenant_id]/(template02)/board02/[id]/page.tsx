import React from 'react';
import Link from 'next/link';
import Header02 from '@/components/templates/template02/Header02';
import Footer02 from '@/components/templates/template02/Footer02';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function BoardDetailPage({ params }: { params: any }) {
  // Mock detail data
  const post = {
    id: params?.id || 1,
    title: '빌드온 부동산 홈페이지 오픈을 축하합니다!',
    author: '관리자',
    date: '2026.04.21 14:30',
    views: 125,
    content: `
      안녕하세요. 빌드온 부동산입니다.
      이번에 저희 홈페이지를 새롭게 단장하여 오픈하게 되었습니다.
      
      앞으로 이곳을 통해 상가, 사무실, 공장 등 비즈니스 전문 매물 정보와
      유익한 부동산 뉴스를 신속하게 전달해 드릴 예정입니다.
      
      자유게시판은 여러분의 소중한 의견을 나누는 공간입니다.
      많은 이용과 성원 부탁드립니다.
      
      감사합니다.
    `
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-pretendard">
      <Header02 />

      <main className="flex-grow w-full max-w-[1000px] mx-auto px-4 py-16">
        {/* Post Header */}
        <div className="border-t-2 border-gray-900 border-b border-gray-100 py-8 px-6 bg-gray-50/50">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
            <span className="font-bold text-gray-800">{post.author}</span>
            <span className="w-px h-3 bg-gray-300"></span>
            <span>날짜: {post.date}</span>
            <span className="w-px h-3 bg-gray-300"></span>
            <span>조회수: {post.views}</span>
          </div>
        </div>

        {/* Post content */}
        <div className="py-12 px-6 text-gray-800 leading-loose whitespace-pre-wrap border-b border-gray-100 min-h-[300px]">
          {post.content}
        </div>

        {/* Buttons */}
        <div className="py-10 flex flex-col sm:flex-row justify-between gap-4">
          <Link 
            href="/board" 
            className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded text-center transition-colors border border-gray-200"
          >
            목록으로
          </Link>
          <div className="flex gap-2">
            <button className="px-6 py-2.5 bg-white border border-gray-200 hover:border-gray-400 text-gray-700 font-bold rounded transition-colors">수정</button>
            <button className="px-6 py-2.5 bg-white border border-gray-200 hover:border-red-400 hover:text-red-500 text-gray-700 font-bold rounded transition-colors">삭제</button>
          </div>
        </div>

        {/* Simple Comment Field (Pseudo) */}
        <div className="mt-10">
          <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
            댓글 <span className="text-gold">0</span>
          </h3>
          <div className="border border-gray-200 rounded-lg p-5">
            <textarea 
              placeholder="댓글을 작성해 주세요"
              className="w-full h-24 outline-none resize-none text-[15px]"
            ></textarea>
            <div className="flex justify-end mt-4">
              <button className="bg-gray-800 text-white px-8 py-2.5 rounded font-bold hover:bg-black transition-colors text-sm">
                등록
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer02 />
    </div>
  );
}
