import React, { Component } from 'react';
import '../ArticleItem.css';

class ArticleItem extends Component {
  render(){
    return(
      <div className="ArticleItem">
        <div className="title">
          <strong>{this.props.item}</strong>
        </div>

        <div className="title">
          {this.props.content}
        </div>
      </div>
    );
  }
}

export default ArticleItem;
