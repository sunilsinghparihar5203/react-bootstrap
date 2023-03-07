import React from "react";
import { Container } from "react-bootstrap";
import MyNav from "../Navbar/MyNav";
import Hero from "../UI/Hero";

function Error404() {
  return (
    <>
      <MyNav cartBtn={false} activeKey = ""/>
      <Container>
        <Hero title="There is something wrong" />
      </Container>
    </>
  );
}

export default Error404;
