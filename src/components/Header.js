import { appLogo } from "../utils/constants.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import { loggedInUser } from "../utils/UserContext.js";
import { useContext } from "react";
import { useSelector } from "react-redux";
const HeaderCompoenent = () => {
  const onlineStatus = useOnlineStatus();
  const { loggedUser } = useContext(loggedInUser);

  //Show the number of items (count) near to cart . So we use Selector in Redux which is a hook comes from react-redux
  //This hook gives access to the ReduxStore (ie AppStore ) .We are subscribing to the store
  // In this selector tell what in the store you need access to (subscribe to)
  //Whener items will change TotalCartItems will change by default
  //TotalCartItems will be an array and its contents
  const TotalCartItems = useSelector((store) => store.CartSlice.items);

  //TotalCartItems will get data of the items array

  return (
    <div className="header">
      <div className="flex justify-end">
        <img src={appLogo} className="w-56"></img>
      </div>
      <div className="logo">
        <ul className="flex pr-4 mr-4">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/contactUs">Contact Us</Link>
          </li>
          <li>
            <Link to="/aboutUs">About </Link>
          </li>
          <li>
            <Link to="/cart">Cart({TotalCartItems.length}) </Link>
          </li>
          <li>Online Status :{onlineStatus ? "Online" : "Offline"} </li>

          <li>
            <button className="loginbtn">Log In</button>
          </li>

          <li>{loggedUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderCompoenent;
