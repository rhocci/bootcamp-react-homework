import { useState } from 'react';
import styled from 'styled-components';
import Input from '../Input/Input.jsx';
import { Button } from '../Button/Button.jsx';

const StyledForm = styled.form``;

export default function Form() {
  return (
    <StyledForm>
      <Input />
      <Button />
    </StyledForm>
  );
}
