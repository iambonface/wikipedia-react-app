import React, { Component } from 'react';
import Articles from './Components/Articles';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      articles: [
        {
          title: 'Raila',
          content: 'The Rt Hon Prime Minister of Kenya'
        },
        {
          title: 'Raila Odinga',
          content: 'The Opposition leader of Kenya'
        },

        {
          title: 'Raila Amollo',
          content: 'The NASA leader'
        }

      ]
    }
  }
  render() {
    return (
      <div className="App">
        Hello World

        <Articles title={this.state.articles} content={this.state.articles} />
      </div>
    );
  }
}

export default App;
