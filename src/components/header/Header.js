import React, { useState, useEffect, useRef } from "react";
import logo from "../../asset/logo.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/slices/AuthSlice";
import { PiShoppingCartBold } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const navigate = useNavigate();
  const onlineStatus = useOnlineStatus();
  const cartItem = useSelector((store) => store.cart.items);
  const isAuth = useSelector((store) => store.user.isLoggedIn);
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // New state for the menu

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
    // localStorage.setItem("isLoggedIn", false);
  };

  const user = JSON.parse(localStorage.getItem("user"));

  const handleUserClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header class="bg-white fixed top-0 w-[100%] z-50 py-4 px-8">
        <div class="  max-w-full ">
          <nav class="relative flex items-center justify-between  bg-white lg:rounded-md   ">
            <div class="flex-shrink-0 mt-2 sm:mt-0">
              <NavLink to="/" className="flex items-center">
                <img
                  class="w-10 h-8  lg:h-12 lg:w-16 mx-2"
                  src={logo}
                  alt="logo"
                />
                <h3 className="font-bold text-3xl font-serif text-black">
                  Rasoi<span className="text-orange-400 ">Wallah</span>
                </h3>
              </NavLink>
            </div>

            <ul className="hidden ml-10 lg:flex lg:items-center lg:mr-auto lg:space-x-10">
              <NavLink to="/">
                <li className="text-md hover:text-orange-500  font-medium  transition-all duration-200  focus:text-orange-500">
                  Home
                </li>
              </NavLink>

              <NavLink to="about">
                <li className="text-md hover:text-orange-500  font-medium  transition-all duration-200  focus:text-orange-500">
                  About
                </li>
              </NavLink>

              <NavLink to="contact">
                <li className="text-md hover:text-orange-500  font-medium  transition-all duration-200  focus:text-orange-500">
                  Contact
                </li>
              </NavLink>
            </ul>
            <GiHamburgerMenu
              className="w-10 h-8 lg:hidden"
              onClick={handleMenuToggle}
            />

            <div className="hidden lg:flex lg:items-center lg:space-x-10">
              {isAuth ? (
                <p className="" onClick={handleUserClick} ref={dropdownRef}>
                  <p className="text-orange-400">
                    {user.fullName.toUpperCase()}
                  </p>
                  {isDropdownOpen && (
                    <ul
                      className="absolute bg-white shadow-md mt-5 h-30  w-32 py-2 rounded-md z-50"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <li className="px-4 py-2 hover:bg-orange-500 hover:text-gray-300 text-gray-500">
                        <NavLink to="/profile">Profile</NavLink>
                      </li>
                      <li
                        className="px-4 py-2  hover:bg-orange-500 hover:text-gray-300 text-gray-500"
                        onClick={handleLogout}
                      >
                        Logout
                      </li>
                      <li className="px-4 py-2  hover:bg-orange-500 hover:text-gray-300 text-gray-500">
                        <NavLink to="/orders">Orders</NavLink>
                      </li>
                    </ul>
                  )}
                </p>
              ) : (
                <NavLink to="/login">
                  <p className="hover:text-orange-500">Log In</p>
                </NavLink>
              )}

              <NavLink to="/cart">
                <p className="hover:text-orange-500 flex items-center relative ">
                  <PiShoppingCartBold className="h-6 w-6 " />
                  <span className="text-white h-4 w-4 left-2.5 top-0 rounded-full absolute flex items-center justify-center text-xs font-bold  bg-orange-500">
                    {cartItem.length}
                  </span>
                </p>
              </NavLink>
            </div>
          </nav>
        </div>
      </header>
      {isMenuOpen && (
        <ul className=" bg-gray-500 w-full h-[670px] absolute top-0 z-50">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      )}
    </>
  );
};

export default Header;
