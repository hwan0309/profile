# 윤지환 · 포트폴리오


## 실행

```bash
npm install
npm run dev      # http://localhost:5173/profile/
npm run build    # dist/
npm run preview
```

## 구조

```
src/
├─ data/content.js        # 모든 문구(ko/en). 내용 수정은 여기서만
├─ context/SiteContext.jsx# 테마·언어 상태 + localStorage 저장
├─ hooks/
│  ├─ useReveal.js        # IntersectionObserver 기반 fade-up
│  └─ useScrollSpy.js     # 현재 섹션 감지, 스크롤 위치 감지
├─ components/
│  ├─ Header.jsx          # 고정 헤더 + 모바일 드로어
│  ├─ Hero.jsx            # 그라데이션 메시 히어로
│  ├─ Section.jsx         # 섹션 공통 껍데기(eyebrow + 제목)
│  ├─ Strengths.jsx       # 핵심 역량 + Skill
│  ├─ Career.jsx          # 경력 타임라인(펼치기/접기)
│  ├─ Projects.jsx        # 프로젝트 카드
│  ├─ OpenSource.jsx
│  ├─ Contact.jsx
│  ├─ Reveal.jsx          # 스크롤 애니메이션 래퍼
│  ├─ BackToTop.jsx
│  └─ Icons.jsx           # 인라인 SVG 아이콘
└─ styles/globals.css     # 디자인 토큰 + 전체 스타일
```

