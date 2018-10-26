import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import {NavLink} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import './AdminNews.css';


class AdminNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            depart: {
                image: "",
                titre: "",
                texte: "",
            },
            modification: {
                image: "",
                titre: "",
                texte: "",
            },
            donneesNews: []
        };
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.onChangeModif = this.onChangeModif.bind(this);
    }

    onChange(e) {
        let obj = this.state.depart;
        obj[e.target.name] = e.target.value
        this.setState(obj);
        console.log(obj);
    }

    onChangeModif(e) {
        let obj = this.state.modification;
        obj[e.target.name] = e.target.value
        this.setState(obj);
        console.log(obj);
    };

    submitForm(e) {
        e.preventDefault();
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state.depart),
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
            })
            .then(() => fetch(url)
                .then(res => res.json())
                .then(res => this.setState({ donneesNews: res })))
    }

    deleteForm(item) {
        const url = "http://92.175.11.66:3000/reaction/api/news";
        fetch(url + '/' + item, {
            method: 'delete'
        })
            .then(response => response)
            .then(() => fetch("http://92.175.11.66:3000/reaction/api/news")
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        donneesNews: data,
                    });
                }))
            .then(() => fetch(url)
                .then(res => res.json())
                .then(res => this.setState({ donneesNews: res })
                ))
    }

    componentDidMount() {
        fetch("http://92.175.11.66:3000/reaction/api/news")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    donneesNews: data,
                });
            });
    }

    modifierForm(id) {
        fetch(`http://92.175.11.66:3000/reaction/api/news/${id}`)
            .then(response => response.json())
            .then(data => {
                let i = this.state.modification
                i.image = data.image;
                i.texte = data.texte;
                i.titre = data.titre;
                return this.setState({ modification: i })
            })
            this.setState({ idModifie: id });                   
    };

    updateData() {
        const url = "http://92.175.11.66:3000/reaction/api/news"
        fetch(url + '/' + this.state.idModifie, {
            method: 'put',
            body: JSON.stringify(this.state.modification),
            headers: { "Content-Type": "application/json" },
        })
            .then(body => body)
            .then(() => fetch(url)
                .then(res => res.json())
                .then(res => this.setState({ donneesNews: res })
                ))
    }

    render() {
        return (
            <Container className="fond_admin_news">
                <NavLink to="/admin/" className="linkNav">
                    <Button color="secondary">Retour</Button>
                </NavLink>
                <h1 className="titre_gestion">Gestion des news</h1>
                <Row>
                    <Col sm={12} lg={5} className="formulaire_news">
                        <Form onSubmit={this.submitForm}>
                            <h4 className="titre_form">Ajouter une news</h4>
                            <FormGroup>
                                <Label for="titre">Titre</Label>
                                <Input type="text" name="titre" id="titre" placeholder="titre de l'article" onChange={this.onChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="Text_news">Article</Label>
                                <Input type="textarea" name="texte" id="texte" onChange={this.onChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="Image_news">Image</Label>
                                <Input type="text" name="image" id="image" placeholder="url de l'image" onChange={this.onChange} />
                            </FormGroup>
                            <FormGroup>
                                <Button type="submit" value="Ajouter" className="ajouter" color="success">Ajouter</Button>
                            </FormGroup>
                        </Form>
                    </Col>

                    <Col sm={12} lg={5} className="formulaire_news">
                        <Form onSubmit={this.submitForm}>
                        <h4 className="titre_form">Modifier une news</h4>
                            <FormGroup>
                                <Label for="titre">Titre</Label>
                                <Input type="text" name="titre" id="titre" placeholder="titre de l'article" onChange={this.onChangeModif} value={this.state.modification.titre} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="Text_news">Article</Label>
                                <Input type="textarea" name="texte" id="texte" onChange={this.onChangeModif} value={this.state.modification.texte} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="Image_news">Image</Label>
                                <Input type="text" name="image" id="image" placeholder="url de l'image" onChange={this.onChangeModif} value={this.state.modification.image} />
                            </FormGroup>
                            <FormGroup>
                                <Button onClick={() => this.updateData()} className="valider">Valider</Button>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>

                <Row className="affichage_news">
                    <Col className="article">
                        {this.state.donneesNews.map((news) =>
                            <div>
                                <h3 className="titre_article">{news.titre}</h3>
                                <p className="texte_article">{news.texte}</p>
                                <img className="image_article" src={news.image} />
                                <Button className="supprimer" onClick={() => this.deleteForm(news.id)} color="danger">Supprimer</Button>
                                <Button className="modifier" onClick={() => this.modifierForm(news.id)}>Modifier</Button>
                            </div>)}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default AdminNews;