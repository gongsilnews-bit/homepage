'use client';

import React from 'react';

export default function Template01TermsPage() {
  // TODO: 실제 적용 시에는 DB(tenant_settings DB)에서 값을 가져옵니다.
  const settings = {
    company_name: '빌드온 부동산 중개법인',
    ceo_name: '남웅태',
    contact_number: '02-598-9788',
    email: 'contact@buildon.com',
    address: '서울특별시 강남구 테헤란로 123 빌드온빌딩 5층',
    // 관리자가 에디터를 통해 덮어씌운 커스텀 약관이 있다면 이 필드를 사용합니다.
    custom_terms: '', 
  };

  const defaultTerms = [
    '제1조 (목적)',
    `본 약관은 ${settings.company_name}(이하 "회사"라 합니다)가 제공하는 인터넷 웹사이트 및 관련 서비스의 이용과 관련하여 회사와 회원 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.`,
    '',
    '제2조 (용어의 정의)',
    '1. "서비스"라 함은 구현되는 단말기와 상관없이 회원이 이용할 수 있는 회사의 홈페이지 및 관련 부가서비스 일체를 의미합니다.',
    '2. "회원"이라 함은 회사의 서비스에 접속하여 본 약관에 따라 회사와 이용계약을 체결하고 회사가 제공하는 서비스를 이용하는 고객을 말합니다.',
    '',
    '제3조 (약관의 게시와 개정)',
    '1. 회사는 본 약관의 내용을 회원이 쉽게 알 수 있도록 초기 서비스화면에 게시합니다.',
    '2. 회사는 "약관의 규제에 관한 법률", "정보통신망 이용촉진 및 정보보호 등에 관한 법률" 등 관련 법을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.',
    '',
    '제4조 (회사의 의무)',
    '1. 회사는 관련법과 본 약관이 금지하거나 미풍양속에 반하는 행위를 하지 않으며, 계속적이고 안정적으로 서비스를 제공하기 위하여 최선을 다하여 노력합니다.',
    '2. 회사는 회원이 안전하게 서비스를 이용할 수 있도록 개인정보 보호를 위한 보안시스템을 갖추어야 하며 개인정보처리방침을 공시하고 준수합니다.',
    '',
    '제5조 (면책 조항)',
    '1. 회사는 무료로 제공되는 서비스 이용과 관련하여 관련법에 특별한 규정이 없는 한 책임을 지지 않습니다.',
    '2. 회사는 부동산 중개 과정에서 발생하는 계약 당사자 간의 불법 혹은 부당한 거래로 인한 분쟁에 대해 책임을 지지 않으며, 중개보수 등 관련 법령에 따른 책임만을 부담합니다.',
    '',
    '<부칙>',
    '본 약관은 2026년 4월 22일부터 적용됩니다.',
    '',
    '[회사 정보 안내]',
    `상호: ${settings.company_name}`,
    `대표자: ${settings.ceo_name}`,
    `연락처: ${settings.contact_number}`,
    `주소: ${settings.address}`
  ].join('\\n');

  return (
    <div className="max-w-[1024px] mx-auto px-4 py-16 md:py-24">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center tracking-tight">이용약관</h1>
      
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 md:p-12 shadow-sm min-h-[500px]">
        {settings.custom_terms ? (
          // 관리자가 직접 입력한 커스텀 약관이 있을 경우 (에디터 출력)
          <div 
            className="prose max-w-none text-gray-700 leading-relaxed text-[15px]"
            dangerouslySetInnerHTML={{ __html: settings.custom_terms }}
          />
        ) : (
          // 커스텀 약관이 없을 경우, 치환자가 적용된 기본 약관 노출
          <div className="whitespace-pre-wrap text-gray-700 leading-loose text-[15px]">
            {defaultTerms}
          </div>
        )}
      </div>
    </div>
  );
}
