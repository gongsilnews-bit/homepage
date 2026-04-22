'use client';

import React from 'react';

export default function Template01PrivacyPage() {
  // TODO: 실제 적용 시에는 DB(tenant_settings DB)에서 값을 가져옵니다.
  const settings = {
    company_name: '빌드온 부동산 중개법인',
    ceo_name: '남웅태',
    contact_number: '02-598-9788',
    email: 'contact@buildon.com',
    address: '서울특별시 강남구 테헤란로 123 빌드온빌딩 5층',
    custom_privacy: '', // 관리자 직접 입력용
  };

  const defaultPrivacy = [
    `${settings.company_name} (이하 "회사"라 합니다)는 이용자의 개인정보를 중요시하며, "정보통신망 이용촉진 및 정보보호 등에 관한 법률" 및 "개인정보보호법"을 준수하고 있습니다.`,
    '',
    '제1조 (수집하는 개인정보 항목 및 수집방법)',
    '1. 수집항목: 성함, 연락처, 이메일, 접속 IP 정보, 희망 거주지역 및 예산 등 매물 의뢰와 관련된 필수/선택 정보',
    '2. 수집방법: 홈페이지 문의하기(매물 구해요/내놔요) 폼, 전화상담, 게시판 등록 등',
    '',
    '제2조 (개인정보의 수집 및 이용목적)',
    '회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.',
    '1. 부동산 중개 서비스 제공 및 중개 의뢰에 따른 매물 매칭 및 상담',
    '2. 마케팅 및 광고에의 활용 (고객 동의 시)',
    '3. 서비스 제공에 관한 계약 이행 및 기타 안내사항 전달',
    '',
    '제3조 (개인정보의 보유 및 이용기간)',
    '원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.',
    '다만, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.',
    '- 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년 (전자상거래 등에서의 소비자보호에 관한 법률)',
    '- 방문에 관한 기록 : 3개월 (통신비밀보호법)',
    '',
    '제4조 (개인정보 보호책임자)',
    '회사는 고객의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 관련 부서 및 개인정보 보호책임자를 지정하고 있습니다.',
    '',
    '▶ 개인정보 보호책임자',
    `성명: ${settings.ceo_name}`,
    `연락처: ${settings.contact_number}`,
    `이메일: ${settings.email}`,
    `주소: ${settings.address}`
  ].join('\\n');

  return (
    <div className="max-w-[1024px] mx-auto px-4 py-16 md:py-24">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center tracking-tight">개인정보처리방침</h1>
      
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 md:p-12 shadow-sm min-h-[500px]">
        {settings.custom_privacy ? (
          <div 
            className="prose max-w-none text-gray-700 leading-relaxed text-[15px]"
            dangerouslySetInnerHTML={{ __html: settings.custom_privacy }}
          />
        ) : (
          <div className="whitespace-pre-wrap text-gray-700 leading-loose text-[15px]">
            {defaultPrivacy}
          </div>
        )}
      </div>
    </div>
  );
}
