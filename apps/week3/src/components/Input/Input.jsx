import styled from 'styled-components';

const StyledInput = styled.input`
  padding-block: 0.25rem;
  padding-inline: 0.5rem;
  box-shadow: -1px 1px 0 ${({ theme }) => theme.colors.shadow};
  background: ${({ theme }) => theme.colors.bg.card};
  border: 1px solid ${({ theme }) => theme.colors.shadow};
`;

export default function Input({
  type = 'text',
  id,
  name,
  value,
  placeholder,
  ...props
}) {
  return (
    <StyledInput
      type={type}
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      {...props}
    />
  );
}
