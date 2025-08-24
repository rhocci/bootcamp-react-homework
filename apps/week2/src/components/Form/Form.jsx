import { useState } from 'react';
import styled from 'styled-components';
import { FORM_FIELDS } from './formFields.js';
import Input from '../Input/Input.jsx';
import Button from '../Button/Button.jsx';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  padding: 1.5rem;
  width: clamp(300px, 50vw, 600px);
  background: ${({ theme }) => theme.colors.bg.light};
  border-radius: 8px;
  box-shadow: 0 4px 20px #52557720;
`;

const initialValues = {
  signIn: {
    email: 'd',
    password: 123,
  },
  signUp: {
    name: 'ㅇㅇㅇ',
    email: 'd',
    password: 123,
    passwordCheck: 123,
  },
};

export default function Form() {
  const [currentForm, setCurrentForm] = useState('signIn');
  const [inputValues, setInputValues] = useState(initialValues[currentForm]);
  const [errors, setErrors] = useState({
    name: {
      isInvalid: false,
      message: '2글자 이상 입력해주세요.',
    },
    email: {
      isInvalid: false,
      message: '이메일 형식이 올바르지 않습니다.',
    },
    password: {
      isInvalid: false,
      message: '숫자, 영문 조합 6자리 이상 입력해주세요.',
    },
    passwordCheck: {
      isInvalid: false,
      message: '비밀번호가 일치하지 않습니다.',
    },
  });

  function handleInputChange(inputId, inputValue) {
    setInputValues((prevValues) => ({ ...prevValues, [inputId]: inputValue }));
  }

  return (
    <StyledForm>
      {FORM_FIELDS[currentForm].map((input) => {
        const id = input.id;

        return (
          <Input
            key={id}
            type={input.type}
            id={id}
            label={input.label}
            value={inputValues.id}
            placeholder={input.placeholder}
            onChange={handleInputChange}
            invalid={false}
            error={errors.id}
          />
        );
      })}
      <Button />
    </StyledForm>
  );
}
