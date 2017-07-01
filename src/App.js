import React, { Component } from 'react';
import Articles from './Components/Articles';
import './App.css';

import $ from 'jquery';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      articles: []
    };
  }

  componentWillMount(){
    $.ajax({
      url: 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Uhuru&format=json&callback=?',
      dataType: 'jsonp',
      success:(data) => {
        //console.log(Object.keys(data[1]))
          this.setState({
            articles: data
          })

      }
    },  'jsonp')
  }
  render() {
    console.log("ok", this.state.articles)
    return (
      <div className="App">
        <Articles articles={this.state.articles} />
      </div>
    );
  }
}

export default App;
