import react, { useEffect } from "react";
import ReactDOM from "react-DOM/client";
import HeaderCompoenent from "./components/Header";
import BodyComponent from "./components/Body";
import RestaurantCardComponent from "./components/RestaurantCard";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { aboutUs } from "./components/AboutPageComponent.js";
import { errorComponent } from "./components/ErrorComponent.js";
import { contactUs } from "./components/contactUsComponent.js";
import RestaurantMenu from "./components/RestroMenuPage.js";
import { LoggedInUser } from "./utils/UserContext.js";
import { Provider } from "react-redux";
import { AppStore } from "./utils/AppStore.js";
import { CartPage } from "./components/CartPage.js";
const AppLayout = () => {
  const [userloggedIn, setUser] = useStae();

  useEffect(() => {
    const data = {
      userName: "Hello",
    };
    setUser(data.userName);
  });
  return (
    <Provider store={AppStore}>
      // Providing redux store as props
      <LoggedInUser.Provider value={{ loggedUser: userloggedIn, setUser }}>
        <div className="AppLayout">
          /** Irrespective of the path I want to see header on all pages . Only
          the body component should change according to the URL*/
          <HeaderCompoenent />
          /** The body component varies from path url to url */ /** Outlet is a
          pre build thing in react router dom . It will be filed by what you
          have mentioned under children according to the URL */
          <Outlet />
        </div>
      </LoggedInUser.Provider>
    </Provider>
  );
};

const appRouter =
  createBrowserRouter[
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <BodyComponent />,
        },
        {
          path: "/aboutUs",
          element: <aboutUs />,
        },
        {
          path: "/contactUs",
          element: <contactUs />,
        },
        {
          path: "/restaurant/:restroId",
          element: <RestaurantMenu />,
        },
        {
          path: "/cart",
          element: <CartPage />,
        },
      ],
      errorElement: <errorComponent />,
    }
  ];

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<AppLayout />);

root.render(<RouterProvider router={appRouter} />);
