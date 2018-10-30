import React,{Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Calendrier.css';

const logo = { 
    "Jets":"https://image.noelshack.com/fichiers/2018/41/4/1539277237-jets-equipe.png", 
    "Patriots":"https://image.noelshack.com/fichiers/2018/41/4/1539277237-patriots.png",
    "Bears":"https://image.noelshack.com/fichiers/2018/41/4/1539277237-bears.png",
    "Dolphins":"https://image.noelshack.com/fichiers/2018/41/4/1539277237-miamidolphins.png",
    "Bengals":"https://image.noelshack.com/fichiers/2018/41/4/1539277237-bengals.png",
    "Stunners":"https://i.imgur.com/f4pEBMu.png"
}

const chaineTV = {
    "Eleven": "https://i.imgur.com/Fu7AZ2Z.png",
    "Bein":"https://i.imgur.com/u2QvQzT.png",
    "Espn":"https://i.imgur.com/eifpW1O.png"

}


 const tab_mois = {'01':"Janvier",'02':"Fevrier",'03':"Mars",'04':"Avril",'05':"Mai",'06':"Juin",'07':"Juillet",'08':"Aout",'09':"Septembre",10:"Octobre",11:"Novembre",12:"Decembre"}


class Calendrier extends Component{
    constructor(props){
        super(props)
        this.state={donneesCalendrier:[]}
    }
    
      /* fonction tri par date croissante */
      orderMatch(arg){
        let da='';
        let db='';

        function SortTime(a,b){ 
            da=new Date(a.dateMatch);
            db=new Date(b.dateMatch);
            return (da>db)?1:-1;
            }
        let result=arg.sort(SortTime);
        return result;
        }    

    componentDidMount(){
            fetch("http://92.175.11.66:3000/reaction/api/calendriers")
            .then(response  =>  response.json())
            .then(aloa  => this.orderMatch(aloa))
            .then(data  => {
              this.setState({
                donneesCalendrier:data,
              });
          });    
    } 

    render (){
        return(
            <div className="GlobalCalendrier">
                <Container >
                    <h1 className="Calendrier-title">Calendrier des matchs</h1>
                    <div className="Calendrier">
                <ul className="Calendrier_contour">
                    {this.state.donneesCalendrier.map((match)=>
                    <Row className="Calendrier_ligneTableau">
                        <Col lg="2" md="2" xs="12" className="colonne1">
                                <div>
                                        <p className="dateMatchDesktop">{match.dateMatch.substring(8,10)} {tab_mois[match.dateMatch.substring(5,7)]} {match.dateMatch.substring(0,4)}</p>
                                </div> 
                        </Col>
                        <Col lg="3" md="2" xs="4" className="colonne2">

                            <p className="texteCentralCalendrier"> <img className="imgCalendrier" src={logo[match.equipeA]} alt="logoequipeA"></img> {match.equipeA} </p>
                        </Col>
                        <Col lg="2" xs="4" md="2" className="colonne3">
                            <p className="texteCentralCalendrier"> {match.score} </p>
                        </Col>
                        <Col lg="3" xs="4" md="4" className="colonne4">
                            <p className="texteCentralCalendrier"> {match.equipeB}<img className="imgCalendrier" src={logo[match.equipeB]} alt="logoequipeB"></img> </p>
                        </Col> 
                        <Col lg="2"  className="colonne5">
                            <p>  <img className="imgCalendrier" src={chaineTV[match.chaine]} alt="logoChaine"></img> </p>
                        </Col>                        
                    </Row>)
                }
                </ul>
                </div>
                </Container>
            </div>
        )
    }
}

export default Calendrier;
