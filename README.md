# 다짐 캡슐 — 미래의 나에게 보내는 편지

<img width="1024" height="348" alt="image" src="https://github.com/user-attachments/assets/c1b21e66-cf48-47c3-a072-92a622c9c470" />

## 1. 프로젝트 소개

### 1.1 프로젝트 명

> **다짐 캡슐 (Dazim Capsule)**
>
> 밤하늘 아래, 마음속으로만 했던 다짐·진심·목표를 타임캡슐에 담아 미래의 나(혹은 우리)에게 전달하는 서비스

### 1.2 프로젝트 기간

**2026.04.23 ~ 2026.06.08**

---

## 2. 프로젝트 개요

### 2.1 서비스 소개

다짐 캡슐은 **타임캡슐 형태의 편지 서비스**입니다.

캡슐 생성자가 개봉 날짜를 설정하면 고유 UUID 링크가 발급됩니다. 생성자는 이 링크를 지인에게 공유하고, 링크에 접속한 사람들이 미래에 전하고 싶은 다짐이나 메시지를 남길 수 있습니다. 설정한 날짜가 되면 이메일을 통해 내용이 전달됩니다.

### 2.2 기획 배경

- 새해 다짐, 졸업·취업 앞의 다짐처럼 **특별한 순간의 감정**을 미래에 다시 전달하고 싶은 수요
- SNS 기록과 달리 **정해진 날 열리는** 타임락(Time-lock) 방식으로 기대감 극대화
- 캡슐 링크를 공유해 **여러 사람이 함께** 같은 캡슐에 메시지를 담을 수 있는 경험 제공

---

## 3. 주요 기능

| 기능            | 설명                                                   |
| --------------- | ------------------------------------------------------ |
| 캡슐 생성       | 개봉 날짜 선택 (최소 D+3) → UUID 기반 고유 링크 발급   |
| 링크 공유       | 클릭 한 번으로 공유 링크를 클립보드에 복사             |
| 메시지 작성     | 이름·이메일·본문 입력 후 캡슐에 봉인                   |
| 유효성 검증     | UUID 형식이 아닌 링크 접근 시 메인 페이지로 리다이렉트 |
| 제출 애니메이션 | 편지가 미래로 날아가는 캡슐 애니메이션                 |
| 반응형 UI       | 모바일·데스크톱 모두 대응                              |

---

## 4. 서비스 플로우

```
① 메인 화면 (/)
   └─ "여정을 시작하기" 클릭
        │
        ▼
② 캡슐 생성 (/makeForm)
   └─ 개봉 날짜 선택 (최소 오늘 + 3일)
   └─ UUID 생성 → 백엔드 POST /makeForm
        │
        ▼
③ 메시지 작성 (/form/[uuid])
   ├─ 공유 링크 복사 (링크를 지인과 공유)
   ├─ 이름 / 닉네임 입력
   ├─ 이메일 입력
   └─ 다짐 내용 작성 → 백엔드 POST /form/[uuid]
        │
        ▼
④ 제출 완료 (/success)
   └─ 캡슐이 미래로 날아가는 애니메이션
   └─ "폼이 전달되었습니다" 완료 메시지
```

---

## 5. 개발 환경

| 항목          | 내용                                                                                                            |
| ------------- | --------------------------------------------------------------------------------------------------------------- |
| 운영체제      | ![Windows](https://img.shields.io/badge/Windows_11-0078D6?style=flat-square&logo=windows&logoColor=white)       |
| 언어          | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) |
| 런타임        | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)          |
| 패키지 매니저 | ![pnpm](https://img.shields.io/badge/pnpm-F69220?style=flat-square&logo=pnpm&logoColor=white)                   |
| 버전 관리     | ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)             |

---

## 6. 기술 스택

### Frontend

| 기술                                                                                                                 | 버전   | 용도                                     |
| -------------------------------------------------------------------------------------------------------------------- | ------ | ---------------------------------------- |
| ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white)               | 16.2.6 | App Router 기반 SSR/CSR 프레임워크       |
| ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)                     | 19     | UI 라이브러리                            |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) | 4      | 유틸리티 퍼스트 CSS 프레임워크           |
| ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)    | 12     | 페이지 전환 및 캡슐 날아가기 애니메이션  |
| Radix UI                                                                                                             | —      | 접근성 기반 헤드리스 UI 컴포넌트         |
| shadcn/ui                                                                                                            | —      | Radix UI + Tailwind 조합 컴포넌트 시스템 |
| ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white)                     | 1.x    | REST API 통신                            |
| Lucide React                                                                                                         | —      | 아이콘 라이브러리                        |

### 인프라 / 배포

| 기술                                                                                                | 용도                       |
| --------------------------------------------------------------------------------------------------- | -------------------------- |
| ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white) | 프론트엔드 배포            |
| 환경변수 `NEXT_PUBLIC_API_URL`                                                                      | 백엔드 REST API 엔드포인트 |

---

## 7. 프로젝트 구조

```
DazimCapsule-frontend/
├── app/
│   ├── page.tsx              # 메인 랜딩 화면
│   ├── makeForm/
│   │   └── page.tsx          # 캡슐 생성 (날짜 선택)
│   ├── form/[id]/
│   │   └── page.tsx          # 메시지 작성 (UUID 기반)
│   ├── success/
│   │   └── page.tsx          # 제출 완료 & 캡슐 애니메이션
│   └── layout.tsx            # 전역 레이아웃 & 배경
├── components/
│   └── ui/                   # shadcn/ui + 커스텀 컴포넌트
│       ├── default-background.tsx    # 별빛 배경 + 파티클 효과
│       ├── fade-scale-transition.tsx  # 페이지 전환 애니메이션
│       ├── copyable-input.tsx        # 클립보드 복사 인풋
│       └── ...
├── src/api/
│   └── axios.js              # Axios 인스턴스 (baseURL 설정)
└── proxy.ts                  # UUID 형식 미들웨어 (유효하지 않은 링크 차단)
```

---

## 8. 실행 방법

### 환경 변수 설정

프로젝트 루트에 `.env.local` 파일을 생성합니다.

```env
NEXT_PUBLIC_API_URL=백엔드_서버_주소
```

### 개발 서버 실행

```bash
pnpm install
pnpm dev
```

### 프로덕션 빌드

```bash
pnpm build
pnpm start
```

---

## 9. API 명세

| 메서드 | 경로        | 설명                                          |
| ------ | ----------- | --------------------------------------------- |
| `POST` | `/makeForm` | 캡슐 생성 (`uniqueLink`, `expirationDate`)    |
| `GET`  | `/form/:id` | 캡슐 유효성 확인 (404 시 메인으로 리다이렉트) |
| `POST` | `/form/:id` | 메시지 제출 (`name`, `email`, `body`)         |
