import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";

import { authActions } from "../store/slices/authSlice";
import { base_URL } from "../components/constants/constants";
import { validateLogin, changePassword } from "../components/Auth/Auth";

const useCheckAuth = (idToken, dispatch, action) => {
  const fetchData = async () => {
    try {
      if (idToken) {
        dispatch(action());
      }
    } catch (error) {
      console.error(error);
    }
  };

  fetchData();
};

export default useCheckAuth;

export const useLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (event) => {
    event.preventDefault();
    const validationMessage = validateLogin(username, password);

    if (validationMessage !== true) {
      toast.error(validationMessage, {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    } else {
      try {
        setIsLoading(true);
        const response = await axios.post(`${base_URL}/login`, {
          username: username,
          password: password,
        });

        if (response.data.token) {
          setIsLoading(false);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("userId", response.data.userId);

          dispatch(authActions.isLogin());

          toast.success(response.data.message, {
            position: "top-center",
            autoClose: 2000,
          });
          setUsername("");
          setPassword("");

          navigate("/dashboard");
        } else {
          toast.error(response.data.message, {
            position: "top-center",
            autoClose: 2000,
          });
          setPassword("");
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Login error: ", error);
        toast.error(
          error.response.data.error || "An error occurred during login",
          {
            position: "top-center",
            autoClose: 2000,
          }
        );
        setIsLoading(false);
      }
    }
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    isLoading,
    handleLogin,
  };
};

export const useChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationMessage = changePassword(
      oldPassword,
      newPassword,
      confirmPassword
    );

    const userId = localStorage.getItem("userId");

    if (validationMessage !== true) {
      toast.error(validationMessage, {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    } else {
      try {
        setIsLoading(true);
        const response = await axios.patch(`${base_URL}/change-password`, {
          userId: userId,
          oldPassword: oldPassword,
          newPassword: newPassword,
        });

        console.log("response", response);

        setIsLoading(false);
        toast.success(response.data.message, {
          position: "top-center",
          autoClose: 2000,
        });
      } catch (error) {
        console.error("Change password error: ", error);
        toast.error(
          error.response?.data?.error ||
            "An error occurred during password change",
          {
            position: "top-center",
            autoClose: 2000,
          }
        );
        setIsLoading(false);
      }
    }

    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return {
    oldPassword,
    setOldPassword,
    newPassword,
    setNewPassword,
    confirmPassword,
    setConfirmPassword,
    isLoading,
    handleSubmit,
  };
};
