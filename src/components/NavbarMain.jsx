import React from 'react';
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
                <NavLink to="/Historique/"> <h4 className="links">Historique</h4> </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/Equipe/"> <h4 className="links">Équipe</h4> </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/News/"> <h4 className="links">News</h4> </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/Calendrier/"> <h4 className="links">Calendrier</h4> </NavLink>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarMain;