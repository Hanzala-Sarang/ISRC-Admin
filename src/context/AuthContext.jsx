// src/contexts/AuthContext.jsx
import { createContext, useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      // Optionally, you can verify the token or fetch user data
      setUser({ token });
    }
  }, [token]);

  const register = async (email, password) => {
    try {
      const response = await axios.post(
        "https://isrc-backend-gwol.onrender.com/api/admin/register",
        { email, password }
      );
      const { token } = response.data;
      setToken(token);
      localStorage.setItem("token", JSON.stringify(token));
      setUser({ token });
      return response.data;
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post(
        "https://isrc-backend-gwol.onrender.com/api/admin/login",
        { email, password }
      );
      const { token } = response.data;
      setToken(token);
      localStorage.setItem("token", JSON.stringify(token));
      setUser({ token });
      return response.data;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, register, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
