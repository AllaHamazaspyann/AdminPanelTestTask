import FetchApi from '../../../helpers/fetchAPI';

export const createUser = (values) => async dispatch => {
  try{
    await FetchApi.post('http://localhost:4000/register', {
      email: values.email,
      password: values.password,
      nickname: values.nickname,
    });
    dispatch({
      type: "USER_CREDENTIALS_EMAIL",
      email: values.email,
      password: values.password,
    })
  }catch(e){
    console.log(e);
  }
}
