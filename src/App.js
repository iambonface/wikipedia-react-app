import React, { Component } from 'react';
import Articles from './Components/Articles';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello World

        <Articles />
      </div>
    );
  }
}

export default App;
