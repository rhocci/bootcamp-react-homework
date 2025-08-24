# 2주차 과제 - Stateful 컴포넌트 구현하기

> React 2주차 과제 기록을 정리한 문서입니다.

## 🔖 목차

- 링크
- ***

## 🧩 환경 구성 + 트리 구조 잡기

### 초기 환경 구성

2주차는 `bun+vite` 로 폴더 생성 후 아래 패키지들을 추가로 설치했다.

- 스타일링에 사용할 `styled-components` 라이브러리
- ESLint `styled-components-a11y` 린팅 플러그인

```bash
bun create vite@latest week2
bun install
bun add styled-components
# styled-components 스타일 규칙에서도 접근성 검사해주는 플러그인
bun add -d eslint-plugin-styled-components-a11y
```

### 과제 요구사항 분석

```bash
- 상태 있는(Stateful) 컴포넌트 구현
- state에 따라 화면 리렌더링
- stateless 컴포넌트와 트리 구성
```

과제 수행 전 디자인 시안을 보고 어떤 컴포넌트를 분리할 수 있을지,
또한 해당 컴포넌트가 stateful 일지 stateless 일지에 대해 먼저 생각해 보았다.

시안을 보고 크게 아래 3개의 컴포넌트로 나누었는데,

- Label+Input 요소로 이루어진 `Input`
- 폼 제출을 담당하는 `Button`
- 위 요소들이 조합된 폼 컨테이너 `Form`

트리 구조로 생각해 보면 루트인 `App` 아래에 `Form` 이 있고
그 아래에 `Input` + `Button` 이 형제로 들어가 있는 구조가 된다.

또한 스스로 ‘리렌더링은 언제 일어나야 하는가?’ 라는 질문을 던져 보고
이에 따라선 아래와 같은 상황들을 떠올렸다.

- **Input** 의 **change** 이벤트 발생 시
  → 현재 입력된 데이터가 화면에 렌더링
- **Button** 의 **submit** 이벤트 발생 시
  → 제출 성공 시 **회원가입 → 로그인 → 로그인 성공** 페이지 순으로 리렌더링

### Stateless+Stateful 컴포넌트 트리 구조

그렇다면 Input과 Button은 stateful,
나머지를 stateless로 만들어야 할까? 라고 하면 그렇지는 않다.

왜냐하면 인풋에 작성되는 데이터들은 곧 버튼으로 넘어가 유효성 검사에 쓰여야 되며,

버튼에서 폼 제출 실패와 같은 이벤트 발생 시엔
이 state가 인풋으로 넘어가 에러 메세지를 띄워야 하기 때문이다.

여러 자식 컴포넌트에 영향을 줄 수 있는 state는 통합하는 게 좋다(고 배웠다). 여기저기 상태가 분산되면 겉보기에 복잡할 뿐만 아니라 동일한 데이터를 나타내는 state 값이 엇갈려 모순적인 화면이 렌더링될 수 있기 때문이다.
(React 철학에서 강조하는 `Data down, Actions up` !)

따라서, 나는 공통 부모인 Form 컴포넌트에
‘현재 입력된 데이터’를 나타내는 state와
‘현재 렌더링돼야 할 폼’을 나타내는 state를 선언한 후

각각 인풋과 버튼에서 데이터를 **끌어올려** 업데이트 → 이후 자식 컴포넌트에 **흘려보내는** 구조를 그렸다.

또한 Input은 비밀번호 표시 여부에 따라 리렌더링 되어야 하기 때문에
아이콘 클릭 시 업데이트되는 state도 개별적으로 선언하도록 했다.

이를 토대로 트리 구조도를 그려 보니 아래처럼 state가 하위 컴포넌트에 흘러 내려가면서 업데이트, 리렌더링을 반복하는 구조가 되었다.

![image.png](/apps/week2/public/docs/structure.png)

이 때 유효성 검사를 인풋의 change 이벤트마다 할지 버튼의 submit 이벤트에서 한 번에 할지 고민하기도 했는데, 입력 시작과 동시에 에러 메세지가 뜨는 건 사용자에게 썩 유쾌한 경험이 아니라고 생각해 버튼에서 한 번에 처리하기로 했다.

이후 버튼 클릭 → 제출 실패를 1회 겪고 난 후엔 change 이벤트에 따라 실시간으로 바뀌는 것이 베스트겠지만 제출 마감이 얼마 안 남은 상태에서 과제를 시작한지라… 우선은 뼈대가 될 로그인 폼만 먼저 구현해 보고 이후 회원가입/로그인 성공을 데이터 객체를 빼서 `map` 으로 렌더링하는 등 디테일을 손보기로 했다.

## 과제 수행 과정

### theme.js

우선 제공된 시안의 스타일가이드에서 컬러 변수를 추출해
`src/styles/theme.js` 에 light/dart 테마로 나눠 객체를 만들었다.

이렇게 만든 테마 객체는 스타일드컴포넌트에서 제공하는
`ThemeProvider` 에 props로 넘겨 그대로 쓸 수 있다…!! (신세계)

라이트/다크모드 토글도 조건 하나만 검사하면 된다.

```jsx
export const lightTheme = {
  colors: {
    primary: {
      normal: '#3578FF',
      hover: '#5B8DFF',
      active: '#1855F5',
      disabled: 'rgba(53,120,255,.5)',
    },
    success: {
	    // ...
    },
  // ...
}

export const darkTheme = {
  colors: {
	  // ...
  }
  // ...
}
```

따라서, 추후 다크모드 버튼을 구현한다면 바로 연결 가능하게
루트인 App에다 `isDark` 라는 state를 만들고 이에 따라 맞는 객체를 보내도록 했다.

```jsx
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme.js';

function App() {
  const [isDark, setisDark] = useState(false);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      // ...
    </ThemeProvider>
  );
}
```

### Input.jsx

```jsx
export default function Input({
  type = 'text',
  id,
  label,
  value,
  placeholder,
  onChange,
  invalid = false,
  error,
  required = true,
  ...props
}) {
  const [isToggleClicked, setIsToggleClicked] = useState(false);

  function handleToggleClick() {
    setIsToggleClicked((prevToggle) => !prevToggle);
  }

  return (
    <div>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput $invalid={invalid}>
        <InputField
          type={isToggleClicked ? 'text' : type}
          id={id}
          value={value}
          placeholder={placeholder}
          onChange={(e) => {
            onChange(e.target.id, e.target.value.toLowerCase());
          }}
          onKeyDown={(e) => {
            if (e.key === ' ') e.preventDefault();
          }}
          required={required}
          {...props}
        />
        {type === 'password' && (
          <ToggleViewIcon
            isToggleClicked={isToggleClicked}
            onClick={handleToggleClick}
          />
        )}
      </StyledInput>
      <ErrorMessage $invalid={invalid}>{error}</ErrorMessage>
    </div>
  );
}
```

```jsx
function ToggleViewIcon({ isToggleClicked, onClick }) {
  return <svg></svg>;
}
```

---

## 🌈 2주차 회고
