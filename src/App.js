import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bandeau from './components/Bandeau';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Bandeau/>
      </div>
    );
  }
}

export default App;
