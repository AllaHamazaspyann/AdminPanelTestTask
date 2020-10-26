import FetchApi from '../../../helpers/fetchAPI';

export const createUser = (values) => async dispatch => {
  try{
    const response = await FetchApi.post('http://localhost:4000/register', {
      email: values.email,
      password: values.password,
      nickname: values.nickname,
    });
    // console.log('reagistration response', response);
    dispatch({
      type: "USER_CREDENTIALS",
      response,
    })
  }catch(e){
    console.log(e);
  }
}
