# 홈페이지 supabase json 적용

기존에 작성하신 `homepage_settings` 테이블을 버리지 않고, **핵심 검색용 컬럼(고정 필드)과 디자인 무한 확장용 컬럼(JSONB)**으로 완벽히 분리하여 하이브리드 형태로 재설계한 최종 DB 스키마입니다.

## 1. Supabase 테이블 스키마 (PostgreSQL)

| 컬럼명 | 타입 | 설명 | 기존/신규 |
|:---|:---|:---|:---|
| `id` | uuid | 레코드 고유 ID (PK) | 유지 |
| `owner_id` | uuid | 부동산(Agencies) 회원 ID (Unique FK) | 유지 |
| `subdomain` | text | 홈페이지 서브도메인 (ex: buildon) | 유지 (검색/라우팅용) |
| `is_active` | boolean | 홈페이지 전체 공개 여부 | 유지 |
| `created_at / updated_at` | timestamptz | 생성/수정일시 | 유지 |
| **`settings`** | **jsonb** | **[신규] 모든 시각적 콘텐츠 및 디자인 설정값 통합** | **신규 생성 (모두 통합)** |

> **설계 철학**: 테이블 파편화를 막고 궁극의 깔끔함을 유지하기 위해, DB 서버가 반드시 알아야 하는 **최소한의 라우팅 식별 데이터(단 5개 컬럼)만 남기고 나머지(로고, 테마명, 소개글 등)는 통째로 `settings` JSON 내부로 묶어(마이그레이션) 이동**시켰습니다. 이제 이 테이블은 더 이상 컬럼 구조 변경이 필요 없는 완성형이 되었습니다.

---

## 2. `design_settings` (JSONB) 내부 구조 

어드민에서 입력하면 요 `design_settings` 컬럼 안에 아래와 같은 텍스트 형태로 쏙 저장됩니다. 어떤 테마(원룸, 상가 등)를 쓰더라도 똑같은 구조를 가집니다.

```json
{
  "theme_color": {
    "primary": "#D4AF37", // 템플릿 포인트 컬러 (테마별 메인 색)
    "secondary": "#1A1A1A"
  },
  
  "hero_banner": {
    "background_type": "custom", // 'preset'(기본제공 이미지) 또는 'custom'(직접 업로드)
    "background_image_url": "https://...", 
    "main_slogan": "고객님의 조건에 맞는 상가·사무실을 찾아드려요", 
    "sub_slogan": "상가·사무실 임대, 전문가에게 맡기세요"
  },

  "popups": [ 
    {
      "id": "popup_01",
      "active": true,
      "image_url": "https://...",
      "link_url": "https://...", 
      "start_date": "2026-04-22T00:00:00Z",
      "end_date": "2026-05-31T23:59:59Z"
    }
  ],

  "theme_search": {
    "active": true,
    "tags": ["1층/리테일", "프라임 오피스", "통건물", "역세권"] 
  },

  "property_section": {
    "display_count": 8, // 메인에 띄울 매물 갯수
    "default_sort": "recommended" 
  },

  "consultation_form": {
    "active": true,
    "receive_email": "admin@buildon.com",
    "receive_phone": "010-3398-7678" 
  },

  "news_preview": {
    "active": true,
    "display_count": 3 
  },

  "location_map": {
    "address_text": "서울특별시 서초구 강남대로39길 15-11",
    "google_map_embed_url": "https://www.google.com/maps/embed?pb=...",
    "operating_hours": "평일: 09:30 ~ 18:30 (주말 휴무)",
    "contact_number": "02-598-9788"
  },

  "company_info_page": { 
    "greeting_title": "대한민국 No.1 부동산 전문가 그룹",
    "greeting_text": "저희 빌드온 부동산은...",
    "representative_image_url": "https://...", // (WebP 압축) 부동산 전경, 대표님 사진 등 페이지에 들어갈 대표 이미지
    "history": [
      { "year": "2024", "event": "여기와방 플랫폼 런칭" }
    ]
  },

  "board_settings": { 
    "private_inquiry_active": true, 
    "public_board_active": true 
  },

  "sns_links": {
    "youtube_url": "https://youtube.com/...",
    "instagram_url": "https://instagram.com/...",
    "blog_url": "https://blog.naver.com/...",
    "kakao_channel_url": "https://pf.kakao.com/..."
  },

  "footer": {
    "bottom_logo_url": "https://...",
    "company_name": "주식회사 빌드온부동산",
    "ceo_name": "금현민",
    "business_registration_number": "190-86-00985",
    "address": "서울특별시 서초구 강남대로39길 15",
    "custom_text": "부동산 중개업 등록번호: 11650-2023-00123" 
  }
}
```

---

## 3. 하이브리드 DB 설계의 장단점 (일반 컬럼 vs JSON 컬럼)

이 스키마 모델은 모든 데이터를 통째로 JSON에 넣는 것이 아니라, **빠른 조회가 필요한 '핵심 데이터'는 일반 컬럼으로 빼고, 무한히 늘어나는 '인테리어 요소'만 JSON으로 묶는 하이브리드(혼합) 구조**를 채택했습니다. 

### 3.1. 일반 테이블 컬럼의 특징 (subdomain, owner_id 등)
👉 **DB에서 "빠른 검색"과 "엄격한 규칙"이 필요한 필수 핵심 데이터**

- **장점 (인덱싱 및 규칙 적용)**:  
  누군가 서브도메인(`template02.gongsilnews.com`)으로 접속할 때, 전체 10만 개의 데이터 중 해당 중개소의 데이터를 0.001초 만에 찾아야 합니다. 일반 컬럼(B-tree 인덱싱)은 이 검색 속도를 보장합니다. 또한 다른 업체와 도메인이 겹치면 안 된다는 `UNIQUE` 제약 조건이나, 회원 계정 정보와 연결되는 `FOREIGN KEY` 제약을 엄격하게 걸 수 있습니다.
- **단점**:  
  처음 구조를 한 번 만들면 이름을 바꾸거나 구조를 뜯어고치는 것(마이그레이션)이 까다롭고, 데이터를 넣을 때마다 매번 컬럼(필드)을 일일이 파주어야 합니다.

### 3.2. JSON/JSONB 컬럼의 특징 (design_settings)
👉 **빠른 검색은 필요 없고, 통째로 꺼내서 화면에 뿌려주기만 하면 되는 데이터** (예: 팝업, 배너, SNS 주소 등)

- **장점 (테이블 파편화 방지 및 무한 확장)**:  
  구식 설계였다면, 팝업 3개를 위해 `popup1_image`, `popup2_image` 같은 컬럼을 계속 추가해야 하거나, 아예 `popups`라는 별도의 테이블을 새로 만들어서 복잡하게 엮어주어야(JOIN) 합니다. 
  하지만 JSON 방식을 사용하면 기능이 백만 개 추가되어도 **DB 테이블을 뜯어고칠 필요 없이, JSON 상자 안에 텍스트를 던져넣기만 하면** DB가 에러 없이 다 받아줍니다. 어드민 페이지(프론트엔드)에서 필요한 설정값만 자유롭게 늘려가면 되는 압도적인 속도와 확장성을 자랑합니다. 

### 💡 결론 (Best Practice)
- **핵심 데이터 (서브도메인, 회원키 등)** 👉 밖으로 빼서 **일반 컬럼**으로! (속도, 규칙 담당)
- **무한 확장 데이터 (팝업, 배너, 색상 등)** 👉 하나의 **JSON 상자** 안으로! (유연성 담당)

이러한 하이브리드 세팅은 **데이터 무결성(안전성)**과 **유지보수 확장성(편리함)**을 둘 다 챙기는 업계 표준(Best Practice)에 해당하는 완벽한 설계 방식입니다.
