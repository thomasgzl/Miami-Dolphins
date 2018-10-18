import React, { Component } from 'react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupDropdown,
  Input,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Col
 } from 'reactstrap';
 import './AdminJoueurs.css';

class AdminJoueurs extends Component {
    constructor(props) {
        super(props);
    
        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.state = {
          dropdownOpen: false,
          splitButtonOpen: false
        };
      }
    
      toggleDropDown() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }

    render() { 
        return ( 

<div className="AdminJoueurs">

            <InputGroup>
            <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
            <DropdownToggle caret>
              Joueur
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Bobby McCain</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Kenyan Drake</DropdownItem>
            </DropdownMenu>
          </InputGroupButtonDropdown>
        </InputGroup>

<Row >

    <Col lg={4} className="PremiereLigne">
        <InputGroup>
            <InputGroupAddon addonType="prepend">['']</InputGroupAddon>
            <Input placeholder="Nom/Prénom" />
         </InputGroup>
</Col>
<Col lg={4} className="PremiereLigne">
<InputGroup>
            <InputGroupAddon addonType="prepend">[P]</InputGroupAddon>
            <Input placeholder="Poste" />
         </InputGroup>
</Col>
<Col lg={4} className="PremiereLigne">
        <InputGroup>
            <InputGroupAddon addonType="prepend">XP</InputGroupAddon>
            <Input placeholder="Éxperience" />
         </InputGroup>
</Col>

<Col lg={4}>
        <InputGroup>
            <InputGroupAddon addonType="prepend">CM</InputGroupAddon>
            <Input placeholder="Taille" />
         </InputGroup>
         </Col>
<Col lg={4}>
<InputGroup>
            <InputGroupAddon addonType="prepend">99</InputGroupAddon>
            <Input placeholder="Age" />
         </InputGroup>
         </Col>
<Col lg={4}>
<InputGroup>
            <InputGroupAddon addonType="prepend">KG</InputGroupAddon>
            <Input placeholder="Poids" />
         </InputGroup>
</Col>
</Row>

            <Button color="success">Ajouter</Button>
            <Button color="danger">X</Button>
            <Button color="warning">Modifier</Button>


<Row >
<Col lg={3}>
<InputGroup>
            <InputGroupAddon addonType="prepend"> -- </InputGroupAddon>
            <Input placeholder="Yards" />
         </InputGroup>
         </Col>
<Col lg={3}>
<InputGroup>
            <InputGroupAddon addonType="prepend">IT</InputGroupAddon>
            <Input placeholder="Interceptions" />
         </InputGroup>
         </Col>
<Col lg={3}>
<InputGroup>
            <InputGroupAddon addonType="prepend">TC</InputGroupAddon>
            <Input placeholder="Tacles" />
         </InputGroup>
         </Col>
<Col lg={3}>
<InputGroup>
            <InputGroupAddon addonType="prepend">TD</InputGroupAddon>
            <Input placeholder="Touchdowns" />
         </InputGroup>
</Col>
</Row>

        </div>

         );
    }
}
 
export default AdminJoueurs;