import { useDispatch } from "react-redux";
import { addItemToCart } from "../utils/CartSliceRedux";

export const CategoryItems = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //Dispatch an action to the redux store
    dispatch(addItemToCart(item)); //item will be a big object which will go as a payload
  };
  return (
    <div>
      {items.map((element, index) => {
        <div
          key={element.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-4 text-left"
        >
          <div className="pl-2">
            <span>{element.card.info.name}</span>
            <span>{element.card.info.price}</span>
          </div>
          <p className="text-xs ">{element.card.info.description}</p>

          <div>
            <div className="absolute">
              <button
                className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                onClick={() => handleAddItem(element)}
              >
                Add +
              </button>
            </div>
          </div>
        </div>;
      })}
    </div>
  );
};
