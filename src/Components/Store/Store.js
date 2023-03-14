import React ,{useState,useContext} from "react";
import Hero from "../UI/Hero";
import ItemList from "./ItemList";
import { Container } from "react-bootstrap";
import {productsContext} from "../Context";

function Store() {
  const products = useContext(productsContext)

  return (
    <>
      <Container>
        <Hero title="Products" />
        <ItemList Items={products} />
      </Container>
    </>
  );
}

export default Store;
