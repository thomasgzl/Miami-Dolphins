import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Home.css';
import CarouselHome from './CarouselHome';

class Home extends Component {
    render() { 
        return ( 
        <Col lg="7" className="carouselNewsHome" >
            <CarouselHome /> 
        </Col>
         );
    }
}
 

export default Home;