import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";

function Cart(props) {
  return (
    <>
      <Offcanvas
        show={props.show}
        onHide={props.handleClose}
        {...props}
        placement="end"
      >
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
              {propducts.map((product) => {
                return (
                  <tr>
                    <td>
                      <Image
                        fluid={true}
                        rounded={true}
                        thumbnail="true"
                        src={product.imageUrl}
                      />
                    </td>
                    <td> {product.title}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td>
                      <Button variant="danger" size="sm">
                        Remove
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <Button>Purchage</Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;

const propducts = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 2,
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

    quantity: 3,
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    quantity: 1,
  },
];
