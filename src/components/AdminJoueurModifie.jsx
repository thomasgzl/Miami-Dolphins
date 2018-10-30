import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';
import './AdminJoueurs.css';
import { NavLink } from 'react-router-dom';


class AdminJoueurModifie extends Component {
    constructor(props) {
        super(props);
        this.state = {

            firstName: "",
            lastName: "",
            age: 0,
            poste: "",
            height: 0,
            weight: 0,
            image: "",
            yard: 0,
            tackle: 0,
            intPlayer: 0,
            numero: 0,
            id: 0
        };


        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.getModifierPlayer = this.getModifierPlayer.bind(this);

    }

    //fonction qui rappatrie nos propriétés via le navlink parent
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
        const { id } = this.props.location.state;


        this.setState({
            firstName: firstName,
            lastName: lastName,
            age: age,
            poste: poste,
            height: height,
            weight: weight,
            image: image,
            yard: yard,
            tackle: tackle,
            intPlayer: intPlayer,
            numero: numero,
            id: id,


        })

    }
    submitForm(current) {
        current.preventDefault();
    }
    // fonction qui met a jour le state suivant ce qu'on rentre dans les input 
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    //fontion pour modifier le joueur existant
    getModifierPlayer(id) {
        const config = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
        };

        const url = "http://92.175.11.66:3000/reaction/api/joueurs";

        fetch(url + '/' + id, config)
            .then(res => res.text())
            .then(res => {
                if (res.error) {
                    alert(res.error);
                }
                else {
                    alert(`Joueur modifié!`);
                }
            })
            .catch(e => {
                console.error(e);
                alert('Erreur lors de la modification d\'un joueur');
            })

    }





    render() {
        return (

            <Form className="AdminJoueurs" onSubmit={this.submitForm}>
                <div className="TitrePoste">
                    <h2 className="titre_poste_dynamique">Modification Joueurs</h2>
                </div>
                <div className="Button">
                    <Button onClick={() => this.getModifierPlayer(this.state.id)} color="success">Ajouter</Button>

                    <NavLink to="/adminequipe/" className="linkNav">
                        <Button color="secondary">Retour</Button>
                    </NavLink>
                </div>
                <Row className="LinePlayer" >
                    <Col xs="12" sm="6" md="5" className="Colonne-player">
                        <FormGroup>
                            <Label for="exampleFile">Nom:</Label>
                            <Input
                                type="text"
                                name="lastName"
                                id="lastName"
                                placeholder="Nom "
                                onChange={this.onChange}
                                value={this.state.lastName} />
                        </FormGroup>
                    </Col>
                    <Col xs="12" sm="6" md="5" className="Colonne-player">

                        <FormGroup>
                            <Label for="exampleFile">Prénom:</Label>
                            <Input
                                type="text"
                                name="firstName"
                                id="firstName"
                                placeholder="Prenom "
                                onChange={this.onChange}
                                value={this.state.firstName} />

                        </FormGroup>
                    </Col>
                    <Col xs="12" sm="6" md="5" className="Colonne-player">

                        <FormGroup>
                            <Label for="exampleFile">Poste:</Label>
                            <Input
                                type="text"
                                name="poste"
                                id="poste"
                                placeholder="Poste"
                                onChange={this.onChange}
                                value={this.state.poste} >

                            </Input>
                        </FormGroup>
                    </Col>
                    <Col xs="12" sm="6" md="5" className="Colonne-player">
                        <FormGroup>
                            <Label for="exampleFile">Taille:</Label>
                            <Input
                                type="text"
                                name="height"
                                id="height"
                                placeholder="Taille"
                                onChange={this.onChange}
                                value={this.state.height} />
                        </FormGroup>
                    </Col>
                    <Col xs="12" sm="6" md="5" className="Colonne-player">
                        <FormGroup>
                            <Label for="exampleFile">Age:</Label>
                            <Input
                                type="text"
                                name="age"
                                id="age"
                                placeholder="Age"
                                onChange={this.onChange}
                                value={this.state.age} />
                        </FormGroup>
                    </Col>
                    <Col xs="12" sm="6" md="5" className="Colonne-player">
                        <FormGroup>
                            <Label for="exampleFile">Poids:</Label>
                            <Input
                                type="text"
                                name="weight"
                                id="weight"
                                placeholder="Poids"
                                onChange={this.onChange}
                                value={this.state.weight} />
                        </FormGroup>
                    </Col>
                    <Col xs="12" sm="6" md="5" className="Colonne-player">
                        <FormGroup>
                            <Label for="exampleFile">Yard gagné:</Label>
                            <Input
                                className="Stats"
                                type="text"
                                name="yard"
                                id="yard"
                                placeholder="Yard"
                                onChange={this.onChange}
                                value={this.state.yard} />
                        </FormGroup>
                    </Col>
                    <Col xs="12" sm="6" md="5" className="Colonne-player">
                        <FormGroup>
                            <Label for="exampleFile">Numero:</Label>
                            <Input
                                className="Stats"
                                type="text"
                                name="numero"
                                id="numero"
                                placeholder="Numero"
                                onChange={this.onChange}
                                value={this.state.numero} />
                        </FormGroup>
                    </Col>
                    <Col xs="12" sm="6" md="5" className="Colonne-player">
                        <FormGroup>
                            <Label for="exampleFile">Plaquage:</Label>
                            <Input
                                className="Stats"
                                type="text"
                                name="tackle"
                                id="tackle"
                                placeholder="Tacles"
                                onChange={this.onChange}
                                value={this.state.tackle} />
                        </FormGroup>
                    </Col>
                    <Col xs="12" sm="6" md="5" className="Colonne-player">
                        <FormGroup>
                            <Label for="exampleFile">Interception:</Label>
                            <Input
                                className="Stats"
                                type="text"
                                name="intPlayer"
                                id="intPlayer"
                                placeholder="Interception"
                                onChange={this.onChange}
                                value={this.state.intPlayer} />
                        </FormGroup>
                    </Col>
                    <Col xs="12" sm="6" md="5" className="Colonne-player">
                        <FormGroup>
                            <Label for="exampleFile">Adresse de l'image:</Label>
                            <Input
                                type="text"
                                name="image"
                                id="image"
                                placeholder="URL de l'image"
                                onChange={this.onChange}
                                value={this.state.image} />
                            <FormText color="muted">
                                Ajouter un portrait du joueur.
                         </FormText>
                        </FormGroup>
                    </Col>

                </Row>


            </Form>
        );
    }
}
export default AdminJoueurModifie;