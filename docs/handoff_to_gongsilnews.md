# 🔄 공실뉴스 어드민 작업 전달 사항
> **작성일:** 2026-04-21  
> **작성자:** homepage 프로젝트 (템플릿 서버) 측  
> **목적:** 공실뉴스 관리자 페이지에서 **'부동산 홈페이지 설정 폼 UI'**를 구현하기 위한 전달 문서

---

## 1. 배경 및 목적
공실뉴스 플랫폼을 SaaS 멀티테넌트 구조로 확장하여, 각 부동산 중개사에게 **독립적인 서브도메인 홈페이지**(`buildon.gongsilnews.com` 등)를 제공합니다.

- **템플릿 서버 (homepage, Port 3001):** DB에서 값을 읽어 화면만 보여주는 "뷰 엔진" 역할. 이미 `middleware.ts`와 `[tenant_id]` 동적 라우팅 구현 완료.
- **관리자 페이지 (공실뉴스, Port 3000):** 부동산 소장이 자신의 홈페이지를 **설정하고 제어하는 유일한 컨트롤 타워**. 아래 작업은 이 프로젝트에서 수행해야 합니다.

---

## 2. Supabase에 이미 생성된 테이블

### 2-1. `homepage_settings` (홈페이지 설정 전용)
| 컬럼명 | 타입 | 설명 |
|--------|------|------|
| `id` | UUID (PK) | 자동 생성 |
| `owner_id` | UUID (FK → members.id) | 어떤 부동산 회원의 설정인지 |
| `subdomain` | TEXT (Unique) | 서브도메인 영문 주소 (예: `buildon`) |
| `theme_name` | TEXT (기본값: `office`) | 선택한 템플릿 테마 |
| `logo_url` | TEXT | 헤더 로고 이미지 URL |
| `favicon_url` | TEXT | 브라우저 탭 아이콘 URL |
| `site_title` | TEXT | 브라우저 탭 제목 |
| `contact_phone` | TEXT | 홈페이지 전용 연락처 |
| `company_intro` | TEXT | 회사 소개 본문 |
| `is_active` | BOOLEAN (기본값: true) | 홈페이지 활성화 스위치 |
| `created_at` | TIMESTAMPTZ | 생성 시각 |

### 2-2. `tenant_boards` (통합 게시판)
| 컬럼명 | 타입 | 설명 |
|--------|------|------|
| `id` | UUID (PK) | 자동 생성 |
| `owner_id` | UUID (FK → members.id) | 어떤 부동산의 게시판 글인지 |
| `board_type` | TEXT | 게시판 종류 (`NOTICE`, `FREE`, `INQUIRY`) |
| `title` | TEXT | 글 제목 |
| `content` | TEXT | 글 본문 |
| `author_name` | TEXT | 작성자명 |
| `author_password` | TEXT | 비회원 글 비밀번호 |
| `is_secret` | BOOLEAN | 비밀글 여부 |
| `created_at` | TIMESTAMPTZ | 작성 시각 |

---

## 3. 관리자 페이지에서 만들어야 할 UI

### 3-1. 위치
기존 부동산 관리자 페이지 (`/realty_admin?menu=homepage`) 내부에 설정 폼을 구현합니다.

### 3-2. 홈페이지 설정 폼 필드 목록
| 필드 | 입력 방식 | 저장 컬럼 | 비고 |
|------|-----------|-----------|------|
| 서브도메인 주소 | 텍스트 입력 + `.gongsilnews.com` 접미사 표시 | `subdomain` | 영문/숫자/하이픈만 허용, 중복 검사 필요 |
| 템플릿 선택 | 드롭다운 또는 카드 형태 선택 | `theme_name` | 값 예시: `office`, `apartment` |
| 로고 업로드 | 파일 업로드 (Supabase Storage) | `logo_url` | 추천 규격: 가로 200px 이상 PNG/SVG |
| 파비콘 업로드 | 파일 업로드 | `favicon_url` | 32x32 또는 64x64 |
| 사이트 제목 | 텍스트 입력 | `site_title` | 브라우저 탭에 표시됨 |
| 대표 연락처 | 텍스트 입력 | `contact_phone` | 기존 가입 번호와 다를 수 있음 |
| 회사 소개글 | 텍스트에어리어 (여러 줄) | `company_intro` | 홈페이지 '회사소개' 메뉴에 표시 |
| 홈페이지 활성화 | 토글 스위치 | `is_active` | false로 끄면 접속 차단 |

### 3-3. 저장 로직 (Server Action / API)
```typescript
// 예시: 홈페이지 설정 저장 함수
async function saveHomepageSettings(ownerId: string, data: {
  subdomain: string;
  theme_name: string;
  logo_url?: string;
  favicon_url?: string;
  site_title?: string;
  contact_phone?: string;
  company_intro?: string;
  is_active?: boolean;
}) {
  const supabase = getAdminClient();

  // upsert: 이미 설정이 있으면 UPDATE, 없으면 INSERT
  const { error } = await supabase
    .from('homepage_settings')
    .upsert(
      { owner_id: ownerId, ...data },
      { onConflict: 'owner_id' }
    );

  if (error) return { success: false, error: error.message };
  return { success: true };
}
```

---

## 4. 부동산 요금제별 기능 차등 (참고)
현재 `members` 테이블의 요금제 필드 값은 다음과 같습니다:
| 한글명 | DB 값 | 홈페이지 권한 |
|--------|-------|---------------|
| 무료부동산 | `free` | 서브도메인 사용 가능, 공실뉴스 워터마크 강제 표출, 테마/로고 변경 제한 |
| 공실뉴스부동산 | `news_premium` | 워터마크 제거, 테마 자유 선택, 로고 커스텀 |
| 공실등록부동산 | `vacancy_premium` | 위 혜택 + 매물 자동 연동 + 모든 기능 해금 |

> 관리자 페이지 폼 UI에서 요금제가 `free`인 경우 템플릿 선택/로고 업로드 필드를 비활성화(disabled) 처리하는 것을 권장합니다.

---

## 5. 작업 완료 후 확인 사항
1. 관리자 페이지에서 설정을 저장한 뒤, Supabase `homepage_settings` 테이블에 데이터가 정상 INSERT/UPDATE 되는지 확인
2. 템플릿 서버(Port 3001)에서 해당 서브도메인(`subdomain값.gongsilnews.com`)으로 접속했을 때 설정한 로고와 회사정보가 정상 렌더링 되는지 확인
