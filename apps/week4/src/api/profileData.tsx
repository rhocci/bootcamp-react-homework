import supabase, { Profile } from "@/libs/supabase";
import toast from "react-hot-toast";

export async function fetchProfileData(): Promise<Profile | null> {
  const { data: userData, error: userError } = await supabase.auth.getUser();
  if (userError) {
    toast.error("로그인이 필요한 페이지입니다.");
    return null;
  }

  const { data: profileData, error: profileError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userData.user.id)
    .single();

  if (profileError) {
    toast.error(
      `사용자 정보 불러오기에 실패했습니다.\n ${profileError.code}: ${profileError.message}`,
    );
    return null;
  }

  return profileData;
}
