import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/dashboard";
import Profile from "./pages/profile";
import Login from "./pages/sign-in";
import Signup from "./pages/sign-up";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
