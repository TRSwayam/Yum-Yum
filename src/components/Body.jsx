import RestaurantCards, { WithPromtedFunction } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Body = () => {
  // State variables
  const [ListOfRestaurants, setListofRestraunt] = useState([]);
  const [filteredRestaurant, SetfilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Fetch restaurant data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListofRestraunt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    SetfilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Check online status
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>Looks like you're offline!! Please check your internet connection</h1>;

  // Conditional rendering for shimmer effect
  return ListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body bg-pink-50 mt-28">
      <div className="filter flex">
        {/* Search Box with Placeholder and Icon */}
        <div className="search m-4 p-4">
          <div className="relative">
            <input
              type="text"
              className="search-box w-full border border-gray-300 rounded-full shadow-lg p-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
              placeholder="Search for dishes..."
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="20"
              height="20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m1.65-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredRestaurant = ListOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              SetfilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        {/* Top Rated Restaurants Filter */}
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100"
            onClick={() => {
              const filteredList = ListOfRestaurants.filter(
                (res) => res.info.avgRating > 4.4
              );
              SetfilteredRestaurant(filteredList);
            }}
          >
            Top Rated Dishes
          </button>
        </div>
      </div>

      {/* Restaurant Cards */}
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            <RestaurantCards resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
