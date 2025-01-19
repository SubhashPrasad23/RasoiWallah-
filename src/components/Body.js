import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import axios from "axios";
import Shimmer from "./shimmer/Shimmer";

import { NavLink } from "react-router-dom";
import { LuSearch } from "react-icons/lu";
import Slide from "./Slide";

function Body() {
  const [originalRestroList, setOriginalRestroList] = useState([]);
  const [restroList, setRestroList] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const apiUrl =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139391&lng=77.2090212&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    try {
      const response = await axios.get(apiUrl);

      const restaurant =
        response?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setRestroList(restaurant);
      setOriginalRestroList(restaurant);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  const topResHandler = () => {
    const topRestaurant = originalRestroList.filter(
      (topRes) => topRes?.info?.avgRatingString >= "4"
    );
    setRestroList(topRestaurant);
  };

  const handleSearch = (value) => {
    setSearch(value);
    const fil = originalRestroList.filter((searchRest) =>
      searchRest?.info?.name?.toLowerCase()?.includes(value?.toLowerCase())
    );
    setRestroList(fil);
  };

  const inputHandler = (e) => {
    handleSearch(e.target.value);
    setSearch(e.target.value);
  };

  const searchHandler = (e) => {
    const searchRestaurant = originalRestroList?.filter((searchRes) =>
      searchRes?.info?.name?.toLowerCase()?.includes(search?.toLowerCase())
    );
    setRestroList(searchRestaurant);
    e.preventDefault();
    setSearch("");
  };

  return (
    <>
      <div className="h-full w-full">
        <Slide />
        <div className=" w-4/5 mx-auto">
          <div className=" space-y-4  my-16 ">
            <div className=" place-content-center place-items-center w-full  ">
              <form
                className="flex flex-col md:flex-row items-center gap-2 md:w-1/2 w-full"
                onSubmit={searchHandler}
              >
                <div className="relative bg-orange-500 flex items-center w-full h-10 focus-within:shadow-lg overflow-hidden">
                  <div className="grid place-items-center h-full w-12 text-gray-300">
                    <LuSearch color="white" />
                  </div>
                  <input
                    className="peer h-full w-full outline-none text-sm text-black-700 focus:border-gray-300 border border-orange-400 px-2"
                    type="text"
                    id="search"
                    placeholder="Search"
                    onChange={inputHandler}
                    value={search}
                    required
                  />
                </div>
              </form>
              <button
                className="flex items-center justify-center font-semibold w-full h-10 my-4 md:py-0 px-6  text-lg text-white bg-orange-500 hover:bg-orange-600 md:w-auto "
                id="sectionId"
                onClick={topResHandler}
              >
                Rating 4.0+
              </button>
            </div>
          </div>

          <div className="w-full h-full">
            <h1 className="font-semibold text-3xl md:ml-12 md:text-start text-center">
              OUR TOP RESTAURANT
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-7 py-8">
              {loading
                ? // Show shimmer skeleton for each item when loading
                  [...Array(restroList.length || 8)].map((_, index) => (
                    <div key={index} className="w-64 h-96">
                      <Shimmer />
                    </div>
                  ))
                : restroList.map((restro) => (
                    <NavLink
                      to={"/restaurant/" + restro?.info?.id}
                      key={restro?.info?.id}
                    >
                      <div className="">
                        <RestaurantCard res={restro} />
                      </div>
                    </NavLink>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
