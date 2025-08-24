import { useState } from 'react';
import styled from 'styled-components';
import { FORM_FIELDS } from './formFields.js';
import Input from '../Input/Input.jsx';
import Button from '../Button/Button.jsx';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 1.75rem;
  padding: 2rem;
  padding-bottom: 4.5rem;
  width: clamp(300px, 50vw, 600px);
  background: ${({ theme }) => theme.colors.bg.light};
  border-radius: 12px;
  box-shadow: 0 4px 20px #52557720;
  position: relative;
`;

const initialValues = {
  signIn: {
    email: null,
    password: null,
  },
  signUp: {
    name: null,
    email: null,
    password: null,
    passwordCheck: null,
  },
};

function validateName(name) {
  return name?.length >= 2 ? '' : '2글자 이상 입력해주세요.';
}

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email) ? '' : '이메일 형식이 올바르지 않습니다.';
}

function validatePassword(password) {
  return /^(?=.*[0-9])(?=.*[a-zA-Z]).{6,}$/.test(password)
    ? ''
    : '숫자, 영문 조합 6자리 이상 입력해주세요.';
}

function validatePasswordCheck(password, passwordCheck) {
  return password == passwordCheck ? '' : '비밀번호가 일치하지 않습니다.';
}

export default function Form() {
  const [currentForm, setCurrentForm] = useState('signUp');
  const [inputValues, setInputValues] = useState(initialValues[currentForm]);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    passwordCheck: '',
  });

  function handleInputChange(inputId, inputValue) {
    setInputValues((prevValues) => ({ ...prevValues, [inputId]: inputValue }));
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    const currentErrors = {
      name: validateName(inputValues.name),
      email: validateEmail(inputValues.email),
      password: validatePassword(inputValues.password),
      passwordCheck: validatePasswordCheck(
        inputValues.password,
        inputValues.passwordCheck
      ),
    };

    setErrors(currentErrors);

    if (Object.values(currentErrors).every((v) => v == '')) {
      if (currentForm === 'signUp') {
        alert('회원가입 성공!');
        setCurrentForm('signIn');
      } else if (currentForm === 'signIn') {
        alert('로그인 성공!');
        setCurrentForm('signedIn');
      }
    }
  }

  return currentForm === 'signedIn' ? (
    <p style={{ textAlign: 'center', fontWeight: '700', fontSize: '1.4rem' }}>
      로그인에 성공하셨습니다~!
    </p>
  ) : (
    <StyledForm>
      {FORM_FIELDS[currentForm].map((input) => {
        const id = input.id;

        return (
          <Input
            key={id}
            type={input.type}
            id={id}
            label={input.label}
            value={inputValues?.id}
            placeholder={input.placeholder}
            onChange={handleInputChange}
            invalid={!!errors[id]}
            error={errors[id]}
          />
        );
      })}
      <Button
        type="submit"
        label={currentForm === 'signIn' ? '회원가입' : '로그인'}
        onClick={handleFormSubmit}
      />
    </StyledForm>
  );
}
