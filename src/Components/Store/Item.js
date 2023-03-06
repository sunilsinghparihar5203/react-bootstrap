import React from "react";
import { Button } from "react-bootstrap";

function Item(props) {
  return (
    <div className="col-6" key={props.ImageURL}>
      <div className="text-center">
        <h4>{props.title}</h4>
        <img className="img-fluid" src={props.ImageURL} alt={props.title} />
      </div>

      <div className="d-flex justify-content-around my-3" >
        <div> ${props.price}</div>
        <div>
          <Button size="sm" variant="info">
            Add to Cart
          </Button>{" "}
        </div>
      </div>
    </div>
  );
}

export default Item;
