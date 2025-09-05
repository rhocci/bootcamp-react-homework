import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/dashboard";
import Profile from "./pages/profile";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <div className="flex min-h-screen items-center justify-center gap-8 bg-gray-200">
        <nav className="flex flex-col gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-800" : undefined
            }
          >
            대시보드
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "text-blue-800" : undefined
            }
          >
            프로필
          </NavLink>
          <NavLink
            to="/signin"
            className={({ isActive }) =>
              isActive ? "text-blue-800" : undefined
            }
          >
            로그인
          </NavLink>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive ? "text-blue-800" : undefined
            }
          >
            회원가입
          </NavLink>
        </nav>

        <main className="min-w-xl rounded-xl bg-white p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
