import React, { Component } from 'react';
import './App.css';

import NavbarMain from './components/NavbarMain';
import Bandeau from './components/Bandeau';
import Footer from './components/Footer';
import Cards from './components/News';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import NewsZoom00 from './components/NewsZoom00';
import NewsZoom01 from './components/NewsZoom01';
import NewsZoom02 from './components/NewsZoom02';
import NewsZoom03 from './components/NewsZoom03';
import NewsZoom04 from './components/NewsZoom04';
import NewsZoom05 from './components/NewsZoom05';
import Calendrier from './components/Calendrier';

const data = [
  {id:"00001",
  DateMatch:"2018-12-14T13:49:44.725Z",
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
  DateMatch:"2018-10-15T13:49:44.725Z",
  EquipeA:"Jets",
  EquipeB:"Miami Dolphins",
  Score:"38-41",
  Chaine:"Espn"}
]

class App extends Component {
  constructor(props){
    super(props)
    this.state={donneesCalendrierPourBandeau:data}
  }

  handleChange=(nextEventdeCalendrier)=>{
    this.setState({nextEventPourBandeau:nextEventdeCalendrier})
  }

  render() {
    return (
      <div className="App">
        <Bandeau aPasser={this.state.donneesCalendrierPourBandeau}/>
        <NavbarMain />
        <BrowserRouter>
                <Switch>
            <Route path="/" component={Cards} exact/>
            <Route path="/newszoom00" component={NewsZoom00}/>
            <Route path="/newszoom01" component={NewsZoom01}/>
            <Route path="/newszoom02" component={NewsZoom02}/>
            <Route path="/newszoom03" component={NewsZoom03}/>
            <Route path="/newszoom04" component={NewsZoom04}/>
            <Route path="/newszoom05" component={NewsZoom05}/>
            <Route path="/calendrier" render={()=><Calendrier aPasseracalendrier={this.state.donneesCalendrierPourBandeau}/>}/>
                </Switch>
             </BrowserRouter>
         <Footer />    
      </div>
    );
  }
}

export default App;

