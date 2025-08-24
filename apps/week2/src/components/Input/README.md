# 🧩 컴포넌트 가이드 - Input

> 사용자 입력을 받는 인풋 텍스트 필드 + 라벨 + 에러 메시지 컴포넌트

![Input 컴포넌트 이미지](/apps/week2/public/docs/Input.png)

### 설명

- Label + Input + ErrorMessage 세트 구조
- 비밀번호 필드일 경우 아이콘 클릭으로 보이기/숨기기 토글 가능
- `:focus-within` 상태일 때 border, label 색상 강조
- 에러 메시지는 자리를 유지하며, 오류 시만 붉은색으로 노출

### 기본 사용법

```jsx
import Input from '@/Input/Input.jsx';

// 기본 상태(텍스트 필드)
<Input />;

// 이메일 입력 필드
<Input
  id="email"
  type="email"
  label="이메일"
  placeholder="example@mail.com"
  onChange={handleChange}
  invalid={isInvalid}
  error={errorMessage}
/>;
```

### props

| 속성명        | 타입     | 설명                                       | 기본값 |
| ------------- | -------- | ------------------------------------------ | ------ |
| `type`        | string   | 인풋 타입 (`text`, `email`, `password` 등) | 'text' |
| `id`          | string   | 인풋의 고유 ID                             | -      |
| `label`       | string   | 인풋 라벨 텍스트                           | -      |
| `value`       | string   | 현재 입력된 값                             | ''     |
| `placeholder` | string   | 입력 안내 문구                             | ''     |
| `onChange`    | function | 입력 값 변경 핸들러                        | -      |
| `invalid`     | boolean  | 에러 여부                                  | false  |
| `error`       | string   | 에러 메시지                                | ''     |
| `required`    | boolean  | 필수 입력 여부                             | true   |
