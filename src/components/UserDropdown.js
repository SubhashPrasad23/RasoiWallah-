import React from "react";
import { NavLink } from "react-router-dom";

const UserDropdown = ({ user, isDropdownOpen, setIsDropdownOpen }) => {
  return (
    <p
      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      className="cursor-pointer text-orange-400"
    >
      {user.fullName.toUpperCase()}
      {isDropdownOpen && (
        <ul className="absolute bg-white shadow-md mt-5 h-30 w-32 py-2 rounded-md z-50">
          <li className="px-4 py-2 hover:bg-orange-500 hover:text-gray-300 text-gray-500">
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li className="px-4 py-2 hover:bg-orange-500 hover:text-gray-300 text-gray-500">
            <NavLink to="/orders">Orders</NavLink>
          </li>
        </ul>
      )}
    </p>
  );
};

export default UserDropdown;
