# React + TypeScript 학습지 편집기

## 📝 프로젝트 개요

- **학습지 상세 편집 페이지**: 단일 페이지 애플리케이션 (SPA)
- **좌측 패널**: 유사문제 목록
- **우측 패널**: 워크시트 편집기
- **반응형 레이아웃**: 모바일, 태블릿, 데스크탑 대응

## 🏗️ 디렉토리 구조

```
src/
├── components/
│   ├── common/               # 공통 컴포넌트
│   │   ├── Typography/       # 텍스트 컴포넌트
│   │   ├── Spinner/          # 로딩 스피너
│   │   ├── SimpleError/      # 에러 표시
│   │   └── ProblemItem/      # 문제 아이템 (헤더, 컨텐츠, 이미지)
│   ├── SimilarityProblems/   # 유사문제 목록
│   └── Worksheet/            # 워크시트 편집기
├── contexts/                 # Context API
│   └── WorksheetBuilderProvider.tsx
├── hooks/                    # 커스텀 훅
│   ├── useApiHandler.ts      # API 호출 상태 관리
│   └── useWorksheetBuilderContext.ts
├── models/                   # 타입 정의
│   ├── problems.ts
│   └── worksheetBuilder.ts
├── services/                 # API 서비스
│   ├── apiClient/            # HTTP 클라이언트
│   └── problems.service.ts
├── styles/                   # 글로벌 스타일
│   ├── tokens.scss           # 디자인 토큰 (색상, 변수)
│   └── breakpoints.scss      # 반응형 브레이크포인트
└── utils/                    # 유틸리티 함수
    ├── sleep.ts
    ├── formatProblemType.ts
    └── formatProblemLevel.ts
```

## ✨ 주요 구현 기능

### 🎯 **Context API를 통한 전역 상태 관리**

- `WorksheetBuilderProvider`: 워크시트와 유사문제 목록 관리
- 문제 추가/교체/삭제 액션
- API 호출 상태 공유

### 🔄 **API 호출 및 상태 관리**

- `useApiHandler`: 커스텀 훅으로 API 상태 관리 (idle, pending, success, error)
- **의도적 딜레이**: 모든 API 호출에 `0.3초` 딜레이 추가 (로딩 UI 테스트용)
- 에러 처리 및 재시도 기능

### 🎨 **부드러운 애니메이션 전환**

- **메인 앱**: 아래에서 위로 페이드인 (`translateY`)
- **유사문제**: 왼쪽에서 오른쪽으로 슬라이드인 (`translateX`)
- 로딩 완료 후 적절한 딜레이로 자연스러운 등장

### 🖼️ **이미지 처리**

- 이미지 로딩 실패 시 SVG 폴백 제공
- `object-fit: contain`으로 비율 유지
- 반응형 이미지 크기 조절

### 🎛️ **인터랙션**

- 문제 선택 → 유사문제 검색
- 유사문제 추가/교체
- 워크시트에서 문제 삭제
- 중복 API 호출 방지

### 📊 **워크시트 통계**

- 난이도별 문제 개수 (하/중하/중/상/최상)
- 총 문제 개수 표시
- 실시간 업데이트

## 🛠️ 기술 스택

- **React 19** + **TypeScript**
- **Vite** (빌드 도구)
- **SCSS Modules** (스타일링)
- **Context API** (상태 관리)
- **Custom Hooks** (로직 재사용)

## 🎨 스타일

- **토큰 기반**: `src/styles/tokens.scss`에 색상/변수 정의
- **반응형 믹스인**: `src/styles/breakpoints.scss`
- **컴포넌트 기반**: 재사용 가능한 UI 컴포넌트
