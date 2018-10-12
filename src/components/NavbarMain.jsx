import React, { Component } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container, Row, Col
} from 'reactstrap';
import './NavbarMain.css';


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
                  <NavLink className="white" href="/Historique/"></NavLink>
                </NavItem> 
                <NavItem>
                  <NavLink className="white" href="/Equipe/"></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink top className="hidden-xs white" href="/"><img className="hidden-xs" src="https://i.imgur.com/aRib5Ux.png" alt="Logo"></img></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="white" href="/" exact><p className="typo">NEWS</p></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="white" href="/Calendrier"></NavLink>
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