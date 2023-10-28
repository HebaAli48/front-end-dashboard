import React from "react";
import { useSelector } from "react-redux";

const useAuthenticate = () => {
  const { token, user, isLogged } = useSelector((state) => state.auth);
  const isAuthenticated =
    token && (user.role === "user" || user.role === "admin");
  //   const isAdmin = user.role === "admin";
  const userId = user._id;
  return { isAuthenticated, token, userId, isLogged };
};

export default useAuthenticate;
