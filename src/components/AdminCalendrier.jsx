import React, { Component } from 'react';
import { Container,Row,Col,Input,Button,Collapse,Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import './AdminCalendrier.css';
import AbortController from "abort-controller"



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
            donneesCalendrier:[],
            collapse: false, status: 'Closed',
            showModify:false,
            modal: false
          }

          this.onChange = this.onChange.bind(this);
          this.onChange2=this.onChange2.bind(this);
          this.submitForm = this.submitForm.bind(this);
          this.orderMatch=this.orderMatch.bind(this);
          this.refreshData=this.refreshData.bind(this);
          this.toggleCollapse=this.toggleCollapse.bind(this);
          this.toggleModal=this.toggleModal.bind(this);
          this.input = React.createRef();
          this.abortFetching=this.abortFetching.bind(this);
        }
        
        //FONCTION POUR REDUIRE LE FORMULAIRE DE DECLARATION DE MATCH
        toggleCollapse() {
            this.setState({collapse:!this.state.collapse });
          }
        
        //FONCTION POUR DEPLOYER UN POPUP A LA VALIDATION OU SUPPRESSION
        toggleModal(){
            this.setState({modal:!this.state.modal});
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

           abortFetching() {
            const controller = new AbortController()
            const signal = controller.signal
            controller.abort()
            }
          
           //FONCTION POUR AJOUT D'UN NOUVEAU MATCH VIA FORMULAIRE ***METHODE POST DE FETCH***
          submitForm(e) {
          
            e.preventDefault();
            const controller = new AbortController()
            const signal = controller.signal
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
                }
                else {
                    this.setState({modal:!this.state.modal})
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
            this.setState({showModify:true})
            const url="http://92.175.11.66:3000/reaction/api/calendriers";
            fetch(url + '/' + yolo)
            .then(res => res.json())
            .then(res => {
                let a= this.state.modification
                a.equipeA=res.equipeA;
                a.equipeB=res.equipeB;
                a.score=res.score;
                a.dateMatch=res.dateMatch.substring(0,20);
                a.chaine=res.chaine;
                return this.setState({modification:a,})
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
            <Container>

            <div className="PageAdminCalendrier">
                 <h1 className="titreAdminCalendrier">Gestion du calendrier des matchs</h1>
                 <Row>
                    <div className="boutonRetour">
                       <NavLink to="/admin/" className="linkNav">
                            <Button color="secondary">Acceuil admin</Button> 
                        </NavLink>
                    </div>
                    <Modal isOpen={this.state.modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
                        toggle={this.toggleModal} className={this.props.className}>
                        <ModalBody> 
                            La base de données a pris en compte votre changement
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.toggleModal}>OK</Button>{' '}
                            <Button color="secondary" onClick={this.abortFetching}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                                            
                    <div className="Form_Declaration_Match">
                    <Button color="primary" onClick={this.toggleCollapse} style={{ marginBottom: '2rem'}}>Déclarer un match</Button>
                            <Collapse isOpen={this.state.collapse}>
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
                                    <div className="Envoyer_Form_Declaration_Match">
                                        <Button type ="submit" onClick={this.toggleCollapse} color="success" value="envoie">Envoyer</Button>                        
                                    </div>                         
                                    </form>                                                
                                
                            </Collapse>
                            </div>  
                        </Row>
                        <Row>
                            <Col lg="8">
                                <div className="Calendrier_Admin">
                                        <h5  className="soustitreAdminCalendrier">Supprimer ou modifier un match</h5>
                                            <ul className="sousCalendrier_Admin">
                                                {this.state.donneesCalendrier.map((match)=>
                                                <Row className="Row_Admin_Calendrier">
                                                    <Col lg="2" xs="5" className="colonne1admin">
                                                            <div>
                                                                    <p className="dateMatchDesktop">{match.dateMatch.substring(8,10)} {match.dateMatch.substring(5,7)} {match.dateMatch.substring(0,4)}</p>
                                                            </div> 
                                                    </Col>
                                                    <Col lg="2" xs="2" className="colonne2admin">
                                                        <p> {match.equipeA} </p>
                                                    </Col>
                                                    <Col lg="1" xs="2" className="colonne3admin">
                                                        <p> {match.score} </p>
                                                    </Col>
                                                    <Col lg="3" xs="1" className="colonne4admin">
                                                        <p> {match.equipeB} </p>
                                                    </Col> 
                                                    <Col lg="2" xs="0" className="colonne5admin">
                                                        <p>{match.chaine}</p>
                                                    </Col> 
                                                    <Col lg="1" xs="2" className="colonne6admin">
                                                        <Button onClick={()=>this.deleteData(match.id)} color="danger">Supprimer</Button>
                                                        <Button onClick={()=>this.modifyData(match.id)} color="warning">Modifier</Button>     
                                                    </Col>
                                                </Row>)
                                            }
                                            </ul>
                                         </div>
                             </Col>
                            <Col lg="4">
                                <div className="Form_Modification-Match" style={{display:this.state.showModify?'block':'none'}}>
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
                                    <div className="Boutons_Form_Modification-Match">
                                        <Button onClick={()=>this.updateData()} type ="submit" color="success">Envoyer</Button>
                                        <Button onClick={()=>this.refreshData()}color="warning">Abandonner</Button>                           
                                    </div>                         
                                    </form>                                                
                            </div>     
                            <div className="DolphinsReplace_Form_Modification-Match" style={{display:this.state.showModify?'none':'block'}}>
                                    <img src="https://i.imgur.com/JXboZ1e.png" alt="logoDolphins"></img>
                            </div>
                    </Col>
                </Row>
                
           </div>                                                 
    </Container>
  )
}
}
export default AdminCalendrier;


