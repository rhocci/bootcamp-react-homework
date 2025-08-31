import { createContext } from 'react';

export const PokedexContext = createContext({
  pokemonList: [],
  searchQuery: '',
  status: 'loading',
  selectedPokemon: null,
  handleSearchSubmit: () => {},
  handleTypeSelect: () => {},
  openModal: () => {},
});
