import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./NewsZoom.css";
import { NavLink } from "react-router-dom";

const dataNewsZoom = [
  {id:"0001",
  image:"https://i.imgur.com/M86EaHm.png",
  title:"Bobby McCain : l'homme volant !",
  text:"Bobby McCain le récidiviste. On joue la 19 ème minute quand Bobby McCain s'envole litéralement par dessus la défense des Broncos pour inscrire le premier Touchdown de la partie. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.",},
  
  {id:"0002",
  image:"https://i.imgur.com/wsdusDh.png",
  title:"Huitième Touchdown pour Kenyan Drake",
  text:"Kenyan Drake enflamme les statistiques de la ligue cette saison avec déjà son huitième Touchdown.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.",},
  
  {id:"0003",
  image:"https://i.imgur.com/NFzt0pM.png",
  title:"Le Hard Rock Stadium fait peau neuve !",
  text:"Le Hard Rock Stadium en travaux durant l'inter saison, va enfin pouvoir montrer ses améliorations à ses supporters. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.",},
  
  {id:"0004",
  image:"https://i.imgur.com/NLqgMAR.png",
  title:"Albert Wilson, des performances en déclin",
  text:"Albert Wilson des performances qui font jaser en ce début de saison. L'homme fort de l'exercice précédent est en difficulté. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.",},
  
  {id:"0005",
  image:"https://i.imgur.com/XxqIdvk.png",
  title:"Adam Gase, le nouveau coach !",
  text:"Parmis les nouveautés de cette saison à venir c'est peut être la plus excitante, l'arrivée du nouveau coach qui sucite quelques intérrogations chez nos supporters. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.",},
  
  {id:"0006",
  image:"https://i.imgur.com/YkDzk5P.png",
  title:"Une équipe prête au combat !",
  text:"La pré-saison bat son plein sous le soleil de la floride. Alors que les joueurs travaillent dur pour être en bonne condition. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.",},
]

class NewsZoom extends Component {
  constructor(props) {
    super(props)
    this.state= {newszoom: dataNewsZoom}
  }

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col className="offset-lg-1" lg="6" md="6" sm="12">
              <img className="image1" src={this.state.newszoom[0].image} />
              <h3 className="flyM">
                <strong>{this.state.newszoom[0].title}</strong>
              </h3>
              <p className="paragraphe_news">{this.state.newszoom[0].text}</p>
             
            </Col>

            <Col lg="4" md="6" sm="12" className="image2">
              <h3 className="news_title1">
                <strong>Les dernières News</strong>
              </h3>
              <ul>
                <li className="liste_news">
                  <NavLink to={this.state.newszoom[1].title} className="navlink">
                    Huitième Touchdown pour Kenyan Drake
                  </NavLink>
                </li>
                <li className="liste_news">
                  <NavLink to="/newszoom02" className="navlink">
                    Le Hard Rock Stadium fait peau neuve !
                  </NavLink>
                </li>
                <li className="liste_news">
                  <NavLink to="/newszoom03" className="navlink">
                    Albert Wilson, des performances en déclin
                  </NavLink>
                </li>
                <li className="liste_news">
                  <NavLink to="/newszoom04" className="navlink">
                    Adam Mer-Gase, le nouveau coach !
                  </NavLink>
                </li>
                <li className="liste_news">
                  <NavLink to="/newszoom05" className="navlink">
                    Une équipe prête au combat !
                  </NavLink>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default NewsZoom;
