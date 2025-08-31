import { createContext, useEffect, useState } from 'react';
import { fetchPokemonData } from '../api/pokemon.js';

export const PokedexContext = createContext({
  pokemonList: [],
  filterPokemons: () => {},
  status: 'loading',
});

export default function PokedexContextProvider({ children }) {
  const [searchParams, setSearchParams] = useState('');
  const [pokemonList, setPokemonList] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    async function loadData() {
      const data = await fetchPokemonData({ query: 'limit=100&offset=0' });
      setPokemonList(data);
      setStatus('loaded');
    }
    loadData();
  }, []);

  function handleSearchSubmit(e) {
    const inputValue = [...e.target.value].trim().toLowercase().toString();

    setSearchParams(inputValue);
  }

  const ctxValue = {
    pokemonList: pokemonList,
    filterPokemons: handleSearchSubmit,
    status: status,
  };

  return (
    <PokedexContext.Provider value={ctxValue}>
      {children}
    </PokedexContext.Provider>
  );
}
