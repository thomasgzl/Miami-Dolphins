import React, { Component } from "react";
import "./Historique.css";
import HistoryCard from "./HistoryCard";
import { Container, Row, Col, Button } from "reactstrap";

const data = {
  historique: [
    {
      _id: "01",
      index: 0,
      date: "1953",
      texte: "Premier match face aux Patriots",
      titre: "Cette annee là",
      image:
        "https://image.noelshack.com/fichiers/2018/42/2/1539713042-historique4.jpg"
    },
    {
      _id: "02",
      index: 1,
      date: "1963",
      texte: "On a gagné la coupe d'Amérique",
      titre: "L'année la plus froide de l'histoire",
      image:
        "https://image.noelshack.com/fichiers/2018/42/2/1539713042-historique3.jpeg"
    },
    {
      _id: "03",
      index: 2,
      date: "1993",
      texte: "Une année desastreuse avec la perte de notre meilleur Quaterback",
      titre: "Une année catastrophique",
      image:
        "https://image.noelshack.com/fichiers/2018/42/2/1539713042-historique5.jpg"
    },
    {
      _id: "04",
      index: 3,
      date: "1933",
      texte: "On a atteint des records de température",
      titre: "C'était la canicule",
      image:
        "https://image.noelshack.com/fichiers/2018/42/2/1539713042-historique2.jpeg"
    },
    {
      _id: "05",
      index: 4,
      date: "1960",
      texte: "On a terminé premier pour la 3ieme année consécutive",
      titre: "Une année de folie",
      image:
        "https://image.noelshack.com/fichiers/2018/42/2/1539713042-historique1.jpeg"
    },
    {
      _id: "06",
      index: 5,
      date: "2003",
      texte: "300 millions d'euros pour un transfert historique",
      titre: "Le plus gros transfert de l'Histoire",
      image:
        "https://image.noelshack.com/fichiers/2018/42/2/1539713042-historique6.jpg"
    }
  ]
};

class Historique extends Component {
  constructor(props) {
    super(props);
    this.onHoverNext = this.onHoverNext.bind(this);
    this.onHoverNextOut = this.onHoverNextOut.bind(this);
    this.onHoverPrev = this.onHoverPrev.bind(this);
    this.onHoverPrevOut = this.onHoverPrevOut.bind(this);
    this.state = {
      historique: data.historique,
      property: data.historique[0],
      pee: ""
    };
  }

  nextProperty = () => {
    const newIndex = this.state.property.index + 1;
    this.setState({
      property: data.historique[newIndex]
    });
  };

  prevProperty = () => {
    const newIndex = this.state.property.index - 1;
    this.setState({
      property: data.historique[newIndex]
    });
  };

  onHoverNext() {
    if (
      this.state.property.index === 0 ||
      this.state.property.index === 1 ||
      this.state.property.index === 2 ||
      this.state.property.index === 3 ||
      this.state.property.index === 4
    ) {
      const newIndex = this.state.property.index + 1;
      setTimeout(() => {
        this.setState({ property: data.historique[newIndex] });
      }, 500);
    }
  }

  onHoverNextOut() {
    clearInterval(this.state.pee);
  }

  onHoverPrev() {
    if (
      this.state.property.index === 1 ||
      this.state.property.index === 2 ||
      this.state.property.index === 3 ||
      this.state.property.index === 4 ||
      this.state.property.index === 5
    ) {
      const newIndex = this.state.property.index - 1;
      setTimeout(() => {
        this.setState({ property: data.historique[newIndex] });
      }, 500);
    }
  }

  onHoverPrevOut() {
    clearInterval(this.state.pee);
  }

  render() {
    const { historique, property } = this.state;
    return (
      <Container fluid>
        <div className="backgroundHistorique">
          <Row className="Historique-page">
          
            <Col lg={3} md={3} className="Historique-texteGauche">
              <p>
                Aucun club de football professionnel de l’histoire n’a jamais
                progressé plus rapidement que les Dolphins de Miami au cours de
                la période comprise entre 1966 et 1972. En 1966, ils ont fait
                leur début dans la ligue professionnel de football en tant que
                neuvième membre de la Ligue américaine de football. Six ans plus
                tard, Miami devenait la seule équipe de la Ligue nationale de
                football à enregistrer une saison parfaite ...
              </p>
            </Col>

            <Col lg={8} md={8}className="Historique-carousel">
              <h1 className="Historique-titre">L'historique du club</h1>
              
              <Row className="rowCarouselImage">
                <Col lg={2} md={3}>
                  <div className="allerAgauche">
                    <div
                      onMouseMove={() => this.onHoverPrev()}
                      onMouseOut={() => this.onHoverPrevOut()}
                    >
                      <img
                        src="http://image.noelshack.com/fichiers/2018/43/3/1540392522-pngeeeeeeee.png"
                        width="100px"
                        height="300px"
                        alt="img1"
                      />
                    </div>
                  </div>
                </Col>
                <Col lg={8} md={6}>
                  <div className="global-slider">
                    <div
                      className={`Card-slider active-slide-${property.index}`}
                    >
                      <div
                        className="Card-slider-wrapper"
                        style={{
                          transform: `translateX(-${property.index *
                            (100 / historique.length)}%)`
                        }}
                      >
                        {historique.map(property => (
                          <HistoryCard key={property._id} property={property} />
                        ))}
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={2} md={3}>
                  <div className="allerAdroite">
                    <div
                      onMouseMove={() => this.onHoverNext()}
                      onMouseOut={() => this.onHoverPrevOut()}
                    >
                      <img
                        src="http://image.noelshack.com/fichiers/2018/43/3/1540392522-pngeeeeeeee.png"
                        width="100px"
                        height="300px"
                      />
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="BoutonsPrevNextHistorique">
                <Button
                  className="boutonsPrev"
                  onClick={() => this.prevProperty()}
                  disabled={property.index === 0}
                >
                  &larr;
                </Button>
                <Button
                  className="boutonsNext"
                  onClick={() => this.nextProperty()}
                  disabled={property.index === data.historique.length - 1}
                >
                  &rarr;
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default Historique;
