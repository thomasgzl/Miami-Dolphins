import React,{Component} from 'react';
import './Bandeau.css';
import { Container, Row, Col } from 'reactstrap';
import Example from './CarouselBandeau';
import { NavLink } from 'react-router-dom';

const tab_mois = {'01':"Janvier",'02':"Fevrier",'03':"Mars",'04':"Avril",'05':"Mai",'06':"Juin",'07':"Juillet",'08':"Aout",'09':"Septembre",10:"Octobre",11:"Novembre",12:"Decembre"}


class Bandeau extends Component{
    constructor(props){
        super(props)
        this.orderMatch=this.orderMatch.bind(this)
        this.nextMatch=this.nextMatch.bind(this)
        this.state={
            donnees:props.aPasserDansBandeau,
            nextEvent:
                {id:"00006",
                DateMatch:"2017-10-15T13:49:44.725Z",
                EquipeA:"Jets",
                EquipeB:"Bears",
                Score:"38-41",
                Chaine:"Espn"}
            }
    }
    /* charger les fonctions tri par date */
    componentDidMount(){
        this.setState({
            donnees:this.orderMatch(this.state.donnees), 
            nextEvent:this.state.donnees[this.nextMatch()]
        })
    } 
/* fonction tri par date croissante */
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
    //fonction qui rend le prochain match
    nextMatch(){
        for (let i=0;i<this.state.donnees.length;i++){
            if(new Date(this.state.donnees[i].DateMatch)>new Date){
               return(i)
            }
        }    
    }

    
    

    render(){
        return(
            
            <Container fluid >
                <Row  className="Bandeau">
                    <Col lg="3" xs="12" className="Bandeau_calendrier">
                        <Row >
                            <Col lg="3" xs="3">
                                <p className="Bandeau_texte">{this.state.nextEvent.DateMatch.substring(8,10)}</p>   
                                <p className="Bandeau_texte">{tab_mois[this.state.nextEvent.DateMatch.substring(5,7)]}</p>  
                            </Col>
                            <Col lg="3" xs="3">
                                <p className="Bandeau_texte">{this.state.nextEvent.EquipeA}</p>  
                                <p className="Bandeau_texte">{this.state.nextEvent.EquipeB}</p>
                            </Col>
                            <Col lg="3" xs="3">
                                <p className="Bandeau_texte">{this.state.nextEvent.DateMatch.substring(11,16)}</p>
                            </Col>
                            <Col lg="3" xs="3">
                            <NavLink to="/Calendrier"><img className="boutonAdd" src="https://i.imgur.com/T2Y9Mcw.png" alt="boutonAdd"/> </NavLink>     
                            </Col>
                        </Row>
                    </Col>
                    <Col lg="9" className="Bandeau_sponsors" >
                        <Example/> 
                    </Col>
                
                </Row>
            </Container>
        )
    }
}

export default Bandeau;
