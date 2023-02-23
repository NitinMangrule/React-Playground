import {IMG_CDN_URL } from '../constants';
import { Rating } from 'react-simple-star-rating';

const Card = ({name, cuisines, cloudinaryImageId, avgRating}) => {
    return (
      <div className="card">
        <img src={IMG_CDN_URL + cloudinaryImageId} />
        <h2 className="title"> {name} </h2>
        <h4> {cuisines?.join(", ")}</h4>
        <Rating readonly initialValue={avgRating}/>
        {/* <button>Select</button> */}
      </div>
    );
  };

  export default Card;