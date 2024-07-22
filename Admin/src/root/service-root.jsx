import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import Loader from "../components/Loader/Loader";
import MastersPage from "../pages/Masters/Masters";

const ServiceRoot = () => {
  return (
    <>
      <header>
        <MastersPage />
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default ServiceRoot;
