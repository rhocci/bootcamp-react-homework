import { useState } from 'react';
import styled from 'styled-components';
import { FORM_FIELDS } from './formFields.js';
import Input from '../Input/Input.jsx';
import Button from '../Button/Button.jsx';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.bg.light};
  border-radius: 8px;
  box-shadow: 0 4px 20px #52557720;
`;

export default function Form() {
  return (
    <StyledForm>
      <Button />
    </StyledForm>
  );
}
