import React from "react";
import Item from "./Item";

function ItemList({ Items }) {
  console.log(Items);

  return (
    <div className="row">

      {Items.map((item) => {
        return (
          <Item
            key={item.imageUrl}
            title={item.title}
            price={item.price}
            ImageURL={item.imageUrl}
          />
        );
      })}
    </div>
  );
}
export default ItemList;
