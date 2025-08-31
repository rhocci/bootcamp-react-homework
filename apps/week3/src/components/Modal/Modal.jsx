import { useContext, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { POKEMON_TYPE } from '../TypeSelector/pokemon-types.js';
import { PokedexContext } from '../../store/pokedex-context';
import { Type } from '../Card/Card.jsx';

const StyledModal = styled.dialog`
  &[open] {
    display: flex;
  }
  align-items: center;
  column-gap: 2rem;
  background: ${({ theme }) => theme.colors.bg.card};
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.shadow};
  box-shadow: 2px 2px 0 ${({ theme }) => theme.colors.shadow};
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  aspect-ratio: 1;

  & img {
    width: 90%;
    height: 90%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.8rem;
  color: ${({ theme }) => theme.colors.text};
  padding: 1rem;

  & div {
    display: flex;
    justify-content: space-between;

    & button {
      color: ${({ theme }) => theme.colors.text};
    }
  }

  & h2 {
    font-size: 1.4rem;
  }

  & ul {
    display: flex;
    column-gap: 0.4rem;
  }

  & p {
    max-width: 400px;
  }
`;

export default function Modal() {
  const { selectedPokemon } = useContext(PokedexContext);
  const modal = useRef();

  useEffect(() => {
    const dialog = modal.current;
    if (!dialog) return;

    if (selectedPokemon && !dialog.open) {
      dialog.showModal();
    }
  }, [selectedPokemon]);

  if (!selectedPokemon) return null;
  const { id, name, types, description, sprite } = selectedPokemon;

  return createPortal(
    <StyledModal ref={modal}>
      <ImgWrapper>
        <img src={sprite} alt={`${name.ko} 이미지`} />
      </ImgWrapper>
      <Container>
        <div>
          <span>No. {id}</span>
          <button onClick={() => modal.current.close()}>X</button>
        </div>
        <h2>{name.ko}</h2>
        <ul>
          {types.map((type) => (
            <Type key={type} $type={type}>
              {POKEMON_TYPE[type].ko}
            </Type>
          ))}
        </ul>
        <p>{description}</p>
      </Container>
    </StyledModal>,
    document.getElementById('modal')
  );
}
