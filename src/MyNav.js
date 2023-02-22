import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from "react-router-dom";
function MyNav() {
    return (
      <>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Container className='justify-content-around'>
            <Nav>
              <Nav.Link href={`/`}><Link to={`/`}>Home</Link></Nav.Link>
              <Nav.Link href={`/store`}> <Link to={`/store`}>Store</Link> </Nav.Link>
              <Nav.Link href={`/about`}><Link to={`/about`}>About</Link></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }

export default MyNav