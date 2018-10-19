import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
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
 import './AdminCalendrier.css';

class AdminCalendrier extends Component {
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

                <div className="AdminCalendrier">
                            <InputGroup>
                                <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
                                       <div className="Calendrier-EquipeA">
                                            <DropdownToggle caret>
                                                EquipeA
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                    <DropdownItem>Dolphins</DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>Jets</DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>Bears</DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>Patriots</DropdownItem>
                                            </DropdownMenu>
                                        </div>
                                        <div className="Calendrier-EquipeB">
                                            <DropdownToggle caret>
                                                EquipeB
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                    <DropdownItem>Dolphins</DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>Jets</DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>Bears</DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>Patriots</DropdownItem>
                                            </DropdownMenu>
                                        </div>
                                        <div className="Calendrier-ChaineTV">
                                            <DropdownToggle caret>
                                                Chaine TV
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                    <DropdownItem>Bein</DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>Espn</DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>Eleven</DropdownItem>
                                            </DropdownMenu>
                                        </div>
                                        <div className="Calendrier-DateMatch">
                                            <DatePicker
                                                selected={this.state.startDate}
                                                onChange={this.handleChange}
                                                showTimeSelect
                                                timeFormat="HH:mm"
                                                timeIntervals={15}
                                                dateFormat="LLL"
                                                timeCaption="time"/>
                                        </div>
                                            <Input placeholder="Score teamA"/>
                                            <Input placeholder="Score teamB"/>

                                </InputGroupButtonDropdown>
                             </InputGroup>

                   
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">['']</InputGroupAddon>
                            <Input placeholder="Nom/Prénom" />
                            
                        </InputGroup>
             


                            <Button color="success">Ajouter</Button>
                            <Button color="danger">X</Button>
                            <Button color="warning">Modifier</Button>

                        


                        </div>

         );
    }
}
 
export default AdminCalendrier;