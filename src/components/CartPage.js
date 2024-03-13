import { useDispatch, useSelector } from "react-redux";
import { CategoryItems } from "./CategoryItems";

export const CartPage = () => {
  //To read the items from the items array (in redux store) we need to subscribe to it .To subscribe use hook useSelector

  const cartItems = useSelector((store) => store.CartSlice.items);

  //Dispatch and action to clear cart

  const dispatchFn = useDispatch();
  const handleClearCart = () => {
    dispatchFn(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>

      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-md"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        <CategoryItems items={cartItems}></CategoryItems>
      </div>
    </div>
  );
};
