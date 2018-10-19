import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
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
        <NavbarBrand href="/"> <h4 className="links">MIAMI DOLPHINS</h4> </NavbarBrand>
        <img className="logoNav" src="https://i.imgur.com/aRib5Ux.png" alt="logoNavbar" />
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink to="/Historique/"> <h4 className="links">HISTORIQUE</h4> </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/Equipe/"> <h4 className="links">ÉQUIPE</h4> </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/News/"> <h4 className="links">NEWS</h4> </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/Calendrier/"> <h4 className="links">CALENDRIER</h4> </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarMain;