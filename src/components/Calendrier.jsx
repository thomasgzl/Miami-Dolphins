import React,{Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Calendrier.css';

const logo = { 
    "Jets":"https://image.noelshack.com/fichiers/2018/41/4/1539277237-jets-equipe.png", 
    "Patriots":"https://image.noelshack.com/fichiers/2018/41/4/1539277237-patriots.png",
    "Bears":"https://image.noelshack.com/fichiers/2018/41/4/1539277237-bears.png",
    "Miami":"https://image.noelshack.com/fichiers/2018/41/4/1539277237-miamidolphins.png",
    "Bengals":"https://image.noelshack.com/fichiers/2018/41/4/1539277237-bengals.png"
}

const chaineTV = {
    "Eleven": "https://image.noelshack.com/fichiers/2018/41/4/1539278965-eleven-chaine-1.png",
    "Bein":"https://image.noelshack.com/fichiers/2018/41/4/1539278965-bein-chaine.jpg",
    "Espn":"https://image.noelshack.com/fichiers/2018/41/4/1539278965-espn-chaine.png"

}


 const tab_mois = {'01':"Janvier",'02':"Fevrier",'03':"Mars",'04':"Avril",'05':"Mai",'06':"Juin",'07':"Juillet",'08':"Aout",'09':"Septembre",10:"Octobre",11:"Novembre",12:"Decembre"}


class Calendrier extends Component{
    constructor(props){
        super(props)
        this.state={donnees:props.aPasseracalendrier}
        this.nextMatch=this.nextMatch.bind(this)
        this.orderMatch=this.orderMatch.bind(this)
    }
    
    
    orderMatch(){
        let da='';
        let db='';

        function SortTime(a,b){ 
            da=new Date(a.DateMatch);
            db=new Date(b.DateMatch);
            return (da>db)?1:-1;
            }
        let result=this.state.donnees.sort(SortTime);
        return result;
        }
    
    nextMatch(){
        for (let i=0;i<this.state.donnees.length;i++){
            if(new Date(this.state.donnees[i].DateMatch)>new Date()){
                return(i)
            }
        }    
    }

    componentDidMount(){
        this.setState({
            donnees:this.orderMatch(this.state.donnees), 
        })
    } 

    render(){
        return(
            <div className="GlobalCalendrier">
                <Container >
                    <h1 className="Calendrier-title">Calendrier des matchs</h1>
                    <div className="Calendrier">
                <ul>
                    {this.state.donnees.map((match)=>
                    <Row className="Calendrier_ligneTableau">
                        <Col lg="2" xs="12" className="colonne1">
                                <div>
                                        <p className="DateMatchDesktop">{match.DateMatch.substring(8,10)} {tab_mois[match.DateMatch.substring(5,7)]} {match.DateMatch.substring(0,4)}</p>
                                </div> 
                        </Col>
                        <Col lg="3" xs="4" className="colonne2">
                            <p> <img className="imgCalendrier" src={logo[match.EquipeA]} alt="logoequipeA"></img> {match.EquipeA} </p>
                        </Col>
                        <Col lg="2" xs="4" className="colonne3">
                            <p> {match.Score} </p>
                        </Col>
                        <Col lg="3" xs="4" className="colonne4">
                            <p> {match.EquipeB}<img className="imgCalendrier" src={logo[match.EquipeB]} alt="logoequipeB"></img> </p>
                        </Col> 
                        <Col lg="2" className="colonne5">
                            <p>  <img className="imgCalendrier" src={chaineTV[match.Chaine]} alt="logoChaine"></img> </p>
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
