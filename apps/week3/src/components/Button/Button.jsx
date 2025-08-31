import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 0.125rem;
  background: var(--bg);
  box-shadow: -1px 0px ${({ theme }) => theme.colors.text},
    0px -1px ${({ theme }) => theme.colors.text};

  ${({ $variant }) => {
    if ($variant === 'icon') {
      return css`
        aspect-ratio: 1;
        box-shadow: 1px 1px 0 var(--shadow);

        & img {
          width: 10px;
        }

        &:hover {
          box-shadow: -1px -1px 0 var(--shadow);
        }
      `;
    }

    if ($variant === 'text') {
      return css`
        position: relative;
        display: flex;
        flex-direction: column;
        padding-block: 0.25rem;
        padding-inline: 2rem;
        overflow: hidden;
        row-gap: 0.75rem;
        width: 120px;
        max-height: 30px;
        box-shadow: 2px 2px 0 var(--shadow);
        text-align: center;
        transition: max-height 1s ease-in-out;
        line-height: 1.1;
        z-index: 998;

        &:hover {
          max-height: 2000px;
          overflow: visible;
        }
      `;
    }
  }}
`;

export default function Button({
  type = 'button',
  variant = 'text',
  children,
  onClick,
}) {
  return (
    <StyledButton type={type} $variant={variant} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
