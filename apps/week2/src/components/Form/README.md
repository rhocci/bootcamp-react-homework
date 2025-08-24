# 🧩 컴포넌트 가이드 - Form

> 로그인/회원가입 폼을 렌더링하는 폼 컴포넌트

![Form 컴포넌트 이미지](/apps/week2/public/docs/Form.png)

### 설명

- `signUp`, `signIn`, `signedIn` 상태에 따라 필드 렌더링
- 입력 값 유효성 검사 로직 포함
- 회원가입/로그인 성공 시 `alert` 메세지 팝업

### 포함된 컴포넌트

| 컴포넌트 | 가이드 링크                                   |
| -------- | --------------------------------------------- |
| Input    | [바로가기](./src/components/Input/README.md)  |
| Button   | [바로가기](./src/components/Button/README.md) |

### 기본 사용법

```jsx
import Form from '@/Form/Form.jsx';

// 기본 상태(회원가입 폼)
<Form />;
```
