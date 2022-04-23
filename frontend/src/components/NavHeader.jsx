import React from 'react';
import { Container, Navbar, Nav, Row, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


function NavHeader() {
  return (
    <header>
       <Navbar collapseOnSelect variant='dark' bg="dark" expand="lg">
        <Container>
          <LinkContainer to={"/"}>
            <Navbar.Brand >SneakerSource</Navbar.Brand>
          </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
            <LinkContainer to={"/"}>
              <Nav.Link >Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/register"}>
              <Nav.Link >Register</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/register"}>
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>

                <strong>
                  <NavDropdown renderMenuOnMount={true} title="Sneakers" id="basic-nav-dropdown"> 
                  <LinkContainer to={"/jordan"}>
                    <NavDropdown.Item >Air Jordan</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to={"/nikesb"}>
                    <NavDropdown.Item >Nike SB</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to={"/yeezy"}>
                    <NavDropdown.Item >Yeezy</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to={"/nike"}>
                    <NavDropdown.Item >Nike</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to={"/other"}>
                    <NavDropdown.Item >Other</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Divider />
                  <LinkContainer to={"/products"} >
                    <NavDropdown.Item>View All Products</NavDropdown.Item>
                  </LinkContainer>
                  </NavDropdown>
                </strong>
                <LinkContainer to={"/cart"}>
                  <Nav.Link>Cart</Nav.Link>
                </LinkContainer>
                <LinkContainer to={"/contact"}>
                  <Nav.Link>Contact Us</Nav.Link>
                </LinkContainer>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default NavHeader