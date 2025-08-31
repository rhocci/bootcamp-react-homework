import { createContext, useEffect, useState } from 'react';
import { fetchPokemonData } from '../api/pokemon.js';

export const PokedexContext = createContext({
  pokemonList: [],
  searchQuery: '',
  status: 'loading',
  handleSearchSubmit: () => {},
});

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
      const query = new URLSearchParams(window.location.search).get('q') || '';
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

  const filteredList = selectedType
    ? pokemonList.filter((pokemon) => pokemon.types.includes(selectedType))
    : pokemonList.filter((pokemon) => pokemon.name.ko.includes(searchQuery));

  const ctxValue = {
    pokemonList: filteredList,
    searchQuery,
    status,
    handleSearchSubmit,
  };

  return (
    <PokedexContext.Provider value={ctxValue}>
      {children}
    </PokedexContext.Provider>
  );
}
