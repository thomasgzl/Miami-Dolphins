import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import {Link} from 'react-router-dom';
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
          splitButtonOpen: false,
          recudeAPI:''
        
        };
        console.log(this.state.recudeAPI,"ca state à mort")
      }
    
      toggleDropDown() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }


   
   

    render() { 
        
        return ( 

                <div className="AdminCalendrier">
                    <h1>Gestion du calendrier</h1>
                     <div className="Admin_listeChoix">
                     <Link to ={{
                            pathname: "/Calendrier", 
                            state: { 
                                nouveau:this.state.recudeAPI, 
                            }
                            
                            
                        }} >maj calendrier
                        </Link>
                            
                            

                            <InputGroup>
                                <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
                                       <div className="Admin_EquipeA">
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
                                        <div className="Admin_EquipeB">
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
                                        <div className="Admin_ChaineTV">
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
                                </InputGroupButtonDropdown>
                            </InputGroup>
                        </div>
                         <div className="Admin_DatePicker">
                                 <DatePicker
                                      selected={this.state.startDate}
                                       onChange={this.handleChange}
                                       showTimeSelect
                                        timeFormat="HH:mm"
                                        timeIntervals={15}
                                        dateFormat="LLL"
                                       timeCaption="time"/>
                        </div>
                        <div className="Admin_inputs">
                                <InputGroup>

                                            <Input placeholder="Equipe A"/>
                                            <Input placeholder="Equipe B"/>
                                            <Input placeholder="Score Equipe A"/>
                                            <Input placeholder="Score Equipe B"/>
                                            <Input placeholder="Date du match"/>
                                            <Input placeholder="Chaine TV"/>
                                 </InputGroup>
                         </div>


                            
                         <div className="Admin_Boutons">
            
                                <Button color="success">Ajouter</Button>
                                <Button color="danger">X</Button>
                                <Button color="warning">Modifier</Button>
                         </div>
                        


                   </div>

         );
    }
}
 
export default AdminCalendrier;