import styled from 'styled-components';

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

export default function MainContent({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}
