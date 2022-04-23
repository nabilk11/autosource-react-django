import React from 'react';
import { Container, Navbar, Nav, Row, NavDropdown } from 'react-bootstrap';

function NavHeader() {
  return (
    <header>
       <Navbar collapseOnSelect variant='dark' bg="dark" expand="lg">
        <Container>
            <Navbar.Brand href="/">SneakerSource</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
                <strong>
                  <NavDropdown renderMenuOnMount={true} title="Sneakers" id="basic-nav-dropdown"> 
                  <NavDropdown.Item href="#jordan">Air Jordan</NavDropdown.Item>
                  <NavDropdown.Item href="#NikeSB">Nike SB</NavDropdown.Item>
                  <NavDropdown.Item href="#Nike">Nike</NavDropdown.Item>
                  <NavDropdown.Item href="#Yeezy">Yeezy</NavDropdown.Item>
                  <NavDropdown.Item href="#Other">Other</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#products">View All Products</NavDropdown.Item>
                  </NavDropdown>
                </strong>
                <Nav.Link href="#Cart">View Cart</Nav.Link>
                <Nav.Link href="#contact">Contact Us</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default NavHeader