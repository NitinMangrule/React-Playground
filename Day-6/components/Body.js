import Card from "./Card";
import { restaurantList } from "../constants";
import { useState, useEffect } from "react";

function filterData(searchText) {
  if (searchText) {
    return restaurantList.filter((restaurant) => {
      return restaurant.data.name.includes(searchText);
    });
  } else {
    return restaurantList;
  }
}

const Body = () => {
  const [searchText, setSearchText] = useState(""); // returns array [variable name , function to update variable]
  const [restaurants, setRestaurantList] = useState(restaurantList);

  useEffect(() => {
      console.log('render');
  }, []);

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search.."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            setRestaurantList(filterData(searchText));
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return <Card key={restaurant.data.id} {...restaurant.data} />;
        })}
      </div>
    </>
  );
};

export default Body;
