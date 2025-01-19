import React from "react";
import { NavLink } from "react-router-dom";

const MenuItems = () => {
  return (
    <ul className="hidden ml-10 md:flex md:items-center md:mr-auto md:space-x-10">
      <NavLink to="/">
        <li className="text-md hover:text-orange-500 font-medium transition-all duration-200 focus:text-orange-500">
          Home
        </li>
      </NavLink>
      <NavLink to="contact">
        <li className="text-md hover:text-orange-500 font-medium transition-all duration-200 focus:text-orange-500">
          Contact
        </li>
      </NavLink>
    </ul>
  );
};

export default MenuItems;
