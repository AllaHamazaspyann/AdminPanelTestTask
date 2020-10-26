import FetchApi from '../../../helpers/fetchAPI';

export const createUser = (values) => async dispatch => {
  try{
    const response = await FetchApi.post('http://localhost:4000/register', {
      email: values.email,
      password: values.password,
      nickname: values.nickname,
    });
    dispatch({
      type: "EMAIL_REGISTER",
      email: values.email,
    })
  }catch(e){
    console.log(e);
  }
}
