import React from "react";

function RestaurantCard({ res }) {
  const { name, avgRatingString, cuisines, areaName, cloudinaryImageId } =
    res?.info;
  const { slaString } = res?.info?.sla;

  return (
    <div className="max-w-2xl mx-auto ">
      <div className="bg-white hover:bg-gray-300 hover:scale-105 w-[280px] h-[420px] shadow-lg shadow-gray-400  rounded-lg max-w-sm ">
        <img
          className="rounded-t-lg h-56 w-[330px]"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt="restroImg"
        />
        <div className="px-5 pb-3 pt-2 ">
          <h1 className="font-semibold text-xl ">{name}</h1>
          <h3 className="font-semibold ">
            {avgRatingString}
            <span className="font-bold "> - </span>
            {slaString}
          </h3>
          <h4 className="text-black mt-2">{cuisines.join(", ")}</h4>
          <h4 className="text-black">{areaName}</h4>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;
