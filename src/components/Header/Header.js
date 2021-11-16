import React from "react";

import "./Header.css";

import { LinkContainer } from "react-router-bootstrap";

import { Container, Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar className="navbar-bg" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Fc Market</Navbar.Brand>
          </LinkContainer>
          <Nav>
            <LinkContainer to="/cart">
              <Nav.Link>سبد خرید</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/account">
              <Nav.Link>حساب کاربری</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
