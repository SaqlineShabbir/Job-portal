"use client";

import { AxiosInstance } from "@/utils/axios/axiosInstance";
import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // //   get the user from cookies and set to  user state
  const fetchUser = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/user");

      const result = await response.json();
      setUser(result?.user);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // get the user after reloade
  useEffect(() => {
    fetchUser();
  }, []);

  //logout
  const LogoutUser = async () => {
    console.log("logging out ");
    const response = await AxiosInstance.post("/logout");
    Cookies.remove("accessToken");
    setUser(null);
  };

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    LogoutUser,
    fetchUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
