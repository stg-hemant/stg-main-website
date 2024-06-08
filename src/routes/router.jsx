import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../root/root";
import HomePage from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ path: "/", element: <HomePage /> }],
  },
]);

export default router;
