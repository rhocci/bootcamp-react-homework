# 🧩 컴포넌트 가이드 - ListItem

> `li` 리스트 안 요소 타이틀과 자식 노드를 포함하는 리스트 컴포넌트.

### 설명

- 리스트 요소 UI에 재사용 가능한 structure 컴포넌트
- `children` 에 문자열 혹은 자식 노드 삽입하여 사용
- 기본 스타일 포함(space-between)

### 기본 사용법

```jsx
import ListItem from "@/components/ListItem/ListItem.jsx";

<ListItem title="리스트 요소">요소1</ListItem>;
```

### props

| 속성명     | 타입             | 설명                 | 기본값 |
| ---------- | ---------------- | -------------------- | ------ |
| `title`    | string           | 요소 제목 텍스트(h3) | -      |
| `children` | string \| object | 자식 요소 노드       | -      |
