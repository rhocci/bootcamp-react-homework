import styled from 'styled-components';

const StyledInput = styled.input`
  padding-block: 0.25rem;
  padding-inline: 0.5rem;
  box-shadow: -2px -2px 0 ${({ theme }) => theme.colors.shadow};
  background: ${({ theme }) => theme.colors.bg.card};
  border: none;
`;

export default function Input() {
  return <StyledInput />;
}
