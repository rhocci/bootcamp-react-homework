import styled from 'styled-components';
import { POKEMON_TYPE } from './TypeButton/pokemon-types.js';

const StyledTypeSelector = styled.button`
  color: #fff;
  background: ${({ $type }) => POKEMON_TYPE[$type]};
  padding: 0.25rem;
  text-align: center;
  border-radius: 8px;
  box-shadow: 1px 1px 0 var(--shadow);
  cursor: pointer;

  &:hover {
    font-weight: 700;
    box-shadow: -1px -1px 0 var(--shadow);
  }
`;

export default function TypeSelector({ type = 'normal' }) {
  return <StyledTypeSelector $type={type}>{type}</StyledTypeSelector>;
}
