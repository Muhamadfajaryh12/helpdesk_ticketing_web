import axios from "axios";

const AuthAPI = (() => {
  const baseURL = import.meta.env.VITE_API_URL + "/user";

  const Login = async ({ email, password }) => {
    try {
      const response = await axios.post(`${baseURL}/login`, {
        email,
        password,
      });

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    Login,
  };
})();

export default AuthAPI;
