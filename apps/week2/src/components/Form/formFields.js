export const FORM_FIELDS = {
  signUp: [
    {
      type: 'text',
      id: 'name',
      label: '이름',
      placeholder: '2글자 이상 입력',
    },
    {
      type: 'email',
      id: 'email',
      label: '이메일',
      placeholder: 'user@company.io',
    },
    {
      type: 'password',
      id: 'password',
      label: '패스워드',
      placeholder: '숫자, 영문 조합 6자리 이상 입력',
    },
    {
      type: 'password',
      id: 'passwordCheck',
      label: '패스워드 확인',
      placeholder: '입력한 패스워드 다시 입력',
    },
  ],
  signIn: [
    {
      type: 'email',
      id: 'email',
      label: '이메일',
      placeholder: 'user@company.io',
    },
    {
      type: 'password',
      id: 'password',
      label: '패스워드',
      placeholder: '숫자, 영문 조합 6자리 이상 입력',
    },
  ],
};
