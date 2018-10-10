import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Cards from './components/News';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Cards />

      </div>
    );
  }
}

export default App;
