import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as S from './Articles.styles';
import { 
  getArticles, 
  handleOrderChange,
  handleChange,
  getSearchedArticle,
} from './actions';

class Articles extends Component {
  
  componentDidMount(){
    const { getArticles } = this.props; 
    getArticles();
  }


  render(){
    const { handleOrderChange, getSearchedArticle, handleChange } = this.props;
    const { articlesState: {articles, order, search_value} } = this.props;

    console.log('search_value', search_value);

    order ? articles.sort((a,b) => {
      return new Date(b.created_at) - new Date(a.created_at);
    }) :
    articles.sort((a,b) => {
      return new Date(a.created_at) - new Date(b.created_at);
    });

    return (
      <>
        <S.AddArticle to='/add_blog'>Add new Article</S.AddArticle>
        <S.Heading>Articles</S.Heading>
        
        <S.Search 
          placeholder='Search' 
          onChange={(e) => handleChange(e)}
        /> 
        <S.SearchButton onClick={() => getSearchedArticle(search_value)}>
          Search
        </S.SearchButton>        

        <S.Select onChange={(e) => handleOrderChange(e)}>
          Order of Articles
          <option value='1'>Ascending Order</option>
          <option value='0'>Descending Order</option>
        </S.Select>
        <S.Contained>
          {
            articles && articles.map(el => (
              <S.ArticleWrapper to={`/articles/${el.id}`} key={el.id}>
                <h2>{el.title}</h2>
                <p className='date'>{el.created_at}</p>
                <p>{el.main_text}</p>
                <h3>{el.author_name}</h3>
                <p>{el.category}</p>
                
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
  },
  handleChange: (e) => {
    dispatch(handleChange(e))
  },
  getSearchedArticle: (arg) => {
    dispatch(getSearchedArticle(arg))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles)