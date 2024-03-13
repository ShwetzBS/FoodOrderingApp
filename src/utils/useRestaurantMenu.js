import { useEffect, useState } from "react";
import { swiggy_menu_api_URL } from "../utils/constants";
export const useRestaurantMenu = (resId) => {
  //Fetch Restaurant Menu data

  const [restaurantMenu, setrestaurantMenu] = useState(null);

  useEffect(() => fetchData(), []); //empty parenthesis cuz it needs to fetch data just once

  const fetchData = async () => {
    const data = await fetch(swiggy_menu_api_URL + resId);

    const json = await data.json();

    setrestaurantMenu(json.data);
  };

  return restaurantMenu;
};
