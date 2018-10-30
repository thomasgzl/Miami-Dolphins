import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { NavLink } from 'react-router-dom';
import "./NewsZoom.css";

class NewsZoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newszoom: [],
      nextID: '',
    };
  }

  componentDidMount() {
    fetch(
      `http://92.175.11.66:3000/reaction/api/news/${this.props.match.params.id}`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          newszoom: data,
        });
      });
  }
  render() {
    return (
      <div className="backgroundNewsZoom">
        <Container fluid>
          <Row className="background_news_zoom">
            <Col lg={5} sm={12}>
              <img className="image1" src={this.state.newszoom.image} alt="" />
              <h3 className="flyM">
                <strong>{this.state.newszoom.titre}</strong>
              </h3>
            </Col>

            <Col lg={7} sm={12} className="image2">
              <Row>
                <p className="paragraphe_news">{this.state.newszoom.texte}</p>
              </Row>
              <Row>
                <NavLink className="button_news_zoom" to="/News"><Button className="btn_accueil">Accueil News</Button></NavLink>
                
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


export default NewsZoom;
