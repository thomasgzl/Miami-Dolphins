import React, { Component } from 'react';
import { Container, Row, Col,Input,Button } from 'reactstrap';
import {NavLink} from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import './AdminCalendrier.css';


class AdminCalendrier extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postit:{
                dateMatch: '',
                equipeA: '',
                equipeB: '',
                score: '',
                chaine: '',
            },
            modification:{
                dateMatch: '',
                equipeA: '',
                equipeB: '',
                score: '',
                chaine: '',
            },
            donneesCalendrier:[]
          }

          this.onChange = this.onChange.bind(this);
          this.onChange2=this.onChange2.bind(this);
          this.submitForm = this.submitForm.bind(this);
          this.orderMatch=this.orderMatch.bind(this);
          this.refreshData=this.refreshData.bind(this);
          this.input = React.createRef();
        }
      
        //FONCTION POUR MAJ STATE DU COMPOSANT VIA DES CLE DYNAMIQUES DES FORMULAIRES
        onChange(e) {
            let obj = this.state.postit;
            obj[e.target.name] = e.target.value
            this.setState(obj);
          }

          onChange2(e) {
            let obj = this.state.modification;
            obj[e.target.name] = e.target.value
            this.setState(obj);
          }
          
           //FONCTION POUR AJOUT D'UN NOUVEAU MATCH VIA FORMULAIRE ***METHODE POST DE FETCH***
          submitForm(e) {
            e.preventDefault();

            const url = "http://92.175.11.66:3000/reaction/api/calendriers/";
        
            const config = {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(this.state.postit),
             };
        
            fetch(url, config)
              .then(res => res.json())
              .then(res => {
                if (res.error) {
                  alert(res.error);
                } else {
                  alert(`Match ajouté avec l'ID ${res}!`);
                }
              }).catch(e => {
                alert('Erreur lors de l\'ajout du Match');
              })
              .then(()=>fetch(url)
                    .then(response => response.json())
                    .then(data=>this.setState({donneesCalendrier:data}))
            )   ;
          }
               
        // FONCTION POUR AFFICHAGE CALENDRIER TRIE PAR ORDRE CROISSANT DE DATE
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
        
    
         //FONCTION POUR REACTUALISER LE CALENDRIER AVEC DONNEES DE L'API ***METHODE GET DE FETCH***
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
         //FONCTION POUR REACTUALISER LA PAGE SUITE A MODIFICATION,SUPPRESSION,AJOUT MATCH
        refreshData(){
            window.location.reload()
        }
    
        
        //FONCTION POUR SUPPRIMER UN MATCH, ***METHODE DELETE DE FETCH***
        deleteData(item) {
            const url="http://92.175.11.66:3000/reaction/api/calendriers";
            fetch(url + '/' + item, {
                method: 'delete'
            })
            .then(response =>response)
            .then(()=>fetch(url)
                    .then(doubs => doubs.json())
                    .then(data=>this.setState({donneesCalendrier:data}))
            )   
        }    
        //FONCTION POUR SELECTIONNER UN MATCH DU CALENDRIER,
        //ET TRANSFERT MATCH DANS UN FORMULAIRE POUR LE MODIFIER ***METHODE GET DE FETCH***
        modifyData(yolo){
            const url="http://92.175.11.66:3000/reaction/api/calendriers";
            fetch(url + '/' + yolo)
            .then(res => res.json())
            .then(res => {
                let a= this.state.modification
                a.equipeA=res.equipeA;
                a.equipeB=res.equipeB;
                a.score=res.score;
                a.dateMatch=res.dateMatch;
                a.chaine=res.chaine;
                return this.setState({modification:a})
            })
            this.setState({idEnModification:yolo})
        }
        
        //FONCTION POUR MODIFIER UN MATCH PRESENT DANS L'API, ***METHODE PUT DE FETCH***
        updateData(){
            const url="http://92.175.11.66:3000/reaction/api/calendriers"
            fetch(url + '/' + this.state.idEnModification, {
                method: 'put',
                body: JSON.stringify(this.state.modification),
                headers: {"Content-Type": "application/json"},
              })
            .then (body=>body)
            
        }

    
        render() {
          return (
            <div className="AdminCalendrier">
              <h1 className="titreAdminCalendrier">Gestion du calendrier des matchs</h1>
              <div className="nosEntreesPlatsDesserts">
              <div className="boutonRetour">
              <NavLink to="/admin/" className="linkNav">
                    <Button color="secondary">Retour</Button> 
              </NavLink>
              </div>
              <div className="InputsCalendrier">
                <h5  className="soustitreAdminCalendrier">Déclarer un nouveau match</h5>
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
                        <Button type ="submit" color="success" value="envoie">Envoyer</Button>                        
                       </div>                         
                    </form>                                                
                 </div>  
               
                 <div className="ModifierMatchCalendrier">
                <h5  className="soustitreAdminCalendrier">Modifier un  match</h5>
                <form onSubmit={this.submitForm}>
                    <Input 
                        placeholder="Equipe A"
                        type="text"
                        id="equipeA"
                        name="equipeA"
                        onChange={this.onChange2}
                        value={this.state.modification.equipeA}/>
                    <Input 
                        placeholder="Equipe B"
                        type="text"
                        id="equipeB"
                        name="equipeB"
                        onChange={this.onChange2}
                        value={this.state.modification.equipeB}/>                           
                    <Input 
                       placeholder="Score"
                       type="text"
                       id="score"
                       name="score"
                       onChange={this.onChange2}
                       value={this.state.modification.score}/>                         
                    <Input 
                        placeholder="Date du match"
                        type="text"
                        id="dateMatch"
                        name="dateMatch"
                        onChange={this.onChange2}
                        value={this.state.modification.dateMatch}/>                        
                    <Input 
                         placeholder="Chaine TV"
                         type="text"
                         id="chaine"
                         name="chaine"
                         onChange={this.onChange2}
                         value={this.state.modification.chaine}/>                                             
                       <div className="film-data">
                        <Button onClick={()=>this.updateData()} type ="submit" color="success">Envoyer</Button>
                        <Button onClick={()=>this.refreshData()}color="warning">Effacer</Button>                           
                       </div>                         
                    </form>                                                
                 </div>       
                                                          
               </div>                     
               
             <div className="GlobalCalendrier_Admin">
                <Container className="Container_Admin">
                    <h5  className="soustitreAdminCalendrier">Supprimer ou modifier un match</h5>
                    <div className="CalendrierAdmin">
                <ul className="Calendrier_contour_Admin">
                    {this.state.donneesCalendrier.map((match)=>
                    <Row className="Calendrier_ligneTableau_Admin">
                        <Col lg="2" xs="5" className="colonne1">
                                <div>
                                        <p className="dateMatchDesktop">{match.dateMatch.substring(8,10)} {match.dateMatch.substring(5,7)} {match.dateMatch.substring(0,4)}</p>
                                </div> 
                        </Col>
                        <Col lg="2" xs="2" className="colonne2">
                            <p> {match.equipeA} </p>
                        </Col>
                        <Col lg="2" xs="2" className="colonne3">
                            <p> {match.score} </p>
                        </Col>
                        <Col lg="2" xs="1" className="colonne4">
                            <p> {match.equipeB} </p>
                        </Col> 
                        <Col lg="2" xs="0" className="colonne5">
                            <p>{match.chaine}</p>
                        </Col> 
                        <Col lg="2" xs="2" className="colonne6">
                            <Button onClick={()=>this.deleteData(match.id)} color="danger">Supprimer</Button>
                            <Button onClick={()=>this.modifyData(match.id)} color="warning">Modifier</Button>     
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


