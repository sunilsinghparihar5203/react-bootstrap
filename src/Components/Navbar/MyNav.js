import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartBtn from "./CartBtn";

function MyNav(props) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="justify-content-center" activeKey="/store">
            <Nav.Item>
              <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/store">Store</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/About">About</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
        <Nav className="justify-content-end">
          {props.cartBtn && <CartBtn name="Cart" itemCount={3} show={props.show}  handleClose={props.handleClose} handleShow={props.handleShow} />}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MyNav;
