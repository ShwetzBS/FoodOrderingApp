import { useState, useEffect } from "react";
import { swiggy_menu_api_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import { shimmerUI } from "./shimmerUI";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";
import { RestaurantAccordian } from "./RestaurantAccordian.js";

const RestaurantMenu = () => {
  const { restroId } = useParams(); //fetching restroid from url mentioned in app.js

  const [showIndex, setShowIndex] = useState(0);

  const restaurantMenu = useRestaurantMenu(restroId);

  if (restaurantMenu === null) return <shimmerUI></shimmerUI>;

  const { name, cuisines, costForTwoMessage } =
    restaurantMenu?.cards[0]?.card?.card?.info;
  const { itemCards } =
    restaurantMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold text-xl m-8 ...">{name}</h1>
      <h2>{costForTwoMessage}</h2>
      <h2 className="text-l">{cuisines.join(",")}</h2>

      {categories.map((element, index) => {
        <RestaurantAccordian
          key={element.card.card.title}
          data={element?.card?.card}
          showItems={index === showIndex ? true : false}
          showIndex={() => setShowIndex(index)}
        />;
      })}
    </div>
  );
};

export default RestaurantMenu;
