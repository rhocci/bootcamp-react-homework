const BASE_URL = 'https://pokeapi.co/api/v2';

export async function fetchPokemonData() {
  try {
    const res = await fetch(`${BASE_URL}/pokemon`);
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
