import styled from 'styled-components';
import prevPage from '../../assets/icons/arrow-l.svg';
import nextPage from '../../assets/icons/arrow-r.svg';
import Button from '../Button/Button.jsx';
import TypeSelector from '../TypeSelector/TypeSelector.jsx';
import { POKEMON_TYPE } from '../TypeSelector/pokemon-types.js';

const StyledToolBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  padding-inline: 1.4rem;
  max-height: 500px;
  transition: max-height 400ms cubic-bezier(0.215, 0.61, 0.355, 1);
`;

const TypeFilter = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  position: relative;
  padding-block: 0.25rem;
  padding-inline: 2rem;
  width: 120px;
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 0.125rem;
  background: ${({ theme }) => theme.colors.bg.card};
  box-shadow: 2px 2px 0 ${({ theme }) => theme.colors.shadow};
  text-align: center;
  line-height: 1.1;
  cursor: pointer;

  &:hover ul {
    max-height: 2000px;
  }

  & ul {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    position: absolute;
    background: ${({ theme }) => theme.colors.bg.card};
    top: 25px;
    left: -1px;
    width: 101%;
    max-height: 0;
    padding-inline: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.text};
    border-top: none;
    border-radius: 0 0 4px 4px;
    box-shadow: 2px 2px 0 ${({ theme }) => theme.colors.shadow};
    transition: max-height 0.3s ease-in-out;
    overflow: hidden;
    z-index: 998;
  }
`;

const PageController = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.5rem;

  & span {
    font-size: 1.1rem;
    min-width: 80px;
    text-align: center;
  }
`;

export default function ToolBar({ currentPage = 1 }) {
  return (
    <StyledToolBar>
      <TypeFilter>
        <span>필터</span>
        <ul>
          {Object.entries(POKEMON_TYPE).map((type) => (
            <li key={type[0]}>
              <TypeSelector type={type[0]} />
            </li>
          ))}
        </ul>
      </TypeFilter>

      <PageController>
        <Button variant="icon" label="이전 페이지로">
          <img src={prevPage} alt="" />
        </Button>
        <span>{currentPage}페이지</span>
        <Button variant="icon" label="다음 페이지로">
          <img src={nextPage} alt="" />
        </Button>
      </PageController>
    </StyledToolBar>
  );
}
