"use client";

import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // //   get the user from cookies and set to  user state
  const fetchUser = async () => {
    try {
      const response = await fetch(
        "https://job-portal-kohl-six.vercel.app/api/user"
      );

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
    console.log("logging out");

    try {
      const response = await fetch(
        "https://job-portal-kohl-six.vercel.app/api/logout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        Cookies.remove("accessToken");
        setUser(null);
      } else {
        console.error("Failed to log out");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
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
