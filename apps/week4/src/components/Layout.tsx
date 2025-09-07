import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center gap-8 bg-white md:bg-gray-200">
        <div className="flex w-full overflow-hidden rounded-lg shadow-slate-300 md:w-[80%] md:max-w-4xl md:shadow-xl">
          <Sidebar user={null} />
          <main className="flex-1 px-5 py-20 md:bg-white md:px-10">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
