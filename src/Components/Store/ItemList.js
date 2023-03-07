import React from "react";
import Item from "./Item";

function ItemList({ Items }) {

  return (
    <div className="row">

      {Items.map((item) => {
        return (
          <Item
            key = {item.id}
            id={item.id}
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
