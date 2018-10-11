import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarMain from './components/NavbarMain';
import Bandeau from './components/Bandeau';
import Footer from './components/Footer';
import HomeZoom from './HomeZoom';
import Cards from './components/News';

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

        <BrowserRouter>
                <Switch>

            <Route path="/" component={Cards} exact/>
            <Route path="/newszoom00" component={NewsZoom00}/>
            <Route path="/newszoom01" component={NewsZoom01}/>
            <Route path="/newszoom02" component={NewsZoom02}/>
            <Route path="/newszoom03" component={NewsZoom03}/>
            <Route path="/newszoom04" component={NewsZoom04}/>
            <Route path="/newszoom05" component={NewsZoom05}/>

                </Switch>
             </BrowserRouter>
             
        <Footer />

    
      </div>
    );
  }
}

export default App;

