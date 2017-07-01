import React, { Component } from 'react';
import '../ArticleItem.css';

class ArticleItem extends Component {
  render(){
    return(
      <div className="ArticleItem">
        <p><strong>{this.props.item.title}</strong>
        <br />
        {this.props.item.content}</p>
      </div>
    );
  }
}

export default ArticleItem;
