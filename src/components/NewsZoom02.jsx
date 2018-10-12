import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './NewsZoom.css';
import { NavLink } from 'react-router-dom';

class NewsZoom02 extends Component {
   
    render() { 
        return ( 
        <div>
            <Container fluid>
          <Row>            
            <Col lg="8" md="6" sm="12"><img  className="image1" src="https://i.imgur.com/NFzt0pM.png" alt="touchdown"/><h3 className="flyM"><strong>Le Hard Rock Stadium fait peau neuve !</strong></h3>
            <p className="paragraphe_news">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br />
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.<br />
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
            </Col>            
            <Col lg="4" md="6" sm="12" className="image2"><h3 className="news_title1"><strong>Les dernières News</strong></h3>
            <ul>               
                <li className="liste_news"><NavLink to="/newszoom01" className="navlink">Huitième Touchdown pour Kenyan Drake</NavLink></li>
                <li className="liste_news"><NavLink to="/newszoom00" className="navlink">Bobby McCain : l'homme volant !</NavLink></li>
                <li className="liste_news"><NavLink to="/newszoom03" className="navlink">Albert Wilson, des performances en déclin</NavLink></li>
                <li className="liste_news"><NavLink to="/newszoom04" className="navlink">Adam Mer-Gase, le nouveau coach !</NavLink></li>
                <li className="liste_news"><NavLink to="/newszoom05" className="navlink">Une équipe prête au combat !</NavLink></li>
            </ul>
          </Col>            
            </Row>
        </Container>
        </div> );
    }
}
 
export default NewsZoom02;