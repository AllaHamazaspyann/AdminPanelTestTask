import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { postAction } from './action';
import * as S from './Blogs.Styles';

import { validator } from '../../../helpers/validator';

export class BlogsForm extends Component {
  render(){
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
          // onSubmit={(values) => {
          //   handleSubmit(values);
          // }}
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
              value={values.nickname}
              errBorder={errors.nickname}
            />
            {errors.nickname && <S.Error>{errors.nickname}</S.Error>}
            <S.Input
              placeholder='Main text'
              name='main_text'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              errBorder={errors.email}
            />
            {errors.email && <S.Error>{errors.email}</S.Error>}
            <S.Input
              placeholder='Author'
              type='text'
              name='author'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              errBorder={errors.password}
            />
            {errors.password && <S.Error>{errors.password}</S.Error>}
            <S.Select
              placeholder='Category'
              type='text'
              name='category'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              errBorder={errors.password}
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