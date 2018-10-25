import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import './AdminNews.css';


class AdminNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: "",
            titre: "",
            texte: "",
          };
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value, });
    }

    submitForm(e) {
        e.preventDefault();
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
        };
        const url = "http://92.175.11.66:3000/reaction/api/news";
        
        fetch(url, config)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    alert(res.error);
                } else {
                    alert(`News ajoutée avec l\'ID ${res} !`);
                }
            }).catch(e => {
                console.error(e);
                alert('Erreur lors de l\'ajout d\'une news');
            });
    }

    render() {
        return (
            <Container className="fond_admin_news">
                <Row className="formulaire_news">
                    <Col>
                        <Form onSubmit={this.submitForm}>
                            <FormGroup>
                                <Label for="titre">Titre</Label>
                                <Input type="text" name="titre" id="titre" placeholder="titre de l'article" onChange={this.onChange} value={this.state.titre}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="Text_news">Article</Label>
                                <Input type="textarea" name="texte" id="texte" onChange={this.onChange} value={this.state.texte}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="Image_news">Image</Label>
                                <Input type="text" name="image" id="image" placeholder="url de l'image" onChange={this.onChange} value={this.state.image}/>
                            </FormGroup>
                            <FormGroup>
                                <Button type="submit" value="Ajouter" >Ajouter</Button>
                            </FormGroup>
                        </Form>
                    </Col>                  
                </Row>
            </Container>
        );
    }
}

export default AdminNews;