import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NewsZoom00 from './components/NewsZoom00';
import NewsZoom01 from './components/NewsZoom01';
import NewsZoom02 from './components/NewsZoom02';
import NewsZoom03 from './components/NewsZoom03';
import NewsZoom04 from './components/NewsZoom04';
import NewsZoom05 from './components/NewsZoom05';



class HomeZoom extends Component {
  render() {
    return (
      
      <BrowserRouter>
      
        <Switch>

          <Route path="/" component={NewsZoom00} exact/>
          <Route path="/newszoom01" component={NewsZoom01}/>
          <Route path="/newszoom02" component={NewsZoom02}/>
          <Route path="/newszoom03" component={NewsZoom03}/>
          <Route path="/newszoom04" component={NewsZoom04}/>
          <Route path="/newszoom05" component={NewsZoom05}/>

        </Switch>
        
      </BrowserRouter>
      
    );
  }
}

export default HomeZoom;
