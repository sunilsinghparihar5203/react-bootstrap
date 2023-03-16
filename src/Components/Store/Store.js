import React ,{useContext} from "react";
import Hero from "../UI/Hero";
import ItemList from "./ItemList";
import { Container } from "react-bootstrap";
import {productsContext} from "../Context";
import {useHistory} from "react-router-dom";
import { authContext } from "../Context";
function Store() {
  const products = useContext(productsContext)
  const authCtx = useContext(authContext)
  const history = useHistory()

  if (!authCtx.isLoggin) {
   return history.push('/login') 
  }
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
