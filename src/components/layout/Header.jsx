import React, { useState } from "react";
import Button from "../ui/Button";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useAuthenticate from "../../utils/useAuthenticate";
import useLogout from "../../utils/useLogout";
import Logo from "../ui/Logo";
import { Menu, Messege, Notification } from "../../utils/Icons";

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  // const cartNumber = useSelector((state) => state.cart.cart.length);

  const { isAuthenticated, isAdmin } = useAuthenticate();
  const logout = useLogout();
  const { profile_pic } = useSelector((state) => state.auth.user);
  const headerData = [
    { title: "Home", to: "/" },
    { title: "About", to: "/About" },
    { title: "Support", to: "/Support" },
  ];
  return (
    <nav
      className={`bg-primary-color text-[white] border-b border-primary-color    ${
        isCollapsed ? "pb-3" : "  h-[70vh]"
      } pt-2 sm:pb-2 px-10`}
    >
      <div className="flex items-center  relative">
        {/* logo  */}
        <Link to="/">
          <Logo />
        </Link>

        {/* collapse button  */}
        <button
          onClick={() => setIsCollapsed((prev) => !prev)}
          className="block items-center px-3 py-2 border rounded text-cyan-200 border-cyan-400 hover:text-white hover:border-white ms-2 sm:hidden order-9"
        >
          {Menu}
        </button>

        {/* links  */}
        <div
          className={`${
            isCollapsed ? "hidden " : "  "
          } absolute w-100 top-5 sm:block sm:relative py-10 pl-2 pr-2 sm:text-center sm:top-0 grow bg-inherit  `}
        >
          <ul className="flex flex-col sm:flex-row justify-start sm:justify-center  gap-24 sm:gap-6  items-center w-4/5 m-auto text-lg">
            {headerData.map((data, index) => (
              <li className="pt-2 sm:pt-0 " key={index}>
                <NavLink
                  to={data.to}
                  className="  hover:border-b-2 border-white py-2 transition"
                >
                  {data.title}
                </NavLink>
              </li>
            ))}

            {/* {isAuthenticated && !isAdmin && (
                <li className="pt-2 sm:pt-0">
                  <Link
                    to="/wishlist"
                    className="hover:border-b-2 border-line-primary py-1 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill={`${
                        wishlist.length > 0 ? "var(--btn-primary)" : "none"
                      }`}
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke={`${
                        wishlist.length > 0 ? "var(--btn-primary)" : "white"
                      }`}
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                  </Link>
                </li>
              )}
              {!isAdmin && (
                <li className="  pt-2 sm:pt-0 relative">
                  <Link to="/cart">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      // fill={cartNumber > 0 ? "var(--btn-primary)" : "none"}
                      fill={cartNumber > 0 ? "none" : "none"}
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                  </Link>
                  {cartNumber > 0 && (
                    <span className="bg-btn-primary text-white text-xs font-medium mr-2 w-4 h-4 rounded-full dark:bg-btn-primary dark:text-btn-primary absolute  top-[-2px] left-[15px] sm:top-[-11px] text-center">
                      {cartNumber}
                    </span>
                  )}
                </li>
              )} */}
          </ul>
        </div>
        <div className="flex gap-2 sm:gap-5 items-center justify-end sm:mr-5 ml-auto">
          <span className="hover:-translate-x-2 hover:scale-x-110 hover:text-slate-300 transition-all">
            {Notification}
          </span>
          <span className="hover:translate-x-2 hover:scale-x-110 hover:text-slate-300 transition-all">
            {Messege}
          </span>
        </div>
        {/* Authentication Buttons  */}
        {!isAuthenticated && (
          <div className="ml-auto">
            <Link to="/sign-in">
              <Button className="ms-2">Login</Button>
            </Link>
          </div>
        )}
        {isAuthenticated && (
          <div className="ml-auto flex items-center">
            <Link to="user">
              <div className=" w-10 h-10">
                <img
                  className="w-full h-full rounded-full ring-2 ring-secondary-color"
                  src={profile_pic}
                  alt=""
                  loading="lazy"
                />
              </div>
            </Link>
            <Link onClick={logout}>
              <Button className="ms-2" primary={false}>
                logout
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
