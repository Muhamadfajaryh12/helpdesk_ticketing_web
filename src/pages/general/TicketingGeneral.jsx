import React from "react";
import { useAuth } from "../../context/AuthContext";
import useFetch from "../../hooks/useFetch";

const TicketingGeneral = () => {
  const BASE_URL = import.meta.env.VITE_API_URL;
  const { auth } = useAuth();
  const { data } = useFetch({ url: BASE_URL + `/ticket?user=${auth.id}` });
  console.log(data);
  return <div></div>;
};

export default TicketingGeneral;
