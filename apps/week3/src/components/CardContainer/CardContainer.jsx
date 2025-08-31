import { useContext } from 'react';
import styled from 'styled-components';
import { PokedexContext } from '../../store/pokedex-context';
import StatusMessage from '../StatusMessage/StatusMessage';
import Card from '../Card/Card.jsx';

const StyledContainer = styled.main`
  max-width: 1080px;
  margin: 0 auto;
  padding-inline: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-block: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default function CardContainer() {
  const { pokemonList, status } = useContext(PokedexContext);

  return (
    <StyledContainer>
      {status === 'loaded' ? (
        pokemonList.map((pokemon) => (
          <Card
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name.ko}
            img={pokemon.sprite}
            types={pokemon.types}
          ></Card>
        ))
      ) : (
        <StatusMessage status={status} />
      )}
    </StyledContainer>
  );
}
