import axios from "axios";

const TicketAPI = (() => {
  const BASE_URL = import.meta.env.VITE_API_URL + "/ticket";
  const getToken = localStorage.getItem("token");
  const InsertTicket = async ({
    title,
    description,
    category_id,
    priority_id,
    status_id,
  }) => {
    try {
      const response = await axios.post(
        BASE_URL,
        {
          title,
          description,
          category_id,
          priority_id,
          status_id,
        },
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getDetailTicket = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`, {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      });

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateTicket = async ({ id, assigned_id, status_id }) => {
    try {
      const response = await axios.patch(
        `${BASE_URL}/${id}`,
        { assigned_id, status_id },
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  return {
    InsertTicket,
    getDetailTicket,
    updateTicket,
  };
})();

export default TicketAPI;
