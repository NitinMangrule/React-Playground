import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import { Rating } from "react-simple-star-rating";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurantData, setRestaurantData] = useState(null);
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=18.5236317&lng=73.8411226&menuId=" +
        id
    );
    const json = await data.json();
    console.log(json);
    setRestaurantData(json.data);
  }

  return !restaurantData ? (
    <Shimmer />
  ) : (
    <div className="center">
      <div>
        <h1>{restaurantData.name}</h1>
        <img
          src={IMG_CDN_URL + restaurantData?.cloudinaryImageId}
          style={{ borderRadius: "40px" }}
        />
        <h2>{restaurantData?.area}</h2>
        <h3>{restaurantData?.city}</h3>
        <Rating readonly initialValue={restaurantData?.avgRating} />
        <h3>{restaurantData?.costForTwoMsg}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <main className="leaderboard__profiles">
          {Object.values(restaurantData?.menu?.items).map((item) => (
            <article className="leaderboard__profile" key={item?.id}>
              {getImageBlock(item?.cloudinaryImageId)}
              <span className="leaderboard__name">{item?.name}</span>
              <span className="leaderboard__value">Rs.{item?.price / 100}</span>
            </article>
          ))}
        </main>
      </div>
    </div>
  );
};

const getImageBlock = (cloudinaryImageId) => {
  return cloudinaryImageId ? (
    <img
      src={IMG_CDN_URL + cloudinaryImageId}
      className="leaderboard__picture"
    />
  ) : (
    <div className="no-img-menu leaderboard__picture"></div>
  );
};
export default RestaurantMenu;
