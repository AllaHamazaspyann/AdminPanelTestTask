import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import * as S from './Profile.styles';
import { editCredentials, getUserInfo } from './actions';
import { validator } from '../../../helpers/validator';

export const Profile = (props) => {
  const dispatch = useDispatch();

  const userEmail = useSelector(state => state.profile);
  const profileState = useSelector(state => state.profile);
  const fetchUser = (arg) => dispatch(getUserInfo(arg));

  console.log('profileState :', profileState)

  useEffect(() => {  
    fetchUser(userEmail);
  },[userEmail])

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
    dispatch(editCredentials(values));
    const { history } = props;
    history.push('/profile');
  }



  return (
    <S.Container>
      <S.Item>
        <h2>Credentials</h2>
        {/* <S.Input value={userCreedentials.email} readOnly/>
        <S.Input value={userCreedentials.password} onChange={ () => {console.log('hey')}}/>
        <S.Input value={userCreedentials.nickname} onChange={ () => {console.log('hey')}}/> */}

      {profileState && <S.Form
          validateOnChange={false}
          validateOnBlur={false}
          initialValues={{
            email: profileState.user.email, 
            password: profileState.user.password, 
            nickname: profileState.user.nickname}}
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
              <S.Save
                value='Save changes'
                type='submit' 
              />
            </S.SimpleForm>
          )}
        </S.Form>
        }
      </S.Item>
      <S.Item>Blogs</S.Item>
      <S.LogoutBlock to='/login'>
        Log out
      </S.LogoutBlock>
    </S.Container>
  )
}



