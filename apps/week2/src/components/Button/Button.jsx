import styled from 'styled-components';

const StyledButton = styled.button`
  align-self: center;
  position: absolute;
  bottom: -20px;
  padding-block: 12px;
  width: 80%;
  border-radius: 999px;
  color: #ffffff;
  background: ${({ theme }) => theme.colors.primary.normal};
  font-weight: 600;
  font-size: 1.125rem;
  box-shadow: 0 4px 12px #52557712;
  transition: background-color 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.hover};
  }
`;

export default function Button({}) {
  return <StyledButton>버튼</StyledButton>;
}
