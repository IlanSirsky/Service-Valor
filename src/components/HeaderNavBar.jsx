import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';

const HeaderNavbar = () => {
  return (
    <Navbar bg="dark" expand="lg" >
        <Navbar.Brand href="/" className="mx-4 text-white">Service Valor</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-dark"/>
        <Navbar.Collapse id="basic-navbar-nav text-white">
          <Nav className="ml-auto">
            <Nav.Link href="/" className="nav-link text-white">Home</Nav.Link>
            <Nav.Link href="/about" className="nav-link text-white">About</Nav.Link>
            <Nav.Link href="/form" className="nav-link text-white">Upload Business</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
};

export default HeaderNavbar;