import React from "react";
import { PiShoppingCartBold } from "react-icons/pi";
import { NavLink } from "react-router-dom";

const MobileMenu = ({ isMenuOpen, setIsMenuOpen, cartItem }) => {
  return (
    isMenuOpen && (
      <div className="bg-gray-200 w-full h-[670px] absolute top-0 z-50 md:hidden mt-[75px] px-52 py-16">
        <ul className="flex flex-col gap-6">
          <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
            <li className="text-xl hover:text-orange-400 font-medium transition-all duration-200 focus:text-orange-400">
              Home
            </li>
          </NavLink>
          
          <NavLink to="contact" onClick={() => setIsMenuOpen(false)}>
            <li className="text-xl hover:text-orange-400 font-medium transition-all duration-200 focus:text-orange-400">
              Contact
            </li>
          </NavLink>
          <NavLink to="/cart" onClick={() => setIsMenuOpen(false)}>
            <li className="hover:text-orange-500 flex items-center relative">
              <PiShoppingCartBold className="h-10 w-16" />
              <span className="text-white h-6 w-6 left-8 -top-1 rounded-full absolute flex items-center justify-center text-md font-bold bg-orange-400">
                {cartItem.length}
              </span>
            </li>
          </NavLink>
        </ul>
      </div>
    )
  );
};

export default MobileMenu;
