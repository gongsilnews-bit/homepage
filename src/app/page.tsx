import React from 'react';

export default function PlatformLandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center font-pretendard">
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-lg w-full m-4">
        <h1 className="text-[28px] font-bold text-gray-900 mb-4 tracking-tight">공실뉴스 SaaS 뷰 엔진</h1>
        <p className="text-[15px] text-gray-600 mb-8 leading-relaxed">
          이 곳은 공실뉴스 파트너 중개사를 위한 <br/>
          <strong>맞춤형 템플릿 서빙 전용 서버</strong>입니다.<br/><br/>
          할당된 서브도메인을 통해 각 부동산의<br/>
          전용 홈페이지로 정상 접근하실 수 있습니다.
        </p>
        <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 mb-6 text-left">
          <p className="text-[14px] text-blue-800 font-bold mb-2">💡 로컬 개발 테스트 안내</p>
          <ul className="text-[13px] text-blue-700 list-disc list-inside space-y-1.5 font-medium border-t border-blue-200 pt-3">
            <li>
              <span>테스트 접속: </span>
              <a href="http://localhost:3001" className="underline font-bold text-blue-900 hover:text-blue-600">http://localhost:3001</a>
              <span className="text-blue-500 font-normal"> (기본값: test-agent)</span>
            </li>
            <li>
              <span>서브도메인 접속: </span>
              <span className="font-bold text-blue-900">http://[아이디].localhost:3001</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
