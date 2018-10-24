import React,{Component} from 'react';
import './Historique.css';
import HistoryCard from './HistoryCard';
import {Container, Row, Col,Button } from 'reactstrap';



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
        this.onHoverNext=this.onHoverNext.bind(this)
        this.onHoverNextOut=this.onHoverNextOut.bind(this)
        this.onHoverPrev=this.onHoverPrev.bind(this)
        this.onHoverPrevOut=this.onHoverPrevOut.bind(this)
        this.state={
            historique:data.historique, property:data.historique[0],pee:''
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
    };
   

    onHoverNext(){
        if (this.state.property.index===0||this.state.property.index===1||this.state.property.index===2||this.state.property.index===3||this.state.property.index===4){
            const newIndex=this.state.property.index+1;
            setTimeout(()=> { 
            this.setState({property:data.historique[newIndex]})}, 500)}
            }
    

    onHoverNextOut(){
        clearInterval(this.state.pee)
    }


    onHoverPrev(){
        if (this.state.property.index===1||this.state.property.index===2||this.state.property.index===3||this.state.property.index===4||this.state.property.index===5){
            const newIndex=this.state.property.index-1;
            setTimeout(()=> { 
            this.setState({property:data.historique[newIndex]})}, 500)}
            }
    

    onHoverPrevOut(){
        clearInterval(this.state.pee)
    }
    

    render(){
        const {historique,property}=this.state;
        return(
            <Container fluid>
                <div className="backgroundHistorique" >
                        <Row className="Historique-page">
                                <Col lg={3}className="Historique-texteGauche">
                                    <p>No pro football club in history ever advanced more quickly from the first-year dregs every expansion team faces to the ultimate achievement in its sport than the Miami Dolphins did in the six-year period between 1966 and 1972. In 1966, they began their pro football life as the ninth member of the American Football League. Six years later, Miami became the only National Football League team ever to record a perfect season... </p>
                                </Col>


                            
                                <Col lg={8} className="Historique-carousel">
                                <h1 className="Historique-titre">L'historique du club</h1>

                                    <Row className="rowCarouselImage">
                                        <Col lg={2}>
                                            <div className="allerAgauche">
                                                <div onMouseMove={()=>this.onHoverPrev()}
                                                    onMouseOut={()=>this.onHoverPrevOut()}
                                                ><img src="http://image.noelshack.com/fichiers/2018/43/3/1540392522-pngeeeeeeee.png" width='100px' height='300px'></img></div>
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
                                                    onMouseOut={()=>this.onHoverPrevOut()}
                                                ><img src="http://image.noelshack.com/fichiers/2018/43/3/1540392522-pngeeeeeeee.png" width='100px' height='300px'></img></div>
                                            </div>
                                        </Col>
                                        
                                    </Row>
                                    <div className="BoutonsPrevNextHistorique">
                                        <Button className="boutonsPrev"
                                                onClick={()=> this.prevProperty()}
                                                disabled={property.index ===0}
                                                >Prev</Button>
                                            <Button className="boutonsNext"
                                                onClick={()=> this.nextProperty()}
                                                disabled={property.index ===
                                                data.historique.length-1}
                                                >Next</Button>
                                    </div>
                                    
                                </Col>
                
                        </Row>
              
                </div>       
                </Container>
        )
    }
}

export default Historique;