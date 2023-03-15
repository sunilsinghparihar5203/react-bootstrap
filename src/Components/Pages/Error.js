import React from "react";
import { Container } from "react-bootstrap";
import Hero from "../UI/Hero";

function Error404() {
  return (
    <>
      <Container className="vh-100">
        <Hero title="There is something wrong" />
      </Container>
    </>
  );
}

export default Error404;
