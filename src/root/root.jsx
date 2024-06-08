import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";

const RootLayout = () => {
  return (
    <>
      <header className="top-0 sticky z-50">
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
