import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 0.125rem;
  background: ${({ theme }) => theme.colors.bg.card};
  box-shadow: 1px 1px 0 ${({ theme }) => theme.colors.shadow};

  ${({ $variant, theme }) => {
    if ($variant === 'icon') {
      return css`
        aspect-ratio: 1;

        & img {
          width: 10px;
        }

        &:hover {
          box-shadow: -1px -1px 0 ${theme.colors.shadow};
        }
      `;
    }

    if ($variant === 'text') {
      return css`
        background: ${({ theme }) => theme.colors.bg.body};

        &:hover {
          box-shadow: -1px -1px 0 ${theme.colors.shadow};
        }
      `;
    }
  }}
`;

export default function Button({
  type = 'button',
  variant = 'text',
  children,
  label = undefined,
  onClick,
}) {
  return (
    <StyledButton
      type={type}
      $variant={variant}
      aria-label={variant === 'icon' ? label : undefined}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}
