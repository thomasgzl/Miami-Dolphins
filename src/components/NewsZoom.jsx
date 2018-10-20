import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "./NewsZoom.css";

const dataNewsZoom = [
  {
    id: "0001",
    image: "https://i.imgur.com/M86EaHm.png",
    title: "Bobby McCain : l'homme volant !",
    text:
      "Bobby McCain le récidiviste. On joue la 19 ème minute quand Bobby McCain s'envole litéralement par dessus la défense des Broncos pour inscrire le premier Touchdown de la partie. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat."
  },

  {
    id: "0002",
    image: "https://i.imgur.com/wsdusDh.png",
    title: "Huitième Touchdown pour Kenyan Drake",
    text:
      "Kenyan Drake enflamme les statistiques de la ligue cette saison avec déjà son huitième Touchdown.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat."
  },

  {
    id: "0003",
    image: "https://i.imgur.com/NFzt0pM.png",
    title: "Le Hard Rock Stadium fait peau neuve !",
    text:
      "Le Hard Rock Stadium en travaux durant l'inter saison, va enfin pouvoir montrer ses améliorations à ses supporters. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat."
  },

  {
    id: "0004",
    image: "https://i.imgur.com/NLqgMAR.png",
    title: "Albert Wilson, des performances en déclin",
    text:
      "Albert Wilson des performances qui font jaser en ce début de saison. L'homme fort de l'exercice précédent est en difficulté. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat."
  },

  {
    id: "0005",
    image: "https://i.imgur.com/XxqIdvk.png",
    title: "Adam Gase, le nouveau coach !",
    text:
      "Parmis les nouveautés de cette saison à venir c'est peut être la plus excitante, l'arrivée du nouveau coach qui sucite quelques intérrogations chez nos supporters. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat."
  },

  {
    id: "0006",
    image: "https://i.imgur.com/YkDzk5P.png",
    title: "Une équipe prête au combat !",
    text:
      "La pré-saison bat son plein sous le soleil de la floride. Alors que les joueurs travaillent dur pour être en bonne condition. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat."
  }
];
let count = 0;
class NewsZoom extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      newszoom: dataNewsZoom[count]
    };
    this.nextNews = this.nextNews.bind(this);
    this.prevNews = this.prevNews.bind(this); 
  }
  nextNews() {
    if(count === 5){
      count=0; 
    }
    else{
      count = count+1
    }
    this.setState({newszoom: dataNewsZoom[count]})
  }

  prevNews() {
    if(count === 0){
      count=5; 
    }
    else{
      count = count-1
    }
    this.setState({newszoom: dataNewsZoom[count]})
  }

  render() {
    return (
      <div>
        <Container fluid>
          <Row className="background_news_zoom">
            <Col lg={5} md={6} sm={12}>
              <img className="image1" src={this.state.newszoom.image} alt="news1Illustration" />
              <h3 className="flyM">
                <strong>{this.state.newszoom.title}</strong>
              </h3>
            </Col>

            <Col lg={7} md={6} sm={12} className="image2">
              <Row>
                <p className="paragraphe_news">{this.state.newszoom.text}</p>
              </Row>
              <Row className="button_news_zoom">
                <Button className="button1" onClick={this.prevNews}>Précédent</Button>{" "}
                <Button className="button2" onClick={this.nextNews}>Suivant</Button>{" "}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default NewsZoom;
