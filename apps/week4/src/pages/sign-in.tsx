import { useNavigate, Link } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import toast from "react-hot-toast";
import supabase from "@/libs/supabase";
import type { LoginForm } from "@/@types/forms";
import { emailRules, passwordRules } from "@/utils/validators";
import Input from "@/components/Input";

export default function Login() {
  const navigate = useNavigate();

  const methods = useForm<LoginForm>({
    mode: "onChange",
  });

  const onSubmit = async (formData: LoginForm) => {
    const { data, error } = await supabase.auth.signInWithPassword(formData);

    if (error)
      return toast.error(`로그인 실패!\n ${error.status}: ${error.message}`);

    if (!data.user) return toast.error("확인되지 않은 사용자입니다.");

    const username = data.user.user_metadata?.username;
    toast.success(`로그인 성공!\n  ${username}님, 오늘도 즐거운 여행 되세요!`);
    navigate("/");
  };

  return (
    <div className="w-full">
      <h2 className="mb-10 text-left text-2xl font-[700] text-slate-800">
        여행자님,
        <br />
        어서 오세요!
      </h2>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          autoComplete="off"
          noValidate
        >
          <div className="mb-12 flex flex-col gap-y-3">
            <Input
              name="email"
              label="Email"
              placeholder="email@naver.com"
              rules={emailRules}
            />
            <Input
              type="password"
              name="password"
              label="Password"
              rules={passwordRules}
            />
          </div>
          <button
            type="submit"
            disabled={methods.formState.isSubmitting}
            className="transition-[colors, shadow] hover:shadow- w-full rounded-full bg-indigo-600 py-2 text-xl font-[500] text-white duration-400 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200"
          >
            로그인
          </button>
        </form>
      </FormProvider>
      <div className="mt-5 flex justify-center gap-x-2">
        <p className="font-[500] text-gray-600">회원이 아니신가요?</p>
        <Link
          to="/signup"
          className="border-b-1 border-b-transparent font-[700] text-indigo-600 transition-colors duration-300 hover:border-b-indigo-600 hover:text-indigo-700"
        >
          가입하기 {"->"}
        </Link>
      </div>
    </div>
  );
}
