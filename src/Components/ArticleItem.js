import React, { Component } from 'react';
import '../ArticleItem.css';

class ArticleItem extends Component {
  render(){
    return(
      <div className="ArticleItem">
        <a href={this.props.url} target="_blank" rel="nofollow noopener noreferrer">
            <div className="title">
              <strong>{this.props.item}</strong>
            </div>

            <div className="title">
              {this.props.content}
            </div>
        </a>
      </div>
    );
  }
}
export default ArticleItem;
