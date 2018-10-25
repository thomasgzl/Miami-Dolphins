import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './AdminJoueurs.css';
import { NavLink } from 'react-router-dom';

class AdminJoueurNew extends Component {
  constructor(props) {
    super(props);
    this.state = {

      firstName: "",
      lastName: "",
      age: 0,
      poste: "",
      numero: 0,
      height: 0,
      weight: 0,
      image: "",
      yard: 0,
      tackle: 0,
      intPlayer: 0,

    }

    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.getSendPlayer = this.getSendPlayer.bind(this);

  }

  submitForm(current) {
    current.preventDefault();
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  getSendPlayer() {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    };

    const url = "http://92.175.11.66:3000/reaction/api/joueurs";

    fetch(url, config)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          alert(res.error);
        }
        else {
          alert(`Joueur Envoyé avec l'ID ${res}!`);
        }
      })
      .catch(e => {
        console.error(e);
        alert('Erreur lors de l\'ajout d\'un joueur');
      })

  }





  render() {
    return (


      <Form className="AdminJoueurs" onSubmit={this.submitForm}>
        <div className="TitrePoste">
          <h2 className="titre_poste_dynamique">Création de Joueurs</h2>
        </div>
        <div className="Button">
          <Button onClick={this.getSendPlayer} color="success">Ajouter</Button>
          <NavLink to="/adminequipe/" className="linkNav">
            <Button color="secondary">Retour</Button>
          </NavLink>
        </div>

        <FormGroup>
          <Input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Nom "
            onChange={this.onChange}
            value={this.state.lastName} />
        </FormGroup>

        <FormGroup>
          <Input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Prenom "
            onChange={this.onChange}
            value={this.state.firstName} />
        </FormGroup>

        <FormGroup>
          <Input
            type="text"
            name="poste"
            id="poste"
            placeholder="Poste"
            onChange={this.onChange}
            value={this.state.poste} >

          </Input>
        </FormGroup>

        <FormGroup>
          <Input
            type="text"
            name="height"
            id="height"
            placeholder="Taille"
            onChange={this.onChange}
            value={this.state.height} />
        </FormGroup>

        <FormGroup>
          <Input
            type="text"
            name="age"
            id="age"
            placeholder="Age"
            onChange={this.onChange}
            value={this.state.age} />
        </FormGroup>

        <FormGroup>
          <Input
            type="text"
            name="weight"
            id="weight"
            placeholder="Poids"
            onChange={this.onChange}
            value={this.state.weight} />
        </FormGroup>

        <FormGroup>
          <Input
            className="Stats"
            type="text"
            name="yard"
            id="yard"
            placeholder="Yard"
            onChange={this.onChange}
            value={this.state.yard} />
        </FormGroup>

        <FormGroup>
          <Input
            className="Stats"
            type="text"
            name="numero"
            id="numero"
            placeholder="Numero"
            onChange={this.onChange}
            value={this.state.numero} />
        </FormGroup>

        <FormGroup>
          <Input
            className="Stats"
            type="text"
            name="tackle"
            id="tackle"
            placeholder="Tacles"
            onChange={this.onChange}
            value={this.state.tackle} />
        </FormGroup>

        <FormGroup>
          <Input
            className="Stats"
            type="text"
            name="intPlayer"
            id="intPlayer"
            placeholder="Interception"
            onChange={this.onChange}
            value={this.state.intPlayer} />
        </FormGroup>

        <FormGroup>
          <Label for="exampleFile">Photo</Label>
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

      </Form>
    );
  }
}

export default AdminJoueurNew;
