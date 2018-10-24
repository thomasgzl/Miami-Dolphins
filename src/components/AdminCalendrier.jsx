import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import {Link} from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import { Container, Row, Col } from 'reactstrap';

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
 } from 'reactstrap';
 import './AdminCalendrier.css';


class AdminCalendrier extends Component {
    constructor(props) {
        super(props);
        this.state = {
            equipeA: '',
            equipeB: '',
            score: '',
            dateMatch: '',
            chaine: '',
            donneesCalendrier:[]
          }
          this.onChange = this.onChange.bind(this);
          this.submitForm = this.submitForm.bind(this);
          this.orderMatch=this.orderMatch.bind(this);
        }
      
        //CREATION MATCH
      
        onChange(e) {
          this.setState({
            [e.target.name]: e.target.value,
          });
        }
      
        submitForm(e) {
          e.preventDefault();
          const url = "http://92.175.11.66:3000/reaction/api/calendriers";
      
          const config = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
           };
      
          fetch(url, config)
            .then(res => res.json())
            //.then(res=>console.log(res,"res"))
            .then(res => {
              if (res.error) {
                alert(res.error);
              } else {
                alert(`Match ajouté avec l'ID ${res}!`);
              }
            }).catch(e => {
              alert('Erreur lors de l\'ajout du match');
            });
        }

        // FONCTION POUR AFFICHAGE CALENDRIER TRIE
        orderMatch(arg){
            let da='';
            let db='';
    
            function SortTime(a,b){ 
                da=new Date(a.dateMatch);
                db=new Date(b.dateMatch);
                return (da>db)?1:-1;
                }
            let result=arg.sort(SortTime);
            //console.log('fonction ordermatch executée')
    
            return result;
            }
        
       
    
        componentDidMount(){
                fetch("http://92.175.11.66:3000/reaction/api/calendriers")
                .then(response  =>  response.json())
                .then(aloa  => this.orderMatch(aloa))
                .then(data  => {
                  this.setState({
                    donneesCalendrier:data,
                  });
              });    
        }
        //SUPPRIMER UN MATCH

        deleteData(item, url) {
            console.log("ca passe dans la deleteData")
            return fetch(url + '/' + item, {
            method: 'delete'
            })
            .then(response => response.json());
        }
      
      


       
        render() {
          return (
            <div className="AdminCalendrier">
              <h1>Gestion du calendrier des matchs</h1>
                <form onSubmit={this.submitForm}>
                    <Input 
                        placeholder="Equipe A"
                        type="text"
                        id="equipeA"
                        name="equipeA"
                        onChange={this.onChange}
                        value={this.state.name}/>
                    <Input 
                        placeholder="Equipe B"
                        type="text"
                        id="equipeB"
                        name="equipeB"
                        onChange={this.onChange}
                        value={this.state.name}/>                           
                    <Input 
                       placeholder="Score"
                       type="text"
                       id="score"
                       name="score"
                       onChange={this.onChange}
                       value={this.state.name}/>                         
                    <Input 
                        placeholder="Date du match"
                        type="text"
                        id="dateMatch"
                        name="dateMatch"
                        onChange={this.onChange}
                        value={this.state.name}/>                        
                    <Input 
                         placeholder="Chaine TV"
                         type="text"
                         id="chaine"
                         name="chaine"
                         onChange={this.onChange}
                         value={this.state.name}/>                                             
                       <div className="film-data">
                        <Button type ="submit" color="success">Envoyer</Button>
                        <Button color="danger">Supprimer</Button>
                        <Button color="warning">Modifier</Button>                           
                       </div>                         
                    </form>                                                
                                            
                                    
               
             <div className="GlobalCalendrier">
                <Container >
                    <h1 className="Calendrier-title">Calendrier des matchs</h1>
                    <div className="Calendrier">
                <ul className="Calendrier_contour">
                    {this.state.donneesCalendrier.map((match)=>
                    <Row className="Calendrier_ligneTableau">
                        <Col lg="2" xs="12" className="colonne1">
                                <div>
                                        <p className="dateMatchDesktop">{match.dateMatch.substring(8,10)} {match.dateMatch.substring(5,7)} {match.dateMatch.substring(0,4)}</p>
                                </div> 
                        </Col>
                        <Col lg="2" xs="4" className="colonne2">
                            <p> {match.equipeA} </p>
                        </Col>
                        <Col lg="2" xs="4" className="colonne3">
                            <p> {match.score} </p>
                        </Col>
                        <Col lg="2" xs="4" className="colonne4">
                            <p> {match.equipeB} </p>
                        </Col> 
                        <Col lg="2" className="colonne5">
                            <p>{match.chaine}</p>
                        </Col> 
                        <Col lg="2" className="colonne6">
                            <Button onClick={()=>this.deleteData(match.id,"http://92.175.11.66:3000/reaction/api/calendriers")} color="danger">Supprimer</Button>
                            <Button color="warning">Modifier</Button>     
                        </Col>
                    </Row>)
                }
                </ul>
                </div>
                </Container>
            </div>
                                
  
    

    </div>
  )

}

}
 
export default AdminCalendrier;


