import { useEffect, useState } from "react";
import supabase, { Profile } from "@/libs/supabase";
import toast from "react-hot-toast";

type Dashboard = Omit<Profile, "email,password">;

export default function Dashboard() {
  const [dashboard, setDashboard] = useState<Dashboard | null>(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      const { data: userData, error: userError } =
        await supabase.auth.getUser();
      if (userError) return toast.error("로그인이 필요합니다.");
      if (!userData.user) return;

      const { data: profileData, error: profileError } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userData.user.id)
        .single();

      if (profileError)
        return toast.error(
          `사용자 정보 불러오기에 실패했습니다.\n ${profileError.code}: ${profileError.message}`,
        );

      setDashboard(profileData);
    };

    fetchDashboard();
  }, []);

  return (
    <div className="w-full">
      {dashboard ? (
        <>
          <header className="flex flex-col gap-y-2">
            <h2 className="">{dashboard.username}</h2>
            <p>{dashboard.phone}</p>
            <p>{dashboard.created_at} 가입</p>
          </header>
          <p>{dashboard.bio ? dashboard.bio : "등록된 자기소개가 없습니다."}</p>
        </>
      ) : (
        <p>불러오는 중...</p>
      )}
    </div>
  );
}
