import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import Auth from "../pages/Auth";

// import RootLayout from "../root/root";
const RootLayout = lazy(() => import("../root/root"));
const ServiceRoot = lazy(() => import("../root/service-root"));

const Services = lazy(() => import("../pages/Masters/Tabs/Services/Services"));
const CareerForm = lazy(() => import("../pages/Masters/Tabs/Career"));
const Testimonials = lazy(() => import("../pages/Masters/Tabs/Testimonials"));
const Blogs = lazy(() => import("../pages/Masters/Tabs/Blogs"));
const Teams = lazy(() => import("../pages/Masters/Tabs/Teams"));
const News = lazy(() => import("../pages/Masters/Tabs/News"));
const Events = lazy(() => import("../pages/Masters/Tabs/Events"));

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
        element: <ServiceRoot />,
        children: [
          { path: "/dashboard/masters/", element: <Services /> },
          { path: "/dashboard/masters/career", element: <CareerForm /> },
          {
            path: "/dashboard/masters/testimonials",
            element: <Testimonials />,
          },
          {
            path: "/dashboard/masters/blogs",
            element: <Blogs />,
          },
          {
            path: "/dashboard/masters/teams",
            element: <Teams />,
          },
          {
            path: "/dashboard/masters/news",
            element: <News />,
          },
          {
            path: "/dashboard/masters/events",
            element: <Events />,
          },
        ],
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
