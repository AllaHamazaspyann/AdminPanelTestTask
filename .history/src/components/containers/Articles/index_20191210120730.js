import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as S from './Articles.styles';
import { getArticles } from './actions';

class Articles extends Component {
  componentDidMount(){
    const { getArticles } = this.props; 
  }
  render(){
    const { articlesState } = this.props;
    console.log('articlesState', articlesState);
    return (
      <>
        <S.Contained>
          <h2>Articles</h2>
          <div>
            <h2>dsfksdfsd</h2>
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
  getArticles: () => {
    dispatch(getArticles())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles)