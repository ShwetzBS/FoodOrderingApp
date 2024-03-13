import { useState } from "react";
import CategoryItems from "./CategoryItems";
export const RestaurantAccordian = ({ data, showItems, showIndex }) => {
  const handleClick = () => {
    showIndex();
  };
  return (
    <div>
      <div className="w-6/12 bg-gray-300 hover:shadow-lg m-auto my-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title}-({data.itemcards.length})
          </span>
          {showItems && <CategoryItems items={data.itemcards} />}
        </div>
      </div>
    </div>
  );
};
