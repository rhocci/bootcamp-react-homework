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

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary.active};
    outline-offset: 1px;
  }
`;

export default function Button({
  type = 'button',
  label = '확인',
  onClick,
  disabled = false,
}) {
  return (
    <StyledButton
      type={type}
      onClick={(e) => onClick(e)}
      onKeyDown={(e) => {
        if (e.key == ' ' || e.key == ' Enter') {
          onClick(e);
        }
      }}
      disabled={disabled}
    >
      {label}
    </StyledButton>
  );
}
