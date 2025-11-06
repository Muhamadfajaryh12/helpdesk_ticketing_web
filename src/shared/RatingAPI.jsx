import axios from "axios";

const RatingAPI = (() => {
  const BASE_URL = import.meta.env.VITE_API_URL + "/review";
  const getToken = localStorage.getItem("token");

  const InsertReview = async ({ id, rating }) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/${id}`,
        {
          rating,
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

  return { InsertReview };
})();

export default RatingAPI;
