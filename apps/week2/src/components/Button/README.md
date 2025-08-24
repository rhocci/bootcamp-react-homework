# 🧩 컴포넌트 가이드 - Button

> 클릭 이벤트와 상태를 가진 기본 액션 컴포넌트

![Button 컴포넌트 이미지](/apps/week2/public/docs/Button.png)

### 설명

- label 을 텍스트로 받아 버튼 내부에 표시
- 상태(`disabled`, `hover`, `focus`)에 따라 스타일 변경
- `onClick` 이벤트와 키보드 입력(Enter, Spacebar) 대응
- `theme` 기반 색상 사용 (primary 색상 토큰 연동)

### 기본 사용법

```jsx
import Button from '@/Button/Button.jsx';

// 기본 상태
<Button />

// 폼 제출 버튼
<Button type="submit" label="회원가입" />

// 비활성화 버튼
<Button type="button" label="예매하기" disabled />
```

### props

| 속성명     | 타입     | 설명               | 기본값   |
| ---------- | -------- | ------------------ | -------- |
| `type`     | string   | 버튼 타입          | 'button' |
| `label`    | string   | 버튼 내부 텍스트   | '확인'   |
| `onClick`  | function | 클릭 이벤트 핸들러 | -        |
| `disabled` | boolean  | 버튼 비활성화 여부 | false    |
