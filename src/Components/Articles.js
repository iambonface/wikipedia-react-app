import React, { Component } from 'react';
import ArticleItem from './ArticleItem';

import '../Articles.css';

class Articles extends Component {
  render (){
    //console.log(this.props)

    let articleItems;
    let info = this.props.articles;
    if(this.props.articles){
      articleItems = info.map((item) => {
        //console.log(item)
        var arr = []
        for(var i =0; i<info[1].length; i++){
          arr.push(<ArticleItem item={info[1][i]} content={info[2][i]} url={info[3][i]} key={info[1][i]}/>)
        }
        return(
          arr
        )
      });
    }
    return (
      <div className="Articles">
       {articleItems[1]}
      </div>
    )
  }
}
export default Articles;
