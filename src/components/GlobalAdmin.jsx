import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import { NavLink } from 'react-router-dom';
import "./GlobalAdmin.css";

const GlobalAdmin = props => {
  return (
    <Container fluid>
      <div className="text-center">
        <h1 className="admin_titre">
          <strong>Mode Administrateur</strong>
        </h1>
      </div>
      <Row className="admin_cards">
        <Col lg={4}>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://i.imgur.com/LY6sl6s.png"
              alt="Card image cap"
            />
            <CardBody className="card_body">
              <CardTitle className="card_title">
                <strong>Calendrier</strong>
              </CardTitle>
              <NavLink className="bouton_navlink" to="/admincalendrier"><Button>Accéder</Button></NavLink>
            </CardBody>
          </Card>
        </Col>
        <Col lg={4}>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://i.imgur.com/xSDuEjF.png"
              alt="Card image cap"
            />
            <CardBody className="card_body">
              <CardTitle className="card_title">
                <strong>News</strong>
              </CardTitle>
              <NavLink className="bouton_navlink" to="/admin-news"><Button>Accéder</Button></NavLink>
            </CardBody>
          </Card>
        </Col>
        <Col lg={4}>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://i.imgur.com/ufIsy2e.png"
              alt="Card image cap"
            />
            <CardBody className="card_body">
              <CardTitle className="card_title">
                <strong>Equipe</strong>
              </CardTitle>
              <NavLink className="bouton_navlink" to="/adminequipe"><Button>Accéder</Button></NavLink>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default GlobalAdmin;
