import { useNavigate, Link } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import type { SigninForm } from "@/@types/forms";
import supabase from "@/libs/supabase";
import Input from "@/components/Input";
import toast from "react-hot-toast";
import { emailRules, passwordRules } from "@/utils/validators";

export default function SignIn() {
  const navigate = useNavigate();

  const methods = useForm<SigninForm>({
    mode: "onChange",
  });

  const onSubmit = async (formData: SigninForm) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword(formData);

      if (error) {
        toast.error(`로그인 실패\n ${error.status}: ${error.message}`);
        return;
      }

      if (data?.user) {
        const username = data.user.user_metadata?.username;
        toast.success(`로그인 성공!\n 환영합니다, ${username}님!`);
        navigate("/");
      } else {
        toast.error("확인되지 않은 사용자입니다.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2 className="mb-10 text-center text-2xl font-[700] text-slate-800">
        로그인
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
            className="transition-[colors, shadow] hover:shadow- w-full rounded-full bg-indigo-600 py-3 text-xl font-[500] text-white duration-400 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200"
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
