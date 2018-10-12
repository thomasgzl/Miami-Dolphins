import React,{Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Calendrier.css'

const data = [
    {id:"00001",
    Jour:"Samedi",
    Date:"26",
    Mois:"Octobre",
    EquipeA:"Miami Dolphins",
    EquipeB:"Bears",
    Score:"18-21",
    Heure:"21h",
    Chaine:"Eleven"},

    {id:"00002",
    Jour:"Vendredi",
    Date:"26",
    Mois:"Novembre",
    EquipeA:"Miami Dolphins",
    EquipeB:"Patriots",
    Score:"25-11",
    Heure:"20h",
    Chaine:"Bein"},

    {id:"00003",
    Jour:"Dimanche",
    Date:"20",
    Mois:"Decembre",
    EquipeA:"Jets",
    EquipeB:"Miami Dolphins",
    Score:"38-41",
    Heure:"22h",
    Chaine:"Espn"}
]

const logo = { 
    "Jets":"https://image.noelshack.com/fichiers/2018/41/4/1539277237-jets-equipe.png", 
    "Patriots":"https://image.noelshack.com/fichiers/2018/41/4/1539277237-patriots.png",
    "Bears":"https://image.noelshack.com/fichiers/2018/41/4/1539277237-bears.png",
    "Miami Dolphins":"https://image.noelshack.com/fichiers/2018/41/4/1539277237-miamidolphins.png",
    "Bengals":"https://image.noelshack.com/fichiers/2018/41/4/1539277237-bengals.png"
}

const chaineTV = {
    "Eleven": "https://image.noelshack.com/fichiers/2018/41/4/1539278965-eleven-chaine-1.png",
    "Bein":"https://image.noelshack.com/fichiers/2018/41/4/1539278965-bein-chaine.jpg",
    "Espn":"https://image.noelshack.com/fichiers/2018/41/4/1539278965-espn-chaine.png"
}


 

class Calendrier extends Component{
    render(){
        return(
            <div className="Calendrier">
                <Container>
                <ul>
                    {data.map((match,index)=><Row className="Calendrier-table">
                        <Col lg="2" xs="12" className="colonne1">
                                <div>
                                        <p>{match.Jour} {match.Date} {match.Mois}</p>
                                        <p>{match.Heure}</p>
                                </div> 
                        </Col>
                        <Col lg="3" xs="4" className="colonne2">
                            <p> <img className="imgCalendrier" src={logo[match.EquipeA]}></img> {match.EquipeA} </p>
                        </Col>
                        <Col lg="2" xs="4" className="colonne3">
                            <p> {match.Score} </p>
                        </Col>
                        <Col lg="3" xs="4" className="colonne4">
                            <p> {match.EquipeB}<img className="imgCalendrier" src={logo[match.EquipeB]} ></img> </p>
                        </Col> 
                        <Col lg="2" className="colonne5">
                            <p>  <img className="imgCalendrier" src={chaineTV[match.Chaine]}></img> </p>
                        </Col> 
                        
                    </Row>)}
                </ul>
                </Container>
            </div>
        )
    }
}

export default Calendrier;