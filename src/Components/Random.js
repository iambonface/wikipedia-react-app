import React, { Component }       from 'react';
import '../Random.css';


class Random extends Component{
  render(){
    return(
      <div className="Random">
      <a className="btn btn-primary" onClick={this.props.onClick}> Get Random Article </a>
      </div>
    )
  }
}

export default Random;
