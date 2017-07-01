import React, { Component } from 'react';
import ArticleItem from './ArticleItem';

import '../Articles.css';

class Articles extends Component {
  render (){
    console.log(this.props)
    let articleItems;
    if(this.props.articles){
      articleItems = this.props.articles.map(item => {
        //console.log(item)
        return(
          <ArticleItem item={item} key={item.title}/>
        )
      });
    }
    return (
      <div className="Articles">
        {articleItems}
      </div>
    )
  }
}
export default Articles;
