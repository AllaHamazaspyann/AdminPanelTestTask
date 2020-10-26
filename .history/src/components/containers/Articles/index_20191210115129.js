import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { createArticle } from './action';
import * as S from './Blogs.Styles';

class BlogsForm extends Component {
  
  render(){
    const handleSubmit = (values) => {
      const { createArticle } = this.props;
      createArticle(values);
    }

    return (
      <>
        <S.Contained>
          <h2>Add blog</h2>
  
      </S.Contained>
      </>
    )
  }
}


const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
  createArticle: (values) => {
    dispatch(createArticle(values))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogsForm)