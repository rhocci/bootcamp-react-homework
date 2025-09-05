import { NavLink } from "react-router-dom";
import { Profile } from "@/libs/supabase";
import { tw } from "@/utils";

type Props = {
  to: string;
  user: Partial<Profile> | null;
  authRequired?: boolean;
  children: React.ReactNode;
};

export default function Nav({ user }: Props) {
  return (
    <nav className="flex flex-col gap-y-2">
      <NavItem to="/" user={user}>
        Home
      </NavItem>
      <NavItem to="/profile" user={user} authRequired>
        Profile
      </NavItem>
      <NavItem to="/signup" user={user}>
        Signup
      </NavItem>
      <NavItem to="/signin" user={user}>
        Signin
      </NavItem>
    </nav>
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
