import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment'

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
    const { articlesState: { articles, order } } = this.props;

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
        <S.SearchButton onClick={() => getSearchedArticle()}>
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
                <p className='date'>{moment(el.created_at).format('LL')}</p>
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
  getSearchedArticle: () => {
    dispatch(getSearchedArticle())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles)