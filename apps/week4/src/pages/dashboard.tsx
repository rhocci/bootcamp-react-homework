import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Profile } from "@/libs/supabase";
import { fetchProfileData } from "@/api/profileData";

type Dashboard = Pick<
  Profile,
  "email" | "username" | "phone" | "bio" | "created_at"
>;

export default function Dashboard() {
  const navigate = useNavigate();
  const [dashboard, setDashboard] = useState<Dashboard | null>(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      const data = await fetchProfileData();
      if (!data) {
        navigate("/login");
        return;
      }

      const dashboardData: Dashboard = {
        email: data.email,
        username: data.username,
        phone: data.phone,
        bio: data.bio,
        created_at: data.created_at,
      };

      setDashboard(dashboardData);
    };

    fetchDashboard();
  }, [navigate]);

  return (
    <div className="w-full">
      {dashboard ? (
        <>
          <header className="relative mb-20 flex flex-col gap-y-2 after:absolute after:right-0 after:-bottom-4 after:left-0 after:border-b after:border-b-gray-300">
            <h2 className="text-2xl font-[700]">{dashboard.username}</h2>
            <div className="font-[400] text-gray-500">
              <p>{dashboard.email}</p>
              <p>{dashboard.phone}</p>
              <p>{dashboard.created_at} 가입</p>
            </div>
          </header>
          <div className="min-h-40 w-full rounded-lg bg-indigo-100 p-5 text-gray-800">
            <p className="">
              {dashboard.bio ? dashboard.bio : "등록된 자기소개가 없습니다."}
            </p>
          </div>
        </>
      ) : (
        <p>불러오는 중...</p>
      )}
    </div>
  );
}
