import React, { useEffect, useState } from "react";
import axios from "axios";
import Shimmer from "./shimmer/Shimmer";
import { NavLink, useParams } from "react-router-dom";
import RestroCategory from "./RestroCategory";
import ShimmerLoading from "./shimmer/ShimmerLoading";

function RestroMenu() {
  const [menu, setMenu] = useState(null);
  const [isLoading, setIsLoading]=useState(true)
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const menuAPI =
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6139391&lng=77.2090212&restaurantId=";
    try {
      const response = await axios.get(menuAPI + resId);
      setMenu(response?.data);
      setIsLoading(false)
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };
  const { name, cuisines, costForTwoMessage } =
    menu?.data?.cards[2]?.card?.card?.info || {};

  const itemsCategory =
    menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) => {
        return (
          category.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  return (
    <>
    {isLoading ? (
      <ShimmerLoading />
    ) : (
      <div className="text-center mt-12 py-10">
        <h1 className="font-bold text-2xl">{name}</h1>
        <p className="text-lg font-semibold text-gray-500 mb-10">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        {itemsCategory.map((category) => {
          return <RestroCategory key={category.id} data={category} />;
        })}
      </div>
    )}
    </>
    
  );
}

export default RestroMenu;
