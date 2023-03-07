import React,{useContext} from "react";
import { Button } from 'react-bootstrap'
import CartContext from '../Context'

function CartBtn(props) {
    const ctx = useContext(CartContext)
    
    const CartClickHandler =() =>{
        console.log({length:ctx.items})
        props.handleshow()
    }
  return (
    <Button onClick={CartClickHandler}>{props.name}  {ctx.items.length}</Button>
  )
}

export default CartBtn