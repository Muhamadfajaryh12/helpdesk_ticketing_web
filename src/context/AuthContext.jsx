import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    role: "",
    name: "",
    id: "",
  });
  const [loading, setLoading] = useState(true);
  const logout = () => {
    if (auth) {
      localStorage.removeItem("token");
      setAuth(null);
    }
  };
  const decodedJwt = (token) => {
    try {
      return jwtDecode(token);
    } catch (error) {
      return null;
    }
  };

  useEffect(() => {
    const getToken = localStorage.getItem("token");
    if (getToken) {
      const decoded = decodedJwt(getToken);
      if (decoded) {
        setAuth({
          role: decoded.role,
          name: decoded.name,
          id: decoded.user_id,
        });
      } else {
        setAuth(null);
      }
    } else {
      setAuth(null);
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ auth, logout, setAuth, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
