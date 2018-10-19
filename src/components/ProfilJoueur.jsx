import React, { Component } from 'react';
import './ProfilJoueur.css';
import { Container, Row, Col } from 'reactstrap';
import { Table } from 'reactstrap';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class ProfilJoueur extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            collapse: false,
            name: "" ,
            last_name: "",
            age: "",
            poste: "",
            height: "",
            weight: "",
            image: "",
            yard: "",
            tackle: "",
            int: "",
            numero: "",        };
    }

    componentDidMount() {
        const { first_name } = this.props.location.state;
        const { last_name } = this.props.location.state;
        const { age } = this.props.location.state;
        const { poste } = this.props.location.state;
        const { height } = this.props.location.state;
        const { weight } = this.props.location.state;
        const { image } = this.props.location.state;
        const { yard } = this.props.location.state;
        const { tackle } = this.props.location.state;
        const { int } = this.props.location.state;
        const { numero } = this.props.location.state;


        this.setState({
            name: first_name,
            last_name: last_name,
            age: age,
            poste: poste,
            height: height,
            weight: weight,
            image: image,
            yard: yard,
            tackle: tackle,
            int: int,
            numero: numero,
        })


    }
    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {

        return (
            <Container>
                <Row className="ligne_profil_joueur">

                    <Col>
                        <img className="image_profil_joueur" src={this.state.image} alt="photo_joueur" />
                    </Col>

                    <Col>
                        <h2 className="nom_joueur">#8 {this.state.name} {this.state.last_name}</h2>
                        <h4 className="poste_joueur">{this.state.poste}</h4>
                        <Table borderless className="tableau_stats">
                            <tbody>
                                <tr>
                                    <th scope="row">Expérience:</th>
                                    <td>7 ans</td>
                                </tr>
                                <tr>
                                    <th scope="row">Taille:</th>
                                    <td>{this.state.height}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Age:</th>
                                    <td>{this.state.age} ans</td>
                                </tr>
                                <tr>
                                    <th scope="row">Poids:</th>
                                    <td>{this.state.weight} kg</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>

                <Row className="colonne_boutons">
                    <Col xs="1">
                        <button className="bouton_precedent_joueur"><img src="https://res.cloudinary.com/dzgbfpr45/image/upload/v1539768444/back.png" alt="logo precedent" /></button>
                    </Col>

                    <Col md="3" xs="7">
                        <div>
                            <Button color="info" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Statistiques</Button>
                            <Collapse isOpen={this.state.collapse}>
                                <Card>
                                    <CardBody className="body_card_joueur">
                                        <p><span className="categorie">Yard:</span>{this.state.yard}</p>
                                        <p><span className="categorie">Interceptions:</span>{this.state.int}</p>
                                        <p><span className="categorie">Tacles:</span> {this.state.tackle}</p>
                                    </CardBody>
                                </Card>
                            </Collapse>
                        </div>
                    </Col>

                    <Col xs="1">
                        <button className="bouton_suivant_joueur"><img src="https://res.cloudinary.com/dzgbfpr45/image/upload/v1539767242/next.png" alt="logo suivant" /></button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ProfilJoueur;