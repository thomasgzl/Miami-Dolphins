import React, { Component } from 'react';
import { Card, CardTitle, CardImg, CardImgOverlay } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import './News.css';
import { NavLink } from 'react-router-dom';

const dataNews = [
  {id:"0001",
  image:"https://i.imgur.com/6rkipxV.png",
  title:"Bobby McCain : l'homme volant !",
  text:"",},

  {id:"0002",
  image:"https://i.imgur.com/ZuYbEDF.png",
  title:"Huitième Touchdown pour Kenyan Drake",
  text:"",},

  {id:"0003",
  image:"https://i.imgur.com/uForrpi.png",
  title:"Le Hard Rock Stadium fait peau neuve !",
  text:"",},

  {id:"0004",
  image:"https://i.imgur.com/S1DHnr3.png",
  title:"Albert Wilson, des performances en déclin",
  text:"",},

  {id:"0005",
  image:"https://i.imgur.com/oSvqsqk.png",
  title:"Adam Gase, le nouveau coach !",
  text:"",},

  {id:"0006",
  image:"https://i.imgur.com/Dyu3IfX.png",
  title:"Une équipe prête au combat !",
  text:"",},
  
]

class News extends Component {
  state = { 
   }

  render() { 
  return (
 
    <div className="backgroundNews">
        <Card inverse>  
         <Container fluid>
         {dataNews.map(carteNews => (  
             <Row  key={carteNews.id} className="newsRow"> 
                  <Col lg={8}>
                    <Col className="hit" lg={4}>
                    <NavLink to="/newszoom00" className="linkNav"><div className="div-wrapper">
                    <CardImg width="100%" src={carteNews.image} alt="img1" />
                    <CardImgOverlay>
                    <div className="backimg">
                    <CardTitle><h2>{carteNews.title}</h2></CardTitle>
                    </div>
                    </CardImgOverlay>
                    </div>
                    </NavLink>
                    </Col> 
                    </Col> 

        </Row> ))}
        </Container> 
        </Card> 
    </div> 
  );
};
}

export default News;