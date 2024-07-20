import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import Auth from "../pages/Auth";

// import RootLayout from "../root/root";
const RootLayout = lazy(() => import("../root/root"));
const Masters = lazy(() => import("../pages/Masters/Masters"));
const ChangePassword = lazy(() => import("../pages/ChangePassword"));
const SecurityConsole = lazy(() => import("../pages/Security/SecurityConsole"));

const router = createBrowserRouter([
  { path: "/", element: <Auth /> },
  {
    path: "/dashboard",
    element: <RootLayout />,
    children: [
      {
        path: "/dashboard/masters",
        element: <Masters />,
      },
      { path: "/dashboard/change-password", element: <ChangePassword /> },

      {
        path: "/dashboard/security-console",
        element: <SecurityConsole />,
      },
    ],
  },
]);

export default router;
