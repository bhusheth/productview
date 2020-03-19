import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Button, Nav } from 'react-bootstrap';

import { connect } from 'react-redux';
import history from '../store/history';

const NavBar = () => (
  <>
    <Navbar bg="dark" variant="dark" className="d-flex justify-content-between">
      <Navbar.Brand as={NavLink} to="/">
        HOME
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={NavLink} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={NavLink} to="/fav">
          Favorite List
        </Nav.Link>
      </Nav>
      <Button variant="outline-info" onClick={() => history.push('/cart')}>
        Cart
      </Button>
    </Navbar>
  </>
);

const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(NavBar);
