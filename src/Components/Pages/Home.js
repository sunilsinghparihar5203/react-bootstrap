import React from "react";
import { Container } from "react-bootstrap";
import MyNav from "../Navbar/MyNav";
import Footer from "../UI/Footer";
import Hero from "../UI/Hero";

function Home() {
  return (
    <>
      <MyNav cartBtn={false} activeKey = "/"/>
      <Container>
        <Hero title="Home" />
        <p>
          This is home page
        </p>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
