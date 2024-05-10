import React, { useState, useEffect, useRef } from "react";
import logo from "../../asset/logo.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/slices/AuthSlice";
import { PiShoppingCartBold } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const navigate = useNavigate();
  const onlineStatus = useOnlineStatus();
  const cartItem = useSelector((store) => store.cart.items);
  const isAuth = useSelector((store) => store.user.isLoggedIn);
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // New state for the menu
  // console.log(object)
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

  // const handleMenuToggle = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

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

            <ul className="hidden ml-10 md:flex md:items-center md:mr-auto md:space-x-10">
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
            {isMenuOpen ? (
              <RxCross2
                className="w-10 h-8 md:hidden "
                onClick={() => setIsMenuOpen(false)}
              />
            ) : (
              <GiHamburgerMenu
                className="w-10 h-8 md:hidden"
                onClick={() => setIsMenuOpen(true)}
              />
            )}

            <div className="hidden md:flex md:items-center md:space-x-10">
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
        <div className="bg-gray-200 w-full h-[670px] absolute top-0 z-50 md:hidden mt-[75px] px-52 py-16">
          <ul className="flex flex-col gap-6">
            <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
              <li className="text-xl hover:text-orange-400  font-medium  transition-all duration-200  focus:text-orange-400">
                Home
              </li>
            </NavLink>
            <NavLink to="about" onClick={() => setIsMenuOpen(false)}>
              <li className="text-xl hover:text-orange-400  font-medium  transition-all duration-200  focus:text-orange-400">
                About
              </li>
            </NavLink>
            <NavLink to="contact" onClick={() => setIsMenuOpen(false)}>
              {" "}
              <li className="text-xl hover:text-orange-400  font-medium  transition-all duration-200  focus:text-orange-400">
                Contact
              </li>
            </NavLink>
            <NavLink to="/cart" onClick={() => setIsMenuOpen(false)}>
                <li className="hover:text-orange-500 flex items-center relative ">
                  <PiShoppingCartBold className="h-10 w-16 " />
                  <span className="text-white h-6 w-6 left-8 -top-1 rounded-full absolute flex items-center justify-center text-md font-bold  bg-orange-400">
                    {cartItem.length}
                  </span>
                </li>
              </NavLink>
          </ul>
          
        </div>
      )}
    </>
  );
};

export default Header;
