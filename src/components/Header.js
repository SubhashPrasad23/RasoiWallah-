import React, { useState } from "react";
import { useSelector } from "react-redux";
import { PiShoppingCartBold } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import Logo from "./Logo";
import MenuItems from "./MenuItems";
import UserDropdown from "./UserDropdown";
import MobileMenu from "./MobileMenu";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const cartItem = useSelector((store) => store.cart.items);
  const isAuth = useSelector((store) => store.user.isLoggedIn);
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <header className="bg-white fixed top-0 w-[100%] z-50 py-4 px-8">
      <div className="max-w-full">
        <nav className="relative flex items-center justify-between bg-white lg:rounded-md">
          <Logo />

          <MenuItems />

          {isMenuOpen ? (
            <RxCross2
              className="w-10 h-8 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
          ) : (
            <GiHamburgerMenu
              className="w-10 h-8 md:hidden"
              onClick={() => setIsMenuOpen(true)}
            />
          )}

          <div className="hidden md:flex md:items-center md:space-x-10">
            {isAuth && (
              <UserDropdown
                user={user}
                isDropdownOpen={isDropdownOpen}
                setIsDropdownOpen={setIsDropdownOpen}
              />
            )}
            {!isAuth && (
              <NavLink to="/login">
                <p className="hover:text-orange-500">Log In</p>
              </NavLink>
            )}
            <NavLink to="/cart">
              <p className="hover:text-orange-500 flex items-center relative">
                <PiShoppingCartBold className="h-6 w-6" />
                <span className="text-white h-4 w-4 left-2.5 top-0 rounded-full absolute flex items-center justify-center text-xs font-bold bg-orange-500">
                  {cartItem.length}
                </span>
              </p>
            </NavLink>
          </div>
        </nav>
      </div>

      <MobileMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        cartItem={cartItem}
      />
    </header>
  );
};

export default Header;
