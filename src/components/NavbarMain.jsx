import React, { Component } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container, Row, Col
} from 'reactstrap';
import './NavbarMain.css';
import { NavLink } from 'react-router-dom';



class NavbarMain extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    }
    
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="Navigation" >
        <Container className="container-navbar" fluid>
          <Navbar color="white" light fixed expand="md">
            <NavbarToggler onClick={this.toggle} />
            <Collapse className="collapse-container" isOpen={this.state.isOpen} navbar>
              <Nav className="container-item" justified pills navbar>
                <NavItem>
                  <NavLink to="/Historique/" className="white" href></NavLink>
                </NavItem> 
                <NavItem>
                  <NavLink to="/Equipe/" className="white" ></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/" top className="hidden-xs white" ><img className="hidden-xs" src="https://i.imgur.com/aRib5Ux.png" alt="Logo"></img></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/"  exact><p className="typo white" >NEWS</p></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/Calendrier"> <p className="typo white">CALENDRIER</p></NavLink>
                </NavItem>

              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    );
  }
}

export default NavbarMain;