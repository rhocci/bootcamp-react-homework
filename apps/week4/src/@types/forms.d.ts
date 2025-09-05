type UserInfo = {
  email: string;
  password: string;
  username: string;
  phone?: string;
  bio?: string;
  profileUrl?: string;
  createdAt: string;
  updatedAt?: string;
};

export type SigninForm = Pick<UserInfo, "email" | "password">;
export type SignupForm = Omit<UserInfo, "createdAt" | "updatedAt"> & {
  passwordCheck: string;
};
export type ProfileForm = Omit<UserInfo, "createdAt" | "updatedAt">;
