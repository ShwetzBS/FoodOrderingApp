import { apiData } from "../utils/mockdata";
import RestaurantCardComponent from "./RestaurantCard.js";
import { useEffect, useState, useContext } from "react"; // Named Import
import { swiggy_api_URL } from "../utils/constants.js";
import { shimmerUI } from "./shimmerUI.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import { withPromotedLabel } from "./RestaurantCard.js";
import { LoggedInUser } from "../utils/UserContext.js";

const BodyComponent = () => {
  const [listofRestaurants, setRestaurantList] = useState([apiData]);

  const { loggedUser, setUser } = useContext(LoggedInUser);
  //State variable for input box of search

  const [searchText, setSearchText] = useState("");
  const [filteredRestro, setFiltered] = useState([]);

  // This will accept the restaurant card and return a restro card which will have a label in it
  const PromotedCard = withPromotedLabel(RestaurantCardComponent);

  useEffect(() => fetchData(), []); //this is called once the body component renders (whatever is returned in body) and then this callback function gets called

  const fetchData = async () => {
    const data = await fetch(swiggy_api_URL);
    const json = await data.json();
    setRestaurantList(
      json?.cards[2]?.cards?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFiltered(
      json?.cards[2]?.cards?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus)
    return (
      <div class="onlineStatus">
        <h1>
          OOps looks like you are offline!!! Check your internet connection
        </h1>
      </div>
    );

  //Ternary Return
  return listofRestaurants.length === 0 ? (
    <shimmerUI />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="input-search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value); // you need to use onchange so that value of the searchtext updates otherwise it will not let you type anything in it
            }}
          ></input>
          <input
            type="button"
            onClick={() => {
              //Filter the restro cards and update UI

              const searchResults = listofRestaurants.filter((restro) => {
                restro?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
                setFiltered(searchResults);
              });
            }}
            className="search-btn"
          >
            Search
          </input>
        </div>
        <button
          className="filter-btn"
          onClick={
            () => {
              const filteredData = listofRestaurants.filter(
                (res) => res.data.avgRating > 4
              );

              setRestaurantList(filteredData);
            }

            //Filter out all restaurants
          }
        >
          Top rated restaurants
        </button>
        <div>
          <label>Username:</label>
          <input
            className="border border-black"
            vaue={loggedUser}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
      </div>
      <div className="restroContainer">
        {filteredRestro.map((restautant) => (
          <Link
            key={restautant?.info?.id}
            to={"/restaurant/" + restautant?.info?.id}
          >
            {restautant.data.promoted ? (
              <PromotedCard resData={restautant} />
            ) : (
              <RestaurantCardComponent resData={restautant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
