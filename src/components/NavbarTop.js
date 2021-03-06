import React, { Component } from 'react';
import {
  Grid,
  PageHeader,
  Row,
  Col,
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from 'react-bootstrap'


class NavbarTop extends Component {
  render() {
    return (
      <div>
        <div>
            <Navbar inverse collapseOnSelect>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href='/'>Slip List</a>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav>
                  <NavDropdown eventKey={3} title="Actions" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1} href='/createlocation' >Create Availability</MenuItem>
                    <MenuItem eventKey={3.2} href="/availabilities" >See all Availabilities</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.3} href='/'>Home</MenuItem>
                  </NavDropdown>
                </Nav>
                <Nav pullRight>
                  <NavItem eventKey={1} href="/">
                    Sign Up
                  </NavItem>
                  <NavItem eventKey={2} href="#">
                    Sign In
                  </NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
      </div>
    );
  }
}

export default NavbarTop
