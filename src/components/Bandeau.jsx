import React,{Component} from 'react';
import './Bandeau.css';
import { Container, Row, Col } from 'reactstrap';
import Example from './CarouselBandeau';
 

class Bandeau extends Component{
    render(){
        return(
            <Container fluid >
                <Row  className="Bandeau">
                    <Col lg="3" xs="12" className="Bandeau_calendrier">
                        <Row  >
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
                                <a href="/Calendrier"><img className="boutonAdd" src="https://i.imgur.com/T2Y9Mcw.png" alt="boutonAdd"/> </a>     
                            </Col>
                        </Row>
                    </Col>
                    <Col lg="9" className="Bandeau_sponsors" >
                        <Example/> 
                    </Col>
                
                </Row>
            </Container>
        )
    }
}

export default Bandeau;