import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Home.css';
import CarouselHome from './CarouselHome';

class Home extends Component {
    render() { 
        return ( 
        <div class="home-bg">
        <Row>
        <Col lg="7" className="carouselNewsHome" >
            <CarouselHome /> 
        </Col>
        </Row>
        </div>
         );
    }
}
 

export default Home;