import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { logout } from '../redux/actions/userActions';


function NavHeader() {
  // redux store
const dispatch = useDispatch()
const login = useSelector(state => state.login)
const { userToken } = login


//Logout
const handleLogout = () => {
  dispatch(logout())


}

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
            <LinkContainer to={"/products"} >
                    <Nav.Link>All Products</Nav.Link>
                  </LinkContainer>
                <strong>
                  <NavDropdown renderMenuOnMount={true} title="Sneakers" id="basic-nav-dropdown"> 
                  <LinkContainer to={"/category/1"}>
                    <NavDropdown.Item >Air Jordan</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to={"/category/2"}>
                    <NavDropdown.Item >Nike SB</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to={"/category/4"}>
                    <NavDropdown.Item>Yeezy</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to={"/category/3"}>
                    <NavDropdown.Item >Nike</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to={"/category/5"}>
                    <NavDropdown.Item >Other</NavDropdown.Item>
                  </LinkContainer>
                  </NavDropdown>
                </strong>
                <NavDropdown renderMenuOnMount={true} title="Apparel" id="basic-nav-dropdown">
                <LinkContainer to={"/category/6"}>
                    <NavDropdown.Item >Men's Apparel</NavDropdown.Item>
                  </LinkContainer>
                <LinkContainer to={"/category/7"}>
                    <NavDropdown.Item >Women's Apparel</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>

                {userToken ? <><LinkContainer to={"/profile"}>
                    <Nav.Link >Profile</Nav.Link>
                  </LinkContainer> 
                  <Nav.Link onClick={handleLogout} >Logout</Nav.Link>
                  </>
                  : <><LinkContainer to={"/register"}>
                  <Nav.Link >Register</Nav.Link>
                </LinkContainer>
                <LinkContainer to={"/login"}>
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer> 
                </>}
                
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