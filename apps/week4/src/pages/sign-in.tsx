import { useForm, FormProvider } from "react-hook-form";
import type { SigninForm } from "@/@types/forms";
import supabase from "@/libs/supabase";
import Input from "@/components/Input";
import toast from "react-hot-toast";

export default function SignIn() {
  const methods = useForm<SigninForm>({
    mode: "onChange",
  });

  const onSubmit = async (formData: SigninForm) => {
    try {
      const { error, data } = await supabase.auth.signInWithPassword(formData);

      if (error) {
        toast.error("로그인 실패: " + error.message);
        return;
      }

      if (data.user) {
        const { username } = data.user.user_metadata;
        toast.success(`환영합니다, ${username}님!`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2 className="mb-10 text-center text-2xl font-[700] text-slate-800">
        로그인
      </h2>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} autoComplete="off">
          <div className="mb-12 flex flex-col gap-y-3">
            <Input name="email" label="Email" placeholder="email@naver.com" />
            <Input type="password" name="password" label="Password" />
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
    </div>
  );
}
