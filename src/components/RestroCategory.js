import React, { useState } from "react";
import ItemList from "./ItemList";

function RestroCategory({ data }) {
  //   console.log(data.card.card);
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems(!showItems);
  };
  return (
    <div className="w-6/12  m-auto bg-gray-50 shadow-lg px-1 mb-2 border-b-2 flex flex-col">
      <div
        className="flex justify-between h-16 pt-3 px-4"
        onClick={handleClick}
      >
        <span className="font-bold">
          {" "}
          {data.card.card.title} ({data.card.card.itemCards.length})
        </span>
        <span>
          {" "}
        {showItems ? "🔼" : "🔽"}
        </span>
      </div>
      <div className="text-start">
        {showItems && <ItemList items={data.card.card.itemCards} />}
      </div>
    </div>
  );
}

export default RestroCategory;
