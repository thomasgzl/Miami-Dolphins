import React, { Component } from 'react';
import './Bandeau.css';
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';


const tab_mois = { '01': "Janvier", '02': "Fevrier", '03': "Mars", '04': "Avril", '05': "Mai", '06': "Juin", '07': "Juillet", '08': "Aout", '09': "Septembre", 10: "Octobre", 11: "Novembre", 12: "Decembre" }


class Bandeau extends Component {
    constructor(props) {
        super(props)
        this.orderMatch = this.orderMatch.bind(this)
        this.nextMatch = this.nextMatch.bind(this)
        this.state = { nextEvent: { dateMatch: "2018-09-14T11:49:44.000Z" }
}
    }
    /* fonction tri par date croissante */
    orderMatch(arg) {
        let da = '';
        let db = '';


        function SortTime(a,b){ 
            da=new Date(a.dateMatch);
            db=new Date(b.dateMatch);
            return (da>db)?1:-1;
            }
        let result=arg.sort(SortTime);

        return result;
    }
    //fonction qui rend le prochain match

    nextMatch(arg) {
        for (let i = 0; i < arg.length; i++) {
            if (new Date(arg[i].dateMatch) > new Date) {
                if (new Date(arg[i].dateMatch) > new Date()) {
                    return (i)
                }
            }
        }
    }


    /* charger les fonctions tri par date */
    componentDidMount() {
        fetch("http://92.175.11.66:3000/reaction/api/calendriers")
        .then(response  =>  response.json())
        .then(data  => this.orderMatch(data))
        .then(trie => trie[this.nextMatch(trie)])
        .then(acharger=>{
            this.setState({
              nextEvent:acharger.length===0?{ dateMatch: "2018-09-14T11:49:44.000Z" }:acharger,
            });
        })
        
    }
    render() {
        return (
            <Container fluid>
                <Row className="Bandeau">
                    <Col lg="3" xs="12" className="Bandeau_calendrier">
                        <Row  >
                            <Col xs="3" >
                                <h6 className="m-0">{this.state.nextEvent.dateMatch.substring(8, 10)}</h6>
                                <p>{tab_mois[this.state.nextEvent.dateMatch.substring(5, 7)]}</p>
                            </Col>
                            <Col xs="3" >
                                <p className="m-0 domicile">{this.state.nextEvent.equipeA}</p>
                                <p>{this.state.nextEvent.equipeB}</p>
                            </Col>
                            <Col xs="4" >
                                <h3>21:00</h3>
                            </Col>
                            <Col xs="1">
                                <NavLink to="/Calendrier"> <button className="bouton"> + </button> </NavLink>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg="9" xs="0" className="Bandeau_sponsors" >
                        <Container fluid>
                            <Row className="sponsors">
                                <Col lg={6} className="sponsorFont">
                                    <p>SPONSORISÉ PAR</p>
                                </Col>
                                <Col lg={6} className="sponsor">
                                    <a href="http://www.hardrock.com/" target="_blank"> <img src="https://i.imgur.com/qDItHmf.png" alt="logoSponsor" /> </a>
                                </Col>
                            </Row>
                        </Container>
                    </Col>

                </Row>
            </Container>
        )
    }
}

export default Bandeau;
