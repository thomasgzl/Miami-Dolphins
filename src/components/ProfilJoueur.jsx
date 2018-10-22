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
        const { firstName } = this.props.location.state;
        const { lastName } = this.props.location.state;
        const { age } = this.props.location.state;
        const { poste } = this.props.location.state;
        const { height } = this.props.location.state;
        const { weight } = this.props.location.state;
        const { image } = this.props.location.state;
        const { yard } = this.props.location.state;
        const { tackle } = this.props.location.state;
        const { intPlayer } = this.props.location.state;
        const { numero } = this.props.location.state;


        this.setState({
            name: firstName,
            last_name: lastName,
            age: age,
            poste: poste,
            height: height,
            weight: weight,
            image: image,
            yard: yard,
            tackle: tackle,
            int: intPlayer,
            numero: numero,
        })


    }
    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {

        return (
            <Container className="container_profil_joueur">
                <Row className="ligne_profil_joueur">

                    <Col>
                        <img className="image_profil_joueur" src={this.state.image} alt="photo_joueur" />
                    </Col>

                    <Col>
                        <h2 className="nom_joueur">#{this.state.numero} {this.state.name} {this.state.last_name}</h2>
                        <h4 className="poste_joueur">{this.state.poste}</h4>
                        <Table borderless className="tableau_stats">
                            <tbody>
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
                    <Col className="bouton_stats">
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
                </Row>
            </Container>
        );
    }
}

export default ProfilJoueur;