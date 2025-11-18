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
      return error.response.data;
    }
  };

  const InsertUser = async ({ name, email, password, role }) => {
    try {
      const response = await axios.post(`${baseURL}/register`, {
        email,
        name,
        password,
        role,
      });

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const DeleteUser = async ({ id }) => {
    try {
      const response = await axios.delete(`${baseURL}/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  return {
    Login,
    InsertUser,
    DeleteUser,
  };
})();

export default AuthAPI;
