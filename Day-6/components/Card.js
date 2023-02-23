import { IMG_CDN_URL } from "../constants";
import { Rating } from "react-simple-star-rating";

const Card = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  return (
    <div className="card">
      {getImageBlock(cloudinaryImageId)}
      <h2 className="title"> {name} </h2>
      <h4 > {cuisines?.join(", ")}</h4>
      <Rating readonly initialValue={avgRating} />
    </div>
  );
};

const getImageBlock = (cloudinaryImageId) => {
  return (cloudinaryImageId) ? <img src={IMG_CDN_URL + cloudinaryImageId} /> : <div className="no-img"></div>
}
export default Card;
