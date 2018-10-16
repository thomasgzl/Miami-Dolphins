import React from 'react';
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
  DropdownItem } from 'reactstrap';

  import './NavbarMain.css';

class NavbarMain extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="Navigation" light expand="md">
        <img className="logoNav" src="https://i.imgur.com/aRib5Ux.png" alt="logoNavbar" />
          <NavbarBrand href="/"> <h4 className="links">MIAMI DOLPHINS</h4> </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink href="/components/"> <h4 className="links">Historique</h4> </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/"> <h4 className="links">Équipe</h4> </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/"> <h4 className="links">News</h4> </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/"> <h4 className="links"> Calendrier </h4> </NavLink>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarMain;