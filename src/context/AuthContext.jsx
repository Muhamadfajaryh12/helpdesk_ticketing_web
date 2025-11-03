import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const logout = () => {
    if (token) {
      localStorage.removeItem("token");
    }
  };

  useEffect(() => {
    const getToken = localStorage.getItem("token");
    if (getToken) {
      setLoading(false);
      setToken(getToken);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, logout, setToken, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
