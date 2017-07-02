import React, { Component } from 'react';
import Articles from './Components/Articles';
import Header from './Components/Header';
import Search from './Components/Search';
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
    this.callAPI();
  }

  onUpdateQuery = (val) => {
    this.callAPI(val)
  }

  callAPI(q = " "){
    console.log("num", q.split(''))
    if( (q.split('').length) > 0){
      var url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${q}&format=json&callback=?`
    }

    $.ajax({
      url: url,
      dataType: 'jsonp',
      success:(data) => {
          this.setState({
            articles: data
          })
      }
    },  'jsonp')
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Search onUpdate = {this.onUpdateQuery} />
        <Articles articles={this.state.articles} />
      </div>
    );
  }
}

export default App;
