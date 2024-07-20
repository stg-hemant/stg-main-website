import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { base_URL } from "../components/api/URL";
import { authActions } from "../store/slices/authSlice";

const useFetchUserDetails = () => {
  const dispatch = useDispatch();
  const id = localStorage.getItem("id");
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const response = await axios.get(`${base_URL}/users/${id}`);
        const userData = response.data;

        dispatch(authActions.setId(userData.id));
        dispatch(authActions.setName(userData.name));
        dispatch(authActions.setEmail(userData.userName));
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    if (isAuthenticated) {
      getUserDetails();
    }
  }, [isAuthenticated, dispatch, id, base_URL]);
};

export default useFetchUserDetails;
