import styled from 'styled-components';
import Button from '../Button/Button.jsx';
import { POKEMON_TYPE } from '../TypeSelector/pokemon-types.js';

const StyledCard = styled.article`
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.bg.card};
  overflow: hidden;
  box-shadow: 2px 2px 0 ${({ theme }) => theme.colors.shadow};
  border: 1px solid #00000040;
  padding: 0.5rem;
`;

const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0.75rem;

  & span {
    font-size: 0.875rem;
  }

  & h2 {
    font-size: 1.125rem;
    color: #232323;
    filter: drop-shadow(2px 1px 0 #00000020);
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    width: 96px;
    aspect-ratio: 1;
  }

  & button {
    border: none;
    width: 80%;
    padding: 0.375rem;
    border-radius: 0.75rem;
    color: #444;
    box-shadow: 1px 2px 0 #00000030;
    font-size: 0.9rem;

    &:hover {
      box-shadow: -1px -2px 0 #00000030;
    }
  }
`;

const CardFooter = styled.footer`
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 0.75rem;

  & ul {
    display: flex;
    justify-content: center;
    column-gap: 0.5rem;
  }

  @media screen and (max-width: 768px) {
    & ul {
      flex-direction: column;
      align-items: center;
      row-gap: 0.25rem;
    }
  }
`;

const Type = styled.li`
  border-radius: 50px;
  padding-inline: 1.3rem;
  padding-block: 0.2rem;
  font-weight: 700;
  font-size: 0.9rem;
  color: #fff;
  background: ${({ $type }) => POKEMON_TYPE[$type]?.color || '#777'};
`;

export default function Card({ id, name, img, types = [] }) {
  return (
    <StyledCard>
      <CardHeader>
        <span>No. {id}</span>
        <h2>{name}</h2>
      </CardHeader>
      <CardContent>
        <img src={img} alt={`${name} 이미지`} />
        <Button type="button" variant="text" onClick={() => {}}>
          상세정보
        </Button>
      </CardContent>
      <CardFooter>
        <ul>
          {types.map((type) => (
            <Type key={type} $type={type}>
              {POKEMON_TYPE[type].ko}
            </Type>
          ))}
        </ul>
      </CardFooter>
    </StyledCard>
  );
}
