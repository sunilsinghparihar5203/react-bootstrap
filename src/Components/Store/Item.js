import React,{useContext} from "react";
import { Button } from "react-bootstrap";
import CartContext from "../Context";

function Item(props) {
  const ctx = useContext(CartContext)
  const addtoCartHandler = () =>{
    console.log({ctx:ctx})
    const item = {
      id:props.id,title:props.title,ImageURL:props.ImageURL,price:props.price,qty:1
    }
    ctx.addItem(item)
  }

  return (
    <div className="col-6">
      <div className="text-center">
        <h4>{props.title}</h4>
        <img className="img-fluid" src={props.ImageURL} alt={props.title} />
      </div>

      <div className="d-flex justify-content-around my-3" >
        <div> ${props.price}</div>
        <div>
          <Button size="sm" variant="info" onClick={addtoCartHandler}> 
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Item;
