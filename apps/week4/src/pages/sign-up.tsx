import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import toast from "react-hot-toast";
import { SignupForm } from "@/@types/forms";
import supabase from "@/libs/supabase";
import { tw, emailRules, passwordRules, usernameRules } from "@/utils";
import Input from "@/components/Input";
import defaultProfileImg from "@assets/avatar.jpg";
import Textarea from "@/components/Textarea";

export default function Signup() {
  const methods = useForm<SignupForm>({ mode: "onChange" });
  const navigate = useNavigate();
  const inputImage = useRef<HTMLInputElement>(null);
  const [step, setStep] = useState(1);
  const [formattedPhone, setFormattedPhone] = useState("");
  const [uploadedImage, setUploadedImage] = useState<string | undefined>(
    defaultProfileImg,
  );

  const buttonClasses =
    "transition-[colors, shadow] font-[500] w-full rounded-full py-2 text-lg duration-400 hover:shadow-lg";

  const onSubmit = async (formData: SignupForm) => {
    try {
      const { data: userData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            username: formData.username,
            phone: formData.phone,
            bio: formData.bio,
          },
        },
      });

      if (authError)
        return toast.error(
          `인증 오류 발생\n ${authError.status}: ${authError.message}`,
        );
      if (!userData.user) return;

      let profileUrl: string | null = null;
      const imageFile = inputImage.current?.files?.[0];

      if (imageFile) {
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from("profile-images")
          .upload(`${userData.user.id}/avatar`, imageFile, {
            upsert: true,
          });

        if (uploadError)
          return toast.error(
            `이미지 업로드 오류 발생\n ${uploadError.message}`,
          );

        const { data: storedData } = supabase.storage
          .from("profile-images")
          .getPublicUrl(uploadData.path, {
            transform: { width: 128, height: 128, resize: "cover" },
          });

        profileUrl = storedData.publicUrl;
      }

      const { error: signupError } = await supabase.from("profiles").insert({
        id: userData.user.id,
        email: formData.email,
        username: formData.username,
        phone: formData.phone,
        bio: formData.bio,
        profile_url: profileUrl,
        created_at: new Date().toISOString(),
      });

      if (signupError)
        return toast.error(
          `회원가입 요청에 실패했습니다.\n ${signupError.code}: ${signupError.message}`,
        );

      toast.success("회원가입 성공!\n로그인 화면으로 이동합니다.");
      navigate("/login");
    } catch (error) {
      console.error(error);
      toast("알 수 없는 오류가 발생했습니다.");
    }
  };

  function handleChangePhone(e: React.ChangeEvent<HTMLInputElement>) {
    const formatted = e.target.value
      .replace(/\D/g, "")
      .replace(/(^01\d{1}|[0-9]{3,4})([0-9]{3,4})([0-9]{4})/, "$1-$2-$3");

    setFormattedPhone(formatted);
  }

  function handleChangeImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const src = URL.createObjectURL(file);
    setUploadedImage(src);
  }

  return (
    <div className="w-full">
      <h2 className="mb-8 text-left text-[20px] font-[700] whitespace-pre-line text-slate-800">
        {step === 1
          ? "반갑습니다!\n기본 정보를 입력해주세요"
          : "마지막 단계에요!\n프로필을 작성해주세요"}
      </h2>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          autoComplete="off"
          noValidate
        >
          <div className="mb-12 flex flex-col gap-y-2">
            <div className={step === 1 ? "" : "hidden"}>
              <Input name="email" label="이메일" rules={emailRules} />
              <Input
                type="tel"
                name="phone"
                label="전화번호"
                placeholder="숫자만 입력"
                value={formattedPhone}
                onChange={handleChangePhone}
                maxLength={13}
              />
              <Input
                type="password"
                name="password"
                label="비밀번호"
                rules={passwordRules}
              />
              <Input
                type="password"
                name="password-check"
                label="비밀번호 확인"
                rules={{
                  validate: (check) =>
                    check === methods.watch("password") ||
                    "비밀번호가 일치하지 않습니다.",
                }}
              />
            </div>
            <div className={step === 2 ? "" : "hidden"}>
              <div className="text-center">
                <label
                  htmlFor="image"
                  className="mb-2 block font-[400] text-slate-400"
                >
                  프로필 이미지
                </label>
                <input
                  ref={inputImage}
                  type="file"
                  name="image"
                  id="image"
                  accept="image/jpg,image/png"
                  onChange={handleChangeImage}
                  className="hidden"
                />
                <button
                  type="button"
                  aria-label="프로필 사진 업로드"
                  onClick={() => inputImage.current?.click()}
                  className="aspect-square w-24 overflow-hidden rounded-full bg-gray-200"
                >
                  <img
                    src={uploadedImage ? uploadedImage : defaultProfileImg}
                    alt="업로드된 프로필 사진"
                    title="프로필 사진"
                    className="h-full w-full object-cover"
                  />
                </button>
              </div>
              <Input name="username" label="이름" rules={usernameRules} />
              <Textarea
                name="bio"
                label="자기소개"
                placeholder="자기소개는 100자 이하로 작성해주세요."
                maxLength={100}
              />
            </div>
          </div>
          <div className="flex gap-x-4">
            {step === 2 ? (
              <>
                <button
                  type="button"
                  disabled={methods.formState.isSubmitting}
                  onClick={() => setStep((prevStep) => --prevStep)}
                  className={tw(
                    buttonClasses,
                    "basis-2/5 bg-slate-200 text-gray-600 hover:bg-slate-300",
                  )}
                >
                  이전으로
                </button>
                <button
                  type="submit"
                  disabled={methods.formState.isSubmitting}
                  className={tw(
                    buttonClasses,
                    "bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-indigo-200",
                  )}
                >
                  가입 완료
                </button>
              </>
            ) : (
              <button
                type="button"
                disabled={methods.formState.isSubmitting}
                onClick={async () => {
                  const valid = await methods.trigger([
                    "email",
                    "phone",
                    "password",
                    "passwordCheck",
                  ]);
                  if (valid) setStep((prevStep) => ++prevStep);
                }}
                className={tw(
                  buttonClasses,
                  "bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-indigo-200",
                )}
              >
                다음으로
              </button>
            )}
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
