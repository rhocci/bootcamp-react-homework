import styled from 'styled-components';

const StyledContainer = styled.main`
  max-width: 1080px;
  margin: 0 auto;
  padding-inline: 1rem;
`;

export default function MainContent({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}
