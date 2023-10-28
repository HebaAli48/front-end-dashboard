/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import URL from "../../utils/URL";

import Header from "./Header";
import Footer from "./Footer";
// import Loader from "../ui/Loader";

import { login, updateUserState } from "../../store/slices/authSlice";
import useAuthenticate from "../../utils/useAuthenticate";

const AppLayout = () => {
  const dispatch = useDispatch();
  const { userId, isLogged } = useAuthenticate();

  const [isLoading, setIsLoading] = useState(false);

  const token = localStorage.getItem("token");

  useEffect(() => {}, []);

  return (
    <div className="flex flex-col  ">
      <Header />
      <main className="min-h-[80vh] flex flex-col bg-back-color">
        {/* {isLoading && <Loader />} */}
        {!isLoading && <Outlet />}
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
