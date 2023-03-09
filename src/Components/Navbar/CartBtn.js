import React,{useContext} from "react";
import { Button } from 'react-bootstrap'
import {CartContext,showCartContext} from '../Context'

function CartBtn(props) {
    const ctx = useContext(CartContext)
    const showContext = useContext(showCartContext)
    
    const CartClickHandler =() =>{
        console.log({length:ctx.items})
        showContext.handleShow()
    }
  return (
    <Button onClick={CartClickHandler}>{props.name}  {ctx.items.length}</Button>
  )
}

export default CartBtn