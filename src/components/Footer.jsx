import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Footer.css';

class Footer extends Component {
    render() { 
        return (
            <Container fluid className="footer">
                <Row className="ligne_section_footer">
                    <Col md className="lien_section_footer">
                        <p></p>
                    </Col>
                    <Col md className="lien_section_footer">
                        <p></p>
                    </Col>
                    <Col md className="lien_section_footer">
                        <p></p>
                    </Col>
                    <Col className="lien_section_footer">
                        <p></p>
                    </Col>
                    <Col md className="lien_section_footer">
                        <img src="https://i.imgur.com/JXboZ1e.png" alt="logo" />
                    </Col>
                    <Col md className="lien_section_footer">
                        <a href="https://www.facebook.com/MiamiDolphins/" target="_blank"><img className="logo_reseau" src="https://res.cloudinary.com/dzgbfpr45/image/upload/v1539184102/projet2%20-%20R%C3%A9%27action/logo_facebook.png" alt="logo"></img></a>
                    </Col>
                    <Col md className="lien_section_footer">
                        <a href="https://twitter.com/miamidolphins" target="_blank"><img className="logo_reseau" src="https://res.cloudinary.com/dzgbfpr45/image/upload/v1539184101/projet2%20-%20R%C3%A9%27action/logo_twitter.png" alt="logo"></img></a>
                    </Col>
                    <Col md className="lien_section_footer">
                        <a href="https://www.instagram.com/miamidolphins/?hl=fr" target="_blank"><img className="logo_reseau" src="https://res.cloudinary.com/dzgbfpr45/image/upload/v1539184102/projet2%20-%20R%C3%A9%27action/logo_insta.png" alt="logo"></img></a>
                    </Col>
                    <Col md className="lien_section_footer">
                        <a href="https://www.youtube.com/channel/UCHUSfEzpSRkUUsRkk_aJwDw" target="_blank"><img className="logo_reseau" src="https://res.cloudinary.com/dzgbfpr45/image/upload/v1539184941/projet2%20-%20R%C3%A9%27action/1280px-YouTube_full-color_icon__2017_.svg.png" alt="logo"></img></a>
                    </Col>
                </Row>
            </Container>
          );
    }
}
 
export default Footer;