import React,{useContext} from "react";
import { Container } from "react-bootstrap";
import MyNav from "../Navbar/MyNav";
import Footer from "../UI/Footer";
import { showCartContext } from "../Context";
import Cart from "../Cart";

function Home(props) {
  const showContext = useContext(showCartContext)
  return (
    <>
      <MyNav cartBtn={true} activeKey = "/"/>
      <Container>
        {props.children}
        <Cart  show={showContext.show}/>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
