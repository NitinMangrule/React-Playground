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
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5236317&lng=73.8411226&restaurantId=" +
        id
    );
    const json = await data.json();
    console.log('123',json.data.cards[2].groupedCard.cardGroupMap.REGULAR);
    setRestaurantData(json.data.cards);
  }

  return !restaurantData ? (
    <Shimmer />
  ) : (
    <div className="center">
      <div>
        <h1>{restaurantData[0].card?.card?.info?.name}</h1>
        <img
          src={IMG_CDN_URL + restaurantData[0].card?.card?.info?.cloudinaryImageId}
          style={{ borderRadius: "40px" }}
        />
        <h2>{restaurantData[0].card?.card?.info?.area}</h2>
        <h3>{restaurantData[0].card?.card?.info?.city}</h3>
        <Rating readonly initialValue={restaurantData[0].card?.card?.info?.avgRating} />
        <h3>{restaurantData[0].card?.card?.info?.costForTwoMsg}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <main className="leaderboard__profiles">
          {restaurantData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map((item) => (
            <article className="leaderboard__profile" key={item?.card?.info?.id}>
              {getImageBlock(item?.card?.info.imageId)}
              <span className="leaderboard__name">{item?.card?.info?.name}</span>
              <span className="leaderboard__value">Rs.{item?.card?.info?.price / 100}</span>
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
      src={'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/' + cloudinaryImageId}
      className="leaderboard__picture"
    />
  ) : (
    <div className="no-img-menu leaderboard__picture"></div>
  );
};
export default RestaurantMenu;
