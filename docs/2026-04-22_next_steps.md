# 📋 내일 작업 이어가기 가이드 (2026-04-22)
> **마지막 작업일:** 2026-04-21 22:45  
> **프로젝트:** homepage (템플릿 뷰 엔진) + gongsilnews (어드민)

---

## ✅ 완료된 작업

### 인프라 (코딩 완료)
- [x] Vercel 와일드카드 도메인 `*.gongsilnews.com` 등록
- [x] `src/middleware.ts` — 서브도메인 파싱 및 Rewrite 미들웨어 구현
- [x] 기존 라우트를 `src/app/[tenant_id]/` 하위로 전체 이동
- [x] Root 랜딩 페이지 (`src/app/page.tsx`) 생성

### 데이터베이스 (Supabase 생성 완료)
- [x] `homepage_settings` 테이블 생성 (서브도메인, 테마, 로고, 회사소개 등)
- [x] `tenant_boards` 테이블 생성 (통합 게시판)
- [x] 성능 인덱스 3개 생성

### 기획/회의 (문서화 완료)
- [x] 프리미엄(Freemium) 비즈니스 모델 확정
- [x] 어드민(공실뉴스) ↔ 뷰 엔진(homepage) 역할 분리 확정
- [x] 요금제별 차등 정책 정의 (`free` / `news_premium` / `vacancy_premium`)

---

## 🔲 내일 해야 할 작업

### 1순위: 공실뉴스 어드민 — 홈페이지 설정 폼 UI
> **작업 프로젝트:** gongsilnews (Port 3000)  
> **참고 문서:** `homepage/docs/handoff_to_gongsilnews.md`

- [ ] `/realty_admin?menu=homepage` 화면에 설정 폼 구현
  - 서브도메인 입력 (영문/숫자만, 중복검사)
  - 템플릿 선택 드롭다운
  - 로고/파비콘 업로드 (Supabase Storage)
  - 사이트 제목, 연락처, 회사소개 입력
  - 활성화 토글
- [ ] `homepage_settings` 테이블에 upsert 저장 로직 구현
- [ ] 요금제가 `free`일 때 테마/로고 필드 비활성화 처리

### 2순위: homepage 템플릿 — DB 연동 코드
> **작업 프로젝트:** homepage (Port 3001)

- [ ] `[tenant_id]/layout.tsx`에서 `homepage_settings` 조회 → 로고, 사이트 제목 동적 반영
- [ ] Header 컴포넌트에 DB에서 가져온 로고/회사명 Props 전달
- [ ] Footer 컴포넌트에 연락처/주소 동적 반영
- [ ] 요금제별 워터마크 표시/숨김 로직 구현

### 3순위: 게시판 UI 연동
- [ ] 어드민에서 `tenant_boards`에 공지사항/자유게시판 글 CRUD
- [ ] 홈페이지에서 `board_type` 파라미터로 게시글 리스트 렌더링

---

## 📂 주요 파일 위치

| 파일 | 역할 |
|------|------|
| `homepage/src/middleware.ts` | 서브도메인 라우팅 미들웨어 |
| `homepage/src/app/[tenant_id]/` | 모든 템플릿 페이지가 위치한 폴더 |
| `homepage/docs/handoff_to_gongsilnews.md` | 공실뉴스 작업 전달 문서 (테이블 스키마, 폼 필드 상세) |
| `homepage/docs/2026-04-21_daily_summary.md` | 오늘 전체 작업/회의 기록 |
| `homepage/architecture_plan.md` | SaaS 전체 아키텍처 기획서 |

---

## 💡 작업 시작 팁
1. **공실뉴스 프로젝트부터 시작** → 어드민 폼 UI를 먼저 만들어 DB에 테스트 데이터를 넣어야, homepage 쪽 연동을 눈으로 확인 가능
2. 공실뉴스 프로젝트를 열고 `handoff_to_gongsilnews.md` 파일 경로를 AI에게 알려주면 바로 이어서 작업 가능
3. Vercel DNS 설정(`*.gongsilnews.com` → `cname.vercel-dns.com`)은 도메인 관리 업체(가비아 등)에서 천천히 진행해도 무방
