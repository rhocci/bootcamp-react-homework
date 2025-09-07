import { NavLink } from "react-router-dom";
import { Profile } from "@/libs/supabase";
import { tw } from "@/utils";

type Props = {
  user: Partial<Profile> | null;
};

export default function Sidebar({ user }: Props) {
  const navClasses =
    "rounded-l-full py-1.5 pr-7 pl-8 text-right font-[500] text-white hover:bg-white hover:font-[700] hover:text-indigo-800";
  const activeNavClasses = "bg-white font-[700] text-indigo-800";

  return (
    <aside className="hidden bg-indigo-600 pb-10 pl-20 md:flex md:items-end">
      <nav className="flex flex-col gap-y-2">
        <NavLink
          to="/"
          aria-disabled={!user && undefined}
          className={({ isActive }) =>
            tw(navClasses, isActive && activeNavClasses)
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/profile"
          aria-disabled={!user && undefined}
          className={({ isActive }) =>
            tw(navClasses, isActive && activeNavClasses)
          }
        >
          Profile
        </NavLink>
        <NavLink
          to="/signup"
          className={({ isActive }) =>
            tw(navClasses, isActive && activeNavClasses)
          }
        >
          Logout
        </NavLink>
      </nav>
    </aside>
  );
}
