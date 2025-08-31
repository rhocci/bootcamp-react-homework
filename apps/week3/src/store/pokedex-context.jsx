import { createContext, useEffect, useState } from 'react';
import { fetchPokemonData } from '../api/pokemon.js';

export const PokedexContext = createContext({
  pokemonList: [],
  searchQuery: '',
  status: 'loading',
  handleSearchSubmit: () => {},
  handleTypeSelect: () => {},
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
