import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './AdminJoueurs.css';

export default class AdminJouers extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Form className="AdminJoueurs">

      <ButtonDropdown className="boutonJoueurs" isOpen={this.state.dropdownOpen} toggle={this.toggle} size="sm" block>
        <DropdownToggle caret>
          Robert Barakat
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Bobby McCain</DropdownItem>
          <DropdownItem>Kenyan Drake</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>

        <FormGroup>
          <Input type="name" name="name" id="exampleName" placeholder="Nom / Prénom" />
        </FormGroup>
        <FormGroup>
          <Input type="select" name="select" id="exampleSelect">
            <option>Poste</option>
            <option>Quarterback</option>
            <option>Running Back</option>
            <option>Wide receiver</option>
            <option>Tight end</option>
            <option>Guard</option>
            <option>Tackle</option>
            <option divider />
            <option>Defensive End</option>
            <option>Defensive Tackle</option>
            <option>Linebacker</option>
            <option>Cornerback</option>
            <option>Safety</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Input type="yards" name="experience" id="Experience" placeholder="Éxperience" />
        </FormGroup>
        <FormGroup>
          <Input type="taille" name="taille" id="taille" placeholder="Taille" />
        </FormGroup>
        <FormGroup>
          <Input type="age" name="age" id="age" placeholder="Age" />
        </FormGroup>
        <FormGroup>
          <Input type="poids" name="poids" id="poids" placeholder="Poids" />
        </FormGroup>

        <FormGroup>
          <Input className="Stats" type="yards" name="yards" id="yards" placeholder="Yards" />
        </FormGroup>
        <FormGroup>
          <Input className="Stats" type="interceptions" name="interceptions" id="interceptions" placeholder="Interceptions" />
        </FormGroup>
        <FormGroup>
          <Input className="Stats" type="tacles" name="tacles" id="tacles" placeholder="Tacles" />
        </FormGroup>
        <FormGroup>
          <Input className="Stats" type="touchdown" name="touchdown" id="touchdown" placeholder="Touchdowns" />
        </FormGroup>

        <FormGroup>
          <Label for="exampleFile">Photo</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            Ajouter un portrait du joueur.
          </FormText>
        </FormGroup>
        <Button outline color="success">Ajouter</Button>
        <Button outline color="warning">Modifier</Button>
        <Button outline color="danger">Supprimer</Button>

      </Form>
    );
  }
}