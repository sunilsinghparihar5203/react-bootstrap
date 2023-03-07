import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import CartContext from "./Context";

function Cart(props) {
  const cartCtx = useContext(CartContext);
  return (
    <>
      <Offcanvas show={props.show} onHide={props.handleclose} placement="end">
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
              {cartCtx.items.map((item) => {
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
                      <Button variant="danger" size="sm">
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
          <Button>Purchage</Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;
