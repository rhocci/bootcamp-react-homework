import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center gap-8 bg-white md:bg-gray-200">
        <div className="flex min-h-[540px] w-full overflow-hidden rounded-lg shadow-slate-300 md:w-[80%] md:max-w-3xl md:shadow-xl">
          <Sidebar />
          <main className="flex flex-1 items-center justify-center px-6 py-10 md:bg-white md:px-10">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
