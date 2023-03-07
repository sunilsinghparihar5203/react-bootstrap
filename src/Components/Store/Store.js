import React ,{useState} from "react";
import Hero from "../UI/Hero";
import MyNav from "../Navbar/MyNav";
import ItemList from "./ItemList";
import { Container } from "react-bootstrap";
import Cart from "../Cart";

function Store() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <MyNav cartBtn={true}  handleshow={handleShow} activeKey = "/store"/>
      <Container>
        <Hero title="Products" />
        <ItemList Items={propducts} />
      </Container>

      <Cart show={show}  handleclose={handleClose}/>
    </>
  );
}

export default Store;



const propducts = [
  { 
    id:'1',
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id:'2',
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id:'3',
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id:'4',
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
