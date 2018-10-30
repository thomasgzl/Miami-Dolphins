import React, { Component } from 'react';
import { Button, Container, Row, Col, Modal, ModalBody, ModalFooter } from 'reactstrap';
import './AdminEquipe.css';
import { NavLink } from 'react-router-dom';
import ModalJoueurDelete from './ModalJoueurDelete'

class AdminEquipe extends Component {
    constructor(props) {
        super(props);

        this.state = {
            liste: [],
            isloading: true,
            modalDelete: false,
        };

        this.getDeletePlayer = this.getDeletePlayer.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.toggleDelete = this.toggleDelete.bind(this);


    }

    componentDidMount() {

        // Récupération des joueurs via fetch
        fetch("http://92.175.11.66:3000/reaction/api/joueurs")
            .then(response => response.json())
            .then(data => {
                // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
                this.setState({

                    liste: data,
                    isloading: false,
                });
            })

            .catch(err => console.error('Caught error: ', err))
    }

    closeModal() {
        this.setState({
            modalDelete: false,

        })
    }
    //FONCTION POUR DEPLOYER UN POPUP DE CONFIRMATION SUPPRESSION JOUEUR
    toggleDelete(id) {
        this.setState({
            modalDelete: true,
        });
    }


    //fonction pour supprimer un joueur

    getDeletePlayer(id) {
        const url = "http://92.175.11.66:3000/reaction/api/joueurs";
        return fetch(url + '/' + id, {
            method: 'DELETE'
        })
            .then(res => {
                if (res.error) {
                    alert(res.error);
                }
                else {
                    alert(`Joueur supprimé!`)
                    window.location.reload();
                }
            })

    }



    render() {

        return (

            <div className="backgroundPlayers" >
                <div className="TitrePoste">

                    <h2 className="titre_poste_dynamique">Administration Joueurs</h2>
                </div>


                <Container className="AllPlayer" fluid>

                    <div className="Boutons">
                        <NavLink to={{ pathname: "/adminjoueurnew", }} className="linkNav">
                            <Button className="BoutonIndiv vert" color="success">Ajouter</Button>
                        </NavLink>
                        <NavLink to="/admin/" className="linkNav">
                            <Button color="secondary">Retour</Button>
                        </NavLink>
                    </div>



                    <Row className="LinePlayer" >
                        {this.state.liste.map((joueur) =>
                            <Col xs="12" sm="6" md="3" className="Colonne-player">
                                <div className="container no gutter infos-joueur">
                                    <img className="image_joueur" src={joueur.image} alt="Player"></img>
                                    <div className="bloc-name info">
                                        <p className="name_player">{joueur.firstName}</p>
                                        <p className="lastname_player">{joueur.lastName}</p>
                                    </div>
                                    <div className="Bouton">
                                        <NavLink to={{
                                            pathname: `/adminjoueurmodifie`,
                                            state: {
                                                firstName: joueur.firstName,
                                                lastName: joueur.lastName,
                                                age: joueur.age,
                                                poste: joueur.poste,
                                                numero: joueur.numero,
                                                height: joueur.height,
                                                weight: joueur.weight,
                                                image: joueur.image,
                                                yard: joueur.yard,
                                                tackle: joueur.tackle,
                                                intPlayer: joueur.intPlayer,
                                                id: joueur.id,
                                            }
                                        }}  >

                                            <Button className="BoutonIndiv orange" outline color="link">Modifier</Button>
                                        </NavLink>


                                        

                                        <ModalJoueurDelete buttonLabel="Supprimer" className="BoutonIndiv rouge"
                                            joueurId={joueur.id}
                                             />
                                           
                                    </div>
                                </div>

                            </Col>
                        )}
                    </Row>


                </Container>

            </div >

        )
    }
}



export default AdminEquipe;
