import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import supabase from "@/libs/supabase";
import { ProfileForm } from "@/@types/forms";
import { fetchProfileData } from "@/api/profileData";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import { usernameRules } from "@/utils";
import UploadAvatar from "@/components/UploadAvatar";

export default function Profile() {
  const methods = useForm<ProfileForm>();
  const [profileForm, setProfileForm] = useState<ProfileForm | null>(null);
  const [uploadedImage, setUploadedImage] = useState<File | undefined>(
    undefined,
  );
  const navigate = useNavigate();

  const imageSrc = uploadedImage
    ? URL.createObjectURL(uploadedImage)
    : profileForm?.profile_url;

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await fetchProfileData();
      if (!data) {
        navigate("/login");
        return;
      }

      const profileData: ProfileForm = data;

      setProfileForm(profileData);
    };

    fetchProfile();
  }, [navigate]);

  const onSubmit = async (formData: ProfileForm) => {
    try {
      const { data: userData, error: authError } =
        await supabase.auth.getUser();

      if (authError)
        return toast.error(
          `인증 오류 발생.\n ${authError.code}: ${authError.message}`,
        );
      if (!userData.user) return;

      const { error: updateError } = await supabase
        .from("profiles")
        .update({
          username: formData.username,
          bio: formData.bio,
        })
        .eq("id", userData.user.id);

      if (updateError)
        return toast.error(
          `정보 수정에 실패했습니다.\n ${updateError.code}: ${updateError.message}`,
        );

      toast.success("정보 업데이트 성공!");
    } catch (error) {
      console.error(error);
      toast("알 수 없는 오류가 발생했습니다.");
    }
  };

  function handleChangeImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadedImage(file);
  }

  return (
    <div className="w-full">
      <h2 className="mb-8 text-left text-[20px] font-[700] whitespace-pre-line text-slate-800">
        내 프로필 관리
      </h2>
      {profileForm ? (
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            autoComplete="off"
            noValidate
          >
            <div className="mb-12 flex flex-col gap-y-2">
              <div className="text-center">
                <UploadAvatar
                  onUpload={handleChangeImage}
                  imageSrc={imageSrc}
                />
              </div>
              <Input name="username" label="이름" rules={usernameRules} />
              <Textarea
                name="bio"
                label="자기소개"
                placeholder="자기소개는 100자 이하로 작성해주세요."
                maxLength={100}
              />
            </div>
            <button
              type="submit"
              disabled={methods.formState.isSubmitting}
              className="transition-[colors, shadow] w-full rounded-full bg-indigo-600 py-2 text-lg font-[500] text-white duration-400 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200"
            >
              수정하기
            </button>
          </form>
        </FormProvider>
      ) : (
        <p>불러오는 중...</p>
      )}
    </div>
  );
}
