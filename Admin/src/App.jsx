import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { authActions } from "./store/slices/authSlice";
import useCheckAuth from "./hooks/useAuth";
import router from "./routes/router";

import "./App.css";

const App = () => {
  const idToken = localStorage.getItem("token");
  const dispatch = useDispatch();

  useEffect(() => {
    useCheckAuth(idToken, dispatch, authActions.isLogin);
  }, [idToken, dispatch]);

  return <RouterProvider router={router} />;
};

export default App;
