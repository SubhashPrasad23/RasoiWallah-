import React, { useEffect, useState } from "react";
import axios from "axios";
import Shimmer from "./shimmer/Shimmer";
import { NavLink, useParams } from "react-router-dom";
import RestroCategory from "./RestroCategory";

function RestroMenu() {
  const [menu, setMenu] = useState(null);
  const { resId } = useParams();
  // console.log(menu)
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const menuAPI =
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6139391&lng=77.2090212&restaurantId=";
    try {
      const response = await axios.get(menuAPI + resId);
      setMenu(response?.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  if (menu === null) {
    return <h1>loading</h1>;
  }

  const { name, cuisines, costForTwoMessage } =
    menu?.data?.cards[2]?.card?.card?.info || {};

  // console.log(
  //   "menu :",
  //   menu?.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards
  // );

  // const { itemCards } =
  //   menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
  //     ?.card ||
  //   menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card
  //     ?.card.categories[0];
  // console.log(menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3].card.card["@type"])

  const itemsCategory =
    menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) => {
        return (
          category.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );
  // console.log(menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  return (
    <div className="text-center mt-12 py-10">
      <h1 className="font-bold  text-2xl ">{name}</h1>
      <p className="text-lg font-semibold text-gray-500 mb-10">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {itemsCategory.map((category) => {
        return <RestroCategory data={category} />;
      })}
    </div>
  );
}

export default RestroMenu;
