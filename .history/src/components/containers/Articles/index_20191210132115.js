import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as S from './Articles.styles';
import { 
  getArticles, 
  handleOrderChange 
} from './actions';

class Articles extends Component {
  
  componentDidMount(){
    const { getArticles } = this.props; 
    getArticles();
  }
  render(){
    const { handleOrderChange } = this.props;
    const { articlesState: {articles} } = this.props;
    console.log('articlesState', articles);
    return (
      <>
        <S.AddArticle to='/add_blog'>Add new Article</S.AddArticle>
        <S.Heading>Articles</S.Heading>
        <S.Select onChange={(e) => handleOrderChange(e)}>Order of Articles
          <option value='1'>Ascending </option>
          <option>Descending</option>
        </S.Select>
        <S.Contained>
          {
            articles && articles.map(el => (
              <S.ArticleWrapper key={el.id}>
                <h2>{el.title}</h2>
                <p>{el.main_text}</p>
                <h3>{el.author_name}</h3>
                <p>{el.category}</p>
                <p>{el.created_at}</p>
              </S.ArticleWrapper>
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
  },
  handleOrderChange: (e) => {
    dispatch(handleOrderChange(e))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles)