import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { createUser } from './actions';
import * as S from './Registration.styles';
import { validator } from '../../../helpers/validator';

export const Registration = (props) => {
  const dispatch = useDispatch();

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
    dispatch(createUser(values));
    const { history } = props;
    history.push('/profile');
  }

  return(
    <S.Contained>
      <h2>Registration</h2>
      <S.Form
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={{email: '', password: '', nickname: ''}}
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
            <S.SignIn
              value='Sign In'
              type='submit' 
            />
            Already registered? <Link to='/login'>Sign in</Link>
          </S.SimpleForm>
        )}
      </S.Form>
    </S.Contained> 
  )
}

