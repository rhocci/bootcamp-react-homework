import { useState, useRef } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { tw, emailRules, passwordRules, usernameRules } from "@/utils";
import type { SignupForm } from "@/@types/forms";
import Input from "@/components/Input";
import defaultAvatarImg from "@assets/avatar.jpg";

export default function Signup() {
  const methods = useForm<SignupForm>({ mode: "onChange" });
  const inputImage = useRef<HTMLInputElement>(null);
  const [step, setStep] = useState(2);
  const [formattedPhone, setFormattedPhone] = useState("");
  const [uploadedImage, setUploadedImage] = useState<string | undefined>(
    defaultAvatarImg,
  );

  const buttonClasses =
    "transition-[colors, shadow] font-[500] w-full rounded-full py-2 text-lg duration-400 hover:shadow-lg";

  const onSubmit = () => {
    if (step < 2) setStep((prevStep) => ++prevStep);
    else {
      setStep(1);
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
                    src={uploadedImage ? uploadedImage : defaultAvatarImg}
                    alt="업로드된 프로필 사진"
                    title="프로필 사진"
                    className="h-full w-full object-cover"
                  />
                </button>
              </div>
              <Input name="username" label="이름" rules={usernameRules} />
              <div>
                <label
                  htmlFor="bio"
                  className="m-2 block font-[400] text-slate-400"
                >
                  자기소개
                </label>
                <textarea
                  name="bio"
                  id="bio"
                  placeholder="자기소개는 100자 이하로 작성해주세요."
                  maxLength={100}
                  className="sm-text-sm/6 flex w-full grow resize-none gap-x-2 rounded-md bg-indigo-50 px-4 py-3 text-base font-light text-gray-800 placeholder:text-gray-500 focus:outline-1 focus:outline-offset-1 focus:outline-indigo-600"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-x-4">
            {step === 2 && (
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
            )}
            <button
              type="submit"
              disabled={methods.formState.isSubmitting}
              className={tw(
                buttonClasses,
                "bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-indigo-200",
              )}
            >
              {step < 2 ? "다음 단계로" : "가입 완료"}
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
