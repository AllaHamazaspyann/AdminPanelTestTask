import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { createArticle } from './action';
import * as S from './Articles.styles';

class Articles extends Component {
  
  render(){
    const { articlesState } = this.props;

    return (
      <>
        <S.Contained>
          <h2>Articles</h2>
          <div>
            <h2>{}</h2>
          </div>
        </S.Contained>
      </>
    )
  }
}


const mapStateToProps = (state) => ({
  articlesState: state.articles,
});

const mapDispatchToProps = (dispatch) => ({
  createArticle: (values) => {
    dispatch(createArticle(values))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles)