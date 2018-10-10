import React,{Component} from 'react';
import './Bandeau.css';
import { Container, Row, Col } from 'reactstrap';
import Example from './CarouselBandeau';
 

class Bandeau extends Component{
    render(){
        return(
            <Container fluid>
                <Row  className="Bandeau">
                    <Col lg="4" xs="12" className="Bandeau_calendrier" >
                        <Row>
                            <Col lg="3" xs="3">
                                <p>Date</p>     
                                <p>Mois</p>  
                            </Col>
                            <Col lg="3" xs="3">
                                <p>EquipeA</p>  
                                <p>EquipeB</p>
                            </Col>
                            <Col lg="3" xs="3">
                                <p>Heure</p>
                            </Col>
                            <Col lg="3" xs="3">
                                <a href="public/index.html"><img className="boutonAdd" src="http://image.noelshack.com/fichiers/2018/41/3/1539164977-boutonadd-1-1.png" alt="boutonAdd"/> </a>     
                            </Col>
                        </Row>
                    </Col>
                    <Col lg="8" className="Bandeau_sponsors">
                        <Example/> 
                    </Col>
                
                </Row>
            </Container>
        )
    }
}

export default Bandeau;