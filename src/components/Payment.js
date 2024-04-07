import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { BiLogoVisa } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Payment = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);
  const paymentRef = useRef();
  const totalPrice = useSelector((store) => store.cart.totalPrice);

  const handleClose = () => {
    setIsOpen(false);
    onClose(); // Invoke the callback to notify the parent component
  };

  const handleSubmit = () => {
   
    handleClose();
  };

  const handleBackdropClick = (event) => {
    if (event.target === paymentRef.current) {
      handleClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div className="font-sans bg-opacity-50 min-h-screen flex items-center justify-center inset-0 fixed backdrop-blur-sm" ref={paymentRef} onClick={handleBackdropClick}>
          <div className="max-w-xl mx-auto p-5 bg-white shadow-2xl shadow-black">
            <h2 className="text-3xl font-bold text-gray-800 text-center">Make a Payment</h2>
            <p className="text-gray-600 text-base mt-4">Complete your transaction swiftly and securely with our easy-to-use payment process.</p>
            <div className="mt-8">
              <p className="text-gray-800 text-lg">Total Amount: ₹{totalPrice}</p>
            </div>
            <form className="mt-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Cardholder's Name"
                className="px-4 w-full h-12 border border-orange-300 focus:outline-none focus:border-2"
              />
              <div className="flex items-center w-full h-12 mt-4 border border-orange-300 focus:outline-none focus:border-2">
                <BiLogoVisa className="w-8 h-8 px-0.5" />
                <input
                  type="number"
                  placeholder="Card Number"
                  className="px-2 focus:outline-none w-full h-12 border border-orange-300"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <input
                  type="number"
                  placeholder="EXP."
                  className="input-field px-4 h-12 w-full border border-orange-300 focus:outline-none focus:border-2"
                />
                <input
                  type="number"
                  placeholder="CVV"
                  className="input-field px-4 h-12 w-full border border-orange-300 focus:outline-none focus:border-2"
                />
              </div>
              <button
                type="submit"
                className="mt-8 w-full py-3.5 text-sm bg-orange-500 text-white rounded-md hover:bg-red-600"
              >
                Submit
              </button>
            </form>
            <NavLink to="/cart">
              <button className="mt-4 w-full py-3.5 text-sm bg-gray-400 text-white rounded-md hover:bg-gray-600" onClick={handleClose}>
                Cancel
              </button>
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default Payment;
