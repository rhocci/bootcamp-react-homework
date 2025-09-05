import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Nav from "./components/Nav";
import Dashboard from "./pages/dashboard";
import Profile from "./pages/profile";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <div className="flex min-h-screen items-center justify-center gap-8 bg-white md:bg-gray-200">
        <div className="flex w-full overflow-hidden rounded-lg shadow-slate-300 md:w-[80%] md:max-w-4xl md:shadow-xl">
          <aside className="hidden bg-indigo-600 pb-10 pl-20 md:flex md:items-end">
            <Nav user={null} />
          </aside>
          <main className="flex-1 px-5 py-20 md:bg-white md:px-15">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
