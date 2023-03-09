import React ,{useState,useContext} from "react";
import Hero from "../UI/Hero";
import MyNav from "../Navbar/MyNav";
import ItemList from "./ItemList";
import { Container } from "react-bootstrap";
import Cart from "../Cart";
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
