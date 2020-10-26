import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as S from './Articles.styles';
import { getArticles } from './actions';

class Articles extends Component {
  componentDidMount(){
    const { getArticles } = this.props; 
    getArticles();
  }
  render(){
    const { articlesState: {articles} } = this.props;
    console.log('articlesState', articles);
    return (
      <>
        <h2>Articles</h2>
        <S.Contained>
          {
            articles && articles.map(el => (
              <ArticleWrapper key={el.id}>
                <h2>{el.title}</h2>
                <p>{el.main_text}</p>
                <h3>{el.author_name}</h3>
                <p>{el.category}</p>
                <p>{el.created_at}</p>
              </div>
            ))
          }
         
        </S.Contained>
      </>
    )
  }
}


const mapStateToProps = (state) => ({
  articlesState: state.articles,
});

const mapDispatchToProps = (dispatch) => ({
  getArticles: () => {
    dispatch(getArticles())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles)