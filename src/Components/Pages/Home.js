import React,{useContext} from "react";
import { Container } from "react-bootstrap";
import MyNav from "../Navbar/MyNav";
import Footer from "../UI/Footer";
import Hero from "../UI/Hero";
import { Outlet } from "react-router-dom";
import { showCartContext } from "../Context";
import Cart from "../Cart";

function Home() {
  const showContext = useContext(showCartContext)
  return (
    <>
      <MyNav cartBtn={true} activeKey = "/"/>
      <Container>
        <Outlet />
        <Cart  show={showContext.show}/>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
