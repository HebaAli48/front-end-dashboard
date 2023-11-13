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
    { title: "profile", to: "/user" },
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
