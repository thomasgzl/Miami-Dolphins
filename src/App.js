import React, { Component } from 'react';
import './App.css';

import NavbarMain from './components/NavbarMain';
import Bandeau from './components/Bandeau';
import Footer from './components/Footer';
import News from './components/News';
import Home from './components/Home';

import { Route, Switch } from "react-router-dom";
import NewsZoom from './components/NewsZoom';
import Calendrier from './components/Calendrier';

const dataCalendrier = [
  {id:"00001",
  DateMatch:"2018-09-14T13:49:44.725Z",
  EquipeA:"Miami Dolphins",
  EquipeB:"Bears",
  Score:"18-21",
  Chaine:"Eleven"},

  {id:"00002",
  DateMatch:"2018-12-18T13:49:44.725Z",
  EquipeA:"Miami Dolphins",
  EquipeB:"Patriots",
  Score:"25-11",
  Chaine:"Bein"},

  {id:"00003",
  DateMatch:"2018-10-15T00:49:44.725Z",
  EquipeA:"Jets",
  EquipeB:"Miami Dolphins",
  Score:"38-41",
  Chaine:"Espn"},

  {id:"00004",
  DateMatch:"2018-12-15T21:00:00.725Z",
  EquipeA:"Miami Dolphins",
  EquipeB:"Bears",
  Score:"18-21",
  Chaine:"Eleven"},

  {id:"00005",
  DateMatch:"2019-12-18T13:49:44.725Z",
  EquipeA:"Jets",
  EquipeB:"Bears",
  Score:"",
  Chaine:"Bein"},

  {id:"00006",
  DateMatch:"2017-10-15T13:49:44.725Z",
  EquipeA:"Jets",
  EquipeB:"Bears",
  Score:"38-41",
  Chaine:"Espn"}
]

class App extends Component {
  constructor(props){
    super(props)
    this.state={donneesPourCalendrier:dataCalendrier}
  }


  render() {
    return (
      <div className="App">
        <Bandeau aPasserDansBandeau={this.state.donneesPourCalendrier}/>
        <NavbarMain />   
             
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route path="/news" component={News}/>
                  <Route path="/newszoom" component={NewsZoom}/>
                  <Route path="/calendrier" render={()=><Calendrier aPasseracalendrier={this.state.donneesPourCalendrier}/>}/>
                </Switch>
         <Footer />    
      </div>
    );
  }
}

export default App;