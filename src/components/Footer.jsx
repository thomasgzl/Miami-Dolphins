import React, { Component } from 'react';
import {  Form, FormGroup, Label, Input, FormText, Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Row, Col } from 'reactstrap';
import './Footer.css';


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          modal2: false
        };

        this.toggle = this.toggle.bind(this);
        this.toggle2 = this.toggle2.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggle2() {
    this.setState({
      modal2: !this.state.modal2
    });
  }

    render() { 
        return (
            
            <Container fluid className="footer">

                <Row className="ligne_section_footer">
                    <Col lg="2" md="4" sm="2" xs="3" className="lien_section_footer logoFooter">
                        <img src="https://i.imgur.com/x6fnJED.png" alt="logo" />
                    </Col>

                    <Col lg="2" md="4" sm="2" xs="3" className="lien_section_footer">
                            <div>
        <Button className="mentions" onClick={this.toggle}>Mentions légales</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>MENTIONS LÉGALES</ModalHeader>
          <ModalBody>
MIAMI DOLPHINS est une société anonyme sportive professionnelle (SASP) à Conseil d’administration affiliée à la Fédération Française de Football sous le numéro 500247, au capital de 24.000.000 euros, dont le siège social est situé au 24, rue du Commandant Guilbaud - 75016 PARIS, immatriculée au RCS de PARIS sous le numéro 382 357 721 et n° TVA -FR 63 382 357 721 Téléphone : 01 47 43 71 71 (ci-après « MIAMI DOLPHINS ») ;

MIAMI DOLPHINS est un club de football professionnel prestigieux, fort d’un palmarès national et européen (ci-après « le Club »). Il a pour cœur de métier la compétition sportive à travers ses équipes masculine et féminine, les activités de vente de billets, de produits de sponsoring, de produits d’hospitalité de produits dérivés et de produits audiovisuels.

Le site Internet www.miami-dolphins.fr(ci-après « le Site »), qui est la propriété du MIAMI DOLPHINS , a pour objet de présenter des informations et des articles sur le Club de football masculin et féminin, l’équipe Dolphins eSports ainsi que les différentes offres de produits marketing,sponsoring, publicité, billetterie, hospitalités et loges proposés par le Hard Rock Stadium ou tout autre stade où joue ces équipes, et de permettre des interactions entre les supporters du Club grâce aux fonctionnalités communautaires.

Directeur de la publication : M. Nasser AL-KHELAIFI
Responsable de la rédaction : Mme Alissone NEYRET 
Responsable éditorial : M. Christophe PETIT
Bureaux administratifs : 18 Rue de la Garignette 33000 Bordeaux
Siège social: 24 rue du Commandant-Guilbaud 75016 PARIS.

Habillage: © Team Ré'action


          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Retour</Button>
          </ModalFooter>
        </Modal>
      </div>
      </Col>

      <Col lg="2" md="4" sm="2" xs="3" className="lien_section_footer">
         <div>
        <Button className="mentions" onClick={this.toggle2}>Contact</Button>
        <Modal isOpen={this.state.modal2} toggle={this.toggle2} className={this.props.className}>
          <ModalHeader toggle={this.toggle2}>CONTACTEZ-NOUS</ModalHeader>
          <ModalBody>

          <Form>
        <FormGroup>
          <Input type="email" name="email" id="exampleEmail" placeholder="E-mail" />
        </FormGroup>
        <FormGroup>
          <Input type="name" name="name" id="exampleName" placeholder="Nom" />
        </FormGroup>
        <FormGroup>
          <Input type="textarea" name="text" id="exampleText" placeholder="Message" />
        </FormGroup>
            <FormGroup row>
          <Col sm={{ size: 10 }}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox2" />{' '}
                S'abonner à la Newsletter
              </Label>
            </FormGroup>
            </Col>
        </FormGroup>
      </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle2}>Retour</Button>
            <Button color="primary" onClick={this.toggle2}>Envoyer</Button>
          </ModalFooter>
        </Modal>
      </div>
      </Col>

                    <Col lg="2" md="2" sm="2" xs="2" className="lien_section_footer">
                        <a href="https://www.facebook.com/MiamiDolphins/" target="_blank"><img className="logo_reseau_fb" src="https://i.imgur.com/jrjKEda.png" alt="logo"></img></a>
                    </Col>
                    <Col lg="2" md="2" sm="2" xs="2" className="lien_section_footer">
                        <a href="https://twitter.com/miamidolphins" target="_blank"><img className="logo_reseau_twitter" src="https://i.imgur.com/5CN4Mu7.png" alt="logo"></img></a>
                    </Col>
                    <Col lg="2" md="2" sm="2" xs="2" className="lien_section_footer">
                        <a href="https://www.instagram.com/miamidolphins/?hl=fr" target="_blank"><img className="logo_reseau_insta" src="https://i.imgur.com/jIz2oU2.png" alt="logo"></img></a>
                    </Col>

                </Row>
            </Container>
          );
    }
}
 
export default Footer;