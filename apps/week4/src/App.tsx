import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import DashboardPage from "./pages/dashboard";
import ProfilePage from "./pages/profile";
import SignInPage from "./pages/sign-in";
import SignUpPage from "./pages/sign-up";

function App() {
  return (
    <BrowserRouter>
      <nav className="flex flex-col gap-2">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-blue-800" : undefined)}
        >
          대시보드
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? "text-blue-800" : undefined)}
        >
          프로필
        </NavLink>
        <NavLink
          to="/signin"
          className={({ isActive }) => (isActive ? "text-blue-800" : undefined)}
        >
          회원가입
        </NavLink>
        <NavLink
          to="/signup"
          className={({ isActive }) => (isActive ? "text-blue-800" : undefined)}
        >
          로그인
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
