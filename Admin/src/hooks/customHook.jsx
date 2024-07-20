import { useState, useEffect } from "react";
import axios from "axios";

import { base_URL } from "../components/api/URL";

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const idToken = localStorage.getItem("token");

    const fetchData = async () => {
      try {
        const response = await axios.get(`${base_URL}${endpoint}`, {
          headers: {
            Authorization: idToken,
          },
        });

        setData(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, isLoading };
};

export default useFetch;

export const useFetchAllData = (endpoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const idToken = localStorage.getItem("token");

    const fetchAllData = async () => {
      try {
        const response = await axios.post(
          `${base_URL}${endpoint}`,
          {},
          {
            headers: {
              Authorization: idToken,
            },
          }
        );

        // console.log(response);
        setData(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllData();
  }, [endpoint]);

  return { data, isLoading };
};
