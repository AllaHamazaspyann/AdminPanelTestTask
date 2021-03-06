import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { postAction } from './action';
import * as S from './Blogs.Styles';
import { validator } from '../../../helpers/validator';

export class BlogsForm extends Component {
  
  render(){
    const handleValidate = (values) => {
      const { 
        isEmailValid,
        isPasswordValid,
        isNickname,
        errors
      } = validator;
  
      isEmailValid(values.email);
      isPasswordValid(values.password);
      isNickname(values.nickname);
      return errors;
    }
   
    const handleSubmit = (values) => {
      // createUser(values));
      console.log(values);
      const { history } = this.props;
      history.push('/blog');
    }

    return (
      <>
        <S.Contained>
          <h2>Add blog</h2>
          <S.Form
          validateOnChange={false}
          validateOnBlur={false}
          initialValues={{
            title: '', 
            main_text: '', 
            created_at: '',
            author: '',
            category: '',
          }}
          validate={(values) => handleValidate(values)}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          {({
            values,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <S.SimpleForm onSubmit={handleSubmit}>
            <S.Input
              placeholder='Title'
              name='title'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              errBorder={errors.title}
            />
            {errors.nickname && <S.Error>{errors.nickname}</S.Error>}
            <S.Input
              placeholder='Main text'
              name='main_text'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.main_text}
              errBorder={errors.main_text}
            />
            {errors.main_text && <S.Error>{errors.main_text}</S.Error>}
            <S.Input
              placeholder='Author'
              type='text'
              name='author'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.author}
              errBorder={errors.author}
            />
            {errors.author && <S.Error>{errors.author}</S.Error>}
            <S.Select
              placeholder='Category'
              type='text'
              name='category'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.category}
              errBorder={errors.category}
            >
              <option>Food</option>
              <option>Art</option>
              <option>Books</option>
              <option>Music</option>
            </S.Select>
          </S.SimpleForm>
        )}
      </S.Form>
    </S.Contained>
      </>
    )
  }
}


const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
  postAction: () => {
      dispatch(postAction())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogsForm)