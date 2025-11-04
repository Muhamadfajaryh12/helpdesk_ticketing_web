import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetch = ({ url, auth = false }) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
    error: null,
  });

  const getToken = localStorage.getItem("token");

  const optionHeader = {
    headers: {
      Authorization: `Bearer ${getToken}`,
    },
  };
  const fetchAPI = async (value) => {
    try {
      const response = await axios.get(value, optionHeader);
      setState({
        data: response.data.data,
        loading: false,
        error: null,
      });
    } catch (error) {
      setState({
        data: [],
        loading: false,
        error,
      });
      console.log("AXIOS ERROR", error);
      if (axios.isAxiosError(error)) {
        console.log("Request:", error.request); // objek request
        console.log("Response:", error.response); // biasanya undefined kalau network error
      }
    }
  };
  useEffect(() => {
    if (url) {
      fetchAPI(url);
    }
  }, [url]);

  return state;
};

export default useFetch;
