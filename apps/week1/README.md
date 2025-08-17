# n주차 과제 - 과제명

> React 1주차 과제 기록을 정리한 문서입니다.

## 🔖 목차

- [🔎 과제 수행 과정](#-과제-수행-과정)
  - [초기 환경 구성](#초기-환경-구성)
  - [과제 요구사항 분석](#과제-요구사항-분석)
  - [컴포넌트 폴더 구성](#컴포넌트-폴더-구성)
  - [SvgIcon.jsx](#svgiconjsx)
  - [UploadButton.jsx](#uploadbuttonjsx)
  - [App.jsx 조립하기](#appjsx-조립하기)
  - [ListSection.jsx, ListItem.jsx](#listsectionjsx-listitemjsx)
  - [data.jsx](#datajsx)
  - [리팩토링된 App.jsx](#리팩토링된-appjsx)
- [🌈 1주차 회고](#-1주차-회고)

---

## 🔎 과제 수행 과정

### 초기 환경 구성

과제 레포지토리에 업로드될 루트 폴더는 아래와 같이 구성했다.
각 주차 폴더가 독립적인 패키지를 가지고 공통 스타일/유틸 등은 공유하는 모노레포 환경이다.
1주차에는 아직 익숙한 `pnpm+vite+js` 로 환경을 세팅했고
차주 과제부터는 `bun` 이나 `bun+vite` 등등 다양한 실행 환경으로 구성해 볼 예정이다.

`common` 폴더의 기본 css를 모아놓은 `index.css` 는
각 주차의 entry point인 `main.jsx` 에서 불러오도록 했다.

```
🌟 bootcamp-react-homework
├── 📁 apps/
│   └── 📁 week1/
├── 📁 common/
│   ├── _a11y.css
│   ├── _base.css
│   ├── _reset.css
│   ├── _theme.css
│   └── index.css
└── 📄 README.md
```

### 과제 요구사항 분석

```
- Stateless 컴포넌트(SvgIcon, UploadButton) 구현
- 재사용성을 고려한 설계
- 함수형 컴포넌트로 작성
- props에 따라 렌더링이 달라지도록 구현하기
```

1주차는 `useState` 및 state(상태)를 이용하지 않고
`props` 에 의해 다르게 렌더링되는 컴포넌트를 설계하는 과제이다.

과제를 시작하기에 앞서 우선 ‘stateless 컴포넌트’와
‘재사용성이 높은 컴포넌트’의 조건을 되짚어 보았다.

- **stateless component(=presentational component)란?**
  - state를 가지지 않는 컴포넌트
  - 데이터 저장/관리 없이 `props` 값을 받아 시각적으로 화면을 그리는 역할 담당
  - 데이터/로직이 얽혀있지 않아 재사용성이 높다.
- **재사용성이 높은 컴포넌트의 조건?**
  - `props` 로 유연한 제어가 가능해야 한다.(하드코딩 값 최소화)
  - 기본값(default props value)를 제공해야 한다.
  - 단일 컴포넌트가 너무 복잡한 기능을 가지는 것을 지양하고 최소 기능 단위로 분리되어야 한다.
  - 접근성을 고려해 다양한 상황에 대응 가능하게 해야 한다.
  - 가능한 독립적이며 외부 의존성이 낮아야 한다.

### 컴포넌트 폴더 구성

`src/components/` 에 각 컴포넌트 폴더를 만들고 전용 css와 jsx파일을 넣었다.
폴더와 파일, 컴포넌트명은 파스칼케이스로 통일했으며 모든 컴포넌트는 함수형으로 선언했다.

```jsx
components/
├── SvgIcon/
│   ├── SvgIcon.css
│   └── SvgIcon.jsx
└── UploadButton/
    ├── UploadButton.css
    └── UploadButton.jsx
```

### SvgIcon.jsx

(코드 가독성으로 인해 회고에서 default value는 생략)

> `SvgIcon` (default function)

명세서에 따라 `props` 를 구조분해할당으로 받은 후
렌더링될 `svg` 요소를 반환하는 default 함수의 뼈대를 잡았다.

```jsx
import './SvgIcon.css'

export default function SvgIcon({type, size, color, label, ...props}) {
  return (
	  // 반환할 아이콘 요소
  );
}
```

`SvgIcon` 의 경우 아이콘의 벡터 `path` 만 갈아끼우면 일관된 방식으로 렌더링 가능하다고 생각했으나
시안에는 애니메이션 CSS가 포함된 spinner 아이콘이 있었으므로 분기를 나눠야 했다.

따라서 `SvgIcon.jsx` 내에서만 적용되는 `StaticIcon` , `Spinner` 컴포넌트를 추가 선언하여
`type` 이 spinner인지 아닌지에 따라 각 컴포넌트를 조건부로 반환하도록 했다.

사용자가 `className`, `style`, `id` 등 HTML 추가 속성 `props` 를 넘겨줄 것을 고려해서
명세서에 기재하지 않은 나머지 인수들은 `...props` 로 `props` 객체에 묶은 후 컴포넌트에 그대로 전달했다.

```jsx
import { useId } from "react";

export default function SvgIcon({ type, size, color, label, ...props }) {
  // useId 훅으로 랜덤 id 생성
  const id = useId();

  // type이 'spinner'면 Spinner, 이외엔 StaticIcon 반환
  return type === "spinner" ? (
    <Spinner size={size} color={color} id={id} label={label} {...props} />
  ) : (
    <StaticIcon
      type={type}
      size={size}
      color={color}
      id={id}
      label={label}
      {...props}
    />
  );
}
```

또한 랜덤 id를 생성하는 `useId` API를 리액트 라이브러리에서 가져온 후 각 컴포넌트에 `id` prop을 넘겼다.

이 아이디 코드는 후에 접근성 라벨 텍스트인 `<title>` 의 `id` 와 텍스트가 가리키는 이미지인 `<svg>` 의 `aria-labelledby` 에 전달하여 이미지-라벨을 연결시키는 용도로 쓸 것이다.

`StaticIcon` (private function)

```jsx
function StaticIcon({ type, size, color, id, label, ...props }) {
  let d;

  // type prop에 따라 path를 d에 저장
  switch (type) {
    case "up-arrow":
      d = "...";
      break;
    case "check-mark":
      d = "...";
      break;
    case "cross":
      d = "...";
      break;
    case "not-allowed":
      d = "...";
  }

  return (
    <svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 12 12"
      role={label && "img"}
      aria-labelledby={id}
      aria-hidden={!label}
      {...props}
    >
      {label && <title id={id}>{label}</title>}
      <path fill={color} d={d} fillRule="evenodd" clipRule="evenodd"></path>
    </svg>
  );
}
```

- 접근성 `label` 을 넣었을 경우엔 `role` 에 라벨 텍스트를, 아닐 시엔 `img` 로 설정했다.
- `svg` 의 `aria-labelledby` 에 받아온 `id` 를 바인딩한 후 `&&` 연산자를 사용해 `label` 값 truthy 여부에 따라 svg 안에 `<title id={id}>{label}</title>` 을 추가했다.
- `label` 이 없을 시(`!label === true`) `aria-hidden` 도 `true` 가 되도록 했다.
- 받아온 나머지 인수 객체 `...props` 는 svg에 전달했다.

> `Spinner` (private function)

```jsx
function Spinner({ size, color, id, label, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      stroke={color}
      viewBox="0 0 24 24"
      role={label && "img"}
      aria-labelledby={id}
      aria-hidden={!label}
      {...props}
    >
      {label && <title id={id}>{label}</title>}
      <g className="spinner_V8m1">
        <circle cx="12" cy="12" r="9.5" fill="none" strokeWidth="3" />
      </g>
    </svg>
  );
}
```

- `SvgIcon.css` 에는 스피너 클래스(`.spinner_V8m1`)에 지정할 애니메이션을 넣어 주었다.

  ```css
  .spinner_V8m1 {
    transform-origin: center;
    animation: spinner_zKoa 2s linear infinite;

    circle {
      stroke-linecap: round;
      animation: spinner_YpZS 1.5s ease-in-out infinite;
    }
  }

  /* 이하 애니메이션 키프레임 정의(spinner_zKoa, spinner_YpZS) */
  ```

### UploadButton.jsx

UploadeButton 컴포넌트는 SvgIcon 컴포넌트를 자식으로 포함한다.
따라서 import 후 return 요소에 포함했다.

이 컴포넌트도 전체적으로 일관된 구성이었으나 status가 `disabled` 일 땐
버튼에 비활성화 속성을 추가하며 색상도 조정하는 분기 추가가 필요했으므로
우선 `isBtnDisabled` 라는 상수를 선언해 해당 버튼의 상태가 비활성인지 boolean 값으로 저장했다.

또한 `status(key): type(value)` 형태의 `ICON_MAP` 객체를 만들어서
SvgIcon 컴포넌트를 삽입할 때 상태에 맞는 아이콘 타입을 바로 전달할 수 있도록 했다.

```jsx
import SvgIcon from '../SvgIcon/SvgIcon.jsx';
import './UploadButton.css';

export default function UploadButton({ lang, label, status, color, size, children, ...props})
  const isBtnDisabled = status === 'disabled';
  const ICON_MAP = {
    idle: 'up-arrow',
    pending: 'spinner',
    resolved: 'check-mark',
    rejected: 'cross',
    disabled: 'not-allowed',
  };

  return (
    <button
      type="button"
      className={`btn btn--${status}`}
      lang={lang}
      aria-label={label}
      title={label}
      disabled={isBtnDisabled}
      {...props}
    >
      {children}
      {ICON_MAP[status] && (
        <SvgIcon
          type={ICON_MAP[status]}
          size={size}
          color={isBtnDisabled ? '#ADAEB6' : color}
          label={label}
        />
      )}
    </button>
  );
}

```

- 클래스명은 동일하게 `btn` 으로 지정하고 `btn--${status}` 클래스를 추가로 붙여 버튼의 상태를 식별, 상태별 스타일 조정이 가능하게 했다.
- `label` prop은 `aria-label` 과 `title` 에 전달해 스크린리더/툴팁에서 모두 뜨도록 했다.
- 버튼이 비활성화 상태일 경우(`isBtnDIsabled === true`) `disable` 속성을 활성화하고 전달받은 `color` 대신 비활성화를 나타내는 색상(#ADAE86)을 전달하도록 했다.

### App.jsx 조립하기

위의 컴포넌트 두 개를 만든 후엔 루트 컴포넌트인 `App` 에 조립해
인덱스 페이지에서 `props` 에 따라 다르게 렌더링되는 컴포넌트들을 볼 수 있도록 만들었다.

따라서 `main.jsx` (엔트리)에는 `div#root` 를 진입점으로 지정하고
`App` 컴포넌트를 렌더링하도록 설정했다.

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../../../common/styles/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

그러고 나서 처음 조립했던 `App.jsx` 의 상태는 이랬는데…

```jsx
import SvgIcon from "./components/SvgIcon/SvgIcon.jsx";
import UploadButton from "./components/UploadButton/UploadButton.jsx";

function App() {
  return (
    <>
      <h1>1주차 과제 - Stateless 컴포넌트</h1>
      <main id="container">
        <section className="svg-icon">
          <h2>SvgIcon</h2>
          <ul className="component-list">
            <li>
              <h3>up-arrow</h3>
              <SvgIcon />
            </li>
            <li>
              <h3>spinner</h3>
              <SvgIcon type="spinner" />
            </li>
            <li>
              <h3>up-arrow</h3>
              <SvgIcon type="check-mark" />
            </li>
            <li>
              <h3>up-arrow</h3>
              <SvgIcon type="cross" />
            </li>
            <li>
              <h3>up-arrow</h3>
              <SvgIcon type="not-allowed" />
            </li>
          </ul>
        </section>
        <section className="upload-button">
          <h2>UploadButton</h2>
          <ul className="component-list">
            <li>
              <h3>idle</h3>
              <UploadButton label="업로드 대기"></UploadButton>
            </li>
            <li>
              <h3>pending(loading)</h3>
              <UploadButton label="업로드 중" status="pending">
                업로드 중
              </UploadButton>
            </li>
            <li>
              <h3>resolved</h3>
              <UploadButton label="업로드 성공" status="resolved">
                완료
              </UploadButton>
            </li>
            <li>
              <h3>rejected</h3>
              <UploadButton label="업로드 실패" status="rejected">
                실패
              </UploadButton>
            </li>
            <li>
              <h3>disabled</h3>
              <UploadButton
                label="비활성 버튼"
                status="disabled"
              ></UploadButton>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
```

`section` - `h2` - `ul` - `li` - `h3` - 요소 형태가 반복되는 것이 눈에 띄었다.
이대로 두면 코드가 너무 장황하니 리스트 섹션/요소 형태도 재사용 가능한 컴포넌트로 만들어 쓰기로 해보았다.

### ListSection.jsx, ListItem.jsx

ListSection과 ListItem은 심플하게 `title` 과 `children` 을
props로 받아와 자식 요소 안에 바인딩하는 컴포넌트로 만들었다.

둘을 합쳐서 애초에 `ul` 안에 `li` 가 5개 들어가 있는 형태로 만들까도 생각했지만
재사용성을 고려했을 때 자식 요소는 `children` 으로 DOM 통째로 받아오는 것이 더 적합하다고 생각했다.

```jsx
// ListSection.jsx
import './ListSection.css';

export default function ListSection({ title, children }) {
  return (
    <section className="list-section">
      <h2>{title}</h2>
      <ul className="list">{children}</ul>
    </section>
  );
}

// ListItem.jsx
import "./ListItem.css";

export default function ListItem({ title, children }) {
  return (
    <li className="list-item">
      <h3>{title}</h3>
      {children}
    </li>
  );
}
```

이제 아래처럼 ListSection 안에 ListItem을 여러 개 넣은 형태로 불러와
아까전의 장황한 코드를 한 층 줄일 수 있게 되었다.

```jsx
<ListSection title="리스트">
  <ListItem title="요소1">요소1</ListItem>
  <ListItem title="요소1">요소1</ListItem>
  <ListItem title="요소1">요소1</ListItem>
</ListSection>
```

### data.jsx

이렇게만 해도 코드가 줄었지만, `App.jsx` 를 조금 더 깔끔하고 유연하게 구성하기 위해
`LIstSection` 에 들어가는 각 `ListItem` 은 `map` 을 사용해 렌더링하기로 했다.

따라서 `data.jsx` 파일을 만들고 리스트 요소로 들어갈
`SvgIcon` 들과 `UploadButton` 들의 예시를 객체 배열로 만들어 export했다.
이제 차후 컴포넌트의 type이 추가되거나 삭제되면 제목과 렌더링 예시만 넣어 편하게 요소 추가/ 삭제가 가능하게 되었다.

이 때 각 객체는 `title` 과 `render` 프로퍼티로 구성했는데,
`title` 은 컴포넌트의 `title` prop으로 전달하고 `render` 는 `children` 자리에 호출할 예정이다.

```jsx
import SvgIcon from "./components/SvgIcon/SvgIcon.jsx";
import UploadButton from "./components/UploadButton/UploadButton.jsx";

export const SVGICON_ITEMS = [
  { title: "up-arrow", render: () => <SvgIcon /> },
  { title: "spinner", render: () => <SvgIcon type="spinner" /> },
  { title: "check-mark", render: () => <SvgIcon type="check-mark" /> },
  { title: "cross", render: () => <SvgIcon type="cross" /> },
  { title: "not-allowed", render: () => <SvgIcon type="not-allowed" /> },
];

export const BUTTON_ITEMS = [
  { title: "idle", render: () => <UploadButton label="업로드 대기" /> },
  {
    title: "pending",
    render: () => (
      <UploadButton label="업로드 중" status="pending">
        업로드 중
      </UploadButton>
    ),
  },
  {
    title: "resolved",
    render: () => (
      <UploadButton label="업로드 성공" status="resolved">
        {" "}
        완료{" "}
      </UploadButton>
    ),
  },
  {
    title: "rejected",
    render: () => (
      <UploadButton label="업로드 실패" status="rejected">
        실패
      </UploadButton>
    ),
  },
  {
    title: "disabled",
    render: () => <UploadButton label="비활성 버튼" status="disabled" />,
  },
];
```

### 리팩토링된 App.jsx

최종적으론 구조 컴포넌트와 `map` 렌더링을 이용해 반복되는 부분이 최소화된 `App` 컴포넌트를 완성했다.

순회 시에 `key` 엔 객체에 만들었던 요소 `title` 을 그대로 재활용해 고유 값을 붙여줬다.

```jsx
import ListSection from "./components/ListSection/ListSection.jsx";
import ListItem from "./components/ListItem/ListItem.jsx";
import { SVGICON_ITEMS, BUTTON_ITEMS } from "./data.jsx";
import "./App.css";

function App() {
  return (
    <>
      <header id="header">
        <h1>Stateless Components</h1>
        <p>React 1주차 과제 - 문서영</p>
      </header>
      <main id="container">
        <ListSection title="SvgIcon">
          {SVGICON_ITEMS.map((item) => (
            <ListItem key={item.title} title={item.title}>
              {item.render()}
            </ListItem>
          ))}
        </ListSection>
        <ListSection title="UploadButton">
          {BUTTON_ITEMS.map((item) => (
            <ListItem key={item.title} title={item.title}>
              {item.render()}
            </ListItem>
          ))}
        </ListSection>
      </main>
    </>
  );
}

export default App;
```

---

## 🧩 컴포넌트 가이드 링크 모음

> 컴포넌트 가이드는 각 폴더의 `README.md` 에서 확인할 수 있습니다.

| 컴포넌트     | 가이드 링크                                         |
| ------------ | --------------------------------------------------- |
| SvgIcon      | [바로가기](./src/components/SvgIcon/README.md)      |
| UploadButton | [바로가기](./src/components/UploadButton/README.md) |
| ListSection  | [바로가기](./src/components/ListSection/README.md)  |
| ListItem     | [바로가기](./src/components/ListItem/README.md)     |

---

## 🌈 1주차 회고

리액트와 JSX는 생소하지만 처음 HTML 컴포넌트 복사/붙여넣기 시절 → 바닐라JS의 `createElement` 엑조디아 → `React.createElement` 엑조디아를 단계별로 겪고 난 후 마침내 접하니 배우는 게 너무 재밌다.. 이렇게 편하고 재밌는 문법을 만들어 주신 meta 팀에게 감사하자…

다만 리액트를 십분 활용하려면 재사용성을 최우선으로 고려해야 하다 보니 컴포넌트 구조 설계와 상태 데이터 관리에 이전보다 더 많은 생각을 하고 노력을 기울여야 할 것 같다고 느꼈다.

멋사 부트캠프도 벌써 막바지 단원, 프로젝트를 남겨두고 있는데
지금껏 해왔듯이 마지막까지도 최선을 다 하자!
