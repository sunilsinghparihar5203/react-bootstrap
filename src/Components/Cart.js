import React, { useContext,useMemo   } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import {CartContext,showCartContext} from "./Context";

function Cart() {
  const cartCtx = useContext(CartContext);
  const showContext = useContext(showCartContext);
 
  const groupedItems = useMemo(() => {
    const result = {};
    for (const item of cartCtx.items) {
      if (result[item.itemId]) {
        result[item.itemId].qty += item.qty;
        result[item.itemId]._ids.push(item._id);
      } else {
        result[item.itemId] = {
          ...item,
          id:item.itemId,
          qty: item.qty,
          _ids: [item._id]
        };
      }
    }
    return result;
  }, [cartCtx.items]);

  console.log({groupedItems:groupedItems})
  
  const purchageHandler = () =>{
    alert("OK")
  }
  return (
    <>
      <Offcanvas show={showContext.show} onHide={showContext.handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Table hover>
            <thead>
              <tr>
                <th>Item</th>
                <th></th>
                <th>Price</th>
                <th>qty</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="align-middle">
              {Object.values(groupedItems).map((item) => {
                return (
                  <tr key={item.id}>
                    <td>
                      <Image
                        fluid={true}
                        rounded={true}
                        thumbnail="true"
                        src={item.image}
                      />
                    </td>
                    <td> {item.title}</td>
                    <td>$ {item.price.toFixed(2)}</td>
                    <td>{item.qty}</td>
                    <td>
                      <Button variant="danger" size="sm" onClick={()=> cartCtx.removeItem(item._id)}>
                        Remove
                      </Button>
                    </td>
                  </tr>
                );
              })}

              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>Total</td>
                <td>$ {cartCtx.totalAmount.toFixed(2)}</td>
              </tr>
            </tbody>
          </Table>
          <Button onClick={purchageHandler}>Purchage</Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;
