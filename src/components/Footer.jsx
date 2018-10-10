import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Footer.css';

class Footer extends Component {
    render() { 
        return (
            <Container fluid className="footer">
                <Row>
                    <Col className="lien">
                        <p></p>
                    </Col>
                    <Col className="lien">
                        <p></p>
                    </Col>
                    <Col className="lien">
                        <p></p>
                    </Col>
                    <Col className="lien">
                        <img src="https://i.imgur.com/RBbGC0P.png" alt="logo" />
                    </Col>
                    <Col className="lien">
                        <p></p>
                    </Col>
                    <Col className="lien">
                        <p></p>
                    </Col>
                    <Col className="lien">
                        <p></p>
                    </Col>
                </Row>
            </Container>
          );
    }
}
 
export default Footer;