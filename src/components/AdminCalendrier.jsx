import React, { Component } from 'react';
import { Container,Row,Col,Input,Button,Collapse,Modal,ModalBody,ModalFooter} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import './AdminCalendrier.css';
import { defaultFormatUtc } from 'moment';

let moment = require('moment');

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
            donneesCalendrier:[
            ],
            collapse:false,
            showModify:false,
            modal1:false,
            modal2:false,
            modal3:false,
            idenSuppression:'',
            idEnModification:'',
          }

          this.onChange = this.onChange.bind(this);
          this.onChange2=this.onChange2.bind(this);
          this.submitForm = this.submitForm.bind(this);
          this.orderMatch=this.orderMatch.bind(this);
          this.refreshData=this.refreshData.bind(this);
          this.toggleCollapse=this.toggleCollapse.bind(this);
          this.deleteData=this.deleteData.bind(this);
          this.toggle1=this.toggle1.bind(this);
          this.toggle2=this.toggle2.bind(this);
          this.toggle3=this.toggle3.bind(this);
          this.closeModal=this.closeModal.bind(this);
        }
        
        //FONCTION POUR REDUIRE LE FORMULAIRE DE DECLARATION DE MATCH
        toggleCollapse() {
            this.setState({collapse:!this.state.collapse });
          }
        
        //FONCTION POUR DEPLOYER UN POPUP DE CONFIRMATION CREATION MATCH
        toggle1(){
            this.setState({
                modal1:!this.state.modal1,
                collapse:!this.state.collapse
            });
        }
        //FONCTION POUR DEPLOYER UN POPUP DE CONFIRMATION MODIFICATION MATCH
        toggle2(){
            this.setState({
                modal2:true,
            });
        }
        //FONCTION POUR DEPLOYER UN POPUP DE CONFIRMATION SUPPRESSION MATCH
        toggle3(id){
            this.setState({
                modal3:true,
                idenSuppression:id,
            });
        }
 
      
        //FONCTION POUR MAJ STATE DU COMPOSANT VIA DES CLE DYNAMIQUES SUR FORMULAIRE CREATION MATCH
        onChange(e) {
            let obj = this.state.postit;
            obj[e.target.name] = e.target.value
            this.setState(obj);
          }
        //FONCTION POUR MAJ STATE DU COMPOSANT VIA DES CLE DYNAMIQUES SUR FORMULAIRE MODIFICATION MATCH
          onChange2(e) {
            let obj = this.state.modification;
            obj[e.target.name] = e.target.value
            this.setState(obj);
          }
        //FONCTION FERMER LES MODALES (ALERT BOX) APRES CLIQUE ABANDONNER
          closeModal() {
            this.setState({
                modal1:false,
                modal2:false,
                modal3:false,
                showModify:false,
            })
            }
            //FONCTION POUR MAJ AFFICHAGE TABLEAU DES MATCHS ET FORMULAIRE DE MODIFICATION
            refreshData(){
                this.setState({
                    showModify:!this.state.showModify,
                })
            }
          
           //FONCTION POUR AJOUT D'UN NOUVEAU MATCH VIA FORMULAIRE ***METHODE POST DE FETCH***
           submitForm(e) {
            this.setState({modal1:!this.state.modal1})
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
                }
              }).catch(e => {
                alert('Erreur lors de l\'ajout du Match');
              })
              .then(()=>fetch(url)
                    .then(response => response.json())
                    .then((data)=>this.orderMatch(data))
                    .then(data=>this.setState({donneesCalendrier:data})));
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
            return result;
            }
        
    
         //FONCTION POUR REACTUALISER LE CALENDRIER AVEC DONNEES DE L'API ***METHODE GET DE FETCH***
         //ET LE TRIER DANS L'ORDRE CROISSANT DES DATES
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
        
        //FONCTION POUR SUPPRIMER UN MATCH, ***METHODE DELETE DE FETCH***
        //ET LE TRIER DANS L'ORDRE CROISSANT DES DATES
        deleteData() {
            this.setState({modal3:false})
            const id = this.state.idenSuppression;
            const url="http://92.175.11.66:3000/reaction/api/calendriers";
            fetch(url + '/' + id, {
                method: 'delete'
            })
            .then(response =>response)
            .then(()=>fetch(url)
                    .then(response => response.json())
                    .then((data)=>this.orderMatch(data))
                    .then(data=>this.setState({
                        donneesCalendrier:data,
                        idenSuppression:'',
                    }))
            )   
        }    
        //FONCTION POUR SELECTIONNER UN MATCH DU CALENDRIER,
        //ET TRANSFERT MATCH DANS UN FORMULAIRE POUR LE MODIFIER ***METHODE GET DE FETCH***
        modifyData(id){
            this.setState({
                showModify:true,
                idEnModification:id,
            })
            const url="http://92.175.11.66:3000/reaction/api/calendriers";
            fetch(url + '/' + id)
            .then(res => res.json())
            .then(res => {
                let a=this.state.modification
                a.equipeA=res.equipeA;
                a.equipeB=res.equipeB;
                a.score=res.score;
                a.dateMatch=res.dateMatch.substring(0,20);
                a.chaine=res.chaine;
                return this.setState({modification:a,});
        })
    }
        
        //FONCTION POUR MODIFIER UN MATCH PRESENT DANS L'API, ***METHODE PUT DE FETCH***
        updateData(id){
            this.setState({modal2:!this.state.modal2,})
            const url="http://92.175.11.66:3000/reaction/api/calendriers";
            fetch(url + '/' + id, {
                method: 'put',
                headers: {"Content-Type": "application/json",
            },
                body: JSON.stringify(this.state.modification),
              })
            .then (body=>body)
            .then(()=>fetch(url)
                .then(result=>result.json())
                .then(data=>this.setState({
                    idEnModification:'',
                    donneesCalendrier:data,
                    showModify:!this.state.showModify,
                })))     
        }
        render() {
          return (    
            <Container>

            <div className="PageAdminCalendrier">
            <NavLink to="/admin/" className="linkNav">
                            <Button color="secondary">Retour</Button> 
                        </NavLink>
                 <h1 className="titreAdminCalendrier">Gestion du calendrier des matchs</h1>
                 <Row>
                     <Col lg={{size:'2',offset:'1'}}>
                    <div className="boutonRetour">
                       <NavLink to="/admin/" className="linkNav">
                            <Button color="secondary">Accueil admin</Button> 
                        </NavLink>

                    </div>
                    </Col>
                    <Col lg={{size:'3',offset:'2'}}>
                    {/*MODALE 1 POUR VALIDATION OU ABANDON CREATION D'UN MATCH*/}
                    <Modal isOpen={this.state.modal1} modalTransition={{ timeout: 400 }} backdropTransition={{ timeout: 700 }}
                        toggle={this.toggle1} className={this.props.className}>
                        <ModalBody> 
                            Voulez-vous confirmer l'ajout de ce match ?
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.submitForm}>Oui</Button>{' '}
                            <Button color="secondary" onClick={this.closeModal}>Non</Button>
                        </ModalFooter>
                    </Modal>
                    {/*MODALE 2 POUR VALIDATION OU ABANDON MODIFICATION D'UN MATCH*/}
                    <Modal isOpen={this.state.modal2} modalTransition={{ timeout: 400 }} backdropTransition={{ timeout: 700 }}
                        toggle={this.toggle2} className={this.props.className}>
                        <ModalBody> 
                            Voulez-vous confirmer la modification de ce match ?
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={()=>this.updateData(this.state.idEnModification)}>Oui</Button>{' '}
                            <Button color="secondary" onClick={this.closeModal}>Non</Button>
                        </ModalFooter>
                    </Modal>
                    {/*MODALE 3 POUR VALIDATION OU ABANDON SUPPRESSION D'UN MATCH*/}
                    <Modal isOpen={this.state.modal3} modalTransition={{ timeout: 400 }} backdropTransition={{ timeout: 700 }}
                        toggle={this.toggle3} className={this.props.className}>
                        <ModalBody> 
                            Voulez-vous confirmer la suppression de ce match ?
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.deleteData}>Oui</Button>{' '}
                            <Button color="secondary" onClick={this.closeModal}>Non</Button>
                        </ModalFooter>
                    </Modal>
                    {/*FORMULAIRE DE CREATION D'UN MATCH */}                       
                    <div className="Form_Declaration_Match">
                    <Button color="primary" onClick={this.toggleCollapse} style={{ marginBottom: '1rem'}}>Déclarer un match</Button>
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
                                        type="datetime"
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
                                        <Button onClick={this.toggle1} color="success" value="envoie">Envoyer</Button>                        
                                    </div>                         
                                    </form>                                                
                                
                            </Collapse>
                            </div>  
                        </Col>
                        </Row>
                        {/*CALENDRIER D'AFFICHAGE DES MATCHS AVEC BOUTONS MODIFIER SUPPRIMER */}                       
                        <Row>
                            <Col lg={{ size:8, offset:this.state.showModify?0:2}}>
                                <div className="Calendrier_Admin">
                                        <h5  className="soustitreAdminCalendrier">Supprimer ou modifier un match</h5>
                                            <ul className="sousCalendrier_Admin">
                                                {this.state.donneesCalendrier.map((match)=>
                                                <Row className="Row_Admin_Calendrier">
                                                    <Col lg="2" xs="3" className="colonne1admin">
                                                            <div>
                                                                    <p className="dateMatchDesktop">{match.dateMatch.substring(8,10)} {match.dateMatch.substring(5,7)} {match.dateMatch.substring(0,4)}</p>
                                                            </div> 
                                                    </Col>
                                                    <Col lg="2" xs="3" className="colonne2admin">
                                                        <p> {match.equipeA} </p>
                                                    </Col>
                                                    <Col lg="1" xs="1" className="colonne3admin">
                                                        <p> {match.score} </p>
                                                    </Col>
                                                    <Col lg="3" xs="3" className="colonne4admin">
                                                        <p> {match.equipeB} </p>
                                                    </Col> 
                                                    <Col lg="2" xs="2" className="colonne5admin">
                                                        <p>{match.chaine}</p>
                                                    </Col> 
                                                    <Col lg="2" xs="12" className="colonne6admin">
                                                        <Button onClick={()=>this.toggle3(match.id)} color="danger">Supprimer</Button>
                                                        <Button onClick={()=>this.modifyData(match.id)} color="warning">Modifier</Button>     
                                                    </Col>
                                                </Row>)
                                            }
                                            </ul>
                                         </div>
                             </Col>
                            {/*FORMULAIRE DE MODIFICATION DES MATCHS EXISTANTS*/}                       
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
                                        <Button onClick={this.toggle2} color="success">Envoyer</Button>
                                        <Button onClick={this.closeModal}color="warning" >Abandonner</Button>                           
                                    </div>                         
                                    </form>                                                
                            </div>     
                          
                    </Col>
                </Row>
                
           </div>                                                 
    </Container>
  )
}
}
export default AdminCalendrier;


