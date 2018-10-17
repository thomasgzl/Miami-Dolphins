import React,{Component} from 'react';
import './Historique.css';
import HistoryCard from './HistoryCard';
import {Container, Row, Col } from 'reactstrap';



const data={ "historique":[
    {
        "_id":"01",
        "index":0,
        "date":"1953",
        "texte":"je code pour la wild code school et c'est pas tous les jours dimanche",
        "titre":"c'était chaud cette annee là",
        "image":"https://image.noelshack.com/fichiers/2018/42/2/1539713042-historique4.jpg"
},
{
    "_id":"02",
    "index":1,
    "date":"1963",
    "texte":"je code pour la wild code school et c'est pas tous les jours dimanche",
    "titre":"c'était froid cette annee là",
    "image":"https://image.noelshack.com/fichiers/2018/42/2/1539713042-historique3.jpeg"
},
{
    "_id":"03",
    "index":2,
    "date":"1993",
    "texte":"je me suis mis au football americain et c'est trop dla balle",
    "titre":"une annee à l'hopital",
    "image":"https://image.noelshack.com/fichiers/2018/42/2/1539713042-historique5.jpg"
},
{
    "_id":"04",
    "index":3,
    "date":"1933",
    "texte":"je code pour la wild code school et c'est pas tous les jours dimanche",
    "titre":"c'était chaud cette annee là",
    "image":"https://image.noelshack.com/fichiers/2018/42/2/1539713042-historique2.jpeg"
},
{
"_id":"05",
"index":4,
"date":"1960",
"texte":"je code pour la wild code school et c'est pas tous les jours dimanche",
"titre":"c'était froid cette annee là",
"image":"https://image.noelshack.com/fichiers/2018/42/2/1539713042-historique1.jpeg"
},
{
"_id":"06",
"index":5,
"date":"2003",
"texte":"je me suis mis au football americain et c'est trop dla balle",
"titre":"une annee à l'hopital",
"image":"https://image.noelshack.com/fichiers/2018/42/2/1539713042-historique6.jpg"
}
]}

class Historique extends Component{
    constructor(props){
        super(props)
        this.state={
            historique:data.historique, property:data.historique[0]
        }
    }

    nextProperty=()=>{
        const newIndex=this.state.property.index+1;
        this.setState({
            property:data.historique[newIndex]
        })
    }

    prevProperty=()=>{
        const newIndex=this.state.property.index-1;
        this.setState({
            property:data.historique[newIndex]
        })
    }

    onHoverNext=()=>{
        const newIndex=this.state.property.index+1;
        setTimeout(()=> { 
            this.setState({property:data.historique[newIndex]})}, 500)}

    
    

    onHoverPrev=()=>{
        const newIndex=this.state.property.index-1;
        setTimeout(()=> { 
            this.setState({property:data.historique[newIndex]})}, 500)}
        
    

    render(){
        const {historique,property}=this.state
        return(
            <Container fluid>
                <div className="Historique-page">
                
                    <h1>L'historique du club</h1>
                    <button
                        onClick={()=> this.prevProperty()}
                        disabled={property.index ===0}
                        >Prev</button>
                    <button
                        onClick={()=> this.nextProperty()}
                        disabled={property.index ===
                        data.historique.length-1}
                        >Next</button>
                
                     <Row>
                         <Col lg={2}>
                            <div className="allerAgauche">
                                <div onMouseMove={()=>this.onHoverPrev()}
                                disabled={property.index ===0}
                                ><img src="https://image.noelshack.com/fichiers/2018/42/3/1539780298-transparent-image8.png" width='50px' height='300px'></img></div>
                            </div>
                         </Col>
                        <Col lg={8}>

                                <div className="global-slider">
                                    <div className={`Card-slider active-slide-${property.index}`}>
                                        <div className="Card-slider-wrapper" style={{'transform':`translateX(-${property.index*(100/historique.length)}%)`}}>
                                            {historique.map(property=><HistoryCard key={property._id} property={property}/>)}
                                        </div>
                                    </div>
                                </div>
                        </Col>
                        <Col lg={2}>
                            <div className="allerAdroite">
                                <div onMouseMove={()=>this.onHoverNext()}
                                disabled={property.index ===
                                data.historique.length-1}
                                ><img src="https://image.noelshack.com/fichiers/2018/42/3/1539780298-transparent-image8.png" width='50px' height='300px'></img></div>
                            </div>
                        </Col>
                </Row>
                </div>       
                </Container>
        )
    }
}

export default Historique;