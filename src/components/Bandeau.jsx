import React,{Component} from 'react';
import './Bandeau.css';
import { Container, Row, Col } from 'reactstrap';
import Example from './CarouselBandeau';

const tab_mois = {1:"Janvier",2:"Fevrier",3:"Mars",4:"Avril",5:"Mai",6:"Juin",7:"Juillet",8:"Aout",9:"Septembre",10:"Octobre",11:"Novembre",12:"Decembre"}




class Bandeau extends Component{
    constructor(props){
        super(props)
        this.orderMatch=this.orderMatch.bind(this)
        this.nextMatch=this.nextMatch.bind(this)
        this.state={donnees:props.aPasser,nextEvent:'adeterminer'}
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
            if(new Date(this.state.donnees[i].DateMatch)>new Date){
                return(i)
            }
        }    
    }

    componentDidMount(){
        this.setState({
            donnees:this.orderMatch(this.state.donnees), 
            nextEvent:this.state.donnees[this.nextMatch()]
        })
        console.log(this.state.donnees,"donnees de componentdidmount")
        console.log(this.state.nextEvent,"nextenvent de componentdidmount")
        console.log(this.nextMatch,"nextmatch de componentdidmount")
    } 
    

    render(){
        return(
            <Container fluid >
                <Row  className="Bandeau">
                    <Col lg="3" xs="12" className="Bandeau_calendrier">
                        <Row  >
                            <Col lg="3" xs="3">
                                <p>{this.props.aPasser[0].DateMatch.substring(8,10)}</p>   
                                <p>{tab_mois[this.props.aPasser[0].DateMatch.substring(5,7)]}</p>  
                            </Col>
                            <Col lg="3" xs="3">
                                <p>{this.props.aPasser[0].EquipeA}</p>  
                                <p>{this.props.aPasser[0].EquipeB}</p>
                            </Col>
                            <Col lg="3" xs="3">
                                <p>{this.props.aPasser[0].DateMatch.substring(11,16)}</p>
                            </Col>
                            <Col lg="3" xs="3">
                                <a href="/Calendrier"><img className="boutonAdd" src="https://i.imgur.com/T2Y9Mcw.png" alt="boutonAdd"/> </a>     
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