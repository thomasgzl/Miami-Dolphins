import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import {NavLink} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Collapse,Modal,ModalBody,ModalFooter } from 'reactstrap';

import './AdminNews.css';


class AdminNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            depart: {
                image: "",
                titre: "",
                texte: "",
            },
            modification: {
                image: "",
                titre: "",
                texte: "",
            },
            donneesNews: [],
            collapse:false,
            showModify:false,
            modal1:false,
            modal2:false,
            modal3:false,
            idenSuppression:'',
            idEnModification:'',

        };
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.onChangeModif = this.onChangeModif.bind(this);
        this.deleteForm = this.deleteForm.bind(this);
        this.modifierForm = this.modifierForm.bind(this);
        this.toggle1 = this.toggle1.bind(this);
        this.toggle2 = this.toggle2.bind(this);
        this.toggle3 = this.toggle3.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    //FONCTION POUR DEPLOYER UN POPUP DE CONFIRMATION CREATION 
    toggle1(){
        this.setState({
            modal1:!this.state.modal1,
        });
    }
    //FONCTION POUR DEPLOYER UN POPUP DE CONFIRMATION MODIFICATION 
    toggle2(){
        this.setState({
            modal2:true,
        });
    }
    //FONCTION POUR DEPLOYER UN POPUP DE CONFIRMATION SUPPRESSION 
    toggle3(id){
        this.setState({
            modal3:true,
            idenSuppression:id,
        });
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

    onChange(e) {
        let obj = this.state.depart;
        obj[e.target.name] = e.target.value
        this.setState(obj);
    }

    onChangeModif(e) {
        let obj = this.state.modification;
        obj[e.target.name] = e.target.value
        this.setState(obj);
    };

    submitForm(e) {
        this.setState({modal1:false})
        e.preventDefault();
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state.depart),
        };
        const url = "http://92.175.11.66:3000/reaction/api/news";

        fetch(url, config)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    alert(res.error);
                } 
            })
            .then(() => fetch(url)
                .then(res => res.json())
                .then(res => this.setState({ donneesNews: res })))
    }

    deleteForm() {
        this.setState({modal3:false})
        const id = this.state.idenSuppression;
        const url = "http://92.175.11.66:3000/reaction/api/news";
        fetch(url + '/' + id, {
            method: 'delete'
        })
            .then(response => response)
            .then(() => fetch("http://92.175.11.66:3000/reaction/api/news")
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        donneesNews: data,
                        idenSuppression:'',
                    })                  
                }))
    }

    componentDidMount() {
        fetch("http://92.175.11.66:3000/reaction/api/news")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    donneesNews: data,
                });
            });
    }

    modifierForm(id) {
        this.setState({
            showModify:true,
            idEnModification:id,
        })
        const url="http://92.175.11.66:3000/reaction/api/news"
        fetch(url + '/' + id)
            .then(response => response.json())
            .then(data => {
                let i = this.state.modification
                i.image = data.image;
                i.texte = data.texte;
                i.titre = data.titre;
                return this.setState({ modification: i })
            })
            this.setState({ idModifie: id });                              
    };

    updateData(id) {
        this.setState({modal2:!this.state.modal2})
        const url = "http://92.175.11.66:3000/reaction/api/news"
        fetch(url + '/' + id, {
            method: 'put',
            body: JSON.stringify(this.state.modification),
            headers: { "Content-Type": "application/json" },
        })
            .then(body => body)
            .then(() => fetch(url)
                .then(res => res.json())
                .then(res => this.setState({ 
                    donneesNews: res, 
                    idEnModification:'', 
                    showModify:!this.state.showModify })
                ))               
    }

    render() {
        return (
            <Container className="fond_admin_news">
                <NavLink to="/admin/" className="linkNav">
                    <Button color="secondary">Retour</Button>
                </NavLink>
                <h1 className="titre_gestion">Gestion des news</h1>
                <Row>
                
                    {/*MODALE 1 POUR VALIDATION OU ABANDON CREATION */}
                    <Modal isOpen={this.state.modal1} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
                        toggle={this.toggle1} className={this.props.className}>
                        <ModalBody> 
                            Voulez-vous confirmer l'ajout de cette news ?
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.submitForm}>Oui</Button>{' '}
                            <Button color="secondary" onClick={this.closeModal}>Non</Button>
                        </ModalFooter>
                    </Modal>
                    {/*MODALE 2 POUR VALIDATION OU ABANDON MODIFICATION */}
                    <Modal isOpen={this.state.modal2} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
                        toggle={this.toggle2} className={this.props.className}>
                        <ModalBody> 
                            Voulez-vous confirmer la modification de cette news ?
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={()=>this.updateData(this.state.idEnModification)}>Oui</Button>{' '}
                            <Button color="secondary" onClick={this.closeModal}>Non</Button>
                        </ModalFooter>
                    </Modal>
                    {/*MODALE 3 POUR VALIDATION OU ABANDON SUPPRESSION*/}
                    <Modal isOpen={this.state.modal3} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
                        toggle={this.toggle3} className={this.props.className}>
                        <ModalBody> 
                            Voulez-vous confirmer la suppression de ce match ?
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.deleteForm}>Oui</Button>{' '}
                            <Button color="secondary" onClick={this.closeModal}>Non</Button>
                        </ModalFooter>
                    </Modal>
                    

                    <Col sm={12} lg={5} className="formulaire_news">
                        <Form onSubmit={this.submitForm}>
                            <h4 className="titre_form">Ajouter une news</h4>
                            <FormGroup>
                                <Label for="titre">Titre</Label>
                                <Input type="text" name="titre" id="titre" placeholder="titre de l'article" onChange={this.onChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="Text_news">Article</Label>
                                <Input type="textarea" name="texte" id="texte" onChange={this.onChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="Image_news">Image</Label>
                                <Input type="text" name="image" id="image" placeholder="url de l'image" onChange={this.onChange} />
                            </FormGroup>
                            <FormGroup>
                                <Button onClick={this.toggle1} value="Ajouter" className="ajouter" color="success">Ajouter</Button>
                            </FormGroup>
                        </Form>
                    </Col>

                    <Col sm={12} lg={5} className="formulaire_news">
                        <Form onSubmit={this.submitForm}>
                        <h4 className="titre_form">Modifier une news</h4>
                            <FormGroup>
                                <Label for="titre">Titre</Label>
                                <Input type="text" name="titre" id="titre" placeholder="titre de l'article" onChange={this.onChangeModif} value={this.state.modification.titre} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="Text_news">Article</Label>
                                <Input type="textarea" name="texte" id="texte" onChange={this.onChangeModif} value={this.state.modification.texte} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="Image_news">Image</Label>
                                <Input type="text" name="image" id="image" placeholder="url de l'image" onChange={this.onChangeModif} value={this.state.modification.image} />
                            </FormGroup>
                            <FormGroup>
                                <Button onClick={this.toggle2} className="valider">Valider</Button>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>

                <Row className="affichage_news">
                    <Col className="article">
                        {this.state.donneesNews.map((news) =>
                            <div>
                                <h3 className="titre_article">{news.titre}</h3>
                                <p className="texte_article">{news.texte}</p>
                                <img className="image_article" src={news.image} />
                                <Button className="supprimer" onClick={() => this.toggle3(news.id)} color="danger">Supprimer</Button>
                                <Button className="modifier" onClick={() => this.modifierForm(news.id)}>Modifier</Button>
                            </div>)}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default AdminNews;