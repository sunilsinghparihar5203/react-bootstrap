import React from 'react'
import { Button } from 'react-bootstrap'

function CartBtn(props) {
    const CartClickHandler =() =>{
        props.handleShow()
    }
  return (
    <Button onClick={CartClickHandler}>{props.name}  {props.itemCount}</Button>
  )
}

export default CartBtn