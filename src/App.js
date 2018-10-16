import React, { Component } from 'react';
import './App.css';

import NavbarMain from './components/NavbarMain';
import Bandeau from './components/Bandeau';
import Footer from './components/Footer';
import News from './components/News';
import Home from './components/Home';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import NewsZoom00 from './components/NewsZoom00';
import NewsZoom01 from './components/NewsZoom01';
import NewsZoom02 from './components/NewsZoom02';
import NewsZoom03 from './components/NewsZoom03';
import NewsZoom04 from './components/NewsZoom04';
import NewsZoom05 from './components/NewsZoom05';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Bandeau/>
        <NavbarMain />   
        <Home />     
         <Footer />    
      </div>
    );
  }
}

export default App;