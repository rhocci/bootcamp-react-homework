import 'galmuri/dist/galmuri.css';
import { useEffect, useState } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.js';
import { fetchPokemonData } from './api/pokemon.js';
import Header from './components/Header/Header.jsx';
import ToolBar from './components/ToolBar/ToolBar.jsx';
import CardContainer from './components/CardContainer/CardContainer.jsx';
import Card from './components/Card/Card.jsx';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Galmuri11', sans-serif;
    -webkit-font-smoothing: none;
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.bg.body};
  }
`;

const StyledApp = styled.div`
  min-height: 100vh;
`;

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const data = await fetchPokemonData({ query: 'limit=20&offset=0' });
      setPokemonList(data);
      setIsLoading(false);
    }
    loadData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledApp>
        <Header />
        <ToolBar />
        <CardContainer>
          {isLoading ? (
            <div>로딩중</div>
          ) : (
            pokemonList.map((pokemon) => (
              <Card
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name.ko}
                img={pokemon.sprite}
                types={pokemon.types}
              ></Card>
            ))
          )}
        </CardContainer>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
