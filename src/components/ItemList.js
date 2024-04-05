import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store/slices/CartSlice";

function ItemList({ items }) {
  // console.log("itemList :", items);
  const dispatch = useDispatch();
  const handlerAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items?.map((item, index) => {
        return (
          <div
            className="mb-2 border-b-2 py-8 flex justify-between"
            key={index}
          >
            <div className="w-9/12 px-4">
              <p className="font-semibold">{item.card.info.name}</p>
              <p className="font-semibold">
                ₹{" "}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </p>
              <p className="text-gray-500">{item.card.info.description}</p>
            </div>
            <div className="">
              <div className="absolute mx-6">
                {" "}
                <button
                  className="bg-white text-[green]  font-semibold px-2"
                  onClick={() => handlerAddItem(item)}
                >
                  ADD +
                </button>
              </div>
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}`}
                alt=""
                className="h-20 w-28 "
              />
            </div>
          </div>
        );

        // console.log(item.card.info.imageId);
      })}
    </div>
  );
}

export default ItemList;
