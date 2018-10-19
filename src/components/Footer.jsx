import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Footer.css';

class Footer extends Component {
    render() { 
        return (
            <Container fluid className="footer">
                <Row className="ligne_section_footer">
                    <Col lg="4" md="4" sm="4" className="lien_section_footer">
                        <img src="https://i.imgur.com/JXboZ1e.png" alt="logo" />
                    </Col>
                    <Col lg="2" md="2" sm="2" className="lien_section_footer">
                        <a href="https://www.facebook.com/MiamiDolphins/" target="_blank"><img className="logo_reseau_fb" src="https://i.imgur.com/jrjKEda.png" alt="logo"></img></a>
                    </Col>
                    <Col lg="2" md="2" sm="2" className="lien_section_footer">
                        <a href="https://twitter.com/miamidolphins" target="_blank"><img className="logo_reseau_twitter" src="https://i.imgur.com/5CN4Mu7.png" alt="logo"></img></a>
                    </Col>
                    <Col lg="2" md="2" sm="2" className="lien_section_footer">
                        <a href="https://www.instagram.com/miamidolphins/?hl=fr" target="_blank"><img className="logo_reseau_insta" src="https://i.imgur.com/jIz2oU2.png" alt="logo"></img></a>
                    </Col>
                    <Col lg="2" md="2" sm="2" className="lien_section_footer">
                        <a href="https://www.youtube.com/channel/UCHUSfEzpSRkUUsRkk_aJwDw" target="_blank"><img className="logo_reseau_youtube" src="https://i.imgur.com/UDBghCh.png" alt="logo"></img></a>
                    </Col>
                </Row>
            </Container>
          );
    }
}
 
export default Footer;