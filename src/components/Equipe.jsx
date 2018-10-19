import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Equipe.css';
import ProfilJoueur from './ProfilJoueur';
import { NavLink, Link } from 'react-router-dom';

const ListJoueur = [
    {
        id: 1,
        first_name: "John",
        last_name: "Doe",
        age: 28,
        poste: "Quatterback",
        height: 6.1,
        weight: 208,
        image: "http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/15819.png&w=350&h=254",
        yard: 250,
        tackle: 0,
        int: 1,
        numero: 54,
    },

    {
        id: 2,
        first_name: "Kiko",
        last_name: "Alonso",
        age: 26,
        poste: "Middle linebacker ",
        height: 6.3,
        weight: 239,
        image: "http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/15819.png&w=350&h=254",
        yard: 250,
        tackle: 0,
        int: 1,
        numero: 54,

    },

    {
        id: 3,
        first_name: "Ryan",
        last_name: "Tanneli",
        age: 30,
        poste: "Quatterback",
        Height: 6.4,
        weight: 207,
        image: "http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/14876.png&w=350&h=254",
        yard: 250,
        tackle: 0,
        int: 1,
        numero: 54,

    }
    ,
    {
        id: 4,
        first_name: "Brock",
        last_name: "Osweiler",
        age: 27,
        poste: "Quatterback",
        height: 6.7,
        weight: 240,
        image: "http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/14879.png&w=350&h=254",
        yard: 120,
        tackle: 0,
        int: 0,
        numero: 54,

    }
    ,
    {
        id: 5,
        first_name: "Jenny",
        last_name: "Stihl",
        age: 24,
        poste: "Wide Receiver",
        height: 6.2,
        weight: 208,
        image: "http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2979843.png&w=350&h=254",
        yard: 80,
        tackle: 0,
        int: 3,
        numero: 54,

    },
    {
        id: 6,
        first_name: "Jakeem",
        last_name: "Grant",
        age: 24,
        poste: "Wide Receiver",
        height: 5.7,
        weight: 169,
        image: "http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2979843.png&w=350&h=254",
        yard: 184,
        tackle: 0,
        int: 8,
        numero: 54,

    },
    {
        id: 7,
        first_name: "DeVante",
        last_name: "Parker",
        age: 25,
        poste: "Wide Receiver",
        height: 6.3,
        weight: 216,
        image: "http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2576623.png&w=350&h=254",
        yard: 40,
        tackle: 0,
        int: 2,
        numero: 54,

    },
    {
        id: 8,
        first_name: "Wilson",
        last_name: "Alber",
        age: 25,
        poste: "Wide Receiver",
        height: 5.9,
        weight: 189,
        image: "http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/17051.png&w=350&h=254",
        yard: 359,
        tackle: 0,
        int: 6,
        numero: 54,

    },
]


class Equipe extends Component {
    constructor(props) {
        super(props);
        this.triquatterback = this.triquatterback.bind(this);
        this.triWideReceiver = this.triWideReceiver.bind(this);
        this.triGeneral = this.triGeneral.bind(this);

        this.state = {
            liste: ListJoueur,
            liste2: ListJoueur,
            titre: "Equipe Générale",
        };
    }

    triquatterback() {

        const listtriquatterback = this.state.liste.filter(s => s.poste === "Quatterback");
        this.setState({ liste: ListJoueur, liste2: listtriquatterback, titre: "Quatterback" });
    }


    triWideReceiver() {

        const listtriWideReceiver = this.state.liste.filter(s => s.poste === "Wide Receiver");
        this.setState({ liste2: listtriWideReceiver, liste: ListJoueur, titre: "Wide Receiver" });
    }

    triGeneral() {

        this.state.liste.sort((a, b) => (a.last_name > b.last_name) - (a.last_name < b.last_name));
        this.setState({ liste: this.state.liste2, liste2: this.state.liste, titre: "Equipe Ordre Alphabétique" })
    }

    render() {
        return (

            <section className="all_players">
                <div className="titre_poste">
                    <h2>{this.state.titre}</h2>
                </div>


                <Container className="All-Player" fluid>


                    <Row className="Line-player" noGutters>
                        {this.state.liste2.map((joueur) =>
                            <NavLink to={{
                                pathname: "/profiljoueur",
                                state: {
                                    first_name: joueur.first_name,
                                    last_name: joueur.last_name,
                                    age: joueur.age,
                                    poste: joueur.poste,
                                    height: joueur.height,
                                    weight: joueur.weight,
                                    image: joueur.image,
                                    yard: joueur.yard,
                                    tackle: joueur.tackle,
                                    int: joueur.int,
                                    numero: joueur.numero,
                                }
                            }} className="linkNav">
                                <Col xs="12" sm="6" md="3" className="Colonne-player">
                                    <div className="container no gutter infos-joueur">
                                        <img className="image_joueur" src={joueur.image} alt="Image player"></img>
                                        <div className="bloc-name info">
                                            <p className="numero_player">{joueur.numero}</p>
                                            <p className="name_player">{joueur.first_name}</p>
                                            <p className="lastname_player">{joueur.last_name}</p>
                                        </div>
                                    </div>
                                </Col>

                            </NavLink>
                        )}
                    </Row>
                    <button onClick={() => this.triquatterback()}>Quatterback</button>
                    <button onClick={() => this.triWideReceiver()}>Wide Receiver</button>
                    <button onClick={() => this.triGeneral()}>Tri Général</button>



                </Container>

            </section>

        )
    }
}


export default Equipe;