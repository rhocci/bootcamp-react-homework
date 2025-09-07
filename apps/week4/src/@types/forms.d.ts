type UserInfo = {
  email: string;
  password: string;
  username: string;
  phone?: string;
  bio?: string;
  profile_url?: string;
  created_at: string;
  updated_at?: string;
};

export type LoginForm = Pick<UserInfo, "email" | "password">;
export type SignupForm = Omit<UserInfo, "created_at" | "updated_at"> & {
  passwordCheck: string;
};
export type ProfileForm = Omit<UserInfo, "created_at" | "updated_at">;
