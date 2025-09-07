import { NavLink } from "react-router-dom";
import { Profile } from "@/libs/supabase";
import { tw } from "@/utils";

type Props = {
  to: string;
  user: Partial<Profile> | null;
  authRequired?: boolean;
  children: React.ReactNode;
};

export default function Sidebar({ user }: Props) {
  return (
    <aside className="hidden bg-indigo-600 pb-10 pl-20 md:flex md:items-end">
      <nav className="flex flex-col gap-y-2">
        <NavItem to="/" user={user}>
          Home
        </NavItem>
        <NavItem to="/profile" user={user} authRequired>
          Profile
        </NavItem>
        <NavItem to={user ? "/signup" : "/signin"} user={user}>
          {user ? "Logout" : "Login"}
        </NavItem>
      </nav>
    </aside>
  );
}

function NavItem({ to = "/", user, authRequired, children }: Props) {
  return (
    <NavLink
      to={to}
      aria-disabled={authRequired ? !user : undefined}
      className={({ isActive }) =>
        tw(
          "rounded-l-full py-1.5 pr-7 pl-8 text-right font-[500] text-white hover:bg-white hover:font-[700] hover:text-indigo-800",
          isActive && "bg-white font-[700] text-indigo-800",
        )
      }
    >
      {children}
    </NavLink>
  );
}
