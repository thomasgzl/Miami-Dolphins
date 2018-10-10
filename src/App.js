import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

import Cards from './components/News';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cards />
        <Footer />
      </div>
    );
  }
}

export default App;
