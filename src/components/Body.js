import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import axios from "axios";
import Shimmer from "./shimmer/Shimmer";
import Banner from "./banner/Banner";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";
import { LuSearch } from "react-icons/lu";
import Slide from "./Slide";

function Body() {
  const [originalRestroList, setOriginalRestroList] = useState([]);
  const [restroList, setRestroList] = useState([]);
  const [banner, setBanner] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  // console.log(restroList)
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
      const bannerRes =
        response?.data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle
          ?.info;
      setBanner(bannerRes);
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

  const settings = {
    infinite: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrow: true,
  };

  return (
    <>
      <div className="">
        <Slide />

        <div className=" w-4/5 mx-auto">
        <div class=" space-y-4 md:space-y-0 my-16 md:gap-6">
                <div class="md:flex md:space-x-4 w-full max-w-screen-lg ">
                  <form
                    action=""
                    class="flex flex-col md:flex-row items-center gap-2 md:w-1/2"
                    onSubmit={searchHandler}
                  >
                    <div class="relative bg-orange-500 flex items-center w-full h-10 focus-within:shadow-lg overflow-hidden">
                      <div class="grid place-items-center h-full w-12 text-gray-300">
                        <LuSearch />
                      </div>
                      <input
                        class="peer h-full w-full outline-none text-sm text-black-700 focus:border-gray-300 border border-orange-400 px-2"
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
                    className="flex items-center justify-center font-semibold w-full h-10 my-4 md:py-0 px-6  text-lg text-white bg-orange-500 hover:bg-red-600 md:w-auto md:ml-2"
                    id="sectionId"
                    onClick={topResHandler}
                  >
                    Rating 4.0+
                  </button>
                </div>
              </div>

              <h1 className="font-semibold text-3xl text-center md:text-start md:mt-24 mt-10 mb-6 ">
                OUR TOP RESTAURANT
              </h1>
          {loading ? (
            <Shimmer />
          ) : (
            <>
              

              <div className=" flex flex-wrap justify-center items-center gap-7">
                {restroList.map((restro) => (
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
              {/* <hr className="border-2  mt-24 border-orange-200" /> */}

              <h1 className="mt-16 font-semibold text-3xl ">
                OUR POPULAR DISHES
              </h1>

              <div className=" py-6 ">
                <div className="banner">
                  <Slider {...settings}>
                    {banner.map((banList, index) => (
                      // console.log(banList)
                      <Banner key={index} banner={banList} />
                    ))}
                  </Slider>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Body;
