import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import ItemList from "../components/ItemList";
import { updateQuantity, decreaseQuantity,removeItem } from "../store/slices/CartSlice";
import { NavLink } from "react-router-dom";
import Payment from "../components/Payment";
import OrderPlacedModal from "../components/OrderPlacedModal";
import { MdDelete } from "react-icons/md";

function Cart() {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [isPlaceOrder, setIsPlaceOrder] = useState(false);

  const cartItem = useSelector((store) => store.cart.items);
  let { shipping, totalQuantity, totalPrice } = useSelector(
    (store) => store.cart
  );

  const dispatch = useDispatch();
  const handleIncreament = (item) => {
    dispatch(updateQuantity(item));
  };

  const handledecreament = (item) => {
    dispatch(decreaseQuantity(item));
  };

  const handlePopUp = () => {
    setIsPaymentOpen(true);
  };
  const handlePaymentClose = () => {
    setIsPaymentOpen(false); // Reset the state when closing the popup
  };

  const handlePlaceOrderClose = () => {
    setIsPlaceOrder(false);
  };
  const handlePlaceOrderopen = () => {
    setIsPlaceOrder(true);
  };
const handleRemoveItem=(item)=>{
console.log(item)
dispatch(removeItem(item))
}

  return (
    <>
      {cartItem.length === 0 ? (
        <div className="flex flex-col justify-center items-center my-36 space-y-6 ">
          <h1 className="font-semibold text-3xl">Your cart is empty !</h1>
          <p className="text-lg text-gray-500">
            You can go to home page to view more restaurants
          </p>
        </div>
      ) : (
        <div className=" h-screen py-8 mt-24">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-semibold mb-4">ITEMS</h1>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-3/4">
                <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="text-left font-semibold">Item</th>
                        <th className="text-left font-semibold">Price</th>
                        <th className="text-left font-semibold">Quantity</th>
                        <th className="text-left font-semibold">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItem.map((item) => (
                        <>
                          {/* console.log(item."itemmmm") */}
                          <tr>
                            <td className="py-4">
                              <div className="flex items-center">
                                <img
                                  className="h-16 w-16 mr-4"
                                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_60/${item.card.info.imageId}`}
                                  alt="product_img"
                                />
                                <span className="font-semibold">
                                  {item.card.info.name}
                                </span>
                              </div>
                            </td>
                            <td className="py-4">
                              ₹{" "}
                              {item.card.info.price / 100 ||
                                item.card.info.defaultPrice / 100}
                            </td>
                            <td className="py-4">
                              <div class="flex items-center">
                                <button
                                  class="border rounded-md py-2 px-4 mr-2"
                                  onClick={() => handledecreament(item)}
                                >
                                  -
                                </button>
                                <span className="text-center w-8">
                                  {item.quantity}
                                </span>
                                <button
                                  className="border rounded-md py-2 px-4 ml-2"
                                  onClick={() => handleIncreament(item)}
                                >
                                  +
                                </button>
                              </div>
                            </td>
                            <td className="py-4">₹ {item.singleitemprice}</td>
                            <td onClick={()=>handleRemoveItem(item)}>
                              <MdDelete className="h-6 w-6"/>
                            </td>
                          </tr>
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="md:w-1/4">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-lg font-semibold mb-4">Bill Details</h2>
                  <div className="flex justify-between mb-2">
                    <span> Total Quantity</span>
                    <span>{totalQuantity}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Total Price</span>
                    <span>₹ {totalPrice}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Delivery partner fee</span>
                    <span className="text-green-500">FREE</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>GST and Restaurant Charges</span>
                    <span>{shipping}</span>
                  </div>
                  <hr className="my-2" />
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">TO PAY</span>
                    <span className="font-semibold">
                      ₹ {totalPrice + shipping}
                    </span>
                  </div>
                  <NavLink to="/payment">
                  <button
                    className="bg-orange-500 text-white py-2 px-4 rounded-lg mt-4 w-full"
                    // onClick={handlePopUp}
                  >
                    PROCEED TO PAY
                  </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          {isPaymentOpen && <Payment onClose={handlePaymentClose} />}
          {isPlaceOrder && (
            <OrderPlacedModal
              onClose={handlePlaceOrderClose}
              onOpenUp={handlePlaceOrderopen}
            />
          )}
        </div>
      )}
    </>
  );
}

export default Cart;
