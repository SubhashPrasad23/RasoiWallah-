// components/Logo.js
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../asset/logo.jpg";

const Logo = () => {
  return (
    <div className="flex-shrink-0 mt-2 sm:mt-0">
      <NavLink to="/" className="flex items-center">
        <img className="w-10 h-8 lg:h-12 lg:w-16 mx-2" src={logo} alt="logo" />
        <h3 className="font-bold text-3xl font-serif text-black">
          Rasoi<span className="text-orange-400">Wallah</span>
        </h3>
      </NavLink>
    </div>
  );
};

export default Logo;
