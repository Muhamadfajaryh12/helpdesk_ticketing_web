import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetch = ({ url, auth = false }) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
    error: null,
  });

  const fetchAPI = async (value) => {
    try {
      console.log(value);
      const response = await axios.get(url);
      setState({
        data: response.data.data,
        loading: false,
        error: null,
      });
    } catch (error) {
      console.log(error);
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
