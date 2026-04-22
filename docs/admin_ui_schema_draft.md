# 12대 표준 레이아웃 기반 JSON 스키마 & 어드민 UI 기획안

이 문서는 멀티테넌트(SaaS) 환경에서 12개의 표준 레이아웃을 통제하기 위해 `homepage_settings` 테이블의 `settings` JSONB 컬럼에 들어가야 할 **상세 데이터 구조**와 **관리자(Admin) 화면의 UI 입력 항목**을 정의합니다.

모든 템플릿(Template01, Template02 등)은 이 규격화된 JSON 규칙을 공통으로 참조하여 화면을 그립니다.

---

## 🏗️ 1~12번 표준 섹션별 JSON 스키마 설계

### 1. 헤더 (Header)
상단 네비게이션과 로고를 설정합니다.
```json
"header": {
  "logo_url": "https://.../logo.png",
  "contact_phone": "02-598-9788",
  "theme_color": "#D4AF37",         // 브랜딩 메인 컬러
  "is_fixed": true                  // 스크롤 시 상단 고정 여부
}
```

### 2. 푸터 (Footer)
하단에 노출되는 가장 중요한 사업자 정보입니다.
```json
"footer": {
  "company_name": "주식회사 빌드온부동산중개법인",
  "ceo_name": "홍길동",
  "address": "서울특별시 서초구 강남대로39길 15-11, 002호",
  "registration_number": "190-86-00985",
  "call_center": "02-598-9788",
  "logo_url": "https://.../footer-logo.png"
}
```

### 3. 메인페이지 히어로 (Hero)
사이트 접속 시 가장 먼저 보이는 핵심 비주얼 영역입니다.
```json
"hero": {
  "bg_image_url": "https://.../main-bg.jpg",
  "main_copy": "고객님의 조건에 맞는 상가·사무실을 찾아드려요",
  "sub_copy": "전문가에게 맡기세요. 부담없이 편하게 문의하세요",
  "show_search_bar": true,          // 중앙 큼직한 매물검색창 표시 여부
  "overlay_opacity": 0.5            // 배경 이미지 어둡기 정도 (텍스트 가독성용)
}
```

### 4. 지도검색 (Map)
메인 모듈이므로 설정값은 최소화하거나 시스템을 따릅니다.
```json
"map": {
  "default_lat": 37.4979,           // 지도 첫 화면 중심좌표
  "default_lng": 127.0276,
  "default_zoom": 4
}
```

### 5. 테마검색 (Theme Search)
중개사의 주력 매물(원룸위주 vs 상가위주)에 따라 퀵버튼을 동적으로 변경합니다.
```json
"theme_search": {
  "enabled": true,
  "items": [
    { "icon": "parking", "label": "주차가능", "link": "/map?options=parking" },
    { "icon": "money", "label": "LH전세", "link": "/map?options=lh" }
  ]
}
```

### 6. 뉴스기사 미리보기 (News Preview)
메인 화면에 최근 등록된 부동산 뉴스/칼럼을 끌어옵니다.
```json
"news_preview": {
  "enabled": true,
  "section_title": "부동산 핫이슈",
  "display_count": 3                // 메인에 보여줄 기사 개수
}
```

### 7. 문의남기기 (Consultation Form)
메인 화면에서의 빠른 콜백 접수 폼입니다.
```json
"consultation": {
  "enabled": true,
  "title": "원하시는 조건의 매물을 찾아드립니다",
  "subtitle": "간단한 정보만 남겨주시면 담당자가 신속히 연락드립니다."
}
```

### 8. 오시는길 (Location)
카카오맵/네이버맵 연동을 위한 부동산 오프라인 주소입니다.
```json
"location": {
  "enabled": true,
  "address": "서울 서초구 강남대로39길 15-11",
  "lat": 37.4851,
  "lng": 127.0322,
  "parking_info": "건물 뒷편 주차장 이용 가능 (무료)"
}
```

### 9, 10, 11. 서브페이지 공통 (About, 1:1, Board)
해당 페이지들의 탭 메뉴명이나 게시판 노출 여부를 관리합니다. 회사 소개 내용 등은 에디터로 별도 저장될 수 있으나, 간소화를 위해 핵심 텍스트만 JSON에 넣을 수 있습니다.
```json
"about": {
  "greeting_title": "고객의 성공이 우리의 성공입니다.",
  "greeting_content": "저희 빌드온 중개법인은...",
  "history_image_url": "https://.../history.jpg" // 연혁 이미지
}
```

### 12. SNS 및 부가옵션 (SNS & Floating)
플로팅 퀵 버튼 및 푸터 우측의 외부 연결 고리입니다.
```json
"sns_links": {
  "youtube": "https://youtube.com/...",
  "instagram": "https://instagram.com/...",
  "blog": "https://blog.naver.com/...",
  "kakao_chat": "https://pf.kakao.com/..."    // 우측 하단 톡상담 플로팅 버튼용
}
```

---

## 🛠️ 향후 구현 시나리오 (Action Items)

1. **DB 기본값(Default JSON) 생성:** 새로운 테넌트(부동산)가 가입할 때, 위 규격에 맞춘 기본 JSON을 `homepage_settings` 테이블에 생성해 주는 로직을 구현합니다.
2. **어드민(realty_admin) 설정 폼 UI 개발:** 위 JSON 구조를 프론트엔드 React 폼으로 시각화합니다. (메인 배너 사진 업로드 컴포넌트, 카피라이팅 텍스트 입력 칸, 색상 선택기 등)
3. **프론트엔드(Template) 바인딩:** 템플릿 컴포넌트들(`Header01.tsx`, `Hero02.tsx` 등)이 하드코딩된 글자가 아닌, DB에서 꺼내온 이 JSON 객체를 참조하여 렌더링하도록 덮어씌웁니다.
