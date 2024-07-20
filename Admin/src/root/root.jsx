import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import Sidebar from "../components/Sidebar/Sidebar";
import Loader from "../components/Loader/Loader";

const RootLayout = () => {
  return (
    <div className="flex">
      <header>
        <Sidebar />
      </header>
      <main className="ml-56 p-4 w-full">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default RootLayout;
