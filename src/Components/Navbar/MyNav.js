import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import CartBtn from "./CartBtn";
import { authContext } from "../Context";
import { useHistory } from "react-router-dom";

function MyNav(props) {
  const authCtx = useContext(authContext);
  const history = useHistory();
  const loginLogoutHandler = () => {
    authCtx.logout();
    history.push("/login");
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav
            className="justify-content-center"
            activeKey={props.activeKey}
            defaultActiveKey="/"
          >
            <Nav.Item>
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/store">
                Store
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/about">
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/contact">
                Contact Us
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/login" onClick={loginLogoutHandler}>
              {authCtx.isLoggin ? "Logout" : "Login"}
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
        <Nav className="justify-content-end">
          {props.cartBtn && authCtx.isLoggin && <CartBtn name="Cart" />}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MyNav;
