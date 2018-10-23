import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import './AdminNews.css';


class AdminNews extends Component {


    supprimer_news () {
        if (window.confirm("Etes-vous sûr de vouloir supprimer cette news ?") === true) {
            alert("La news a bien été supprimée")
        } else {
        }
    }

    ajouter_news () {
        alert("La news a bien été ajoutée")
    }

    modifier_news () {
        alert("La news a bien été modifiée")
    }

    render() {
        return (
            <Container className="fond_admin_news">
                <Row className="formulaire_news">
                    <Col>
                        <Form>
                            <FormGroup>
                                <Label for="titre">Titre</Label>
                                <Input type="email" name="titre" id="titre" placeholder="titre de l'article" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="Text_news">Article</Label>
                                <Input type="textarea" name="text" id="TextNews" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="Image_news">Image</Label>
                                <Input type="file" name="file" id="exampleFile" />
                                <FormText color="muted">
                                    Sélectionner l'image
                            </FormText>
                            </FormGroup>
                            <FormGroup>
                                <Button onClick={this.ajouter_news}>Ajouter</Button>
                                <Button className="bouton_modifier" onClick={this.modifier_news}>Modifier</Button>
                                <Button className="bouton_supprimer" onClick={this.supprimer_news}>Supprimer</Button>
                            </FormGroup>
                        </Form>
                    </Col>

                    <Col>
                        <FormGroup>
                            <Label for="news">News</Label>
                            <Input type="select" name="selectMulti" id="selectMultiNews" multiple>
                                <option>News 1</option>
                                <option>News 2</option>
                                <option>News 3</option>
                                <option>News 4</option>
                                <option>News 5</option>
                                <option>News 6</option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default AdminNews;