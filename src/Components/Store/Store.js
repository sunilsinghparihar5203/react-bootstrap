import React ,{useState} from "react";
import Hero from "../UI/Hero";
import MyNav from "../Navbar/MyNav";
import ItemList from "./ItemList";
import { Container } from "react-bootstrap";
import Cart from "../Cart";

const propducts = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
function Store() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <MyNav cartBtn={true} show={show}  handleClose={handleClose} handleShow={handleShow} />
      <Container>
        <Hero title="Products" />
        <ItemList Items={propducts} />
      </Container>
      
      {<Cart show={show}  handleClose={handleClose} handleShow={handleShow}/>}
    </>
  );
}

export default Store;
