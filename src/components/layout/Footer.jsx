import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { FaceBook, Twitter, Youtube } from "../../utils/Icons";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-primary-color  text-white border-t-[3px] border-line-primary">
      <div className="flex  justify-center gap-8">
        <span className="link link-hover">
          <Link to="/about" className="hover:border-b-2 border-white py-1">
            About us
          </Link>{" "}
        </span>
        <span className="link link-hover">
          <Link to="/support" className="hover:border-b-2 border-white py-1">
            Contact
          </Link>
        </span>
        {/* <span className="link link-hover">
          {" "}
          <Link to="/store">Store</Link>{" "}
        </span> */}
      </div>
      <div className="flex  justify-center gap-6 my-4">
        <a className="hover:scale-105 hover:translate-x-1 transition-all cursor-pointer">
          {Twitter}
        </a>
        <a className="hover:scale-105 hover:translate-x-1 transition-all cursor-pointer">
          {Youtube}
        </a>
        <a className="hover:scale-105 hover:translate-x-1 transition-all cursor-pointer">
          {FaceBook}
        </a>
      </div>
      <div>
        <p>Copyright © 2023 - All right reserved by Coligo</p>
      </div>
    </footer>
  );
};

export default Footer;
