import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Equipe.css';
import { NavLink } from 'react-router-dom';

class Equipe extends Component {
    constructor(props) {
        super(props);
        this.triquatterback = this.triquatterback.bind(this);
        this.triWideReceiver = this.triWideReceiver.bind(this);
        this.triGeneral = this.triGeneral.bind(this);



        this.state = {
            liste: [],
            liste2: [],
            isloading: true,
            titre: "Equipe Générale",
        };
    }

    componentDidMount() {

        // Récupération des joueurs via fetch
        fetch("http://92.175.11.66:3000/reaction/api/joueurs")
            .then(response => response.json())
            .then(data => {
                // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
                this.setState({

                    liste2: data,
                    liste: data,
                    isloading: false,
                });
            })

            .catch(err => console.error('Caught error: ', err))
    }


    triquatterback() {

        const listtriquatterback = this.state.liste.filter(s => s.poste === "Quaterback");
        this.setState({ liste2: listtriquatterback, titre: "Quarterback" });
    }


    triWideReceiver() {

        const listtriWideReceiver = this.state.liste.filter(s => s.poste === "Wide Receiver");
        this.setState({ liste2: listtriWideReceiver, titre: "Wide Receiver" });
    }

    triGeneral() {

        this.state.liste.sort((a, b) => (a.lastName > b.lastName) - (a.lastName < b.lastName));
        this.setState({ liste2: this.state.liste, titre: "Equipe Ordre Alphabétique" })
    }


    render() {
        if (this.state.isloading) {
            return (
                <div className="Loading">Loading.....</div>)
        }

        else {
           
            return (

                <div className="backgroundPlayers">
                    <div className="TitrePoste">

                        <h2 className="titre_poste_dynamique">{this.state.titre}</h2>
                    </div>


                    <Container className="AllPlayer" fluid>

                        <div className="Boutons">

                            <button className="BoutonIndiv" onClick={() => this.triquatterback()}>Quatterback</button>
                            <button className="BoutonIndiv" onClick={() => this.triWideReceiver()}>Wide Receiver</button>
                            <button className="BoutonIndiv" onClick={() => this.triGeneral()}>Tri Général</button>
                        </div>
                        <Row className="LinePlayer" >
                            {this.state.liste2.map((joueur) =>
                                <Col xs="12" sm="6" md="3" className="Colonne-player">
                                    <NavLink to={{
                                        pathname: "/profiljoueur",
                                        state: {
                                            firstName: joueur.firstName,
                                            lastName: joueur.lastName,
                                            age: joueur.age,
                                            poste: joueur.poste,
                                            height: joueur.height,
                                            weight: joueur.weight,
                                            image: joueur.image,
                                            yard: joueur.yard,
                                            tackle: joueur.tackle,
                                            intPlayer: joueur.intPlayer,
                                            numero: joueur.numero,
                                        }
                                    }} className="linkNav">
                                        <div className="container no gutter infos-joueur">
                                            <img className="image_joueur" src={joueur.image} alt="Player"></img>
                                            <div className="bloc-name info">
                                                <p className="numero_player">{joueur.numero}</p>
                                                <p className="name_player">{joueur.firstName}</p>
                                                <p className="lastname_player">{joueur.lastName}</p>
                                            </div>
                                        </div>
                                    </NavLink>
                                </Col>
                            )}
                        </Row>


                    </Container>

                </div>

            )
        }
    }
}


export default Equipe;
