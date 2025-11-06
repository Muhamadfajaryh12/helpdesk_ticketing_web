import axios from "axios";

const DashboardAPI = (() => {
  const BASE_URL = import.meta.env.VITE_API_URL + "/dashboard";

  const getDashboard = async () => {
    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return { getDashboard };
})();

export default DashboardAPI;
