# 3주차 과제 - Search List UI 포켓몬 도감 만들기

> React 3주차 과제 기록을 정리한 문서입니다.

## 🔖 목차

- [환경 구성 + 트리 구조 잡기](#-환경-구성--트리-구조-잡기)
  - [초기 환경 구성](#초기-환경-구성)
  - [과제 요구사항 분석](#과제-요구사항-분석)
  - [기존 코드의 문제점](#기존-코드의-문제점)
  - [폴더 구성](#폴더-구성)
- [과제 수행 과정](#-과제-수행-과정)
  - [App](#최종-appjsx-구조)
  - [Button](#buttonjsx)
  - [Card](#cardjsx)
  - [ToolBar](#toolbarjsx)
  - [데이터(Context) 관리 파일](#데이터context-관리-파일)
  - [API 연동 로직](#api-연동-로직apipokemonjs)
- [컴포넌트 명세서](#-컴포넌트-명세서)
- [3주차 회고](#-3주차-회고)

## 📁 환경 구성 + 트리 구조 잡기

### 초기 환경 구성

3주차는 저번 주와 동일하게 `bun+vite` , `styled-components` 로 폴더 구성 후<br>
아래와 같이 추가로 같이 써 보고 싶은 구성 요소를 세팅했다.

- [Storybook](https://storybook.js.org/)
  컴포넌트 포함 마크다운(`mdx`) 지원하는 라이브러리, 동적인 컴포넌트 가이드 작성용.<br>
  → 존재만 알고 사용법은 잘 몰랐지만 너무 써 보고 싶어서 과제에 실험?적용해 봤다.
  ```bash
  bunx storybook@latest init
  bun run storybook
  ```
- `vite.config.js` 추가 설정<br>
  -> dev서버 구동 시 `styled-components` 로 해싱 처리된 클래스에 원본 컴포넌트명을 포함하는 옵션 활성화 (ex. `StyledButton_abc123`)<br>
  -> styled로 스타일링한 컴포넌트엔 랜덤 클래스명이 붙으니 개발 중 원본을 쉽게 구분하기 위해 활성화했다.

  ```jsx
  // vite.config.js (나머지 설정들: from.야무쌤 코드)
  export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    const isProduction = mode === 'production';

    return {
      plugins: [
        react({
          styledComponents: true, // devtools-friendly 클래스명
        }),
        viteCompression(),
      ],
    // ...
  ```

### 과제 요구사항 분석

```tsx
- 사용자에게 입력받아 검색한 키워드로 필터링되는 카드 리스트 UI
- "검색" 버튼을 누르면 브라우저 주소창의 쿼리 스트링 업데이트
- 직접 주소창에 URL을 입력 요청한 경우, 필터링된 UI 렌더링
- 브라우저 주소창의 이전/다음 탐색 버튼을 눌렀을 때 UI 렌더링
- 검색 쿼리에 따른 태그 활성/비활성 처리 및 UI 렌더링
```

이번 주 과제 요구 사항과 데모 시안들을 보자마자 딱 떠오른 주제가 있다.

자바스크립트 학습 당시 바닐라JS로 만들어봤던 [포켓몬 도감 사이트](https://rhocci.github.io/project-pokedex/)를 리액트로 리팩토링하는 것!

이 도감 프로젝트는 리팩토링 해봐야지 해봐야지 하며 미루기만 했는데<br>
이번 요구사항이랑도 잘 맞을 것 같고, 디자인 등 직접 구성한 사이트라 구현이 더 재밌을 것 같았다.<br>
불편함을 느끼면서 짰던 코드라 리액트의 편안함을 더 체감할 수 있을 것 같기도 하고.

요구사항을 살펴보면 크게 아래와 같은 필수 기능을 구현해야 하는 것 같다.

- API로 가져온(혹은 더미) 데이터를 카드 리스트 형태로 렌더링
- `검색` 버튼 클릭 시 쿼리 스트링을 붙여 `url` 업데이트, 바뀐 url로 다시 `fetch` 하는 방식
- 검색 쿼리에 따라 활성화된 데이터만 표시 or 렌더링

### 기존 코드의 문제점

바닐라JS로 짰을 땐 최초 포켓몬 전체 데이터를 `fetch` 로 받아온 뒤

검색/타입 버튼을 클릭하면 전체 데이터를 배열 메서드로 필터링,<br>
그 후 DOM을 직접 조작해 필터된 결과를 렌더링하는 방식으로 구현했었다.

1. **PokéAPI fetch**

   → 초기 페이지 로드 시 전체 포켓몬 데이터 받아옴

   ```tsx
   export let allPokemons = [];
   let currentPokemons = [];
   let currentPage = 0;

   const DATA_NUM_LIMIT = 20;

   /** 포켓몬 데이터 받아오기(전체) */
   export const getAllPokemons = async function () {
     try {
       const loading = document.querySelector('.loading');

       loading.classList.add('show');
       controlBar.style.display = 'none';

       const res = await fetch(
         'https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000'
       );
       const data = await res.json();
       const pokemonList = data.results;
       const detailPromises = pokemonList.map((item) =>
         fetch(item.url).then((res) => res.json())
       );

       allPokemons = await Promise.all(detailPromises);

       loading.classList.remove('show');
       controlBar.style.display = 'flex';

       searchPokemon();
       filterPokemon();
     } catch (error) {
       console.error(error);
     }
   };
   ```

2. **검색/타입 필터링**

   → `fetch` 를 다시 하지 않고 전체 포켓몬 데이터를 `filter` 메서드로 필터 후 렌더링

   ```tsx
   import { allPokemons, getPokemons, renderPokemons } from './pokemon.js';

   // ...

   /** 검색 기능 */
   export const searchPokemon = () => {
     const searchInput = document.querySelector('input[name="pokemon"]');
     const noResult = document.querySelector('.no-result');

     searchInput.addEventListener('input', (e) => {
       const searchText = searchInput.value;

       controlBar.classList.add('hide');
       cardContainer.innerHTML = '';

       const searchedPokemon = allPokemons.filter((item) =>
         item.name.includes(searchText)
       );

       if (searchedPokemon.length === 0) {
         noResult.classList.add('show');
       } else {
         noResult.classList.remove('show');
         searchedPokemon.forEach((pokemon) => renderPokemons(pokemon));
       }

       if (searchText.length === 0) {
         controlBar.classList.remove('hide');
         pageBtns.classList.remove('hide');
         filterText.textContent = '필터';
         getPokemons(0);
       }
     });
   };

   /** 필터링 기능 */
   export const filterPokemon = () => {
     filterBtn.addEventListener('click', (e) => {
       const typeBtn = e.target.closest('.type');
       if (!typeBtn) return;

       filterText.textContent = typeBtn.textContent;
       pageBtns.classList.add('hide');

       let clickedType = typeBtn.classList[1].split('-')[1];

       const filteredPokemon = allPokemons.filter((pokemon) => {
         return pokemon.types.some((types) => types.type.name == clickedType);
       });

       cardContainer.innerHTML = '';
       filteredPokemon.forEach((pokemon) => renderPokemons(pokemon));
     });
   };
   ```

이렇게 구현을 하니, 앱을 열자마자 1000개가량의 전체 데이터를 받아와야 해서 초기 로딩이 꽤나 오래 걸렸다.

페이지네이션 기능(현재 페이지에 따라 일부 데이터만 `fetch` 후 렌더링)도 있었기 때문에<br>
사실상 포켓몬 전체 데이터는 검색/타입 필터링 기능 외에는 전혀 쓸모가 없었던 것이다.

하지만 이 전체 데이터 `fetch` 작업은 초기 로딩을 극악으로 만들었고<br>
이를 땜빵하기 위해 접속하자마자 로딩스피너가 나오는 등… 절대 쾌적한 앱이라곤 말할 수 없었다..

따라서, 이번 주는 리액트로 코드 리팩토링을 진행하면서<br>
불편했던 사이트를 다소 유저 친화적인 사이트로 개선할 예정이다.

### 폴더 구성

(어쩌다 이렇게 많아졌지…)

```tsx
week3/
├── .storybook/               # 스토리북 설정
├── public/
├── src/
│   ├── api/                  # 외부 API 호출 로직
│   │   └── pokemon.js
│   ├── assets/               # 이미지, 폰트, 전역 자원
│   ├── components/           # UI 단위 컴포넌트
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   └── Button.stories.jsx
│   │   ├── Card/
│   │   ├── CardContainer/
│   │   ├── Header/
│   │   ├── Input/
│   │   ├── Modal/
│   │   ├── StatusMessage/
│   │   ├── ToolBar/
│   │   └── TypeSelector/
│   ├── store/                # 전역 상태 관리(Context 등)
│   │   ├── pokedex-context.jsx
│   │   └── PokedexContextProvider.jsx
│   ├── styles/
│   │   └── theme.js
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── vite.config.js
```

## 🔎 과제 수행 과정

### 최종 App.jsx 구조

App에는 최대한 불필요한 데이터나 로직 없이 레이아웃을 구성 역할만 담당하도록 했다.

```tsx
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledApp>
        <PokedexContextProvider>
          <Header title="Pokédex" />
          <ToolBar />
          <CardContainer />
        </PokedexContextProvider>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
```

### Button.jsx

```tsx
export default function Button({
  type = 'button',
  variant = 'text',
  children,
  label = undefined,
  onClick,
}) {
  return (
    <StyledButton
      type={type}
      $variant={variant}
      aria-label={variant === 'icon' ? label : undefined}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}
```

### Card.jsx

```jsx
import Button from '../Button/Button.jsx';
import { POKEMON_TYPE } from '../TypeSelector/pokemon-types.js';

export default function Card({ id, name, img, types = [] }) {
  return (
    <StyledCard>
      <CardHeader>
        <span>No. {id}</span>
        <h2>{name}</h2>
      </CardHeader>
      <CardContent>
        <img src={img} alt={`${name} 이미지`} />
        <Button type="button" variant="text" onClick={() => {}}>
          상세정보
        </Button>
      </CardContent>
      <CardFooter>
        <ul>
          {types.map((type) => (
            <Type key={type} $type={type}>
              {POKEMON_TYPE[type].ko}
            </Type>
          ))}
        </ul>
      </CardFooter>
    </StyledCard>
  );
}
```

### ToolBar.jsx

```tsx
export default function ToolBar({ currentPage = 1 }) {
  return (
    <StyledToolBar>
      <TypeFilter>
        <span>필터</span>
        <ul>
          {Object.entries(POKEMON_TYPE).map((type) => (
            <li key={type[0]}>
              <TypeSelector type={type[0]} />
            </li>
          ))}
        </ul>
      </TypeFilter>

      <PageController>
        <Button variant="icon" label="이전 페이지로">
          <img src={prevPage} alt="" />
        </Button>
        <span>{currentPage}페이지</span>
        <Button variant="icon" label="다음 페이지로">
          <img src={nextPage} alt="" />
        </Button>
      </PageController>
    </StyledToolBar>
  );
}
```

### 데이터(Context) 관리 파일

1. `pokedex-context.jsx`

   ```tsx
   import { createContext } from 'react';

   export const PokedexContext = createContext({
     pokemonList: [],
     searchQuery: '',
     status: 'loading',
     handleSearchSubmit: () => {},
     handleTypeSelect: () => {},
   });
   ```

2. `PokedexContextProvider.jsx`

   ```tsx
   import { useState, useEffect } from 'react';
   import { PokedexContext } from './pokedex-context';
   import { fetchPokemonData } from '../api/pokemon';

   export default function PokedexContextProvider({ children }) {
     const [searchQuery, setSearchQuery] = useState('');
     const [selectedType, setSelectedType] = useState(null);
     const [pokemonList, setPokemonList] = useState([]);
     const [status, setStatus] = useState('loading');

     useEffect(() => {
       const query = new URLSearchParams(window.location.search).get('q') || '';
       setSearchQuery(query);

       async function loadData() {
         const data = await fetchPokemonData();
         setPokemonList(data);
         setStatus('loaded');
       }
       loadData();

       function handlePopState() {
         const query =
           new URLSearchParams(window.location.search).get('q') || '';
         setSearchQuery(query);
       }
       window.addEventListener('popstate', handlePopState);
       return () => window.removeEventListener('popstate', handlePopState);
     }, []);

     function handleSearchSubmit(e) {
       e.preventDefault();
       const formData = new FormData(e.target);
       const inputValue = formData.get('search-pokemon')?.trim() || '';

       setSearchQuery(inputValue);

       const updatedUrl = inputValue
         ? `?q=${inputValue}`
         : window.location.pathname;
       window.history.pushState({}, '', updatedUrl);
     }

     function handleTypeSelect(type) {
       setSelectedType(type);
     }

     const filteredList = pokemonList.filter((pokemon) => {
       const typeValue = selectedType
         ? pokemon.types.includes(selectedType)
         : true;
       const searchValue = pokemon.name.ko.includes(searchQuery);

       return typeValue && searchValue;
     });

     useEffect(() => {
       if (status === 'loaded' && filteredList.length === 0) {
         setStatus('empty');
       }
     }, [filteredList, status]);

     const ctxValue = {
       pokemonList: filteredList,
       searchQuery,
       status,
       handleSearchSubmit,
       handleTypeSelect,
     };

     return (
       <PokedexContext.Provider value={ctxValue}>
         {children}
       </PokedexContext.Provider>
     );
   }
   ```

### API 연동 로직(api/pokemon.js)

```tsx
const BASE_URL = 'https://pokeapi.co/api/v2';

export async function fetchPokemonData() {
  try {
    const res = await fetch(`${BASE_URL}/pokemon?limit=200`);
    const data = await res.json();

    const req = data.results.map(async (result) => {
      const pokemon = await fetch(result.url).then((res) => res.json());
      const species = await fetch(
        `${BASE_URL}/pokemon-species/${pokemon.id}`
      ).then((res) => res.json());

      const koreanName =
        species.names.find((item) => item.language.name === 'ko')?.name ||
        pokemon.name;
      const koreanDesc =
        species.flavor_text_entries.find((item) => item.language.name === 'ko')
          ?.flavor_text || '상세설명 없음';
      const types = pokemon.types.map((item) => item.type.name);

      return {
        id: pokemon.id,
        name: {
          en: pokemon.name,
          ko: koreanName,
        },
        types: types,
        description: koreanDesc,
        sprite: pokemon.sprites.front_default,
      };
    });

    const pokemonList = await Promise.all(req);
    return pokemonList;
  } catch (error) {
    console.error(error.message);
  }
}
```

## 🧩 컴포넌트 명세서

> 컴포넌트 가이드는 배포된 **Pokédex Storybook** 에서 확인할 수 있습니다.

[![Storybook](https://img.shields.io/badge/Storybook-visit-ff4785?logo=storybook&logoColor=white)](https://storybook-week3.vercel.app/)

---

## 🌈 3주차 회고

이번 주도 무의식중에 '빨리 끝낼 수 있을 것 같은데?'라는 마음이 있었는지<br>
시간은 한정돼있는데 이것저것 욕심부리다 마감을 못 지켰다 ;ㅁ; 안일함에 반성..

그래도 포켓몬 도감 리팩토링 + 스토리북으로 컴포넌트 가이드 만드는 건 너무너무 재밌었다.<br>
급하게 내느라 풀이과정도 상세하게 못 쓰고 기능 몇개(상세정보 모달, 페이지네이션)는 구현을 못했지만...<br>
이번 작업은 꼭 시간 내서 나머지 기능들까지 마무리해보고 싶다.

불과 두세 달 전이지만 VanillaJS 코드도 오랜만에 살펴보니<br>
일일히 element 이어붙여서 카드 만들기, 리스트/타입 색상 하드코딩하기 등<br>
여러 시행착오를 겪던 게 생각이 나 보는 재미가 쏠쏠하기도 했다..<br>

당시에 PokeAPI에서 한글 데이터를 못 찾아 전부 영어로 넣었던 기억이 나는데<br>
이번에는 데이터 한글화도 무사히 완료해서 일단 만족!
