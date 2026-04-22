'use client';

import { FaStar } from 'react-icons/fa';

export default function FloatingButtons02() {
  return (
    <>
      <div className="fixed bottom-6 left-4 z-50">
        <button className="w-12 h-12 rounded-xl bg-coral/90 hover:bg-coral text-white shadow-lg flex items-center justify-center flex-col gap-0.5 transition-colors">
          <FaStar size={18} />
          <span className="text-[8px] font-bold leading-none">즐겨찾기</span>
        </button>
      </div>
      <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3">
        <button className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg flex items-center justify-center flex-col transition-colors">
          <span className="text-[11px] font-black italic leading-none">blog</span>
          <span className="text-[8px] mt-0.5 leading-none">블로그</span>
        </button>
        <button className="w-14 h-14 rounded-full bg-yellow-400 hover:bg-yellow-500 text-dark shadow-lg flex items-center justify-center flex-col transition-colors">
          <span className="text-[11px] font-black leading-none">TALK</span>
          <span className="text-[8px] mt-0.5 leading-none">오픈채팅</span>
        </button>
      </div>
    </>
  );
}
