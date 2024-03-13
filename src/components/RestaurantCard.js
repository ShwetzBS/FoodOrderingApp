// Needs to be reused again and again hence as a seperate component

import { apiData } from "../utils/mockdata.js";
import { IMG_CDN_URL } from "../utils/constants.js";
const RestaurantCardComponent = (props) => {
  const { resData } = props;
  const { cuisines, name, cloudinaryImageId, avgRating } = resData?.info; //removing cuisines and name from resdata ..optional chaining check
  return (
    <div className="restaurantCard">
      <img
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="image"
        className="restImage"
      ></img>
      <div className="fooddetails">
        <h3>{cuisines.join(",")}</h3>

        <p>{name}</p>
        <p>{avgRating}</p>
      </div>
    </div>
  );
};

//Higher order function : Returns a restaurant card with a promoted label on it if data.promoted=true
//Returns a new component with a label on top of it

export const withPromotedLabel = (RestaurantCardComponent) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCardComponent {...props} />
      </div>
    );
  };
};

export default RestaurantCardComponent;
