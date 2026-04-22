'use client';

import React from 'react';

export default function Template02TermsPage() {
  const settings = {
    company_name: '여기와방',
    ceo_name: '원룸전문가',
    contact_number: '010-2373-9378',
    email: 'info@herebang.com',
    address: '서울특별시 마포구 인근',
    custom_terms: '', 
  };

  const defaultTerms = \`제1조 (목적)
본 약관은 \${settings.company_name}(이하 "회사"라 합니다)가 제공하는 인터넷 웹사이트 및 관련 서비스의 이용과 관련하여 회사와 회원 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.

제2조 (용어의 정의)
1. "서비스"라 함은 구현되는 단말기와 상관없이 회원이 이용할 수 있는 회사의 홈페이지 및 관련 부가서비스 일체를 의미합니다.
2. "회원"이라 함은 회사의 서비스에 접속하여 본 약관에 따라 회사와 이용계약을 체결하고 회사가 제공하는 서비스를 이용하는 고객을 말합니다.

제3조 (약관의 게시와 개정)
1. 회사는 본 약관의 내용을 회원이 쉽게 알 수 있도록 초기 서비스화면에 게시합니다.
2. 회사는 "약관의 규제에 관한 법률", "정보통신망 이용촉진 및 정보보호 등에 관한 법률" 등 관련 법을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.

제4조 (회사의 의무)
1. 회사는 관련법과 본 약관이 금지하거나 미풍양속에 반하는 행위를 하지 않으며, 계속적이고 안정적으로 서비스를 제공하기 위하여 최선을 다하여 노력합니다.
2. 회사는 회원이 안전하게 서비스를 이용할 수 있도록 개인정보 보호를 위한 보안시스템을 갖추어야 하며 개인정보처리방침을 공시하고 준수합니다.

<부칙>
본 약관은 2026년 4월 22일부터 적용됩니다.

[회사 정보 안내]
상호: \${settings.company_name}
대표자: \${settings.ceo_name}
연락처: \${settings.contact_number}
주소: \${settings.address}\`;

  return (
    <div className="max-w-[800px] mx-auto px-4 py-16">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-dark mb-2">이용약관</h1>
        <p className="text-gray-medium text-[14px]">서비스 이용을 위한 약관 안내입니다.</p>
      </div>
      
      <div className="bg-white border border-gray-border rounded-2xl p-8 shadow-sm min-h-[500px]">
        {settings.custom_terms ? (
          <div 
            className="prose max-w-none text-gray-700 leading-relaxed text-[14px]"
            dangerouslySetInnerHTML={{ __html: settings.custom_terms }}
          />
        ) : (
          <div className="whitespace-pre-wrap text-gray-700 leading-loose text-[14px]">
            {defaultTerms}
          </div>
        )}
      </div>
    </div>
  );
}
