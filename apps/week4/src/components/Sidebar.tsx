import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import supabase from "@/libs/supabase";
import { tw } from "@/utils";
import defaultProfileImg from "@assets/avatar.jpg";
import { fetchProfileData } from "@/api/profileData";

export default function Sidebar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await fetchProfileData();
      if (!data) {
        return;
      }

      setIsLoggedIn(true);
      setProfileImage(data?.profile_url ?? null);
    };

    fetchProfile();

    const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        setIsLoggedIn(true);

        const { data: profileData } = await supabase
          .from("profiles")
          .select("profile_url")
          .eq("id", session?.user.id)
          .single();

        setProfileImage(profileData?.profile_url ?? null);
      } else {
        setIsLoggedIn(false);
        setProfileImage(null);
      }
    });

    return () => {
      data.subscription?.unsubscribe();
    };
  }, []);

  const onLogOut = async () => {
    if (!confirm("로그아웃 하시겠습니까?")) return;

    const { error } = await supabase.auth.signOut();
    if (error) return toast(`로그아웃 실패\n${error.status}:${error.message}`);

    toast.success("로그아웃 성공");
    navigate("/login");
  };

  const navClasses =
    "rounded-l-full py-1.5 pr-7 pl-8 text-right font-[500] text-white hover:bg-white hover:text-indigo-800";
  const activeNavClasses = "bg-white text-indigo-800";

  return (
    <aside className="relative hidden shrink-0 bg-indigo-600 md:block">
      {isLoggedIn && (
        <div className="absolute top-10 left-10 h-20 w-20 overflow-hidden rounded-full border-4 border-white bg-white">
          <img
            src={profileImage || defaultProfileImg}
            alt="내 프로필 이미지"
            className="h-full w-full object-cover"
          />
        </div>
      )}

      <nav className="mt-60 flex flex-col gap-y-2 pb-10 pl-12">
        <NavLink
          to="/"
          className={({ isActive }) =>
            tw(navClasses, isActive && activeNavClasses)
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            tw(navClasses, isActive && activeNavClasses)
          }
        >
          Profile
        </NavLink>
        {isLoggedIn ? (
          <button onClick={onLogOut} className={tw(navClasses)}>
            Logout
          </button>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              tw(navClasses, isActive && activeNavClasses)
            }
          >
            Login
          </NavLink>
        )}
      </nav>
    </aside>
  );
}
