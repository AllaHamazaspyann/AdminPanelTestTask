import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postAction } from './action';
import * as S from './Blogs.Styles';
import { Link } from 'react-router-dom';

export class BlogsForm extends Component {
  render(){
    return (
      <>
        <S.Contained>
          <h2>Registration</h2>
          <S.Form
          validateOnChange={false}
          validateOnBlur={false}
          initialValues={{
            title: '', 
            main_text: '', 
            crea: ''}}
          // validate={(values) => handleValidate(values)}
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
              placeholder='Nickname'
              name='nickname'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.nickname}
              errBorder={errors.nickname}
            />
            {errors.nickname && <S.Error>{errors.nickname}</S.Error>}
            <S.Input
              placeholder='Email'
              name='email'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              errBorder={errors.email}
            />
            {errors.email && <S.Error>{errors.email}</S.Error>}
            <S.Input
              placeholder='Password'
              type='password'
              name='password'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              errBorder={errors.password}
            />
            {errors.password && <S.Error>{errors.password}</S.Error>}
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