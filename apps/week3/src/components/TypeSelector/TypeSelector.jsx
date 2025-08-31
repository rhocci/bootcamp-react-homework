import { useContext } from 'react';
import styled from 'styled-components';
import { PokedexContext } from '../../store/pokedex-context.jsx';
import { POKEMON_TYPE } from './pokemon-types.js';

const StyledTypeSelector = styled.button`
  padding: 0.25rem;
  width: 100%;
  color: #fff;
  background: ${({ $type }) => POKEMON_TYPE[$type].color};
  text-align: center;
  border-radius: 8px;
  box-shadow: 1px 1px 0 ${({ theme }) => theme.colors.shadow};
  cursor: pointer;

  &:hover {
    font-weight: 700;
    box-shadow: -1px -1px 0 ${({ theme }) => theme.colors.shadow};
  }
`;

export default function TypeSelector({ type = 'normal' }) {
  const { handleTypeSelect } = useContext(PokedexContext);

  return (
    <StyledTypeSelector $type={type} onClick={() => handleTypeSelect(type)}>
      {POKEMON_TYPE[type].ko}
    </StyledTypeSelector>
  );
}
