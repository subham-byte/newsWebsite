/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex flex-row justify-between items-center text-xl mt-10 text-gray-400">
      <img src={Logo} alt="logo image" />
      <div className="block lg:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Menu</title>
            <path
              fillRule="evenodd"
              d="M3 5h14a1 1 0 110 2H3a1 1 0 110-2zm0 6h14a1 1 0 110 2H3a1 1 0 110-2zm0 6h14a1 1 0 110 2H3a1 1 0 110-2z"
            />
          </svg>
        </button>
      </div>
      <ul className={`lg:flex ${isOpen ? "block" : "hidden"} mt-4 lg:mt-0`}>
        <li className="mx-3">
          <Link to="/">Home</Link>
        </li>
        <li className="mx-3">
          <Link to="/new">New</Link>
        </li>
        <li className="mx-3">
          <Link to="/popular">Popular</Link>
        </li>
        <li className="mx-3">
          <Link to="/trending">Trending</Link>
        </li>
        <li className="mx-3">
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
