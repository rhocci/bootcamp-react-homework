import { useContext } from 'react';
import styled, { css } from 'styled-components';
import { PokedexContext } from '../../store/pokedex-context.jsx';
import Input from '../Input/Input.jsx';
import Button from '../Button/Button.jsx';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background: ${({ theme }) => theme.colors.primary};
  padding-block: 0.75rem;
  padding-inline: 1.4rem;
  box-shadow: 0 3px 0px #00000020;
  z-index: 999;

  ${({ theme }) => {
    const bg = theme.colors.bg.card;
    const text = theme.colors.text;
    return css`
      & h1 {
        line-height: 1.1;
        font-size: 1.9rem;
        color: ${bg};
        text-shadow: -3px 0px ${text}, 0px 3px ${text}, 0px 0px ${text},
          0px -1px ${text};
        &:hover {
          text-shadow: -2px 0px ${text}, 0px 2px ${text}, 0px -1px ${text};
        }
      }
    `;
  }}

  @media screen and (max-width: 768px) {
    flex-direction: column;
    row-gap: 1.25rem;
  }
`;

const SearchForm = styled.form`
  display: flex;
  column-gap: 0.5rem;
`;

export default function Header({ title }) {
  const { handleSearchSubmit } = useContext(PokedexContext);

  return (
    <StyledHeader>
      <h1>
        <a href="/">{title}</a>
      </h1>
      <SearchForm onSubmit={handleSearchSubmit}>
        <Input
          type="search"
          id="search-pokemon"
          name="search-pokemon"
          autoComplete="off"
          spellCheck="false"
        />
        <Button type="submit" variant="text">
          검색
        </Button>
      </SearchForm>
    </StyledHeader>
  );
}
