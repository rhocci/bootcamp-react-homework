export const emailRules = {
  required: "이메일을 입력해 주세요.",
  pattern: {
    value: /^[^@ ]+@[^@ ]+\.[^@ ]+$/,
    message: "유효하지 않은 이메일 형식입니다.",
  },
};

export const passwordRules = {
  minLength: {
    value: 8,
    message: "비밀번호는 최소 8자 이상이어야 합니다.",
  },
};

export const usernameRules = {
  minLength: {
    value: 2,
    message: "닉네임은 최소 2자 이상이어야 합니다.",
  },
  maxLength: {
    value: 20,
    message: "닉네임은 최대 20자까지 입력 가능합니다.",
  },
  pattern: {
    value: /^[A-Za-z0-9가-힣]+$/,
    message: "닉네임은 특수문자를 포함할 수 없습니다.",
  },
};
