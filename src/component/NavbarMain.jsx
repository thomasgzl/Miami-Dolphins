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
    /*Navbar.propTypes = {
      light: PropTypes.bool,
      dark: PropTypes.bool,
      fixed: PropTypes.string,
      color: PropTypes.string,
      role: PropTypes.string,
      expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
      tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
      // pass in custom element to use
    };*/
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
                  <NavLink active className="white" href="/Historique/">Historique</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="white" href="/Equipe/">Equipe</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink top className="hidden-xs white" href="/"><img className="hidden-xs" width="100%" src="https://i.imgur.com/JXboZ1e.png" alt="Logo"></img></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="white" href="/News">News</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="white" href="/Calendrier">Calendrier</NavLink>
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