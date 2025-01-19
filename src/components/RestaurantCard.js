import React from "react";

function RestaurantCard({ res }) {
  const { name, avgRatingString, cuisines, areaName, cloudinaryImageId } =
    res?.info;
  const { slaString } = res?.info?.sla;

  return (
    <div className="h-96 w-64 hover:bg-gray-100 hover:scale-110 transition-all duration-200  border hover:shadow-lg hover:shadow-orange-100  rounded-lg  ">
      <div className="h-40  w-full p-2">
        <img
          className="rounded-t-lg h-full w-full"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt="restroImg"
        />
      </div>

      <div className="px-5 py-2 ">
        <h1 className="font-semibold text-lg">{name}</h1>
        <h3 className="font-semibold">
          {avgRatingString}
          <span className="font-bold"> - </span>
          {slaString}
        </h3>
        <h4 className="text-gray-500 mt-1 ">{cuisines.join(", ")}</h4>
        <h4 className=" text-md">{areaName}</h4>
      </div>
    </div>
  );
}

export default RestaurantCard;
