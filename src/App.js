import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMain from './component/NavbarMain';
import Bandeau from './components/Bandeau';
import Footer from './components/Footer';

import Cards from './components/News';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarMain />
        <Bandeau/>
        <Cards />
        <Footer />
      </div>
    );
  }
}

export default App;
