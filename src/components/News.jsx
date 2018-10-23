import React, { Component } from 'react';
import { Card, CardTitle, CardImg, CardImgOverlay } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import './News.css';
import { NavLink } from 'react-router-dom';


class News extends Component {
  constructor(props){
  super(props)
  this.state = { 
  news: []
   }
  };

  render() { 
    fetch('http://92.175.11.66:3000/reaction/api/news')
    .then(response => response.json())
    .then(data => {
    this.setState({
    news: data,
    });
    })
  return (
 
    <div className="backgroundNews">
        <Card inverse>  
         <Container fluid> 
             <Row  className="newsRow"> 
             {this.state.news.map(carteNews => {
                    
                    return (
                    <Col key={carteNews.id} className="hit" lg={4}>
                    <NavLink to={`/newszoom/${carteNews.id}`} className="linkNav"><div className="div-wrapper">
                    <CardImg width="100%" src={carteNews.image} alt="img1" />
                    <CardImgOverlay>
                    <div className="backimg">
                    <CardTitle><h2>{carteNews.titre}</h2></CardTitle>
                    </div>
                    </CardImgOverlay>
                    </div>
                    </NavLink>
                    </Col> )}
            )}
        </Row> 
        </Container> 
        </Card> 
    </div> 
  );
};
}

export default News;