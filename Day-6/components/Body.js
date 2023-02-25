import Card from "./Card";
import { useState, useEffect } from "react";
import Shimmer  from './Shimmer';
// Conditional Rendering
// if restaurant data is empty => load shimmer UI
// if restaurant data is not empty => load actual UI

function filterData(searchText, allRestaurantsList) {
  if(searchText){
    const filteredData = allRestaurantsList.filter((restaurant) => restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
    console.log('1', searchText, allRestaurantsList, filteredData);
    return filteredData;
  }
  return allRestaurantsList;
}

const Body = () => {
  const [searchText, setSearchText] = useState(""); // returns array [variable name , function to update variable]
  const [filteredRestaurants, setFilteredRestaurantList] = useState([]);
  const [allRestaurants, setAllRestaurantList] = useState([]);

  useEffect(() => {
      console.log('render');
      getRestaurantList();
  }, []);


  async function getRestaurantList(){
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5236317&lng=73.8411226&page_type=DESKTOP_WEB_LISTING');
    const json = await data.json();
    console.log('json',json);
    setAllRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
    console.log(filteredRestaurants, allRestaurants);
  }

  if(!allRestaurants) return null

  return (allRestaurants.length === 0)  ? <Shimmer/> :  (
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
          className="search-btn button-62"
          onClick={() => {
            setFilteredRestaurantList(filterData(searchText, allRestaurants));
            console.log('data',filteredRestaurants);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants?.length ? filteredRestaurants?.map((restaurant) => {
          return <Card key={restaurant.data.id} {...restaurant.data} />;
        }) : <h1>No restaurant found with given search input..</h1>}
      </div>
    </>
  );
};

export default Body;
