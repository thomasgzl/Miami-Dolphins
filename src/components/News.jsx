import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import './News.css';

const Cards = (props) => {
  return (
    <div>
        <Card inverse>  
        
         <Container fluid>
             <Row className="newsRow">

                    <Col className="hit" lg={4}>
                    <div className="div-wrapper">
                    <CardImg width="100%" src="https://i.imgur.com/6rkipxV.png" alt="Card image cap" />  
                    <CardImgOverlay>
                    <div className="backimg">
                    <CardTitle> <h2>Bobby McCain : l'homme volant !</h2> </CardTitle>
                    </div>
                    </CardImgOverlay>
                    </div>
                    </Col>

                    <Col className="hit" lg={4}>
                    <div className="div-wrapper">
                    <CardImg width="100%" src="https://i.imgur.com/ZuYbEDF.png" alt="Card image cap" />
                    <CardImgOverlay>
                    <div className="backimg">
                    <CardTitle> <h2>Huitième Touchdown pour Kenyan Drake</h2> </CardTitle>
                    </div>
                    </CardImgOverlay>
                    </div>
                    </Col>

                    <Col className="hit" lg={4}>
                    <div className="div-wrapper">
                    <CardImg width="100%" src="https://i.imgur.com/uForrpi.png" alt="Card image cap" />
                    <CardImgOverlay>
                    <div className="backimg">
                    <CardTitle> <h2>Le Hard Rock Stadium fait peau neuve !</h2> </CardTitle>
                    </div>
                    </CardImgOverlay>
                    </div>
                    </Col>

            </Row>

        <Row className="newsRow">

                    <Col className="hit" lg={4}>
                    <div className="div-wrapper">
                    <CardImg width="100%" src="https://i.imgur.com/S1DHnr3.png" alt="Card image cap" />
                    <CardImgOverlay>
                    <div className="backimg">
                    <CardTitle> <h2>Albert Wilson, des performances en déclin</h2> </CardTitle>
                    </div>
                    </CardImgOverlay>
                    </div>
                    </Col>

                    <Col className="hit" lg={4}>
                    <div className="div-wrapper">
                    <CardImg width="100%" src="https://i.imgur.com/oSvqsqk.png" alt="Card image cap" />
                    <CardImgOverlay>
                    <div className="backimg">
                    <CardTitle> <h2>Adam Mer-Gase, le nouveau coach !</h2> </CardTitle>
                    </div>
                    </CardImgOverlay>
                    </div>
                    </Col>

                    <Col className="hit" lg={4}>
                    <div className="div-wrapper">
                    <CardImg width="100%" src="https://i.imgur.com/Dyu3IfX.png" alt="Card image cap" />
                    <CardImgOverlay>
                    <div className="backimg">
                    <CardTitle> <h2>Une équipe prête au combat !</h2> </CardTitle>
                    </div>
                    </CardImgOverlay>
                    </div>
                    </Col>

         </Row>

        </Container>
        </Card>

    </div>
  );
};

export default Cards;