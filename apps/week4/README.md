# 4주차 과제 - React × Supabase

> React 4주차 과제 기록을 정리한 문서입니다.

## 🔖 목차

- [환경 구성 + 트리 구조 잡기](#-환경-구성--트리-구조-잡기)
  - [초기 환경 구성](#초기-환경-구성)
  - [과제 요구사항 분석](#과제-요구사항-분석)
  - [폴더 구성](#폴더-구성)
- [과제 수행 과정](#-과제-수행-과정)
- [컴포넌트 명세서](#-컴포넌트-명세서)
- [4주차 회고](#-4주차-회고)

---

## 📁 환경 구성 + 트리 구조 잡기

### 초기 환경 구성

4주차 과제는 bun+vite+TS 로 구성, 아래와 같은 추가 라이브러리 설정을 했다.

- [**Supabase**](https://supabase.com/)  
  → 유저 프로필(profiles) DB 연동을 위해 `supabase-js` 와 supabase CLI 설치  
  → 로그인을 통해 타입을 자동 생성함

  ```bash
  bun add @supabase/supabase-js
  bun add -d supabase
  bunx supabase login
  bun supabase gen types typescript --project-id mbtmjjfswrojulklbiqf > libs/supabase/database.types.ts
  ```

  → `libs/supabase/index.ts` 파일은 아래와 같이 정의

  ```tsx
  import { createClient } from '@supabase/supabase-js';
  import type {
    Database,
    Tables,
    TablesInsert,
    TablesUpdate,
  } from './database.types';

  const { VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY } = import.meta.env;

  const supabase = createClient<Database>(
    VITE_SUPABASE_URL!,
    VITE_SUPABASE_ANON_KEY!
  );

  export default supabase;

  export type Profile = Tables<'profiles'>;
  export type ProfileInsert = TablesInsert<'profiles'>;
  export type ProfileUpdate = TablesUpdate<'profiles'>;
  ```

  - `libs/supabase/database.types.ts` 에 생성된 타입 정의 import
  - `/process.env` 에 대시보드 url, anon key 저장 후 import
  - `createClient` API로 supabase 클라이언트 인스턴스 생성 후 export
  - `Tables` , `TablesInsert` , `TablesUpadate` 타입을 import하고 `'profiles'` 제네릭 인자 전달  
    -> 반환된 테이블 Row 타입들을 각각 `Profile` , `ProfileInsert` , `ProfileUpdate` 별칭으로 지정 후 export

- [**React Router (DOM)**](https://reactrouter.com/)  
  → 페이지 라우팅을 위해 `react-router-dom` 라이브러리 설치

  ```bash
  bun add react-router-dom
  ```

  이후 앱 전체에 적용되도록 `main.jsx` 에 import 후 래핑.

  ```tsx
  import { StrictMode } from 'react';
  import { createRoot } from 'react-dom/client';
  import { BrowserRouter } from 'react-router-dom';
  import '../../../common/styles/index.css';
  import App from './App';

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
  ```

- [**React Hot Toast**](https://react-hot-toast.com/)  
  → 간편한 토스터 알림 제작을 위해 `react-hot-toast` 라이브러리 설치
  ```bash
  bun add react-hot-toast
  ```

### 과제 요구사항 분석

**필수 구현 기능**

1. SPA 라우팅

   ```tsx
   - url 쿼리를 통해 SPA로 페이지 이동 구현
   - 제공된 커스텀 hooks + utils 혹은 라우팅 라이브러리 사용 가능
   ```

2. 토스트 알림

   ```tsx
   - 요청 상태 변화 알림 기능('pending' | 'resolved' | 'rejected' 등)
   - 토스트 라이브러리 사용 가능
   ```

3. 인증 관리

   ```tsx
   - 인증이 필요한 페이지는 로그인하지 않은 경우 접근 제한
   - 회원가입 / 로그인 / 로그아웃 기능
   - supabase를 통해 인증된 사용자 데이터 관리
   ```

**부가 구현 기능 (택1)**

1. 프로필 정보 조회 및 수정

   ```tsx
   - 프로필 페이지에서 현재 로그인 사용자의 `id`로 `profiles` 테이블 정보 조회
   - 사용자 프로필 정보(이름, 이메일, 소개 등) 화면에 표시
   - 사용자 프로필 정보를 수정할 수 있는 폼 제공 및 유효성 검사
   - Supabase에 정보 수정을 요청해 성공 또는 오류 발생 시, 토스트 알림
   ```

2. 인증된 사용자만 조회 가능한 게시판

   ```tsx
   - 대시보드 페이지 추가 (클라이언트 사이드 라우팅)
   - 현재 인증된 사용자만 접근 가능하도록 라우팅 가드
   - `posts` 테이블에서 게시글 목록 조회
   - 새 글(제목/내용) 작성 폼 제공 및 유효성 검사
   - 게시글을 Supabase의 데이터베이스에 저장
   - 글 작성 성공/실패 시, 토스트 알림
   ```

### 폴더 구성

## 🔎 과제 수행 과정

## 🧩 컴포넌트 명세서

## 🌈 4주차 회고
