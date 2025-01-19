import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-2/3  flex items-center justify-center bg-black">
      <div className="md:w-2/3 w-full  text-white flex flex-col ml-6 md:ml-0">
        <div className="w-full text-7xl font-bold py-8">
          <h1 className="w-full md:w-2/3 ">
            How can we assist you? Get in touch
          </h1>
        </div>
        <div className="flex mt-8 flex-col md:flex-row md:justify-between">
          <p className="w-full md:w-2/3 text-gray-400 ">
            Have a question or need support? Feel free to reach out to us.
          </p>
          <div className="w-44 pt-6 md:pt-0 ">
            <NavLink to="/contact">
              <p className="hover:bg-orange-600 text-center bg-orange-500 text-white justify-center rounded-lg shadow px-10 py-3 flex items-center">
                Contact Us
              </p>
            </NavLink>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex  my-6 flex-row justify-between">
            <div className="">
              <h4 className="font-bold text-lg">
                Rasoi<span className="text-orange-500">Wallah</span>
              </h4>
            </div>
            <ul className="flex justify-between space-x-24">
              <NavLink to="/about">
                <li className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                  About
                </li>
              </NavLink>

              <li className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                Services
              </li>
              <li className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                Why Us
              </li>
              <NavLink to="/contact">
                <li className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                  Contact
                </li>
              </NavLink>
            </ul>

            <div className="flex flex-row space-x-8 items-center justify-between"></div>
          </div>
          <hr className="border-gray-600" />
          <p className="w-full text-center py-6 text-gray-600">
            © 2024 RasoiWallah. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
