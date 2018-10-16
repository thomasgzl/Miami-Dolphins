import React,{Component} from 'react';
import './Bandeau.css';
import { Container, Row, Col } from 'reactstrap';
import Example from './CarouselBandeau';
 

class Bandeau extends Component{
    render(){
        return(
            <Container fluid>
                <Row  className="Bandeau">
                    <Col lg="3" xs="12" className="Bandeau_calendrier">
                        <Row  >
                            <Col >
                                <h6 className="m-0">27</h6>     
                                <p>NOV.</p>  
                            </Col>
                            <Col >
                                <p className="m-0 domicile">DOLPHINS</p>  
                                <p>SEAHAWKS</p>
                            </Col>
                            <Col >
                                <h3>20:30</h3>
                            </Col>
                            <Col >
                            <button className="bouton"> + </button>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg="9" className="Bandeau_sponsors" >
                    </Col>
                
                </Row>
            </Container>
        )
    }
}

export default Bandeau;